$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_real.html
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
	$(".aml-body").find("p").eq(0).html("La Revista Análisis de la Realidad Nacional es una publicación digital con periodicidad quincenal del Instituto Problemas Nacionales de la Universidad de San Carlos de Guatemala (IPNUSAC) sobre temas y procesos sociales de actualidad. Promueve enfoques plurales e interdisciplinarios, y reivindica la tradición de libertad de cátedra, el debate vivo e informado y el ejercicio de la crítica y de la propuesta responsable. Puedes recogerla impresa en el edificio de Rectoria segundo nivel de la sede central, si no vives en el área central pueden pedirle en tu centro metropolitano más cercano con ayuda del decano de tu facultad.").attr({
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
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Revista Nacional de Salud Pública</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Revista Edición 65 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 65.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Edición 65").attr({
		title: "Descargar Revista Edición 65 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 65.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N20A1301206REV1").attr({
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
		title: " Descarga Revista Edición 66 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 66.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("a").eq(1).html("Edición 66").attr({
		title: "Descarga Revista Edición 66 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 66.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2srl").find("td").eq(3).html("2017N20A1301206REV2").attr({
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
		title: " Descarga Revista Edición 67 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 67.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Edición 67").attr({
		title: "Descarga Revista Edición 67 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 67.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N20A1301206REV3").attr({
		"class": "code p-code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 68 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 68.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Edición 68").attr({
		title: "Descarga Revista Edición 68 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 68.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N20A1301206REV4").attr({
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
		title: " Descarga Revista Edición 69 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 69.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Edición 69").attr({
		title: "Descarga Revista Edición 69 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 69.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017N20A1301206REV5").attr({
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
		title: " Descarga Revista Edición 70 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 70.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Edición 70").attr({
		title: "Descarga Revista Edición 70 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 70.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017N20A1301206REV6").attr({
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
		title: " Descarga Revista Edición 71 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 71.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Edición 71").attr({
		title: "Descarga Revista Edición 71 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 71.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017N20A1301206REV7").attr({
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
		title: " Descarga Revista Edición 72 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 72.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Edición 72").attr({
		title: "Descarga Revista Edición 72 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 72.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017N20A1301206REV8").attr({
		"class": "code p-code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row9").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 73 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 73.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("a").eq(1).html("Edición 73").attr({
		title: "Descarga Revista Edición 73 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 73.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".row9").find("td").eq(3).html("2017N20A1301206REV9").attr({
		"class": "code p-code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row10").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 74 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 74.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("a").eq(1).html("Edición 74").attr({
		title: "Descarga Revista Edición 74 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 74.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".row10").find("td").eq(3).html("2017N20A1301206REV10").attr({
		"class": "code p-code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row11").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 75 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 75.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("a").eq(1).html("Edición 75").attr({
		title: "Descarga Revista Edición 75 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 75.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".row11").find("td").eq(3).html("2017N20A1301206REV11").attr({
		"class": "code p-code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row12").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 76 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 76.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("a").eq(1).html("Edición 76").attr({
		title: "Descarga Revista Edición 76 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 76.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("td").eq(2).html("12").attr({
		"class": "p-kreon",
	});
	$(".row12").find("td").eq(3).html("2017N20A1301206REV12").attr({
		"class": "code p-code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row13",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row13").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 77 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 77.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("a").eq(1).html("Edición 77").attr({
		title: "Descarga Revista Edición 77 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 77.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("td").eq(2).html("13").attr({
		"class": "p-kreon",
	});
	$(".row13").find("td").eq(3).html("2017N20A1301206REV13").attr({
		"class": "code p-code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row14",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row14").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 78 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 78.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("a").eq(1).html("Edición 78").attr({
		title: "Descarga Revista Edición 78 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 78.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("td").eq(2).html("14").attr({
		"class": "p-kreon",
	});
	$(".row14").find("td").eq(3).html("2017N20A1301206REV14").attr({
		"class": "code p-code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row15").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 79 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 79.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("a").eq(1).html("Edición 79").attr({
		title: "Descarga Revista Edición 79 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 79.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("td").eq(2).html("15").attr({
		"class": "p-kreon",
	});
	$(".row15").find("td").eq(3).html("2017N20A1301206REV15").attr({
		"class": "code p-code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row16").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 80 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 80.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("a").eq(1).html("Edición 80").attr({
		title: "Descarga Revista Edición 80 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 80.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("td").eq(2).html("16").attr({
		"class": "p-kreon",
	});
	$(".row16").find("td").eq(3).html("2017N20A1301206REV16").attr({
		"class": "code p-code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row17").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 81 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 81.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("a").eq(1).html("Edición 81").attr({
		title: "Descarga Revista Edición 81 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 81.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("td").eq(2).html("17").attr({
		"class": "p-kreon",
	});
	$(".row17").find("td").eq(3).html("2017N20A1301206REV17").attr({
		"class": "code p-code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row18").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 82 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 82.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row18").find("a").eq(1).html("Edición 82").attr({
		title: "Descarga Revista Edición 82 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 82.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row18").find("td").eq(2).html("18").attr({
		"class": "p-kreon",
	});
	$(".row18").find("td").eq(3).html("2017N20A1301206REV18").attr({
		"class": "code p-code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row19",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row19").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 83 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 83.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row19").find("a").eq(1).html("Edición 83").attr({
		title: "Descarga Revista Edición 83 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 83.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row19").find("td").eq(2).html("19").attr({
		"class": "p-kreon",
	});
	$(".row19").find("td").eq(3).html("2017N20A1301206REV19").attr({
		"class": "code p-code",
	});
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row20",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row20").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 84 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 84.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row20").find("a").eq(1).html("Edición 84").attr({
		title: "Descarga Revista Edición 84 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 84.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row20").find("td").eq(2).html("20").attr({
		"class": "p-kreon",
	});
	$(".row20").find("td").eq(3).html("2017N20A1301206REV20").attr({
		"class": "code p-code",
	});
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row21",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row21").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición 85 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 85.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row21").find("a").eq(1).html("Edición 85").attr({
		title: "Descarga Revista Edición 85 del 2015",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Revista Edición 85.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row21").find("td").eq(2).html("21").attr({
		"class": "p-kreon",
	});
	$(".row21").find("td").eq(3).html("2017N20A1301206REV21").attr({
		"class": "code p-code",
	});
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row22",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row22").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición Impresa No. 11",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 11.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row22").find("a").eq(1).html("Edición Impresa No. 11").attr({
		title: "Descarga Revista Edición Impresa No. 11",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 11.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row22").find("td").eq(2).html("22").attr({
		"class": "p-kreon",
	});
	$(".row22").find("td").eq(3).html("2017N20A1301206REV22").attr({
		"class": "code p-code",
	});
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row23",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row23").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición Impresa No. 12",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 12.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row23").find("a").eq(1).html("Edición Impresa No. 12").attr({
		title: "Descarga Revista Edición Impresa No. 12",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 12.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row23").find("td").eq(2).html("23").attr({
		"class": "p-kreon",
	});
	$(".row23").find("td").eq(3).html("2017N20A1301206REV23").attr({
		"class": "code p-code",
	});
	//row 24
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row24",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".row24").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición Impresa No. 13",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 13.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row24").find("a").eq(1).html("Edición Impresa No. 13").attr({
		title: "Descarga Revista Edición Impresa No. 13",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 13.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row24").find("td").eq(2).html("24").attr({
		"class": "p-kreon",
	});
	$(".row24").find("td").eq(3).html("2017N20A1301206REV24").attr({
		"class": "code p-code",
	});
	//row 25
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row25",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".row25").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Revista Edición Impresa No. 14",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 14.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row25").find("a").eq(1).html("Edición Impresa No. 14").attr({
		title: "Descarga Revista Edición Impresa No. 14",
		href: "medicinaresources_staticfiles/salud/realidad_nacional/Edición Impresa No. 14.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row25").find("td").eq(2).html("25").attr({
		"class": "p-kreon",
	});
	$(".row25").find("td").eq(3).html("2017N20A1301206REV25").attr({
		"class": "code p-code",
	});
})