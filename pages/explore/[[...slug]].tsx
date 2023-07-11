import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';
import React from 'react';
import StoryData from '../../storybook-components-to-next.config';
import { Center, VStack } from '@/components';

interface Option {
  control: string;
  options: string[];
  description: string;
  table: {
    defaultValue: {
      summary: string;
    };
  };
}

interface Options {
  [key: string]: Option;
}

interface Combination {
  [key: string]: string;
}

function generateCombinations(
  combinations: Combination[],
  options: Options,
  index: number,
  combination: Combination
) {
  if (index === Object.keys(options).length) {
    combinations.push(combination);
    return;
  }

  const optionKey = Object.keys(options)[index];
  const optionValues = options[optionKey].options;

  if (optionValues && optionValues.length > 0) {
    for (let i = 0; i < optionValues.length; i++) {
      const newCombination: Combination = { ...combination };
      newCombination[optionKey] = optionValues[i];
      generateCombinations(combinations, options, index + 1, newCombination);
    }
  }
}

interface ExplorePageProps {
  slug: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ slug }) => {
  if (slug === '') {
    return <div>Hello</div>;
  }
  const component = slug;
  if (!StoryData[component]) {
    return <div>Hello</div>;
  }
  const Story = StoryData[component]['story'];
  const StoryArgs = StoryData[component]['meta'];
  const options: Options = StoryArgs.argTypes;
  const combinations: Combination[] = [];

  if (options) {
    generateCombinations(combinations, options, 0, {});
  }

  // const dataProp = [
  // 'state',
  // 'action',
  // 'size',
  // 'type',
  // 'component-name',
  // 'instance',
  // 'instance-name',
  // ];

  return (
    <Center p='$4'>
      {combinations.length === 0 && <Story />}
      {combinations.length > 0 && (
        <VStack p='$4' space='xl'>
          {combinations.map((props, index) => {
            if (component[0] === 'Button') {
              return (
                <div
                  key={index}
                  data-component-props={JSON.stringify({
                    'component-name': 'Button',
                    action: props.action,
                    variant: props.variant,
                    size: props.size,
                  })}
                >
                  <Story {...props} />
                </div>
              );
            } else {
              return <Story key={index} {...props} />;
            }
          })}
        </VStack>
      )}
    </Center>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseDirPath = process.cwd();
  const tree = DirectoryTree(path.join(baseDirPath, 'components/stories'));
  const filePaths = getFilePaths(tree);
  const paths: { params: { slug: string[] } }[] = [];
  filePaths?.map((filename) => {
    let slug = filename;
    paths.push({
      params: {
        slug: [slug],
      },
    });
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ExplorePageProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };
  return {
    props: {
      slug: slug ? slug : '',
    },
  };
};

export default ExplorePage;
