import { useState, useRef, ChangeEvent } from 'react';
import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

import { Input } from '@/shared/components/input/Input';

import { useTurn } from '@/shared/hooks/use-turn';

import styles from './PropertyItem.module.css';

type Props = {
  initialValue: string;
  onFixedChange: (value: string) => void;
};

export const PropertyItem = ({ initialValue, onFixedChange }: Props) => {
  const [value, setValue] = useState(initialValue);

  const {
    value: isEditingPropertyValue,
    on: onEditing,
    off: offEditing,
  } = useTurn(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeLocalProperty = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFixedChangeProperty = () => {
    if (!value.trim()) {
      return;
    }

    if (value === initialValue) {
      offEditing();
      return;
    }

    offEditing();
    onFixedChange(value);
  };

  const revertEditing = () => {
    offEditing();
    setValue(initialValue);
  };

  const onEditingPropertyValue = () => {
    onEditing();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <>
      {isEditingPropertyValue ? (
        <>
          <Input
            value={value}
            onChange={changeLocalProperty}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleFixedChangeProperty();
              }
            }}
            ref={inputRef}
          />
          <div className='flex gap-3'>
            <CheckIcon
              className={styles.icon}
              onClick={handleFixedChangeProperty}
            />
            <XMarkIcon className={styles.icon} onClick={revertEditing} />
          </div>
        </>
      ) : (
        <div className='flex gap-3'>
          <p>{value}</p>
          <PencilSquareIcon
            className={styles.icon}
            onClick={onEditingPropertyValue}
          />
        </div>
      )}
    </>
  );
};
