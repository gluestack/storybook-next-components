const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');

const storybookClonePath = path.join(__dirname, '..', 'gluestack-ui');

main();

function main() {
  deleteFolderRecursive(storybookClonePath);
  simpleGit().clone(
    'git@github.com:gluestack/gluestack-ui.git',
    storybookClonePath,
    (error, result) => {
      if (error) {
        console.error('Failed to clone repository:', error);
      } else {
        console.log('Repository cloned successfully:', result);

        copyFolder(
          path.join(storybookClonePath, 'example/storybook/src/components'),
          path.join(__dirname, '..', 'components')
        );
        copyFolder(
          path.join(storybookClonePath, 'example/storybook/src/ui-components'),
          path.join(__dirname, '..', 'components')
        );
        deleteFolderRecursive(storybookClonePath);
      }
    }
  );
}

function copyFolder(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const files = fs.readdirSync(source);
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destinationPath = path.join(destination, file);
    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolder(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, _index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}
