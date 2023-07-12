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

const STATE_PROPERTIES = [
  'isHovered',
  'isPressed',
  'isFocused',
  'isFocusVisible',
  'isDisabled',
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
          {newCombinations.map((props, index) => {
            const dataProp: any = {};
            dataProp['component-name'] = component[0];
            dataProp['action'] = props.action ?? 'primary';
            dataProp['size'] = props.size ?? 'md';
            dataProp['variant'] = props.variant ?? 'solid';

            STATE_PROPERTIES.map((state) => {
              if (props[state]) {
                isStateComponent = true;
                dataProp['state'] = state;
              }
            });

            if (!dataProp['state'] && isStateComponent) {
              dataProp['state'] = 'default';
            }

            return (
              <div key={index} data-component-props={JSON.stringify(dataProp)}>
                <Story {...props} />
              </div>
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
