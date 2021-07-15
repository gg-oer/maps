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
      vrButton: false,
      geocoder:true,
      sceneModePicker:false,
      navigationHelpButton:false,
      terrainExaggeration:1.2,
      terrainProvider : Cesium.createWorldTerrain()
    });

    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(139.70, 35.68, 4000000),
      orientation: {
        heading: 0,
        pitch: -1.5,
        roll: 0
     }
   });

    var geojsonOptions = {
      credit:' h.yamauchi cc by-sa 4.0',
      stroke: Cesium.Color.FIREBRICK,
      fill: Cesium.Color.FIREBRICK,
      strokeWidth: 5,
      clampToGround : true
    };

//b

    var bPromise = Cesium.GeoJsonDataSource.load('./data/task2.geojson',geojsonOptions);

    var b;
    bPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        b = dataSource.entities;
    });


    // Setup Display Options

    var bElement =  document.getElementById('b');

    bElement.addEventListener('change', function (e) {
        b.show = e.target.checked;
    });


function t1()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.581729,36.486863, 15000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t1_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.581729,36.396863, 2000),
  orientation: {
    heading: 0,
    pitch: -0.17,
    roll: 0
  }})
    }

function t2()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.749153,35.496626, 8000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t2_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(135.749153,35.456626, 1500),
  orientation: {
    heading: 0,
    pitch: -0.2,
    roll: 0
  }})
    }

function t3()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(133.211607,34.358546, 8000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t3_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(133.211607,34.348546, 500),
  orientation: {
    heading: 0.2,
    pitch: -0.2,
    roll: 0
  }})
    }

function t4()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.361523,41.027891, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t4_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.361523,40.987891, 800),
  orientation: {
    heading: 0.2,
    pitch: -0.2,
    roll: 0
  }})
    }

function t5()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.507110,37.789633, 5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t5_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(140.507110,37.779633, 500),
  orientation: {
    heading: 0,
    pitch: -0.5,
    roll: 0
  }})
    }

function t6()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.327539,35.784570, 18000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t6_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(139.327539,35.714570, 3000),
  orientation: {
    heading: 0,
    pitch: -0.3,
    roll: 0
  }})
    }

function t7()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.564663,35.593176, 5000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t7_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(138.564663,35.583176, 1000),
  orientation: {
    heading: 0,
    pitch:  -0.5,
    roll: 0
  }})
    }

function t8()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(134.048571,33.384426, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t8_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(134.048571,33.350426, 1500),
  orientation: {
    heading: -0.2,
    pitch: -0.3,
    roll: 0
  }})
    }

function t9()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.014360,33.447763, 10000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t9_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(130.014360,33.397763, 3000),
  orientation: {
    heading: 0,
    pitch: -0.3,
    roll: 0
  }})
    }

function t10()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.040179,34.837891, 18000),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function t10_off()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(137.040179,34.737891,2000),
  orientation: {
    heading: 0,
    pitch: -0.3,
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
      addBaseLayerOption("ESRI World Image", undefined); // the current

      addBaseLayerOption(
        "OpenStreetMaps",
        new Cesium.OpenStreetMapImageryProvider({
          credit:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>'
        })
      );

      addAdditionalLayerOption(
        "地理院タイル（色別標高図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
        maximumLevel: 15,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（色別標高図）＊「海域部は海上保安庁海洋情報部の資料を使用して作成」<a href =https://cyberjapandata.gsi.go.jp/legend/attension_relief.html>凡例<a></a>')
        }),
        1.0,
        false
      );

      addAdditionalLayerOption(
        "地理院タイル（陰影起伏図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png',
        maximumLevel: 16,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（陰影起伏図）</a>')
        }),
        1.0,
        false
      );

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
        "地理院タイル（淡色地図）",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        maximumLevel: 18,
        credit : new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院　地理院タイル（淡色地図）</a>')
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
