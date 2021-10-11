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
        basemap: "satellite" // Basemap layer
      });
    
    
    const view = new MapView({
        map: map,
        center: [33.8008413, -14.0161304],
        zoom: 19, 
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });
    
    
        /********************
         * Add feature layer
         ********************/

	// Waste Collection 
    var popupDumpsites ={
        "title":"Dumpsites",
        "content": "<b>Phone:</b> {phone}<br><b>Picked up:</b> {picked_up}"
      }  
      
    var Dumpsites = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/dumpsite/FeatureServer/0",
        outFields: ["phone","picked_up"],
        popupTemplate: popupDumpsites,
        });
	
	// Waste Collection 
      
      const WasteCollection = new FeatureLayer({
      url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Waste_collection_service_coverage_by_private_sector/FeatureServer/0"
        });

         //Changing the layer name

	  WasteCollection.title = "Homes under Private Waste Collection";
       
	// Malawi sub-admistrative boundaries (TA's)
   
    var popupTA ={
        "title":"Locations(TA's)",
        "content": "<b>ADM3_EN:</b> {Name}"
      }  
      
    var Locations = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Malawi_TAs/FeatureServer",
        outFields: ["ADM3_EN"],
        popupTemplate: popupTA,
        });
	
	//Changing the layer name

	  Locations.title = "Locations(Areas or TA's)";
	
     // Malawi Districts
   
    var popupDistricts ={
        "title":"Districts",
        "content": "<b>NAME_1:</b> {Name}"
      }  
      
    var District = new FeatureLayer({
        url: "https://services3.arcgis.com/75NnIQLDaYFUpt2v/arcgis/rest/services/Malawi_District_Boundaries/FeatureServer",
        outFields: ["NAME_1"],
        popupTemplate: popupDistricts,
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
         
	map.add(Dumpsites, 0);
	map.add(WasteCollection, 0);
	map.add(Locations, 0);
    	map.add(District, 0);

    });

