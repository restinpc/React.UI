
import {pathRewrite} from '../utils/helpers';

export const devServerProxyConfig = {
    '/ping': {
        target: `http://api.loadest.io`,
        pathRewrite: pathRewrite('^/someurl/test', '/ping'),
        changeOrigin: false,
        secure: false,
    }
};
