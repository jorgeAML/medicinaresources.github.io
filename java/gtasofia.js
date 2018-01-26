$(document).ready(function () {
		////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_sofiapellecer.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Resumenes de Sofia Pellecer 2016.").attr({
		title: "Descargar Resumenes 2016.",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/Resumenes Sofia Pellecer.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Resumenes de Sofia Pellecer</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Boca y Glándulas Salivales",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 1 - LENGUA, GLÁNDULAS Y DIENTES.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Boca y Glándulas Salivales").attr({
		title: "Descarga Resumen Boca y Glándulas Salivales",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 1 - LENGUA, GLÁNDULAS Y DIENTES.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("20");
	$("tbody").find("td").eq(3).html("2016S10A202PRESP1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Esófago y Esttómago",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 2 - ESÓFAGO Y ESTÓMAGO.pdf",
		"class": "cap-a",
	});
	$(".row2sp").find("a").eq(1).html("Esófago y Estómago").attr({
		title: "Descarga Resumen Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 2 - ESÓFAGO Y ESTÓMAGO.pdf",
		"class": "cap-b",
	});
	$(".row2sp").find("td").eq(2).html("21");
	$(".row2sp").find("td").eq(3).html("2016S10A202PRESP2").attr({
		"class": "code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Intestino Delgado y Grueso",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 3 - INTESTINO DELGADO E INTESTINO GRUESO.pdf",
		"class": "cap-a",
	});
	$(".row3sp").find("a").eq(1).html("Intestino Delgado y Grueso").attr({
		title: "Descarga Resumen Intestino Delgado y Grueso",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 3 - INTESTINO DELGADO E INTESTINO GRUESO.pdf",
		"class": "cap-b",
	});
	$(".row3sp").find("td").eq(2).html("22");
	$(".row3sp").find("td").eq(3).html("2016S10A202PRESP3").attr({
		"class": "code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Páncreas, Hígado y Vesícula Biliar",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 3 - INTESTINO DELGADO E INTESTINO GRUESO.pdf",
		"class": "cap-a",
	});
	$(".row4sp").find("a").eq(1).html("Páncreas, Hígado y Vesícula Biliar").attr({
		title: "Descarga Resumen Páncreas, Hígado y Vesícula Biliar",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA DIGESTIVO 3 - INTESTINO DELGADO E INTESTINO GRUESO.pdf",
		"class": "cap-b",
	});
	$(".row4sp").find("td").eq(2).html("23");
	$(".row4sp").find("td").eq(3).html("2016S10A202PRESP4").attr({
		"class": "code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA ENDOCRINO.pdf",
		"class": "cap-a",
	});
	$(".row5sp").find("a").eq(1).html("Sistema Endocrino").attr({
		title: "Descarga Resumen Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA ENDOCRINO.pdf",
		"class": "cap-b",
	});
	$(".row5sp").find("td").eq(2).html("26");
	$(".row5sp").find("td").eq(3).html("2016S10A202PRESP5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA URINARIO.pdf",
		"class": "cap-a",
	});
	$(".row6sp").find("a").eq(1).html("Sistema Urinario").attr({
		title: "Descarga Resumen Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/SISTEMA URINARIO.pdf",
		"class": "cap-b",
	});
	$(".row6sp").find("td").eq(2).html("25");
	$(".row6sp").find("td").eq(3).html("2016S10A202PRESP6").attr({
		"class": "code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7sp",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7sp").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Mapa Conceptual de Vesicula Biliar",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/Vesicula biliar.xmind",
		"class": "cap-a",
	});
	$(".row7sp").find("a").eq(1).html("Mapa Conceptual de Vesicula Biliar").attr({
		title: "Descarga Resumen Mapa Conceptual de Vesicula Biliar",
		href: "medicinaresources_staticfiles/histologia/resumenessofiap/Vesicula biliar.xmind",
		"class": "cap-b",
	});
	$(".row7sp").find("td").eq(2).html("25");
	$(".row7sp").find("td").eq(3).html("2016S10A202PRESP7").attr({
		"class": "code",
	});
	//end
});