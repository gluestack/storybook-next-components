const fs = require('fs');
const path = require('path');

const componentsFolderPath = path.join(__dirname, '..', 'components/stories');
const outputFilePath = path.join(
  __dirname,
  '..',
  'storybook-to-next.config.ts'
);

generateConfigFile(componentsFolderPath, outputFilePath);

function generateConfigFile(componentsFolderPath, outputFilePath) {
  const componentTypes = fs.readdirSync(componentsFolderPath);

  let config = {};
  if (componentTypes.length > 0) {
    componentTypes.map((componentType) => {
      const componentTypePath = path.join(componentsFolderPath, componentType);
      const isDirectory = fs.statSync(componentTypePath).isDirectory();

      if (isDirectory) {
        const componentFiles = fs.readdirSync(componentTypePath);
        componentFiles.map((component) => {
          if (config[componentType]) {
            config[componentType].push(component);
          } else {
            config[componentType] = [component];
          }
        });
      }
    });
  }

  const configText = generateConfigText(config);
  fs.writeFileSync(outputFilePath, configText);

  console.log('Generated storybook-to-next.config.ts successfully!');
}

function generateConfigText(config) {
  let configText = '';

  Object.keys(config).forEach((componentType) => {
    config[componentType].map((componentName) => {
      const componentMetaPath = `./components/stories/${componentType}/${componentName}/${componentName}.stories`;
      const componentStoryPath = `./components/stories/${componentType}/${componentName}/${componentName}`;

      configText += `import ${componentName}Meta from '${componentMetaPath}';
import { ${componentName}Story } from '${componentStoryPath}';

`;
    });
  });

  configText += `export default {`;

  Object.keys(config).forEach((componentType) => {
    config[componentType].map((componentName) => {
      configText += `
    ${componentName}: {
        meta: ${componentName}Meta,
        story: ${componentName}Story
    },
  `;
    });
  });

  configText += `} as any`;

  return configText;
}
