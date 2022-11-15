import { useSetRecoilState } from 'recoil';
import { useFetchWrapper, baseUrl } from '../../_helpers';
import { actionsAtom } from '../../_state/actions';

export { useActionsAction };

function useActionsAction() {
    const url = `${baseUrl()}/api/v1/actions`
    const fetchWrapper = useFetchWrapper();
    const setActions = useSetRecoilState(actionsAtom);

    return {
        getActions,
    }

    function getActions() {
        return fetchWrapper.getActions(url).then(setActions)
    }
}
