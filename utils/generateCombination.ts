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

const groupAllSortedCombinations = (allCombinations: Array<any>, key: any) => {
  let allAvailableSize = {} as any;
  if (allCombinations.length) {
    allCombinations.map((item) => {
      if (Array.isArray(key)) {
        if (item[key[0]][key[1]]) {
          allAvailableSize[item[key[0]][key[1]]] = 1;
        }
      } else {
        if (item[key]) {
          allAvailableSize[item[key]] = 1;
        }
      }
    });
  }

  let CombinationsSortedByKeys = {} as any;
  Object.keys(allAvailableSize).map((combinationKey) => {
    CombinationsSortedByKeys[combinationKey] = allCombinations.filter(
      (item) => {
        if (Array.isArray(key)) {
          return item[key[0]][key[1]] === combinationKey;
        } else {
          return item[key] === combinationKey;
        }
      }
    );
  });
  return CombinationsSortedByKeys;
};

export const getAllComponents = (StoryArgs: any) => {
  // Extract Meta info
  let metaInfo = StoryArgs.metaInfo;
  if (!metaInfo) {
    metaInfo = {};
  }
  if (!metaInfo.clusteringOrder) {
    metaInfo.clusteringOrder = ['size', 'variant'];
  }
  if (!metaInfo.componentDescription) {
    metaInfo.componentDescription =
      'This is a component figma-ui-kit for gluestack-ui';
  }

  // Extract Meta info
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
  let clusterOrderSortedCombinations = groupAllSortedCombinations(
    allCombinations,
    metaInfo.clusteringOrder[0]
  );

  if (Object.keys(clusterOrderSortedCombinations).length === 0) {
    clusterOrderSortedCombinations['default'] = allCombinations;
    let variantSortedCombinations = groupAllSortedCombinations(
      clusterOrderSortedCombinations['default'],
      metaInfo.clusteringOrder[1]
    );
    if (Object.keys(variantSortedCombinations).length === 0) {
      clusterOrderSortedCombinations['default'] = {};
      clusterOrderSortedCombinations['default']['default'] = allCombinations;
    } else {
      clusterOrderSortedCombinations['default'] = variantSortedCombinations;
    }
  } else {
    Object.keys(clusterOrderSortedCombinations).forEach((sizeKey) => {
      let variantSortedCombinations = groupAllSortedCombinations(
        clusterOrderSortedCombinations[sizeKey],
        metaInfo.clusteringOrder[1]
      );
      if (Object.keys(variantSortedCombinations).length === 0) {
        let tempSizeCombs = Array.isArray(
          clusterOrderSortedCombinations[sizeKey]
        )
          ? [...clusterOrderSortedCombinations[sizeKey]]
          : { ...clusterOrderSortedCombinations[sizeKey] };
        clusterOrderSortedCombinations[sizeKey] = {};
        clusterOrderSortedCombinations[sizeKey]['default'] = tempSizeCombs;
      } else {
        clusterOrderSortedCombinations[sizeKey] = variantSortedCombinations;
      }
    });
  }

  return {
    allCombinations,
    clusterOrderSortedCombinations,
    isStateComponent,
    state_props: STATE_PROPERTIES,
    metaInfo,
  };
};
