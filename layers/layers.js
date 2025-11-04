ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([4822415.311748, 2536602.155287, 5118272.647032, 2696143.914594]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Cesar_1 = new ol.format.GeoJSON();
var features_Cesar_1 = format_Cesar_1.readFeatures(json_Cesar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Cesar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cesar_1.addFeatures(features_Cesar_1);
var lyr_Cesar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cesar_1, 
                style: style_Cesar_1,
                popuplayertitle: 'Cesar',
                interactive: true,
                title: 'Cesar'
            });
var format_Magdalena_2 = new ol.format.GeoJSON();
var features_Magdalena_2 = format_Magdalena_2.readFeatures(json_Magdalena_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Magdalena_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magdalena_2.addFeatures(features_Magdalena_2);
var lyr_Magdalena_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magdalena_2, 
                style: style_Magdalena_2,
                popuplayertitle: 'Magdalena',
                interactive: true,
                title: 'Magdalena'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Cesar_1.setVisible(true);lyr_Magdalena_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Cesar_1,lyr_Magdalena_2];
lyr_Cesar_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'Shape_Leng': 'Shape_Leng', 'OBJECTID': 'OBJECTID', 'MPIO_CNMBR': 'MPIO_CNMBR', 'DESCRPCION': 'DESCRPCION', 'DEPTO': 'DEPTO', 'P_ENERSI': 'P_ENERSI', 'P_ENERNO': 'P_ENERNO', 'P_ALCANSI': 'P_ALCANSI', 'P_ALCANNO': 'P_ALCANNO', 'P_ACUESI': 'P_ACUESI', 'P_ACUENO': 'P_ACUENO', 'P_GASNSI': 'P_GASNSI', 'P_GASNNO': 'P_GASNNO', 'P_GASNNOIN': 'P_GASNNOIN', 'P_TELEFSI': 'P_TELEFSI', 'P_TELEFNO': 'P_TELEFNO', 'P_TELEFNOI': 'P_TELEFNOI', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Magdalena_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'Shape_Leng': 'Shape_Leng', 'OBJECTID': 'OBJECTID', 'MPIO_CNMBR': 'MPIO_CNMBR', 'DESCRPCION': 'DESCRPCION', 'DEPTO': 'DEPTO', 'P_ENERSI': 'P_ENERSI', 'P_ENERNO': 'P_ENERNO', 'P_ALCANSI': 'P_ALCANSI', 'P_ALCANNO': 'P_ALCANNO', 'P_ACUESI': 'P_ACUESI', 'P_ACUENO': 'P_ACUENO', 'P_GASNSI': 'P_GASNSI', 'P_GASNNO': 'P_GASNNO', 'P_GASNNOIN': 'P_GASNNOIN', 'P_TELEFSI': 'P_TELEFSI', 'P_TELEFNO': 'P_TELEFNO', 'P_TELEFNOI': 'P_TELEFNOI', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Cesar_1.set('fieldImages', {'OBJECTID_1': 'Range', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECTID': 'Range', 'MPIO_CNMBR': 'TextEdit', 'DESCRPCION': 'TextEdit', 'DEPTO': 'TextEdit', 'P_ENERSI': 'Range', 'P_ENERNO': 'Range', 'P_ALCANSI': 'Range', 'P_ALCANNO': 'Range', 'P_ACUESI': 'Range', 'P_ACUENO': 'Range', 'P_GASNSI': 'Range', 'P_GASNNO': 'Range', 'P_GASNNOIN': 'Range', 'P_TELEFSI': 'Range', 'P_TELEFNO': 'Range', 'P_TELEFNOI': 'Range', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Magdalena_2.set('fieldImages', {'OBJECTID_1': 'Range', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECTID': 'Range', 'MPIO_CNMBR': 'TextEdit', 'DESCRPCION': 'TextEdit', 'DEPTO': 'TextEdit', 'P_ENERSI': 'Range', 'P_ENERNO': 'Range', 'P_ALCANSI': 'Range', 'P_ALCANNO': 'Range', 'P_ACUESI': 'Range', 'P_ACUENO': 'Range', 'P_GASNSI': 'Range', 'P_GASNNO': 'Range', 'P_GASNNOIN': 'Range', 'P_TELEFSI': 'Range', 'P_TELEFNO': 'Range', 'P_TELEFNOI': 'Range', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Cesar_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'DPTO_CCDGO': 'hidden field', 'MPIO_CCDGO': 'hidden field', 'Shape_Leng': 'hidden field', 'OBJECTID': 'hidden field', 'MPIO_CNMBR': 'no label', 'DESCRPCION': 'hidden field', 'DEPTO': 'hidden field', 'P_ENERSI': 'hidden field', 'P_ENERNO': 'hidden field', 'P_ALCANSI': 'hidden field', 'P_ALCANNO': 'hidden field', 'P_ACUESI': 'hidden field', 'P_ACUENO': 'hidden field', 'P_GASNSI': 'hidden field', 'P_GASNNO': 'hidden field', 'P_GASNNOIN': 'hidden field', 'P_TELEFSI': 'hidden field', 'P_TELEFNO': 'hidden field', 'P_TELEFNOI': 'hidden field', 'ShapeSTAre': 'hidden field', 'ShapeSTLen': 'hidden field', });
lyr_Magdalena_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'DPTO_CCDGO': 'hidden field', 'MPIO_CCDGO': 'hidden field', 'Shape_Leng': 'hidden field', 'OBJECTID': 'hidden field', 'MPIO_CNMBR': 'no label', 'DESCRPCION': 'hidden field', 'DEPTO': 'hidden field', 'P_ENERSI': 'hidden field', 'P_ENERNO': 'hidden field', 'P_ALCANSI': 'hidden field', 'P_ALCANNO': 'hidden field', 'P_ACUESI': 'hidden field', 'P_ACUENO': 'hidden field', 'P_GASNSI': 'hidden field', 'P_GASNNO': 'hidden field', 'P_GASNNOIN': 'hidden field', 'P_TELEFSI': 'hidden field', 'P_TELEFNO': 'hidden field', 'P_TELEFNOI': 'hidden field', 'ShapeSTAre': 'hidden field', 'ShapeSTLen': 'hidden field', });
lyr_Magdalena_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});