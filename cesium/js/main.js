(function () {
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
      terrainExaggeration:1.2,
      terrainProvider : Cesium.createWorldTerrain()
    });


}());
