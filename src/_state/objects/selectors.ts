import { selector } from 'recoil';
import { objectsAtom } from './atoms';

export const filteredObjectsAtom = selector({
  key: 'filteredObjects',
  get: ({ get }) => {
    let objects = get(objectsAtom);
    return objects
  },
});
