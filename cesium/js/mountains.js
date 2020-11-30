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
      terrainExaggeration:1.5,
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
      "name" : "ヒマラヤ山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [82.592388	,	28.885431	,	9000]}
    },{
      "id" : "2",
      "name" : "アルプス山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [8.700485	,	46.325805	,	9000]}
    },{
      "id" : "3",
      "name" : "アンデス山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-67.545689	,	-21.701387	,	9000]}
    },{
      "id" : "4",
      "name" : "ロッキー山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-117.40796	,	51.190632	,	9000]}
    },{
      "id" : "5",
      "name" : "アトラス山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-3.941957	,	32.513105	,	9000]}
    },{
      "id" : "6",
      "name" : "ヴェルホヤンスク山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [128.10668	,	67.226784	,	9000]}
    },{
      "id" : "7",
      "name" : "ピレネー山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [0.822985	,	42.630086	,	9000]}
    },{
      "id" : "8",
      "name" : "ビスマーク山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [143.532708	,	-5.773552	,	9000]}
    },{
      "id" : "9",
      "name" : "バリサーン山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [101.112251	,	-1.614547	,	9000]}
    },{
      "id" : "10",
      "name" : "アパラチア山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-80.768749	,	37.111294	,	9000]}
    },{
      "id" : "11",
      "name" : "ウラル山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [59.015797	,	60.242769	,	9000]}
    },{
      "id" : "12",
      "name" : "大シンアンリン山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [120.243725	,	47.166998	,	9000]}
    },{
      "id" : "13",
      "name" : "テンシャン山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [84.208985	,	42.917604	,	9000]}
    },{
      "id" : "14",
      "name" : "ドラケンスバーグ山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [28.660162	,	-29.783114	,	9000]}
    },{
      "id" : "15",
      "name" : "スカンディナヴィア山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [11.98132	,	63.054751	,	9000]}
    },{
      "id" : "16",
      "name" : "グレートディヴァイディング山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [149.598813	,	-34.714904	,	9000]}
    },{
      "id" : "17",
      "name" : "ビルランガ山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [109.679528	,	75.748803	,	9000]}
    },{
      "id" : "18",
      "name" : "ラブラドル高原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-67.598137	,	52.797045	,	9000]}
    },{
      "id" : "19",
      "name" : "ギアナ高地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-55.25224	,	1.169968	,	9000]}
    },{
      "id" : "20",
      "name" : "ブラジル高原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-46.221328	,	-18.634819	,	9000]}
    },{
      "id" : "21",
      "name" : "デカン高原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [76.51704	,	13.435925	,	9000]}
    },{
      "id" : "22",
      "name" : "グリーンランド",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-37.432276	,	70.62811	,	9000]}
    },{
      "id" : "23",
      "name" : "エチオピア高原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [38.324282	,	8.087932	,	9000]}
    },{
      "id" : "24",
      "name" : "日高山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [142.682861	,	42.719364	,	3500]}
    },{
      "id" : "25",
      "name" : "奥羽山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [141.001141	,	39.852583	,	3500]}
    },{
      "id" : "26",
      "name" : "飛騨山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.651586	,	36.290945	,	3500]}
    },{
      "id" : "27",
      "name" : "木曽山脈	",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.80533	,	35.789315	,	3500]}
    },{
      "id" : "28",
      "name" : "赤石山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [138.238596	,	35.67437	,	3500]}
    },{
      "id" : "29",
      "name" : "鈴鹿山脈",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.414736	,	35.178546	,	3500]}
    },{
      "id" : "30",
      "name" : "紀伊山地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.907536	,	34.173577	,	3500]}
    },{
      "id" : "31",
      "name" : "中国山地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [134.513878	,	35.353999	,	3500]}
    },{
      "id" : "32",
      "name" : "四国山地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [133.112474	,	33.771284	,	3500]}
    },{
      "id" : "33",
      "name" : "筑紫山地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [130.36901	,	33.435959	,	3500]}
    },{
      "id" : "34",
      "name" : "九州山地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [131.510938	,	32.73171	,	3500]}
    },{
      "id" : "35",
      "name" : "大台ケ原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.09492	,	34.186243	,	3500]}
    },{
      "id" : "36",
      "name" : "吉備高原",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [134.423343	,	34.939076	,	3500]}
    },{
      "id" : "37",
      "name" : "阿武隈高地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightgreen.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [140.631678	,	37.133886	,	3500]}
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

    function himalayan()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(82.592388	,	28.885431	,	5000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function alpes()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(8.700485	,	46.325805	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function andes()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-67.545689	,	-21.701387	,	10000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function rocky()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-117.40796	,	51.190632	,	10000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function atlas()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-3.941957	,	32.513105	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function verkhoyansk()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(128.10668	,	67.226784	,	5000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function pyrenees()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(0.822985	,	42.630086	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function bismarck()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(143.532708	,	-5.773552	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function barisan()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(101.112251	,	-1.614547	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function appalachian()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-80.768749	,	37.111294	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function ural()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(59.015797	,	60.242769	,	5000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function greater_khingan()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(120.243725	,	47.166998	,	1000000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function tian_shan()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(84.208985	,	42.917604	,	1000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function drakensberg()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(28.660162	,	-29.783114	,	1000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function scandinavian()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(11.98132	,	63.054751	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function great_dividing()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(149.598813	,	-34.714904	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function byrranga()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(109.679528	,	75.748803	,	1000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function labrador()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-67.598137	,	52.797045	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function guiana()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-55.25224	,	1.169968	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function brazilian()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-46.221328	,	-18.634819	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function deccan()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(76.51704	,	13.435925	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function greenland()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-37.432276	,	70.62811	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function ethiopian()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(38.324282	,	8.087932	,	5000000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function hidaka()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(142.682861	,	42.719364	,	250000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function ou()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(141.001141	,	39.852583	,	250000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function hida()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(137.651586	,	36.290945	,	250000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function kiso()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(137.80533	,	35.789315	,	250000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

    function akaishi()
        {viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(138.238596	,	35.67437	,	250000),
        orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
        }})
        }

  function suzuka()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(136.414736	,	35.178546	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function ki()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(135.907536	,	34.173577	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function chugoku()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(134.513878	,	35.353999	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function shikoku()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(133.112474	,	33.771284	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function tsukushi()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(130.36901	,	33.435959	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function kyushu()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(131.510938	,	32.73171	,	250000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function odaigahara()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(136.09492	,	34.186243	,	100000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function kibi()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(134.423343	,	34.939076	,	100000),
      orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
      }})
      }

  function abukuma()
      {viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(140.631678	,	37.133886	,	100000),
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
        "主要な活断層",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://gg-oer.github.io/tiles/faults/{z}/{x}/{y}.png',
        maximumLevel: 0,
        maximumLevel: 9,
        credit : new Cesium.Credit('activefaults.geojson was created refer to the Global Active Faults<a href=https://github.com/cossatot/gem-global-active-faults>©GEM-GAF　CC BY SA 4.0</a>')
      }),
      1.0,
      true
      );

      addAdditionalLayerOption(
        "地形",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://gg-oer.github.io/tiles/topo/{z}/{x}/{y}.png',
        maximumLevel: 0,
        maximumLevel: 8,
        credit : new Cesium.Credit('Source=SRTM')
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
