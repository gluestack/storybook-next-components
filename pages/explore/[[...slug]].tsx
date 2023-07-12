import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';
import React from 'react';
import StoryData from '../../storybook-components-to-next.config';
import { Center, VStack } from '@/components';
import { getVariantProps } from '@gluestack-style/react/lib/typescript/styled';

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

const STATE_PROPERTIES = [
  'isHovered',
  'isPressed',
  'isFocused',
  'isFocusVisible',
  'isDisabled',
  'isInvalid',
  'isReadonly',
];

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
  const newCombinations: Combination[] = [];

  if (options) {
    const updatedOptions = { ...options };
    STATE_PROPERTIES.map((state) => {
      delete updatedOptions[state];
    });
    generateCombinations(combinations, updatedOptions, 0, {});
  }

  combinations.map((i) => {
    STATE_PROPERTIES.map((state) => {
      if (Object.keys(options).includes(state)) {
        const x: any = { ...i };
        x[state] = true;
        newCombinations.push(x);
      }
    });
    newCombinations.push({ ...i });
  });
  let isStateComponent = false;
  return (
    <Center p='$4'>
      {newCombinations.length === 0 && <Story />}
      {newCombinations.length > 0 && (
        <VStack p='$4' space='4xl'>
          {newCombinations.map((props: any, index) => {
            const dataProp: any = { ...props };
            dataProp['component-name'] = component[0];

            STATE_PROPERTIES.map((state) => {
              if (props[state]) {
                isStateComponent = true;
                dataProp['state'] = state;
                delete dataProp[state];
              }
            });

            if (!dataProp['state'] && isStateComponent) {
              dataProp['state'] = 'default';
            }

            props.dataSet = {
              'component-props': JSON.stringify(dataProp),
            };

            return (
              <Center key={index}>
                <Story {...props} />
              </Center>
            );
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
