import { useMemo } from 'react';
import { useAction, useAtom } from '@reatom/npm-react';

import { getTreeItem } from '../../tree/model/get-tree-item';
import { treeAtom } from '@/modules/tree';
import {
  closeTabItemAction,
  setTabContentIdAction,
  tabContentIdAtom,
  tabsAtom,
} from './model';

export const useTabList = () => {
  const [treeItem] = useAtom(treeAtom);
  const [tabContentId] = useAtom(tabContentIdAtom);
  const [tabs] = useAtom(tabsAtom);

  const setTabContentId = useAction(setTabContentIdAction);
  const closeTabItem = useAction(closeTabItemAction);

  const tabItems = useMemo(() => {
    return tabs.map(id => getTreeItem(treeItem, id));
  }, [tabs, treeItem]);

  const changeActiveItem = (id: number | null) => {
    setTabContentId(id);
  };

  const closeItem = (id: number) => {
    closeTabItem(id);

    if (id !== tabContentId) {
      return;
    }

    changeActiveItem(null);
  };

  return {
    tabContentId,
    tabItems,
    changeActiveItem,
    closeItem,
  };
};
