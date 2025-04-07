export type TreeItem = {
  id: number;
  name: string;
  children: TreeItem[];
  properties: Properties;
};

export type Properties = {
  name: string;
  createDate: string;
  size: string;
  type: string;
};

export type KeysProperties = Exclude<keyof Properties, ''>;
