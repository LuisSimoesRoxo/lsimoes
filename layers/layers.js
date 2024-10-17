var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_geo_caop_2022_freg_1 = new ol.format.GeoJSON();
var features_geo_caop_2022_freg_1 = format_geo_caop_2022_freg_1.readFeatures(json_geo_caop_2022_freg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geo_caop_2022_freg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_caop_2022_freg_1.addFeatures(features_geo_caop_2022_freg_1);
var lyr_geo_caop_2022_freg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geo_caop_2022_freg_1, 
                style: style_geo_caop_2022_freg_1,
                popuplayertitle: "geo_caop_2022_freg",
                interactive: true,
                title: '<img src="styles/legend/geo_caop_2022_freg_1.png" /> geo_caop_2022_freg'
            });
var format_faixa_projeto_2 = new ol.format.GeoJSON();
var features_faixa_projeto_2 = format_faixa_projeto_2.readFeatures(json_faixa_projeto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faixa_projeto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faixa_projeto_2.addFeatures(features_faixa_projeto_2);
var lyr_faixa_projeto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_faixa_projeto_2, 
                style: style_faixa_projeto_2,
                popuplayertitle: "faixa_projeto",
                interactive: true,
                title: '<img src="styles/legend/faixa_projeto_2.png" /> faixa_projeto'
            });
var format_Cadastro_V1_3 = new ol.format.GeoJSON();
var features_Cadastro_V1_3 = format_Cadastro_V1_3.readFeatures(json_Cadastro_V1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastro_V1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastro_V1_3.addFeatures(features_Cadastro_V1_3);
var lyr_Cadastro_V1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastro_V1_3, 
                style: style_Cadastro_V1_3,
                popuplayertitle: "Cadastro_V1",
                interactive: true,
                title: '<img src="styles/legend/Cadastro_V1_3.png" /> Cadastro_V1'
            });
var format_Cadastro_Linha_Heliade_Crato_Parcelas_4 = new ol.format.GeoJSON();
var features_Cadastro_Linha_Heliade_Crato_Parcelas_4 = format_Cadastro_Linha_Heliade_Crato_Parcelas_4.readFeatures(json_Cadastro_Linha_Heliade_Crato_Parcelas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastro_Linha_Heliade_Crato_Parcelas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastro_Linha_Heliade_Crato_Parcelas_4.addFeatures(features_Cadastro_Linha_Heliade_Crato_Parcelas_4);
var lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastro_Linha_Heliade_Crato_Parcelas_4, 
                style: style_Cadastro_Linha_Heliade_Crato_Parcelas_4,
                popuplayertitle: "Cadastro_Linha_Heliade_Crato_Parcelas.",
                interactive: true,
                title: '<img src="styles/legend/Cadastro_Linha_Heliade_Crato_Parcelas_4.png" /> Cadastro_Linha_Heliade_Crato_Parcelas.'
            });
var format_Cadastro_Linha_Heliade_Crato_SubParcelas_5 = new ol.format.GeoJSON();
var features_Cadastro_Linha_Heliade_Crato_SubParcelas_5 = format_Cadastro_Linha_Heliade_Crato_SubParcelas_5.readFeatures(json_Cadastro_Linha_Heliade_Crato_SubParcelas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastro_Linha_Heliade_Crato_SubParcelas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastro_Linha_Heliade_Crato_SubParcelas_5.addFeatures(features_Cadastro_Linha_Heliade_Crato_SubParcelas_5);
var lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastro_Linha_Heliade_Crato_SubParcelas_5, 
                style: style_Cadastro_Linha_Heliade_Crato_SubParcelas_5,
                popuplayertitle: "Cadastro_Linha_Heliade_Crato_SubParcelas",
                interactive: true,
                title: '<img src="styles/legend/Cadastro_Linha_Heliade_Crato_SubParcelas_5.png" /> Cadastro_Linha_Heliade_Crato_SubParcelas'
            });
