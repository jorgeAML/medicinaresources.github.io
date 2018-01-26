$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_epidemiologiaASIS.html
	////////
	///////////AML panels navigations 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".list-group-aml",
		"class": "aml-panel gradient-aml",
		html: "<div class='aml-heading'><h1 class='aml-title'>Descargar</h1></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml-panel",
		"insertAfter": ".aml-heading",
		"class": "aml-body p-kreon",
		html: "<ul><li><a/></li><li><a/></li></ul><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Guía Vancouver 2016").attr({
		title: "Descargar Guía Vancouver 2016",
		href: "medicinaresources_staticfiles/salud/programacion/GUIA Vancouver 2016.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(1).html("<i class='icon-download-alt'></i> Tasas Alvarez Alba").attr({
		title: "Descargar Tasas Alvarez Alba",
		href: "medicinaresources_staticfiles/salud/programacion/Tasas Álvarez Alba.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(0).html("El proyecto ASIS ayuda al estudiande de medicina a realizar una actividad ordenada, lógica y racional que permita caracterizar a la población en su estructura, composición y distribución, en sus condiciones de vida, los riesgos agresores y protectores presentes y la morbilidad, discapacidad y mortalidad de la comunidad.").attr({
		"class": "p-army",
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
		"class": "p-heads",
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>ASIS del Modulo de Epidemiología</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Guía de elaboración de ASIS",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/1 Guia de elaboraxion ASIS.docx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Guía de elaboración de ASIS").attr({
		title: "Descargar Guía de elaboración de ASIS",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/1 Guia de elaboraxion ASIS.docx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N24A1301206AS1").attr({
		"class": "code p-code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Guía Completa de ASIS",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/2 ASIS_(ANALISIS_DE_LA_SITUACION_EN_SALUD-_2014).doc",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("a").eq(1).html("Guía Completa de ASIS").attr({
		title: "Descarga Guía Completa de ASIS",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/2 ASIS_(ANALISIS_DE_LA_SITUACION_EN_SALUD-_2014).doc",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2srl").find("td").eq(3).html("2017N24A1301206AS2").attr({
		"class": "code p-code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row3").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Encuesta de Salud",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/3 ENCUESTA DE SALUD.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Encuesta de Salud").attr({
		title: "Descarga Encuesta de Salud",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/3 ENCUESTA DE SALUD.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N24A1301206AS3").attr({
		"class": "code p-code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Método de CENDES",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/4 CENDES.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Método de CENDES").attr({
		title: "Descarga Método de CENDES",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/4 CENDES.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N24A1301206AS4").attr({
		"class": "code p-code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row5").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Modelo de Carta a Centro de Salud",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/8 carta-a-centro-de-salud.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Modelo de Carta a Centro de Salud").attr({
		title: "Descarga Modelo de Carta a Centro de Salud",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/8 carta-a-centro-de-salud.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017N24A1301206AS5").attr({
		"class": "code p-code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row6").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Modelo de ASIS 1",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/6 Fernando Rivas INFORME ASIS (1).docx",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Modelo de ASIS 1").attr({
		title: "Descarga Modelo de ASIS 1",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/6 Fernando Rivas INFORME ASIS (1).docx",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017N24A1301206AS6").attr({
		"class": "code p-code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row7").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Modelo de ASIS 2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/7 analisis de situacion de salud herman sanchez.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Modelo de ASIS 2").attr({
		title: "Descarga Modelo de ASIS 2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/7 analisis de situacion de salud herman sanchez.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017N24A1301206AS7").attr({
		"class": "code p-code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Modelo de ASIS 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/5 Trabajo de salud - ASIS.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Modelo de ASIS 3").attr({
		title: "Descarga Modelo de ASIS 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/5 Trabajo de salud - ASIS.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017N24A1301206AS8").attr({
		"class": "code p-code",
	});
	//Head 2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "p-heads",
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>ASIS Terminados Modelos de Ejemplo</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "rowh1",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$(".rowh1").find("a").eq(0).html("Descargar").attr({
		title: "Descargar ASIS Santiago Guatemala",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/Documento recopilado ASIS_2 save (Reparado).pdf",
		"class": "aml-anat p-kreon",
	});
	$(".rowh1").find("a").eq(1).html("ASIS Santiago Guatemala").attr({
		title: "Descargar ASIS Santiago Guatemala",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/Documento recopilado ASIS_2 save (Reparado).pdf",
		"class": "aml-anat p-kreon",
	});
	$(".rowh1").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".rowh1").find("td").eq(3).html("2017N24A1301206AS9").attr({
		"class": "code p-code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".rowh2").find("a").eq(0).html("Descargar").attr({
		title: " Descarga ASIS Santa Lucía Guatemala",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/ASIS-SANTA-LUCIA-Recuperado7.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".rowh2").find("a").eq(1).html("ASIS Santa Lucía Guatemala").attr({
		title: "Descarga ASIS Santa Lucía Guatemala",
		href: "medicinaresources_staticfiles/salud/epidemiologia/asis/ASIS-SANTA-LUCIA-Recuperado7.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".rowh2").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".rowh2").find("td").eq(3).html("2017N24A1301206AS10").attr({
		"class": "code p-code",
	});
	//end
})