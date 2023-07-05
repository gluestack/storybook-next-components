import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';

import StoryData from '../../utils/storybook-to-next';
import { Center } from '@/components';

function generateCombinations(combinations, options, index, combination) {
  if (index === Object.keys(options).length) {
    combinations.push(combination);
    return;
  }

  const optionKey = Object.keys(options)[index];
  const optionValues = options[optionKey].options;

  for (let i = 0; i < optionValues.length; i++) {
    const newCombination = { ...combination };
    newCombination[optionKey] = optionValues[i];
    generateCombinations(combinations, options, index + 1, newCombination);
  }
}

const ExplorePage = ({ slug }: any) => {
  const [_type, component] = slug.split('/');
  const Story = StoryData[component]['story'];
  const StoryArgs = StoryData[component]['meta'];
  const options = StoryArgs.argTypes;
  const combinations = [];

  generateCombinations(combinations, options, 0, {});

  return (
    <Center p='$32'>
      <Story />
    </Center>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseDirPath = process.cwd();
  const tree = DirectoryTree(
    path.join(
      baseDirPath,
      'components/gluestack-ui/example/storybook/src/components'
    )
  );
  const filePaths = getFilePaths(tree);
  let paths: any = [];
  filePaths?.map((filename) => {
    let slug = filename.split('/');
    paths.push({
      params: {
        slug: slug,
      },
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug }: any = context.params;
  return {
    props: {
      slug: slug.join('/'),
    },
  };
};

export default ExplorePage;
