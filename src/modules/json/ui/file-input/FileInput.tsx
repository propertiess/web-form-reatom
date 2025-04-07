import { ChangeEvent, useRef } from 'react';

import { Button } from '@/shared/components/button/Button';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput = ({ onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickFileInput = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type='file'
        accept='.json'
        ref={inputRef}
        hidden
        onChange={onChange}
      />
      <Button onClick={onClickFileInput}>Загрузить JSON файл</Button>
    </>
  );
};
