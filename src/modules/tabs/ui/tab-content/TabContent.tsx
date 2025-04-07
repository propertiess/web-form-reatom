import { useAction, useAtom } from '@reatom/npm-react';

import { PropertyItem } from '../property-item/PropertyItem';

import {
  treeAtom,
  KeysProperties,
  updatePropertyAction,
  getTreeItem,
} from '@/modules/tree';
import { tabContentIdAtom } from '../../model/model';

import styles from './TabContent.module.css';

const dictionary = {
  name: 'Имя',
  size: 'Размер',
  createDate: 'Дата создания',
  type: 'Тип',
};

export const TabContent = () => {
  const [treeItem] = useAtom(treeAtom);
  const [tabContentId] = useAtom(tabContentIdAtom);

  const updateProperty = useAction(updatePropertyAction);

  const getProperties = () => {
    const properties = getTreeItem(treeItem, tabContentId ?? -1)?.properties;
    return properties ? Object.entries(properties) : [];
  };

  return (
    <div className={styles.wrapper}>
      {getProperties().map(([objKey, value]) => (
        <div
          className='flex flex-col gap-2'
          key={tabContentId + objKey + value}
        >
          <p>{dictionary[objKey as KeysProperties]}</p>
          <PropertyItem
            key={objKey + value}
            initialValue={value}
            onFixedChange={value =>
              updateProperty({
                id: tabContentId!,
                prop: objKey as KeysProperties,
                value,
              })
            }
          />
        </div>
      ))}
    </div>
  );
};
