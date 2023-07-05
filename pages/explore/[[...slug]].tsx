import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';

import StoryData from '../../utils/storybook-to-next';
import { Center, HStack, VStack } from '@/components';

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

  for (let i = 0; i < optionValues.length; i++) {
    const newCombination: Combination = { ...combination };
    newCombination[optionKey] = optionValues[i];
    generateCombinations(combinations, options, index + 1, newCombination);
  }
}

interface ExplorePageProps {
  slug: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ slug }) => {
  const [_type, component] = slug.split('/');
  const Story = StoryData[component]['story'];
  const StoryArgs = StoryData[component]['meta'];
  const options: Options = StoryArgs.argTypes;
  const combinations: Combination[] = [];

  generateCombinations(combinations, options, 0, {});

  const convertedObject: any = combinations.reduce(
    (acc: any, combination: any) => {
      const { size, action, variant } = combination;

      if (!acc[size]) {
        acc[size] = {};
      }

      if (!acc[size][action]) {
        acc[size][action] = [];
      }

      acc[size][action].push(variant);

      return acc;
    },
    {}
  );

  return (
    <Center p='$4'>
      <VStack p='$4' space='lg'>
        {Object.keys(convertedObject).map((size) => (
          <HStack
            justifyContent='flex-start'
            alignItems='flex-start'
            p='$4'
            space='lg'
            key={size}
          >
            {Object.keys(convertedObject[size]).map((action) => (
              <VStack p='$4' space='lg' key={action}>
                {convertedObject[size][action].map((variant: string) => (
                  <Story
                    action={action}
                    variant={variant}
                    size={size}
                    key={`${size}-${action}-${variant}`}
                  />
                ))}
              </VStack>
            ))}
          </HStack>
        ))}
      </VStack>
    </Center>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseDirPath = process.cwd();
  const tree = DirectoryTree(
    path.join(baseDirPath, 'components/src/components')
  );
  const filePaths = getFilePaths(tree);
  const paths: { params: { slug: string[] } }[] = [];
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

export const getStaticProps: GetStaticProps<ExplorePageProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string[] };
  return {
    props: {
      slug: slug.join('/'),
    },
  };
};

export default ExplorePage;
