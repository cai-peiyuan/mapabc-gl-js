import {version} from '../../package.json';
import {prefixUrl} from '@mapabc/batfish/modules/prefix-url';

function url(ext, options) {
    if (options && options.local && process.env.DEPLOY_ENV === 'local') {
        return prefixUrl(`/dist/mapabc-gl.${ext}`);
    } else {
        return `https://api.tiles.mapabc.com/mapabc-gl-js/v${version}/mapabc-gl.${ext}`;
    }
}

function js(options) {
    return url('js', options);
}

function css(options) {
    return url('css', options);
}

export default {js, css};
