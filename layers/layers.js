var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kabupaten_1 = new ol.format.GeoJSON();
var features_kabupaten_1 = format_kabupaten_1.readFeatures(json_kabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kabupaten_1.addFeatures(features_kabupaten_1);
var lyr_kabupaten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kabupaten_1, 
                style: style_kabupaten_1,
                popuplayertitle: "kabupaten",
                interactive: true,
    title: 'kabupaten<br />\
    <img src="styles/legend/kabupaten_1_0.png" /> Balangan<br />\
    <img src="styles/legend/kabupaten_1_1.png" /> Banjar<br />\
    <img src="styles/legend/kabupaten_1_2.png" /> Barito Kuala<br />\
    <img src="styles/legend/kabupaten_1_3.png" /> Hulu Sungai Selatan<br />\
    <img src="styles/legend/kabupaten_1_4.png" /> Hulu Sungai Tengah<br />\
    <img src="styles/legend/kabupaten_1_5.png" /> Hulu Sungai Utara<br />\
    <img src="styles/legend/kabupaten_1_6.png" /> Kota Banjarbaru<br />\
    <img src="styles/legend/kabupaten_1_7.png" /> Kota Banjarmasin<br />\
    <img src="styles/legend/kabupaten_1_8.png" /> Kotabaru<br />\
    <img src="styles/legend/kabupaten_1_9.png" /> Tabalong<br />\
    <img src="styles/legend/kabupaten_1_10.png" /> Tanah Bumbu<br />\
    <img src="styles/legend/kabupaten_1_11.png" /> Tanah Laut<br />\
    <img src="styles/legend/kabupaten_1_12.png" /> Tapin<br />\
    <img src="styles/legend/kabupaten_1_13.png" /> <br />'
        });
var format_Batas_kab_2 = new ol.format.GeoJSON();
var features_Batas_kab_2 = format_Batas_kab_2.readFeatures(json_Batas_kab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_kab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_kab_2.addFeatures(features_Batas_kab_2);
var lyr_Batas_kab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_kab_2, 
                style: style_Batas_kab_2,
                popuplayertitle: "Batas_kab",
                interactive: true,
                title: '<img src="styles/legend/Batas_kab_2.png" /> Batas_kab'
            });
var format_ibukotakalimantanselatan_3 = new ol.format.GeoJSON();
var features_ibukotakalimantanselatan_3 = format_ibukotakalimantanselatan_3.readFeatures(json_ibukotakalimantanselatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ibukotakalimantanselatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ibukotakalimantanselatan_3.addFeatures(features_ibukotakalimantanselatan_3);
var lyr_ibukotakalimantanselatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ibukotakalimantanselatan_3, 
                style: style_ibukotakalimantanselatan_3,
                popuplayertitle: "ibukota kalimantan selatan",
                interactive: true,
    title: 'ibukota kalimantan selatan<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_0.png" /> Amuntai<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_1.png" /> Banjarbaru<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_2.png" /> Banjarmasin<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_3.png" /> Barabai<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_4.png" /> Batulicin<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_5.png" /> Kandangan<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_6.png" /> Kotabaru<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_7.png" /> Marabahan<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_8.png" /> Martapura<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_9.png" /> Paringin<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_10.png" /> Pelaihari<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_11.png" /> Tanjung<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_12.png" /> Tapin<br />\
    <img src="styles/legend/ibukotakalimantanselatan_3_13.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_kabupaten_1.setVisible(true);lyr_Batas_kab_2.setVisible(true);lyr_ibukotakalimantanselatan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kabupaten_1,lyr_Batas_kab_2,lyr_ibukotakalimantanselatan_3];
lyr_kabupaten_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Batas_kab_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_ibukotakalimantanselatan_3.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'FTYPE': 'FTYPE', });
lyr_kabupaten_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Batas_kab_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'KARKTR': 'TextEdit', 'KLBADM': 'TextEdit', 'PJGBTS': 'TextEdit', 'STSBTS': 'TextEdit', 'TIPLOK': 'TextEdit', 'TIPTBT': 'TextEdit', 'UUPP': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'RuleID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ibukotakalimantanselatan_3.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'FTYPE': 'TextEdit', });
lyr_kabupaten_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Batas_kab_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'KARKTR': 'no label', 'KLBADM': 'no label', 'PJGBTS': 'no label', 'STSBTS': 'no label', 'TIPLOK': 'no label', 'TIPTBT': 'no label', 'UUPP': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'RuleID': 'no label', 'Shape_Leng': 'no label', });
lyr_ibukotakalimantanselatan_3.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'FTYPE': 'no label', });
lyr_ibukotakalimantanselatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});