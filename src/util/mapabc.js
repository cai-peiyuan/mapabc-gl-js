// @flow

import config from './config';

import browser from './browser';

const help = 'See http://www.mapabc.com/api-documentation/#access-tokens';

type UrlObject = {|
    protocol: string,
    authority: string,
    path: string,
    params: Array<string>
|};

function makeAPIURL(urlObject: UrlObject, accessToken: string | null | void): string {
    const apiUrlObject = parseUrl(config.API_URL);
    urlObject.protocol = apiUrlObject.protocol;
    urlObject.authority = apiUrlObject.authority;

    if (apiUrlObject.path !== '/') {
        urlObject.path = `${apiUrlObject.path}${urlObject.path}`;
    }

    if (!config.REQUIRE_ACCESS_TOKEN) return formatUrl(urlObject);

    accessToken = accessToken || config.ACCESS_TOKEN;
    if (!accessToken)
        throw new Error(`An API access token is required to use Mapbox GL. ${help}`);
    if (accessToken[0] === 's')
        throw new Error(`Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). ${help}`);

    urlObject.params.push(`ak=${accessToken}`);
    return formatUrl(urlObject);
}

function makeFontAPIURL(urlObject: UrlObject, accessToken: string | null | void): string {
    var index = Math.floor((Math.random()*config.FONT_URL.length)); 
    var url = config.FONT_URL[index];
    const apiUrlObject = parseUrl(url);
    urlObject.protocol = apiUrlObject.protocol;
    urlObject.authority = apiUrlObject.authority;

    if (apiUrlObject.path !== '/') {
        urlObject.path = `${apiUrlObject.path}${urlObject.path}`;
    }

    if (!config.REQUIRE_ACCESS_TOKEN) return formatUrl(urlObject);

    accessToken = accessToken || config.ACCESS_TOKEN;
    if (!accessToken)
        throw new Error(`An API access token is required to use Mapbox GL. ${help}`);
    if (accessToken[0] === 's')
        throw new Error(`Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). ${help}`);

    urlObject.params.push(`ak=${accessToken}`);
    return formatUrl(urlObject);
}

function isMapboxURL(url: string) {
    return url.indexOf('mapabc:') === 0;
}

export { isMapboxURL };

export const normalizeStyleURL = function(url: string, accessToken?: string): string {
    if (!isMapboxURL(url)) return url;
    const urlObject = parseUrl(url);
	
	//orginal style url
    //urlObject.path = `/styles/v1${urlObject.path}`;
	
	/**
		modify download style json file url for msp
		author : py.cai
		date : 2018-08-27
	*/
	urlObject.path = urlObject.path.replace(/\//g,"");
	urlObject.params.push(`n=${urlObject.path}`);
	urlObject.path = `/webglapi/styles`;
	
	
    return makeAPIURL(urlObject, accessToken);
};

export const normalizeGlyphsURL = function(url: string, accessToken?: string): string {
    if (!isMapboxURL(url)) return url;
    const urlObject = parseUrl(url);
	
	//orginal font url
    //urlObject.path = `/fonts/v1${urlObject.path}`;
	
	/** 
		modify download font range file for msp 
		author : py.cai
		date : 2018-08-27
	*/

	urlObject.path = `/webglapi/fonts`;
    urlObject.params.push('n={fontstack}');
    urlObject.params.push('r={range}');

	
	return makeFontAPIURL(urlObject, accessToken);
};

export const normalizeSourceURL = function(url: string, accessToken?: string): string {
    if (!isMapboxURL(url)) return url;
    const urlObject = parseUrl(url);
    urlObject.path = `/v4/${urlObject.authority}.json`;
    // TileJSON requests need a secure flag appended to their URLs so
    // that the server knows to send SSL-ified resource references.
    urlObject.params.push('secure');
    return makeAPIURL(urlObject, accessToken);
};

export const normalizeSpriteURL = function(url: string, format: string, extension: string, accessToken?: string): string {
    const urlObject = parseUrl(url);
    if (!isMapboxURL(url)) {
        urlObject.path += `${format}${extension}`;
        return formatUrl(urlObject);
    }
	// orginal sprite download url
    //urlObject.path = `/sprite/v1${urlObject.path}${format}${extension}`;
	
	/**
	modify sprite file url for msp
	**/
	urlObject.path = urlObject.path.replace(/\//g,"");
	extension = extension.replace(/\./g,"");
	
	
	urlObject.params.push(`n=${urlObject.path}${format}`);
    urlObject.params.push(`e=${extension}`);
	urlObject.path = `/webglapi/sprite`;
	
    return makeAPIURL(urlObject, accessToken);
};

const imageExtensionRe = /(\.(png|jpg)\d*)(?=$)/;

export const normalizeTileURL = function(tileURL: string, sourceURL?: ?string, tileSize?: ?number): string {
    if (!sourceURL || !isMapboxURL(sourceURL)) return tileURL;

    const urlObject = parseUrl(tileURL);

    // The v4 mapabc tile API supports 512x512 image tiles only when @2x
    // is appended to the tile URL. If `tileSize: 512` is specified for
    // a Mapbox raster source force the @2x suffix even if a non hidpi device.
    const suffix = browser.devicePixelRatio >= 2 || tileSize === 512 ? '@2x' : '';
    const extension = browser.supportsWebp ? '.webp' : '$1';
    urlObject.path = urlObject.path.replace(imageExtensionRe, `${suffix}${extension}`);

    replaceTempAccessToken(urlObject.params);
    return formatUrl(urlObject);
};

function replaceTempAccessToken(params: Array<string>) {
    for (let i = 0; i < params.length; i++) {
        if (params[i].indexOf('access_token=tk.') === 0) {
            params[i] = `access_token=${config.ACCESS_TOKEN || ''}`;
        }
    }
}

const urlRe = /^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;

function parseUrl(url: string): UrlObject {
    const parts = url.match(urlRe);
    if (!parts) {
        throw new Error('Unable to parse URL object');
    }
    return {
        protocol: parts[1],
        authority: parts[2],
        path: parts[3] || '/',
        params: parts[4] ? parts[4].split('&') : []
    };
}

function formatUrl(obj: UrlObject): string {
    const params = obj.params.length ? `?${obj.params.join('&')}` : '';
    return `${obj.protocol}://${obj.authority}${obj.path}${params}`;
}
