$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_inicio.html
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
		html: "<ul><li><a/></li><li><a/></li><li><a/></li></ul><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Programación del curso 2016.").attr({
		title: "Descargar Programación del curso 2016.",
		href: "medicinaresources_staticfiles/salud/programacion/saludprogramacion.zip",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(1).html("<i class='icon-download-alt'></i> Guía Vancouver 2016").attr({
		title: "Descargar Guía Vancouver 2016",
		href: "medicinaresources_staticfiles/salud/programacion/GUIA Vancouver 2016.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(2).html("<i class='icon-download-alt'></i> Tasas Alvarez Alba").attr({
		title: "Descargar Tasas Alvarez Alba",
		href: "medicinaresources_staticfiles/salud/programacion/Tasas Álvarez Alba.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(0).html("Utiliza la Programación del curso de Salud Pública II para estar consciente de los problemas de salud individual, la familia y la comunidad, que conozca las estructuras y las fuerzas que en ellas actúan para conservar o perder la salud, y que conozca el medio económico social, dentro del contexto del desarrollo humano").attr({
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
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Programación de Salud Pública</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Cronograma de Salud Pública 2017",
		href: "medicinaresources_staticfiles/salud/programacion/1PROGRAMA SALUD PUBLICA II. 2017, 2DA REV..docx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Programación Oficial 2017").attr({
		title: "Descargar Cronograma de Salud Pública 2017",
		href: "medicinaresources_staticfiles/salud/programacion/1PROGRAMA SALUD PUBLICA II. 2017, 2DA REV..docx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N17A1301206PRO1").attr({
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
		title: " Descarga Programación Oficial 2016",
		href: "medicinaresources_staticfiles/salud/programacion/SALUD_PUBLICA_II_16.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("a").eq(1).html("Programación Oficial 2016").attr({
		title: "Descarga Programación Oficial 2016",
		href: "medicinaresources_staticfiles/salud/programacion/SALUD_PUBLICA_II_16.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row2srl").find("td").eq(3).html("2017N17A1301206PRO2").attr({
		"class": "code p-code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48",
	});
	$(".row3").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Programación Oficial 2015",
		href: "medicinaresources_staticfiles/salud/programacion/PROGRAMA_SALUD_PUBLICA_2015_CORREGIDO_OCT.2014.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Programación Oficial 2015").attr({
		title: "Descarga Programación Oficial 2015",
		href: "medicinaresources_staticfiles/salud/programacion/PROGRAMA_SALUD_PUBLICA_2015_CORREGIDO_OCT.2014.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N17A1301206PRO3").attr({
		"class": "code p-code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Programación Oficial 2014",
		href: "medicinaresources_staticfiles/salud/programacion/317ed9_PROGRAMA_SALUD_PUBLICA_II_2014.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Programación Oficial 2014").attr({
		title: "Descarga Programación Oficial 2014",
		href: "medicinaresources_staticfiles/salud/programacion/317ed9_PROGRAMA_SALUD_PUBLICA_II_2014.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N17A1301206PRO4").attr({
		"class": "code p-code",
	});
})