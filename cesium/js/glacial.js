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
      "name" : "パステルツェ氷河（オーストリア）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [12.7233	,	47.0856	,	5000]}
    },{
      "id" : "2",
      "name" : "メール・ド・グラース氷河",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [6.937222	,	45.913333	,	5000]}
    },{
      "id" : "3",
      "name" : "ヴァトナ氷河(アイスランド)",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-16.804	,	64.4	,	5000]}
    },{
      "id" : "4",
      "name" : "ロンブク氷河(中国)",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [86.865242	,	28.102	,	8000]}
    },{
      "id" : "5",
      "name" : "ペリト・モレノ氷河（アルゼンチン）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-73.05	,	-50.483333	,	5000]}
    },{
      "id" : "6",
      "name" : "フランツ・ジョセフ氷河(ニュージーランド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [170.191667	,	-43.466944	,	5000]}
    },{
      "id" : "7",
      "name" : "アサバスカ氷河（カナダ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-117.255278	,	52.190833	,	5000]}
    },{
      "id" : "8",
      "name" : "グレイシャー国立公園（アメリカ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-114.0244	,	48.8146	,	5000]}
    },{
      "id" : "9",
      "name" : "ボンダスブリーン氷河（ノルウェー）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [6.313889	,	60.056667	,	5000]}
    },{
      "id" : "10",
      "name" : "ガンゴートリー氷河（インド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [79.166667	,	30.833333	,	8000]}
    },{
      "id" : "11",
      "name" : "レブマン氷河（タンザニア）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [37.363056	,	-3.081111	,	8000]}
    },{
      "id" : "12",
      "name" : "マッターホルン",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [7.66	,	45.9779	,	6000]}
    },{
      "id" : "13",
      "name" : "槍ヶ岳",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.647705	,	36.342076	,	5000]}
    },{
      "id" : "14",
      "name" : "ノース・カスケード国立公園",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-121.3475	,	48.8328	,	5000]}
    },{
      "id" : "15",
      "name" : "アスラットハイルハン山",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [107.410121	,	48.47804	,	5000]}
    },{
      "id" : "16",
      "name" : "トロールガーデン",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [6.5825	,	59.3011	,	1000]}
    },{
      "id" : "17",
      "name" : "モレーン湖（カナダ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-116.1856	,	51.3225	,	5000]}
    },{
      "id" : "18",
      "name" : "Great Esker Park",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-70.929722	,	42.236667	,	5000]}
    },{
      "id" : "19",
      "name" : "Eberfinger Drumlinfeld",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [11.204045	,	47.84362	,	5000]}
    },{
      "id" : "20",
      "name" : "ウェストポート（アイルランド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-9.56873	,	53.87389	,	5000]}
    },{
      "id" : "21",
      "name" : "Raderach（ドイツ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [9.442982	,	47.694536	,	1000]}
    },{
      "id" : "22",
      "name" : "西ノルウェーフィヨルド群",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [7.129	,	62.121	,	5000]}
    },{
      "id" : "23",
      "name" : "マリアガー・フィヨルド（デンマーク）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [10.222583	,	56.700915	,	5000]}
    },{
      "id" : "24",
      "name" : "パタゴニア地方（チリ南部）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-73.738313	,	-50.263601	,	5000]}
    },{
      "id" : "25",
      "name" : "グリーンランド",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-39.351999	,	73.235868	,	5000]}
    },{
      "id" : "26",
      "name" : "ミルフォード・サウンド（ニュージーランド）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [167.9056	,	-44.6481	,	5000]}
    },{
      "id" : "27",
      "name" : "ミスティ・フィヨルド（アラスカ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/orange.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-130.9072	,	55.6217	,	5000]}
    },{
      "id" : "28",
      "name" : "セントラルパーク",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-73.974617	,	40.770612	,	50]}
    },{
      "id" : "29",
      "name" : "ヨセミテ国立公園",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-119.346823	,	37.88187	,	5000]}
    },{
      "id" : "30",
      "name" : "Fourstones（イギリス）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/lightblue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-2.5064	,	54.0915	,	450]}
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


function Pasterze()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(12.7233	,	47.0856	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function MerdeGlace()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(6.937222	,	45.913333	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Vatna()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-16.804	,	64.4	,	200000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Rongbuk()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(86.865242	,	28.102	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function PeritoMoreno()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-73.05	,	-50.483333	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function FranzJosef()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(170.191667	,	-43.466944	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Athabasca()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-117.255278	,	52.190833	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function GlacierNationalPark()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-114.0244	,	48.8146	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Bondhusbreen()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(6.313889	,	60.056667	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Gangotri()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(79.166667	,	30.833333	,	100000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Rebmann()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(37.363056	,	-3.081111	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Matterhorn()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(7.66	,	45.9779	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Yarigatake()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.647705	,	36.342076	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function NorthCascades()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-121.3475	,	48.8328	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function AsraltKhairkhan()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(107.410121	,	48.47804	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Trollgarden()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(6.5825	,	59.3011	,	2000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function MoraineLake()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-116.1856	,	51.3225	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function GreatEskerPark()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-70.929722	,	42.236667	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function EberfingerDrumlinfeld()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(11.204045	,	47.84362	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Westport()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-9.56873	,	53.87389	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Raderach()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(9.442982	,	47.694536	,	2000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function WestNorwegianFjords()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(7.129	,	62.121	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Mariager()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(10.222583	,	56.700915	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Patagonia()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-73.738313	,	-50.263601	,	1000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Greenland()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-39.351999	,	73.235868	,	5000000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function MilfordSound()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(167.9056	,	-44.6481	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Misty()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-130.9072	,	55.6217	,	200000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function CentralPark()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-73.974617	,	40.770612	,	200),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Yosemite()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-119.346823	,	37.88187	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Fourstones()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-2.5064	,	54.0915	,	500),
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
