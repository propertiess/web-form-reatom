import { useAction, useAtom } from '@reatom/npm-react';
import { INode } from 'react-accessible-treeview';

import {
  tabContentIdAtom,
  tabsAtom,
  addTabItemAction,
  setTabContentIdAction,
} from '@/modules/tabs';
import { treeDataAtom } from './model';

export const useTree = () => {
  const [tabContentId] = useAtom(tabContentIdAtom);
  const [treeData] = useAtom(treeDataAtom);
  const [tabs] = useAtom(tabsAtom);

  const setTabContentId = useAction(setTabContentIdAction);
  const addTabItem = useAction(addTabItemAction);

  const onClickHandler = (currentTreeItem: INode) => {
    if (tabContentId === currentTreeItem.id) {
      return;
    }

    setTabContentId(+currentTreeItem.id);

    const existTab = tabs.findIndex(itemId => itemId === currentTreeItem.id);

    if (existTab !== -1) {
      return;
    }

    addTabItem(+currentTreeItem.id);
  };

  return {
    treeData,
    tabContentId,
    onClickHandler,
  };
};
