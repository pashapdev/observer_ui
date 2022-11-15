import { atom } from 'recoil';

export const actionsAtom = atom({
    key: 'actions',
    default: { val: [], error: null, pageCount: 0 }
});
