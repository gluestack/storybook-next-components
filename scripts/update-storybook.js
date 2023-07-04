require('dotenv').config();
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const wrapperTemplate = require('./template/Wrapper')();
const { spawn } = require('child_process');

const storybookClonePath = path.join(__dirname, '..', 'gluestack-ui');

// const authKey = process.env.GITHUB_PERSONAL_TOKEN;

main();

function main() {
  deleteFolderRecursive(storybookClonePath);
  simpleGit().clone(
    // `https://${authKey}@github.com/gluestack/gluestack-ui-pro.git`,
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

function writeWrapperFile() {
  // fs.writeFileSync(
  //   path.join(storybookClonePath, 'example/storybook/src/stories/Wrapper.tsx'),
  //   wrapperTemplate,
  //   'utf-8'
  // );
  // console.log('Wrapper file modified!');

  copyAssetsImages();
  //   doYarn();
}

function copyAssetsImages() {
  let storybookAssetsImagesPath = path.join(
    storybookClonePath,
    'example/storybook/assets/images'
  );
  let nextImagesPath = path.join(__dirname, '..', 'public/images');
  mergeFolders(storybookAssetsImagesPath, nextImagesPath);
}

function doYarn() {
  process.chdir(storybookClonePath);

  const yarnDev = spawn('yarn');

  yarnDev.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  yarnDev.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  yarnDev.on('close', (code) => {
    console.log(`yarn dev process exited with code ${code}`);
  });
}

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for subdirectories
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    // Delete empty folder
    fs.rmdirSync(folderPath);
    // console.log(`Deleted folder: ${folderPath}`);
  }
}

function mergeFolders(sourceFolderPath, destinationFolderPath) {
  if (!fs.existsSync(sourceFolderPath)) {
    console.log('Source Folder does not exist!', sourceFolderPath);
    return;
  }
  if (!fs.existsSync(destinationFolderPath)) {
    fs.mkdirSync(destinationFolderPath);
  }

  const files = fs.readdirSync(sourceFolderPath);
  files.forEach((file) => {
    const sourceFilePath = path.join(sourceFolderPath, file);
    const destinationFilePath = path.join(destinationFolderPath, file);

    const stats = fs.statSync(sourceFilePath);
    if (stats.isDirectory()) {
      mergeFolders(sourceFilePath, destinationFilePath);
    } else {
      fs.copyFileSync(sourceFilePath, destinationFilePath);
    }
  });

  console.log(
    `Merged folders: ${sourceFolderPath} and ${destinationFolderPath}`
  );
}
