var  mapabc_j12 = {
  "version": 8,
  "name": "mapabc",
  "metadata": {},
  "sources": {
    "local": {
      "type": "vector",
      "tiles": [
        "http://114.215.68.185:18130/gs/{z}-{x}-{y}"
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
        "http://114.215.68.185:18110/gat/{z}-{x}-{y}"
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
        "background-color": "#0a1a29",
        "background-opacity": 1
      }
    },
    {
      "id": "LWOcean",
      "type": "fill",
      "source": "local",
      "source-layer": "wocean",
      "minzoom": 1,
      "maxzoom": 7,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(29, 50, 67, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "LWOceanchn",
      "type": "fill",
      "source": "local",
      "source-layer": "wocean",
      "minzoom": 8,
      "maxzoom": 23,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(29, 50, 67, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "LLand",
      "type": "fill",
      "source": "local",
      "source-layer": "nationregion",
      "minzoom": 3,
      "maxzoom": 7,
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
        "fill-color": "rgba(10, 26, 41, 1)",
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
      "minzoom": 1,
      "maxzoom": 7,
      "filter": [
        "all"
      ],
      "layout": {},
      "paint": {
        "fill-color": "#0f2939",
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
      "minzoom": 1,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "==",
          "wlevel",
          1
        ],
        [
          "==",
          "wriver_xz",
          1
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "rgba(26, 51, 67, 1)",
        "fill-opacity": 1
      }
    },
    {
      "id": "LWRiverAreaForeign",
      "type": "fill",
      "source": "local",
      "source-layer": "wriver",
      "minzoom": 1,
      "maxzoom": 7,
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
        "fill-color": "rgba(26, 51, 67, 1)",
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
      "minzoom": 7,
      "maxzoom": 8,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 6,
      "maxzoom": 7,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 5,
      "maxzoom": 6,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 4,
      "maxzoom": 5,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 3,
      "maxzoom": 4,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 2,
      "maxzoom": 3,
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
        "fill-color": "rgba(10, 26, 41, 1)"
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
      "minzoom": 1,
      "maxzoom": 2,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(10, 26, 41, 1)"
      }
    },
    {
      "id": "LCLandUseArea-w1",
      "type": "fill",
      "source": "local",
      "source-layer": "landusearea",
    "minzoom": 8,
    "maxzoom": 9,
      "filter": [
    "all",
      ["in",
      "lua_type",
      1010,
      1020,
      1040,
      1060
       ],
       [
       "all",
         ["==",
        "lua_type",
        1030
         ],
          ["<=",
        "disp_class",
        5       
         ]
      ] 
      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#1a3343",
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
      "source-layer": "landusearea",
    "minzoom": 10,
    "maxzoom": 11,
      "filter": [
    "all",
      ["in",
      "lua_type",
      1000,
      1010,
      1020,
      1040,
      1060
       ],
       [
       "all",
         ["==",
        "lua_type",
        1030
         ],
          ["<=",
        "disp_class",
        5       
         ]
      ] 
      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#1a3343",
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
      "source-layer": "landusearea",
    "minzoom": 12,
    "maxzoom": 22,
      "filter": [
    "all",
      ["in",
      "lua_type",
      1000,
      1010,
      1020,
      1020,
      1040,
      1060
       ]
      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#1a3343",
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
      "source-layer": "landusearea",
      "minzoom": 8,
    "maxzoom": 10,
      "filter": [
    "all",
      ["in",
      "lua_type",
      2030,
      2040,
      2050      
       ],
       [
       "all",
         ["==",
        "lua_type",
        2020
         ],
          ["in",
        "disp_class",
        1,2       
         ]
      ] 
      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#0f2939",
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
      "source-layer": "landusearea",
      "minzoom": 10,
    "maxzoom": 22,
      "filter": [
    "all",
      ["in",
      "lua_type",
      2020,
      2030,
      2040,
      2050      
       ]      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#0f2939",
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
      "source-layer": "landusearea",
      "minzoom": 10,
    "maxzoom": 22,
      "filter": [
    "all",
      ["in",
      "lua_type",
      2000,
      2010  
       ]      
    ],
      "layout": {},
      "paint": {
        "fill-color": "#0f2939",
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
      "source-layer": "settlementarea",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "in",
        "sett_type",
        2020
 

      ],
      "layout": {},
      "paint": {
        "fill-color": "#0f2939",
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
      "source-layer": "settlementarea",
      "minzoom": 14,
      "filter": [
        "in",
        "sett_type",
        1000,       
        1090
      ],
      "layout": {},
      "paint": {
        "fill-color": "#1a3343",
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
      "source-layer": "settlementarea",
      "minzoom": 15,
      "filter": [
        "in",
        "sett_type",
        4108,       
        4111
      ],
      "layout": {},
      "paint": {
        "fill-color": "#1a3343",
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
      "minzoom": 15,
      "maxzoom": 24,
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
        "fill-opacity": 1
      },
    "metadata": {
    "maputnik:comment": "地铁面"
  } 
    },
    {
      "id": "LWRiver_L_1",
      "type": "line",
      "source": "local",
      "source-layer": "wriver_l",
      "minzoom": 3,
      "maxzoom": 8,
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
    "line-color": "rgba(26, 51, 67, 1)",
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
      "source": "local",
      "source-layer": "wriver_l",
      "minzoom": 3,
      "maxzoom": 8,
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
        "line-color": "rgba(26, 51, 67, 1)"
      }
    },
    
 
   
  
    {
      "id": "LWOrderline_3",
      "type": "line",
      "metadata": {
        "maputnik:comment": "世界洲界"
      },
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 1,
      "maxzoom": 7,
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
        "line-color": "rgba(135, 63, 62, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          6,
          4
        ]
      }
    },
    {
      "id": "LWOrderline_2",
      "type": "line",
      "metadata": {
        "maputnik:comment": "国外未定国界"
      },
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 1,
      "maxzoom": 7,
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
        "line-color": "rgba(157, 164, 186, 1)",
        "line-width": 1,
        "line-dasharray": [
          6,
          4
        ]
      }
    },
    {
      "id": "LWOrderline",
      "type": "line",
      "metadata": {
        "maputnik:comment": "国外已定国界"
      },
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 1,
      "maxzoom": 7,
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
        "line-color": "rgba(169, 169, 168, 1)",
        "line-width": {
          "stops": [
            [
              2,
              0.8
            ],
            [
              4,
              0.9
            ]
          ]
        }
      }
    },
    {
      "id": "LWProOrderline",
      "type": "line",
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 2,
      "maxzoom": 7,
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
              "rgba(169, 168, 169, 1)"
            ],
            [
              {
                "zoom": 2,
                "value": 21
              },
              "rgba(169, 168, 169, 1)"
            ],
            [
              {
                "zoom": 2,
                "value": 22
              },
              "rgba(169, 169, 168, 1)"
            ],
            [
              {
                "zoom": 2,
                "value": 24
              },
              "rgba(169, 169, 168, 1)"
            ],
            [
              {
                "zoom": 2,
                "value": 25
              },
              "rgba(169, 169, 168, 1)"
            ]
          ]
        },
        "line-width": 0.6
      }
    },
    {
      "id": "LWProOrderline-hongkong",
      "type": "line",
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 2,
      "maxzoom": 7,
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
        "visibility": "none"
      },
      "paint": {
        "line-color": "rgba(169, 169, 168, 1)",
        "line-width": 0.6,
        "line-dasharray": [
          15,
          15
        ]
      }
    },
    {
      "id": "LWOrderlineCHN",
      "type": "line",
      "metadata": {
        "maputnik:comment": "中国已定国界"
      },
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 3,
      "maxzoom": 10,
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
        "line-color": "rgba(152, 142, 102, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          4
        ]
      }
    },
    {
      "id": "LWOrderlineCHN_wd",
      "type": "line",
      "metadata": {
        "maputnik:comment": "中国未定国界"
      },
      "source": "local",
      "source-layer": "national_l",
      "minzoom": 1,
      "maxzoom": 7,
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
        "line-color": "rgba(152, 142, 102, 1)",
        "line-width": 0.8,
        "line-dasharray": [
          8,
          4
        ]
      }
    },
    {
      "id": "roads_49",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_49",
      "minzoom": 15,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(5, 16, 27, 1)",
        "line-width": {
          "stops": [
            [
              15,
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
      "id": "roads_54000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_54000",
      "minzoom": 15,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(5, 16, 27, 1)",
        "line-width": {
          "stops": [
            [
              15,
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
      "id": "roads_47000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_47000",
      "minzoom": 15,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(5, 16, 27, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              15,
              6
            ],
            [
              19,
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
      "minzoom": 13,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(5, 16, 27, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              13,
              6
            ],
            [
              18,
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
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(5, 16, 27, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              3
            ],
            [
              12,
              4
            ],
            [
              14,
              6
            ],
            [
              16,
              8
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
      "id": "roads_52000_out_r",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_r_s_51000",
      "minzoom": 11,
      "maxzoom": 15,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(26, 47, 69, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_52000_out",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_51000",
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(26, 47, 69, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 11,
      "maxzoom": 15,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(35, 64, 92, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              8
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
      "id": "roads_52000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_52000",
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(35, 64, 92, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              8
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
      "id": "roads_51000_r_out",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_r_s_51000",
      "minzoom": 8,
      "maxzoom": 13,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(26, 47, 69, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(26, 47, 69, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 8,
      "maxzoom": 13,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(35, 64, 92, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              8
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
      "id": "roads_51000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_51000",
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-cap": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(35, 64, 92, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              8
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
      "id": "roads_44000_r",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_r_s_44000",
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "road_class",
          44000
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              13,
              "rgba(16, 39, 62, 1)"
            ],
            [
              14,
              "rgba(25, 65, 103, 1)"
            ]
          ]
        },
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              5
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
      "id": "roads_44000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_44000",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "road_class",
          44000
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
              "rgba(16, 39, 62, 1)"
            ],
            [
              14,
              "rgba(25, 65, 103, 1)"
            ]
          ]
        },
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              2
            ],
            [
              12,
              4
            ],
            [
              14,
              5
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
      "minzoom": 8,
      "maxzoom": 13,
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
        "line-color": "rgba(27, 87, 118, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-color": "rgba(27, 87, 118, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 8,
      "maxzoom": 13,
      "filter": [
        "==",
        "road_class",
        42000
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(27, 87, 118, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              6
            ],
            [
              14,
              12
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
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "==",
        "road_class",
        42000
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(27, 87, 118, 1)",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              6
            ],
            [
              14,
              12
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
      "id": "roads_43000_r_out",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_r_s_43000",
      "minzoom": 8,
      "maxzoom": 13,
      "filter": [
        "==",
        "road_class",
        43000
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "square",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#014f74",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              8,
              6
            ],
            [
              18,
              24
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
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "==",
        "road_class",
        43000
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "square",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#014f74",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              13,
              8
            ],
            [
              18,
              12
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
      "minzoom": 8,
      "maxzoom": 13,
      "filter": [
        "==",
        "road_class",
        43000
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "square",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "#003b57",
        "line-width": 3
      }
    },
    {
      "id": "roads_43000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_43000",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "==",
        "road_class",
        43000
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#003b57",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              13,
              4
            ],
            [
              18,
              6
            ]
          ]
        },
        "line-blur": 0
      }
    },
    {
      "id": "roads_41000_r_out",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_r_s_41000",
      "minzoom": 8,
      "maxzoom": 13,
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
        "line-color": "#173c5f",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 13,
      "maxzoom": 24,
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
        "line-color": "#173c5f",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              4
            ],
            [
              12,
              10
            ],
            [
              14,
              14
            ],
            [
              18,
              16
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
      "minzoom": 8,
      "maxzoom": 13,
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
        "line-color": "#012c56",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              3
            ],
            [
              12,
              6
            ],
            [
              14,
              12
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
      "id": "wroad_f_42000_out",
      "type": "line",
      "source": "local",
      "source-layer": "wroad_f",
      "minzoom": 5,
      "maxzoom": 10,
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
        "line-color": "rgba(34, 76, 116, 1)",
        "line-width": {
          "stops": [
            [
              7,
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
      "source-layer": "wroad_f",
      "minzoom": 5,
      "maxzoom": 10,
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
        "line-color": "rgba(34, 76, 116, 1)",
        "line-width": {
          "stops": [
            [
              7,
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
      "id": "wroad_f_43000",
      "type": "line",
      "source": "local",
      "source-layer": "wroad_f",
      "minzoom": 5,
      "maxzoom": 10,
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
        "line-color": "rgba(0, 87, 128, 1)",
        "line-width": {
          "stops": [
            [
              7,
              1
            ],
            [
              8,
              1.4
            ],
            [
              9,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "wroad_f_41000_out",
      "type": "line",
      "source": "local",
      "source-layer": "wroad_f",
      "minzoom": 4,
      "maxzoom": 10,
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
        "line-color": "rgba(23, 60, 95, 1)",
        "line-width": {
          "stops": [
            [
              6,
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
      "source-layer": "wroad_f",
      "minzoom": 4,
      "maxzoom": 10,
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
        "line-color": "#012c56",
        "line-width": {
          "stops": [
            [
              6,
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
      "id": "roads_41000",
      "type": "line",
      "source": "local",
      "source-layer": "roadsegment_41000",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "in",
        "road_class",
        41000
      ],
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": "#012c56",
        "line-width": {
          "base": 3.5,
          "stops": [
            [
              5,
              3
            ],
            [
              12,
              6
            ],
            [
              14,
              12
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
      "id": "mrt_line_1",
      "type": "line",
      "source": "local",
      "source-layer": "mrt_line",
      "minzoom": 12,
     "filter": [
        "in",
        "status",
        1,2,3
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
              5,
              0.3
            ],
            [
              12,
              0.8
            ],
            [
              14,
              1.0
            ],
            [
              18,
              1.5
            ]
          ]
        }
      }
    },
   
    {
      "id": "roads-symbol-49",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_49",
      "minzoom": 15,
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
              12
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-54000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_54000",
      "minzoom": 15,
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
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 1
      }
    },
    {
      "id": "roads-symbol-47000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_47000",
      "minzoom": 15,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-45000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_45000",
      "minzoom": 13,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-44000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_44000",
      "minzoom": 12,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-44000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_44000",
      "minzoom": 12,
      "maxzoom": 24,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-52000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_52000",
      "minzoom": 11,
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
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-52000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_42000",
      "minzoom": 11,
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
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-51000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_51000",
      "minzoom": 9,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-51000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_51000",
      "minzoom": 9,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-43000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_43000",
      "minzoom": 9,
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
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-43000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_43000",
      "minzoom": 9,
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
        "symbol-spacing": 200,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-42000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_42000",
      "minzoom": 8,
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
              10,
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.5,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-42000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_42000",
      "minzoom": 8,
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
              10,
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.5,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-41000-r",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_r_s_41000",
      "minzoom": 8,
      "maxzoom": 24,
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
              10,
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#00c1d2",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "wroad_f-symbol-41000",
      "type": "symbol",
      "source": "local",
      "source-layer": "wroad_f",
      "minzoom": 5,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "road_class",
          41000
        ]
      ],
      "layout": {
        "text-size": 9,
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#050505",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "roads-symbol-41000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_41000",
      "minzoom": 8,
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
              8,
              10
            ],
            [
              20,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 150,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "auto",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.01,
        "text-pitch-alignment": "viewport",
        "visibility": "none"
      },
      "paint": {
        "text-color": "#00c1d2",
        "text-halo-color": "#050505",
        "text-halo-width": 0.1
      }
    },
    {
      "id": "LWPOIAdmin_191000-",
      "type": "symbol",
      "metadata": {
        "maputnik:comment": "北京"
      },
      "source": "local",
      "source-layer": "wpoi",
      "minzoom": 2,
      "maxzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "type",
          191000
        ]
      ],
      "layout": {
        "text-size": 20,
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "LWPOIAdmin_190004",
      "type": "symbol",
      "source": "local",
      "source-layer": "wpoi",
      "minzoom": 8,
      "maxzoom": 10,
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
              7,
              12
            ],
            [
              8,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-size": 0.8
      },
      "paint": {
        "text-color": "rgba(42, 129, 170, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "LWPOIAdmin_190005",
      "type": "symbol",
      "source": "local",
      "source-layer": "wpoi",
      "minzoom": 7,
      "maxzoom": 10,
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
              7,
              12
            ],
            [
              8,
              14
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-size": 0.8
      },
      "paint": {
        "text-color": "rgba(57, 120, 150, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "LWPOIAdmin_190002",
      "type": "symbol",
      "source": "local",
      "source-layer": "wpoi",
      "minzoom": 4,
      "maxzoom": 10,
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
              4,
              10
            ],
            [
              5,
              12
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-size": 0.8
      },
      "paint": {
        "text-color": "rgba(179, 186, 201, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "LWProLabelCHN",
      "type": "symbol",
      "source": "local",
      "source-layer": "province_p",
      "minzoom": 4,
      "maxzoom": 7,
      "filter": [
        "all"
      ],
      "layout": {
        "text-size": {
          "stops": [
            [
              4,
              11
            ],
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
              16
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-size": 0.8,
        "text-justify": "center"
      },
      "paint": {
        "text-color": "rgba(76, 79, 86, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "LWPOIAdmin_190001",
      "type": "symbol",
      "source": "local",
      "source-layer": "wpoi",
      "minzoom": 5,
      "maxzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "type",
          190001
        ]
      ],
      "layout": {
        "text-size": 16,
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-size": 0.8
      },
      "paint": {
        "text-color": "rgba(179, 186, 201, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 2
      },
      "name": "地级市地名"
    },
    {
      "id": "pois_190104",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 6,
      "filter": [
        "all",
        [
          "==",
          "type",
          190104
        ]
      ],
      "layout": {
        "text-size": {
          "base": 2,
          "stops": [
            [
              6,
              15
            ],
            [
              14,
              17
            ],
            [
              15,
              20
            ],
            [
              22,
              20
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
              "rgba(57, 120, 150, 1)"
            ],
            [
              {
                "zoom": 11,
                "value": "190104"
              },
              "rgba(57, 120, 150, 1)"
            ]
          ]
        },
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "地级市地名"
    },
    {
      "id": "pois_190105",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
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
              11,
              13
            ],
            [
              14,
              17
            ],
            [
              15,
              20
            ],
            [
              22,
              20
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "text-anchor": "left",
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
                "value": "190105"
              },
              "rgba(42, 129, 170, 1)"
            ],
            [
              {
                "zoom": 11,
                "value": "190105"
              },
              "rgba(42, 129, 170, 1)"
            ]
          ]
        },
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "区县级行政区划"
    },
    {
      "id": "pois_190106",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "190106"
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
              14,
              10
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false
      },
      "paint": {
        "text-color": "rgba(92, 155, 185, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "乡镇级地名"
    },
    {
      "id": "pois_190201",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        ]
      },
      "paint": {
        "text-color": "rgba(74, 130, 194, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "海湾，海峡"
    },
    {
      "id": "pois_190203",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "190203"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_166"
      },
      "paint": {
        "text-color": "rgba(84, 150, 152, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "山"
    },
    {
      "id": "pois_110208",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(148, 151, 153, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "海滩"
    },
    {
      "id": "pois_110202",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "110202"
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_164"
      },
      "paint": {
        "text-color": "rgba(84, 150, 152, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "风景区，景点等"
    },
    {
      "id": "pois_150100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "150100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_34",
        "text-offset": [
          1,
          0
        ],
        "text-anchor": "left"
      },
      "paint": {
        "text-color": "rgba(84, 150, 152, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "机场相关"
    },
    {
      "id": "pois_150200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
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
          "!in",
          "gdpoint",
          "150200100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-image": "sprite_36",
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "火车站"
    },
    {
      "id": "pois_110101",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.1,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-image": "sprite_7",
        "text-offset": [
          1,
          0
        ],
        "icon-offset": [
          0,
          0
        ],
        "text-justify": "center",
        "text-anchor": "left",
        "text-keep-upright": true,
        "text-optional": false,
        "text-line-height": 1,
        "icon-size": 0.8
      },
      "paint": {
        "text-color": {
          "property": "type",
          "type": "categorical",
          "stops": [
            [
              {
                "zoom": 10,
                "value": "110101"
              },
              "rgba(84, 150, 152, 1)"
            ],
            [
              {
                "zoom": 11,
                "value": "110101"
              },
              "rgba(84, 150, 152, 1)"
            ]
          ]
        },
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "公园"
    },
    {
      "id": "pois_141201",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "141201"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-image": "sprite_18",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "高等院校"
    },
    {
      "id": "pois_110203",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "110203"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_164"
      },
      "paint": {
        "text-color": "rgba(84, 150, 152, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "风景名胜"
    },
    {
      "id": "pois_110200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "110200"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        ]
      },
      "paint": {
        "text-color": "rgba(84, 150, 152, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "风景名胜"
    },
    {
      "id": "pois_190200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "filter": [
        "all",
        [
          "==",
          "type",
          "190200"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_140100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "140100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_130101",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_130102",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130102"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_110103",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110103"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_54"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_110102",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110102"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        "icon-image": "sprite_54"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_190108",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "190108"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
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
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_110201",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110201"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_090101",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_49"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_130103",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130103"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_130201",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130201"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_130101_2",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_110000",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110000"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_150400",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "150400"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_42"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_150300",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_52"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_150301",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "150301"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_52",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_090100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_49"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_190306",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 13,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_110204",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110204"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_190307",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "190307"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "pois_190204",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "190204"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "河流"
    },
    {
      "id": "pois_130104",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130104"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "区县级政府及事业单位"
    },
    {
      "id": "pois_130105",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130105"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "乡镇级政府及事业单位"
    },
    {
      "id": "pois_130501",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130501"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_121",
        "text-offset": [
          1,
          0
        ],
        "text-anchor": "left"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "公安警察"
    },
    {
      "id": "pois_130601",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130601"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_4"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "交通管理机构"
    },
    {
      "id": "pois_130503",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130503"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "法院"
    },
    {
      "id": "pois_130703",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "国税机关"
    },
    {
      "id": "pois_130502",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130502"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-offset": [
          1,
          0
        ],
        "text-anchor": "left"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "检察院"
    },
    {
      "id": "pois_110205",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110205"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_173",
        "text-offset": [
          1,
          0
        ],
        "text-anchor": "left"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "寺庙道观"
    },
    {
      "id": "pois_141202",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "141202"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_170"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中学"
    },
    {
      "id": "pois_141203",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "141203"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_170",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "小学"
    },
    {
      "id": "pois_110100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_7",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "公园广场"
    },
    {
      "id": "pois_1130500",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130500"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "工商税务机构"
    },
    {
      "id": "pois_130700",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130700"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "公检法机关 "
    },
    {
      "id": "pois_130701",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130701"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "工商部门"
    },
    {
      "id": "pois_130107",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "130107"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_8"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "外地政府办"
    },
    {
      "id": "pois_130200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_8",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "外国机构相关"
    },
    {
      "id": "pois_080501",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "080501"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_168"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "游乐场"
    },
    {
      "id": "pois_090203",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090203"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_68",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "专科医院"
    },
    {
      "id": "pois_090205",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090205"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_68"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "专科医院"
    },
    {
      "id": "pois_090206",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090206"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_68",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "专科医院"
    },
    {
      "id": "pois_090207",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090207"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_68",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "专科医院"
    },
    {
      "id": "pois_090208",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "090208"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "icon-image": "sprite_68",
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ]
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "专科医院"
    },
    {
      "id": "pois_160101",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国人民银行"
    },
    {
      "id": "pois_110206",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "110206"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 0.8,
        "text-anchor": "left",
        "text-offset": [
          1,
          0
        ],
        "icon-image": "sprite_23"
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "教堂,回教寺"
    },
    {
      "id": "pois_160102",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160102"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "国家开发银行"
    },
    {
      "id": "pois_160103",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160103"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国进出口银行"
    },
    {
      "id": "pois_160104",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160104"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国银行"
    },
    {
      "id": "pois_160105",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160105"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国工商银行"
    },
    {
      "id": "pois_160106",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "160106"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国建设银行"
    },
    {
      "id": "pois_030200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "030200"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车维修"
    },
    {
      "id": "pois_030201",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "030201"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车维修"
    },
    {
      "id": "pois_030202",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "030202"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车维修"
    },
    {
      "id": "pois_030100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车维修"
    },
    {
      "id": "pois_020100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "020100"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车销售"
    },
    {
      "id": "pois_020101",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "020101"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车销售"
    },
    {
      "id": "pois_020102",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车销售"
    },
    {
      "id": "pois_141204",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "141204"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "汽车销售"
    },
    {
      "id": "pois_141500",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "141500"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "驾校"
    },
    {
      "id": "pois_010100",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "010100",
          "010101",
          "010102"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "加油站、加油加气站、加气站"
    },
    {
      "id": "pois_070603",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "070603"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国移动营业厅"
    },
    {
      "id": "pois_070604",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "070604"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国联通营业厅"
    },
    {
      "id": "pois_070601",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "070601"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "中国联通营业厅"
    },
    {
      "id": "pois_190306_2",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
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
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "立交桥"
    },
    {
      "id": "pois_141200",
      "type": "symbol",
      "source": "local",
      "source-layer": "poi_new",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "141200",
          "141203",
          "141204",
          "141205",
          "141206"
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
              14,
              12
            ]
          ]
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "fzlthjw"
        ],
        "symbol-placement": "point",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{label}",
        "text-letter-spacing": 0.01,
        "visibility": "visible",
        "icon-allow-overlap": false,
        "icon-ignore-placement": false,
        "icon-size": 1
      },
      "paint": {
        "text-color": "rgba(68, 116, 203, 1)",
        "text-halo-color": "rgba(25, 27, 28, 1)",
        "text-halo-width": 1
      },
      "name": "学校,培训机构"
    },
    {
      "id": "route_no_41000",
      "type": "symbol",
      "source": "local",
      "source-layer": "roadsegment_41000",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_gs-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "visibility": "none"
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
      "minzoom": 8,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_gs-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "visibility": "none"
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
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_xd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "visibility": "none"
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
      "minzoom": 11,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_xd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "symbol-placement": "point",
        "visibility": "none"
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
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_sd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "symbol-placement": "line",
        "visibility": "none"
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
      "source-layer": "roadsegment_41000",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_gd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "visibility": "none"
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
      "minzoom": 8,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_sd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
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
      "source-layer": "roadsegment_r_s_41000",
      "minzoom": 8,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "has",
          "route_no"
        ]
      ],
      "layout": {
        "text-field": "{route_no}",
        "icon-image": "sprite_gd-5",
        "text-font": [
          "fzlthjw"
        ],
        "icon-size": 0.8,
        "text-size": 8,
        "visibility": "none"
      },
      "paint": {
        "icon-color": "rgba(255, 255, 255, 1)",
        "text-color": "rgba(255, 255, 255, 1)"
      }
    },
    {
      "id": "3d-buildings-x",
      "type": "fill-extrusion",
      "source": "local",
      "source-layer": "settlementareaex",
      "minzoom": 14,
      "maxzoom": 24,
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
          "3017"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-extrusion-color": "rgba(18, 44, 75, 1)",
        "fill-extrusion-height": [
          "get",
          "grade_leve"
        ],
        "fill-extrusion-base": 0,
        "fill-extrusion-opacity": 0.6
      }
    },
    {
      "id": "3d-buildings",
      "type": "fill-extrusion",
      "source": "local",
      "source-layer": "settlementarea_2",
      "minzoom": 14,
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
          "3017"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-extrusion-color": "rgba(18, 44, 75, 1)",
        "fill-extrusion-height": [
          "get",
          "grade_leve"
        ],
        "fill-extrusion-base": 0,
        "fill-extrusion-opacity": 0.6
      }
    },
    {
      "id": "buildings-x-symbol",
      "type": "symbol",
      "source": "local",
      "source-layer": "settlementareaex",
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
          "3017"
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
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.15,
        "text-keep-upright": true,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(137, 206, 182, 1)",
        "text-halo-color": "rgba(5, 5, 5, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "buildings-symbol",
      "type": "symbol",
      "source": "local",
      "source-layer": "settlementarea",
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
          "3017"
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
          "fzlthjw"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-field": "{name_chn}",
        "text-letter-spacing": 0.15,
        "text-keep-upright": true,
        "visibility": "visible"
      },
      "paint": {
        "text-color": "rgba(137, 206, 182, 1)",
        "text-halo-color": "rgba(5, 5, 5, 1)",
        "text-halo-width": 1
      }
    }
  ],
  "id": "c0kjoo8km"
}