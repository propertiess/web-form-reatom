import { useAtom } from '@reatom/npm-react';

import { Button } from '@/shared/components/button/Button';

import { treeAtom } from '@/modules/tree/model/model';

export const DownloadJSON = () => {
  const treeItem = useAtom(treeAtom);

  const handleDownload = (fileName: string) => {
    const json = JSON.stringify(treeItem);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return (
    <Button onClick={() => handleDownload('data.json')}>
      Скачать получившийся JSON файл
    </Button>
  );
};
