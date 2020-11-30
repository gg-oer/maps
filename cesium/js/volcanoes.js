Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MTE1ODNkYy1lNzFhLTQyMTctODliZi1lYmI3MmViYWEwN2QiLCJpZCI6MTI0NzcsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU4NjgzOTAwN30.Cu2EHKVy8dBp7XL2cIvSUaXMDwZsCkfqm2jX7c3ObVI';

var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
  url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
  enablePickFeatures:false,
  credit : new Cesium.Credit('Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community')}),
  baseLayerPicker: true,
  timeline : false,
  animation : false,
  homeButton: true,
  vrButton: true,
  geocoder:true,
  sceneModePicker:true,
  navigationHelpButton:false,
  terrainExaggeration:1.2,
  terrainProvider : Cesium.createWorldTerrain()
});

var points =

[{
  "id" : "document",
  "name" : "marker",
  "version" : "1.0"
}, {
  "id" : "1",
  "name" : "富士山",
  "description" : "成層火山",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [138.730781, 35.362799, 5000]}
},{
  "id" : "2",
  "name" : "マヨン山",
  "description" : "成層火山",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [123.68588, 13.25576, 5000]},
},{
  "id" : "3",
  "name" : "マウナ・ロア",
  "description" : "楯状火山",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-155.5923741, 19.4717348, 5000]},
},{
  "id" : "4",
  "name" : "マウナ・ケア",
  "description" : "楯状火山",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-155.4680379, 19.8206888, 5000]},
},{
  "id" : "5",
  "name" : "阿蘇山",
  "description" : "カルデラ",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [131.0856638, 32.8848462, 5000]},
},{
  "id" : "6",
  "name" : "洞爺湖",
  "description" : "カルデラ",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [140.853, 42.6015, 1000]},
},{
  "id" : "7",
  "name" : "タウポ湖",
  "description" : "カルデラ",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [175.9086, -38.8071, 5000]},
},{
  "id" : "8",
  "name" : "ンゴロンゴロ保全地域",
  "description" : "カルデラ",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [35.5627, -3.1865, 5000]},
},{
  "id" : "9",
  "name" : "昭和新山",
  "description" : "溶岩円頂丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [140.8644, 42.54255, 1000]},
},{
  "id" : "10",
  "name" : "雲仙岳",
  "description" : "溶岩円頂丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [130.2916464, 32.7618964, 2000]},
},{
  "id" : "11",
  "name" : "ラッセン山",
  "description" : "溶岩円頂丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-121.50492, 40.4881308, 3000]},
},{
  "id" : "12",
  "name" : "妙高山",
  "description" : "溶岩円頂丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [138.1133581, 36.8912785, 3000]},
},{
  "id" : "13",
  "name" : "大室山",
  "description" : "火山砕屑丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [ 139.0948, 34.9033, 1000]},
},{
  "id" : "14",
  "name" : "米塚",
  "description" : "火山砕屑丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [131.0439, 32.9054, 1000]},
},{
  "id" : "15",
  "name" : "ダイヤモンドヘッド",
  "description" : "火山砕屑丘",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-157.8057, 21.2621, 1000]},
},{
  "id" : "16",
  "name" : "デカン高原",
  "description" : "溶岩台地",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [76.992, 13.87, 50000]},
},{
  "id" : "17",
  "name" : "弥陀ヶ原",
  "description" : "溶岩台地",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [137.5573721, 36.567489, 5000]},
},{
  "id" : "18",
  "name" : "コロンビア台地",
  "description" : "溶岩台地",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-121.009, 46.461, 50000]},
},{
  "id" : "19",
  "name" : "シラス台地",
  "description" : "火砕流台地",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [130.9062, 31.6119, 5000]},
},{
  "id" : "20",
  "name" : "磐梯山",
  "description" : "爆裂火口",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [140.0722448, 37.6009797, 5000]},
},{
  "id" : "21",
  "name" : "米丸",
  "description" : "マール",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [130.5644, 31.7761, 1000]},
},{
  "id" : "22",
  "name" : "デビルマウンテンレイクス",
  "description" : "マール",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [-164.4722, 66.3653, 5000]},
},{
  "id" : "23",
  "name" : "シャルケンメーレナー・マール",
  "description" : "マール",
  "billboard" : {
  "image" : " ./img/red.png",
  "scale" : 0.3},
  "position" : {
  "cartographicDegrees" : [6.8583, 50.1696, 5000]},
}
]