var format_Cadastro_Rio_Maior_SubParcelas_6 = new ol.format.GeoJSON();
var features_Cadastro_Rio_Maior_SubParcelas_6 = format_Cadastro_Rio_Maior_SubParcelas_6.readFeatures(json_Cadastro_Rio_Maior_SubParcelas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastro_Rio_Maior_SubParcelas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastro_Rio_Maior_SubParcelas_6.addFeatures(features_Cadastro_Rio_Maior_SubParcelas_6);
var lyr_Cadastro_Rio_Maior_SubParcelas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastro_Rio_Maior_SubParcelas_6, 
                style: style_Cadastro_Rio_Maior_SubParcelas_6,
                popuplayertitle: "Cadastro_Rio_Maior_SubParcelas",
                interactive: true,
                title: '<img src="styles/legend/Cadastro_Rio_Maior_SubParcelas_6.png" /> Cadastro_Rio_Maior_SubParcelas'
            });
var format_Cadastro_Rio_Maior_Parcelas_7 = new ol.format.GeoJSON();
var features_Cadastro_Rio_Maior_Parcelas_7 = format_Cadastro_Rio_Maior_Parcelas_7.readFeatures(json_Cadastro_Rio_Maior_Parcelas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastro_Rio_Maior_Parcelas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastro_Rio_Maior_Parcelas_7.addFeatures(features_Cadastro_Rio_Maior_Parcelas_7);
var lyr_Cadastro_Rio_Maior_Parcelas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastro_Rio_Maior_Parcelas_7, 
                style: style_Cadastro_Rio_Maior_Parcelas_7,
                popuplayertitle: "Cadastro_Rio_Maior_Parcelas",
                interactive: true,
                title: '<img src="styles/legend/Cadastro_Rio_Maior_Parcelas_7.png" /> Cadastro_Rio_Maior_Parcelas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_geo_caop_2022_freg_1.setVisible(true);lyr_faixa_projeto_2.setVisible(true);lyr_Cadastro_V1_3.setVisible(true);lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4.setVisible(true);lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5.setVisible(true);lyr_Cadastro_Rio_Maior_SubParcelas_6.setVisible(true);lyr_Cadastro_Rio_Maior_Parcelas_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_geo_caop_2022_freg_1,lyr_faixa_projeto_2,lyr_Cadastro_V1_3,lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4,lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5,lyr_Cadastro_Rio_Maior_SubParcelas_6,lyr_Cadastro_Rio_Maior_Parcelas_7];
lyr_geo_caop_2022_freg_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Concelho': 'Concelho', 'Distrito': 'Distrito', 'Area_ha': 'Area_ha', 'Des_Simpli': 'Des_Simpli', 'data_publicacao': 'data_publicacao', 'nome': 'nome', });
lyr_faixa_projeto_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', });
lyr_Cadastro_V1_3.set('fieldAliases', {'fid': 'fid', 'N_PREDIO': 'N_PREDIO', 'DICOFRE': 'DICOFRE', 'ARTIGO': 'ARTIGO', 'SECCAO': 'SECCAO', 'AREA_M2': 'AREA_M2', 'ID_PARCELA': 'ID_PARCELA', });
lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4.set('fieldAliases', {'ID_GESSERV': 'ID_GESSERV', 'ID_LN': 'ID_LN', 'ID_OBRA': 'ID_OBRA', 'DEN_LN': 'DEN_LN', 'ID_PARCELA': 'ID_PARCELA', 'ID_CHAVE': 'ID_CHAVE', 'AREA_m2': 'AREA_m2', 'SÃTIO': 'SÃTIO', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'DISTRITO': 'DISTRITO', 'ID_NIP': 'ID_NIP', 'NOME_PROP': 'NOME_PROP', 'MORD_PROP': 'MORD_PROP', 'LOCAL_PROP': 'LOCAL_PROP', 'COD_PROP1': 'COD_PROP1', 'COD_PROP2': 'COD_PROP2', 'COD_PROP3': 'COD_PROP3', 'CONT_PROP': 'CONT_PROP', 'NIF_PROP': 'NIF_PROP', 'NOME_REPR': 'NOME_REPR', 'MORD_REPR': 'MORD_REPR', 'LOCAL_REPR': 'LOCAL_REPR', 'COD_REPR1': 'COD_REPR1', 'COD_REPR2': 'COD_REPR2', 'COD_REPR3': 'COD_REPR3', 'CONT_REPR': 'CONT_REPR', 'ANT_PROP': 'ANT_PROP', 'ANT_PRED': 'ANT_PRED', 'OBS': 'OBS', 'H_ACT_ANO': 'H_ACT_ANO', 'H_ACT_PS': 'H_ACT_PS', });
lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5.set('fieldAliases', {'ID_GESSERV': 'ID_GESSERV', 'ID_LN': 'ID_LN', 'ID_OBRA': 'ID_OBRA', 'DEN_LN': 'DEN_LN', 'ID_PARCELA': 'ID_PARCELA', 'ID_CHAVE': 'ID_CHAVE', 'ID_SUBPARC': 'ID_SUBPARC', 'USO_SOLO': 'USO_SOLO', 'OC_SOLO': 'OC_SOLO', 'AREA_m2': 'AREA_m2', 'PARC_INDEM': 'PARC_INDEM', 'OBS': 'OBS', });
lyr_Cadastro_Rio_Maior_SubParcelas_6.set('fieldAliases', {'ID_GESSERV': 'ID_GESSERV', 'ID_LN': 'ID_LN', 'ID_OBRA': 'ID_OBRA', 'DEN_LN': 'DEN_LN', 'ID_PARCELA': 'ID_PARCELA', 'ID_CHAVE': 'ID_CHAVE', 'ID_SUBPARC': 'ID_SUBPARC', 'USO_SOLO': 'USO_SOLO', 'OC_SOLO': 'OC_SOLO', 'AREA_m2': 'AREA_m2', 'PARC_INDEM': 'PARC_INDEM', 'OBS': 'OBS', });
lyr_Cadastro_Rio_Maior_Parcelas_7.set('fieldAliases', {'ID_GESSERV': 'ID_GESSERV', 'ID_LN': 'ID_LN', 'ID_OBRA': 'ID_OBRA', 'DEN_LN': 'DEN_LN', 'ID_PARCELA': 'ID_PARCELA', 'ID_CHAVE': 'ID_CHAVE', 'AREA_m2': 'AREA_m2', 'SÃTIO': 'SÃTIO', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'DISTRITO': 'DISTRITO', 'ID_NIP': 'ID_NIP', 'NOME_PROP': 'NOME_PROP', 'MORD_PROP': 'MORD_PROP', 'LOCAL_PROP': 'LOCAL_PROP', 'COD_PROP1': 'COD_PROP1', 'COD_PROP2': 'COD_PROP2', 'COD_PROP3': 'COD_PROP3', 'CONT_PROP': 'CONT_PROP', 'NIF_PROP': 'NIF_PROP', 'NOME_REPR': 'NOME_REPR', 'MORD_REPR': 'MORD_REPR', 'LOCAL_REPR': 'LOCAL_REPR', 'COD_REPR1': 'COD_REPR1', 'COD_REPR2': 'COD_REPR2', 'COD_REPR3': 'COD_REPR3', 'CONT_REPR': 'CONT_REPR', 'ANT_PROP': 'ANT_PROP', 'ANT_PRED': 'ANT_PRED', 'OBS': 'OBS', 'H_ACT_ANO': 'H_ACT_ANO', 'H_ACT_PS': 'H_ACT_PS', });
lyr_geo_caop_2022_freg_1.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'DICOFRE': 'TextEdit', 'Freguesia': 'TextEdit', 'Concelho': 'TextEdit', 'Distrito': 'TextEdit', 'Area_ha': 'TextEdit', 'Des_Simpli': 'TextEdit', 'data_publicacao': 'DateTime', 'nome': 'TextEdit', });
lyr_faixa_projeto_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descript_1': '', 'altitude_1': '', });
lyr_Cadastro_V1_3.set('fieldImages', {'fid': 'TextEdit', 'N_PREDIO': 'TextEdit', 'DICOFRE': 'TextEdit', 'ARTIGO': 'TextEdit', 'SECCAO': 'TextEdit', 'AREA_M2': 'TextEdit', 'ID_PARCELA': '', });
lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4.set('fieldImages', {'ID_GESSERV': 'TextEdit', 'ID_LN': 'TextEdit', 'ID_OBRA': 'TextEdit', 'DEN_LN': 'TextEdit', 'ID_PARCELA': 'TextEdit', 'ID_CHAVE': 'TextEdit', 'AREA_m2': 'TextEdit', 'SÃTIO': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'DISTRITO': 'TextEdit', 'ID_NIP': 'TextEdit', 'NOME_PROP': 'TextEdit', 'MORD_PROP': 'TextEdit', 'LOCAL_PROP': 'TextEdit', 'COD_PROP1': 'TextEdit', 'COD_PROP2': 'TextEdit', 'COD_PROP3': 'TextEdit', 'CONT_PROP': 'TextEdit', 'NIF_PROP': 'TextEdit', 'NOME_REPR': 'TextEdit', 'MORD_REPR': 'TextEdit', 'LOCAL_REPR': 'TextEdit', 'COD_REPR1': 'TextEdit', 'COD_REPR2': 'TextEdit', 'COD_REPR3': 'TextEdit', 'CONT_REPR': 'TextEdit', 'ANT_PROP': 'TextEdit', 'ANT_PRED': 'TextEdit', 'OBS': 'TextEdit', 'H_ACT_ANO': 'TextEdit', 'H_ACT_PS': 'TextEdit', });
lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5.set('fieldImages', {'ID_GESSERV': 'TextEdit', 'ID_LN': 'TextEdit', 'ID_OBRA': 'TextEdit', 'DEN_LN': 'TextEdit', 'ID_PARCELA': 'TextEdit', 'ID_CHAVE': 'TextEdit', 'ID_SUBPARC': 'TextEdit', 'USO_SOLO': 'TextEdit', 'OC_SOLO': 'TextEdit', 'AREA_m2': 'TextEdit', 'PARC_INDEM': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Cadastro_Rio_Maior_SubParcelas_6.set('fieldImages', {'ID_GESSERV': '', 'ID_LN': '', 'ID_OBRA': '', 'DEN_LN': '', 'ID_PARCELA': '', 'ID_CHAVE': '', 'ID_SUBPARC': '', 'USO_SOLO': '', 'OC_SOLO': '', 'AREA_m2': '', 'PARC_INDEM': '', 'OBS': '', });
lyr_Cadastro_Rio_Maior_Parcelas_7.set('fieldImages', {'ID_GESSERV': '', 'ID_LN': '', 'ID_OBRA': '', 'DEN_LN': '', 'ID_PARCELA': '', 'ID_CHAVE': '', 'AREA_m2': '', 'SÃTIO': '', 'FREGUESIA': '', 'CONCELHO': '', 'DISTRITO': '', 'ID_NIP': '', 'NOME_PROP': '', 'MORD_PROP': '', 'LOCAL_PROP': '', 'COD_PROP1': '', 'COD_PROP2': '', 'COD_PROP3': '', 'CONT_PROP': '', 'NIF_PROP': '', 'NOME_REPR': '', 'MORD_REPR': '', 'LOCAL_REPR': '', 'COD_REPR1': '', 'COD_REPR2': '', 'COD_REPR3': '', 'CONT_REPR': '', 'ANT_PROP': '', 'ANT_PRED': '', 'OBS': '', 'H_ACT_ANO': '', 'H_ACT_PS': '', });
lyr_geo_caop_2022_freg_1.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'DICOFRE': 'no label', 'Freguesia': 'no label', 'Concelho': 'no label', 'Distrito': 'no label', 'Area_ha': 'no label', 'Des_Simpli': 'no label', 'data_publicacao': 'no label', 'nome': 'no label', });
lyr_faixa_projeto_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descript_1': 'no label', 'altitude_1': 'no label', });
lyr_Cadastro_V1_3.set('fieldLabels', {'fid': 'no label', 'N_PREDIO': 'no label', 'DICOFRE': 'no label', 'ARTIGO': 'no label', 'SECCAO': 'no label', 'AREA_M2': 'no label', 'ID_PARCELA': 'no label', });
lyr_Cadastro_Linha_Heliade_Crato_Parcelas_4.set('fieldLabels', {'ID_GESSERV': 'no label', 'ID_LN': 'no label', 'ID_OBRA': 'no label', 'DEN_LN': 'no label', 'ID_PARCELA': 'no label', 'ID_CHAVE': 'no label', 'AREA_m2': 'no label', 'SÃTIO': 'no label', 'FREGUESIA': 'no label', 'CONCELHO': 'no label', 'DISTRITO': 'no label', 'ID_NIP': 'no label', 'NOME_PROP': 'no label', 'MORD_PROP': 'no label', 'LOCAL_PROP': 'no label', 'COD_PROP1': 'no label', 'COD_PROP2': 'no label', 'COD_PROP3': 'no label', 'CONT_PROP': 'no label', 'NIF_PROP': 'no label', 'NOME_REPR': 'no label', 'MORD_REPR': 'no label', 'LOCAL_REPR': 'no label', 'COD_REPR1': 'no label', 'COD_REPR2': 'no label', 'COD_REPR3': 'no label', 'CONT_REPR': 'no label', 'ANT_PROP': 'no label', 'ANT_PRED': 'no label', 'OBS': 'no label', 'H_ACT_ANO': 'no label', 'H_ACT_PS': 'no label', });
lyr_Cadastro_Linha_Heliade_Crato_SubParcelas_5.set('fieldLabels', {'ID_GESSERV': 'no label', 'ID_LN': 'no label', 'ID_OBRA': 'no label', 'DEN_LN': 'no label', 'ID_PARCELA': 'no label', 'ID_CHAVE': 'no label', 'ID_SUBPARC': 'no label', 'USO_SOLO': 'no label', 'OC_SOLO': 'no label', 'AREA_m2': 'no label', 'PARC_INDEM': 'no label', 'OBS': 'no label', });
lyr_Cadastro_Rio_Maior_SubParcelas_6.set('fieldLabels', {'ID_GESSERV': 'no label', 'ID_LN': 'no label', 'ID_OBRA': 'no label', 'DEN_LN': 'no label', 'ID_PARCELA': 'no label', 'ID_CHAVE': 'no label', 'ID_SUBPARC': 'no label', 'USO_SOLO': 'no label', 'OC_SOLO': 'no label', 'AREA_m2': 'no label', 'PARC_INDEM': 'no label', 'OBS': 'no label', });
lyr_Cadastro_Rio_Maior_Parcelas_7.set('fieldLabels', {'ID_GESSERV': 'no label', 'ID_LN': 'no label', 'ID_OBRA': 'no label', 'DEN_LN': 'no label', 'ID_PARCELA': 'no label', 'ID_CHAVE': 'no label', 'AREA_m2': 'no label', 'SÃTIO': 'no label', 'FREGUESIA': 'no label', 'CONCELHO': 'no label', 'DISTRITO': 'no label', 'ID_NIP': 'no label', 'NOME_PROP': 'no label', 'MORD_PROP': 'no label', 'LOCAL_PROP': 'no label', 'COD_PROP1': 'no label', 'COD_PROP2': 'no label', 'COD_PROP3': 'no label', 'CONT_PROP': 'no label', 'NIF_PROP': 'no label', 'NOME_REPR': 'no label', 'MORD_REPR': 'no label', 'LOCAL_REPR': 'no label', 'COD_REPR1': 'no label', 'COD_REPR2': 'no label', 'COD_REPR3': 'no label', 'CONT_REPR': 'no label', 'ANT_PROP': 'no label', 'ANT_PRED': 'no label', 'OBS': 'no label', 'H_ACT_ANO': 'no label', 'H_ACT_PS': 'no label', });
lyr_Cadastro_Rio_Maior_Parcelas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});