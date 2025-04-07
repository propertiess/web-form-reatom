import { TabItem } from '../tab-item/TabItem';

import { useTabList } from '../../model/use-tab-list';

import styles from './TabList.module.css';

export const TabList = () => {
  const { tabItems, tabContentId, changeActiveItem, closeItem } = useTabList();

  return (
    <div className={styles.wrapper}>
      <nav>
        <div className={styles.list_wrapper}>
          <ul className='absolute flex gap-1 w-full'>
            {tabItems.map(tabItem => (
              <TabItem
                key={tabItem?.id}
                item={tabItem!}
                activeItemId={tabContentId ?? 0}
                changeActiveItem={changeActiveItem}
                closeItem={closeItem}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