var lines =
[{
  "id" : "document",
  "name" : "marker",
  "version" : "1.0"
}, {
  "id" : "1",
  "name" : "富士山",
  "description" : "成層火山",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [138.730781, 35.362799, 0,
                              138.730781, 35.362799, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "2",
  "name" : "マヨン山",
  "description" : "成層火山",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [123.68588, 13.25576, 0,
                              123.68588, 13.25576, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "3",
  "name" : "マウナロア",
  "description" : "楯状火山",
  "polyline" : {
    "positions" : {
        "cartographicDegrees" : [-155.5923741, 19.4717348, 0,
                                -155.5923741, 19.4717348, 5000]},
        "material" : {
          "solidColor" : {
            "color" : {"rgba" : [255, 255, 255, 50]}
                      }},
        "width" : 0.2}
},{
  "id" : "4",
  "name" : "マウナ・ケア",
  "description" : "楯状火山",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [-155.4680379, 19.8206888, 0,
                              -155.4680379, 19.8206888, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "5",
  "name" : "阿蘇山",
  "description" : "カルデラ",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [131.0856638, 32.8848462, 0,
                              131.0856638, 32.8848462, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "6",
  "name" : "洞爺湖",
  "description" : "カルデラ",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [140.853, 42.6015, 0,
                              140.853, 42.6015, 1000]},
  "material" : {
    "solidColor" : {
      "color" : {"rgba" : [255, 255, 255, 50]}
                }},
  "width" : 0.2}
},{
  "id" : "7",
  "name" : "タウポ湖",
  "description" : "カルデラ",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [175.9086, -38.8071, 0,
                              175.9086, -38.8071, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "8",
  "name" : "ンゴロンゴロ保全地域",
  "description" : "カルデラ",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [35.5627, -3.1865, 0,
                              35.5627, -3.1865, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "9",
  "name" : "昭和新山",
  "description" : "溶岩円頂丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [140.8644, 42.54255, 0,
                              140.8644, 42.54255, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "10",
  "name" : "雲仙岳",
  "description" : "溶岩円頂丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [130.2916464, 32.7618964, 0,
                              130.2916464, 32.7618964, 2000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "11",
  "name" : "ラッセン山",
  "description" : "溶岩円頂丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [-121.50492, 40.4881308, 0,
                              -121.50492, 40.4881308, 3000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "12",
  "name" : "妙高山",
  "description" : "溶岩円頂丘",
  "polyline" : {
    "positions" : {
  "cartographicDegrees" : [138.1133581, 36.8912785, 0,
                          138.1133581, 36.8912785, 3000]},
  "material" : {
    "solidColor" : {
      "color" : {"rgba" : [255, 255, 255, 50]}
                }},
  "width" : 0.2}
},{
  "id" : "13",
  "name" : "大室山",
  "description" : "火山砕屑丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [139.0948, 34.9033, 0,
                              139.0948, 34.9033, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "14",
  "name" : "米塚",
  "description" : "火山砕屑丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [131.0439, 32.9054, 0,
                              131.0439, 32.9054, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "15",
  "name" : "ダイヤモンドヘッド",
  "description" : "火山砕屑丘",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [-157.8057, 21.2621, 0,
                              -157.8057, 21.2621, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "16",
  "name" : "デカン高原",
  "description" : "溶岩台地",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [76.992, 13.87, 0,
                              76.992, 13.87, 50000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "17",
  "name" : "弥陀ヶ原",
  "description" : "溶岩台地",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [137.5573721, 36.567489, 0,
                              137.5573721, 36.567489, 1000,]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "18",
  "name" : "コロンビア台地",
  "description" : "溶岩台地",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [-121.009, 46.461, 0,
                              -121.009, 46.461, 50000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "19",
  "name" : "シラス台地",
  "description" : "火砕流台地",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [130.9062, 31.6119, 0,
                              130.9062, 31.6119, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "20",
  "name" : "磐梯山",
  "description" : "爆裂火口",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [140.0722448, 37.6009797, 0,
                              140.0722448, 37.6009797, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "21",
  "name" : "米丸",
  "description" : "マール",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [130.5644, 31.7761, 0,
                              130.5644, 31.7761, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "22",
  "name" : "デビルマウンテンレイクス",
  "description" : "マール",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [-164.4722, 66.3653, 0,
                              -164.4722, 66.3653, 5000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
      "width" : 0.2}
},{
  "id" : "23",
  "name" : "シャルケンメーレナー・マール",
  "description" : "マール",
  "polyline" : {
    "positions" : {
      "cartographicDegrees" : [6.8583, 50.1696, 0,
                              6.8583, 50.1696, 1000]},
      "material" : {
        "solidColor" : {
          "color" : {"rgba" : [255, 255, 255, 50]}
                    }},
  "width" : 0.2}
  }
]



viewer.dataSources.add(Cesium.CzmlDataSource.load(points));
viewer.dataSources.add(Cesium.CzmlDataSource.load(lines));

function fuji()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.730781, 35.362799, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function fuji_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.730781, 35.250, 5000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function mayon()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(123.68588, 13.25576, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function mayon_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(123.68588, 13.05576, 5000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function maunaloa()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-155.5923741, 19.4717348, 100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function maunaloa_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-155.3323741, 19.0017348, 10000),
  orientation: {
    heading: -0.5,
    pitch: -0.3,
    roll: 0
  }})
    }

function maunakea()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-155.4680379, 19.8206888, 70000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function maunakea_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-155.4680379, 19.6206888, 5000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function aso()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.0856638, 32.8848462, 100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function aso_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.0856638, 32.5848462, 12000),
  orientation: {
    heading: 0,
    pitch: -0.3,
    roll: 0
  }})
    }

function toya()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.853, 42.6015, 23000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function toya_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.853, 42.4015, 5000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function taupo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(175.9086, -38.8071, 150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function taupo_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(175.9086, -39.4071, 28000),
  orientation: {
    heading: 0,
    pitch: -0.4,
    roll: 0
  }})
    }

function ngorongoro()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(35.5627, -3.1865, 65000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function ngorongoro_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(35.5627, -3.8865, 25000),
  orientation: {
    heading: 0,
    pitch: -0.3,
    roll: 0
  }})
    }

