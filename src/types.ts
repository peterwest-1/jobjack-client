export interface FileFolder {
  name: string;
  path: string;
  isDirectory: boolean;
  link: string;
  size: number;
  extension: string;
  createdAt: string;
  children?: FileFolder[];
}
