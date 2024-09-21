ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([965452.366239, 1175107.234249, 1503475.658484, 1511253.596978]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StateBoundary_1 = new ol.format.GeoJSON();
var features_StateBoundary_1 = format_StateBoundary_1.readFeatures(json_StateBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_1.addFeatures(features_StateBoundary_1);
var lyr_StateBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_1, 
                style: style_StateBoundary_1,
                popuplayertitle: "State Boundary",
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_1.png" /> State Boundary'
            });
var format_YobeHealthcareFacilities_2 = new ol.format.GeoJSON();
var features_YobeHealthcareFacilities_2 = format_YobeHealthcareFacilities_2.readFeatures(json_YobeHealthcareFacilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YobeHealthcareFacilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YobeHealthcareFacilities_2.addFeatures(features_YobeHealthcareFacilities_2);
var lyr_YobeHealthcareFacilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YobeHealthcareFacilities_2, 
                style: style_YobeHealthcareFacilities_2,
                popuplayertitle: "Yobe Healthcare Facilities",
                interactive: true,
    title: 'Yobe Healthcare Facilities<br />\
    <img src="styles/legend/YobeHealthcareFacilities_2_0.png" /> Primary<br />\
    <img src="styles/legend/YobeHealthcareFacilities_2_1.png" /> Secondary<br />\
    <img src="styles/legend/YobeHealthcareFacilities_2_2.png" /> Tertiary<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_StateBoundary_1.setVisible(true);lyr_YobeHealthcareFacilities_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_StateBoundary_1,lyr_YobeHealthcareFacilities_2];
lyr_StateBoundary_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_YobeHealthcareFacilities_2.set('fieldAliases', {'fid': 'fid', 'wardname': 'wardname', 'lganame': 'lganame', 'statename': 'statename', 'functional': 'functional', 'category': 'category', 'ownership': 'ownership', 'type': 'type', 'prmry_name': 'prmry_name', });
lyr_StateBoundary_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_YobeHealthcareFacilities_2.set('fieldImages', {'fid': 'TextEdit', 'wardname': 'TextEdit', 'lganame': 'TextEdit', 'statename': 'TextEdit', 'functional': 'TextEdit', 'category': 'TextEdit', 'ownership': 'TextEdit', 'type': 'TextEdit', 'prmry_name': 'TextEdit', });
lyr_StateBoundary_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', });
lyr_YobeHealthcareFacilities_2.set('fieldLabels', {'fid': 'hidden field', 'wardname': 'inline label - always visible', 'lganame': 'inline label - always visible', 'statename': 'hidden field', 'functional': 'hidden field', 'category': 'inline label - always visible', 'ownership': 'inline label - always visible', 'type': 'inline label - always visible', 'prmry_name': 'inline label - always visible', });
lyr_YobeHealthcareFacilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});