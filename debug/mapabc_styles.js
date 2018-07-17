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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
          "Open Sans Regular,Arial Unicode MS Regular"
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
};

var  mapabc_26 = {
	"version": 8,
	"name": "mapabc",
	"metadata": {
		
	},
	"sources": {
		"local": {
			"type": "vector",
			"tiles": ["http://115.28.212.232:8080/gs/c-{z}-{x}-{y}"]
		},
		"local-w": {
			"type": "vector",
			"tiles": ["http://115.28.212.232:8080/gs/w-{z}-{x}-{y}"]
		},
		"local-h": {
			"type": "vector",
			"tiles": ["http://115.28.212.232:8080/gs/h-{z}-{x}-{y}"]
		},
		"traffic": {
			"type": "vector",
			"tiles": ["https://115.28.212.232:8433/gt/{z}-{x}-{y}"],
			"minZoom": 0,
			"maxZoom": 14
		},
		"amaptraffic": {
			"type": "vector",
			"tiles": ["http://114.215.68.185:18110/gat/{z}-{x}-{y}"],
			"minZoom": 0,
			"maxZoom": 14
		}
	},
	  "sprite": "mapabc://sprites/mapabc",
	  "glyphs": "mapabc://glyphs/{fontstack}/{range}.pbf",
	"layers": [{
		"id": "background",
		"type": "background",
		"filter": ["any",
		["==",
		"disp_class",
		0]],
		"paint": {
			"background-color": "#0a1a29",
			"background-opacity": 1
		}
	},
	{
		"id": "LWOcean",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wocean",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all"],
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
		"source": "local-w",
		"source-layer": "wocean",
		"minzoom": 8,
		"maxzoom": 23,
		"filter": ["all"],
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
		"source": "local-w",
		"source-layer": "nationregion",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"ad_level",
		"1"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(10, 26, 41, 1)",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "Lwgrass",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wgrass",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#0f2939",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "LWRiverAreaChn",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wriver",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"wriver_xz",
		1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(26, 51, 67, 1)",
			"fill-opacity": 1
		}
	},
	{
		"id": "LWRiverAreaForeign",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wriver",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"wriver_xz",
		1]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "rgba(26, 51, 67, 1)",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "Lisland_tw_9",
		"type": "fill",
		"metadata": {
			"maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
		},
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"level",
		9]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"level",
		8]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all",
		["==",
		"level",
		7]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all",
		["==",
		"level",
		6]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all",
		["==",
		"level",
		5]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 2,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"level",
		4]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 1,
		"maxzoom": 2,
		"filter": ["all"],
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
		"filter": ["all",
		["in",
		"lua_type",
		1010,
		1020,
		1040,
		1060],
		["all",
		["==",
		"lua_type",
		1030],
		["<=",
		"disp_class",
		5]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#1a3343",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[9,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		1000,
		1010,
		1020,
		1040,
		1060],
		["all",
		["==",
		"lua_type",
		1030],
		["<=",
		"disp_class",
		5]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#1a3343",
			"fill-opacity": {
				"base": 1,
				"stops": [[11,
				1],
				[11.5,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		1000,
		1010,
		1020,
		1020,
		1040,
		1060]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#1a3343",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["any",
		["in",
		"lua_type",
		2030,
		2040,
		2050],
		["all",
		["==",
		"lua_type",
		2020],
		["in",
		"disp_class",
		1,
		2]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#0f2939",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		2020,
		2030,
		2040,
		2050]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#0f2939",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		2000,
		2010]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#0f2939",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["in",
		"sett_type",
		2020],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#0f2939",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["in",
		"sett_type",
		1000,
		1090],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#1a3343",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["in",
		"sett_type",
		4108,
		4111],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#1a3343",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": ["get",
			"u_color"],
			"fill-opacity": 0.3
		},
		"metadata": {
			"maputnik:comment": "地铁面"
		}
	},
	{
		"id": "LWRiver_L_1_1",
		"type": "line",
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"disp_class",
		0,
		1]],
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
		"id": "LWRiver_L_1_2",
		"type": "line",
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"disp_class",
		2]],
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
		"metadata": {
			"maputnik:comment": "3-9级世界线状水系-国外"
		},
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"disp_class",
		1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 51, 67, 1)"
		}
	},
	{
		"id": "LWOrderline_1_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外已定国界-背景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		10,
		11,
		12]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F7F6EF",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			}
		}
	},
	{
		"id": "LWOrderline_1",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外已定国界-前景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		10,
		11,
		12]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#A9A9A8",
			"line-width": {
				"stops": [[2,
				0.2],
				[3,
				0.2],
				[5,
				0.4]]
			}
		}
	},
	{
		"id": "LWOrderline_2",
		"type": "line",
		"metadata": {
			"maputnik:comment": "世界洲界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		32]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(135, 63, 62, 1)",
			"line-width": 0.8,
			"line-dasharray": [10,
			6]
		}
	},
	{
		"id": "LWOrderline_3",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外未定国界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			},
			"line-dasharray": [8,
			6]
		}
	},
	{
		"id": "LWOrderline_4",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外争议地区界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		34]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			},
			"line-dasharray": [8,
			8]
		}
	},
	{
		"id": "LWOrderline_5",
		"type": "line",
		"metadata": {
			"maputnik:comment": "军事停火线"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		33]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.2],
				[4,
				0.3]]
			},
			"line-dasharray": {
				"stops": [[2,
				[3,
				3]],
				[4,
				[4,
				3]]]
			}
		}
	},
	{
		"id": "LWProOrderline",
		"type": "line",
		"metadata": {
			"maputnik:comment": "4-9级中国内陆省级行政区域边线"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		20,
		21,
		22,
		24,
		25]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"property": "adl_level",
				"type": "categorical",
				"stops": [[{
					"zoom": 2,
					"value": 20
				},
				"rgba(169, 168, 169, 1)"],
				[{
					"zoom": 2,
					"value": 21
				},
				"rgba(169, 168, 169, 1)"],
				[{
					"zoom": 2,
					"value": 22
				},
				"rgba(169, 169, 168, 1)"],
				[{
					"zoom": 2,
					"value": 24
				},
				"rgba(169, 169, 168, 1)"],
				[{
					"zoom": 2,
					"value": 25
				},
				"rgba(169, 169, 168, 1)"]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		30]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(169, 169, 168, 1)",
			"line-width": 0.6,
			"line-dasharray": [10,
			5,
			3,
			5]
		}
	},
	{
		"id": "LWRoadForeign",
		"type": "line",
		"metadata": {
			"maputnik:comment": "6-9级境外道路网"
		},
		"source": "local-w",
		"source-layer": "wroad_f_2",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"road_class",
		0]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#003b57",
			"line-width": {
				"stops": [[6,
				0.5],
				[7,
				0.5],
				[8,
				2.0],
				[9,
				2.0]]
			}
		}
	},
	{
		"id": "wroad_f_42000_out",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(34, 76, 116, 1)",
			"line-width": {
				"stops": [[5,
				1.6],
				[8,
				1.6],
				[9,
				2.5]]
			}
		}
	},
	{
		"id": "wroad_f_42000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(34, 76, 116, 1)",
			"line-width": {
				"stops": [[5,
				1],
				[8,
				1],
				[9,
				1]]
			}
		}
	},
	{
		"id": "wroad_f_43000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(0, 87, 128, 1)",
			"line-width": {
				"stops": [[5,
				1],
				[8,
				1.4],
				[9,
				3]]
			}
		}
	},
	{
		"id": "wroad_f_41000_out",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["in",
		"road_class",
		41000],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(23, 60, 95, 1)",
			"line-width": {
				"stops": [[4,
				1],
				[7,
				2],
				[8,
				2.5],
				[9,
				3.5]]
			}
		}
	},
	{
		"id": "wroad_f_41000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["in",
		"road_class",
		41000],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"stops": [[4,
				0.5],
				[7,
				1],
				[8,
				1.2],
				[9,
				2.5]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_y_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国已定国界-背景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["any",
		["all",
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000111111111"]],
		["==",
		"adl_level",
		11],
		["==",
		"adl_level",
		12]]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E2DBBE",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["any",
		["all",
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000111111111"]],
		["==",
		"adl_level",
		11],
		["==",
		"adl_level",
		12]]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#959280",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_wd_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国未定国界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E2DBBE",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#988E66",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			},
			"line-dasharray": {
				"stops": [[1,
				[4,
				4]],
				[3,
				[6,
				6]]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_th_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国跳绘处以单线河为国界-背景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		14],
		["==",
		"scale_mask",
		"000000001111"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E2DBBE",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		14],
		["==",
		"scale_mask",
		"000000001111"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#959280",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_th_out2",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国跳绘处以单线河为国界-背景2"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000000110000"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E2DBBE",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000000110000"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#959280",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
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
		"minzoom": 12,
		"maxzoom": 23,
		"filter": ["all",
		[">=",
		"lul_type",
		1000],
		["<",
		"lul_type",
		2000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#1a3343",
			"line-width": {
				"stops": [[3,
				2],
				[4,
				2]]
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
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5300]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DA9893",
			"line-width": {
				"stops": [[14,
				2.8],
				[17,
				3]]
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
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5300]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#23405c",
			"line-width": {
				"stops": [[14,
				1.2],
				[17,
				1.5]]
			},
			"line-dasharray": {
				"stops": [[14,
				[5,
				5]],
				[17,
				[6,
				6]]]
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
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5100]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#0E7195",
			"line-width": {
				"stops": [[14,
				4],
				[17,
				5]]
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
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5100]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#23405c",
			"line-width": {
				"stops": [[14,
				1.8],
				[17,
				2]]
			},
			"line-dasharray": {
				"stops": [[14,
				[4,
				4]],
				[17,
				[5,
				5]]]
			}
		}
	},
	{
		"id": "roads_49",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_49",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				1.5]]
			}
		}
	},
	{
		"id": "roads_54000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_54000",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		54000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				1],
				[15,
				1.5]]
			}
		}
	},
	{
		"id": "roads_53000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_53000",
		"minzoom": 13,
		"maxzoom": 15,
		"filter": ["all",
		["in",
		"road_class",
		53000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.5],
				[14,
				3],
				[15,
				4],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_47000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_47000",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				3]]
			}
		}
	},
	{
		"id": "roads_45000_1",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_45000",
		"minzoom": 13,
		"maxzoom": 15,
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		[">=",
		"fc",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.5],
				[14,
				3]]
			}
		}
	},
	{
		"id": "roads_45000_2",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_45000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				4],
				[16,
				5]]
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
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#194167"],
				[14,
				"#194167"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.2],
				[14,
				3.5],
				[15,
				4],
				[16,
				5]]
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
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [[11,
				"#10273e"],
				[12,
				"#194167"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[11,
				1.0],
				[12,
				2]]
			}
		}
	},
	{
		"id": "roads_52000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_52000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				8]]
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
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				6],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_52000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_52000",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[11,
				2.5],
				[12,
				6]]
			}
		}
	},
	{
		"id": "roads_52000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_52000",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[11,
				1.5],
				[12,
				3]]
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
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				8]]
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
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				6],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_51000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_51000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				2],
				[10,
				2],
				[11,
				2.5],
				[12,
				6]]
			}
		}
	},
	{
		"id": "roads_51000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_51000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				1],
				[10,
				1],
				[11,
				1.5],
				[12,
				3]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#1b5776",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				10]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#224c74",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				5],
				[15,
				6],
				[16,
				8]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#1b5776",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				2.0],
				[9,
				3.0],
				[10,
				4],
				[11,
				4.5],
				[12,
				6]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#224c74",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.2],
				[9,
				2],
				[10,
				3.0],
				[11,
				3.5],
				[12,
				4]]
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
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#014f74",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				6],
				[15,
				8],
				[16,
				9]]
			}
		}
	},
	{
		"id": "roads_43000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_43000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#003b57",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				6],
				[16,
				7]]
			},
			"line-blur": 0
		}
	},
	{
		"id": "roads_43000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_43000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#014f74",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				2.0],
				[9,
				3.0],
				[10,
				3.5],
				[11,
				4],
				[12,
				6]]
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
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#003b57",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.0],
				[9,
				1.8],
				[10,
				2.0],
				[11,
				3],
				[12,
				4]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#173c5f",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				8],
				[14,
				8],
				[15,
				10],
				[16,
				12]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				6],
				[16,
				8]]
			}
		}
	},
	{
		"id": "roads_41000_ld",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["in",
		"link_type",
		1,
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				0.8],
				[10,
				1.2],
				[15,
				1.6]]
			}
		}
	},
	{
		"id": "roads_41000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#173c5f",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				2.4],
				[9,
				3.0],
				[10,
				5.0],
				[11,
				6.0],
				[12,
				7]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.2],
				[9,
				2],
				[10,
				3.5],
				[11,
				4.5],
				[12,
				5]]
			}
		}
	},
	{
		"id": "roads_41000_r_ld",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["in",
		"link_type",
		1,
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				0.8],
				[10,
				1.2],
				[15,
				1.6]]
			}
		}
	},
	{
		"id": "roads_49_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				1.5]]
			}
		}
	},
	{
		"id": "roads_54000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		54000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				1],
				[15,
				1.5]]
			}
		}
	},
	{
		"id": "roads_53000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		53000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.5],
				[14,
				3],
				[15,
				4],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_47000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				3]]
			}
		}
	},
	{
		"id": "roads_45000_2_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		45000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#05101b",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				4],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_44000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		44000]],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#194167"],
				[14,
				"#194167"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.2],
				[14,
				3.5],
				[15,
				4],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_52000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				8]]
			}
		}
	},
	{
		"id": "roads_52000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				6],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_51000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		51000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(26, 47, 69, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				8]]
			}
		}
	},
	{
		"id": "roads_51000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		51000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(35, 64, 92, 1)",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				6],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_42000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#1b5776",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				8],
				[16,
				10]]
			}
		}
	},
	{
		"id": "roads_42000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#224c74",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				5],
				[15,
				6],
				[16,
				8]]
			}
		}
	},
	{
		"id": "roads_43000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#014f74",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				6],
				[15,
				8],
				[16,
				9]]
			}
		}
	},
	{
		"id": "roads_43000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#003b57",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				6],
				[16,
				7]]
			},
			"line-blur": 0
		}
	},
	{
		"id": "roads_41000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		41000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#173c5f",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				8],
				[14,
				8],
				[15,
				10],
				[16,
				12]]
			}
		}
	},
	{
		"id": "roads_41000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		41000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				6],
				[16,
				8]]
			}
		}
	},
	{
		"id": "mrt_line_1",
		"type": "line",
		"source": "local",
		"source-layer": "mrt_line",
		"minzoom": 12,
		"filter": ["in",
		"status",
		1],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"u_color"],
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				0.3],
				[13,
				0.6],
				[14,
				0.8],
				[15,
				1.2]]
			}
		}
	},
	{
		"id": "LSettlementline",
		"type": "line",
		"source": "local",
		"source-layer": "settlementline",
		"minzoom": 16,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#4474cb",
			"line-width": {
				"base": 3.5,
				"stops": [[16,
				0.2]]
			}
		}
	},
	{
		"id": "3d-buildings-x-1",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-1",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementarea_2",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-x-2",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-3",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementarea_2",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-x-4",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(18, 44, 75, 1)",
			"fill-extrusion-height": 6,
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "LWPOIIsland_190202_1",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190202],
		["in",
		"priority",
		"1",
		"17"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				8],
				[6,
				8.5]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#5f8496",
			"text-halo-color": "#191b1c",
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190202],
		["in",
		"priority",
		"2",
		"3"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				8],
				[6,
				8.5]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#5f8496",
			"text-halo-color": "#191b1c",
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"1"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				9],
				[6,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#4a82c2",
			"text-halo-color": "#191b1c",
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"4"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				10],
				[6,
				11]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#4a82c2",
			"text-halo-color": "#191b1c",
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"5"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				9],
				[6,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#4a82c2",
			"text-halo-color": "#191b1c",
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 2,
		"filter": ["all",
		["==",
		"type",
		191000]],
		"layout": {
			"text-size": 15,
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "center",
			"text-offset": [0,
			0],
			"text-max-width": 150,
			"text-justify": "left"
		},
		"paint": {
			"text-color": "rgba(255, 255, 255, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 2
		},
		"name": "中国名称"
	},
	{
		"id": "LWPOIAdmin_190001",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 2,
		"maxzoom": 9,
		"filter": ["all",
		["==",
		"type",
		190001],
		["==",
		"priority",
		"105"]],
		"layout": {
			"text-size": 15,
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_5",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "rgba(179, 186, 201, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 2
		},
		"name": "中国首都名称"
	},
	{
		"id": "LWPOIAdmin_190002",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 3,
		"maxzoom": 10,
		"filter": ["all",
		["==",
		"type",
		190002],
		["in",
		"priority",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8"]],
		"layout": {
			"text-size": {
				"stops": [[3,
				10],
				[5,
				12],
				[6,
				14],
				[7,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_3",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "rgba(179, 186, 201, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 2
		},
		"name": "省会城市名称"
	},
	{
		"id": "LWPOIAdmin_190005",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190005]],
		"layout": {
			"text-size": {
				"stops": [[5,
				12],
				[8,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"id": "LWPOIAdmin_190004",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190004]],
		"layout": {
			"text-size": {
				"stops": [[7,
				12],
				[8,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_165",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "rgba(42, 129, 170, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 2
		},
		"name": "县级市名称"
	},
	{
		"id": "LWPOIAdmin_195000",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		195000]],
		"layout": {
			"text-size": {
				"stops": [[5,
				13],
				[6,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_6",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#3f6757",
			"text-halo-color": "#191b1c",
			"text-halo-width": 2
		},
		"name": "世界国家首都城市名称"
	},
	{
		"id": "LWPOIAdmin_192000",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		192000],
		["==",
		"priority",
		"301"]],
		"layout": {
			"text-size": {
				"stops": [[1,
				14],
				[4,
				15]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#86837d",
			"text-halo-color": "#191b1c",
			"text-halo-width": 2
		},
		"name": "世界大洲名称"
	},
	{
		"id": "LWPOIAdmin_193000",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		193000],
		["==",
		"priority",
		"302"]],
		"layout": {
			"text-size": {
				"stops": [[1,
				14],
				[4,
				15]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_1",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#477FC2",
			"text-halo-color": "#191b1c",
			"text-halo-width": 2
		},
		"name": "世界大洲名称"
	},
	{
		"id": "LWProLabelCHN",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "province_p",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			"text-size": {
				"stops": [[2,
				7],
				[3,
				9],
				[4,
				11],
				[5,
				13],
				[6,
				14],
				[7,
				16]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_2}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
			"text-justify": "center"
		},
		"paint": {
			"text-color": "rgba(76, 79, 86, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 1
		},
		"name": "省份名称"
	},
	{
		"id": "LWOrderpolygon",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "nationregion",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"ad_level",
		"1"]],
		"layout": {
			"text-size": {
				"stops": [[2,
				8],
				[3,
				10],
				[4,
				12],
				[5,
				14],
				[6,
				15],
				[7,
				17]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
			"text-justify": "center"
		},
		"paint": {
			"text-color": "#627883",
			"text-halo-color": "#191b1c",
			"text-halo-width": 2
		},
		"name": "国外国家名称标注"
	},
	{
		"id": "LWPOIAdmin_2",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "sp",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			"text-size": {
				"stops": [[4,
				11],
				[5,
				13],
				[6,
				14],
				[7,
				16]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
			"text-justify": "center"
		},
		"paint": {
			"text-color": "#6F6C6A",
			"text-halo-color": "#191b1c",
			"text-halo-width": 1
		},
		"name": "印度实际控制区、巴基斯坦实际控制区"
	},
	{
		"id": "route_no_41000",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "roadsegment_41000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gs-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gs-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_xd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_xd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"symbol-placement": "point",
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_sd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"symbol-placement": "line",
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_sd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "none",
			"symbol-placement": "line",
			"symbol-avoid-edges": false,
			"symbol-spacing": 250,
			"text-letter-spacing": 0,
			"text-offset": [0,
			0.2],
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
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gd-",
			["to-string",
			["length",
			"len"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"name1",
		""],
		["==",
		"status",
		1]],
		"layout": {
			"text-field": "{name1}",
			"icon-image": "sprite_109",
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 8,
			"visibility": "visible"
		},
		"paint": {
			"icon-color": "#191b1c",
			"text-color": "#191b1c"
		}
	},
	{
		"id": "LCMRT_S",
		"type": "symbol",
		"source": "local",
		"source-layer": "mrt_station",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"status",
		1]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[15,
				11],
				[16,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-image": "sprite_77",
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-justify": "center",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "rgba(46, 106, 160, 1)",
			"text-halo-color": "rgba(5, 5, 5, 1)",
			"text-halo-width": 1
		},
		"name": "地铁站标注",
		"metadata": {
			"maputnik:comment": "地铁站标注"
		}
	},
	{
		"id": "LCMRT_L_label",
		"type": "symbol",
		"source": "local",
		"source-layer": "mrt_line_label",
		"minzoom": 12,
		"metadata": {
			"maputnik:comment": "地铁线标注"
		},
		"filter": ["all",
		["==",
		"status",
		1]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				11]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 200,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 6,
			"text-rotation-alignment": "auto",
			"text-field": "{name1}",
			"text-letter-spacing": 0.01,
			"text-pitch-alignment": "viewport",
			"visibility": "visible"
		},
		"paint": {
			"text-color": ["concat",
			"#",
			["get",
			"ui_color"]],
			"text-halo-color": "#191b1c",
			"text-halo-width": 0.1
		}
	},
	{
		"id": "LRoadcross",
		"type": "symbol",
		"source": "local",
		"source-layer": "realroadcross",
		"minzoom": 15,
		"maxzoom": 24,
		"metadata": {
			"maputnik:comment": "交通信号灯"
		},
		"filter": ["all"],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"minzoom": 15,
		"filter": ["all",
		["==",
		"road_class",
		49]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				12],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"road_class",
		54000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "roads-symbol-53000",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_53000",
		"minzoom": 15,
		"filter": ["all",
		["==",
		"road_class",
		54000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		47000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		45000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		44000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"source-layer": "roadsegment_52000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		52000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "roads-symbol-51000",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_51000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		51000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"minzoom": 12,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		51000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 50,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "roads-symbol-42000",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_42000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		42000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 300,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.5,
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
		"id": "roads-symbol-42000-r",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_r_s_42000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		42000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 50,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.5,
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
		"id": "roads-symbol-43000",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_43000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		43000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 300,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "roads-symbol-43000-r",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_r_s_43000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		43000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "roads-symbol-41000",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_41000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		41000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-halo-color": "#050505",
			"text-halo-width": 0.1
		}
	},
	{
		"id": "roads-symbol-41000-r",
		"type": "symbol",
		"source": "local",
		"source-layer": "roadsegment_r_s_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		41000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 10,
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
		"id": "LCRailway_label_1",
		"type": "symbol",
		"source": "local",
		"source-layer": "railway",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"rail_type",
		5100]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_1"
		},
		"paint": {
			"text-color": "#0E7195",
			"text-halo-color": "#191b1c",
			"text-halo-width": 1
		},
		"name": "铁路标注"
	},
	{
		"id": "LCRailway_label_2",
		"type": "symbol",
		"source": "local",
		"source-layer": "railway",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"rail_type",
		5300]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_1"
		},
		"paint": {
			"text-color": "#DA9893",
			"text-halo-color": "#191b1c",
			"text-halo-width": 1
		},
		"name": "高铁标注"
	},
	{
		"id": "pois_190104",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 6,
		"filter": ["all",
		["==",
		"type",
		190104]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[6,
				15],
				[14,
				17],
				[15,
				20],
				[22,
				20]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "center",
			"text-offset": [0,
			0]
		},
		"paint": {
			"text-color": {
				"property": "type",
				"type": "categorical",
				"stops": [[{
					"zoom": 10,
					"value": "190104"
				},
				"rgba(57, 120, 150, 1)"],
				[{
					"zoom": 11,
					"value": "190104"
				},
				"rgba(57, 120, 150, 1)"]]
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
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all",
		["==",
		"type",
		"190105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				13],
				[14,
				17],
				[15,
				20],
				[22,
				20]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [0,
			0]
		},
		"paint": {
			"text-color": {
				"property": "type",
				"type": "categorical",
				"stops": [[{
					"zoom": 10,
					"value": "190105"
				},
				"rgba(42, 129, 170, 1)"],
				[{
					"zoom": 11,
					"value": "190105"
				},
				"rgba(42, 129, 170, 1)"]]
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
		"minzoom": 8,
		"maxzoom": 9,
		"filter": ["all",
		["==",
		"type",
		"190106"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				8],
				[9,
				8]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"190201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
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
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"190203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"110208"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110202"],
		["==",
		"level",
		20]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"150100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "rgba(84, 150, 152, 1)",
			"text-halo-color": "rgba(25, 27, 28, 1)",
			"text-halo-width": 1
		},
		"name": "机场"
	},
	{
		"id": "pois_150104",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"150104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"150200"],
		["==",
		"level",
		10],
		["!in",
		"gdpoint",
		"150200100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"110101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-image": "sprite_7",
			"text-offset": [1,
			0],
			"icon-offset": [0,
			0],
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
				"stops": [[{
					"zoom": 10,
					"value": "110101"
				},
				"rgba(84, 150, 152, 1)"],
				[{
					"zoom": 11,
					"value": "110101"
				},
				"rgba(84, 150, 152, 1)"]]
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
		"filter": ["all",
		["==",
		"type",
		"141201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_164"
		},
		"icon-size": 0.8,
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
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"190200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"140100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_8",
			"icon-size": 0.8
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
		"filter": ["all",
		["==",
		"type",
		"110103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_54",
			"icon-size": 0.8
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
		"filter": ["all",
		["==",
		"type",
		"110102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"190108"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"110201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"090101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"110000"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"150400"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"150300"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"150301"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"090100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"190306"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"110204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"190307"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"190204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"130104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130501"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130601"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"130503"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130703"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130502"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"110205"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"141202"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"141203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"110100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130500"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130700"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130701"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"130107"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"130200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"080501"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"090203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"090205"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"090206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"090207"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"090208"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
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
		"filter": ["all",
		["==",
		"type",
		"160101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"110206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
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
		"filter": ["all",
		["==",
		"type",
		"160102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-size": 0.8
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
		"filter": ["all",
		["==",
		"type",
		"160103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"160104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"160105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"160106"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"030200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"030201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"030202"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"030100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"020100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"020101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"020102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"141204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["in",
		"type",
		"141500"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["in",
		"type",
		"010100",
		"010101",
		"010102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"070603"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"070604"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"070601"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["==",
		"type",
		"190306"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["in",
		"type",
		"141200",
		"141203",
		"141204",
		"141205",
		"141206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "buildings-x-symbol",
		"type": "symbol",
		"source": "local",
		"source-layer": "settlementareaex",
		"filter": ["all",
		["in",
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
		"3301"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 100,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"filter": ["all",
		["in",
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
		"3302"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 100,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"id": "dlm",
		"type": "fill",
		"source": "local-h",
		"source-layer": "dlm",
		"minzoom": 17,
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": ["get",
			"colour"]
		}
	},
	{
		"id": "xraqd",
		"type": "fill",
		"source": "local-h",
		"source-layer": "xraqd",
		"minzoom": 17,
		"maxzoom": 22,
		"filter": ["all"],
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
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			3.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			7,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			14,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			28,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			55,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_jsq",
		"type": "line",
		"source": "local-h",
		"source-layer": "jsq",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#000000",
			"line-width": {
				"stops": [[17,
				1.05],
				[18,
				2.1],
				[19,
				4.2],
				[20,
				8.4]]
			}
		}
	},
	{
		"id": "L_jsq_split",
		"type": "line",
		"source": "local-h",
		"source-layer": "jsq",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffff00",
			"line-width": {
				"stops": [[17,
				1.0],
				[18,
				2.0],
				[19,
				3.2],
				[20,
				4.4]]
			},
			"line-dasharray": {
				"stops": [[17,
				[2,
				2]],
				[18,
				[2,
				2]],
				[19,
				[2,
				2]],
				[20,
				[1.4,
				1.4]],
				[21,
				[1.4,
				1.4]],
				[22,
				[2,
				2]]]
			}
		}
	},
	{
		"id": "L_hl_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#b2b2b2",
			"line-width": {
				"stops": [[17,
				0.8],
				[18,
				1.5],
				[19,
				2],
				[20,
				2.4]]
			}
		}
	},
	{
		"id": "L_hl_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#b2b2b2",
			"line-width": {
				"stops": [[17,
				3],
				[18,
				3],
				[19,
				4.5],
				[20,
				4.5]]
			},
			"line-dasharray": {
				"stops": [[17,
				[1,
				3]],
				[18,
				[1,
				3]],
				[19,
				[1,
				3]],
				[20,
				[1,
				3]]]
			}
		}
	},
	{
		"id": "L_hl_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#4e4e4e",
			"line-width": {
				"stops": [[17,
				2],
				[18,
				2],
				[19,
				3],
				[20,
				3]]
			},
			"line-dasharray": {
				"stops": [[17,
				[1,
				5]],
				[18,
				[1,
				5]],
				[19,
				[1,
				5]],
				[20,
				[1,
				5]],
				[21,
				[1,
				5]],
				[22,
				[1,
				5]]]
			}
		}
	},
	{
		"id": "L_lmwz",
		"type": "fill",
		"source": "local-h",
		"source-layer": "lmwz",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#ffffff",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "L_dxjt",
		"type": "fill",
		"source": "local-h",
		"source-layer": "dxjt",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#ffffff",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	}],
	"id": "c0kjoo8km"
};

var  mapabc_32w = {
	"version": 8,
	"name": "mapabc",
	"metadata": {
		
	},
	"sources": {
		"local": {
			"type": "vector",
			"mapabc_logo" : false,
			"attribution" : "高德地图",
			"tiles": ["http://115.28.212.232:8080/gs/c-{z}-{x}-{y}"]
		},
		"local-w": {
			"type": "vector",
			"mapabc_logo" : true,
			"tiles": ["http://115.28.212.232:8080/gs/w-{z}-{x}-{y}"]
			//"tiles": ["http://192.168.2.101:8888/gs/w-{z}-{x}-{y}"],
		},
		"local-h": {
			"type": "vector",
			"tiles": ["http://115.28.212.232:8080/gs/h-{z}-{x}-{y}"]
		},
		"traffic": {
			"type": "vector",
			"tiles": ["https://115.28.212.232:8433/gt/{z}-{x}-{y}"],
			"minZoom": 0,
			"maxZoom": 14
		},
		"amaptraffic": {
			"type": "vector",
			"tiles": ["http://114.215.68.185:18110/gat/{z}-{x}-{y}"],
			"minZoom": 0,
			"maxZoom": 14
		}
	},
  "sprite": "mapabc://sprites/mapabc",
  "glyphs": "mapabc://glyphs/{fontstack}/{range}.pbf",
	"layers": [{
		"id": "background",
		"type": "background",
		"filter": ["any",
		["==",
		"disp_class",
		0]],
		"paint": {
			"background-color": "#fcf9f2",
			"background-opacity": 1
		}
	},
	{
		"id": "LWOcean",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wocean",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all"],
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
		"source": "local-w",
		"source-layer": "wocean",
		"minzoom": 8,
		"maxzoom": 23,
		"filter": ["all"],
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
		"source": "local-w",
		"source-layer": "nationregion",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"ad_level",
		"1"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#fcf9f2",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "Lwgrass",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wgrass",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "LWRiverAreaChn",
		"type": "fill",
		"source": "local-w",
		"source-layer": "wriver",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"wriver_xz",
		1]],
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
		"source": "local-w",
		"source-layer": "wriver",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"wriver_xz",
		1]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "Lisland_tw_9",
		"type": "fill",
		"metadata": {
			"maputnik:comment": "3-9级钓鱼岛、黄岩岛、赤尾屿岛面"
		},
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"level",
		9]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"level",
		8]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all",
		["==",
		"level",
		7]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all",
		["==",
		"level",
		6]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all",
		["==",
		"level",
		5]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 2,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"level",
		4]],
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
		"source": "local-w",
		"source-layer": "island_tw",
		"minzoom": 1,
		"maxzoom": 2,
		"filter": ["all"],
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
		"source-layer": "landusearea",
		"minzoom": 8,
		"maxzoom": 9,
		"filter": ["all",
		["in",
		"lua_type",
		1010,
		1020,
		1040,
		1060],
		["all",
		["==",
		"lua_type",
		1030],
		["<=",
		"disp_class",
		5]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[9,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		1000,
		1010,
		1020,
		1040,
		1060],
		["all",
		["==",
		"lua_type",
		1030],
		["<=",
		"disp_class",
		5]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[11,
				1],
				[11.5,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		1000,
		1010,
		1020,
		1020,
		1040,
		1060]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["any",
		["in",
		"lua_type",
		2030,
		2040,
		2050],
		["all",
		["==",
		"lua_type",
		2020],
		["in",
		"disp_class",
		1,
		2]]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#C8E49D",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		2020,
		2030,
		2040,
		2050]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#C8E49D",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["all",
		["in",
		"lua_type",
		2000,
		2010]],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#C8E49D",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[10,
				1]]
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
		"filter": ["in",
		"sett_type",
		2020],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#C8E49D",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["in",
		"sett_type",
		1000,
		1090],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["in",
		"sett_type",
		4108,
		4111],
		"layout": {
			
		},
		"paint": {
			"fill-color": "#A3CCFF",
			"fill-opacity": {
				"base": 1,
				"stops": [[8,
				1],
				[11,
				1]]
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
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": ["get",
			"u_color"],
			"fill-opacity": 0.3
		},
		"metadata": {
			"maputnik:comment": "地铁面"
		}
	},
	{
		"id": "LWRiver_L_1_1",
		"type": "line",
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"disp_class",
		0,
		1]],
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
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"disp_class",
		2]],
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
		"source": "local-w",
		"source-layer": "wriver_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"disp_class",
		1]],
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		10,
		11,
		12]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#A9A9A8",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			}
		}
	},
	{
		"id": "LWOrderline_1",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外已定国界-前景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		10,
		11,
		12]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#A9A9A8",
			"line-width": {
				"stops": [[2,
				0.2],
				[3,
				0.2],
				[5,
				0.4]]
			}
		}
	},
	{
		"id": "LWOrderline_2",
		"type": "line",
		"metadata": {
			"maputnik:comment": "世界洲界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		32]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#873F3E",
			"line-width": 0.8,
			"line-dasharray": [10,
			6]
		}
	},
	{
		"id": "LWOrderline_3",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外未定国界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			},
			"line-dasharray": [8,
			6]
		}
	},
	{
		"id": "LWOrderline_4",
		"type": "line",
		"metadata": {
			"maputnik:comment": "国外争议地区界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		34]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.4],
				[4,
				0.6]]
			},
			"line-dasharray": [8,
			8]
		}
	},
	{
		"id": "LWOrderline_5",
		"type": "line",
		"metadata": {
			"maputnik:comment": "军事停火线"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"adl_level",
		33]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#9DA4BA",
			"line-width": {
				"stops": [[3,
				0.2],
				[4,
				0.3]]
			},
			"line-dasharray": {
				"stops": [[2,
				[3,
				3]],
				[4,
				[4,
				3]]]
			}
		}
	},
	{
		"id": "LWProOrderline",
		"type": "line",
		"metadata": {
			"maputnik:comment": "4-9级中国内陆省级行政区域边线"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		20,
		21,
		22,
		24,
		25]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"property": "adl_level",
				"type": "categorical",
				"stops": [[{
					"zoom": 2,
					"value": 20
				},
				"#A9A9A8"],
				[{
					"zoom": 2,
					"value": 21
				},
				"#A9A9A8"],
				[{
					"zoom": 2,
					"value": 22
				},
				"#A9A9A8"],
				[{
					"zoom": 2,
					"value": 24
				},
				"#A9A9A8"],
				[{
					"zoom": 2,
					"value": 25
				},
				"#A9A9A8"]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		30]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#A9A9A8",
			"line-width": 1,
			"line-dasharray": [10,
			5,
			3,
			5]
		}
	},
	{
		"id": "LWRoadForeign_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "6-9级境外道路网"
		},
		"source": "local-w",
		"source-layer": "wroad_f_2",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"road_class",
		0]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFB486",
			"line-width": {
				"stops": [[6,
				0.5],
				[7,
				0.5],
				[8,
				2.0],
				[9,
				2.0]]
			}
		}
	},
	{
		"id": "LWRoadForeign_out2",
		"type": "line",
		"metadata": {
			"maputnik:comment": "6-9级境外道路网"
		},
		"source": "local-w",
		"source-layer": "wroad_f_2",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"road_class",
		0]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F68025",
			"line-width": {
				"stops": [[6,
				0.5],
				[7,
				0.5],
				[8,
				2.0],
				[9,
				2.0]]
			}
		}
	},
	{
		"id": "LWRoadForeign",
		"type": "line",
		"metadata": {
			"maputnik:comment": "6-9级境外道路网"
		},
		"source": "local-w",
		"source-layer": "wroad_f_2",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["in",
		"road_class",
		0]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFA35C",
			"line-width": {
				"stops": [[6,
				0.5],
				[7,
				0.5],
				[8,
				2.0],
				[9,
				2.0]]
			}
		}
	},
	{
		"id": "wroad_f_42000_out",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F0DCC0",
			"line-width": {
				"stops": [[5,
				1.6],
				[8,
				1.6],
				[9,
				2.5]]
			}
		}
	},
	{
		"id": "wroad_f_42000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F8D291",
			"line-width": {
				"stops": [[5,
				1],
				[8,
				1],
				[9,
				1]]
			}
		}
	},
	{
		"id": "wroad_f_43000_out",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFCA52",
			"line-width": {
				"stops": [[5,
				1.5],
				[6,
				2],
				[7,
				3.0]]
			}
		}
	},
	{
		"id": "wroad_f_43000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F1CF5F",
			"line-width": {
				"stops": [[5,
				1],
				[6,
				1.4],
				[7,
				2]]
			}
		}
	},
	{
		"id": "wroad_f_41000_out",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["in",
		"road_class",
		41000],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFB486",
			"line-width": {
				"stops": [[4,
				1],
				[7,
				2],
				[8,
				2.5],
				[9,
				3.5]]
			}
		}
	},
	{
		"id": "wroad_f_41000",
		"type": "line",
		"source": "local-w",
		"source-layer": "wroad_f_1",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["in",
		"road_class",
		41000],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFA35C",
			"line-width": {
				"stops": [[4,
				0.5],
				[7,
				1],
				[8,
				1.2],
				[9,
				2.5]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_y_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国已定国界-背景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["any",
		["all",
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000111111111"]],
		["==",
		"adl_level",
		11],
		["==",
		"adl_level",
		12]]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["any",
		["all",
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000111111111"]],
		["==",
		"adl_level",
		11],
		["==",
		"adl_level",
		12]]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_wd_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国未定国界"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["==",
		"adl_level",
		15]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			},
			"line-dasharray": {
				"stops": [[1,
				[4,
				4]],
				[3,
				[6,
				6]]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_th_out",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国跳绘处以单线河为国界-背景"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		14],
		["==",
		"scale_mask",
		"000000001111"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 1,
		"maxzoom": 3,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		14],
		["==",
		"scale_mask",
		"000000001111"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
			}
		}
	},
	{
		"id": "LWOrderlineCHN_th_out2",
		"type": "line",
		"metadata": {
			"maputnik:comment": "中国跳绘处以单线河为国界-背景2"
		},
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000000110000"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				2.5],
				[2,
				3],
				[3,
				4],
				[4,
				5]]
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
		"source": "local-w",
		"source-layer": "national_l",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		1],
		["in",
		"adl_level",
		10],
		["==",
		"scale_mask",
		"000000110000"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#C76A79",
			"line-width": {
				"stops": [[1,
				0.3],
				[2,
				0.5],
				[3,
				0.8],
				[4,
				1.2]]
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
		"minzoom": 12,
		"maxzoom": 23,
		"filter": ["all",
		[">=",
		"lul_type",
		1000],
		["<",
		"lul_type",
		2000]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#BFDBF4",
			"line-width": {
				"stops": [[3,
				2],
				[4,
				2]]
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
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5300]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DA9893",
			"line-width": {
				"stops": [[9,
				2],
				[12,
				2.4],
				[17,
				3]]
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
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5300]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"stops": [[9,
				1],
				[12,
				1.2],
				[17,
				1.5]]
			},
			"line-dasharray": {
				"stops": [[14,
				[4,
				8]],
				[17,
				[4,
				8]]]
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
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5100]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#A6ABAE",
			"line-width": {
				"stops": [[9,
				2],
				[12,
				2.4],
				[17,
				3]]
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
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"rail_type",
		5100]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"stops": [[9,
				1],
				[12,
				1.2],
				[17,
				1.5]]
			},
			"line-dasharray": {
				"stops": [[14,
				[4,
				8]],
				[17,
				[4,
				8]]]
			}
		}
	},
	{
		"id": "roads_49_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_49",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFECE7",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				2.8],
				[15,
				3.5]]
			}
		}
	},
	{
		"id": "roads_49",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_49",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				3],
				[15,
				2.5]]
			}
		}
	},
	{
		"id": "roads_54000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_54000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		54000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				1],
				[13,
				1.0],
				[14,
				3.0],
				[15,
				4.5]]
			}
		}
	},
	{
		"id": "roads_54000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_54000",
		"minzoom": 14,
		"maxzoom": 23,
		"filter": ["all",
		["in",
		"road_class",
		54000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				2],
				[15,
				3.5]]
			}
		}
	},
	{
		"id": "roads_53000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_53000",
		"minzoom": 13,
		"maxzoom": 23,
		"filter": ["all",
		["in",
		"road_class",
		53000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				1],
				[13,
				1.2],
				[14,
				3],
				[15,
				4.5],
				[16,
				4.5]]
			}
		}
	},
	{
		"id": "roads_53000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_53000",
		"minzoom": 14,
		"maxzoom": 23,
		"filter": ["all",
		["in",
		"road_class",
		53000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				2],
				[15,
				3.5]]
			}
		}
	},
	{
		"id": "roads_47000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_47000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.0],
				[14,
				3.6],
				[15,
				5.5]]
			}
		}
	},
	{
		"id": "roads_47000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_47000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.2],
				[14,
				3],
				[15,
				4]]
			}
		}
	},
	{
		"id": "roads_45000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_45000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				1.5],
				[13,
				2.4],
				[14,
				4.5],
				[15,
				5.5],
				[16,
				6]]
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
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.2],
				[14,
				3],
				[15,
				3.5],
				[16,
				4.5]]
			}
		}
	},
	{
		"id": "roads_45000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_45000",
		"minzoom": 12,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				1.5],
				[13,
				2.4],
				[14,
				4.5],
				[15,
				5.5],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_45000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_45000",
		"minzoom": 12,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		45000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[12,
				0.8],
				[13,
				1.2]]
			}
		}
	},
	{
		"id": "roads_44000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_44000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#DFDACF"],
				[14,
				"#DFDACF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				3],
				[10,
				4],
				[11,
				5],
				[12,
				5.5],
				[12,
				5.5],
				[13,
				4.5],
				[14,
				6],
				[15,
				8.5],
				[16,
				8.5]]
			}
		}
	},
	{
		"id": "roads_44000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_44000",
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#FFFFFF"],
				[14,
				"#FFFFFF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.4],
				[14,
				3],
				[15,
				5],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_44000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_44000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [[11,
				"#DFDACF"],
				[12,
				"#DFDACF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				2.4],
				[10,
				3],
				[11,
				3.6],
				[12,
				4]]
			}
		}
	},
	{
		"id": "roads_44000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_44000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		44000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [[9,
				"#EFECE7"],
				[10,
				"#EFECE7"],
				[11,
				"#FFFFFF"],
				[12,
				"#FFFFFF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				1.5],
				[10,
				1.8],
				[11,
				2],
				[12,
				2]]
			}
		}
	},
	{
		"id": "roads_52000_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_52000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F7E099",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				5.5],
				[14,
				6],
				[15,
				7.5],
				[16,
				7.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.5],
				[14,
				4],
				[15,
				5],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_52000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_52000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F7E099",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				1.2],
				[10,
				1.2],
				[11,
				1.5],
				[12,
				2]]
			}
		}
	},
	{
		"id": "roads_52000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_52000",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		52000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				0.8],
				[9,
				1.6],
				[10,
				1.6],
				[11,
				2.0],
				[12,
				2.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F7E099",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				5.5],
				[14,
				6],
				[15,
				7.5],
				[16,
				7.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.5],
				[14,
				4],
				[15,
				5],
				[16,
				5]]
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
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F7E099",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.0],
				[9,
				3],
				[10,
				3],
				[11,
				4.0],
				[12,
				4.5]]
			}
		}
	},
	{
		"id": "roads_51000_r",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_51000",
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		51000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				1.2],
				[10,
				1.2],
				[11,
				1.5],
				[12,
				2.0]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E3b973",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				9],
				[16,
				10],
				[17,
				11]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F8D291",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				5],
				[14,
				5.5],
				[15,
				6],
				[16,
				7],
				[17,
				8]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E3b973",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				3.2],
				[9,
				3.5],
				[10,
				4.0],
				[11,
				4.5],
				[12,
				5.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		42000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F8D291",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.2],
				[9,
				1.6],
				[10,
				1.8],
				[11,
				2],
				[12,
				3.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#E7B926",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				8],
				[15,
				9],
				[16,
				10],
				[17,
				10]]
			}
		}
	},
	{
		"id": "roads_43000",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_43000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFCA52",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4.5],
				[14,
				5],
				[15,
				6],
				[16,
				7]]
			},
			"line-blur": 0
		}
	},
	{
		"id": "roads_43000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_43000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#E7B926",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				3.0],
				[9,
				3.5],
				[10,
				4],
				[11,
				4.5],
				[12,
				6]]
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
		"filter": ["all",
		["in",
		"road_class",
		43000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#EFCA52",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				1.2],
				[9,
				1.5],
				[10,
				2],
				[11,
				3],
				[12,
				4.5]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F68025",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				7.5],
				[14,
				8],
				[15,
				12],
				[16,
				10],
				[17,
				10]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFA35C",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				5.5],
				[14,
				6],
				[15,
				7],
				[16,
				8]]
			}
		}
	},
	{
		"id": "roads_41000_ld",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["in",
		"link_type",
		1,
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				0.8],
				[10,
				1.2],
				[15,
				1.6]]
			}
		}
	},
	{
		"id": "roads_41000_r_out",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F68025",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				3],
				[9,
				4.5],
				[10,
				5.5],
				[11,
				6.5],
				[12,
				7]]
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
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["!=",
		"link_type",
		1],
		["!=",
		"link_type",
		5],
		["==",
		"form_way",
		1]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFA35C",
			"line-width": {
				"base": 3.5,
				"stops": [[8,
				2],
				[9,
				3],
				[10,
				3.5],
				[11,
				4],
				[12,
				5]]
			}
		}
	},
	{
		"id": "roads_41000_r_ld",
		"type": "line",
		"source": "local",
		"source-layer": "roadsegment_r_s_41000",
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["in",
		"road_class",
		41000],
		["in",
		"link_type",
		1,
		5]],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#012c56",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				0.8],
				[10,
				1.2],
				[15,
				1.6]]
			}
		}
	},
	{
		"id": "roads_49_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFECE7",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				3.5]]
			}
		}
	},
	{
		"id": "roads_49_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		49]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				2.5]]
			}
		}
	},
	{
		"id": "roads_54000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		54000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				1],
				[15,
				4.5]]
			}
		}
	},
	{
		"id": "roads_54000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		54000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[14,
				1],
				[15,
				3.5]]
			}
		}
	},
	{
		"id": "roads_53000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		53000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.5],
				[14,
				3],
				[15,
				4.5],
				[16,
				4.5]]
			}
		}
	},
	{
		"id": "roads_53000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		53000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				1.5],
				[14,
				3],
				[15,
				3.5],
				[16,
				3.5]]
			}
		}
	},
	{
		"id": "roads_47000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				5.5]]
			}
		}
	},
	{
		"id": "roads_47000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		47000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				4]]
			}
		}
	},
	{
		"id": "roads_45000_2_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		45000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#DFDACF",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				5.5],
				[16,
				6]]
			}
		}
	},
	{
		"id": "roads_45000_2_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		45000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[15,
				3.5],
				[16,
				4.5]]
			}
		}
	},
	{
		"id": "roads_44000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		44000]],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#DFDACF"],
				[14,
				"#DFDACF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.2],
				[14,
				3.5],
				[15,
				8.5]]
			}
		}
	},
	{
		"id": "roads_44000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		44000]],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter",
			"line-miter-limit": 4,
			"line-round-limit": 5
		},
		"paint": {
			"line-color": {
				"stops": [[13,
				"#FFFFFF"],
				[14,
				"#FFFFFF"]]
			},
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				2.2],
				[14,
				3.5],
				[15,
				5]]
			}
		}
	},
	{
		"id": "roads_52000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F4D266",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				7.5]]
			}
		}
	},
	{
		"id": "roads_52000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		52000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				5]]
			}
		}
	},
	{
		"id": "roads_51000_out_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		51000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F4D266",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				7.5],
				[16,
				7.5]]
			}
		}
	},
	{
		"id": "roads_51000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		51000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F5DF96",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				3],
				[14,
				4],
				[15,
				6],
				[16,
				5]]
			}
		}
	},
	{
		"id": "roads_42000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#E3b973",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				7],
				[15,
				9],
				[16,
				10],
				[17,
				11]]
			}
		}
	},
	{
		"id": "roads_42000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		42000]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F8D291",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				5],
				[15,
				6],
				[16,
				7],
				[17,
				8]]
			}
		}
	},
	{
		"id": "roads_43000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "#E7B926",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				6],
				[14,
				6],
				[15,
				9],
				[16,
				10]]
			}
		}
	},
	{
		"id": "roads_43000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		43000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#EFCA52",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				6],
				[16,
				7]]
			},
			"line-blur": 0
		}
	},
	{
		"id": "roads_41000_zlevel_out",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		41000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#F68025",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				8],
				[14,
				8],
				[15,
				9],
				[16,
				10]]
			}
		}
	},
	{
		"id": "roads_41000_zlevel",
		"type": "line",
		"source": "local",
		"source-layer": "zlevel_bz",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["in",
		"road_class",
		41000]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFA35C",
			"line-width": {
				"base": 3.5,
				"stops": [[13,
				4],
				[14,
				4],
				[15,
				7],
				[16,
				8],
				[17,
				8]]
			}
		}
	},
	{
		"id": "mrt_line_1_out",
		"type": "line",
		"source": "local",
		"source-layer": "mrt_line",
		"minzoom": 9,
		"filter": ["in",
		"status",
		1],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#FFFFFF",
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				1.6],
				[10,
				1.6],
				[11,
				1.6],
				[12,
				1.6],
				[13,
				1.6],
				[14,
				2],
				[15,
				3],
				[16,
				3]]
			}
		}
	},
	{
		"id": "mrt_line_1",
		"type": "line",
		"source": "local",
		"source-layer": "mrt_line",
		"minzoom": 9,
		"filter": ["in",
		"status",
		1],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"u_color"],
			"line-width": {
				"base": 3.5,
				"stops": [[9,
				0.8],
				[10,
				0.8],
				[11,
				0.8],
				[12,
				0.8],
				[13,
				0.8],
				[14,
				1.5],
				[15,
				2],
				[16,
				2]]
			}
		}
	},
	{
		"id": "LSettlementline",
		"type": "line",
		"source": "local",
		"source-layer": "settlementline",
		"minzoom": 16,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#4e4f52",
			"line-width": {
				"base": 3.5,
				"stops": [[16,
				0.2]]
			}
		}
	},
	{
		"id": "3d-buildings-x-1",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "#FAFAF6",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-1",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementarea_2",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "#FAFAF6",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-x-2",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0]],
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0]],
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "#FAFAF6",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-3",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementarea_2",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["!=",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "#FAFAF6",
			"fill-extrusion-height": ["*",
			3,
			["get",
			"grade_leve"]],
			"fill-extrusion-base": 0,
			"fill-extrusion-opacity": 0.8
		}
	},
	{
		"id": "3d-buildings-x-4",
		"type": "fill-extrusion",
		"source": "local",
		"source-layer": "settlementareaex",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
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
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["in",
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
		"3302"],
		["==",
		"grade_leve",
		0],
		["==",
		"settarea",
		-1]],
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190202],
		["in",
		"priority",
		"1",
		"17"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				8],
				[6,
				8.5]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190202],
		["in",
		"priority",
		"2",
		"3"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				7],
				[6,
				8]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"1"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				9],
				[6,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 3,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"4"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				10],
				[6,
				11]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190204],
		["in",
		"priority",
		"5"]],
		"layout": {
			"text-size": {
				"stops": [[4,
				9],
				[6,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 2,
		"filter": ["all",
		["==",
		"type",
		191000]],
		"layout": {
			"text-size": 15,
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "center",
			"text-offset": [0,
			0],
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
		"id": "LWPOIAdmin_190001",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 2,
		"maxzoom": 9,
		"filter": ["all",
		["==",
		"type",
		190001],
		["==",
		"priority",
		"105"]],
		"layout": {
			"text-size": 12,
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_5",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#000000",
			"text-halo-color": "#FFFFFF",
			"text-halo-width": 2
		},
		"name": "中国首都名称"
	},
	{
		"id": "LWPOIAdmin_190002",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 3,
		"maxzoom": 10,
		"filter": ["all",
		["==",
		"type",
		190002],
		["in",
		"priority",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8"]],
		"layout": {
			"text-size": {
				"stops": [[3,
				10],
				[5,
				10],
				[6,
				10],
				[7,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_3",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#000000",
			"text-halo-color": "#ffffff",
			"text-halo-width": 2
		},
		"name": "省会城市名称"
	},
	{
		"id": "LWPOIAdmin_190005",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190005]],
		"layout": {
			"text-size": {
				"stops": [[5,
				8.5],
				[8,
				8.5]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 13,
			"icon-image": "sprite_3",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#716F6D",
			"text-halo-color": "#ffffff",
			"text-halo-width": 2
		},
		"name": "地级市地名"
	},
	{
		"id": "LWPOIAdmin_190004",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		190004]],
		"layout": {
			"text-size": {
				"stops": [[7,
				8],
				[8,
				8]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_165",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#222222",
			"text-halo-color": "#ffffff",
			"text-halo-width": 2
		},
		"name": "县级市名称"
	},
	{
		"id": "LWPOIAdmin_195000",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 5,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		195000]],
		"layout": {
			"text-size": {
				"stops": [[5,
				13],
				[6,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 9,
			"icon-image": "sprite_6",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		192000],
		["==",
		"priority",
		"301"]],
		"layout": {
			"text-size": {
				"stops": [[1,
				14],
				[4,
				15]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "wpoi",
		"minzoom": 1,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"type",
		193000],
		["==",
		"priority",
		"302"]],
		"layout": {
			"text-size": {
				"stops": [[1,
				14],
				[4,
				15]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-max-width": 11,
			"icon-image": "sprite_1",
			"icon-size": 0.8
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
		"source": "local-w",
		"source-layer": "province_p",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			"text-size": {
				"stops": [[2,
				6],
				[3,
				9],
				[4,
				10],
				[5,
				11],
				[6,
				12],
				[7,
				13]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_2}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
			"text-justify": "center"
		},
		"paint": {
			"text-color": "#545454",
			"text-halo-color": "#545454",
			"text-halo-width": 0.1
		},
		"name": "省份名称"
	},
	{
		"id": "LWOrderpolygon",
		"type": "symbol",
		"source": "local-w",
		"source-layer": "nationregion",
		"minzoom": 2,
		"maxzoom": 8,
		"filter": ["all",
		["==",
		"wlevel",
		2],
		["==",
		"ad_level",
		"1"]],
		"layout": {
			"text-size": {
				"stops": [[2,
				8],
				[3,
				9],
				[4,
				11],
				[5,
				13],
				[6,
				14],
				[7,
				16]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
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
		"source": "local-w",
		"source-layer": "sp",
		"minzoom": 4,
		"maxzoom": 8,
		"filter": ["all"],
		"layout": {
			"text-size": {
				"stops": [[4,
				10],
				[5,
				12],
				[6,
				13],
				[7,
				15]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [-1,
			-1],
			"text-max-width": 8,
			"icon-image": "",
			"icon-size": 0.8,
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
		"source": "local-w",
		"source-layer": "roadsegment_41000",
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gs-",
			["to-string",
			["length",
			"route_note"]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gs-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_xd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_xd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"symbol-placement": "point",
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_sd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"symbol-placement": "point",
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"route_note",
		""]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_sd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "none",
			"symbol-placement": "line",
			"symbol-avoid-edges": false,
			"symbol-spacing": 250,
			"text-letter-spacing": 0,
			"text-offset": [0,
			0.2],
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
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["has",
		"route_note"]],
		"layout": {
			"text-field": "{route_note}",
			"icon-image": ["concat",
			"sprite_gd-",
			["to-string",
			["length",
			["to-string",
			["get",
			"route_note"]]]]],
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
			"text-size": 7.0,
			"visibility": "visible",
			"text-offset": [0,
			0.2]
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
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["!=",
		"name1",
		""],
		["==",
		"status",
		1]],
		"layout": {
			"text-field": "{name1}",
			"icon-image": "sprite_109",
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"icon-size": 0.8,
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
		"minzoom": 12,
		"metadata": {
			"maputnik:comment": "地铁线标注"
		},
		"filter": ["all",
		["==",
		"status",
		1]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				11]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 200,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 6,
			"text-rotation-alignment": "auto",
			"text-field": "{name1}",
			"text-letter-spacing": 0.01,
			"text-pitch-alignment": "viewport",
			"visibility": "visible"
		},
		"paint": {
			"text-color": ["concat",
			"#",
			["get",
			"ui_color"]],
			"text-halo-color": "#191b1c",
			"text-halo-width": 0.1
		}
	},
	{
		"id": "LRoadcross",
		"type": "symbol",
		"source": "local",
		"source-layer": "realroadcross",
		"minzoom": 15,
		"maxzoom": 24,
		"metadata": {
			"maputnik:comment": "交通信号灯"
		},
		"filter": ["all"],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"minzoom": 15,
		"filter": ["all",
		["==",
		"road_class",
		49]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				9],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 15,
		"filter": ["all",
		["==",
		"road_class",
		54000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 15,
		"filter": ["all",
		["==",
		"road_class",
		54000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		47000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		45000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[13,
				9],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		44000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		52000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		51000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 12,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		51000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 50,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		42000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 300,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		42000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 50,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		43000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 300,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 9,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		43000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 13,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"road_class",
		41000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"minzoom": 8,
		"maxzoom": 13,
		"filter": ["all",
		["==",
		"road_class",
		41000]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[10,
				10],
				[20,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 150,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 10,
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
		"id": "LCRailway_label_1",
		"type": "symbol",
		"source": "local",
		"source-layer": "railway",
		"minzoom": 8,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"rail_type",
		5100]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				11],
				[14,
				11]]
			},
			"text-max-angle": 10,
			"symbol-spacing": 20,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"minzoom": 8,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"rail_type",
		5300]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				11],
				[14,
				11]]
			},
			"text-max-angle": 10,
			"symbol-spacing": 100,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
			"text-rotation-alignment": "auto",
			"text-field": "{name_chn}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
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
		"id": "pois_190104",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all",
		["==",
		"type",
		190104]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[6,
				15],
				[14,
				17],
				[15,
				20],
				[22,
				20]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "center",
			"text-offset": [0,
			0]
		},
		"paint": {
			"text-color": {
				"property": "type",
				"type": "categorical",
				"stops": [[{
					"zoom": 10,
					"value": "190104"
				},
				"#000000"],
				[{
					"zoom": 11,
					"value": "190104"
				},
				"#000000"]]
			},
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "地级市地名"
	},
	{
		"id": "pois_190105",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all",
		["==",
		"type",
		"190105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				11],
				[9,
				12],
				[10,
				13],
				[22,
				20]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [0,
			0]
		},
		"paint": {
			"text-color": {
				"property": "type",
				"type": "categorical",
				"stops": [[{
					"zoom": 10,
					"value": "190105"
				},
				"#123d8c"],
				[{
					"zoom": 11,
					"value": "190105"
				},
				"#123d8c"]]
			},
			"text-halo-color": "#EBF8EF",
			"text-halo-width": 1
		},
		"name": "区县级行政区划"
	},
	{
		"id": "pois_190106",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all",
		["==",
		"type",
		"190106"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				7.5],
				[9,
				7.5]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#716f6d",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "乡镇级地名"
	},
	{
		"id": "pois_190201",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"filter": ["all",
		["==",
		"type",
		"190201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4a82c2",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "海湾，海峡"
	},
	{
		"id": "pois_190203",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"190203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_166"
		},
		"paint": {
			"text-color": "#187607",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"110208"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#949799",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "海滩"
	},
	{
		"id": "pois_110202",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110202"],
		["==",
		"level",
		20]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_164"
		},
		"paint": {
			"text-color": "#7b4717",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "风景区，景点等"
	},
	{
		"id": "pois_150100",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"filter": ["all",
		["==",
		"type",
		"150100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "#025ba8",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "机场"
	},
	{
		"id": "pois_150104",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"150104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "#025ba8",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "机场相关"
	},
	{
		"id": "pois_150200",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 9,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"150200"],
		["==",
		"level",
		10],
		["!in",
		"gdpoint",
		"150200100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[8,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#025ba8",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"110101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.1,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-image": "sprite_7",
			"text-offset": [1,
			0],
			"icon-offset": [0,
			0],
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
				"stops": [[{
					"zoom": 10,
					"value": "110101"
				},
				"#187607"],
				[{
					"zoom": 11,
					"value": "110101"
				},
				"#187607"]]
			},
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "公园"
	},
	{
		"id": "pois_141201",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"filter": ["all",
		["==",
		"type",
		"141201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "高等院校"
	},
	{
		"id": "pois_110203",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_164"
		},
		"icon-size": 0.8,
		"paint": {
			"text-color": "#187607",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "风景名胜"
	},
	{
		"id": "pois_110200",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 11,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#187607",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "风景名胜"
	},
	{
		"id": "pois_190200",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"filter": ["all",
		["==",
		"type",
		"190200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "自然地名"
	},
	{
		"id": "pois_140100",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"140100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "博物馆"
	},
	{
		"id": "pois_130101",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"130101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_8"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "政府机构及社会团体;国家级机关及事业单位"
	},
	{
		"id": "pois_130102",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"130102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_8",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "政府机构及社会团体;国家级机关及事业单位"
	},
	{
		"id": "pois_110103",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"110103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_54",
			"icon-size": 0.8
		},
		"paint": {
			"text-color": "#187607",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "植物园"
	},
	{
		"id": "pois_110102",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"110102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"icon-image": "sprite_54"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "动物园"
	},
	{
		"id": "pois_190108",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 12,
		"filter": ["all",
		["==",
		"type",
		"190108"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				9],
				[14,
				9]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"text-anchor": "left",
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#989694",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "村庄级地名、村组级地名"
	},
	{
		"id": "pois_110201",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"110201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#7b4717",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "世界遗产"
	},
	{
		"id": "pois_090101",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"090101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_49"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "三甲医院"
	},
	{
		"id": "pois_130103",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"130103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_8"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "地市级政府及事业单位"
	},
	{
		"id": "pois_130201",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"130201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "外国使领馆"
	},
	{
		"id": "pois_130101_2",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"130101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "国家级机关及事业单位"
	},
	{
		"id": "pois_110000",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"110000"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "旅游景点"
	},
	{
		"id": "pois_150400",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"150400"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_42"
		},
		"paint": {
			"text-color": "#025ba8",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		}
	},
	{
		"id": "pois_150300",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"150300"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_52"
		},
		"name": "港口码头"
	},
	{
		"id": "pois_150301",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"150301"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"name": "客运港"
	},
	{
		"id": "pois_090100",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"090100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_49"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "综合医院"
	},
	{
		"id": "pois_190306",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 13,
		"filter": ["all",
		["==",
		"type",
		"190306"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "立交桥"
	},
	{
		"id": "pois_110204",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"110204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "纪念馆"
	},
	{
		"id": "pois_190307",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"190307"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "桥"
	},
	{
		"id": "pois_190204",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 14,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"190204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_8"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130501"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130601"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130503"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130703"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130502"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"110205"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"text-anchor": "left"
		},
		"paint": {
			"text-color": "#7b4717",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"141202"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-size": 0.8,
			"icon-image": "sprite_170"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"141203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"110100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#187607",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "公园广场"
	},
	{
		"id": "pois_130500",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"130500"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_8"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130700"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130701"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130107"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_8"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"130200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"080501"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_168"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"090203"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"090205"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_68"
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"090206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"090207"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"090208"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0]
		},
		"paint": {
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"160101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"110206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-offset": [1,
			0],
			"icon-image": "sprite_23"
		},
		"paint": {
			"text-color": "#7b4717",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"160102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{label}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-size": 0.8
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
		"filter": ["all",
		["==",
		"type",
		"160103"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国进出口银行"
	},
	{
		"id": "pois_160104",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"160104"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国银行"
	},
	{
		"id": "pois_160105",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"160105"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国工商银行"
	},
	{
		"id": "pois_160106",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"160106"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国建设银行"
	},
	{
		"id": "pois_030200",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"030200"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"030201"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"030202"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"030100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"020100"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"020101"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"020102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"141204"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["in",
		"type",
		"141500"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["in",
		"type",
		"010100",
		"010101",
		"010102"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["==",
		"type",
		"070603"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国移动营业厅"
	},
	{
		"id": "pois_070604",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"070604"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国联通营业厅"
	},
	{
		"id": "pois_070601",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"070601"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
		"name": "中国联通营业厅"
	},
	{
		"id": "pois_190306_2",
		"type": "symbol",
		"source": "local",
		"source-layer": "poi_new",
		"minzoom": 15,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"type",
		"190306"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
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
		"filter": ["all",
		["in",
		"type",
		"141200",
		"141203",
		"141204",
		"141205",
		"141206"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[14,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
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
			"text-color": "#4e4f52",
			"text-halo-color": "#ffffff",
			"text-halo-width": 1
		},
		"name": "学校,培训机构"
	},
	{
		"id": "LCMRT_S",
		"type": "symbol",
		"source": "local",
		"source-layer": "mrt_station",
		"minzoom": 12,
		"maxzoom": 24,
		"filter": ["all",
		["==",
		"status",
		1]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[12,
				10],
				[16,
				10]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "{name}",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-image": "sprite_77",
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-justify": "center",
			"icon-size": 0.8
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
		"minzoom": 11,
		"maxzoom": 12,
		"filter": ["all",
		["==",
		"status",
		1]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[15,
				11],
				[16,
				12]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 250,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "point",
			"text-padding": 1,
			"text-rotation-alignment": "viewport",
			"text-field": "",
			"text-letter-spacing": 0.01,
			"visibility": "visible",
			"icon-allow-overlap": false,
			"icon-ignore-placement": false,
			"icon-image": "sprite_76",
			"text-anchor": "left",
			"text-offset": [1,
			0],
			"text-justify": "center",
			"icon-size": 0.8
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
		"filter": ["all",
		["in",
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
		"3301"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 100,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"filter": ["all",
		["in",
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
		"3302"]],
		"layout": {
			"text-size": {
				"base": 2,
				"stops": [[11,
				10],
				[20,
				14]]
			},
			"text-max-angle": 30,
			"symbol-spacing": 100,
			"text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
			"symbol-placement": "line",
			"text-padding": 1,
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
		"id": "dlm",
		"type": "fill",
		"source": "local-h",
		"source-layer": "dlm",
		"minzoom": 17,
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
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
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": ["get",
			"colour"]
		}
	},
	{
		"id": "xraqd",
		"type": "fill",
		"source": "local-h",
		"source-layer": "xraqd",
		"minzoom": 17,
		"maxzoom": 22,
		"filter": ["all"],
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
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_split_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx_split",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_bx_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "bx",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all",
		["==",
		"bxxx",
		"2"]],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			2.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			10,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			20,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_rxhd_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "rxhd",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": ["get",
			"colour"],
			"line-width": ["*",
			40,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 17,
		"maxzoom": 18,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			3.5,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			7,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 19,
		"maxzoom": 20,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			14,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_4",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 20,
		"maxzoom": 21,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			28,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_tzx_5",
		"type": "line",
		"source": "local-h",
		"source-layer": "tzx",
		"minzoom": 21,
		"maxzoom": 22,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffffff",
			"line-width": ["*",
			55,
			["to-number",
			["get",
			"bxkd"]]]
		}
	},
	{
		"id": "L_jsq",
		"type": "line",
		"source": "local-h",
		"source-layer": "jsq",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "round",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#000000",
			"line-width": {
				"stops": [[17,
				1.05],
				[18,
				2.1],
				[19,
				4.2],
				[20,
				8.4]]
			}
		}
	},
	{
		"id": "L_jsq_split",
		"type": "line",
		"source": "local-h",
		"source-layer": "jsq",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#ffff00",
			"line-width": {
				"stops": [[17,
				1.0],
				[18,
				2.0],
				[19,
				3.2],
				[20,
				4.4]]
			},
			"line-dasharray": {
				"stops": [[17,
				[2,
				2]],
				[18,
				[2,
				2]],
				[19,
				[2,
				2]],
				[20,
				[1.4,
				1.4]],
				[21,
				[1.4,
				1.4]],
				[22,
				[2,
				2]]]
			}
		}
	},
	{
		"id": "L_hl_1",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#b2b2b2",
			"line-width": {
				"stops": [[17,
				0.8],
				[18,
				1.5],
				[19,
				2],
				[20,
				2.4]]
			}
		}
	},
	{
		"id": "L_hl_2",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#b2b2b2",
			"line-width": {
				"stops": [[17,
				3],
				[18,
				3],
				[19,
				4.5],
				[20,
				4.5]]
			},
			"line-dasharray": {
				"stops": [[17,
				[1,
				3]],
				[18,
				[1,
				3]],
				[19,
				[1,
				3]],
				[20,
				[1,
				3]]]
			}
		}
	},
	{
		"id": "L_hl_3",
		"type": "line",
		"source": "local-h",
		"source-layer": "hl",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"line-join": "round",
			"line-cap": "butt",
			"visibility": "visible"
		},
		"paint": {
			"line-color": "#4e4e4e",
			"line-width": {
				"stops": [[17,
				2],
				[18,
				2],
				[19,
				3],
				[20,
				3]]
			},
			"line-dasharray": {
				"stops": [[17,
				[1,
				5]],
				[18,
				[1,
				5]],
				[19,
				[1,
				5]],
				[20,
				[1,
				5]],
				[21,
				[1,
				5]],
				[22,
				[1,
				5]]]
			}
		}
	},
	{
		"id": "L_lmwz",
		"type": "fill",
		"source": "local-h",
		"source-layer": "lmwz",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#ffffff",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "L_dxjt",
		"type": "fill",
		"source": "local-h",
		"source-layer": "dxjt",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#ffffff",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	},
	{
		"id": "L_zxc",
		"type": "fill",
		"source": "local-h",
		"source-layer": "zxc",
		"minzoom": 17,
		"maxzoom": 24,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "#ffffff",
			"fill-opacity": {
				"base": 1,
				"stops": [[10,
				1],
				[11.5,
				1]]
			}
		}
	}],
	"id": "c0kjoo8km"
};

var mapabc_all = {
    "version": 8,
    "name": "mapabc",
    "metadata": {},
    "sources": {
        "local": {
            "type": "vector",
			"mapabc_logo" : true,
			"attribution" : "图盟",
            "tiles": [
                "http://115.28.212.232:8080/gs/c-{z}-{x}-{y}"
            ],
            "minZoom": 1,
            "maxZoom": 20
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
            "minZoom": 8,
            "maxZoom": 20
        },
        "amaptraffic": {
            "type": "vector",
            "tiles": [
                "http://115.28.212.232:8080/gat/{z}-{x}-{y}"
            ],
            "minZoom": 8,
            "maxZoom": 20
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
            "maxzoom": 8,
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
            "source-layer": "ocean_ok",
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
            "minzoom": 1,
            "maxzoom": 8,
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
            "minzoom": 6,
            "maxzoom": 8,
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
            "maxzoom": 8,
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
            "source-layer": "landusearea_w1",
            "minzoom": 8,
            "maxzoom": 9,
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
            "source-layer": "landusearea_w1",
            "minzoom": 10,
            "maxzoom": 11,
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
            "id": "LCLandUseArea-w3-2",
            "type": "fill",
            "source": "local",
            "source-layer": "landusearea",
            "minzoom": 13,
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
            "source-layer": "landusearea_g1",
            "minzoom": 8,
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
            "source-layer": "landusearea_g1",
            "minzoom": 10,
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
            "source-layer": "landusearea_g2",
            "minzoom": 12,
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
            "source-layer": "settlementarea_1",
            "minzoom": 15,
            "maxzoom": 20,
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
            "source-layer": "settlementarea_3",
            "minzoom": 14,
            "maxzoom": 20,
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
            "source-layer": "settlementarea_1",
            "minzoom": 15,
            "maxzoom": 20,
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
            "id": "LCSettlementArea_x_g",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_1",
            "minzoom": 15,
            "maxzoom": 20,
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
            "id": "LCSettlementArea_x_w",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_3",
            "minzoom": 14,
            "maxzoom": 20,
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
            "id": "LCSettlementArea_x_c",
            "type": "fill",
            "source": "local",
            "source-layer": "settlementareaex_1",
            "minzoom": 15,
            "maxzoom": 20,
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
            "minzoom": 1,
            "maxzoom": 8,
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
                "line-color": "rgba(26, 51, 67, 1)",
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
            "minzoom": 3,
            "maxzoom": 8,
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
            "metadata": {
                "maputnik:comment": "3-9级世界线状水系-国外"
            },
            "source": "local",
            "source-layer": "wriver_2",
            "minzoom": 1,
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
            "id": "LWOrderline_1_out",
            "type": "line",
            "metadata": {
                "maputnik:comment": "国外已定国界-背景"
            },
            "source": "local",
            "source-layer": "national_w",
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
                "line-color": "#F7F6EF",
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
            "minzoom": 2,
            "maxzoom": 8,
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
            "minzoom": 1,
            "maxzoom": 8,
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
            "minzoom": 2,
            "maxzoom": 8,
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
            "minzoom": 2,
            "maxzoom": 8,
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
            "minzoom": 2,
            "maxzoom": 8,
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
            "minzoom": 2,
            "maxzoom": 8,
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
            "metadata": {
                "maputnik:comment": "4-9级香港行政区域边线"
            },
            "source": "local",
            "source-layer": "national_cp",
            "minzoom": 4,
            "maxzoom": 8,
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
                "line-color": "rgba(169, 169, 168, 1)",
                "line-width": 0.6,
                "line-dasharray": [
                    10,
                    5,
                    3,
                    5
                ]
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
            "maxzoom": 8,
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
                "line-color": "#003b57",
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
            "maxzoom": 8,
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
            "maxzoom": 8,
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
            "id": "wroad_f_43000",
            "type": "line",
            "source": "local",
            "source-layer": "wroad_f_43000",
            "minzoom": 5,
            "maxzoom": 8,
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
                            5,
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
            "source-layer": "wroad_f_41000",
            "minzoom": 5,
            "maxzoom": 8,
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
            "maxzoom": 8,
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
            "minzoom": 1,
            "maxzoom": 8,
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
                "line-color": "#E2DBBE",
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
            "minzoom": 1,
            "maxzoom": 8,
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
                "line-color": "#959280",
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
            "minzoom": 1,
            "maxzoom": 8,
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
                "line-color": "#E2DBBE",
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
            "minzoom": 1,
            "maxzoom": 8,
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
                "line-color": "#988E66",
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
            "minzoom": 1,
            "maxzoom": 3,
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
                "line-color": "#E2DBBE",
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
            "minzoom": 1,
            "maxzoom": 3,
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
                "line-color": "#959280",
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
            "minzoom": 3,
            "maxzoom": 8,
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
                "line-color": "#E2DBBE",
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
            "minzoom": 3,
            "maxzoom": 8,
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
                "line-color": "#959280",
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
            "minzoom": 12,
            "maxzoom": 23,
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
                "line-color": "#1a3343",
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
                            14,
                            2.8
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
                "line-color": "#23405c",
                "line-width": {
                    "stops": [
                        [
                            14,
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
                                5,
                                5
                            ]
                        ],
                        [
                            17,
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
                "line-color": "#0E7195",
                "line-width": {
                    "stops": [
                        [
                            14,
                            4
                        ],
                        [
                            17,
                            5
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
                "maputnik:comment": "10级以上全国城市铁路-主要高铁-前景"
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
                "line-color": "#23405c",
                "line-width": {
                    "stops": [
                        [
                            14,
                            1.8
                        ],
                        [
                            17,
                            2
                        ]
                    ]
                },
                "line-dasharray": {
                    "stops": [
                        [
                            14,
                            [
                                4,
                                4
                            ]
                        ],
                        [
                            17,
                            [
                                5,
                                5
                            ]
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
            "minzoom": 14,
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            1.5
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            15,
                            1.5
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
            "maxzoom": 20,
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
                ],
                [
                    "!=",
                    "link_type",
                    2
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1.5
                        ],
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
                            5
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_1",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_45000",
            "minzoom": 13,
            "maxzoom": 15,
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
                ],
                [
                    ">=",
                    "fc",
                    5
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1.5
                        ],
                        [
                            14,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_45000_2",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_45000",
            "minzoom": 13,
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
                ],
                [
                    "!=",
                    "link_type",
                    2
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#05101b",
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
            "id": "roads_44000",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_44000",
            "minzoom": 13,
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
                            "#194167"
                        ],
                        [
                            14,
                            "#194167"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            2.2
                        ],
                        [
                            14,
                            3.5
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
            "id": "roads_44000_r",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_44000",
            "minzoom": 11,
            "maxzoom": 13,
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
                            "#10273e"
                        ],
                        [
                            12,
                            "#194167"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            11,
                            1
                        ],
                        [
                            12,
                            2
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
            "minzoom": 13,
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            8
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            3
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
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
            "id": "roads_52000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_52000",
            "minzoom": 11,
            "maxzoom": 13,
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            11,
                            2.5
                        ],
                        [
                            12,
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
            "minzoom": 11,
            "maxzoom": 13,
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            11,
                            1.5
                        ],
                        [
                            12,
                            3
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            8
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            3
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
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
            "id": "roads_51000_r_out",
            "type": "line",
            "source": "local",
            "source-layer": "roadsegment_r_s_51000",
            "minzoom": 9,
            "maxzoom": 13,
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            2
                        ],
                        [
                            10,
                            2
                        ],
                        [
                            11,
                            2.5
                        ],
                        [
                            12,
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
            "minzoom": 9,
            "maxzoom": 13,
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            9,
                            1
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            11,
                            1.5
                        ],
                        [
                            12,
                            3
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
                "line-color": "#1b5776",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                "line-color": "#224c74",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            5
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            8
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
                "line-color": "#1b5776",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            8,
                            2
                        ],
                        [
                            9,
                            3
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
                            6
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
                "line-color": "#224c74",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            8,
                            1.2
                        ],
                        [
                            9,
                            2
                        ],
                        [
                            10,
                            3
                        ],
                        [
                            11,
                            3.5
                        ],
                        [
                            12,
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
            "minzoom": 13,
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
                "line-color": "#014f74",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            9
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
            "minzoom": 13,
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
                "line-color": "#003b57",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            7
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
            "minzoom": 8,
            "maxzoom": 13,
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
                ],
                [
                    "==",
                    "form_way",
                    1
                ]
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
                            2
                        ],
                        [
                            9,
                            3
                        ],
                        [
                            10,
                            3.5
                        ],
                        [
                            11,
                            4
                        ],
                        [
                            12,
                            6
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
                ],
                [
                    "==",
                    "form_way",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "square",
                "line-join": "miter"
            },
            "paint": {
                "line-color": "#003b57",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1.8
                        ],
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
                            4
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
                "line-color": "#173c5f",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            14,
                            8
                        ],
                        [
                            15,
                            10
                        ],
                        [
                            16,
                            12
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
                "line-color": "#012c56",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            8
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
            "minzoom": 8,
            "maxzoom": 13,
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
            "minzoom": 8,
            "maxzoom": 13,
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
                "line-color": "#173c5f",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            8,
                            2.4
                        ],
                        [
                            9,
                            3
                        ],
                        [
                            10,
                            5
                        ],
                        [
                            11,
                            6
                        ],
                        [
                            12,
                            7
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
                "line-color": "#012c56",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            8,
                            1.2
                        ],
                        [
                            9,
                            2
                        ],
                        [
                            10,
                            3.5
                        ],
                        [
                            11,
                            4.5
                        ],
                        [
                            12,
                            5
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
            "minzoom": 8,
            "maxzoom": 13,
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
            "id": "roads_49_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            1.5
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
            "minzoom": 15,
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            15,
                            1.5
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
            "minzoom": 15,
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            1.5
                        ],
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
                            5
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
            "minzoom": 15,
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
                "line-color": "#05101b",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            15,
                            3
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
            "minzoom": 15,
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
                "line-color": "#05101b",
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
            "id": "roads_44000_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                            "#194167"
                        ],
                        [
                            14,
                            "#194167"
                        ]
                    ]
                },
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            2.2
                        ],
                        [
                            14,
                            3.5
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
            "id": "roads_52000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            8
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
            "minzoom": 15,
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            3
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
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
            "id": "roads_51000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "rgba(26, 47, 69, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            8
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
            "minzoom": 15,
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
                "line-color": "rgba(35, 64, 92, 1)",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            3
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
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
            "id": "roads_42000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "#1b5776",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
            "minzoom": 15,
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
                "line-color": "#224c74",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            5
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            8
                        ]
                    ]
                }
            }
        },
        {
            "id": "roads_43000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "#014f74",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            6
                        ],
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
                            9
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
            "minzoom": 15,
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
                "line-color": "#003b57",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            7
                        ]
                    ]
                },
                "line-blur": 0
            }
        },
        {
            "id": "roads_41000_out_zlevel",
            "type": "line",
            "source": "local",
            "source-layer": "zlevel_bz",
            "minzoom": 15,
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
                "line-color": "#173c5f",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            14,
                            8
                        ],
                        [
                            15,
                            10
                        ],
                        [
                            16,
                            12
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
            "minzoom": 15,
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
                "line-color": "#012c56",
                "line-width": {
                    "base": 3.5,
                    "stops": [
                        [
                            13,
                            4
                        ],
                        [
                            14,
                            4
                        ],
                        [
                            15,
                            6
                        ],
                        [
                            16,
                            8
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
                            12,
                            0.3
                        ],
                        [
                            13,
                            0.6
                        ],
                        [
                            14,
                            0.8
                        ],
                        [
                            15,
                            1.2
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
            "minzoom": 16,
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
                "line-color": "#4474cb",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
                "fill-extrusion-color": "rgba(18, 44, 75, 1)",
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
            "minzoom": 4,
            "maxzoom": 8,
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
                            8
                        ],
                        [
                            6,
                            8.5
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
                "icon-image": "sprite_1",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#5f8496",
                "text-halo-color": "#191b1c",
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
            "minzoom": 6,
            "maxzoom": 8,
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
                            8
                        ],
                        [
                            6,
                            8.5
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
                "icon-image": "sprite_1",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#5f8496",
                "text-halo-color": "#191b1c",
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
            "minzoom": 4,
            "maxzoom": 8,
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
                            9
                        ],
                        [
                            6,
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
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#191b1c",
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
            "minzoom": 3,
            "maxzoom": 8,
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
                            10
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
                "icon-image": "sprite_1",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#191b1c",
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
            "minzoom": 4,
            "maxzoom": 8,
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
                            9
                        ],
                        [
                            6,
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
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#4a82c2",
                "text-halo-color": "#191b1c",
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
            "minzoom": 1,
            "maxzoom": 2,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    191000
                ]
            ],
            "layout": {
                "text-size": 15,
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
            "name": "中国名称"
        },
        {
            "id": "LWPOIAdmin_190001",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190001",
            "minzoom": 2,
            "maxzoom": 8,
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
            "name": "中国首都名称"
        },
        {
            "id": "LWPOIAdmin_190002",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190002",
            "minzoom": 3,
            "maxzoom": 8,
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
                            3,
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
            "name": "省会城市名称"
        },
        {
            "id": "LWPOIAdmin_190005",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190005",
            "minzoom": 5,
            "maxzoom": 8,
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
            "id": "LWPOIAdmin_190004",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_190004",
            "minzoom": 6,
            "maxzoom": 8,
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
            "name": "县级市名称"
        },
        {
            "id": "LWPOIAdmin_195000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_195000",
            "minzoom": 5,
            "maxzoom": 8,
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
                            13
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
                "icon-image": "sprite_6",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#3f6757",
                "text-halo-color": "#191b1c",
                "text-halo-width": 2
            },
            "name": "世界国家首都城市名称"
        },
        {
            "id": "LWPOIAdmin_192000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_192000",
            "minzoom": 1,
            "maxzoom": 8,
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
                            14
                        ],
                        [
                            4,
                            15
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
                "icon-image": "sprite_1",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#86837d",
                "text-halo-color": "#191b1c",
                "text-halo-width": 2
            },
            "name": "世界大洲名称"
        },
        {
            "id": "LWPOIAdmin_193000",
            "type": "symbol",
            "source": "local",
            "source-layer": "wpoi_193000",
            "minzoom": 1,
            "maxzoom": 8,
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
                            14
                        ],
                        [
                            4,
                            15
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
                "icon-image": "sprite_1",
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "#477FC2",
                "text-halo-color": "#191b1c",
                "text-halo-width": 2
            },
            "name": "世界大洲名称"
        },
        {
            "id": "LWProLabelCHN",
            "type": "symbol",
            "source": "local",
            "source-layer": "province_p",
            "minzoom": 2,
            "maxzoom": 8,
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            9
                        ],
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
                "text-halo-width": 1
            },
            "name": "省份名称"
        },
        {
            "id": "LWOrderpolygon",
            "type": "symbol",
            "source": "local",
            "source-layer": "nationregion_p",
            "minzoom": 2,
            "maxzoom": 8,
            "filter": [
                "all"
            ],
            "layout": {
                "text-size": {
                    "stops": [
                        [
                            2,
                            8
                        ],
                        [
                            3,
                            10
                        ],
                        [
                            4,
                            12
                        ],
                        [
                            5,
                            14
                        ],
                        [
                            6,
                            15
                        ],
                        [
                            7,
                            17
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
                    -1,
                    -1
                ],
                "text-max-width": 8,
                "icon-image": "",
                "icon-size": 0.8,
                "text-justify": "center"
            },
            "paint": {
                "text-color": "#627883",
                "text-halo-color": "#191b1c",
                "text-halo-width": 2
            },
            "name": "国外国家名称标注"
        },
        {
            "id": "LWPOIAdmin_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "sp",
            "minzoom": 4,
            "maxzoom": 8,
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
                "icon-size": 0.8,
                "text-justify": "center"
            },
            "paint": {
                "text-color": "#6F6C6A",
                "text-halo-color": "#191b1c",
                "text-halo-width": 1
            },
            "name": "印度实际控制区、巴基斯坦实际控制区"
        },
        {
            "id": "route_no_41000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 8,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 11,
            "maxzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "symbol-placement": "point",
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "symbol-placement": "line",
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 8,
            "maxzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
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
                    0.2
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
            "minzoom": 8,
            "maxzoom": 13,
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
                            "len"
                        ]
                    ]
                ],
                "text-font": [
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.2
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
            "minzoom": 15,
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
                    "fzlthjw"
                ],
                "icon-size": 0.8,
                "text-size": 8,
                "visibility": "visible"
            },
            "paint": {
                "icon-color": "#191b1c",
                "text-color": "#191b1c"
            }
        },
        {
            "id": "LCMRT_S",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_station",
            "minzoom": 15,
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
                    "fzlthjw"
                ],
                "symbol-placement": "point",
                "text-padding": 1,
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
                "icon-size": 0.8
            },
            "paint": {
                "text-color": "rgba(46, 106, 160, 1)",
                "text-halo-color": "rgba(5, 5, 5, 1)",
                "text-halo-width": 1
            },
            "name": "地铁站标注",
            "metadata": {
                "maputnik:comment": "地铁站标注"
            }
        },
        {
            "id": "LCMRT_L_label",
            "type": "symbol",
            "source": "local",
            "source-layer": "mrt_line_label",
            "minzoom": 12,
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
                            12,
                            10
                        ],
                        [
                            20,
                            11
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 200,
                "text-font": [
                    "fzlthjw"
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
                "text-halo-width": 0.1
            }
        },
        {
            "id": "LRoadcross",
            "type": "symbol",
            "source": "local",
            "source-layer": "realroadcross",
            "minzoom": 15,
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
                            15,
                            10
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
                    "fzlthjw"
                ],
                "symbol-placement": "point",
                "text-padding": 1,
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
            "minzoom": 15,
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
                            15,
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
                            15,
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
            "id": "roads-symbol-53000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_53000",
            "minzoom": 15,
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
                            15,
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
            "minzoom": 13,
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
            "source-layer": "roadsegment_52000",
            "minzoom": 13,
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
                            13,
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
            "id": "roads-symbol-51000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_51000",
            "minzoom": 13,
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
                            13,
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
            "minzoom": 12,
            "maxzoom": 13,
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
                            12,
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 50,
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
            "id": "roads-symbol-42000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_42000",
            "minzoom": 13,
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
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 300,
                "text-font": [
                    "fzlthjw"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.5,
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
            "id": "roads-symbol-42000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_42000",
            "minzoom": 8,
            "maxzoom": 13,
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
                            8,
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 50,
                "text-font": [
                    "fzlthjw"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "auto",
                "text-field": "{name_chn}",
                "text-letter-spacing": 0.5,
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
            "id": "roads-symbol-43000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_43000",
            "minzoom": 13,
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
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 300,
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
            "id": "roads-symbol-43000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_43000",
            "minzoom": 9,
            "maxzoom": 13,
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
                            10
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
            "id": "roads-symbol-41000",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_41000",
            "minzoom": 13,
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
                            10
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 250,
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
                "text-halo-color": "#050505",
                "text-halo-width": 0.1
            }
        },
        {
            "id": "roads-symbol-41000-r",
            "type": "symbol",
            "source": "local",
            "source-layer": "roadsegment_r_s_41000",
            "minzoom": 8,
            "maxzoom": 13,
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
                        ]
                    ]
                },
                "text-max-angle": 30,
                "symbol-spacing": 150,
                "text-font": [
                    "fzlthjw"
                ],
                "symbol-placement": "line",
                "text-padding": 10,
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
            "id": "LCRailway_label_1",
            "type": "symbol",
            "source": "local",
            "source-layer": "railway",
            "minzoom": 14,
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
                "symbol-placement": "line",
                "text-padding": 1,
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
                "text-color": "#0E7195",
                "text-halo-color": "#191b1c",
                "text-halo-width": 1
            },
            "name": "铁路标注"
        },
        {
            "id": "LCRailway_label_2",
            "type": "symbol",
            "source": "local",
            "source-layer": "railway",
            "minzoom": 14,
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
                "symbol-placement": "line",
                "text-padding": 1,
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
                "text-halo-color": "#191b1c",
                "text-halo-width": 1
            },
            "name": "高铁标注"
        },
        {
            "id": "pois_190104",
            "type": "symbol",
            "source": "local",
            "source-layer": "poi_new",
            "minzoom": 8,
            "maxzoom": 20,
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
                            8,
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
            "minzoom": 8,
            "maxzoom": 10,
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
            "minzoom": 8,
            "maxzoom": 9,
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
                            8,
                            8
                        ],
                        [
                            9,
                            8
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
            "minzoom": 8,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "minzoom": 9,
            "maxzoom": 20,
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
            "name": "机场"
        },
        {
            "id": "pois_150104",
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
                    "150104"
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
                            8,
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
            "maxzoom": 20,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "icon-size": 0.8,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "minzoom": 11,
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                            12,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                "icon-image": "sprite_8",
                "icon-size": 0.8
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
            "maxzoom": 20,
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
                "icon-image": "sprite_54",
                "icon-size": 0.8
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
                            13,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                "text-anchor": "left",
                "text-offset": [
                    1,
                    0
                ],
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
                "icon-size": 0.8
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
                            15,
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
            "maxzoom": 20,
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
                            15,
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
                            14,
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
                            14,
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
        }
    ],
    "id": "c0kjoo8km"
};