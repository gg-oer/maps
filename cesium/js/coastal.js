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

    //lighting is off
    //viewer.scene.globe.showGroundAtmosphere = false;

    var points =

    [{
      "id" : "document",
      "name" : "marker",
      "version" : "1.0"
    },{
      "id" : "1",
      "name" : "越後平野",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.019282, 37.818863, 200]}
    },{
      "id" : "2",
      "name" : "九十九里浜",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [140.462306, 35.538706, 200]}
    },{
      "id" : "3",
      "name" : "エバーグレーズ（大西洋海岸平野）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-80.189534, 25.953397, 200]}
    },{
      "id" : "4",
      "name" : "天橋立",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.190951, 35.568186, 200]}
    },{
      "id" : "5",
      "name" : "クルシュー砂州",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [20.865946, 55.177653, 200]}
    },{
      "id" : "6",
      "name" : "アラバト・スピット（黒海）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [35.069089, 45.641458, 200]}
    },{
      "id" : "7",
      "name" : "野付半島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [145.319049, 43.597399, 200]}
    },{
      "id" : "8",
      "name" : "三保の松原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [138.519003, 35.003566, 200]}
    },{
      "id" : "9",
      "name" : "ケープコッド",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-70.155717, 41.663765, 200]}
    },{
      "id" : "10",
      "name" : "ダンジネス・スピット",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-123.129272, 48.177763, 200]}
    },{
      "id" : "11",
      "name" : "函館",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [140.725615, 41.767348, 200]}
    },{
      "id" : "12",
      "name" : "串本",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.779192	,	33.46593, 200]}
    },{
      "id" : "13",
      "name" : "モン・サン・ミッシェル",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-1.5112	,	48.6358, 200]}
    },{
      "id" : "14",
      "name" : "ラングラード島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-56.326904, 46.884053, 200]}
    },{
      "id" : "15",
      "name" : "湖山池",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [134.150216, 35.505885, 200]}
    },{
      "id" : "16",
      "name" : "サロマ湖",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [143.808319, 44.139665, 200]}
    },{
      "id" : "17",
      "name" : "ヴェネツィアの潟",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [12.268911, 45.293346, 200]}
    },{
      "id" : "18",
      "name" : "ソンクラー湖",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [100.4892, 7.1918, 200]}
    },{
      "id" : "19",
      "name" : "ベームスター干拓地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [4.921875, 52.666227, 200]}
    },{
      "id" : "20",
      "name" : "テムズ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [0.580722, 51.492769, 200]}
    },{
      "id" : "21",
      "name" : "セマングム",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [126.610167, 35.837855, 200]}
    },{
      "id" : "22",
      "name" : "有明海",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [130.259399, 33.163134, 200]}
    },{
      "id" : "23",
      "name" : "盤州干潟",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.896015, 35.414929, 200]}
    },{
      "id" : "24",
      "name" : "鳥取砂丘",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [134.227774, 35.541445, 200]}
    },{
      "id" : "25",
      "name" : "中田島砂丘",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.740615, 34.659879, 200]}
    },{
      "id" : "26",
      "name" : "オレゴン砂丘",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-124.189453, 43.659924, 200]}
    },{
      "id" : "27",
      "name" : "ピラ砂丘",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-1.215083, 44.58804, 200]}
    },{
      "id" : "28",
      "name" : "室戸",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [134.087811, 33.341929, 200]}
    },{
      "id" : "29",
      "name" : "御前崎",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [138.203646, 34.609597, 200]}
    },{
      "id" : "30",
      "name" : "Tongue Point（ニュージーランド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [174.664138, -41.338072, 200]}
    },{
      "id" : "31",
      "name" : "サンタクルーズ（アメリカ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-122.006149, 36.971838, 200]}
    },{
      "id" : "32",
      "name" : "屏風ヶ浦",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [140.787927, 35.70579, 200]}
    },{
      "id" : "33",
      "name" : "ドーバーの白い崖（イギリス）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [1.3694, 51.138, 200]}
    },{
      "id" : "34",
      "name" : "モハーの断崖（アイルランド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-9.387712, 53.024441, 200]}
    },{
      "id" : "35",
      "name" : "青島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [131.477922, 31.805524, 200]}
    },{
      "id" : "36",
      "name" : "Southerndown（イギリス）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-3.612552, 51.448672, 200]}
    },{
      "id" : "37",
      "name" : "ガリシア地方",
      "description" : "",
      "billboard" : {
      "image" : " ./img/yellow.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-8.792605, 42.625693, 200]}
    },{
      "id" : "38",
      "name" : "三陸海岸",
      "description" : "",
      "billboard" : {
      "image" : " ./img/yellow.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [141.863022, 39.14083, 200]}
    },{
      "id" : "39",
      "name" : "サンフランシスコ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/yellow.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-122.361946, 37.812365, 200]}
    },{
      "id" : "40",
      "name" : "シドニー",
      "description" : "",
      "billboard" : {
      "image" : " ./img/yellow.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [151.182442, -33.993275, 200]}
    },{
      "id" : "41",
      "name" : "セントローレンス川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/purple.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-66.84494, 49.325471, 200]}
    },{
      "id" : "42",
      "name" : "ラプラタ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/purple.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-56.777764	,	-35.124028	, 200]}
    },{
      "id" : "43",
      "name" : "セーヌ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/purple.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-1.592764, 48.677927, 200]}
    },{
      "id" : "44",
      "name" : "エルベ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/purple.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [8.811923, 53.936183, 200]}
    },{
      "id" : "45",
      "name" : "グレートバリアリーフ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [150.589238, -20.641316, 200]}
    },{
      "id" : "46",
      "name" : "ニューカレドニアバリアリーフ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [164.542, -20.576, 1000]}
    },{
      "id" : "47",
      "name" : "南鳥島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [153.9816, 24.2862, 200]}
    },{
      "id" : "48",
      "name" : "フヴァドゥ環礁",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [73.2919, 0.4899, 200]}
    },{
      "id" : "49",
      "name" : "アタフ島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-172.496, -8.5578, 200]}
    },{
      "id" : "50",
      "name" : "父島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/brown.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [142.180739, 27.05896, 200]}
    }
  ]

    var topoPromise = Cesium.CzmlDataSource.load(points);

    var topo;
    topoPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        topo = dataSource.entities;
      });


    // Setup Display Options


    var topoElement =  document.getElementById('topo');

    topoElement.addEventListener('change', function (e) {
        topo.show = e.target.checked;
    });


