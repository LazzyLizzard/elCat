export const RELATED = '/shop/elcats';

export const protocol = 'https';
export const HOST = `${protocol}://motosnab.ru`;
export const REQUEST_URL_FICHE = `${HOST}/shop2/elcat.php`;

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

