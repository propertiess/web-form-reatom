import { action, atom } from '@reatom/framework';

export const tabsAtom = atom<number[]>([], 'tabsAtom');

export const addTabItemAction = action((ctx, id: number) => {
  tabsAtom(ctx, prev => [...prev, id]);
}, 'addTabItemAction');

export const closeTabItemAction = action((ctx, id: number) => {
  tabsAtom(ctx, prev => prev.filter(tabId => tabId !== id));
}, 'closeTabItemAction');

export const removeAllTabsAction = action(ctx => {
  tabsAtom(ctx, []);
}, 'removeAllTabsAction');

export const tabContentIdAtom = atom<number | null>(null, 'propertyAtom');

export const setTabContentIdAction = action((ctx, id: number | null) => {
  tabContentIdAtom(ctx, id);
}, 'setTabContentIdAction');
