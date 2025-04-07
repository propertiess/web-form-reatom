import { ChangeEvent } from 'react';

import { useAction } from '@reatom/npm-react';

import { FileInput } from '../file-input/FileInput';

import { loadJSON } from '../../model/load-json';
import { setTreeItemAction } from '@/modules/tree';
import { removeAllTabsAction, setTabContentIdAction } from '@/modules/tabs';

export const LoadJSON = () => {
  const setTreeItem = useAction(setTreeItemAction);
  const removeAllTabs = useAction(removeAllTabsAction);
  const setProperty = useAction(setTabContentIdAction);

  const loadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const data = await loadJSON(e.target.files[0]);
    setTreeItem(data);
    removeAllTabs();
    setProperty(null);
  };

  return <FileInput onChange={loadHandler} />;
};
