import DirectoryTree from 'directory-tree';
import path from 'path';
let filePaths: string[] = [''];

export const getFilePaths = (
  tree: DirectoryTree.DirectoryTree
): string[] | undefined => {
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const parentComponentTree = tree.children[i];
      const componentParent = tree.children[i].name;
      if (parentComponentTree.children) {
        for (let j = 0; j < parentComponentTree.children.length; j++) {
          filePaths.push(
            path.join(componentParent, parentComponentTree.children[j].name)
          );
        }
      }
    }
  }

  return filePaths;
};
