import { selector } from 'recoil';
import { actionsAtom } from './atoms';

export const filteredActionsAtom = selector({
  key: 'filteredActions',
  get: ({ get }) => {
    let actions = get(actionsAtom);
    return actions
  },
});
