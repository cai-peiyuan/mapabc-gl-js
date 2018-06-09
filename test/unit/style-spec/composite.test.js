import { test } from 'mapabc-gl-js-test';
import composite from '../../../src/style-spec/composite';

test('composites Mapbox vector sources', (t) => {
    const result = composite({
        "version": 7,
        "sources": {
            "mapabc-a": {
                "type": "vector",
                "url": "mapabc://a"
            },
            "mapabc-b": {
                "type": "vector",
                "url": "mapabc://b"
            }
        },
        "layers": [{
            "id": "a",
            "type": "line",
            "source": "mapabc-a"
        }, {
            "id": "b",
            "type": "line",
            "source": "mapabc-b"
        }]
    });

    t.deepEqual(result.sources, {
        "a,b": {
            "type": "vector",
            "url": "mapabc://a,b"
        }
    });

    t.equal(result.layers[0].source, "a,b");
    t.equal(result.layers[1].source, "a,b");
    t.end();
});

test('does not composite vector + raster', (t) => {
    const result = composite({
        "version": 7,
        "sources": {
            "a": {
                "type": "vector",
                "url": "mapabc://a"
            },
            "b": {
                "type": "raster",
                "url": "mapabc://b"
            }
        },
        "layers": []
    });

    t.deepEqual(Object.keys(result.sources), ["a", "b"]);
    t.end();
});

test('incorrect url match', (t) => {
    const result = composite({
        "version": 7,
        "sources": {
            "a": {
                "type": "vector",
                "url": "mapabc://a"
            },
            "b": {
                "type": "vector",
                "url": ""
            }
        },
        "layers": []
    });

    t.deepEqual(Object.keys(result.sources), ["a", "b"]);
    t.end();
});

test('composites Mapbox vector sources with conflicting source layer names', (t) => {
    t.throws(() => {
        composite({
            "version": 7,
            "sources": {
                "mapabc-a": {
                    "type": "vector",
                    "url": "mapabc://a"
                },
                "mapabc-b": {
                    "type": "vector",
                    "url": "mapabc://b"
                }
            },
            "layers": [{
                "id": "a",
                "type": "line",
                "source-layer": "sourcelayer",
                "source": "mapabc-a"
            }, {
                "id": "b",
                "type": "line",
                "source-layer": "sourcelayer",
                "source": "mapabc-b"
            }]
        });
    }, /Conflicting source layer names/, 'throws error on conflicting source layer names');

    t.end();
});