function showa_shinzan()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.8644, 42.54255, 2000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function showa_shinzan_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.8644, 42.5315, 500),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function unzen()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.2916464, 32.7618964, 5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function unzen_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.2916464, 32.808964, 1500),
  orientation: {
    heading: 3.1,
    pitch: -0.2,
    roll: 0
  }})
    }

function lassen()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-121.50492, 40.4881308, 20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function lassen_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-121.50492, 40.4481308, 4000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function myoko()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.1133581, 36.8912785, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function myoko_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.233581, 36.8912785, 3500),
  orientation: {
    heading: -1.5,
    pitch: -0.2,
    roll: 0
  }})
    }

function omuro()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.0948, 34.9033, 3000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function omuro_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.0948, 34.8933, 700),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function komeduka()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.0439, 32.9054, 3000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function komeduka_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.0439, 32.9014, 1000),
  orientation: {
    heading: 0,
    pitch: -0.3,
    roll: 0
  }})
    }

function diamond_head()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-157.8057, 21.2621, 3500),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function diamond_head_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-157.8057, 21.2421, 800),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function deccan()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(76.992, 13.87, 3000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function deccan_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(74.400, 13.87, 9000),
  orientation: {
    heading: 1.5,
    pitch: -0.15,
    roll: 0
  }})
    }

function midagahara()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.5573721, 36.567489, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function midagahara_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.4073721, 36.567489, 5000),
  orientation: {
    heading: 1.5,
    pitch: -0.3,
    roll: 0
  }})
    }

function columbia()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-121.009, 46.461, 500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function columbia_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-120.009, 46.561, 10000),
  orientation: {
    heading: -1.5,
    pitch: -0.2,
    roll: 0
  }})
    }

function shirasu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.9062, 31.6119, 150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function shirasu_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.5062, 31.6119, 20000),
  orientation: {
    heading: -1.6,
    pitch: -0.2,
    roll: 0
  }})
    }

function bandai()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.0722448, 37.6009797, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function bandai_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.0122448, 37.6209797, 4000),
  orientation: {
    heading: 1.5,
    pitch: -0.4,
    roll: 0
  }})
    }

function yonemaru()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.5644, 31.7761, 3000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function yonemaru_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.5644, 31.7461, 1000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function devil_mountain_lakes()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-164.4722, 66.3653, 30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function devil_mountain_lakes_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-164.4722, 66.1653, 5000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function schalkenmehrener()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(6.8583, 50.1696, 6000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function schalkenmehrener_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(6.8583, 50.1606, 700),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }



var imageryLayers = viewer.imageryLayers;

