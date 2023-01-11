export const UberStatusEndpoint = (store_id) => `https://api.uber.com/v1/eats/store/${store_id}/status`;

export const getAuthTokenEndPoint = (callback) => {
    fetch('https://login.uber.com/oauth/v2/token', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        client_id: process.env.uber_api_client_id,
        client_secret: process.env.uber_api_client_secret
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            callback();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export const getUberPOSStatus = () => {
    fetch(UberStatusEndpoint(123), {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
