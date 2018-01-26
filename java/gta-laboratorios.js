$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_laboratorios.html
	////////
	///////////AML panels navigations 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".list-group-aml",
		"class": "aml-panel",
		html: "<div class='aml-heading'><h1 class='aml-title'>Descargar</h1></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml-panel",
		"insertAfter": ".aml-heading",
		"class": "aml-body",
		html: "<p><a/></p>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Todas las Guías 2017.").attr({
		title: "Descargar Laboratorios",
		href: "medicinaresources_staticfiles/histologia/laboratorios/guias2017.zip",
		"class": "aml-anat",
	});
	////
	//////
	////////
	/////////// tables tables, all this tables will be in the 'index_histo.html' 
	////////
	//////
	////
	$("<div/>", {
		href: "index_present.html",
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-md-6 aml_banner",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-md-6", 
		//"insertAfter": ".col-md-6",
		"class": "table-responsive",
	});
	$("<table/>", {
		href: "index_histo.html",
		"appendTo": ".table-responsive",
		"class": "table table-striped",
	});
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Guías para Laboratorios Bloque 1</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_laboratorios.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Embriología",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO EMBRIOLOGIA.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Guía de estudio de Embriología").attr({
		title: "Descarga Embriología",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO EMBRIOLOGIA.pdf/",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1");
	$("tbody").find("td").eq(3).html("2017S30A202LAB1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/laboratorios/Guia de Estudio 1 Tejido epitelial 2017.pdf",
		"class": "cap-a",
	});
	$(".row2g").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/laboratorios/Guia de Estudio 1 Tejido epitelial 2017.pdf",
		"class": "cap-b",
	});
	$(".row2g").find("td").eq(2).html("3");
	$(".row2g").find("td").eq(3).html("2017S30A202LAB2").attr({
		"class": "code",
	});
	//row 3
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/laboratorios/Guia de estudio Laboratorio No.2 Tejido Conectivo.pdf",
		"class": "cap-a",
	});
	$(".row3g").find("a").eq(1).html("Tejido Conjuntivo").attr({
		title: "Descarga Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/laboratorios/Guia de estudio Laboratorio No.2 Tejido Conectivo.pdf",
		"class": "cap-b",
	});
	$(".row3g").find("td").eq(2).html("4");
	$(".row3g").find("td").eq(3).html("2017S30A202LAB3").attr({
		"class": "code",
	});
	//row 4
			$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO MUSCULAR.pdf",
		"class": "cap-a",
	});
	$(".row4g").find("a").eq(1).html("Tejido Muscular").attr({
		title: "Descarga Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO MUSCULAR.pdf",
		"class": "cap-b",
	});
	$(".row4g").find("td").eq(2).html("5");
	$(".row4g").find("td").eq(3).html("2017S30A202LAB4").attr({
		"class": "code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Esquelético y Cartilaginoso",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 4 CARTILAGO, TEJIDO OSEO Y OSIFICACION ENDOCONDRAL.pdf",
		"class": "cap-a",
	});
	$(".row5g").find("a").eq(1).html("Tejido Esquelético y Cartilaginoso").attr({
		title: "Descarga Tejido Esquelético y Cartilaginoso",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 4 CARTILAGO, TEJIDO OSEO Y OSIFICACION ENDOCONDRAL.pdf",
		"class": "cap-b",
	});
	$(".row5g").find("td").eq(2).html("6");
	$(".row5g").find("td").eq(3).html("2017S30A202LAB5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No5 PIEL.pdf",
		"class": "cap-a",
	});
	$(".row6g").find("a").eq(1).html("Piel y sus anexos").attr({
		title: "Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No5 PIEL.pdf",
		"class": "cap-b",
	});
	$(".row6g").find("td").eq(2).html("7");
	$(".row6g").find("td").eq(3).html("2017S30A202LAB6").attr({
		"class": "code",
	});
	//head 2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm2",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Guías para Laboratorio bloque 2</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm2",
		"class": "body2",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body2").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Médula Espinal y Meninges",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.6 TEJIDO NERVIOSO, MEDULA ESPINAL, MENINGES.pdf",
		"class": "cap-a",
	});
	$(".body2").find("a").eq(1).html("Médula Espinal y Meninges").attr({
		title: "Descarga Médula Espinal y Meninges",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.6 TEJIDO NERVIOSO, MEDULA ESPINAL, MENINGES.pdf",
		"class": "cap-b",
	});
	$(".body2").find("td").eq(2).html("8");
	$(".body2").find("td").eq(3).html("2017S30A202LAB7").attr({
		"class": "code",
	});
	// row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row7g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row7g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebelo y Plexos coroideos",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.7 CEREBELO Y PLEXOS COROIDEOS.pdf",
		"class": "cap-a",
	});
	$(".row7g").find("a").eq(1).html("Cerebelo y Plexos coroideos").attr({
		title: "Descarga Cerebelo y Plexos coroideos",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.7 CEREBELO Y PLEXOS COROIDEOS.pdf",
		"class": "cap-b",
	});
	$(".row7g").find("td").eq(2).html("9");
	$(".row7g").find("td").eq(3).html("2017S30A202LAB8").attr({
		"class": "code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row8g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row8g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.8 CEREBRO.pdf",
		"class": "cap-a",
	});
	$(".row8g").find("a").eq(1).html("Cerebro").attr({
		title: "Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.8 CEREBRO.pdf",
		"class": "cap-b",
	});
	$(".row8g").find("td").eq(2).html("10");
	$(".row8g").find("td").eq(3).html("2017S30A202LAB9").attr({
		"class": "code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row9g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row9g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Receptores Sensoriales",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO RECEPTORES SENSORIALES.pdf",
		"class": "cap-a",
	});
	$(".row9g").find("a").eq(1).html("Receptores Sensoriales").attr({
		title: "Descarga Receptores Sensoriales",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO RECEPTORES SENSORIALES.pdf",
		"class": "cap-b",
	});
	$(".row9g").find("td").eq(2).html("11");
	$(".row9g").find("td").eq(3).html("2017S30A202LAB10").attr({
		"class": "code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row10g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row10g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Globo Ocular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.9 GLOBO OCULAR.pdf",
		"class": "cap-a",
	});
	$(".row10g").find("a").eq(1).html("Globo Ocular").attr({
		title: "Descarga Globo Ocular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.9 GLOBO OCULAR.pdf",
		"class": "cap-b",
	});
	$(".row10g").find("td").eq(2).html("12");
	$(".row10g").find("td").eq(3).html("2017S30A202LAB11").attr({
		"class": "code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row11g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row11g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Órgano de Corti",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.10 ORGANO DE CORTI.pdf",
		"class": "cap-a",
	});
	$(".row11g").find("a").eq(1).html("Órgano de Corti").attr({
		title: "Descarga Órgano de Corti",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.10 ORGANO DE CORTI.pdf",
		"class": "cap-b",
	});
	$(".row11g").find("td").eq(2).html("13");
	$(".row11g").find("td").eq(3).html("2017S30A202LAB12").attr({
		"class": "code",
	});
	//head 3
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm3",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Guías para Laboratorio bloque 3</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm3",
		"class": "body3",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body3").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Sangre y Hematopoyesis",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.11 TEJIDO HEMATOPOYETICO Y SANGRE.pdf",
		"class": "cap-a",
	});
	$(".body3").find("a").eq(1).html("Sangre y Hematopoyesis").attr({
		title: "Descarga Sangre y Hematopoyesis",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.11 TEJIDO HEMATOPOYETICO Y SANGRE.pdf",
		"class": "cap-b",
	});
	$(".body3").find("td").eq(2).html("14");
	$(".body3").find("td").eq(3).html("2017S30A202LAB13").attr({
		"class": "code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row12g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row12g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.12 SISTEMA CARDIOVASCULAR.pdf",
		"class": "cap-a",
	});
	$(".row12g").find("a").eq(1).html("Aparato Cardiovascular").attr({
		title: "Descarga Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.12 SISTEMA CARDIOVASCULAR.pdf",
		"class": "cap-b",
	});
	$(".row12g").find("td").eq(2).html("15");
	$(".row12g").find("td").eq(3).html("2017S30A202LAB14").attr({
		"class": "code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row13g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row13g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.13 TRAQUEA Y PULMONES.pdf",
		"class": "cap-a",
	});
	$(".row13g").find("a").eq(1).html("Aparato Respiratorio").attr({
		title: "Descarga Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.13 TRAQUEA Y PULMONES.pdf",
		"class": "cap-b",
	});
	$(".row13g").find("td").eq(2).html("16");
	$(".row13g").find("td").eq(3).html("2017S30A202LAB15").attr({
		"class": "code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row14g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row14g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sistema Inmune",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 14 ORGANOS LINFOIDES.pdf",
		"class": "cap-a",
	});
	$(".row14g").find("a").eq(1).html("Sistema Inmune").attr({
		title: "Descarga Sistema Inmune",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 14 ORGANOS LINFOIDES.pdf",
		"class": "cap-b",
	});
	$(".row14g").find("td").eq(2).html("17");
	$(".row14g").find("td").eq(3).html("2017S30A202LAB16").attr({
		"class": "code",
	});
	//head 4
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm4",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Guías para Laboratorio bloque 4</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm4",
		"class": "body4",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body4").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Lengua y Glandula Salival",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 15 LENGUA Y GLANDULA SALIVAL.pdf",
		"class": "cap-a",
	});
	$(".body4").find("a").eq(1).html("Lengua y Glandula Salival").attr({
		title: "Descarga Lengua y Glandula Salival",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 15 LENGUA Y GLANDULA SALIVAL.pdf",
		"class": "cap-b",
	});
	$(".body4").find("td").eq(2).html("20");
	$(".body4").find("td").eq(3).html("2017S30A202LAB17").attr({
		"class": "code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row15g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row15g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 16 ESOFAGO Y LENGUA.pdf",
		"class": "cap-a",
	});
	$(".row15g").find("a").eq(1).html("Esófago y Estómago").attr({
		title: "Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 16 ESOFAGO Y LENGUA.pdf",
		"class": "cap-b",
	});
	$(".row15g").find("td").eq(2).html("21");
	$(".row15g").find("td").eq(3).html("2017S30A202LAB18").attr({
		"class": "code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row16g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row16g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Duodeno y Colon",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.17 DUODENO Y COLON.pdf",
		"class": "cap-a",
	});
	$(".row16g").find("a").eq(1).html("Duodeno y Colon").attr({
		title: "Descarga Duodeno y Colon",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.17 DUODENO Y COLON.pdf",
		"class": "cap-b",
	});
	$(".row16g").find("td").eq(2).html("22");
	$(".row16g").find("td").eq(3).html("2017S30A202LAB19").attr({
		"class": "code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row17g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row17g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Hígado y Vesicula Biliar",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 18 HIGADO Y VESICULA BILIAR.pdf",
		"class": "cap-a",
	});
	$(".row17g").find("a").eq(1).html("Hígado y Vesicula Biliar").attr({
		title: "Descarga Hígado y Vesicula Biliar",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 18 HIGADO Y VESICULA BILIAR.pdf",
		"class": "cap-b",
	});
	$(".row17g").find("td").eq(2).html("23");
	$(".row17g").find("td").eq(3).html("2017S30A202LAB20").attr({
		"class": "code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row18g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row18g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Páncreas y Apéndice Cecal",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 19 PANCREAS Y APENDIC CECAL.pdf",
		"class": "cap-a",
	});
	$(".row18g").find("a").eq(1).html("Páncreas y Apéndice Cecal").attr({
		title: "Descarga Páncreas y Apéndice Cecal",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 19 PANCREAS Y APENDIC CECAL.pdf",
		"class": "cap-b",
	});
	$(".row18g").find("td").eq(2).html("24");
	$(".row18g").find("td").eq(3).html("2017S30A202LAB21").attr({
		"class": "code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row19g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row19g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Urinario",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.20 SISTEMA URINARIO.pdf",
		"class": "cap-a",
	});
	$(".row19g").find("a").eq(1).html("Aparato Urinario").attr({
		title: "Descarga Aparato Urinario",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No.20 SISTEMA URINARIO.pdf",
		"class": "cap-b",
	});
	$(".row19g").find("td").eq(2).html("25");
	$(".row19g").find("td").eq(3).html("2017S30A202LAB22").attr({
		"class": "code",
	});
	//head 5
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm5",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Guías para Laboratorio bloque 5</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm5",
		"class": "body5",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body5").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 21 SISTEMA ENDOCRINO.pdf",
		"class": "cap-a",
	});
	$(".body5").find("a").eq(1).html("Sistema Endocrino").attr({
		title: "Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 21 SISTEMA ENDOCRINO.pdf",
		"class": "cap-b",
	});
	$(".body5").find("td").eq(2).html("26");
	$(".body5").find("td").eq(3).html("2017S30A202LAB23").attr({
		"class": "code",
	});
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row20g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row20g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 22 APARATO REPRODUCTOR MASCULINO.pdf",
		"class": "cap-a",
	});
	$(".row20g").find("a").eq(1).html("Aparato Reproductor Masculino").attr({
		title: "Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 22 APARATO REPRODUCTOR MASCULINO.pdf",
		"class": "cap-b",
	});
	$(".row20g").find("td").eq(2).html("27");
	$(".row20g").find("td").eq(3).html("2017S30A202LAB24").attr({
		"class": "code",
	});
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row21g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row21g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Glándula Mamaria y Placenta",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 23 PLACENTA Y GLANDULA MAMARIA.pdf",
		"class": "cap-a",
	});
	$(".row21g").find("a").eq(1).html("Glándula Mamaria y Placenta").attr({
		title: "Descarga Glándula Mamaria y Placenta",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO No. 23 PLACENTA Y GLANDULA MAMARIA.pdf",
		"class": "cap-b",
	});
	$(".row21g").find("td").eq(2).html("28");
	$(".row21g").find("td").eq(3).html("2017S30A202LAB25").attr({
		"class": "code",
	});
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row22g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row22g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Útero, Ovario y Cervix",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO No. 24 APARATO REPRODUCTOR FEMENINO II.pdf",
		"class": "cap-a",
	});
	$(".row22g").find("a").eq(1).html("Útero, Ovario y Cervix").attr({
		title: "Descarga Útero, Ovario y Cervix",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO No. 24 APARATO REPRODUCTOR FEMENINO II.pdf",
		"class": "cap-b",
	});
	$(".row22g").find("td").eq(2).html("29");
	$(".row22g").find("td").eq(3).html("2017S30A202LAB26").attr({
		"class": "code",
	});
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row23g",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row23g").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Citología Exfoliativa",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO CITOLOGIA EXFOLIATIVA.pdf",
		"class": "cap-a",
	});
	$(".row23g").find("a").eq(1).html("Citología Exfoliativa").attr({
		title: "Descarga Citología Exfoliativa",
		href: "medicinaresources_staticfiles/histologia/laboratorios/GUIA DE ESTUDIO LABORATORIO CITOLOGIA EXFOLIATIVA.pdf",
		"class": "cap-b",
	});
	$(".row23g").find("td").eq(2).html("31");
	$(".row23g").find("td").eq(3).html("2017S30A202LAB27").attr({
		"class": "code",
	});
	//end
})