require([
     "esri/config",
      "esri/Map",
      "esri/views/MapView"
    ], function (esriConfig,Map, MapView) {

    
      esriConfig.apiKey = MY_API_KEY; 
    
      const map = new Map({
        basemap: "topo-vector" // Basemap layer
      });
    
    
    const view = new MapView({
        map: map,
        center: [33.8008413, -14.0161304],
        zoom: 16, 
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });
    
    
        /********************
         * Add feature layer
         ********************/

    // Waste Collection 
      const popupWasteCollection ={
          "title":"WasteCollection",
          "content": "<b>Picked Up:</b> {picked_up}<br>"
      } 
      
      const WasteCollection = new FeatureLayer({
      url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Waste_collection_service_coverage_by_private_sector/FeatureServer/0",
      outFields: ["picked_up"],
      popupTemplate: popupWasteCollection
        });

  map.add(WasteCollection, 0);

    });
