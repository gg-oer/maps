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

var a = viewer.entities.add({
      name:"日本海溝",
      description:"<center><img src='./img/plate/Oceanic-continental_convergence_Fig21oceancont.png' width=auto height=300></center><p>千葉県から東北日本の太平洋沖合には、約800kmの日本海溝とよばれる狭まる境界があります。このように、海洋プレートが大陸プレートの下に沈み込んでいる境界（沈み込み帯）では、海底に深い谷（海溝）が形成されます。日本海溝の最も深い地点は、8020mになります。内陸部では、火山が発達したり、プレートの跳ね返りにより地震や津波を起こしたりします。</p>",
        position : Cesium.Cartesian3.fromDegrees(143.800, 37.845779,10000),
        billboard : {
          image : "./img/a.png",
          scale : 0.5
        }
    });

var b = viewer.entities.add({
      name:"ヒマラヤ山脈",
      description:"<center><img src='./img/plate/Continental-continental_convergence_Fig21contcont.gif' width=auto height=300></center><p>大陸プレートのインドプレートが、大陸プレートのユーラシアプレートの下ににもぐり込むことにより、地形が押し上げられヒマラヤ山脈やチベット高原が発達しました。ヒマラヤ山脈には、最高点8848mのエベレストがあります。</p>",
        position : Cesium.Cartesian3.fromDegrees(81.562719,29.694937,10000),
        billboard : {
          image : "./img/b.png",
          scale : 0.5
        }
    });

var c = viewer.entities.add({
      name:"大西洋中央海嶺",
      description:"<center><img src='./img/plate/Iceland_Mid-Atlantic_Ridge_Fig16.gif' width=auto height=300></center><p>広がる境界では、マントルが上昇し吹き出したマグマにより、大西洋中央海嶺、太平洋海嶺、インド洋中央海嶺等が形成されます。地図の点から大西洋中央海嶺を北にたどると、アイスランドの中央部を縦断していることが確認できます。</p>",
        position : Cesium.Cartesian3.fromDegrees(-13.247988,-17.218343,50000),
        billboard : {
          image : "./img/c.png",
          scale : 0.5
        }
    });

var d = viewer.entities.add({
      name:"大地溝帯",
      description:"<center><img src='./img/plate/EAfrica.png' width=auto height=300></center><p>大地溝帯（別名：グレート・リフト・バレー）は、アフリカ大陸の東側にみられ、幅は30~50km、総延長約6000kmあります。大地溝帯の形成には、地下のマントル対流が影響していると考えれ、周辺の地熱が高いことなどが観測されています。東リフトバレーと西リフトバレーの間に位置するヴィクトリア湖は、湖を挟む両側の隆起によって形成されたと考えれています。</p>",
        position : Cesium.Cartesian3.fromDegrees(29.728193,-0.096941,10000),
        billboard : {
          image : "./img/d.png",
          scale : 0.5
        }
    });

var e = viewer.entities.add({
      name:"サンアンドレアス断層",
      description:"<center><img src='/img/plate/Aerial-SanAndreas-CarrizoPlain.jpg' width=auto height=300><p>©John Wiley CC BY 3.0</p></center><p>サンアンドレアス断層は、カリフォルニア州からメキシコまで縦断しており、その総延長は約1300kmです。点の位置は、カリゾ平原の周辺を指し、そこから撮影した写真が上の図です。この地域では、下の図のように、隣り合うプレートが南北逆方向に移動しています。カリフォルニア州中部のホリスターでは、カラベス断層（サンアンドレス断層系）のクリープ現象（非常にゆっくり動く断層の活動）により、道路、家屋等の変形が観察できる</p><center><img src='./img/plate/Sanandreas.jpg' width=auto height=300></center>",
        position : Cesium.Cartesian3.fromDegrees(-119.886265,35.197577,10000),
        billboard : {
          image : "./img/e.png",
          scale : 0.5
        }
    });

function zta()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(143.800, 37.845779,2000000.0),
  orientation: {
    heading: 0,
    pitch: -1.6,
    roll: 0
  }})
    }

function ztb()
    {viewer.camera.flyTo({
     destination : Cesium.Cartesian3.fromDegrees(81.562719,29.694937,2000000.0),
     orientation: {
       heading: 0,
       pitch: -1.6,
       roll: 0
     }})
       }

function ztc()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-13.247988,-17.218343,2000000.0),
    orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
    }})
      }

function ztd()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(29.728193,-0.096941,2000000.0),
    orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
    }})
      }

function zte()
   {viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-119.886265,35.197577,2000000.0),
    orientation: {
      heading: 0,
      pitch: -1.6,
      roll: 0
    }})
      }

var geojsonOptions = {
    clampToGround : true
};

function gj(){
viewer.dataSources.add(Cesium.GeoJsonDataSource.load("./data/boundary_simple.geojson",geojsonOptions, {
  credit:'Boundary_simple.geojson ©h.yamauchi CC BY-SA 4.0 (Source data were created by USGS)'
}))};

function off(){
viewer.dataSources.removeAll()};
