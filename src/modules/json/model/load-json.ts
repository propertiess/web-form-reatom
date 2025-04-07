import { TreeItem } from '@/modules/tree';

export const loadJSON = async (file: File): Promise<TreeItem> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        resolve(jsonData);
      } catch (e) {
        reject(e);
      }
    };

    fileReader.onerror = e => {
      reject(e);
    };

    fileReader.readAsText(file);
  });
};
