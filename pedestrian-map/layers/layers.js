var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SLCCensusTracts_1 = new ol.format.GeoJSON();
var features_SLCCensusTracts_1 = format_SLCCensusTracts_1.readFeatures(json_SLCCensusTracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCCensusTracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCCensusTracts_1.addFeatures(features_SLCCensusTracts_1);
var lyr_SLCCensusTracts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCCensusTracts_1, 
                style: style_SLCCensusTracts_1,
                interactive: false,
                title: '<img src="styles/legend/SLCCensusTracts_1.png" /> SLC Census Tracts'
            });
var format_PedestrainCrashes2015_2 = new ol.format.GeoJSON();
var features_PedestrainCrashes2015_2 = format_PedestrainCrashes2015_2.readFeatures(json_PedestrainCrashes2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrainCrashes2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrainCrashes2015_2.addFeatures(features_PedestrainCrashes2015_2);
var lyr_PedestrainCrashes2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PedestrainCrashes2015_2, 
                style: style_PedestrainCrashes2015_2,
                interactive: true,
                title: '<img src="styles/legend/PedestrainCrashes2015_2.png" /> Pedestrain Crashes 2015'
            });
var format_PedestrainCrashes2016_3 = new ol.format.GeoJSON();
var features_PedestrainCrashes2016_3 = format_PedestrainCrashes2016_3.readFeatures(json_PedestrainCrashes2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrainCrashes2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrainCrashes2016_3.addFeatures(features_PedestrainCrashes2016_3);
var lyr_PedestrainCrashes2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PedestrainCrashes2016_3, 
                style: style_PedestrainCrashes2016_3,
                interactive: true,
                title: '<img src="styles/legend/PedestrainCrashes2016_3.png" /> Pedestrain Crashes 2016'
            });
var format_PedestrainCrashes2017_4 = new ol.format.GeoJSON();
var features_PedestrainCrashes2017_4 = format_PedestrainCrashes2017_4.readFeatures(json_PedestrainCrashes2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrainCrashes2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrainCrashes2017_4.addFeatures(features_PedestrainCrashes2017_4);
var lyr_PedestrainCrashes2017_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PedestrainCrashes2017_4, 
                style: style_PedestrainCrashes2017_4,
                interactive: true,
                title: '<img src="styles/legend/PedestrainCrashes2017_4.png" /> Pedestrain Crashes 2017'
            });
var format_PedestrainCrashes2018_5 = new ol.format.GeoJSON();
var features_PedestrainCrashes2018_5 = format_PedestrainCrashes2018_5.readFeatures(json_PedestrainCrashes2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrainCrashes2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrainCrashes2018_5.addFeatures(features_PedestrainCrashes2018_5);
var lyr_PedestrainCrashes2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PedestrainCrashes2018_5, 
                style: style_PedestrainCrashes2018_5,
                interactive: true,
                title: '<img src="styles/legend/PedestrainCrashes2018_5.png" /> Pedestrain Crashes 2018'
            });
var format_PedestrainCrashes2019_6 = new ol.format.GeoJSON();
var features_PedestrainCrashes2019_6 = format_PedestrainCrashes2019_6.readFeatures(json_PedestrainCrashes2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrainCrashes2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrainCrashes2019_6.addFeatures(features_PedestrainCrashes2019_6);
var lyr_PedestrainCrashes2019_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PedestrainCrashes2019_6, 
                style: style_PedestrainCrashes2019_6,
                interactive: true,
                title: '<img src="styles/legend/PedestrainCrashes2019_6.png" /> Pedestrain Crashes 2019'
            });

