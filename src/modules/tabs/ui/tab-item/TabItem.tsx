import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { TreeItem } from '@/modules/tree';

import styles from './TabItem.module.css';

type Props = {
  item: TreeItem;
  activeItemId: number;
  changeActiveItem: (id: number) => void;
  closeItem: (id: number) => void;
};

export const TabItem = ({
  item,
  activeItemId,
  changeActiveItem,
  closeItem,
}: Props) => {
  const onClickHandler = () => {
    if (activeItemId === item.id) {
      return;
    }

    changeActiveItem(item.id);
  };

  return (
    <li
      className={clsx(
        styles.li,
        item.id === activeItemId ? styles.active : styles.unactive
      )}
      onClick={onClickHandler}
    >
      <span className={styles.truncate}>{item.name}</span>
      <XMarkIcon
        className={styles.icon}
        onClick={e => {
          e.stopPropagation();
          closeItem(item.id);
        }}
      />
    </li>
  );
};
