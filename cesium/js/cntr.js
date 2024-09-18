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
  terrainExaggeration:1.0,
  terrainProvider : Cesium.createWorldTerrain()
});

var set_view = new Cesium.Cartesian3.fromDegrees(136.380, 35.270, 1650);

var homeCameraView = {
    destination : set_view,
    orientation : {
        heading : -0.2,
        pitch : -0.5,
        roll : 0
    }
};

// Set the initial view
viewer.scene.camera.setView(homeCameraView);

var points =
    [{
      "id" : "document",
      "name" : "marker",
      "version" : "1.0"
    }, {
      "id" : "1",
      "name" : "A",
      "description" : "<img src='./img/ryozen.jpg' width=auto height=300>",
      "billboard" : {
      "image" : "./img/a1.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees": [136.374590,35.281009, 1200]}
    },{
      "id" : "2",
      "name" : "B",
      "description" : "",
      "billboard" : {
      "image" : "./img/b1.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees": [136.374600,35.283903,1100]},
    },{
      "id" : "3",
      "name" : "C",
      "description" : "",
      "billboard" : {
      "image" : "./img/c1.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees": [136.382526,35.279337,1200]},
    },{
      "id" : "4",
      "name" : "D",
      "description" : "",
      "billboard" : {
      "image" : "./img/d1.png",
      "scale" : 0.5},
      "position" : {
      "cartographicDegrees": [136.376554,35.277458,1200]},
    }
    ]

var lines =
    [{
      "id" : "document",
      "name" : "lines",
      "version" : "1.0"
    },{
      "id" : "1",
      "name" : "A",
      "description" : "",
      "polyline" : {
          "positions" : {
              "cartographicDegrees" : [
                136.374590,35.281009, 0,
                136.374590,35.281009, 1200
              ]
          },
          "material" : {
              "solidColor" : {
                  "color" : {"rgba" : [255, 0, 0, 100]}
                            }},
          "width" : 2.0
          }
        },{
      "id" : "2",
      "name" : "B",
      "description" : "",
      "polyline" : {
          "positions" : {
              "cartographicDegrees" : [
                136.374600,35.283903,0,
                136.374600,35.283903,1100
              ]
          },
          "material" : {
              "solidColor" : {
                  "color" : {"rgba" : [255, 0, 0, 100]}
                            }},
          "width" : 2.0
          }
        },{
      "id" : "3",
      "name" : "C",
      "description" : "",
      "polyline" : {
          "positions" : {
              "cartographicDegrees" : [
                136.382526,35.279337,0,
                136.382526,35.279337,1200
              ]
          },
          "material" : {
              "solidColor" : {
                  "color" : {"rgba" : [255, 0, 0, 100]}
                            }},
          "width" : 2.0
          }
        },{
      "id" : "4",
      "name" : "D",
      "description" : "",
      "polyline" : {
          "positions" : {
              "cartographicDegrees" : [
                136.376554,35.277458,0,
                136.376554,35.277458,1200
              ]
          },
          "material" : {
              "solidColor" : {
                  "color" : {"rgba" : [255, 0, 0, 100]}
                            }},
          "width" : 2.0
          }
        }
    ]

viewer.dataSources.add(Cesium.CzmlDataSource.load(points));
viewer.dataSources.add(Cesium.CzmlDataSource.load(lines));

function A()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.374590,35.281009, 1110),
  orientation: {
    heading: 0,
    pitch: 0,
    roll: 0
  }})
    }

function B()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.374600,35.283903,1010),
     orientation: {
       heading: 0,
       pitch: 0,
       roll: 0
     }})
       }

function C()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(136.382526,35.279337,1130),
    orientation: {
      heading: 0,
      pitch: 0,
      roll: 0
    }})
      }

function D()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(136.376554,35.277458,1050),
    orientation: {
      heading: 0,
      pitch: 0,
      roll: 0
    }})
      }

function down()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(136.376, 35.281, 2500),
     orientation: {
       heading: 0,
       pitch: -1.6,
       roll: 0
     }})
       }

function home()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(136.380, 35.270, 1650),
    orientation: {
      heading: -0.2,
      pitch: -0.5,
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
        addBaseLayerOption("Base", undefined); // the current

        // each layer.

        addAdditionalLayerOption(
          "地理院タイル（空中写真）",
          new Cesium.UrlTemplateImageryProvider({
          url : 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
          maximumLevel: 18,
          credit : new Cesium.Credit('国土地理院　地理院タイル（空中写真）')
        }),
        1.0,
        false
        );

        addAdditionalLayerOption(
          "地理院タイル（標準地図）",
          new Cesium.UrlTemplateImageryProvider({
          url : 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
          maximumLevel: 18,
          credit : new Cesium.Credit('国土地理院　地理院タイル（標準地図）')
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
