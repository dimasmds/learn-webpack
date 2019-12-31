const fetchApi = url => {
    return fetch(url).then(response => {
        if (response.status !== 200) {
            return Promise.reject(response.status)
        }
        return response.json();
    })
};

export default fetchApi;