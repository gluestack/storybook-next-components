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

  // return (
  //   <Center p='$4'>
  //     {combinations.length === 0 && <Story />}
  //     {combinations.length > 0 && (
  //       <VStack p='$4' space='xl'>
  //         {combinations.map((props, index) => {
  //           return <Story key={index} {...props} />;
  //         })}
  //       </VStack>
  //     )}
  //   </Center>
  // );

  return (
    <Center p='$4'>
      {combinations.length === 0 && <Story />}
      {combinations.length > 0 && (
        <VStack p='$4' space='4xl'>
          {combinations.map((props, index) => {
            const dataProp: any = {};
            dataProp['component-name'] = component[0];
            const stateProperties = [
              'isHovered',
              'isPressed',
              'isFocused',
              'isFocusVisible',
              'isDisabled',
            ];
            let state = 'default';
            for (const key in props) {
              // @ts-ignore
              if (stateProperties.includes(key) && props[key] === true) {
                state = key;
              }
            }
            dataProp['state'] = state;
            dataProp['action'] = props.action ?? 'primary';
            dataProp['size'] = props.size ?? 'md';
            dataProp['variant'] = props.variant ?? 'solid';

            return (
              <div data-component-props={JSON.stringify(dataProp)}>
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
