const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");

// GLUESTACK-UI -----
// const BRANCH = 'patch';
// const GITHUB_REPO_URL = 'git@github.com:gluestack/gluestack-ui.git';
// const STORIES_SOURCE_PATH = 'example/storybook/src/components';
// const STORIES_TARGET_PATH = 'components/stories';

// GLUESTACK STARTER PLUS -----
// const BRANCH = 'startup-plus-main';
// const GITHUB_REPO_URL = 'git@github.com:gluestack/gluestack-ui-pro.git';
// const STORIES_SOURCE_PATH = 'src/stories/StartupPlus';
// const STORIES_TARGET_PATH = 'storybooks/StartupPlus/';

const BRANCH = "feat/new";
const GITHUB_REPO_URL =
  "git@github.com:gluestack/gluestack-ui-pro-components.git";
const STORIES_SOURCE_PATH = "src/stories/";
const STORIES_TARGET_PATH = "storybooks/GluestackUiPro/";

const storybookClonePath = path.join(__dirname, "..", "gluestack");

main();

async function main() {
  const targetBranch = BRANCH; // Set the target branch you want to switch to

  deleteFolderRecursive(storybookClonePath);

  // Clone the repository
  simpleGit().clone(
    GITHUB_REPO_URL,
    storybookClonePath,
    async (error, result) => {
      if (error) {
        console.error("Failed to clone repository:", error);
      } else {
        console.log("Repository cloned successfully:", result);

        // Switch to the target branch
        try {
          await switchBranch(storybookClonePath, targetBranch);

          // Proceed with copying the folders
          copyFolder(
            path.join(storybookClonePath, STORIES_SOURCE_PATH),
            path.join(__dirname, "..", STORIES_TARGET_PATH)
          );
        } catch (switchError) {
          console.error("Failed to switch to the target branch:", switchError);
        } finally {
          // Clean up by deleting the cloned repository
          deleteFolderRecursive(storybookClonePath);
        }
      }
    }
  );
}

// Function to switch to the target git branch
async function switchBranch(repoPath, targetBranch) {
  return new Promise((resolve, reject) => {
    const repo = simpleGit(repoPath);
    repo.checkout(targetBranch, (error, result) => {
      if (error) {
        reject(error);
      } else {
        console.log("Switched to branch:", targetBranch);
        resolve(result);
      }
    });
  });
}

function copyFolder(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true }); // Create the destination folder recursively
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
