export const LOCAL_HTTPS = 'LOCAL_HTTPS';
export const REMOTE_HTTPS = 'REMOTE_HTTPS';

export const ENV = {
    [LOCAL_HTTPS]: {
        protocol: 'https://',
        host: 'localhost'
    },
    [REMOTE_HTTPS]: {
        protocol: 'https://',
        host: 'motosnab.ru'
    }
};
