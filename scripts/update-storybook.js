require('dotenv').config();
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
        writeWrapperFile();
      }
    }
  );
}

// function writeWrapperFile() {
//   copyAssetsImages();
// }

// function copyAssetsImages() {
//   let storybookAssetsImagesPath = path.join(
//     storybookClonePath,
//     'example/storybook/assets/images'
//   );
//   let nextImagesPath = path.join(__dirname, '..', 'public/images');
//   mergeFolders(storybookAssetsImagesPath, nextImagesPath);
// }

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

// function mergeFolders(sourceFolderPath, destinationFolderPath) {
//   if (!fs.existsSync(sourceFolderPath)) {
//     console.log('Source Folder does not exist!', sourceFolderPath);
//     return;
//   }
//   if (!fs.existsSync(destinationFolderPath)) {
//     fs.mkdirSync(destinationFolderPath);
//   }

//   const files = fs.readdirSync(sourceFolderPath);
//   files.forEach((file) => {
//     const sourceFilePath = path.join(sourceFolderPath, file);
//     const destinationFilePath = path.join(destinationFolderPath, file);

//     const stats = fs.statSync(sourceFilePath);
//     if (stats.isDirectory()) {
//       mergeFolders(sourceFilePath, destinationFilePath);
//     } else {
//       fs.copyFileSync(sourceFilePath, destinationFilePath);
//     }
//   });

//   console.log(
//     `Merged folders: ${sourceFolderPath} and ${destinationFolderPath}`
//   );
// }
