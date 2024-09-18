    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MTE1ODNkYy1lNzFhLTQyMTctODliZi1lYmI3MmViYWEwN2QiLCJpZCI6MTI0NzcsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU4NjgzOTAwN30.Cu2EHKVy8dBp7XL2cIvSUaXMDwZsCkfqm2jX7c3ObVI';

    var viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
      url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
      enablePickFeatures:false,
      credit : new Cesium.Credit('Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community')}),
      baseLayerPicker: false,
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
      "name" : "ハノーパー・キャニオン(デスバレー)",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-116.76	,	36.12	,	2000]}
    },{
      "id" : "2",
      "name" : "イラン中部",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [54.938626	,	28.959842	,	2000]}
    },{
      "id" : "3",
      "name" : "コシ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [86.753164	,	26.370998	,	2000]}
    },{
      "id" : "4",
      "name" : "オカバンゴ・デルタ（ボツワナ）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [22.601395	,	-19.156497	,	2000]}
    },{
      "id" : "5",
      "name" : "ノウィトナ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-154.152651	,	64.447121	,	2000]}
    },{
      "id" : "6",
      "name" : "セーヌ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [0.438728	,	49.468849	,	2000]}
    },{
      "id" : "7",
      "name" : "アマゾン川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-51.545901	,	-1.117592	,	2000]}
    },{
      "id" : "8",
      "name" : "パラナ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-60.251446	,	-32.896084	,	2000]}
    },{
      "id" : "9",
      "name" : "ナイル川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [31.046505	,	30.950075	,	2000]}
    },{
      "id" : "10",
      "name" : "ミシシッピ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [-89.237323	,	29.114358	,	2000]}
    },{
      "id" : "11",
      "name" : "テレヴェ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [12.256675	,	41.736842	,	2000]}
    },{
      "id" : "12",
      "name" : "ガンジス川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [89.647117	,	21.898725	,	2000]}
    },{
      "id" : "13",
      "name" : "メコン川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [106.415052	,	9.995116	,	2000]}
    },{
      "id" : "14",
      "name" : "黄河",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [119.089341, 37.760688	,	2000]}
    },{
      "id" : "15",
      "name" : "長江",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [121.688423	,	31.587135	,	2000]}
    },{
      "id" : "16",
      "name" : "オビ川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [70.224914	,	66.605315	,	2000]}
    },{
      "id" : "17",
      "name" : "インダス川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [67.566995	,	24.011932	,	2000]}
    },{
      "id" : "18",
      "name" : "京戸川（甲府）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [138.720988	,	35.640552	,	2000]}
    },{
      "id" : "19",
      "name" : "百瀬川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.022301	,	35.446627	,	2000]}
    },{
      "id" : "20",
      "name" : "黒部川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.490726	,	36.893423	,	2000]}
    },{
      "id" : "21",
      "name" : "住吉川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/red.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.268	,	34.717433	,	2000]}
    },{
      "id" : "22",
      "name" : "石狩川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [141.834674	,	43.417172	,	2000]}
    },{
      "id" : "23",
      "name" : "荒川（川島）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.490072	,	35.969132	,	2000]}
    },{
      "id" : "24",
      "name" : "阿賀野川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.190798	,	37.86847	,	2000]}
    },{
      "id" : "25",
      "name" : "初瀬川（田原本）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/blue.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.813998	,	34.556213	,	2000]}
    },{
      "id" : "26",
      "name" : "太田川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [132.428684	,	34.360372	,	2000]}
    },{
      "id" : "27",
      "name" : "雲出川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.54329	,	34.64964	,	2000]}
    },{
      "id" : "28",
      "name" : "木曽川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [136.723698	,	35.047222	,	2000]}
    },{
      "id" : "29",
      "name" : "淀川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/green.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [135.428749	,	34.676969	,	2000]}
    },{
      "id" : "30",
      "name" : "片品川（沼田）",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.080096, 36.650183	,	2000]}
    },{
      "id" : "31",
      "name" : "天竜川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [137.853135,	34.775345	,	2000]}
    },{
      "id" : "32",
      "name" : "相模川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.324951,	35.547004	,	2000]}
    },{
      "id" : "33",
      "name" : "江戸川",
      "description" : "",
      "billboard" : {
      "image" : " ./img/pink.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees" : [139.892051	,	35.8921	,	2000]}
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


function Hanaupah()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-116.76	,	36.12	,	15000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Hanaupah_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-116.76	,	35.99	,	4000),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function Iran()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(54.938626	,	28.959842	,	30000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Iran_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(55, 29, 4000),
  orientation: {
    heading: 3.8,
    pitch: -0.2,
    roll: 0
  }})
    }

function Koshi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(86.753164	,	26.370998	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Okavango()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(22.601395	,	-19.156497	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Nowitna()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-154.152651	,	64.447121	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Seine()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(0.438728	,	49.468849	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Amazon()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-51.545901	,	-1.117592	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Parana()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-60.251446	,	-32.896084	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Nile()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(31.046505	,	30.950075	,	350000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Mississippi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(-89.237323	,	29.114358	,	350000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Tiber()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(12.256675	,	41.736842	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Ganges()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(89.647117	,	21.898725	,	500000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Mekong()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(106.415052	,	9.995116	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Yellow()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(119.089341, 37.760688,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Yangtze()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(121.688423	,	31.587135	,	300000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Ob()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(70.224914	,	66.605315	,	250000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Indus()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(67.566995	,	24.011932	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Kyodo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.720988	,	35.640552	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kyodo_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.717988	,	35.679552,	2000),
  orientation: {
    heading: 3.2,
    pitch: -0.2,
    roll: 0
  }})
}

function Momose()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.022301	,	35.446627	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kurobe()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.490726	,	36.893423	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Sumiyoshi()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.268	,	34.717433	,	5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Sumiyoshi_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.300	,	34.65433	,	3000),
  orientation: {
    heading: -0.4,
    pitch: -0.3,
    roll: 0
  }})
}


function Ishikari()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(141.834674	,	43.417172	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Ara()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.490072	,	35.969132	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Agano()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.190798	,	37.86847	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Hase()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.813998	,	34.556213	,	10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Ota()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(132.428684	,	34.360372	,	40000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Kumozu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.54329	,	34.64964	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Kiso()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.723698	,	35.047222	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Yodo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.428749	,	34.676969	,	50000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Katashina()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.080096, 36.650183	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
}

function Katashina_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.040096, 36.615183	,	1500),
  orientation: {
    heading: 0.7,
    pitch: -0.2,
    roll: 0
  }})
}

function Tenryu()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.853135	,	34.775345	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Sagami()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.324951	,	35.547004	,	20000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function Edo()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.892051	,	35.8921	,	20000),
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
        "地理院タイル（アナグリフ）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/anaglyphmap_gray/{z}/{x}/{y}.png',
        maximumLevel: 16,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（アナグリフ・グレー）</a>')
      }),
      1.0,
      false
      );

      addAdditionalLayerOption(
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
