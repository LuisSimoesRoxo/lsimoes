var size = 0;
var placement = 'point';

var style_Cadastro_Linha_Heliade_Crato_SubParcelas_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Calibri\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("CASE
WHEN
count(  \"ID_PARCELA\"   || '.' ||  \"ID_CHAVE\"  || '-' ||   \"ID_SUBPARC\"   ,  \"ID_PARCELA\"   || '.' ||  \"ID_CHAVE\"  || '-' ||   \"ID_SUBPARC\"   ) > 1
THEN 'ERRO - VALOR DUPLICADO'
ELSE  \"ID_PARCELA\"  || '.' ||  \"ID_CHAVE\"  || '-' ||    \"ID_SUBPARC\" 
END
") !== null) {
        labelText = String(feature.get("CASE
WHEN
count(  \"ID_PARCELA\"   || '.' ||  \"ID_CHAVE\"  || '-' ||   \"ID_SUBPARC\"   ,  \"ID_PARCELA\"   || '.' ||  \"ID_CHAVE\"  || '-' ||   \"ID_SUBPARC\"   ) > 1
THEN 'ERRO - VALOR DUPLICADO'
ELSE  \"ID_PARCELA\"  || '.' ||  \"ID_CHAVE\"  || '-' ||    \"ID_SUBPARC\" 
END
"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,101,240,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