var viewModel = {
  layers: [],
  baseLayers: [],
  upLayer: null,
  downLayer: null,
  selectedLayer: null,
  isSelectableLayer: function (layer) {
    return this.baseLayers.indexOf(layer) >= 0;
  },
  raise: function (layer, index) {
    imageryLayers.raise(layer);
    viewModel.upLayer = layer;
    viewModel.downLayer = viewModel.layers[Math.max(0, index - 1)];
    updateLayerList();
    window.setTimeout(function () {
      viewModel.upLayer = viewModel.downLayer = null;
    }, 10);
  },
  lower: function (layer, index) {
    imageryLayers.lower(layer);
    viewModel.upLayer =
      viewModel.layers[
        Math.min(viewModel.layers.length - 1, index + 1)
      ];
    viewModel.downLayer = layer;
    updateLayerList();
    window.setTimeout(function () {
      viewModel.upLayer = viewModel.downLayer = null;
    }, 10);
  },
  canRaise: function (layerIndex) {
    return layerIndex > 0;
  },
  canLower: function (layerIndex) {
    return layerIndex >= 0 && layerIndex < imageryLayers.length - 1;
  },
};
var baseLayers = viewModel.baseLayers;

Cesium.knockout.track(viewModel);

function setupLayers() {
  // layer group.
  addBaseLayerOption("Bing Maps Aerial", undefined); // the current

  addBaseLayerOption(
    "OpenStreetMaps",
    new Cesium.OpenStreetMapImageryProvider({
      credit:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>'
    })
  );

  addBaseLayerOption(
    "地理院タイル（火山土地条件図）",
    new Cesium.UrlTemplateImageryProvider({
    url : 'https://cyberjapandata.gsi.go.jp/xyz/vlcd/{z}/{x}/{y}.png',
    maximumLevel: 16,
    credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（火山土地条件図）<a href =https://www.gsi.go.jp/bousaichiri/volcano-maps-vlcm.html>凡例<a></a>')
    })
  );

  // each layer.

  addAdditionalLayerOption(
    "地理院タイル（空中写真）",
    new Cesium.UrlTemplateImageryProvider({
    url : 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
    maximumLevel: 18,
    credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（空中写真）</a>')
  }),
  1.0,
  false
  );

  addAdditionalLayerOption(
    "地理院タイル（標準地図）",
    new Cesium.UrlTemplateImageryProvider({
    url : 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    maximumLevel: 18,
    credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（標準地図）</a>')
  }),
  1.0,
  false
  );
}

function addBaseLayerOption(name, imageryProvider) {
  var layer;
  if (typeof imageryProvider === "undefined") {
    layer = imageryLayers.get(0);
    viewModel.selectedLayer = layer;
  } else {
    layer = new Cesium.ImageryLayer(imageryProvider);
  }

  layer.name = name;
  baseLayers.push(layer);
}

function addAdditionalLayerOption(name, imageryProvider, alpha, show) {
  var layer = imageryLayers.addImageryProvider(imageryProvider);
  layer.alpha = Cesium.defaultValue(alpha, 0.5);
  layer.show = Cesium.defaultValue(show, true);
  layer.name = name;
  Cesium.knockout.track(layer, ["alpha", "show", "name"]);
}

function updateLayerList() {
  var numLayers = imageryLayers.length;
  viewModel.layers.splice(0, viewModel.layers.length);
  for (var i = numLayers - 1; i >= 0; --i) {
    viewModel.layers.push(imageryLayers.get(i));
  }
}

setupLayers();
updateLayerList();

//Bind the viewModel to the DOM elements of the UI that call for it.
var toolbar = document.getElementById("toolbar");
Cesium.knockout.applyBindings(viewModel, toolbar);

Cesium.knockout
  .getObservable(viewModel, "selectedLayer")
  .subscribe(function (baseLayer) {
    // Handle changes to the drop-down base layer selector.
    var activeLayerIndex = 0;
    var numLayers = viewModel.layers.length;
    for (var i = 0; i < numLayers; ++i) {
      if (viewModel.isSelectableLayer(viewModel.layers[i])) {
        activeLayerIndex = i;
        break;
      }
    }
    var activeLayer = viewModel.layers[activeLayerIndex];
    var show = activeLayer.show;
    var alpha = activeLayer.alpha;
    imageryLayers.remove(activeLayer, false);
    imageryLayers.add(baseLayer, numLayers - activeLayerIndex - 1);
    baseLayer.show = show;
    baseLayer.alpha = alpha;
    updateLayerList();
  });

function on_points(){
viewer.dataSources.add(Cesium.CzmlDataSource.load(points));
};

function on_lines(){
viewer.dataSources.add(Cesium.CzmlDataSource.load(lines));
};

function off(){
viewer.dataSources.removeAll()};
