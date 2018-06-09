// @flow

type Config = {|
  API_URL: string,
  REQUIRE_ACCESS_TOKEN: boolean,
  ACCESS_TOKEN: ?string
|};

const config: Config = {
    API_URL: 'http://mapabc0.pinganzhongsheng.com:6060/mapserver',
    REQUIRE_ACCESS_TOKEN: true,
    ACCESS_TOKEN: null,
    FONT_DOMAINS : [
    	'http://mapabc0.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc1.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc2.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc3.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc4.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc5.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc6.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc7.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc8.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc9.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc19.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc10.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc11.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc12.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc13.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc14.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc15.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc16.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc17.pinganzhongsheng.com:6060/mapserver',
    	'http://mapabc18.pinganzhongsheng.com:6060/mapserver'
    ]

};

export default config;
