import fs from 'fs';
import path from 'path';
import { ItemData } from '../items/items.interface';

const itemsDataPath = path.join(process.cwd(), 'items/items.json');

export function getAllPostIds() {
  const jsonData = fs.readFileSync(itemsDataPath, 'utf-8');
  const data = JSON.parse(jsonData);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return data.map((data: ItemData) => {
    return {
      params: {
        id: data.id,
      },
    };
  });
}

export async function getItemData(id: string) {
  const jsonData = fs.readFileSync(itemsDataPath, 'utf-8');
  const data = JSON.parse(jsonData).filter((d: ItemData) => d.id === String(id))[0];

  return data
}