var developStyle={
    "version": 8,
    "name": "mapabc",
    "metadata": {},
    "sources": {
        "local": {
            "mapabc_logo": true,
            "type": "vector",
            "tiles": [
                "http://115.28.212.232:8080/gs/c-{z}-{x}-{y}"
            ]
        },
        "local-h": {
            "type": "vector",
            "tiles": [
                "http://115.28.212.232:8080/gs/h-{z}-{x}-{y}"
            ]
        },
        "traffic": {
            "type": "vector",
            "tiles": [
                "https://192.168.11.248:8433/gt/{z}-{x}-{y}"
            ],
            "minZoom": 0,
            "maxZoom": 14
        },
        "amaptraffic": {
            "type": "vector",
            "tiles": [
                "http://115.28.212.232:8080/gat/{z}-{x}-{y}"
            ],
            "minZoom": 0,
            "maxZoom": 14
        }
    },
    "sprite": "mapabc://sprites/mapabc",
    "glyphs": "mapabc://glyphs/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "filter": [
                "any",
                [
                    "==",
                    "disp_class",
                    0
                ]
            ],
            "paint": {
                "background-color": "#fcf9f2",
                "background-opacity": 1
            }
        },
        {
            "id": "LWOcean",
            "type": "fill",
            "source": "local",
            "source-layer": "wocean",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": 1
            }
        },
        {
            "id": "LWOceanchn",
            "type": "fill",
            "source": "local",
            "source-layer": "ocean_ok",
            "minzoom": 9,
            "maxzoom": 23,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": 1
            }
        },
        {
            "id": "LLand",
            "type": "fill",
            "source": "local",
            "source-layer": "nationregion",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "ad_level",
                    "1"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "Lwgrass",
            "type": "fill",
            "source": "local",
            "source-layer": "wgrass",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all"
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWRiverAreaChn",
            "type": "fill",
            "source": "local",
            "source-layer": "wriver",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": 1
            }
        },
        {
            "id": "LWRiverAreaForeign",
            "type": "fill",
            "source": "local",
            "source-layer": "wriver",
            "minzoom": 1,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "==",
                    "wriver_xz",
                    1
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "Lisland_tw_9",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 8,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    9
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_8",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 7,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    8
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_7",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 6,
            "maxzoom": 7,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    7
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_6",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 5,
            "maxzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    6
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_5",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 4,
            "maxzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_4",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 3,
            "maxzoom": 4,
            "filter": [
                "all",
                [
                    "==",
                    "level",
                    4
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "Lisland_tw_3",
            "type": "fill",
            "metadata": {
                "maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
            },
            "source": "local",
            "source-layer": "island_tw",
            "minzoom": 2,
            "maxzoom": 3,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fcf9f2"
            }
        },
        {
            "id": "LCLandUseArea-w1",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_w1",
            "minzoom": 9,
            "maxzoom": 10,
            "filter": [
                "any",
                [
                    "in",
                    "lua_type",
                    1010,
                    1020,
                    1040,
                    1060
                ],
                [
                    "all",
                    [
                        "==",
                        "lua_type",
                        1030
                    ],
                    [
                        "<=",
                        "disp_class",
                        5
                    ]
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCLandUseArea-w2",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_w1",
            "minzoom": 11,
            "maxzoom": 13,
            "filter": [
                "any",
                [
                    "in",
                    "lua_type",
                    1010,
                    1020,
                    1040,
                    1060
                ],
                [
                    "all",
                    [
                        "==",
                        "lua_type",
                        1030
                    ],
                    [
                        "<=",
                        "disp_class",
                        5
                    ]
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCLandUseArea-w3",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_w1",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "in",
                    "lua_type",
                    1010,
                    1020,
                    1020,
                    1040,
                    1060
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCLandUseArea-w3-2",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_w2",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "lua_type",
                    1000
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCLandUseArea-g1",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_g1",
            "minzoom": 9,
            "maxzoom": 10,
            "filter": [
                "any",
                [
                    "in",
                    "lua_type",
                    2030,
                    2040,
                    2050
                ],
                [
                    "all",
                    [
                        "==",
                        "lua_type",
                        2020
                    ],
                    [
                        "in",
                        "disp_class",
                        1,
                        2
                    ]
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "LCLandUseArea-g2",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_g1",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "lua_type",
                    2020,
                    2030,
                    2040,
                    2050
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含绿地"
            }
        },
        {
            "id": "LCLandUseArea-g3",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea_g2",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "lua_type",
                    2000,
                    2010
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "10级以上城市简易面状背景要素，包含绿地"
            }
        },
        {
            "id": "LCSettlementArea_g",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementarea_1",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                2020
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含绿地"
            }
        },
        {
            "id": "LCSettlementArea_w",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementarea_3",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                1000,
                1090
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCSettlementArea_c",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementarea_1",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                4108,
                4111
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含停车场"
            }
        },
        {
            "id": "LCSettlementArea_x_g",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_1",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                2020
            ],
            "layout": {},
            "paint": {
                "fill-color": "#C8E49D",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含绿地"
            }
        },
        {
            "id": "LCSettlementArea_x_w",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_3",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                1000,
                1090
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含水系"
            }
        },
        {
            "id": "LCSettlementArea_x_c",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_1",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "in",
                "sett_type",
                4108,
                4111
            ],
            "layout": {},
            "paint": {
                "fill-color": "#A3CCFF",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            11,
                            1
                        ]
                    ]
                }
            },
            "metadata": {
                "maputnik:comment": "15级以上城市简易面状背景要素，包含停车场"
            }
        },
        {
            "id": "LCMRT_P",
            "type": "fill",
            "source": "local",
            "source-layer": "mrt_polygon",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": [
                    "get",
                    "u_color"
                ],
                "fill-opacity": 0.3
            },
            "metadata": {
                "maputnik:comment": "地铁面"
            }
        },
        {
            "id": "LWRiver_L_1_1",
            "type": "line",
            "source": "local",
            "source-layer": "wriver_1_1",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "disp_class",
                    0,
                    1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A3CCFF",
                "line-width": 2,
                "line-opacity": 1
            },
            "metadata": {
                "maputnik:comment": "3-9级世界线状水系中国境内"
            }
        },
        {
            "id": "LWRiver_L_1_2",
            "type": "line",
            "source": "local",
            "source-layer": "wriver_1_2",
            "minzoom": 4,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "disp_class",
                    2
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A3CCFF",
                "line-width": 2,
                "line-opacity": 1
            },
            "metadata": {
                "maputnik:comment": "3-9级世界线状水系中国境内"
            }
        },
        {
            "id": "LWRiver_L_2",
            "type": "line",
            "metadata": {
                "maputnik:comment": "3-9级世界线状水系-国外"
            },
            "source": "local",
            "source-layer": "wriver_2",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "==",
                    "disp_class",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A3CCFF"
            }
        },
        {
            "id": "LWOrderline_1_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "国外已定国界-背景"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 4,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    10,
                    11,
                    12
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A9A9A8",
                "line-width": {
                    "stops": [
                        [
                            3,
                            0.4
                        ],
                        [
                            4,
                            0.6
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderline_1",
            "type": "line",
            "metadata": {
                "maputnik:comment": "国外已定国界-前景"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    10,
                    11,
                    12
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A9A9A8",
                "line-width": {
                    "stops": [
                        [
                            2,
                            0.2
                        ],
                        [
                            3,
                            0.2
                        ],
                        [
                            5,
                            0.4
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderline_2",
            "type": "line",
            "metadata": {
                "maputnik:comment": "世界洲界"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    32
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#873F3E",
                "line-width": 0.8,
                "line-dasharray": [
                    10,
                    6
                ]
            }
        },
        {
            "id": "LWOrderline_3",
            "type": "line",
            "metadata": {
                "maputnik:comment": "国外未定国界"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    15
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#9DA4BA",
                "line-width": {
                    "stops": [
                        [
                            3,
                            0.4
                        ],
                        [
                            4,
                            0.6
                        ]
                    ]
                },
                "line-dasharray": [
                    8,
                    6
                ]
            }
        },
        {
            "id": "LWOrderline_4",
            "type": "line",
            "metadata": {
                "maputnik:comment": "国外争议地区界"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    34
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#9DA4BA",
                "line-width": {
                    "stops": [
                        [
                            3,
                            0.4
                        ],
                        [
                            4,
                            0.6
                        ]
                    ]
                },
                "line-dasharray": [
                    8,
                    8
                ]
            }
        },
        {
            "id": "LWOrderline_5",
            "type": "line",
            "metadata": {
                "maputnik:comment": "军事停火线"
            },
            "source": "local",
            "source-layer": "national_w",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "adl_level",
                    33
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#9DA4BA",
                "line-width": {
                    "stops": [
                        [
                            3,
                            0.2
                        ],
                        [
                            4,
                            0.3
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            2,
                            [
                                3,
                                3
                            ]
                        ],
                        [
                            4,
                            [
                                4,
                                3
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWProOrderline",
            "type": "line",
            "metadata": {
                "maputnik:comment": "4-9级中国内陆省级行政区域边线"
            },
            "source": "local",
            "source-layer": "national_cp",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "adl_level",
                    20,
                    21,
                    22,
                    24,
                    25
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "property": "adl_level",
                    "type": "categorical",
                    "stops": [
                        [
                            {
                                "zoom": 2,
                                "value": 20
                            },
                            "#A9A9A8"
                        ],
                        [
                            {
                                "zoom": 2,
                                "value": 21
                            },
                            "#A9A9A8"
                        ],
                        [
                            {
                                "zoom": 2,
                                "value": 22
                            },
                            "#A9A9A8"
                        ],
                        [
                            {
                                "zoom": 2,
                                "value": 24
                            },
                            "#A9A9A8"
                        ],
                        [
                            {
                                "zoom": 2,
                                "value": 25
                            },
                            "#A9A9A8"
                        ]
                    ]
                },
                "line-width": 0.6
            }
        },
        {
            "id": "LWProOrderline-hongkong",
            "type": "line",
            "metadata": {
                "maputnik:comment": "4-9级香港行政区域边线"
            },
            "source": "local",
            "source-layer": "national_cp",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "==",
                    "adl_level",
                    30
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A9A9A8",
                "line-width": 1,
                "line-dasharray": [
                    10,
                    5,
                    3,
                    5
                ]
            }
        },
        {
            "id": "LWRoadForeign_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "6-9级境外道路网"
            },
            "source": "local",
            "source-layer": "wroad_f_2",
            "minzoom": 5,
            "maxzoom": 6,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "road_class",
                    0
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFB486",
                "line-width": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            7,
                            0.5
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWRoadForeign_out2",
            "type": "line",
            "metadata": {
                "maputnik:comment": "6-9级境外道路网"
            },
            "source": "local",
            "source-layer": "wroad_f_2",
            "minzoom": 7,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "road_class",
                    0
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F68025",
                "line-width": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            7,
                            0.5
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWRoadForeign",
            "type": "line",
            "metadata": {
                "maputnik:comment": "6-9级境外道路网"
            },
            "source": "local",
            "source-layer": "wroad_f_2",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    2
                ],
                [
                    "in",
                    "road_class",
                    0
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFA35C",
                "line-width": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            7,
                            0.5
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_42000_out",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_42000",
            "minzoom": 6,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F0DCC0",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1.6
                        ],
                        [
                            8,
                            1.6
                        ],
                        [
                            9,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_42000",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_42000",
            "minzoom": 6,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F8D291",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_43000_out",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_43000",
            "minzoom": 8,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFCA52",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1.5
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            7,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_43000",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_43000",
            "minzoom": 6,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F1CF5F",
                "line-width": {
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            6,
                            1.4
                        ],
                        [
                            7,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_41000_out",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_41000",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "in",
                "road_class",
                41000
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFB486",
                "line-width": {
                    "stops": [
                        [
                            4,
                            1
                        ],
                        [
                            7,
                            2
                        ],
                        [
                            8,
                            2.5
                        ],
                        [
                            9,
                            3.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "wroad_f_41000",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_41000",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "in",
                "road_class",
                41000
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFA35C",
                "line-width": {
                    "stops": [
                        [
                            4,
                            0.5
                        ],
                        [
                            7,
                            1
                        ],
                        [
                            8,
                            1.2
                        ],
                        [
                            9,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderlineCHN_y_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国已定国界-背景"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "any",
                    [
                        "all",
                        [
                            "in",
                            "adl_level",
                            10
                        ],
                        [
                            "==",
                            "scale_mask",
                            "000111111111"
                        ]
                    ],
                    [
                        "==",
                        "adl_level",
                        11
                    ],
                    [
                        "==",
                        "adl_level",
                        12
                    ]
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            2.5
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                },
                "line-opacity": 0.2
            }
        },
        {
            "id": "LWOrderlineCHN_y",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国已定国界-前景"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "any",
                    [
                        "all",
                        [
                            "in",
                            "adl_level",
                            10
                        ],
                        [
                            "==",
                            "scale_mask",
                            "000111111111"
                        ]
                    ],
                    [
                        "==",
                        "adl_level",
                        11
                    ],
                    [
                        "==",
                        "adl_level",
                        12
                    ]
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.3
                        ],
                        [
                            2,
                            0.5
                        ],
                        [
                            3,
                            0.8
                        ],
                        [
                            4,
                            1.2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderlineCHN_wd_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国未定国界"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "==",
                    "adl_level",
                    15
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            2.5
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                },
                "line-opacity": 0.2
            }
        },
        {
            "id": "LWOrderlineCHN_wd",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国未定国界"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "==",
                    "adl_level",
                    15
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.3
                        ],
                        [
                            2,
                            0.5
                        ],
                        [
                            3,
                            0.8
                        ],
                        [
                            4,
                            1.2
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            1,
                            [
                                4,
                                4
                            ]
                        ],
                        [
                            3,
                            [
                                6,
                                6
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderlineCHN_th_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国跳绘处以单线河为国界-背景"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 4,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "adl_level",
                    14
                ],
                [
                    "==",
                    "scale_mask",
                    "000000001111"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            2.5
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                },
                "line-opacity": 0.2
            }
        },
        {
            "id": "LWOrderlineCHN_th",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国跳绘处以单线河为国界-前景"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 2,
            "maxzoom": 4,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "adl_level",
                    14
                ],
                [
                    "==",
                    "scale_mask",
                    "000000001111"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.3
                        ],
                        [
                            2,
                            0.5
                        ],
                        [
                            3,
                            0.8
                        ],
                        [
                            4,
                            1.2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LWOrderlineCHN_th_out2",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国跳绘处以单线河为国界-背景2"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 4,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "adl_level",
                    10
                ],
                [
                    "==",
                    "scale_mask",
                    "000000110000"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            2.5
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                },
                "line-opacity": 0.2
            }
        },
        {
            "id": "LWOrderlineCHN_th2",
            "type": "line",
            "metadata": {
                "maputnik:comment": "中国跳绘处以单线河为国界-前景2"
            },
            "source": "local",
            "source-layer": "national_c",
            "minzoom": 4,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "wlevel",
                    1
                ],
                [
                    "in",
                    "adl_level",
                    10
                ],
                [
                    "==",
                    "scale_mask",
                    "000000110000"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#C76A79",
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.3
                        ],
                        [
                            2,
                            0.5
                        ],
                        [
                            3,
                            0.8
                        ],
                        [
                            4,
                            1.2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LCLandUseLine",
            "type": "line",
            "metadata": {
                "maputnik:comment": "14级以上城市简易线状背景要素-水系"
            },
            "source": "local",
            "source-layer": "landuseline",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    ">=",
                    "lul_type",
                    1000
                ],
                [
                    "<",
                    "lul_type",
                    2000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#BFDBF4",
                "line-width": {
                    "stops": [
                        [
                            3,
                            2
                        ],
                        [
                            4,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LCRailway_gt_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "16级以上全国城市铁路-主要高铁-背景"
            },
            "source": "local",
            "source-layer": "railway",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "rail_type",
                    5300
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DA9893",
                "line-width": {
                    "stops": [
                        [
                            9,
                            2
                        ],
                        [
                            12,
                            2.4
                        ],
                        [
                            17,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "LCRailway_gt",
            "type": "line",
            "metadata": {
                "maputnik:comment": "16级以上全国城市铁路-主要高铁-前景"
            },
            "source": "local",
            "source-layer": "railway",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "rail_type",
                    5300
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "stops": [
                        [
                            9,
                            1
                        ],
                        [
                            12,
                            1.2
                        ],
                        [
                            17,
                            1.5
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            14,
                            [
                                4,
                                8
                            ]
                        ],
                        [
                            17,
                            [
                                4,
                                8
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "LCRailway_pt_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "16级以上全国城市铁路-主要高铁-背景"
            },
            "source": "local",
            "source-layer": "railway",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "rail_type",
                    5100
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#A6ABAE",
                "line-width": {
                    "stops": [
                        [
                            9,
                            2
                        ],
                        [
                            12,
                            2.4
                        ],
                        [
                            17,
                            3
                        ]
                    ]
                },
                "line-opacity": 0.7
            }
        },
        {
            "id": "LCRailway_pt",
            "type": "line",
            "metadata": {
                "maputnik:comment": "16级以上全国城市铁路-主要高铁-前景"
            },
            "source": "local",
            "source-layer": "railway",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "rail_type",
                    5100
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "stops": [
                        [
                            9,
                            1
                        ],
                        [
                            12,
                            1.2
                        ],
                        [
                            17,
                            1.5
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            14,
                            [
                                4,
                                8
                            ]
                        ],
                        [
                            17,
                            [
                                4,
                                8
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_49_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_49",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    49
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFECE7",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_49",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_49",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    49
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            3
                        ],
                        [
                            16,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_54000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_54000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    54000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            1.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_54000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_54000",
            "minzoom": 15,
            "maxzoom": 23,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    54000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            3
                        ],
                        [
                            16,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_53000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_53000",
            "minzoom": 14,
            "maxzoom": 23,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    53000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            1.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            6
                        ],
                        [
                            17,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_53000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_53000",
            "minzoom": 15,
            "maxzoom": 23,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    53000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            3
                        ],
                        [
                            16,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_47000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_47000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    47000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            2.5
                        ],
                        [
                            15,
                            5
                        ],
                        [
                            16,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_47000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_47000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    47000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            1.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_45000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            3
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_45000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            1.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            5
                        ],
                        [
                            17,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_45000",
            "minzoom": 13,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_45000",
            "minzoom": 13,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_44000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter",
                "line-miter-limit": 4,
                "line-round-limit": 5
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            13,
                            "#DFDACF"
                        ],
                        [
                            14,
                            "#DFDACF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            6
                        ],
                        [
                            15,
                            8
                        ],
                        [
                            16,
                            11
                        ],
                        [
                            17,
                            11
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_44000",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter",
                "line-miter-limit": 4,
                "line-round-limit": 5
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            13,
                            "#FFFFFF"
                        ],
                        [
                            14,
                            "#FFFFFF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            3
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            16,
                            6
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_44000",
            "minzoom": 11,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            11,
                            "#DFDACF"
                        ],
                        [
                            12,
                            "#DFDACF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            10,
                            2
                        ],
                        [
                            11,
                            3
                        ],
                        [
                            12,
                            5
                        ],
                        [
                            13,
                            5.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_44000",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            9,
                            "#EFECE7"
                        ],
                        [
                            10,
                            "#EFECE7"
                        ],
                        [
                            11,
                            "#FFFFFF"
                        ],
                        [
                            12,
                            "#FFFFFF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            10,
                            2
                        ],
                        [
                            11,
                            1.5
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            13,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_52000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F7E099",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            7
                        ],
                        [
                            15,
                            8
                        ],
                        [
                            16,
                            10
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_52000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            3.5
                        ],
                        [
                            15,
                            5
                        ],
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_52000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F7E099",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1.3
                        ],
                        [
                            10,
                            4
                        ],
                        [
                            11,
                            4
                        ],
                        [
                            12,
                            5.4
                        ],
                        [
                            13,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_52000",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            10,
                            1.6
                        ],
                        [
                            11,
                            1.6
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            13,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_51000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F7E099",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            7
                        ],
                        [
                            15,
                            8
                        ],
                        [
                            16,
                            10
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_51000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            5.5
                        ],
                        [
                            15,
                            5
                        ],
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_51000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F7E099",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1.3
                        ],
                        [
                            10,
                            4
                        ],
                        [
                            11,
                            4
                        ],
                        [
                            12,
                            5.4
                        ],
                        [
                            13,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_51000",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            10,
                            1.6
                        ],
                        [
                            11,
                            1.6
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            13,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_42000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#E3b973",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            8.5
                        ],
                        [
                            15,
                            9.5
                        ],
                        [
                            16,
                            12
                        ],
                        [
                            17,
                            13
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_42000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F8D291",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            8
                        ],
                        [
                            15,
                            8
                        ],
                        [
                            16,
                            9
                        ],
                        [
                            17,
                            10
                        ],
                        [
                            18,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_42000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#E3b973",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            3.8
                        ],
                        [
                            10,
                            4
                        ],
                        [
                            11,
                            4.5
                        ],
                        [
                            12,
                            5.2
                        ],
                        [
                            13,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_42000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F8D291",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1.2
                        ],
                        [
                            10,
                            1.2
                        ],
                        [
                            11,
                            2
                        ],
                        [
                            12,
                            2.5
                        ],
                        [
                            13,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_43000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#E7B926",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            8
                        ],
                        [
                            15,
                            9.5
                        ],
                        [
                            16,
                            12
                        ],
                        [
                            17,
                            13
                        ],
                        [
                            18,
                            13
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_43000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFCA52",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            6
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            9
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                },
                "line-blur": 0
            }
        },
        {
            "id": "roads_43000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_43000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#E7B926",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            3.4
                        ],
                        [
                            10,
                            4.4
                        ],
                        [
                            11,
                            5
                        ],
                        [
                            12,
                            6
                        ],
                        [
                            13,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_43000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#EFCA52",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1.2
                        ],
                        [
                            10,
                            1.8
                        ],
                        [
                            11,
                            2.4
                        ],
                        [
                            12,
                            3.4
                        ],
                        [
                            13,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F68025",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            6
                        ],
                        [
                            15,
                            7
                        ],
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            8
                        ],
                        [
                            18,
                            9
                        ],
                        [
                            19,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFA35C",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            9
                        ],
                        [
                            15,
                            9
                        ],
                        [
                            16,
                            9.5
                        ],
                        [
                            17,
                            10.5
                        ],
                        [
                            18,
                            12
                        ],
                        [
                            19,
                            13
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_ld",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "in",
                    "link_type",
                    1,
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#012c56",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            0.8
                        ],
                        [
                            10,
                            1.2
                        ],
                        [
                            15,
                            1.6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ],
                [
                    "==",
                    "form_way",
                    1
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F68025",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            4
                        ],
                        [
                            10,
                            6
                        ],
                        [
                            11,
                            7.5
                        ],
                        [
                            12,
                            9
                        ],
                        [
                            13,
                            9
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "!=",
                    "link_type",
                    1
                ],
                [
                    "!=",
                    "link_type",
                    5
                ],
                [
                    "==",
                    "form_way",
                    1
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFA35C",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            2
                        ],
                        [
                            10,
                            4
                        ],
                        [
                            11,
                            5
                        ],
                        [
                            12,
                            6
                        ],
                        [
                            13,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_r_ld",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ],
                [
                    "in",
                    "link_type",
                    1,
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#012c56",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            0.8
                        ],
                        [
                            10,
                            1.2
                        ],
                        [
                            15,
                            1.6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_49_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    49
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFECE7",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_49_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    49
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_54000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    54000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_54000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    54000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_53000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    53000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            6
                        ],
                        [
                            17,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_53000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    53000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            4
                        ],
                        [
                            17,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_47000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    47000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_47000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    47000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            5
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_2_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#DFDACF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_2_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    45000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            5
                        ],
                        [
                            17,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-miter-limit": 4,
                "line-round-limit": 5
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            13,
                            "#DFDACF"
                        ],
                        [
                            14,
                            "#DFDACF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            11
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_44000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    44000
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter",
                "line-miter-limit": 4,
                "line-round-limit": 5
            },
            "paint": {
                "line-color": {
                    "stops": [
                        [
                            13,
                            "#FFFFFF"
                        ],
                        [
                            14,
                            "#FFFFFF"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            6
                        ],
                        [
                            17,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F4D266",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_52000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    52000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F4D266",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            1
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_51000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    51000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F5DF96",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            7
                        ],
                        [
                            17,
                            7
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#E3b973",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            12
                        ],
                        [
                            17,
                            13
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_42000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F8D291",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            9
                        ],
                        [
                            17,
                            10
                        ],
                        [
                            18,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#E7B926",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            12
                        ],
                        [
                            17,
                            13
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#EFCA52",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            9
                        ],
                        [
                            17,
                            10
                        ]
                    ]
                },
                "line-blur": 0
            }
        },
        {
            "id": "roads_41000_zlevel_out",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F68025",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            9.5
                        ],
                        [
                            15,
                            10.5
                        ],
                        [
                            16,
                            12
                        ],
                        [
                            17,
                            13
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_41000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "road_class",
                    41000
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFA35C",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            7
                        ],
                        [
                            15,
                            8
                        ],
                        [
                            16,
                            9
                        ],
                        [
                            17,
                            10
                        ],
                        [
                            18,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "mrt_line_1_out",
            "type": "line",
            "source": "local",
            "source-layer": "mrt_line",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "in",
                "status",
                1
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#FFFFFF",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1.6
                        ],
                        [
                            10,
                            1.6
                        ],
                        [
                            11,
                            1.6
                        ],
                        [
                            12,
                            1.6
                        ],
                        [
                            13,
                            1.6
                        ],
                        [
                            14,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            16,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "mrt_line_1",
            "type": "line",
            "source": "local",
            "source-layer": "mrt_line",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "in",
                "status",
                1
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "u_color"
                ],
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            0.8
                        ],
                        [
                            10,
                            0.8
                        ],
                        [
                            11,
                            0.8
                        ],
                        [
                            12,
                            0.8
                        ],
                        [
                            13,
                            0.8
                        ],
                        [
                            14,
                            1.5
                        ],
                        [
                            15,
                            2
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "LSettlementline",
            "type": "line",
            "source": "local",
            "source-layer": "settlementline",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#4e4f52",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            16,
                            0.2
                        ]
                    ]
                }
            }
        },
        {
            "id": "3d-buildings-x-1",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementareaex",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "!=",
                    "grade_leve",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": [
                    "*",
                    3,
                    [
                        "get",
                        "grade_leve"
                    ]
                ],
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-1",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementarea_2",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "!=",
                    "grade_leve",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": [
                    "*",
                    3,
                    [
                        "get",
                        "grade_leve"
                    ]
                ],
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-x-2",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementareaex",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "==",
                    "grade_leve",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": 6,
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.6
            }
        },
        {
            "id": "3d-buildings-2",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementarea_2",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "==",
                    "grade_leve",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": 6,
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-x-3",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementareaex",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "!=",
                    "grade_leve",
                    0
                ],
                [
                    "==",
                    "settarea",
                    -1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": [
                    "*",
                    3,
                    [
                        "get",
                        "grade_leve"
                    ]
                ],
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-3",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementarea_2",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "!=",
                    "grade_leve",
                    0
                ],
                [
                    "==",
                    "settarea",
                    -1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": [
                    "*",
                    3,
                    [
                        "get",
                        "grade_leve"
                    ]
                ],
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-x-4",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementareaex",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "==",
                    "grade_leve",
                    0
                ],
                [
                    "==",
                    "settarea",
                    -1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": 6,
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "3d-buildings-4",
            "type": "fill-extrusion",
            "source": "local",
            "source-layer": "settlementarea_2",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ],
                [
                    "==",
                    "grade_leve",
                    0
                ],
                [
                    "==",
                    "settarea",
                    -1
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-color": "#FAFAF6",
                "fill-extrusion-height": 6,
                "fill-extrusion-base": 0,
                "fill-extrusion-opacity": 0.8
            }
        },
        {
            "id": "LWPOIIsland_190202_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190202",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190202
                ],
                [
                    "in",
                    "priority",
                    "1",
                    "17"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            11
                        ],
                        [
                            6,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 2,
                "icon-color": "rgba(117, 16, 16, 1)"
            },
            "name": "岛屿",
            "metadata": {
                "maputnik:comment": "岛屿名称"
            }
        },
        {
            "id": "LWPOIIsland_190202_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190202",
            "minzoom": 7,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190202
                ],
                [
                    "in",
                    "priority",
                    "2",
                    "3"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            11
                        ],
                        [
                            6,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 2,
                "icon-color": "rgba(117, 16, 16, 1)"
            },
            "name": "岛屿",
            "metadata": {
                "maputnik:comment": "岛屿名称"
            }
        },
        {
            "id": "LWPOIIsland_190204_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190204",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190204
                ],
                [
                    "in",
                    "priority",
                    "1"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            13
                        ],
                        [
                            6,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 2,
                "icon-color": "rgba(117, 16, 16, 1)"
            },
            "name": "岛屿",
            "metadata": {
                "maputnik:comment": "面状水系名称"
            }
        },
        {
            "id": "LWPOIIsland_190204_4",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190204",
            "minzoom": 4,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190204
                ],
                [
                    "in",
                    "priority",
                    "4"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            14
                        ],
                        [
                            6,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#5274c9",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2,
                "icon-color": "rgba(117, 16, 16, 1)"
            },
            "name": "岛屿",
            "metadata": {
                "maputnik:comment": "面状水系名称"
            }
        },
        {
            "id": "LWPOIIsland_190204_5",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190204",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190204
                ],
                [
                    "in",
                    "priority",
                    "5"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            13
                        ],
                        [
                            6,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2,
                "icon-color": "rgba(117, 16, 16, 1)"
            },
            "name": "岛屿",
            "metadata": {
                "maputnik:comment": "面状水系名称"
            }
        },
        {
            "id": "LWPOIAdmin_191000",
            "type": "symbol",
            "metadata": {
                "maputnik:comment": "中国名称"
            },
            "source": "local",
            "source-layer": "wpoi_191000",
            "minzoom": 2,
            "maxzoom": 3,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    191000
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            1,
                            16
                        ],
                        [
                            2,
                            20
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "text-max-width": 150,
                "text-justify": "left"
            },
            "paint": {
                "text-color": "#C76A79",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 2
            },
            "name": "中国名称"
        },
        {
            "id": "LWPOIAdmin_190105",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190105",
            "minzoom": 8,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190105
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            6,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 11,
                "icon-image": "sprite_165",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#222222",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "区县名称"
        },
        {
            "id": "LWPOIAdmin_190004",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190004",
            "minzoom": 7,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190004
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            6,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 11,
                "icon-image": "sprite_165",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#222222",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "县级市名称"
        },
        {
            "id": "LWPOIAdmin_190005",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190005",
            "minzoom": 6,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190005
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            5,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_3",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#716F6D",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "地级市地名"
        },
        {
            "id": "LWPOIAdmin_190002",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190002",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190002
                ],
                [
                    "in",
                    "priority",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            5,
                            13
                        ],
                        [
                            6,
                            14
                        ],
                        [
                            7,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_3",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "省会城市名称"
        },
        {
            "id": "LWPOIAdmin_190001",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190001",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    190001
                ],
                [
                    "==",
                    "priority",
                    "105"
                ]
            ],
            "layout": {
                "text-size": 15,
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 13,
                "icon-image": "sprite_5",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 2
            },
            "name": "中国首都名称"
        },
        {
            "id": "LWPOIAdmin_195000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_195000",
            "minzoom": 6,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    195000
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            5,
                            14
                        ],
                        [
                            6,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 9,
                "icon-image": "sprite_6",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#222222",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "世界国家首都城市名称"
        },
        {
            "id": "LWPOIAdmin_192000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_192000",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    192000
                ],
                [
                    "==",
                    "priority",
                    "301"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            1,
                            26
                        ],
                        [
                            1,
                            22
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 11,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "世界大洲名称"
        },
        {
            "id": "LWPOIAdmin_193000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_193000",
            "minzoom": 2,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    193000
                ],
                [
                    "==",
                    "priority",
                    "302"
                ]
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            1,
                            16
                        ],
                        [
                            2,
                            16
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-max-width": 11,
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#477FC2",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "世界海洋名称"
        },
        {
            "id": "LWProLabelCHN",
            "type": "symbol",
            "source": "local",
            "source-layer": "province_p",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            2,
                            11
                        ],
                        [
                            3,
                            12
                        ],
                        [
                            4,
                            13
                        ],
                        [
                            5,
                            14
                        ],
                        [
                            6,
                            14
                        ],
                        [
                            7,
                            15
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_2}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    -1,
                    -1
                ],
                "text-max-width": 8,
                "icon-image": "",
                "icon-size": 1,
                "text-justify": "center"
            },
            "paint": {
                "text-color": "#a2a5ab",
                "text-halo-color": "#a2a5ab",
                "text-halo-width": 0.1
            },
            "name": "省份名称"
        },
        {
            "id": "LWOrderpolygon",
            "type": "symbol",
            "source": "local",
            "source-layer": "nationregion_p",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            3,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    -1,
                    -1
                ],
                "text-max-width": 8,
                "icon-image": "",
                "icon-size": 1,
                "text-justify": "center"
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#ffffff",
                "text-halo-width": 2
            },
            "name": "国外国家名称标注"
        },
        {
            "id": "LWPOIAdmin_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "sp",
            "minzoom": 5,
            "maxzoom": 9,
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            4,
                            10
                        ],
                        [
                            5,
                            12
                        ],
                        [
                            6,
                            15
                        ],
                        [
                            7,
                            15
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    -1,
                    -1
                ],
                "text-max-width": 8,
                "icon-image": "",
                "icon-size": 1,
                "text-justify": "center"
            },
            "paint": {
                "text-color": "#6F6C6A",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "name": "印度实际控制区、巴基斯坦实际控制区"
        },
        {
            "id": "route_no_41000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "!=",
                    "route_note",
                    ""
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_gs-",
                    [
                        "to-string",
                        [
                            "length",
                            "route_note"
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_41000_r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "has",
                    "route_note"
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_gs-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_52000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_52000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "!=",
                    "route_note",
                    ""
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_xd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_52000_r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_52000",
            "minzoom": 12,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "has",
                    "route_note"
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_xd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "symbol-placement": "point",
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_51000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_51000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "!=",
                    "route_note",
                    ""
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_sd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "symbol-placement": "point",
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_42000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_42000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "!=",
                    "route_note",
                    ""
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_gd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_51000_r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_51000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "has",
                    "route_note"
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_sd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "none",
                "symbol-placement": "line",
                "symbol-avoid-edges": false,
                "symbol-spacing": 250,
                "text-letter-spacing": 0,
                "text-offset": [
                    0,
                    0
                ],
                "icon-padding": 0,
                "text-line-height": 1,
                "text-allow-overlap": false
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "route_no_42000_r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_42000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "has",
                    "route_note"
                ]
            ],
            "layout": {
                "text-field": "{route_note}",
                "icon-image": [
                    "concat",
                    "sprite_gd-",
                    [
                        "to-string",
                        [
                            "length",
                            [
                                "to-string",
                                [
                                    "get",
                                    "route_note"
                                ]
                            ]
                        ]
                    ]
                ],
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 9,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-color": "rgba(255, 255, 255, 1)",
                "text-color": "rgba(255, 255, 255, 1)"
            }
        },
        {
            "id": "LCSubwayExit",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_exit",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "!=",
                    "name1",
                    ""
                ],
                [
                    "==",
                    "status",
                    1
                ]
            ],
            "layout": {
                "text-field": "{name1}",
                "icon-image": "sprite_109",
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "icon-size": 1,
                "text-size": 8,
                "visibility": "visible"
            },
            "paint": {
                "icon-color": "#191b1c",
                "text-color": "#191b1c"
            }
        },
        {
            "id": "LCMRT_L_label",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_line_label",
            "minzoom": 13,
            "maxzoom": 20,
            "metadata": {
                "maputnik:comment": "地铁线标注"
            },
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    1
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            12
                        ],
                        [
                            12,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 200,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 6,
                "text-rotation-alignment": "auto",
                "text-field": "{name1}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": [
                    "concat",
                    "#",
                    [
                        "get",
                        "ui_color"
                    ]
                ],
                "text-halo-color": "#191b1c",
                "text-halo-width": 0.05
            }
        },
        {
            "id": "LRoadcross",
            "type": "symbol",
            "source": "local",
            "source-layer": "realroadcross",
            "minzoom": 16,
            "maxzoom": 20,
            "metadata": {
                "maputnik:comment": "交通信号灯"
            },
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            10
                        ],
                        [
                            14,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_175"
            },
            "paint": {
                "text-color": "rgba(84, 150, 152, 1)",
                "text-halo-color": "rgba(25, 27, 28, 1)",
                "text-halo-width": 1
            },
            "name": "交通信号灯"
        },
        {
            "id": "roads-symbol-49",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_49",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    49
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            9
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-54000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_54000",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    54000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            10
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-53000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_53000",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    54000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            12
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-47000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_47000",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    47000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            15,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-45000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_45000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    45000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            15,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-44000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_44000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    44000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            }
        },
        {
            "id": "roads-symbol-52000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_52000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    52000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            12
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#918270",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-51000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_51000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    51000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            14,
                            13
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#897014",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-51000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_51000",
            "minzoom": 13,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    51000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 350,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#897014",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-42000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_42000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            14,
                            13
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 300,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.1,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#814c22",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-42000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_42000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    42000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            12
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 350,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.5,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#814c22",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-43000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_43000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            13
                        ],
                        [
                            14,
                            14
                        ],
                        [
                            17,
                            15
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 300,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#6f4004",
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.1
            }
        },
        {
            "id": "roads-symbol-43000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_43000",
            "minzoom": 10,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    43000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            9,
                            12
                        ],
                        [
                            11,
                            13
                        ],
                        [
                            12,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 350,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#6f4004",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-41000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    41000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            13,
                            13
                        ],
                        [
                            14,
                            14
                        ],
                        [
                            15,
                            15
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#6f4004",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "roads-symbol-41000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "road_class",
                    41000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            9,
                            12
                        ],
                        [
                            11,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 350,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 10,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.005,
                "text-pitch-alignment": "viewport",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#6f4004",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5
            }
        },
        {
            "id": "LCRailway_label_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "railway",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "rail_type",
                    5100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 10,
                "symbol-spacing": 20,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1"
            },
            "paint": {
                "text-color": "#777775",
                "text-halo-color": "#777775",
                "text-halo-width": 0.01
            },
            "name": "铁路标注"
        },
        {
            "id": "LCRailway_label_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "railway",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "rail_type",
                    5300
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 10,
                "symbol-spacing": 100,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1"
            },
            "paint": {
                "text-color": "#DA9893",
                "text-halo-color": "#FFFFFF",
                "text-halo-width": 1
            },
            "name": "高铁标注"
        },
        {
            "id": "LCMRT_S",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_station",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    1
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            12,
                            10
                        ],
                        [
                            16,
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{name}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "icon-image": "sprite_77",
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-justify": "center",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#000000",
                "text-halo-color": "#ffffff",
                "text-halo-width": 0.2
            },
            "name": "地铁站标注",
            "metadata": {
                "maputnik:comment": "地铁站标注"
            }
        },
        {
            "id": "LCMRT_S_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_station",
            "minzoom": 12,
            "maxzoom": 13,
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    1
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            15,
                            11
                        ],
                        [
                            16,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "icon-image": "sprite_76",
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "text-justify": "center",
                "icon-size": 1
            },
            "paint": {
                "text-color": "rgba(0, 0, 0, 0)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1
            },
            "name": "地铁站标注",
            "metadata": {
                "maputnik:comment": "地铁站标注"
            }
        },
        {
            "id": "buildings-x-symbol",
            "type": "symbol",
            "source": "local",
            "source-layer": "settlementareaex",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3301"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            10
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 100,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.15,
                "text-keep-upright": true,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            }
        },
        {
            "id": "buildings-symbol",
            "type": "symbol",
            "source": "local",
            "source-layer": "settlementarea",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "in",
                    "sett_type",
                    "3000",
                    "3010",
                    "3011",
                    "3012",
                    "3013",
                    "3014",
                    "3015",
                    "3016",
                    "3017",
                    "3100",
                    "3101",
                    "3102",
                    "3201",
                    "3300",
                    "3301",
                    "3302"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            10
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 100,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "line",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.15,
                "text-keep-upright": true,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            }
        },
        {
            "id": "pois_060602",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060602"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_174",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "家具城"
            },
            "name": "家具城"
        },
        {
            "id": "pois_130600",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "130600"
                ],
                [
                    "==",
                    "type",
                    "130602"
                ],
                [
                    "==",
                    "type",
                    "130604"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "交通车辆管理相关、车辆管理机构、交通执法站"
            },
            "name": "交通车辆管理相关、车辆管理机构、交通执法站"
        },
        {
            "id": "pois_130506",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130506"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "社会治安机构"
            },
            "name": "社会治安机构"
        },
        {
            "id": "pois_130505",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130505"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公证鉴定机构"
            },
            "name": "公证鉴定机构"
        },
        {
            "id": "pois_130504",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130504"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "消防机关"
            },
            "name": "消防机关"
        },
        {
            "id": "pois_100000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100000"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        "10"
                    ],
                    [
                        "==",
                        "level",
                        "100"
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "四星级宾馆蓄"
            },
            "name": "四星级宾馆蓄"
        },
        {
            "id": "pois_070400",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "070400"
                ],
                [
                    "!=",
                    "gdpoint",
                    "070400010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "邮政储蓄"
            },
            "name": "邮政储蓄"
        },
        {
            "id": "pois_070401",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "070401"
                ],
                [
                    "==",
                    "gdpoint",
                    "070400010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_70",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "邮政速递、中国邮政"
            },
            "name": "邮政速递、中国邮政"
        },
        {
            "id": "pois_060703",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060703"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_183",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "农副产品市场"
            },
            "name": "农副产品市场"
        },
        {
            "id": "pois_060600",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060600"
                ],
                [
                    "==",
                    "type",
                    "060601"
                ],
                [
                    "==",
                    "type",
                    "060603"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_174",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "家居建材市场、建材综合市场、建材五金市场"
            },
            "name": "建材五金市场"
        },
        {
            "id": "pois_030201",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "030201"
                ],
                [
                    "==",
                    "type",
                    "030202"
                ],
                [
                    "==",
                    "type",
                    "030100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_55",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "汽车综合维修"
            },
            "name": "汽车综合维修"
        },
        {
            "id": "pois_020101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "020101"
                ],
                [
                    "==",
                    "type",
                    "020102"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_150",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "上海大众销售、一汽-大众销售"
            },
            "name": "上海大众销售、一汽-大众销售"
        },
        {
            "id": "pois_140800020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "140800020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "文化宫"
            },
            "name": "文化宫"
        },
        {
            "id": "pois_090205020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "090205020"
                ],
                [
                    "==",
                    "gdpoint",
                    "090206020"
                ],
                [
                    "==",
                    "gdpoint",
                    "090207020"
                ],
                [
                    "==",
                    "gdpoint",
                    "090208020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_61",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "医疗保健服务;胸科医院、骨科医院、肿瘤医院、脑科医院"
            },
            "name": "医疗保健服务;胸科医院、骨科医院、肿瘤医院、脑科医院"
        },
        {
            "id": "pois_130200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130200"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "外国机构相关"
            },
            "name": "外国机构相关"
        },
        {
            "id": "pois_130703",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130703"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "政府机构及社会团体-地税机关"
            },
            "name": "政府机构及社会团体-地税机关"
        },
        {
            "id": "pois_130702_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130702"
                ],
                [
                    "==",
                    "level",
                    "10100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "政府机构及社会团体-国税机关"
            },
            "name": "政府机构及社会团体-国税机关"
        },
        {
            "id": "pois_130106",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130106"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "地市级政府及事业单位"
            },
            "name": "地市级政府及事业单位"
        },
        {
            "id": "pois_130105_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130105"
                ],
                [
                    "!=",
                    "gdpoint",
                    "130105050"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "地市级政府及事业单位"
            },
            "name": "地市级政府及事业单位"
        },
        {
            "id": "pois_190307_101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190307"
                ],
                [
                    ">",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "桥"
            },
            "name": "桥"
        },
        {
            "id": "pois_130501003",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130501003"
                ],
                [
                    "==",
                    "gdpoint",
                    "130501004"
                ],
                [
                    "==",
                    "gdpoint",
                    "130501005"
                ],
                [
                    "==",
                    "gdpoint",
                    "130502003"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_121",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公安警察、检察院"
            },
            "name": "公安警察、检察院"
        },
        {
            "id": "pois_060304",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060304"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "苏宁"
            },
            "name": "苏宁"
        },
        {
            "id": "pois_060303",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060303"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "大中"
            },
            "name": "大中"
        },
        {
            "id": "pois_060302",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060302"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "国美"
            },
            "name": "国美"
        },
        {
            "id": "pois_060200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060200"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "便民商店/便利店"
            },
            "name": "便民商店/便利店"
        },
        {
            "id": "pois_060202",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060202"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_140",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "OK便利店"
            },
            "name": "OK便利店"
        },
        {
            "id": "pois_060201",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060201"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_138",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "7-ELEVEn便利店"
            },
            "name": "7-ELEVEn便利店"
        },
        {
            "id": "pois_060413",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060413"
                ],
                [
                    "==",
                    "type",
                    "060414"
                ],
                [
                    "==",
                    "type",
                    "060415"
                ],
                [
                    "==",
                    "type",
                    "060400"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "超市"
            },
            "name": "超市"
        },
        {
            "id": "pois_050000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "050000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_22",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "餐饮"
            },
            "name": "餐饮"
        },
        {
            "id": "pois_050303",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "050303"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_127",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "必胜客"
            },
            "name": "必胜客"
        },
        {
            "id": "pois_050302",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "050302"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_126",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "麦当劳"
            },
            "name": "麦当劳"
        },
        {
            "id": "pois_050301",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "050301"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_125",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "肯德基"
            },
            "name": "肯德基"
        },
        {
            "id": "pois_050100900",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "050100900"
                ],
                [
                    "!=",
                    "type",
                    "050301"
                ],
                [
                    "!=",
                    "type",
                    "050302"
                ],
                [
                    "!=",
                    "type",
                    "050303"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_22",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "餐饮"
            },
            "name": "餐饮"
        },
        {
            "id": "pois_080602",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080602"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_65",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "音乐厅"
            },
            "name": "音乐厅"
        },
        {
            "id": "pois_080110_100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080110"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_145",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "游泳馆"
            },
            "name": "游泳馆"
        },
        {
            "id": "pois_010000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "010000"
                ],
                [
                    "!=",
                    "gdpoint",
                    "010000100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_55",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "汽车服务相关"
            },
            "name": "汽车服务相关"
        },
        {
            "id": "pois_130201030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130201030"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "外国使领馆"
            },
            "name": "外国使领馆"
        },
        {
            "id": "pois_130701010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130701010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "工商部门"
            },
            "name": "工商部门"
        },
        {
            "id": "pois_130700010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130700010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "工商税务机构"
            },
            "name": "工商税务机构"
        },
        {
            "id": "pois_130601010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130601010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "交通管理机构"
            },
            "name": "交通管理机构"
        },
        {
            "id": "pois_190304",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "190304"
                ],
                [
                    "==",
                    "type",
                    "190308"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_188",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高速路出口、城市快速路出口"
            },
            "name": "高速路出口、城市快速路出口"
        },
        {
            "id": "pois_190305",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "190305"
                ],
                [
                    "==",
                    "type",
                    "190309"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_189",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高速路入口、城市快速路入口"
            },
            "name": "高速路入口、城市快速路入口"
        },
        {
            "id": "pois_110103002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110103002"
                ],
                [
                    "==",
                    "level",
                    10110
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "植物园"
            },
            "name": "植物园"
        },
        {
            "id": "pois_110000011",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110000011"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_011100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "011100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_154",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "其它能源站"
            },
            "name": "其它能源站"
        },
        {
            "id": "pois_100200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100200"
                ],
                [
                    "<=",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_100201",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100201"
                ],
                [
                    "<=",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_141103",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141103"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "报社"
            },
            "name": "报社"
        },
        {
            "id": "pois_060411",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060411"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_182",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "屈臣氏超市"
            },
            "name": "屈臣氏超市"
        },
        {
            "id": "pois_060409",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060409"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "卜蜂莲花超市"
            },
            "name": "卜蜂莲花超市"
        },
        {
            "id": "pois_060407",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060407"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "乐天玛特超市"
            },
            "name": "乐天玛特超市"
        },
        {
            "id": "pois_060406",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060406"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "麦德龙超市"
            },
            "name": "麦德龙超市"
        },
        {
            "id": "pois_060405",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060405"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "北京华联"
            },
            "name": "北京华联"
        },
        {
            "id": "pois_060404",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060404"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_14",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "北京华联"
            },
            "name": "北京华联"
        },
        {
            "id": "pois_060403",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060403"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_181",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "华润超市"
            },
            "name": "华润超市"
        },
        {
            "id": "pois_060402",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060402"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_180",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "沃尔玛"
            },
            "name": "沃尔玛"
        },
        {
            "id": "pois_060401",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060401"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_179",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "家乐福"
            },
            "name": "家乐福"
        },
        {
            "id": "pois_140700",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140700"
                ],
                [
                    ">",
                    "level",
                    "10"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_178",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "天文馆"
            },
            "name": "天文馆"
        },
        {
            "id": "pois_190307_100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190307"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "桥"
            },
            "name": "桥"
        },
        {
            "id": "pois_141204_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141204"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "141204100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_20",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "幼儿园"
            },
            "name": "幼儿园"
        },
        {
            "id": "pois_120302_10110",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120302"
                ],
                [
                    "==",
                    "level",
                    10110
                ],
                [
                    "!=",
                    "gdpoint",
                    "120302100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 3,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "住宅小区"
            },
            "name": "住宅小区"
        },
        {
            "id": "pois_060101_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "060101"
                ],
                [
                    "==",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_13",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "购物中心"
            },
            "name": "购物中心"
        },
        {
            "id": "pois_080110",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080110"
                ],
                [
                    "==",
                    "level",
                    20
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_145",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "游泳馆"
            },
            "name": "游泳馆"
        },
        {
            "id": "pois_141201020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "141201020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_080101_1211",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080101"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1211
                    ],
                    [
                        "==",
                        "level",
                        1212
                    ],
                    [
                        "==",
                        "level",
                        1231
                    ],
                    [
                        "==",
                        "level",
                        1281
                    ],
                    [
                        "==",
                        "level",
                        1302
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_167",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "综合体育馆"
            },
            "name": "综合体育馆"
        },
        {
            "id": "pois_080101002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "080101002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_167",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "综合体育馆"
            },
            "name": "综合体育馆"
        },
        {
            "id": "pois_110204_20",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110204"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        10020
                    ],
                    [
                        "==",
                        "level",
                        10030
                    ],
                    [
                        "==",
                        "level",
                        10100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "110204100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "纪念馆"
            },
            "name": "纪念馆"
        },
        {
            "id": "pois_110105",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110105"
                ],
                [
                    "==",
                    "level",
                    "10"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "城市广场"
            },
            "name": "城市广场"
        },
        {
            "id": "pois_120100_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120100"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "<=",
                    "len2",
                    16
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_17",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "产业园区"
            },
            "name": "产业园区"
        },
        {
            "id": "pois_120100_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120100"
                ],
                [
                    "!=",
                    "level",
                    10100
                ],
                [
                    "<=",
                    "len2",
                    16
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_17",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "产业园区"
            },
            "name": "产业园区"
        },
        {
            "id": "pois_130104030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130104030"
                ],
                [
                    "==",
                    "gdpoint",
                    "130104001"
                ],
                [
                    "==",
                    "gdpoint",
                    "130104003"
                ],
                [
                    "==",
                    "gdpoint",
                    "130104004"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "区县级政府及事业单位"
            },
            "name": "区县级政府及事业单位"
        },
        {
            "id": "pois_130103_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130103"
                ],
                [
                    "==",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "地市级政府及事业单位"
            },
            "name": "地市级政府及事业单位"
        },
        {
            "id": "pois_090101_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "090101"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10100
                    ],
                    [
                        "==",
                        "level",
                        1211
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_49",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "三级甲等医院"
            },
            "name": "三级甲等医院"
        },
        {
            "id": "pois_130102030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130102030"
                ],
                [
                    "==",
                    "gdpoint",
                    "130102030"
                ],
                [
                    "==",
                    "gdpoint",
                    "130102003"
                ],
                [
                    "==",
                    "gdpoint",
                    "130102001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "政府及事业单位"
            },
            "name": "政府及事业单位"
        },
        {
            "id": "pois_140100_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140100"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "140100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "博物馆"
            },
            "name": "博物馆"
        },
        {
            "id": "pois_110102_1151",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110102"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1151
                    ],
                    [
                        "==",
                        "level",
                        1212
                    ],
                    [
                        "==",
                        "level",
                        10110
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "展览馆"
            },
            "name": "展览馆"
        },
        {
            "id": "pois_140200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140200"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        "20"
                    ],
                    [
                        "==",
                        "level",
                        "30"
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "展览馆"
            },
            "name": "展览馆"
        },
        {
            "id": "pois_140200_100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 16,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140200"
                ],
                [
                    "==",
                    "level",
                    100
                ],
                [
                    "!=",
                    "gdpoint",
                    "140200100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "展览馆"
            },
            "name": "展览馆"
        },
        {
            "id": "pois_110200022",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200022"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110000001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110000001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "森林公园"
            },
            "name": "森林公园"
        },
        {
            "id": "pois_141300",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141300"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_71",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "科研机构"
            },
            "name": "科研机构"
        },
        {
            "id": "pois_141206",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141206"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "学校"
            },
            "name": "学校"
        },
        {
            "id": "pois_141201010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "141201010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_12",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_141200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141200"
                ],
                [
                    "==",
                    "level",
                    10
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "学校"
            },
            "name": "学校"
        },
        {
            "id": "pois_140300",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140300"
                ],
                [
                    "==",
                    "level",
                    100
                ],
                [
                    "!=",
                    "gdpoint",
                    "140300010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "会展中心"
            },
            "name": "会展中心"
        },
        {
            "id": "pois_120304",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120304"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_100100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100100"
                ],
                [
                    "<=",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "100100010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_140500",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140500"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_139",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "图书馆"
            },
            "name": "图书馆"
        },
        {
            "id": "pois_141500",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141500"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_55",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "驾校"
            },
            "name": "驾校"
        },
        {
            "id": "pois_180200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "180200"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_152",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "收费站"
            },
            "name": "收费站"
        },
        {
            "id": "pois_130603",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130603"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        100
                    ],
                    [
                        "==",
                        "level",
                        10100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_55",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "验车场"
            },
            "name": "验车场"
        },
        {
            "id": "pois_150104011",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "150104011"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "飞机场-航站楼"
            },
            "name": "飞机场-航站楼"
        },
        {
            "id": "pois_010200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "010200"
                ],
                [
                    "==",
                    "type",
                    "010300"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_153",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "其它能源站"
            },
            "name": "其它能源站"
        },
        {
            "id": "pois_010100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "010100"
                ],
                [
                    "==",
                    "type",
                    "010103"
                ],
                [
                    "==",
                    "type",
                    "010104"
                ],
                [
                    "==",
                    "type",
                    "010105"
                ],
                [
                    "==",
                    "type",
                    "010107"
                ],
                [
                    "==",
                    "type",
                    "010108"
                ],
                [
                    "==",
                    "type",
                    "010109"
                ],
                [
                    "==",
                    "type",
                    "010110"
                ],
                [
                    "==",
                    "type",
                    "010111"
                ],
                [
                    "==",
                    "type",
                    "010112"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_58",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "加油站"
            },
            "name": "加油站"
        },
        {
            "id": "pois_140000010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "140000010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "少年宫"
            },
            "name": "少年宫"
        },
        {
            "id": "pois_140800010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "140800010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "文化宫"
            },
            "name": "文化宫"
        },
        {
            "id": "pois_120203",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120203"
                ],
                [
                    "!=",
                    "gdpoint",
                    "120203100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_9",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "商住两用楼宇"
            },
            "name": "商住两用楼宇"
        },
        {
            "id": "pois_120202",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120202"
                ],
                [
                    "!=",
                    "gdpoint",
                    "120202100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_9",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "工业大厦建筑物"
            },
            "name": "工业大厦建筑物"
        },
        {
            "id": "pois_090203010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "090203010"
                ],
                [
                    "==",
                    "gdpoint",
                    "090205010"
                ],
                [
                    "==",
                    "gdpoint",
                    "090206010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_68",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "眼科医院、胸科医院、骨科医院"
            },
            "name": "眼科医院、胸科医院、骨科医院"
        },
        {
            "id": "pois_080603_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080603"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        100
                    ],
                    [
                        "==",
                        "level",
                        10100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "080603100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_66",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "剧院"
            },
            "name": "剧院"
        },
        {
            "id": "pois_140700_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140700"
                ],
                [
                    "==",
                    "level",
                    "10"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_178",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "天文馆"
            },
            "name": "天文馆"
        },
        {
            "id": "pois_120200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120200"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_9",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "楼宇相关"
            },
            "name": "楼宇相关"
        },
        {
            "id": "pois_110000020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "110000020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园，不包含森林公园"
            },
            "name": "公园，不包含森林公园"
        },
        {
            "id": "pois_160139",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160139"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_216",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国邮政储蓄银行"
            },
            "name": "中国邮政储蓄银行"
        },
        {
            "id": "pois_160109",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160109"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_209",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "招商银行"
            },
            "name": "招商银行"
        },
        {
            "id": "pois_160108",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160108"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_208",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "交通银行"
            },
            "name": "交通银行"
        },
        {
            "id": "pois_160107",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160107"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_207",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国农业银行"
            },
            "name": "中国农业银行"
        },
        {
            "id": "pois_160106",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160106"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_206",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国建设银行"
            },
            "name": "中国建设银行"
        },
        {
            "id": "pois_160105",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160105"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_205",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国工商银行"
            },
            "name": "中国工商银行"
        },
        {
            "id": "pois_160104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160104"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_204",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国银行"
            },
            "name": "中国银行"
        },
        {
            "id": "pois_160103",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160103"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_203",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国进出口银行"
            },
            "name": "中国进出口银行"
        },
        {
            "id": "pois_160102",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160102"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_202",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "国家开发银行"
            },
            "name": "国家开发银行"
        },
        {
            "id": "pois_160101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "160101"
                ],
                [
                    "!=",
                    "gdpoint",
                    "160100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_201",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中国人民银行"
            },
            "name": "中国人民银行"
        },
        {
            "id": "pois_060701",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "060701"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_174",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "小商品市场"
            },
            "name": "小商品市场"
        },
        {
            "id": "pois_110104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110104"
                ],
                [
                    "any",
                    [
                        "!=",
                        "level",
                        "10"
                    ],
                    [
                        "!=",
                        "level",
                        "20"
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "110104100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_53",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "水族馆"
            },
            "name": "水族馆"
        },
        {
            "id": "pois_080601",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080601"
                ],
                [
                    "==",
                    "level",
                    100
                ],
                [
                    "!=",
                    "gdpoint",
                    "080601100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_65",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "电影院"
            },
            "name": "电影院"
        },
        {
            "id": "pois_080501",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080501"
                ],
                [
                    "!=",
                    "gdpoint",
                    "080501100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_168",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "游乐场"
            },
            "name": "游乐场"
        },
        {
            "id": "pois_120302_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120302"
                ],
                [
                    ">",
                    "level",
                    110
                ],
                [
                    "<",
                    "level",
                    10110
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "住宅小区"
            },
            "name": "住宅小区"
        },
        {
            "id": "pois_100105_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100105"
                ],
                [
                    "!=",
                    "gdpoint",
                    "100105100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_060102",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "060102"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_13",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "普通商场"
            },
            "name": "普通商场"
        },
        {
            "id": "pois_060100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "060100"
                ],
                [
                    "!=",
                    "gdpoint",
                    "060100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_13",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "购物中心"
            },
            "name": "购物中心"
        },
        {
            "id": "pois_110205",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110205"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_173",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "道观"
            },
            "name": "道观"
        },
        {
            "id": "pois_120303",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120303"
                ],
                [
                    "<",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宿舍"
            },
            "name": "宿舍"
        },
        {
            "id": "pois_141101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141101"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_134",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "电视台"
            },
            "name": "电视台"
        },
        {
            "id": "pois_140400_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140400"
                ],
                [
                    "==",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_187",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "美术馆"
            },
            "name": "美术馆"
        },
        {
            "id": "pois_140400",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140400"
                ],
                [
                    "<",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_187",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "美术馆"
            },
            "name": "美术馆"
        },
        {
            "id": "pois_120201010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "120201010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_9",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "商务写字楼"
            },
            "name": "商务写字楼"
        },
        {
            "id": "pois_130702",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130702"
                ],
                [
                    "==",
                    "level",
                    "100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "政府机构及社会团体-国税机关"
            },
            "name": "政府机构及社会团体-国税机关"
        },
        {
            "id": "pois_130503002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130503002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "法院-除高级人民法院，最高人民法院"
            },
            "name": "法院-除高级人民法院，最高人民法院"
        },
        {
            "id": "pois_130502002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130502002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "市人民检察院"
            },
            "name": "市人民检察院"
        },
        {
            "id": "pois_130500002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130500002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公检法机关-除司法厅、直辖市局机关"
            },
            "name": "公检法机关-除司法厅、直辖市局机关"
        },
        {
            "id": "pois_130501002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130501002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_121",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公安警察-公安厅、公安局"
            },
            "name": "公安警察-公安厅、公安局"
        },
        {
            "id": "pois_130104004",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130104004"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "区县级政府及事业单位-区县局级"
            },
            "name": "区县级政府及事业单位-区县局级"
        },
        {
            "id": "pois_110101031",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110101031"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110200023",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200023"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_120302_30",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120302"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        30
                    ],
                    [
                        "==",
                        "level",
                        110
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "120302100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "住宅小区"
            },
            "name": "住宅小区"
        },
        {
            "id": "pois_141204",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141204"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "141204100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_20",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "幼儿园"
            },
            "name": "幼儿园"
        },
        {
            "id": "pois_090100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "090100"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        100
                    ],
                    [
                        "==",
                        "level",
                        1312
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "090100100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_49",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "综合医院"
            },
            "name": "综合医院"
        },
        {
            "id": "pois_141202",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141202"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1202
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "141202100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中学"
            },
            "name": "中学"
        },
        {
            "id": "pois_130100050",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130100050"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "乡镇政府"
            },
            "name": "乡镇政府"
        },
        {
            "id": "pois_130105050",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130105050"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "镇政府、乡人民政府、乡政府"
            },
            "name": "镇政府、乡人民政府、乡政府"
        },
        {
            "id": "pois_120300",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120300"
                ],
                [
                    "!=",
                    "gdpoint",
                    "120300100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "住宅小区"
            },
            "name": "住宅小区"
        },
        {
            "id": "pois_100105",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100105"
                ],
                [
                    "!=",
                    "gdpoint",
                    "100105100"
                ],
                [
                    "!=",
                    "gdpoint",
                    "100105010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_100100010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "100100010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_090207010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "090207010"
                ],
                [
                    "==",
                    "gdpoint",
                    "090208010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_68",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "肿瘤医院、脑科医院"
            },
            "name": "肿瘤医院、脑科医院"
        },
        {
            "id": "pois_080603",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080603"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        1211
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_66",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "剧院"
            },
            "name": "剧院"
        },
        {
            "id": "pois_140600_20",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140600"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "140600100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "科技馆"
            },
            "name": "科技馆"
        },
        {
            "id": "pois_110207",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110207"
                ],
                [
                    "!=",
                    "gdpoint",
                    "110207100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_23",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "回民寺"
            },
            "name": "回民寺"
        },
        {
            "id": "pois_110206_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110206"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "110206100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_23",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "教堂"
            },
            "name": "教堂"
        },
        {
            "id": "pois_110206_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110206"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "110206100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_23",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "教堂"
            },
            "name": "教堂"
        },
        {
            "id": "pois_141202_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141202"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "141202100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中学"
            },
            "name": "中学"
        },
        {
            "id": "pois_141203_10100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141203"
                ],
                [
                    "==",
                    "level",
                    10100
                ],
                [
                    "!=",
                    "gdpoint",
                    "141203100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "小学"
            },
            "name": "小学"
        },
        {
            "id": "pois_141203_100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141203"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1202
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "141203100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "小学"
            },
            "name": "小学"
        },
        {
            "id": "pois_141203_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141203"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "141203100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "小学"
            },
            "name": "小学"
        },
        {
            "id": "pois_110204_30",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110204"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        30
                    ],
                    [
                        "==",
                        "level",
                        100
                    ],
                    [
                        "==",
                        "level",
                        1231
                    ],
                    [
                        "==",
                        "level",
                        2302
                    ],
                    [
                        "==",
                        "level",
                        10010
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "110204100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "纪念馆"
            },
            "name": "纪念馆"
        },
        {
            "id": "pois_090100010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 15,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "090100010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_49",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "综合医院"
            },
            "name": "综合医院"
        },
        {
            "id": "pois_100103001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "100103001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "四星级宾馆"
            },
            "name": "四星级宾馆"
        },
        {
            "id": "pois_150400002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "150400002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_42",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "长途汽车站"
            },
            "name": "长途汽车站"
        },
        {
            "id": "pois_150300",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "150300"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_52",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "港口码头"
            },
            "name": "港口码头"
        },
        {
            "id": "pois_130201001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130201001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "外国使领馆"
            },
            "name": "外国使领馆"
        },
        {
            "id": "pois_110202022",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110202022"
                ],
                [
                    "==",
                    "level",
                    30
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_120302_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120302"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "120302100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_11",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "住宅小区"
            },
            "name": "住宅小区"
        },
        {
            "id": "pois_100105010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "100105010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_100104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100104"
                ],
                [
                    "!=",
                    "gdpoint",
                    "100104100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_140600_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140600"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "科技馆"
            },
            "name": "科技馆"
        },
        {
            "id": "pois_110100010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110100010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园广场"
            },
            "name": "公园广场"
        },
        {
            "id": "pois_141201008",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "141201008"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_140100_30",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140100"
                ],
                [
                    "==",
                    "level",
                    30
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "博物馆"
            },
            "name": "博物馆"
        },
        {
            "id": "pois_141201_110",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141201"
                ],
                [
                    "==",
                    "level",
                    110
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_110102003",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110102003"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "动物园"
            },
            "name": "动物园"
        },
        {
            "id": "pois_130503001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130503001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公检法机关"
            },
            "name": "公检法机关"
        },
        {
            "id": "pois_130103004",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130103004"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "地市级政府及事业单位"
            },
            "name": "地市级政府及事业单位"
        },
        {
            "id": "pois_190307",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190307"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "桥"
            },
            "name": "桥"
        },
        {
            "id": "pois_141202_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141202"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "141202100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_170",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "中学"
            },
            "name": "中学"
        },
        {
            "id": "pois_130101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 14,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "130101"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "国家级机关及事业单位"
            },
            "name": "国家级机关及事业单位"
        },
        {
            "id": "pois_141201007",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "141201007"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_10",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_100102",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100102"
                ],
                [
                    "==",
                    "level",
                    100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_130500001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130500001"
                ],
                [
                    "==",
                    "gdpoint",
                    "130502001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公检法机关"
            },
            "name": "公检法机关"
        },
        {
            "id": "pois_130501001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "130501001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_121",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公安局"
            },
            "name": "公安局"
        },
        {
            "id": "pois_150200_20",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 13,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "150200"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        1202
                    ]
                ],
                [
                    "!=",
                    "gdpoint",
                    "150200100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_36",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "火车站"
            },
            "name": "火车站"
        },
        {
            "id": "pois_180300_180301",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "type",
                    "180300"
                ],
                [
                    "==",
                    "type",
                    180301
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_176",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "服务区"
            },
            "name": "服务区"
        },
        {
            "id": "pois_110101021",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110101021"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园"
            },
            "name": "公园"
        },
        {
            "id": "pois_060101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "060101"
                ],
                [
                    "!=",
                    "level",
                    10100
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_13",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "购物中心"
            },
            "name": "购物中心"
        },
        {
            "id": "pois_141201_20",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141201"
                ],
                [
                    "==",
                    "level",
                    20
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_120201011",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "120201011"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_9",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "商务写字楼"
            },
            "name": "商务写字楼"
        },
        {
            "id": "pois_120201",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "120201"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1
                    ],
                    [
                        "==",
                        "level",
                        10
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "商务写字楼"
            },
            "name": "商务写字楼"
        },
        {
            "id": "pois_110101002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110101002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园，不包括森林公园"
            },
            "name": "公园，不包括森林公园"
        },
        {
            "id": "pois_080201001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "080201001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 3,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_26",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高尔夫球场"
            },
            "name": "高尔夫球场"
        },
        {
            "id": "pois_190200",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190200"
                ],
                [
                    "!=",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            12
                        ],
                        [
                            14,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#EBF8EF",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "自然地名"
            },
            "name": "自然地名"
        },
        {
            "id": "pois_190108_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190108"
                ],
                [
                    "!=",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 10,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#989694",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "村庄级地名、村组级地名"
            },
            "name": "村庄级地名、村组级地名"
        },
        {
            "id": "pois_190108_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190108"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#989694",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "村庄级地名、村组级地名"
            },
            "name": "村庄级地名、村组级地名"
        },
        {
            "id": "pois_190306",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190306"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_165",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "立交桥"
            },
            "name": "立交桥"
        },
        {
            "id": "pois_190203_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190203"
                ],
                [
                    "!=",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_166",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "山名"
            },
            "name": "山名"
        },
        {
            "id": "pois_110200030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200030"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110200002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110203130",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110203130"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_140100_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "140100"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "博物馆"
            },
            "name": "博物馆"
        },
        {
            "id": "pois_140100_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "label",
                    "故宫博物院"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "博物馆"
            },
            "name": "博物馆"
        },
        {
            "id": "pois_090101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "090101"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_49",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "三级甲等医院"
            },
            "name": "三级甲等医院"
        },
        {
            "id": "pois_141201_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141201"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        1
                    ],
                    [
                        "==",
                        "level",
                        1191
                    ],
                    [
                        "==",
                        "level",
                        1192
                    ],
                    [
                        "==",
                        "level",
                        1211
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_130104002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 12,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130104002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "区县级政府及事业单位"
            },
            "name": "区县级政府及事业单位"
        },
        {
            "id": "pois_140300010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "140300010"
                ],
                [
                    "all",
                    [
                        "==",
                        "type",
                        "140300"
                    ],
                    [
                        "==",
                        "level",
                        10
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "会展中心"
            },
            "name": "会展中心"
        },
        {
            "id": "pois_110000030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110000030"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110202031",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110202031"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            10,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110200021",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200021"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            10,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110102002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110102002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_54",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "动物园"
            },
            "name": "动物园"
        },
        {
            "id": "pois_110203120",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110203120"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110201_30",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110201"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        30
                    ],
                    [
                        "==",
                        "level",
                        110
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_150400",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "150400"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_42",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高尔夫球场"
            },
            "name": "高尔夫球场"
        },
        {
            "id": "pois_141201009",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "141201009"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_141201_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "141201"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_18",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "高等院校"
            },
            "name": "高等院校"
        },
        {
            "id": "pois_130103002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130103002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "地市级政府及事业单位"
            },
            "name": "地市级政府及事业单位"
        },
        {
            "id": "pois_110101020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110101020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园，不包括森林公园"
            },
            "name": "公园"
        },
        {
            "id": "pois_110103001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110103001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "植物园"
            },
            "name": "植物园"
        },
        {
            "id": "pois_110204_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110204"
                ],
                [
                    "==",
                    "level",
                    10
                ],
                [
                    "!=",
                    "gdpoint",
                    "110204100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_24",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "纪念馆"
            },
            "name": "纪念馆"
        },
        {
            "id": "pois_100103_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "100103"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "景点"
            },
            "name": "景点"
        },
        {
            "id": "pois_110104_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110104"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        "10"
                    ],
                    [
                        "==",
                        "level",
                        "20"
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_53",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "水族馆"
            },
            "name": "水族馆"
        },
        {
            "id": "pois_110000010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110000010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110203110",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110203110"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110203002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110203002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "森林公园"
            },
            "name": "森林公园"
        },
        {
            "id": "pois_150100_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "150100"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_34",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "机场相关"
            },
            "name": "机场相关"
        },
        {
            "id": "pois_11430000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11430000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_15",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "宾馆酒店"
            },
            "name": "宾馆酒店"
        },
        {
            "id": "pois_11420000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11420000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_174",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "家居建材市场"
            },
            "name": "家居建材市场"
        },
        {
            "id": "pois_11410000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11410000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_54",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "产业园区"
            },
            "name": "产业园区"
        },
        {
            "id": "pois_080101",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "080101"
                ],
                [
                    "==",
                    "level",
                    20
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_167",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "综合体育馆"
            },
            "name": "综合体育馆"
        },
        {
            "id": "pois_110102_20",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110102"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        20
                    ],
                    [
                        "==",
                        "level",
                        30
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "动物园"
            },
            "name": "动物园"
        },
        {
            "id": "pois_11521000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11521000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园"
            },
            "name": "公园"
        },
        {
            "id": "pois_11520000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11520000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "公园"
            },
            "name": "公园"
        },
        {
            "id": "pois_11440000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "11440000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景名胜"
            },
            "name": "风景名胜"
        },
        {
            "id": "pois_110102_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 10,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110102"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_54",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "动物园"
            },
            "name": "动物园"
        },
        {
            "id": "pois_110201_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110201"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区，景点"
            },
            "name": "风景区，景点"
        },
        {
            "id": "pois_110208",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110208"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_37",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#949799",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "海滩"
            },
            "name": "海滩"
        },
        {
            "id": "pois_110103",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "110103"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        20
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110101030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110101030"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110202020",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110202020"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110202030",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110202030"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "森林公园"
            },
            "name": "森林公园"
        },
        {
            "id": "pois_110202010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110202010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110200020_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "110200020"
                ],
                [
                    "!=",
                    "label",
                    "天安门"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110203100",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "110203100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110200010",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "110200010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_10408000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "10408000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_10407000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "10407000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_164",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_10406000",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "10406000"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_165",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4f932a",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "pois_110203001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "110203001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "森林公园"
            },
            "name": "森林公园"
        },
        {
            "id": "pois_110200001",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "==",
                    "gdpoint",
                    "110200001"
                ],
                [
                    "==",
                    "gdpoint",
                    "110202001"
                ],
                [
                    "==",
                    "gdpoint",
                    "110101001"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_7",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#187607",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "森林公园"
            },
            "name": "森林公园"
        },
        {
            "id": "pois_190203_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190203"
                ],
                [
                    "==",
                    "level",
                    10
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_166",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "山名"
            },
            "name": "山名"
        },
        {
            "id": "pois_190201",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190201"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 30,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "海湾，海峡"
            },
            "name": "海湾，海峡"
        },
        {
            "id": "pois_190106_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190106"
                ],
                [
                    "any",
                    [
                        "==",
                        "level",
                        10
                    ],
                    [
                        "==",
                        "level",
                        100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 6,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#716f6d",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "乡镇级地名"
            },
            "name": "乡镇级地名"
        },
        {
            "id": "pois_190106_3",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190106"
                ],
                [
                    "any",
                    [
                        "!=",
                        "level",
                        10
                    ],
                    [
                        "!=",
                        "level",
                        100
                    ]
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 8,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_1",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#716f6d",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "乡镇级地名"
            },
            "name": "乡镇级地名"
        },
        {
            "id": "pois_130102004",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130102004"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_8",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "国家级机关及事业单位-省厅"
            },
            "name": "国家级机关及事业单位-省厅"
        },
        {
            "id": "pois_130102005",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130102005"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "国家级机关及事业单位-省厅"
            },
            "name": "国家级机关及事业单位-省厅"
        },
        {
            "id": "pois_130102002",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 11,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "gdpoint",
                    "130102002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            11
                        ],
                        [
                            14,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_4",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#4e4f52",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "人民政府"
            },
            "name": "人民政府"
        },
        {
            "id": "pois_150200_10",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "150200"
                ],
                [
                    "==",
                    "level",
                    10
                ],
                [
                    "!=",
                    "gdpoint",
                    "150200100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_36",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "火车站"
            },
            "name": "火车站"
        },
        {
            "id": "pois_150104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 20,
            "filter": [
                "any",
                [
                    "all",
                    [
                        "==",
                        "type",
                        "150104"
                    ],
                    [
                        "any",
                        [
                            "==",
                            "level",
                            10
                        ],
                        [
                            "==",
                            "level",
                            20
                        ]
                    ]
                ],
                [
                    "==",
                    "gdpoint",
                    "150104010"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            11,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
                "icon-image": "sprite_34",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#025ba8",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "交通设施服务;飞机场"
            },
            "name": "交通设施服务;飞机场"
        },
        {
            "id": "pois_190105",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 11,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190105"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            12
                        ],
                        [
                            9,
                            12
                        ],
                        [
                            10,
                            12
                        ],
                        [
                            22,
                            12
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_q_2_8",
                "icon-size": 0.7,
                "icon-text-fit": "both",
                "icon-text-fit-padding": [
                    10,
                    20,
                    12,
                    20
                ]
            },
            "paint": {
                "text-color": {
                    "property": "type",
                    "type": "categorical",
                    "stops": [
                        [
                            {
                                "zoom": 10,
                                "value": "190105"
                            },
                            "#ffffff"
                        ],
                        [
                            {
                                "zoom": 11,
                                "value": "190105"
                            },
                            "#ffffff"
                        ]
                    ]
                },
                "text-halo-color": "#EBF8EF",
                "text-halo-width": 0.1,
                "text-opacity": 0.8,
                "icon-opacity": 0.7
            },
            "metadata": {
                "maputnik:comment": "区县级行政区划"
            },
            "name": "区县级行政区划"
        },
        {
            "id": "pois_190104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 11,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "190104"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            16
                        ],
                        [
                            9,
                            16
                        ],
                        [
                            10,
                            16
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 250,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 0.5,
                "text-allow-overlap": false,
                "text-rotation-alignment": "viewport",
                "text-field": "{label}",
                "text-letter-spacing": 0.1,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "text-color": {
                    "property": "type",
                    "type": "categorical",
                    "stops": [
                        [
                            {
                                "zoom": 10,
                                "value": "190104"
                            },
                            "#000000"
                        ],
                        [
                            {
                                "zoom": 11,
                                "value": "190104"
                            },
                            "#000000"
                        ]
                    ]
                },
                "text-halo-color": "#EBF8EF",
                "text-halo-width": 0.01
            },
            "metadata": {
                "maputnik:comment": "地级市地名"
            },
            "name": "地级市地名"
        },
        {
            "id": "pois_110200020_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 9,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "label",
                    "天安门"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 2,
                    "stops": [
                        [
                            8,
                            13
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-max-angle": 30,
                "text-max-width": 9,
                "symbol-spacing": 10,
                "text-font": [
                    "sourcehansanscn-normal"
                ],
                "symbol-placement": "point",
                "text-padding": 4,
                "text-rotation-alignment": "viewport",
                "text-field": "",
                "text-letter-spacing": 0.01,
                "visibility": "visible",
                "icon-allow-overlap": false,
                "icon-ignore-placement": false,
                "text-anchor": "center",
                "text-offset": [
                    0,
                    0
                ],
                "icon-image": "sprite_2",
                "icon-size": 1
            },
            "paint": {
                "text-color": "#7b4717",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1
            },
            "metadata": {
                "maputnik:comment": "风景区"
            },
            "name": "风景区"
        },
        {
            "id": "dlm",
            "type": "fill",
            "source": "local-h",
            "source-layer": "dlm",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#354a52"
            }
        },
        {
            "id": "gld",
            "type": "fill",
            "source": "local-h",
            "source-layer": "gld",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#86869c"
            }
        },
        {
            "id": "lhd",
            "type": "fill",
            "source": "local-h",
            "source-layer": "lhd",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#73b273"
            }
        },
        {
            "id": "tsfh",
            "type": "fill",
            "source": "local-h",
            "source-layer": "tsfh",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": [
                    "get",
                    "colour"
                ]
            }
        },
        {
            "id": "xraqd",
            "type": "fill",
            "source": "local-h",
            "source-layer": "xraqd",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b0b0b0"
            }
        },
        {
            "id": "L_bx_split_1",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx_split",
            "minzoom": 17,
            "maxzoom": 18,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    2.5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_split_2",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx_split",
            "minzoom": 18,
            "maxzoom": 19,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_split_3",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx_split",
            "minzoom": 19,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    10,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_split_4",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx_split",
            "minzoom": 20,
            "maxzoom": 21,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    20,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_split_5",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx_split",
            "minzoom": 21,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    40,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_1",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx",
            "minzoom": 17,
            "maxzoom": 18,
            "filter": [
                "all",
                [
                    "==",
                    "bxxx",
                    "2"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    2.5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_2",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx",
            "minzoom": 18,
            "maxzoom": 19,
            "filter": [
                "all",
                [
                    "==",
                    "bxxx",
                    "2"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_3",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx",
            "minzoom": 19,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "bxxx",
                    "2"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    10,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_4",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx",
            "minzoom": 20,
            "maxzoom": 21,
            "filter": [
                "all",
                [
                    "==",
                    "bxxx",
                    "2"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    20,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_bx_5",
            "type": "line",
            "source": "local-h",
            "source-layer": "bx",
            "minzoom": 21,
            "maxzoom": 20,
            "filter": [
                "all",
                [
                    "==",
                    "bxxx",
                    "2"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    40,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_rxhd_1",
            "type": "line",
            "source": "local-h",
            "source-layer": "rxhd",
            "minzoom": 17,
            "maxzoom": 18,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    2.5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_rxhd_2",
            "type": "line",
            "source": "local-h",
            "source-layer": "rxhd",
            "minzoom": 18,
            "maxzoom": 19,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_rxhd_3",
            "type": "line",
            "source": "local-h",
            "source-layer": "rxhd",
            "minzoom": 19,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    10,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_rxhd_4",
            "type": "line",
            "source": "local-h",
            "source-layer": "rxhd",
            "minzoom": 20,
            "maxzoom": 21,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    20,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_rxhd_5",
            "type": "line",
            "source": "local-h",
            "source-layer": "rxhd",
            "minzoom": 21,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": [
                    "get",
                    "colour"
                ],
                "line-width": [
                    "*",
                    40,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_tzx_1",
            "type": "line",
            "source": "local-h",
            "source-layer": "tzx",
            "minzoom": 17,
            "maxzoom": 18,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": [
                    "*",
                    3.5,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_tzx_2",
            "type": "line",
            "source": "local-h",
            "source-layer": "tzx",
            "minzoom": 18,
            "maxzoom": 19,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": [
                    "*",
                    7,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_tzx_3",
            "type": "line",
            "source": "local-h",
            "source-layer": "tzx",
            "minzoom": 19,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": [
                    "*",
                    14,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_tzx_4",
            "type": "line",
            "source": "local-h",
            "source-layer": "tzx",
            "minzoom": 20,
            "maxzoom": 21,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": [
                    "*",
                    28,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_tzx_5",
            "type": "line",
            "source": "local-h",
            "source-layer": "tzx",
            "minzoom": 21,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffffff",
                "line-width": [
                    "*",
                    55,
                    [
                        "to-number",
                        [
                            "get",
                            "bxkd"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "L_jsq",
            "type": "line",
            "source": "local-h",
            "source-layer": "jsq",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#000000",
                "line-width": {
                    "stops": [
                        [
                            17,
                            1.05
                        ],
                        [
                            18,
                            2.1
                        ],
                        [
                            19,
                            4.2
                        ],
                        [
                            20,
                            8.4
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_jsq_split",
            "type": "line",
            "source": "local-h",
            "source-layer": "jsq",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ffff00",
                "line-width": {
                    "stops": [
                        [
                            17,
                            1
                        ],
                        [
                            18,
                            2
                        ],
                        [
                            19,
                            3.2
                        ],
                        [
                            20,
                            4.4
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            17,
                            [
                                2,
                                2
                            ]
                        ],
                        [
                            18,
                            [
                                2,
                                2
                            ]
                        ],
                        [
                            19,
                            [
                                2,
                                2
                            ]
                        ],
                        [
                            20,
                            [
                                1.4,
                                1.4
                            ]
                        ],
                        [
                            21,
                            [
                                1.4,
                                1.4
                            ]
                        ],
                        [
                            22,
                            [
                                2,
                                2
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_hl_1",
            "type": "line",
            "source": "local-h",
            "source-layer": "hl",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#b2b2b2",
                "line-width": {
                    "stops": [
                        [
                            17,
                            0.8
                        ],
                        [
                            18,
                            1.5
                        ],
                        [
                            19,
                            2
                        ],
                        [
                            20,
                            2.4
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_hl_2",
            "type": "line",
            "source": "local-h",
            "source-layer": "hl",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#b2b2b2",
                "line-width": {
                    "stops": [
                        [
                            17,
                            3
                        ],
                        [
                            18,
                            3
                        ],
                        [
                            19,
                            4.5
                        ],
                        [
                            20,
                            4.5
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            17,
                            [
                                1,
                                3
                            ]
                        ],
                        [
                            18,
                            [
                                1,
                                3
                            ]
                        ],
                        [
                            19,
                            [
                                1,
                                3
                            ]
                        ],
                        [
                            20,
                            [
                                1,
                                3
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_hl_3",
            "type": "line",
            "source": "local-h",
            "source-layer": "hl",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "butt",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#4e4e4e",
                "line-width": {
                    "stops": [
                        [
                            17,
                            2
                        ],
                        [
                            18,
                            2
                        ],
                        [
                            19,
                            3
                        ],
                        [
                            20,
                            3
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            17,
                            [
                                1,
                                5
                            ]
                        ],
                        [
                            18,
                            [
                                1,
                                5
                            ]
                        ],
                        [
                            19,
                            [
                                1,
                                5
                            ]
                        ],
                        [
                            20,
                            [
                                1,
                                5
                            ]
                        ],
                        [
                            21,
                            [
                                1,
                                5
                            ]
                        ],
                        [
                            22,
                            [
                                1,
                                5
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_lmwz",
            "type": "fill",
            "source": "local-h",
            "source-layer": "lmwz",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ffffff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_dxjt",
            "type": "fill",
            "source": "local-h",
            "source-layer": "dxjt",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ffffff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "L_zxc",
            "type": "fill",
            "source": "local-h",
            "source-layer": "zxc",
            "minzoom": 17,
            "maxzoom": 20,
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ffffff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            11.5,
                            1
                        ]
                    ]
                }
            }
        }
    ],
    "id": "c0kjoo8km"
};