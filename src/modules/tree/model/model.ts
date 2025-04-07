import { action, atom, withComputed } from '@reatom/framework';
import { flattenTree } from 'react-accessible-treeview';

import { getFullDate } from '@/shared/lib/get-full-date';
import { KeysProperties, Properties, TreeItem } from './types';

const updatePropertyTreeItem = <T>({
  treeItem,
  id,
  prop,
  value,
}: {
  treeItem: TreeItem;
  id: number;
  prop: KeysProperties;
  value: T;
}): TreeItem => {
  if (treeItem.id === id) {
    return {
      ...treeItem,
      name: prop === 'name' ? (value as string) : treeItem.name,
      properties: { ...treeItem.properties, [prop]: value },
    };
  }

  return {
    ...treeItem,
    children: treeItem.children.map(child =>
      updatePropertyTreeItem({
        treeItem: child,
        id,
        prop,
        value,
      })
    ),
  };
};

export const treeAtom = atom<TreeItem>(
  {
    id: 0,
    name: '',
    children: [
      {
        id: 1,
        name: 'src',
        children: [
          {
            id: 2,
            name: 'index.js',
            properties: {
              name: 'index.js',
              size: '50 mb',
              createDate: `${getFullDate(new Date(Date.now()))}`,
              type: 'файл',
            },
            children: [],
          },
          {
            id: 3,
            name: 'styles.css',
            properties: {
              name: 'styles.css',
              size: '50 mb',
              createDate: `${getFullDate(new Date(Date.now()))}`,
              type: 'файл',
            },
            children: [],
          },
        ],
        properties: {
          name: 'src',
          size: '100 mb',
          createDate: `${getFullDate(new Date(Date.now()))}`,
          type: 'папка',
        },
      },
      {
        id: 4,
        name: 'node_modules',
        children: [
          {
            id: 5,
            name: 'react-accessible-treeview',
            children: [
              {
                id: 6,
                name: 'bundle.js',
                properties: {
                  name: 'bundle.js',
                  size: '100 mb',
                  createDate: `${getFullDate(new Date(Date.now()))}`,
                  type: 'файл',
                },
                children: [],
              },
            ],
            properties: {
              name: 'react-accessible-treeview',
              size: '100 mb',
              createDate: `${getFullDate(new Date(Date.now()))}`,
              type: 'папка',
            },
          },
        ],
        properties: {
          name: 'node_modules',
          size: '50 mb',
          createDate: `${getFullDate(new Date(Date.now()))}`,
          type: 'файл',
        },
      },
      {
        id: 7,
        name: '.npmignore',
        properties: {
          name: '.npmignore',
          size: '50 mb',
          createDate: `${getFullDate(new Date(Date.now()))}`,
          type: 'файл',
        },
        children: [],
      },
      {
        id: 8,
        name: 'package.json',
        properties: {
          name: 'package.json',
          size: '50 mb',
          createDate: `${getFullDate(new Date(Date.now()))}`,
          type: 'файл',
        },
        children: [],
      },
      {
        id: 9,
        name: 'webpack.config.js',
        properties: {
          name: 'webpack.config.js',
          size: '50 mb',
          createDate: `${getFullDate(new Date(Date.now()))}`,
          type: 'файл',
        },
        children: [],
      },
    ],
    properties: {} as Properties,
  },
  'treeAtom'
);

export const treeDataAtom = atom<ReturnType<typeof flattenTree>>(
  [],
  'treeDataAtom'
).pipe(
  withComputed((ctx, state) => {
    ctx.spy(treeAtom, () => {
      state = flattenTree(ctx.get(treeAtom));
    });

    return state;
  })
);

export const updatePropertyAction = action(
  (
    ctx,
    {
      id,
      prop,
      value,
    }: {
      id: number;
      prop: KeysProperties;
      value: string | number;
    }
  ) => {
    const state = ctx.get(treeAtom);
    treeAtom(
      ctx,
      updatePropertyTreeItem({
        treeItem: state,
        id,
        prop,
        value,
      })
    );
  },
  'updateProperty'
);

export const setTreeItemAction = action((ctx, treeItem: TreeItem) => {
  treeAtom(ctx, treeItem);
}, 'setTreeItem');
