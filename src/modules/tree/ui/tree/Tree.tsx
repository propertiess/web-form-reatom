import { clsx } from 'clsx';
import TreeView from 'react-accessible-treeview';

import { Expand } from '../expand/Expand';

import { useTree } from '../../model/use-tree';

import styles from './Tree.module.css';

export const Tree = () => {
  const { treeData, tabContentId, onClickHandler } = useTree();

  return (
    <TreeView
      data={treeData}
      className={styles.wrapper}
      aria-label='tree'
      nodeRenderer={({
        element,
        getNodeProps,
        level,
        isBranch,
        isExpanded,
      }) => (
        <div
          className={clsx(
            element.children.length && styles.folder,
            styles.item,
            element.id === tabContentId ? styles.active : styles.unactive,
            getNodeProps().className
          )}
          onClick={e => {
            getNodeProps().onClick(e);
            onClickHandler(element);
          }}
          style={{ paddingLeft: 20 * level }}
        >
          {element.name}
          <Expand isBranch={isBranch} isExpanded={isExpanded} />
        </div>
      )}
    />
  );
};
