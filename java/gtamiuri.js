$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_miuri.html
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
		html: "<p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Bloque 1.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Primer Modulo.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(1).html("<i class='icon-download-alt'></i> Bloque 2.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Segundo Modulo.zip",
		"class": "aml-anat",
	});	
	$(".aml-body").find("a").eq(2).html("<i class='icon-download-alt'></i> Bloque 3.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Tercer Modulo.zip",
		"class": "aml-anat",
	});	
	$(".aml-body").find("a").eq(3).html("<i class='icon-download-alt'></i> Bloque 4.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Cuarto Modulo.zip",
		"class": "aml-anat",
	});		
	$(".aml-body").find("a").eq(4).html("<i class='icon-download-alt'></i> Bloque 5.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Quinto Modulo.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Bloque 1. Dra. Miuril Lopez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Introducción a la Histología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/1_Introduccion_histologia.pptx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Introducción a la Histología").attr({
		title: "Descarga Introducción a la Histología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/1_Introduccion_histologia.pptx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("0");
	$("tbody").find("td").eq(3).html("2016S10A202PREML1");
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Embriología semanas 1 a 3",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_embriologia_uno_a_ocho.pptx",
		"class": "cap-a",
	});
	$(".row2ml").find("a").eq(1).html("Embriología semanas 1 a 3").attr({
		title: "Descarga Embriología semanas 1 a 3",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_embriologia_uno_a_ocho.pptx",
		"class": "cap-b",
	});
	$(".row2ml").find("td").eq(2).html("1");
	$(".row2ml").find("td").eq(3).html("2016S10A202PREML2");
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Embriología semanas 4 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_embriologia_uno_a_ocho.pptx",
		"class": "cap-a",
	});
	$(".row3ml").find("a").eq(1).html("Embriología semanas 4 a 8").attr({
		title: "Descarga EEmbriología semanas 4 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_embriologia_uno_a_ocho.pptx",
		"class": "cap-b",
	});
	$(".row3ml").find("td").eq(2).html("2");
	$(".row3ml").find("td").eq(3).html("2016S10A202PREML3");
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/3_tejido_epitelial.pptx",
		"class": "cap-a",
	});
	$(".row4ml").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/3_tejido_epitelial.pptx",
		"class": "cap-b",
	});
	$(".row4ml").find("td").eq(2).html("3");
	$(".row4ml").find("td").eq(3).html("2016S10A202PREML4");
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/4_tejido_conjuntivo.pptx",
		"class": "cap-a",
	});
	$(".row5ml").find("a").eq(1).html("Tejido Conectivo").attr({
		title: "Descarga Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/4_tejido_conjuntivo.pptx",
		"class": "cap-b",
	});
	$(".row5ml").find("td").eq(2).html("4");
	$(".row5ml").find("td").eq(3).html("2016S10A202PREML5");
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Muscular y Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/5_tejido_muscular_nervioso.pptx",
		"class": "cap-a",
	});
	$(".row6ml").find("a").eq(1).html("Tejido Muscular y Nervioso").attr({
		title: "Descarga Tejido Muscular y Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/5_tejido_muscular_nervioso.pptx",
		"class": "cap-b",
	});
	$(".row6ml").find("td").eq(2).html("5");
	$(".row6ml").find("td").eq(3).html("2016S10A202PREML6");
	// row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7aml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7aml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido esqueléticos",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/6_tejido_esqueletico.pptx",
		"class": "cap-a",
	});
	$(".row7aml").find("a").eq(1).html("Tejido esquelético").attr({
		title: "Descarga Tejido esquelético",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/6_tejido_esqueletico.pptx",
		"class": "cap-b",
	});
	$(".row7aml").find("td").eq(2).html("6");
	$(".row7aml").find("td").eq(3).html("2016S10A202PREML7");	
	// row 7b
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row7ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/7_piel_anexos.pptx",
		"class": "cap-a",
	});
	$(".row7ml").find("a").eq(1).html("Tejido Piel y sus anexos").attr({
		title: "Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/7_piel_anexos.pptx",
		"class": "cap-b",
	});
	$(".row7ml").find("td").eq(2).html("7");
	$(".row7ml").find("td").eq(3).html("2016S10A202PREML7");
	// row 8 	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row8ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Ovulación",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-a",
	});
	$(".row8ml").find("a").eq(1).html("Video de Ovulación").attr({
		title: "Descarga Ovulación",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-b",
	});
	$(".row8ml").find("td").eq(2).html("1");
	$(".row8ml").find("td").eq(3).html("2016S10A202PREML8");
	// row 9 
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row9ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video de Fecundación",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-a",
	});
	$(".row9ml").find("a").eq(1).html("Video de Fecundación").attr({
		title: "Descarga Video de Fecundación",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-b",
	});
	$(".row9ml").find("td").eq(2).html("2");
	$(".row9ml").find("td").eq(3).html("2016S10A202PREML9");	
	// row 10
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row10ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video de Contracción Muscular",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-a",
	});
	$(".row10ml").find("a").eq(1).html("Video de Contracción Muscular").attr({
		title: "Descarga Video de Contracción Muscular",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-b",
	});
	$(".row10ml").find("td").eq(2).html("5");
	$(".row10ml").find("td").eq(3).html("2016S10A202PREML10");		
	//head 2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm2",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Bloque 2. Dra. Miuril Lopez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm2",
		"class": "body2",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body2").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/1_medula_espinal.pptx",
		"class": "cap-a",
	});
	$(".body2").find("a").eq(1).html("Médula Espinal").attr({
		title: "Descarga Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/1_medula_espinal.pptx",
		"class": "cap-b",
	});
	$(".body2").find("td").eq(2).html("8");
	$(".body2").find("td").eq(3).html("2016S10A202PREML11");	
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row11ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row11ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebelo y Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_cerebelo_plexos_coroideos.pptx",
		"class": "cap-a",
	});
	$(".row11ml").find("a").eq(1).html("Cerebelo y Plexos Coroideos").attr({
		title: "Descarga Cerebelo y Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/2_cerebelo_plexos_coroideos.pptx",
		"class": "cap-b",
	});
	$(".row11ml").find("td").eq(2).html("9");
	$(".row11ml").find("td").eq(3).html("2016S10A202PREML12");
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row12ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row12ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebro y Embriología de sistema Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/3_cerebro.pptx",
		"class": "cap-a",
	});
	$(".row12ml").find("a").eq(1).html("Cerebro y Embriología de sistema Nervioso").attr({
		title: "Descarga Cerebro y Embriología de sistema Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/3_cerebro.pptx",
		"class": "cap-b",
	});
	$(".row12ml").find("td").eq(2).html("10");
	$(".row12ml").find("td").eq(3).html("2016S10A202PREML13");	
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row13ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row13ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Receptores Sensoriales",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-a",
	});
	$(".row13ml").find("a").eq(1).html("Receptores Sensoriales").attr({
		title: "Descarga Receptores Sensoriales",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/#",
		"class": "cap-b",
	});
	$(".row13ml").find("td").eq(2).html("11");
	$(".row13ml").find("td").eq(3).html("2016S10A202PREML14");	
	//row 14	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row14ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row14ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Ojo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/4_ojo.pptx",
		"class": "cap-a",
	});
	$(".row14ml").find("a").eq(1).html("Ojo").attr({
		title: "Descarga Ojo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/4_ojo.pptx",
		"class": "cap-b",
	});
	$(".row14ml").find("td").eq(2).html("12");
	$(".row14ml").find("td").eq(3).html("2016S10A202PREML15");	
	//row 15
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row15ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row15ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/5_oido.pptx",
		"class": "cap-a",
	});
	$(".row15ml").find("a").eq(1).html("Oido").attr({
		title: "Descarga Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/5_oido.pptx",
		"class": "cap-b",
	});
	$(".row15ml").find("td").eq(2).html("13");
	$(".row15ml").find("td").eq(3).html("2016S10A202PREML16");	
	//row 16
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row16ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row16ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video de capas de la retina",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Las 10 capas de la retina.mp4",
		"class": "cap-a",
	});
	$(".row16ml").find("a").eq(1).html("Video de capas de la retina").attr({
		title: "Descarga Video de capas de la retina",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Las 10 capas de la retina.mp4",
		"class": "cap-b",
	});
	$(".row16ml").find("td").eq(2).html("12");
	$(".row16ml").find("td").eq(3).html("2016S10A202PREML17");		
	//row 17 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row17ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row17ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video sobre caracteristicas del Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Un viaje al interior del oido.mp4",
		"class": "cap-a",
	});
	$(".row17ml").find("a").eq(1).html("Video sobre caracteristicas del Oido").attr({
		title: "Descarga Video sobre caracteristicas del Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Un viaje al interior del oido.mp4",
		"class": "cap-b",
	});
	$(".row17ml").find("td").eq(2).html("13");
	$(".row17ml").find("td").eq(3).html("2016S10A202PREML18");
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body2",
		"class": "row18ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row18ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video sobre proceso de la audición",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Video proceso audicion.mp4",
		"class": "cap-a",
	});
	$(".row18ml").find("a").eq(1).html("Video sobre proceso de la audición").attr({
		title: "Descarga Video sobre proceso de la audición",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Video proceso audicion.mp4",
		"class": "cap-b",
	});
	$(".row18ml").find("td").eq(2).html("13");
	$(".row18ml").find("td").eq(3).html("2016S10A202PREML19");	
	//head 3

	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm3",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Bloque 3. Dra. Miuril Lopez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
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
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/14_sangre_hematopoyesis.pptx",
		"class": "cap-a",
	});
	$(".body3").find("a").eq(1).html("Sangre y Hematopoyesis").attr({
		title: "Descarga Sangre y Hematopoyesis",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/14_sangre_hematopoyesis.pptx",
		"class": "cap-b",
	});
	$(".body3").find("td").eq(2).html("14");
	$(".body3").find("td").eq(3).html("2016S10A202PREML20");
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row19ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row19ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Cardiovascular y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/15_cardiovascular.pptx",
		"class": "cap-a",
	});
	$(".row19ml").find("a").eq(1).html("Aparato Cardiovascular y su Embriología").attr({
		title: "Descarga Aparato Cardiovascular y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/15_cardiovascular.pptx",
		"class": "cap-b",
	});
	$(".row19ml").find("td").eq(2).html("15");
	$(".row19ml").find("td").eq(3).html("2016S10A202PREML21");	
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row20ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row20ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Respiratorio y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/16_respiratorio.pptx",
		"class": "cap-a",
	});
	$(".row20ml").find("a").eq(1).html("Aparato Respiratorio y su Embriología").attr({
		title: "Descarga Aparato Respiratorio y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/16_respiratorio.pptx",
		"class": "cap-b",
	});
	$(".row20ml").find("td").eq(2).html("16");
	$(".row20ml").find("td").eq(3).html("2016S10A202PREML22");
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row21ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row21ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/17_organos_linfoides.pptx",
		"class": "cap-a",
	});
	$(".row21ml").find("a").eq(1).html("Órganos Linfoides").attr({
		title: "Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/17_organos_linfoides.pptx",
		"class": "cap-b",
	});
	$(".row21ml").find("td").eq(2).html("17");
	$(".row21ml").find("td").eq(3).html("2016S10A202PREML23");	
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row22ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row22ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Educación Tímica en la Inmunidad Adaptativa[1].mp4",
		"class": "cap-a",
	});
	$(".row22ml").find("a").eq(1).html("Video sobre Sistema Inmune").attr({
		title: "Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Educación Tímica en la Inmunidad Adaptativa[1].mp4",
		"class": "cap-b",
	});
	$(".row22ml").find("td").eq(2).html("18");
	$(".row22ml").find("td").eq(3).html("2016S10A202PREML24");	
	// row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row23ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row23ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video sobre Sistema Circulatorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/El sistema circulatorio[1].mp4",
		"class": "cap-a",
	});
	$(".row23ml").find("a").eq(1).html("Video sobre Sistema Circulatorio").attr({
		title: "Descarga Video sobre Sistema Circulatorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/El sistema circulatorio[1].mp4",
		"class": "cap-b",
	});
	$(".row23ml").find("td").eq(2).html("15");
	$(".row23ml").find("td").eq(3).html("2016S10A202PREML25");	
	//row 24	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body3",
		"class": "row24ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row24ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video sobre Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Embriologia Desarrollo Bronquio Pulmonar Aparato Respiratorio[1].mp4",
		"class": "cap-a",
	});
	$(".row24ml").find("a").eq(1).html("Video sobre Aparato Respiratorio").attr({
		title: "Descarga Video sobre Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Embriologia Desarrollo Bronquio Pulmonar Aparato Respiratorio[1].mp4",
		"class": "cap-b",
	});
	$(".row24ml").find("td").eq(2).html("16");
	$(".row24ml").find("td").eq(3).html("2016S10A202PREML26");	
	//row head 4
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm4",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Bloque 4. Dra. Miuril Lopez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});	
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"insertAfter": ".headm4",
		"class": "body4",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});	
	$(".body4").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Boca y Glándulas salivales",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/20_boca_glandulas.pptx",
		"class": "cap-a",
	});
	$(".body4").find("a").eq(1).html("Boca y Glándulas salivales").attr({
		title: "Descarga Boca y Glándulas salivales",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/20_boca_glandulas.pptx",
		"class": "cap-b",
	});
	$(".body4").find("td").eq(2).html("20");
	$(".body4").find("td").eq(3).html("2016S10A202PREML27");
	//row 28
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row28ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row28ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Lengua y Glándula salival",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/20_lengua_glandula_salival.pptx",
		"class": "cap-a",
	});
	$(".row28ml").find("a").eq(1).html("Lengua y Glándula salival").attr({
		title: "Descarga Lengua y Glándula salival",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/20_lengua_glandula_salival.pptx",
		"class": "cap-b",
	});
	$(".row28ml").find("td").eq(2).html("20");
	$(".row28ml").find("td").eq(3).html("2016S10A202PREML28");	
	//row 29
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row29ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row29ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/21_esofago_estomago.ppt",
		"class": "cap-a",
	});
	$(".row29ml").find("a").eq(1).html("Esófago y Estómago").attr({
		title: "Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/21_esofago_estomago.ppt",
		"class": "cap-b",
	});
	$(".row29ml").find("td").eq(2).html("21");
	$(".row29ml").find("td").eq(3).html("2016S10A202PREML29");	
	//row 30
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row30ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row30ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Intestino Delgado y Grueso y Apéndice cecal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/22_intestino_delgado_grueso_apendice.ppt",
		"class": "cap-a",
	});
	$(".row30ml").find("a").eq(1).html("Intestino Delgado y Grueso y Apéndice cecal").attr({
		title: "Descarga Intestino Delgado y Grueso y Apéndice cecal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/22_intestino_delgado_grueso_apendice.ppt",
		"class": "cap-b",
	});
	$(".row30ml").find("td").eq(2).html("22");
	$(".row30ml").find("td").eq(3).html("2016S10A202PREML30");	
	//row 31			
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row31ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row31ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Hígado y Vesicula biliar",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/23_higado_vesicula.pptx",
		"class": "cap-a",
	});
	$(".row31ml").find("a").eq(1).html("Hígado y Vesicula biliar").attr({
		title: "Descarga Hígado y Vesicula biliar",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/23_higado_vesicula.pptx",
		"class": "cap-b",
	});
	$(".row31ml").find("td").eq(2).html("23");
	$(".row31ml").find("td").eq(3).html("2016S10A202PREML31");	
	//row 32	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row32ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row32ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Urinario y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/25_aparato_urinario.pptx",
		"class": "cap-a",
	});
	$(".row32ml").find("a").eq(1).html("Aparato Urinario y su Embriología").attr({
		title: "Descarga Aparato Urinario y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/25_aparato_urinario.pptx",
		"class": "cap-b",
	});
	$(".row32ml").find("td").eq(2).html("25");
	$(".row32ml").find("td").eq(3).html("2016S10A202PREML32");	
	//row 33	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body4",
		"class": "row33ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row33ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video del desarrollo del diente",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Etapas del desarrollo del diente[1].mp4",
		"class": "cap-a",
	});
	$(".row33ml").find("a").eq(1).html("Video del desarrollo del diente").attr({
		title: "Descarga Video del desarrollo del diente",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/Etapas del desarrollo del diente[1].mp4",
		"class": "cap-b",
	});
	$(".row33ml").find("td").eq(2).html("20");
	$(".row33ml").find("td").eq(3).html("2016S10A202PREML32");	
	//row head 5

	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "headm5",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Bloque 5. Dra. Miuril Lopez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
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
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/26_sistema_endocrino.pptx",
		"class": "cap-a",
	});
	$(".body5").find("a").eq(1).html("Sistema Endocrino").attr({
		title: "Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/26_sistema_endocrino.pptx",
		"class": "cap-b",
	});
	$(".body5").find("td").eq(2).html("26");
	$(".body5").find("td").eq(3).html("2016S10A202PREML33");
	//row 34
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row34ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row34ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato reproductor masculino",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/27_aparato_reproductor_masculino.pptx",
		"class": "cap-a",
	});
	$(".row34ml").find("a").eq(1).html("Aparato reproductor masculino").attr({
		title: "Descarga Aparato reproductor masculinoe",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/27_aparato_reproductor_masculino.pptx",
		"class": "cap-b",
	});
	$(".row34ml").find("td").eq(2).html("27");
	$(".row34ml").find("td").eq(3).html("2016S10A202PREML34");
	//row 35
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row35ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row35ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Glándula Mamaria",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/28_glandula_mamaria.pptx",
		"class": "cap-a",
	});
	$(".row35ml").find("a").eq(1).html("Glándula Mamaria").attr({
		title: "Descarga Glándula Mamaria",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/28_glandula_mamaria.pptx",
		"class": "cap-b",
	});
	$(".row35ml").find("td").eq(2).html("28");
	$(".row35ml").find("td").eq(3).html("2016S10A202PREML35");
	//row 36	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row36ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row36ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Placenta",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/28_mama_placenta.pptx",
		"class": "cap-a",
	});
	$(".row36ml").find("a").eq(1).html("Placenta").attr({
		title: "Descarga Placenta",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/28_mama_placenta.pptx",
		"class": "cap-b",
	});
	$(".row36ml").find("td").eq(2).html("28");
	$(".row36ml").find("td").eq(3).html("2016S10A202PREML36");
	//row 37
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row37ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row37ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Útero y Ovario",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/29_utero_ovario.pptx",
		"class": "cap-a",
	});
	$(".row37ml").find("a").eq(1).html("Útero y Ovario").attr({
		title: "Descarga Útero y Ovario",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/29_utero_ovario.pptx",
		"class": "cap-b",
	});
	$(".row37ml").find("td").eq(2).html("29");
	$(".row37ml").find("td").eq(3).html("2016S10A202PREML37");
	//row 38
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".body5",
		"class": "row38ml",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row38ml").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Video de desarrollo de placenta",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/DESARROLLO PLACENTARIO[1].mp4",
		"class": "cap-a",
	});
	$(".row38ml").find("a").eq(1).html("Video de desarrollo de placenta").attr({
		title: "Descarga Video de desarrollo de placenta",
		href: "medicinaresources_staticfiles/histologia/presentaciones/Miuril/DESARROLLO PLACENTARIO[1].mp4",
		"class": "cap-b",
	});
	$(".row38ml").find("td").eq(2).html("28");
	$(".row38ml").find("td").eq(3).html("2016S10A202PREML38");		
});