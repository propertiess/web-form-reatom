import { TreeItem } from './types';

export const getTreeItem = (
  treeItem: TreeItem,
  id: number
): TreeItem | undefined => {
  if (treeItem.id === id) {
    return treeItem;
  }

  for (const child of treeItem.children) {
    const foundNode = getTreeItem(child, id);
    if (foundNode) {
      return foundNode;
    }
  }
};
