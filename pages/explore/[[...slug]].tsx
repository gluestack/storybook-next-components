import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';
import React from 'react';
import StoryData from '../../storybook-components-to-next.config';
import { Center, VStack, Heading, Box } from '@gluestack-ui/themed';

interface Option {
  control: string;
  options: string[];
  figmaIgnore: boolean;
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
  x;
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
  'isRequired',
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

  if (
    optionValues &&
    optionValues.length > 0 &&
    !options[optionKey].figmaIgnore
  ) {
    for (let i = 0; i < optionValues.length; i++) {
      const newCombination: Combination = { ...combination };

      newCombination[optionKey] = optionValues[i];
      generateCombinations(combinations, options, index + 1, newCombination);
    }
  } else {
    generateCombinations(combinations, options, index + 1, combination);
  }
}

interface ExplorePageProps {
  slug: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ slug }) => {
  if (slug === '') {
    return <div>Slug is empty</div>;
  }

  const component = slug;

  if (!StoryData[component]) {
    return <div>Component not found</div>;
  }

  const Story = StoryData[component]['story'];

  const StoryArgs = StoryData[component]['meta'];
  const options: Options = StoryArgs.argTypes;
  const combinations: Combination[] = [];
  const allCombinations: Combination[] = [];

  if (options) {
    const filteredOptions = { ...options };
    STATE_PROPERTIES.forEach((state) => {
      delete filteredOptions[state];
    });

    generateCombinations(combinations, filteredOptions, 0, {});
  }

  combinations.forEach((combination) => {
    STATE_PROPERTIES.forEach((state) => {
      if (Object.keys(options).includes(state)) {
        const newStateCombination: any = { ...combination };
        newStateCombination[state] = true;
        allCombinations.push(newStateCombination);
      }
    });
    allCombinations.push({ ...combination });
  });

  let isStateComponent = false;

  return (
    <Center p='$4' bg='$white'>
      <Heading
        size='2xl'
        my={50}
        w='60%'
        bg='$yellow300'
        py={16}
        px={32}
        rounded='$md'
        letterSpacing='$xl'
        color='$textLight800'
      >
        {component[0].toUpperCase()}
      </Heading>
      {allCombinations.length === 0 && (
        <Story
          dataSet={{
            'component-props': JSON.stringify({
              'component-name': component[0],
            }),
          }}
        />
      )}
      {allCombinations.length > 0 && (
        <VStack p='$4' space='4xl'>
          {allCombinations.map((props: any, index) => {
            const dataProps: any = { ...props };
            dataProps['component-name'] = component[0];

            STATE_PROPERTIES.forEach((state) => {
              if (props[state]) {
                isStateComponent = true;
                dataProps['state'] = state;
                delete dataProps[state];
              }
            });

            if (!dataProps['state'] && isStateComponent) {
              dataProps['state'] = 'default';
            }

            if (dataProps.uri && dataProps.uri === 'https://broken.link') {
              dataProps.uri = 'BrokenLink';
            } else if (dataProps.uri) {
              dataProps.uri = 'ImageLink';
            }

            if (dataProps.name) {
              dataProps.name = dataProps.name.displayName;
            }

            props.dataSet = {
              'component-props': JSON.stringify(dataProps),
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

  filePaths?.forEach((filename) => {
    const slug = filename;
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
      slug: slug || '',
    },
  };
};

export default ExplorePage;
