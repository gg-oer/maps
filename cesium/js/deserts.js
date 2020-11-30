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
      "name" : "ゴビ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [103.43	,	42.59	,	7000]}
    },{
      "id" : "2",
      "name" : "シリア砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [38.8333	,	33.3333	,	7000]}
    },{
      "id" : "3",
      "name" : "タール砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [71.001667	,	26.984444	,	7000]}
    },{
      "id" : "4",
      "name" : "タクラマカン砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [82.2	,	38.9	,	7000]}
    },{
      "id" : "5",
      "name" : "カヴィール砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [54.8271	,	34.737556	,	7000]}
    },{
      "id" : "6",
      "name" : "ルブアルハリ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [50	,	20	,	7000]}
    },{
      "id" : "7",
      "name" : "アタカマ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-69.25	,	-24.5	,	7000]}
    },{
      "id" : "8",
      "name" : "グレートベースン砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-109.586445	,	37.407431	,	7000]}
    },{
      "id" : "9",
      "name" : "コロラド砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-115.032421	,	32.839231	,	7000]}
    },{
      "id" : "10",
      "name" : "モハーヴェ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-115.475	,	35.008333	,	7000]}
    },{
      "id" : "11",
      "name" : "カラハリ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [22	,	-23	,	7000]}
    },{
      "id" : "12",
      "name" : "サハラ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [13	,	23	,	7000]}
    },{
      "id" : "13",
      "name" : "ナミブ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [15.276389	,	-24.751944	,	7000]}
    },{
      "id" : "14",
      "name" : "グレートビクトリア砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [129.26	,	-29.15	,	7000]}
    },{
      "id" : "15",
      "name" : "タナミ砂漠",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [130	,	-20	,	7000]}
    },{
      "id" : "16",
      "name" : "モニュメント・バレー",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-110.1	,	36.983333	,	7000]}
    },{
      "id" : "17",
      "name" : "ワディ・ラム",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [35.419928	,	29.5765	,	7000]}
    },{
      "id" : "18",
      "name" : "アラビア半島のワジ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [45.136691	,	18.948828	,	7000]}
    },{
      "id" : "19",
      "name" : "サハラ砂漠東部のワジ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [33.686888	,	20.328322	,	7000]}
    },{
      "id" : "20",
      "name" : "敦煌",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [94.6619	,	40.1421	,	7000]}
    },{
      "id" : "21",
      "name" : "シワ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [25.55	,	29.183333	,	7000]}
    },{
      "id" : "22",
      "name" : "Tabas",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [56.924444	,	33.595833	,	7000]}
    },{
      "id" : "23",
      "name" : "Al-Ain Oasis",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [55.762	,	24.217	,	7000]}
    },{
      "id" : "24",
      "name" : "Taghit",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-2.033333	,	30.916667	,	7000]}
    },{
      "id" : "25",
      "name" : "カシュガル",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [75.983333	,	39.466667	,	7000]}
    },{
      "id" : "26",
      "name" : "カスピ海",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [50.666667	,	41.666667	,	7000]}
    },{
      "id" : "27",
      "name" : "バルハシ湖(東）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [74.333333	,	46.166667	,	7000]}
    },{
      "id" : "28",
      "name" : "グレートソルト湖",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-112.583333	,	41.166667	,	7000]}
    },{
      "id" : "29",
      "name" : "死海",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [35.5	,	31.5	,	7000]}
    },{
      "id" : "30",
      "name" : "マカディカディ塩湖",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [24.950833	,	-20.716667	,	7000]}
    },{
      "id" : "31",
      "name" : "ウユニ塩湖",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-67.423611	,	-20.059722	,	7000]}
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


function Gobi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(103.43	,	42.59	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Syrian()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(38.8333	,	33.3333	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Thar()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(71.001667	,	26.984444	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Taklamakan()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(82.2	,	38.9	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kavir()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(54.8271	,	34.737556	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function RubalKhali()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(50	,	20	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Atacama()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-69.25	,	-24.5	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function GreatBasin()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-109.586445	,	37.407431	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Colorado()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-115.032421	,	32.839231	,	700000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Mojave()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-115.475	,	35.008333	,	700000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kalahari()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(22	,	-23	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Sahara()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(13	,	23	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Namib()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(15.276389	,	-24.751944	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function GreatVictoriaDesert()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(129.26	,	-29.15	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Tanami()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130	,	-20	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function MonumentValley()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-110.1	,	36.983333	,	8000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function WadiRum()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(35.419928	,	29.5765	,	70000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function AWadi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(45.136691	,	18.948828	,	70000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function SWadi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(33.686888	,	20.328322	,	70000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Dunhuang()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(94.6619	,	40.1421	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Shiwa()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(25.55	,	29.183333	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Tabas()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(56.924444	,	33.595833	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function AlAin()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(55.762	,	24.217	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Taghit()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-2.033333	,	30.916667	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kashgar()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(75.983333	,	39.466667	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Caspian()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(50.666667	,	41.666667	,	3000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Balkhash()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(74.333333	,	46.166667	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function GreatSaltLake()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-112.583333	,	41.166667	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function DeadSea()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(35.5	,	31.5	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Makgadikgadi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(24.950833	,	-20.716667	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Uyuni()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-66.823611	,	-20.459722	,	500000),
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
        "OpenStreetMaps",
        new Cesium.OpenStreetMapImageryProvider({
          credit:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>'
        })
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
        "地理院タイル（標準地図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        maximumLevel: 18,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（標準地図）</a>')
      }),
      1.0,
      false
      );

  addAdditionalLayerOption(
        "topo",
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
