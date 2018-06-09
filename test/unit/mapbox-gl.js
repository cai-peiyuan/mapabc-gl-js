import { test } from 'mapbox-gl-js-test';
import mapabcgl from '../../src';

test('mapabcgl', (t) => {
    t.test('version', (t) => {
        t.ok(mapabcgl.version);
        t.end();
    });

    t.test('workerCount', (t) => {
        t.ok(typeof mapabcgl.workerCount === 'number');
        t.end();
    });
    t.end();
});
