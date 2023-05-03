const sendRequest = async (url, options, successCallback, errorCallback) => {
    try {
        const result = await fetch(url, options);
        const status = result.status;

        if (status === 200 || status === 201) {
            const data = await result.json();
    
            successCallback(data);
        } else {
            const error = await result.json();
    
            errorCallback(error);    
        }
    } catch (error) {
        errorCallback(error);
    }
};

// module.exports = { sendRequest };