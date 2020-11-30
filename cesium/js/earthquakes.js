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
      terrainExaggeration:1.0,
      terrainProvider : Cesium.createWorldTerrain()
    });


    //earthquake

    var eqPromise = Cesium.GeoJsonDataSource.load('./data/earthquake_top<200.geojson',{
      credit:'大地震 was created refer to USGS(PDE)&wikipedia',
      markerSize: 15,
      markerColor:Cesium.Color.PINK,
      clampToGround : true});

    var eq;
    eqPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        eq = dataSource.entities;
      });


    // Setup Display Options


    var eqElement =  document.getElementById('eq');

    eqElement.addEventListener('change', function (e) {
        eq.show = e.target.checked;
    });

    function tohoku()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(142.369, 38.322, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function hanshin()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(135.025, 34.58, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function kanto()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(139.084, 35.405, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function kumamoto()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(130.726, 32.782, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function iburi()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(142.006667, 42.69, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function nigata()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(138.8667, 37.2917, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function indonesia()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(95.972, 3.287, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function haiti()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-72.533, 18.457, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function tangshan()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(117.888, 39.605, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function chile()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(-73.05, -38.24, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function sichuan()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(103.322, 31.002, 500000),
      orientation: {
        heading: 0,
        pitch: -1.6,
        roll: 0
      }})
        }

    function nepar()
        {viewer.camera.flyTo({
         destination : Cesium.Cartesian3.fromDegrees(84.731, 28.23, 500000),
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
      addBaseLayerOption("Bing Maps Aerial", undefined); // the current

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
        "主要な活断層",
        new Cesium.UrlTemplateImageryProvider({
        url : 'https://gg-oer.github.io/tiles/faults/{z}/{x}/{y}.png',
        maximumLevel: 0,
        maximumLevel: 9,
        credit : new Cesium.Credit('activefaults(tile) were created refer to the Global Active Faults<a href=https://github.com/cossatot/gem-global-active-faults>©GEM-GAF　CC BY SA 4.0</a>')
      }),
      1.0,
      true
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