lyr_BaseMap_0.setVisible(true);lyr_SLCCensusTracts_1.setVisible(true);lyr_PedestrainCrashes2015_2.setVisible(true);lyr_PedestrainCrashes2016_3.setVisible(true);lyr_PedestrainCrashes2017_4.setVisible(true);lyr_PedestrainCrashes2018_5.setVisible(true);lyr_PedestrainCrashes2019_6.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_SLCCensusTracts_1,lyr_PedestrainCrashes2015_2,lyr_PedestrainCrashes2016_3,lyr_PedestrainCrashes2017_4,lyr_PedestrainCrashes2018_5,lyr_PedestrainCrashes2019_6];
lyr_SLCCensusTracts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'FUNCSTAT10': 'FUNCSTAT10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LOGRECNO': 'LOGRECNO', 'AREALAND': 'AREALAND', 'AREAWATR': 'AREAWATR', 'POP100': 'POP100', 'HU100': 'HU100', 'P0020001': 'P0020001', 'P0020002': 'P0020002', 'P0020003': 'P0020003', 'P0020004': 'P0020004', 'P0020005': 'P0020005', 'P0020006': 'P0020006', 'P0020007': 'P0020007', 'P0020008': 'P0020008', 'P0020009': 'P0020009', 'P0020010': 'P0020010', 'MTFCC': 'MTFCC', 'P0010011': 'P0010011', 'P0010012': 'P0010012', 'P0010013': 'P0010013', 'P0010014': 'P0010014', 'SqMiles': 'SqMiles', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PedestrainCrashes2015_2.set('fieldAliases', {'pedestrian': 'pedestrian', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_PedestrainCrashes2016_3.set('fieldAliases', {'pedestrian': 'pedestrian', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_PedestrainCrashes2017_4.set('fieldAliases', {'pedestrian': 'pedestrian', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_PedestrainCrashes2018_5.set('fieldAliases', {'pedestrian': 'pedestrian', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_PedestrainCrashes2019_6.set('fieldAliases', {'pedestrian': 'pedestrian', 'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_SLCCensusTracts_1.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'TRACTCE10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LOGRECNO': 'TextEdit', 'AREALAND': 'TextEdit', 'AREAWATR': 'TextEdit', 'POP100': 'TextEdit', 'HU100': 'TextEdit', 'P0020001': 'TextEdit', 'P0020002': 'TextEdit', 'P0020003': 'TextEdit', 'P0020004': 'TextEdit', 'P0020005': 'TextEdit', 'P0020006': 'TextEdit', 'P0020007': 'TextEdit', 'P0020008': 'TextEdit', 'P0020009': 'TextEdit', 'P0020010': 'TextEdit', 'MTFCC': 'TextEdit', 'P0010011': 'Range', 'P0010012': 'Range', 'P0010013': 'Range', 'P0010014': 'Range', 'SqMiles': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PedestrainCrashes2015_2.set('fieldImages', {'pedestrian': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_PedestrainCrashes2016_3.set('fieldImages', {'pedestrian': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_PedestrainCrashes2017_4.set('fieldImages', {'pedestrian': 'TextEdit', 'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_PedestrainCrashes2018_5.set('fieldImages', {'pedestrian': '', 'objectid': '', 'YEAR': '', });
lyr_PedestrainCrashes2019_6.set('fieldImages', {'pedestrian': '', 'objectid': '', 'YEAR': '', });
lyr_SLCCensusTracts_1.set('fieldLabels', {'OBJECTID': 'inline label', 'STATEFP10': 'inline label', 'COUNTYFP10': 'inline label', 'TRACTCE10': 'inline label', 'GEOID10': 'inline label', 'NAME10': 'inline label', 'FUNCSTAT10': 'inline label', 'INTPTLAT10': 'inline label', 'INTPTLON10': 'inline label', 'LOGRECNO': 'inline label', 'AREALAND': 'inline label', 'AREAWATR': 'inline label', 'POP100': 'inline label', 'HU100': 'inline label', 'P0020001': 'inline label', 'P0020002': 'no label', 'P0020003': 'no label', 'P0020004': 'no label', 'P0020005': 'no label', 'P0020006': 'no label', 'P0020007': 'no label', 'P0020008': 'no label', 'P0020009': 'no label', 'P0020010': 'no label', 'MTFCC': 'no label', 'P0010011': 'no label', 'P0010012': 'no label', 'P0010013': 'no label', 'P0010014': 'no label', 'SqMiles': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PedestrainCrashes2015_2.set('fieldLabels', {'pedestrian': 'inline label', 'objectid': 'inline label', 'YEAR': 'inline label', });
lyr_PedestrainCrashes2016_3.set('fieldLabels', {'pedestrian': 'inline label', 'objectid': 'inline label', 'YEAR': 'inline label', });
lyr_PedestrainCrashes2017_4.set('fieldLabels', {'pedestrian': 'inline label', 'objectid': 'inline label', 'YEAR': 'inline label', });
lyr_PedestrainCrashes2018_5.set('fieldLabels', {'pedestrian': 'inline label', 'objectid': 'inline label', 'YEAR': 'inline label', });
lyr_PedestrainCrashes2019_6.set('fieldLabels', {'pedestrian': 'inline label', 'objectid': 'inline label', 'YEAR': 'inline label', });
lyr_PedestrainCrashes2019_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});