import { useSetRecoilState } from 'recoil';
import { useFetchWrapper, baseUrl } from '../../_helpers';
import { objectsAtom } from '../../_state/objects';

export { useObjectsAction };

function useObjectsAction() {
    const url = `${baseUrl()}/api/v1/objects`
    const fetchWrapper = useFetchWrapper();
    const setObjects = useSetRecoilState(objectsAtom);

    return {
        getObjects,
    }

    function getObjects() {
        return fetchWrapper.getObjects(url).then(setObjects)
    }
}
