// @flow

type Config = {|
  API_URL: string,
  REQUIRE_ACCESS_TOKEN: boolean,
  ACCESS_TOKEN: ?string
|};

const config: Config = {
   // API_URL: 'http://mapabc0.pinganzhongsheng.com:6060/mapserver',
    API_URL: api_config.url,
    REQUIRE_ACCESS_TOKEN: true,
    ACCESS_TOKEN: null,
   // FONT_URL : [ 'http://mapabc0.pinganzhongsheng.com:6060/mapserver' ]
    FONT_URL : api_config.font_url
};

export default config;
