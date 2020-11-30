(function () {
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
      sceneModePicker:false,
      navigationHelpButton:false,
      terrainExaggeration:1.2,
      terrainProvider : Cesium.createWorldTerrain()
    });

    var geojsonOptions = {
      clampToGround : true
    };

    var geojsonOptions1 = {
      credit:' activefaults.geojson was created refer to the Global Active Faults<a href=https://github.com/cossatot/gem-global-active-faults>©GEM-GAF　CC BY SA 4.0</a>',
      markerSize: 5,
      markerColor:Cesium.Color.RED,
      clampToGround : true
    };

    var geojsonOptions2 = {
      credit:' activefaults.geojson was created refer to the Global Active Faults<a href=https://github.com/cossatot/gem-global-active-faults>©GEM-GAF　CC BY SA 4.0</a>',
      markerSize: 5,
      markerColor:Cesium.Color.YELLOW,
      clampToGround : true
    };

//b

    var bPromise = Cesium.GeoJsonDataSource.load('./data/boundary_simple.geojson',geojsonOptions);

    var b;
    bPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        b = dataSource.entities;
    });

    //volcano

    var vPromise = Cesium.GeoJsonDataSource.load('./data/volcano.geojson', geojsonOptions1);

    var v;
    vPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        v = dataSource.entities;
      });

    //earthquake

    var eqPromise = Cesium.GeoJsonDataSource.load('./data/earthquake.geojson', geojsonOptions2);

    var eq;
    eqPromise.then(function(dataSource) {
        // Add the new data as entities to the viewer
        viewer.dataSources.add(dataSource);
        eq = dataSource.entities;
      });


    // Setup Display Options

    var bElement =  document.getElementById('b');

    bElement.addEventListener('change', function (e) {
        b.show = e.target.checked;
    });

    var vElement =  document.getElementById('v');

    vElement.addEventListener('change', function (e) {
        v.show = e.target.checked;
    });

    var eqElement =  document.getElementById('eq');

    eqElement.addEventListener('change', function (e) {
        eq.show = e.target.checked;
    });

}());
