import { test } from 'mapabc-gl-js-test';
import * as mapabc from '../../../src/util/mapabc';
import config from '../../../src/util/config';
import browser from '../../../src/util/browser';
import window from '../../../src/util/window';

test("mapabc", (t) => {
    const mapabcSource = 'mapabc://user.map';
    const nonMapboxSource = 'http://www.example.com/tiles.json';
    config.ACCESS_TOKEN = 'key';

    t.test('.normalizeStyleURL', (t) => {
        t.test('returns an API URL with access_token parameter when no query string', (t) => {
            t.equal(mapabc.normalizeStyleURL('mapabc://styles/user/style'), 'https://api.mapabc.com/styles/v1/user/style?access_token=key');
            t.equal(mapabc.normalizeStyleURL('mapabc://styles/user/style/draft'), 'https://api.mapabc.com/styles/v1/user/style/draft?access_token=key');
            t.end();
        });

        t.test('returns an API URL with access_token parameter when query string exists', (t) => {
            t.equal(mapabc.normalizeStyleURL('mapabc://styles/user/style?fresh=true'), 'https://api.mapabc.com/styles/v1/user/style?fresh=true&access_token=key');
            t.equal(mapabc.normalizeStyleURL('mapabc://styles/user/style/draft?fresh=true'), 'https://api.mapabc.com/styles/v1/user/style/draft?fresh=true&access_token=key');
            t.equal(mapabc.normalizeStyleURL('mapabc://styles/foo/bar'), 'https://api.mapabc.com/styles/v1/foo/bar?access_token=key');
            t.end();
        });

        t.test('ignores non-mapabc:// scheme', (t) => {
            t.equal(mapabc.normalizeStyleURL('http://path'), 'http://path');
            t.end();
        });

        t.test('handles custom API_URLs with paths', (t) => {
            const previousUrl = config.API_URL;
            config.API_URL = 'https://test.example.com/api.mapabc.com';
            t.equal(
                mapabc.normalizeStyleURL('mapabc://styles/foo/bar'),
                'https://test.example.com/api.mapabc.com/styles/v1/foo/bar?access_token=key'
            );
            config.API_URL = previousUrl;
            t.end();
        });

        t.end();
    });

    t.test('.normalizeSourceURL', (t) => {
        t.test('returns a v4 URL with access_token parameter', (t) => {
            t.equal(mapabc.normalizeSourceURL(mapabcSource), 'https://api.mapabc.com/v4/user.map.json?secure&access_token=key');
            t.end();
        });

        t.test('uses provided access token', (t) => {
            t.equal(mapabc.normalizeSourceURL(mapabcSource, 'token'), 'https://api.mapabc.com/v4/user.map.json?secure&access_token=token');
            t.end();
        });

        t.test('uses provided query parameters', (t) => {
            t.equal(mapabc.normalizeSourceURL(`${mapabcSource}?foo=bar`, 'token'), 'https://api.mapabc.com/v4/user.map.json?foo=bar&secure&access_token=token');
            t.end();
        });

        t.test('works with composite sources', (t) => {
            t.equal(mapabc.normalizeSourceURL('mapabc://one.a,two.b,three.c'), 'https://api.mapabc.com/v4/one.a,two.b,three.c.json?secure&access_token=key');
            t.end();
        });

        t.test('throws an error if no access token is provided', (t) => {
            config.ACCESS_TOKEN = null;
            t.throws(() => { mapabc.normalizeSourceURL(mapabcSource); }, 'An API access token is required to use Mapbox GL.');
            config.ACCESS_TOKEN = 'key';
            t.end();
        });

        t.test('throws an error if a secret access token is provided', (t) => {
            config.ACCESS_TOKEN = 'sk.abc.123';
            t.throws(() => { mapabc.normalizeSourceURL(mapabcSource); }, 'Use a public access token (pk.*) with Mapbox GL JS.');
            config.ACCESS_TOKEN = 'key';
            t.end();
        });

        t.test('ignores non-mapabc:// scheme', (t) => {
            t.equal(mapabc.normalizeSourceURL('http://path'), 'http://path');
            t.end();
        });

        t.test('handles custom API_URLs with paths', (t) => {
            const previousUrl = config.API_URL;
            config.API_URL = 'https://test.example.com/api.mapabc.com';
            t.equal(
                mapabc.normalizeSourceURL('mapabc://one.a'),
                'https://test.example.com/api.mapabc.com/v4/one.a.json?secure&access_token=key'
            );
            config.API_URL = previousUrl;
            t.end();
        });

        t.end();
    });

    t.test('.normalizeGlyphsURL', (t) => {
        t.test('normalizes mapabc:// URLs when no query string', (t) => {
            t.equal(mapabc.normalizeGlyphsURL('mapabc://fonts/boxmap/{fontstack}/{range}.pbf'), 'https://api.mapabc.com/fonts/v1/boxmap/{fontstack}/{range}.pbf?access_token=key');
            t.end();
        });

        t.test('normalizes mapabc:// URLs when query string exists', (t) => {
            t.equal(mapabc.normalizeGlyphsURL('mapabc://fonts/boxmap/{fontstack}/{range}.pbf?fresh=true'), 'https://api.mapabc.com/fonts/v1/boxmap/{fontstack}/{range}.pbf?fresh=true&access_token=key');
            t.end();
        });

        t.test('ignores non-mapabc:// scheme', (t) => {
            t.equal(mapabc.normalizeGlyphsURL('http://path'), 'http://path');
            t.end();
        });

        t.test('handles custom API_URLs with paths', (t) => {
            const previousUrl = config.API_URL;
            config.API_URL = 'https://test.example.com/api.mapabc.com';
            t.equal(
                mapabc.normalizeGlyphsURL('mapabc://fonts/boxmap/{fontstack}/{range}.pbf'),
                'https://test.example.com/api.mapabc.com/fonts/v1/boxmap/{fontstack}/{range}.pbf?access_token=key'
            );
            config.API_URL = previousUrl;
            t.end();
        });

        t.end();
    });

    t.test('.normalizeSpriteURL', (t) => {
        t.test('normalizes mapabc:// URLs when no query string', (t) => {
            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8', '', '.json'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/sprite.json?access_token=key'
            );

            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8', '@2x', '.png'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/sprite@2x.png?access_token=key'
            );

            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8/draft', '@2x', '.png'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/draft/sprite@2x.png?access_token=key'
            );

            t.end();
        });

        t.test('normalizes mapabc:// URLs when query string exists', (t) => {
            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8?fresh=true', '', '.json'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/sprite.json?fresh=true&access_token=key'
            );

            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8?fresh=false', '@2x', '.png'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/sprite@2x.png?fresh=false&access_token=key'
            );

            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8/draft?fresh=true', '@2x', '.png'),
                'https://api.mapabc.com/styles/v1/mapabc/streets-v8/draft/sprite@2x.png?fresh=true&access_token=key'
            );

            t.end();
        });

        t.test('concantenates path, ratio, and extension for non-mapabc:// scheme', (t) => {
            t.equal(mapabc.normalizeSpriteURL('http://www.foo.com/bar', '@2x', '.png'), 'http://www.foo.com/bar@2x.png');
            t.end();
        });

        t.test('concantenates path, ratio, and extension for file:/// scheme', (t) => {
            t.equal(mapabc.normalizeSpriteURL('file:///path/to/bar', '@2x', '.png'), 'file:///path/to/bar@2x.png');
            t.end();
        });

        t.test('normalizes non-mapabc:// scheme when query string exists', (t) => {
            t.equal(mapabc.normalizeSpriteURL('http://www.foo.com/bar?fresh=true', '@2x', '.png'), 'http://www.foo.com/bar@2x.png?fresh=true');
            t.end();
        });

        t.test('handles custom API_URLs with paths', (t) => {
            const previousUrl = config.API_URL;
            config.API_URL = 'https://test.example.com/api.mapabc.com';
            t.equal(
                mapabc.normalizeSpriteURL('mapabc://sprites/mapabc/streets-v8', '', '.json'),
                'https://test.example.com/api.mapabc.com/styles/v1/mapabc/streets-v8/sprite.json?access_token=key'
            );
            config.API_URL = previousUrl;
            t.end();
        });

        t.end();
    });

    t.test('.normalizeTileURL', (t) => {
        browser.supportsWebp = false;

        t.test('does nothing on 1x devices', (t) => {
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png', mapabcSource), 'http://path.png/tile.png');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png32', mapabcSource), 'http://path.png/tile.png32');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.jpg70', mapabcSource), 'http://path.png/tile.jpg70');
            t.end();
        });

        t.test('inserts @2x on 2x devices', (t) => {
            window.devicePixelRatio = 2;
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png', mapabcSource), 'http://path.png/tile@2x.png');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png32', mapabcSource), 'http://path.png/tile@2x.png32');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.jpg70', mapabcSource), 'http://path.png/tile@2x.jpg70');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png?access_token=foo', mapabcSource), 'http://path.png/tile@2x.png?access_token=foo');
            window.devicePixelRatio = 1;
            t.end();
        });

        t.test('inserts @2x when tileSize == 512', (t) => {
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png', mapabcSource, 512), 'http://path.png/tile@2x.png');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png32', mapabcSource, 512), 'http://path.png/tile@2x.png32');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.jpg70', mapabcSource, 512), 'http://path.png/tile@2x.jpg70');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png?access_token=foo', mapabcSource, 512), 'http://path.png/tile@2x.png?access_token=foo');
            t.end();
        });

        t.test('replaces img extension with webp on supporting devices', (t) => {
            browser.supportsWebp = true;
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png', mapabcSource), 'http://path.png/tile.webp');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png32', mapabcSource), 'http://path.png/tile.webp');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.jpg70', mapabcSource), 'http://path.png/tile.webp');
            t.equal(mapabc.normalizeTileURL('http://path.png/tile.png?access_token=foo', mapabcSource), 'http://path.png/tile.webp?access_token=foo');
            browser.supportsWebp = false;
            t.end();
        });

        t.test('ignores non-mapabc:// sources', (t) => {
            t.equal(mapabc.normalizeTileURL('http://path.png', nonMapboxSource), 'http://path.png');
            t.end();
        });

        t.test('ignores undefined sources', (t) => {
            t.equal(mapabc.normalizeTileURL('http://path.png'), 'http://path.png');
            t.end();
        });

        t.test('replace temp access tokens with the latest token', (t) => {
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?access_token=tk.abc.123', mapabcSource), 'http://example.com/tile.png?access_token=key');
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?foo=bar&access_token=tk.abc.123', mapabcSource), 'http://example.com/tile.png?foo=bar&access_token=key');
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?access_token=tk.abc.123&foo=bar', 'mapabc://user.map'), 'http://example.com/tile.png?access_token=key&foo=bar');
            t.end();
        });

        t.test('does not modify the access token for non-mapabc sources', (t) => {
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?access_token=tk.abc.123', nonMapboxSource), 'http://example.com/tile.png?access_token=tk.abc.123');
            t.end();
        });

        t.test('does not modify the access token for non temp tokens', (t) => {
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?access_token=pk.abc.123', mapabcSource), 'http://example.com/tile.png?access_token=pk.abc.123');
            t.equal(mapabc.normalizeTileURL('http://example.com/tile.png?access_token=tkk.abc.123', mapabcSource), 'http://example.com/tile.png?access_token=tkk.abc.123');
            t.end();
        });

        t.test('throw error on falsy url input', (t) => {
            t.throws(() => {
                mapabc.normalizeTileURL('', mapabcSource);
            }, new Error('Unable to parse URL object'));
            t.end();
        });

        browser.supportsWebp = true;

        t.end();
    });

    t.end();
});
