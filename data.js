var APP_DATA = {
  "scenes": [
    {
      "id": "0-center",
      "name": "Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00046400012316638595,
        "pitch": 0.009211499994821182,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.8220540204840496,
          "pitch": 0.32409755156893816,
          "rotation": 3.9269908169872414,
          "target": "1-right"
        },
        {
          "yaw": -0.9027907029353024,
          "pitch": 0.30790199597395684,
          "rotation": 2.356194490192345,
          "target": "2-left"
        },
        {
          "yaw": -2.4680272440931343,
          "pitch": 0.45250610835848093,
          "rotation": 0,
          "target": "3-sitting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-right",
      "name": "Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7124543842783169,
          "pitch": 0.2390069032134452,
          "rotation": 10.210176124166829,
          "target": "2-left"
        },
        {
          "yaw": -0.27677846620408886,
          "pitch": 0.25245931646187003,
          "rotation": 0,
          "target": "3-sitting"
        },
        {
          "yaw": -0.3176414103156304,
          "pitch": 0.450184793226331,
          "rotation": 8.63937979737193,
          "target": "0-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left",
      "name": "Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7992677417192056,
          "pitch": 0.27609463350797725,
          "rotation": 7.853981633974483,
          "target": "3-sitting"
        },
        {
          "yaw": 0.34924717024520824,
          "pitch": 0.4041868839112457,
          "rotation": 4.71238898038469,
          "target": "0-center"
        },
        {
          "yaw": -0.4686703213637067,
          "pitch": 0.24648747306142127,
          "rotation": 2.356194490192345,
          "target": "1-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sitting",
      "name": "Sitting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.561031443127626,
          "pitch": 0.5605923212293682,
          "rotation": 0,
          "target": "0-center"
        },
        {
          "yaw": 2.9337083396479375,
          "pitch": 0.23964884995366376,
          "rotation": 3.9269908169872414,
          "target": "1-right"
        },
        {
          "yaw": 1.602516255400805,
          "pitch": 0.26166355844029,
          "rotation": 2.356194490192345,
          "target": "2-left"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "IAP Head Office Lobby",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
