var wms_layers = [];


        var lyr_BasemapGoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Basemap: Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BasemapOpenStreetMap_1 = new ol.layer.Tile({
            'title': 'Basemap: Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Elevationmetersmin557max1034_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevation (meters; min 557, max 1034)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevationmetersmin557max1034_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11570192.269133, 5905041.592905, -11422075.502216, 6080300.728358]
                            })
                        });
var format_ParkBoundary_3 = new ol.format.GeoJSON();
var features_ParkBoundary_3 = format_ParkBoundary_3.readFeatures(json_ParkBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkBoundary_3.addFeatures(features_ParkBoundary_3);
var lyr_ParkBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkBoundary_3, 
                style: style_ParkBoundary_3,
                popuplayertitle: "Park Boundary",
                interactive: false,
                title: '<img src="styles/legend/ParkBoundary_3.png" /> Park Boundary'
            });

lyr_BasemapGoogleSatellite_0.setVisible(true);lyr_BasemapOpenStreetMap_1.setVisible(true);lyr_Elevationmetersmin557max1034_2.setVisible(true);lyr_ParkBoundary_3.setVisible(true);
var layersList = [lyr_BasemapGoogleSatellite_0,lyr_BasemapOpenStreetMap_1,lyr_Elevationmetersmin557max1034_2,lyr_ParkBoundary_3];
lyr_ParkBoundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNIT_CODE': 'UNIT_CODE', 'GIS_Notes': 'GIS_Notes', 'UNIT_NAME': 'UNIT_NAME', 'DATE_EDIT': 'DATE_EDIT', 'STATE': 'STATE', 'REGION': 'REGION', 'GNIS_ID': 'GNIS_ID', 'UNIT_TYPE': 'UNIT_TYPE', 'CREATED_BY': 'CREATED_BY', 'METADATA': 'METADATA', 'PARKNAME': 'PARKNAME', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'GlobalID': 'GlobalID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ParkBoundary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNIT_CODE': 'TextEdit', 'GIS_Notes': 'TextEdit', 'UNIT_NAME': 'TextEdit', 'DATE_EDIT': 'TextEdit', 'STATE': 'TextEdit', 'REGION': 'TextEdit', 'GNIS_ID': 'TextEdit', 'UNIT_TYPE': 'TextEdit', 'CREATED_BY': 'TextEdit', 'METADATA': 'TextEdit', 'PARKNAME': 'TextEdit', 'CreationDa': 'TextEdit', 'Creator': 'TextEdit', 'EditDate': 'TextEdit', 'Editor': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ParkBoundary_3.set('fieldLabels', {'OBJECTID': 'no label', 'UNIT_CODE': 'no label', 'GIS_Notes': 'no label', 'UNIT_NAME': 'no label', 'DATE_EDIT': 'no label', 'STATE': 'no label', 'REGION': 'no label', 'GNIS_ID': 'no label', 'UNIT_TYPE': 'no label', 'CREATED_BY': 'no label', 'METADATA': 'no label', 'PARKNAME': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'GlobalID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ParkBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});