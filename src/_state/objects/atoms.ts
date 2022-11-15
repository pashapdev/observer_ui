import { atom } from 'recoil';

export const objectsAtom = atom({
    key: 'objects',
    default: { val: [], error: null, pageCount: 0 }
});
