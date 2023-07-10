const { execSync } = require('child_process');
const path = require('path');
const simpleGit = require('simple-git');

require('dotenv').config();

function pushToGithub() {
  console.log('Pushing Branch');
  execSync(`git push`);
}

function commit() {
  // Set the author information for the commit
  const author = {
    name: 'gluestackadmin',
    email: 'dev@gluestack.io',
  };

  // Set the commit message
  const commitMessage = 'fix: storybook update';

  // Set the authorization key
  const authKey = process.env.GITHUB_PERSONAL_TOKEN;

  // Create a simple-git instance and set the remote URL
  const git = simpleGit({
    baseDir: path.join(__dirname, '..'),
    remote: `https://${authKey}@github.com/gluestack/storybook-next-components.git`,
  });

  // Stage the changes
  git
    .add('.')
    .then(() => {
      // Commit the changes with the author and commit message
      return git.commit(commitMessage, null, {
        '--author': `${author.name} <${author.email}>`,
      });
    })
    .then(() => {
      console.log('Changes committed successfully.');
      pushToGithub();
    })
    .catch((error) => {
      console.error('Error committing changes:', error);
    });
}

commit();
