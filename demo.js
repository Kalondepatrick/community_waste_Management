require(["esri/config", 
         "esri/Map", 
         "esri/views/MapView", 
         "esri/layers/FeatureLayer", 
         "esri/widgets/Legend", 
         "esri/Color", 
         "esri/renderers/UniqueValueRenderer", 
         "esri/widgets/TimeSlider"
        ], function(esriConfig, Map, MapView, FeatureLayer, Legend, Color, UniqueValueRenderer, TimeSlider) {
      
    
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
      
      const WasteCollection = new FeatureLayer({
      url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Waste_collection_service_coverage_by_private_sector/FeatureServer/0"
        });
         
         /********************
         * Add Map Legend 
         ********************/
        
    var legend = new Legend({
        view: view,
        style: "classic",
        layout: "auto"
        });	

       view.ui.add(legend, "bottom-right");
         
         /********************
         * Add all Maps 
         ********************/
         
     map.add(WasteCollection, 0);

    });

