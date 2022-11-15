export { useFetchWrapper };


function useFetchWrapper() {
    return {
        getActions: requestActions('GET'),
        getObjects: requestObjects('GET'),
    };

    function requestActions(method: string) {
        const jsonHeaders = new Headers()
        jsonHeaders.append('Content-Type', 'application/json;charset=UTF-8')
        jsonHeaders.append('Accept', 'application/json');
        return (url: string) => {
            const requestOptions: RequestInit = {
                method: method,
                headers: jsonHeaders,
            };
            return fetch(url, requestOptions).then(handleResponseActions).catch((e: any) => { return { val: [], error: 'error' } });
        }
    }

    function handleResponseActions(response: any) {
        return response.text().then((text: any) => {
            const data = text && JSON.parse(text);

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            const grouppedTargets = new Map<string, [any]>();
            function add(key: string, item: any) {
                if (grouppedTargets.has(key)) {
                    grouppedTargets.get(key)?.push(item)
                } else {
                    grouppedTargets.set(key, [item]);
                }
            }
            data.targets.map((target: any) => add(target.scrapePool, target))

            const res: any = [];
            grouppedTargets.forEach(function (value, key) {
                const healthCnt = value.filter(v => v.health === 'up').length
                res.push({ name: key, cnt: value.length, healthCnt: healthCnt, items: value })
            })

            return { val: res, error: null };
        });
    }

    function requestObjects(method: string) {
        const jsonHeaders = new Headers()
        jsonHeaders.append('Content-Type', 'application/json;charset=UTF-8')
        jsonHeaders.append('Accept', 'application/json');
        return (url: string) => {
            const requestOptions: RequestInit = {
                method: method,
                headers: jsonHeaders,
            };

            return fetch(url, requestOptions).then(handleResponseObjects).catch((e: any) => { return { val: [], error: 'error' } });
        }
    }

    function handleResponseObjects(response: any) {
        return response.text().then((text: any) => {
            const data = text && JSON.parse(text);

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return { val: data.grouppedAlerts, error: null };
        });
    }
}
