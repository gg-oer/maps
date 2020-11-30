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
      "name" : "秋吉台",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [131.308305	,	34.250719	,	3000]}
    },{
      "id" : "2",
      "name" : "平尾台",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [130.901132	,	33.755856	,	3000]}
    },{
      "id" : "3",
      "name" : "四国カルスト（大野ヶ原）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [132.875622	,	33.478656	,	3000]}
    },{
      "id" : "4",
      "name" : "近江カルスト（霊仙山）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.376729,	35.280293,	3000]}
    },{
      "id" : "5",
      "name" : "武甲山",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.097729	,	35.951643	,	3000]}
    },{
      "id" : "6",
      "name" : "南大東島",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [131.244355	,	25.84163	,	3000]}
    },{
      "id" : "7",
      "name" : "ハロン湾",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [107.2	,	20.9	,	3000]}
    },{
      "id" : "8",
      "name" : "桂林",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [110.296	,	25.275	,	3000]}
    },{
      "id" : "9",
      "name" : "石林",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [103.3237	,	24.8168	,	3000]}
    },{
      "id" : "10",
      "name" : "チョコレート・ヒルズ",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [124.168427	,	9.798302	,	1000]}
    },{
      "id" : "11",
      "name" : "グヌンキダル",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [110.693617	,	-8.102422	,	3000]}
    },{
      "id" : "12",
      "name" : "ディナルアルプス山麓・カルスト台地",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [13.866667	,	45.7	,	3000]}
    },{
      "id" : "13",
      "name" : "アグテレク・カルストとスロバキア・カルストの洞窟群",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [20.486944	,	48.475833	,	3000]}
    },{
      "id" : "14",
      "name" : "Ingleborough（ヨークシャー）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-2.397778	,	54.166389	,	3000]}
    },{
      "id" : "15",
      "name" : "Peak District（イギリス）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-1.833333	,	53.35	,	3000]}
    },{
      "id" : "16",
      "name" : "マンモス・ケーブ国立公園（ケンタッキー）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-86.101111	,	37.186944	,	3000]}
    },{
      "id" : "17",
      "name" : "Dunbar Cave State Park（テネシー）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-87.3059	,	36.5503	,	3000]}
    },{
      "id" : "18",
      "name" : "イク・キル（ユカタン半島北部）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-88.550465	,	20.660896	,	3000]}
    },{
      "id" : "19",
      "name" : "Cockpit Country（ジャマイカ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-77.695313	,	18.295209	,	3000]}
    },{
      "id" : "20",
      "name" : "Rio Abajo State Forest（プエルトリコ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-66.699722	,	18.339722	,	3000]}
    },{
      "id" : "21",
      "name" : "Livanjsko Polje",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [17.008961	,	43.831858 ,	3000]}
    },{
      "id" : "22",
      "name" : "Popovo Polje",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [17.795513	,	42.966284	,	3000]}
    },{
      "id" : "23",
      "name" : "Licko Polje",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [15.3445	,	44.5786	,	3000]}
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


function Akiyoshi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.308305	,	34.250719	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Hirao()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.901132	,	33.755856	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Shikoku()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(132.875622	,	33.478656	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Omi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.376729,	35.280293,	7000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Buko()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.097729	,	35.951643	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Minamidaito()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(131.244355	,	25.84163	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function HaLong()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(107.2	,	20.9	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Guilin()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(110.296	,	25.275	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Shilin()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(103.3237	,	24.8168	,	3000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function ChocolateHills()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(124.168427	,	9.798302	,	8000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Gunungkidul()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(110.693617	,	-8.102422	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function DinaricAlps()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(13.866667	,	45.7	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function AggtelekSlovak()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(20.486944	,	48.475833	,	80000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Ingleborough()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-2.397778	,	54.166389	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function PeakDistrict()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-1.833333	,	53.35	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function MammothCave()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-86.101111	,	37.186944	,	40000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function DunbarCave()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-87.3059	,	36.5503	,	40000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function IkKil()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-88.550465	,	20.660896	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function CockpitCountry()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-77.695313	,	18.295209	,	40000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function RioAbajo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-66.699722	,	18.339722	,	40000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Livanjsko()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(17.008961	,	43.831858 ,	200000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Popovo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(17.795513	,	42.966284	,	200000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Licko()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(15.3445	,	44.5786	,	200000),
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