function Echigo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.019282	,	37.818863	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Kujukuri()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.462306	,	35.538706	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Everglades()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-80.189534	,	25.953397	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Amanohashidate()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.190951	,	35.568186	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Curonian()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(20.865946	,	55.177653	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Arabat()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(35.069089	,	45.641458	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Notsuke()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(145.319049	,	43.597399	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Mihonomatsubara()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.519003	,	35.003566	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Cod()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-70.155717	,	41.663765	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Dungeness()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-123.129272	,	48.1777633	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Hakodate()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.725615	,	41.767348	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kushimoto()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.779192	,	33.46593, 50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function MontSaintMichel()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-1.5112	,	48.6358	, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Langlade()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-56.326904	,	46.884053	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Koyama()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(134.150216	,	35.505885	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Saroma()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(143.808319	,	44.139665	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Venetia()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(12.268911	,	45.293346	,	150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Songkhla()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(100.4892	,	7.1918	,	150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Beemster()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(4.921875	,	52.666227	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Thames()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(0.580722	,	51.492769	,	150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Saemangeum()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(126.610167	,	35.837855	,	150000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Ariake()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.259399	,	33.163134	,	200000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Banzu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.896015	,	35.414929	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Tottori()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(134.227774	,	35.541445	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Nakatajima()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.740615	,	34.659879	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Oregon()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-124.189453	,	43.659924	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Pilat()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-1.215083	,	44.58804	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Muroto()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(134.087811	,	33.341929	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Omaezaki()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.203646	,	34.609597	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function TonguePoint()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(174.664138, -41.338072,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function SantaCruz()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-122.006149	,	36.971838	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Byoubugaura()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.787927	,	35.70579	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Dover()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(1.3694	,	51.138	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Moher()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-9.387712	,	53.024441	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Aoshima()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.477922	,	31.805524	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Southerndown()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-3.612552	,	51.448672	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Galicia()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-8.792605	,	42.625693	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Sanriku()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(141.863022	,	39.14083	,	400000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function SanFrancisco()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-122.361946	,	37.812365	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Sydney()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(151.182442	,	-33.993275	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Lawrence()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-66.84494	,	49.325471	, 2000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function LaPlata()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-56.777764	,	-35.124028	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Seine()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-1.592764	,	48.677927	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Elbe()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(8.811923	,	53.936183	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function GreatBarrierReef()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(150.589238	,	-20.641316	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function NewCaledonian()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(164.5664	,	-20.4119	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Minamitorishima()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(153.9816	,	24.2862	,	8000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Huvadhu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(73.2919	,	0.4899	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Atafu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-172.496	,	-8.5578	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function ChiChijima()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(142.180739	,	27.05896	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

//basemaps

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
      addBaseLayerOption("Base", undefined); // the current

      addBaseLayerOption(
        "地理院タイル（色別標高図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
        maximumLevel: 15,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（色別標高図）＊「海域部は海上保安庁海洋情報部の資料を使用して作成」<a href =https://cyberjapandata.gsi.go.jp/legend/attension_relief.html>凡例<a></a>')
        }),
        1.0,
        false
      );

      addBaseLayerOption(
        "地理院タイル（陰影起伏図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png',
        maximumLevel: 16,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（陰影起伏図）</a>')
        }),
        1.0,
        false
      );

      addBaseLayerOption(
        "地理院タイル（空中写真）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        maximumLevel: 18,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（空中写真）</a>')
      }),
      1.0,
      false
      );

      addBaseLayerOption(
        "地理院タイル（淡色地図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        maximumLevel: 18,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（淡色地図）</a>')
      }),
      1.0,
      false
      );

      addAdditionalLayerOption(
        "OpenStreetMaps",
        new Cesium.OpenStreetMapImageryProvider({
          credit:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>'
        }),
        1.0,
        false
        );

  addAdditionalLayerOption(
        "地形",
        new Cesium.UrlTemplateImageryProvider({
        url : './data/topo/{z}/{x}/{y}.png',
        maximumLevel: 0,
        maximumLevel: 8,
        credit : new Cesium.Credit('h.yamauchi cc by sa 4.0')
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
