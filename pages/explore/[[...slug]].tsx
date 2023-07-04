import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import DirectoryTree from 'directory-tree';
import { getFilePaths } from '../../utils';
import fs from 'fs';

const ExplorePage = ({ slug }: any) => {
  return <div>Slug: {slug}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const baseDirPath = process.cwd();
  const tree = DirectoryTree(
    path.join(baseDirPath, 'gluestack-ui/example/storybook/src/components')
  );
  const filePaths = getFilePaths(tree);
  let paths: any = [];

  filePaths?.map((filename) => {
    let slug = filename.split('/');

    paths.push({
      params: {
        slug: slug,
      },
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug }: any = context.params;
  const [type, component] = slug;
  const baseDirPath = process.cwd();
  const storybookPath = path.join(
    baseDirPath,
    'gluestack-ui/example/storybook/src/components',
    type,
    component
  );

  const buttonMeta = readAndExtractButtonMeta(
    path.join(storybookPath, `${component}.stories.tsx`)
  );

  return {
    props: {
      slug: slug.join('/'),
    },
  };
};

function readAndExtractButtonMeta(filePath: string) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(fileContent);
    return {};
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

export default ExplorePage;
