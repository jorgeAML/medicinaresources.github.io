$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_inves.html
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
	$(".aml-body").find("p").eq(0).html("La investigación es considerada una actividad orientada a la obtención de nuevos conocimientos y su aplicación para la solución a problemas o interrogantes de carácter científico; la investigación científica es el nombre general que obtiene el complejo proceso en el cual los avances científicos son el resultado de la aplicación del método científico para resolver problemas o tratar de explicar determinadas observaciones.").attr({
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
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Modulo de Investigación en Epidemiología</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Etica Médica",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/Etica medica.doc",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Etica Médica").attr({
		title: "Descargar Etica Médica",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/Etica medica.doc",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N24A1301206IN1").attr({
		"class": "code p-code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/esquema protocolo de investigacion.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("a").eq(1).html("Protocolo de Investigación").attr({
		title: "Descarga Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/esquema protocolo de investigacion.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2").find("td").eq(3).html("2017N24A1301206IN2").attr({
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
		title: " Descarga Guía de Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/a068d2_Guía_para_la_elaboración_del_protocolo.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Guía de Protocolo de Investigación").attr({
		title: "Descarga Guía de Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/a068d2_Guía_para_la_elaboración_del_protocolo.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N24A1301206IN3").attr({
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
		title: " Descarga Guía de ensayo para Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/Guía_para_elaborar_un_Ensayo.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Guía de ensayo para Protocolo de Investigación").attr({
		title: "Descarga Guía de ensayo para Protocolo de Investigación",
		href: "medicinaresources_staticfiles/salud/investigacion/clases/Guía_para_elaborar_un_Ensayo.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N24A1301206IN4").attr({
		"class": "code p-code",
	});
	//head2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "p-heads",
		//"style": "background-color: #a47c48;",
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Resumenes Modulo de Investigación</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 5
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "rowh1",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$(".rowh1").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri 1-11",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/1-Resumen de Sampieri1-11.doc",
		"class": "aml-anat p-kreon",
	});
	$(".rowh1").find("a").eq(1).html("Resumen Sampieri 1-11").attr({
		title: "Descargar Resumen Sampieri 1-11",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/1-Resumen de Sampieri1-11.doc",
		"class": "aml-anat p-kreon",
	});
	$(".rowh1").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".rowh1").find("td").eq(3).html("2017N24A1301206IN5").attr({
		"class": "code p-code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".rowh6").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri 1-10",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/2-Resumen Sampieri 1-10.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh6").find("a").eq(1).html("Resumen Sampieri 1-10").attr({
		title: "Descargar Resumen Sampieri 1-10",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/2-Resumen Sampieri 1-10.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".rowh6").find("td").eq(3).html("2017N24A1301206IN6").attr({
		"class": "code p-code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".rowh7").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri Capítulo 1",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Capitulo 1.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh7").find("a").eq(1).html("Resumen Sampieri Capítulo 1").attr({
		title: "Descargar Resumen Sampieri Capítulo 1",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Capitulo 1.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".rowh7").find("td").eq(3).html("2017N24A1301206IN7").attr({
		"class": "code p-code",
	});
	//row 8 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".rowh8").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri Capítulo 2",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Planteamiento del problema cuantitativo.pptx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh8").find("a").eq(1).html("Resumen Sampieri Capítulo 2").attr({
		title: "Descargar Resumen Sampieri Capítulo 2",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Planteamiento del problema cuantitativo.pptx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".rowh8").find("td").eq(3).html("2017N24A1301206IN8").attr({
		"class": "code p-code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".rowh9").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri Capítulo 9",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/presentacion-capitulo-9-1.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".rowh9").find("a").eq(1).html("Resumen Sampieri Capítulo 9").attr({
		title: "Descargar Resumen Sampieri Capítulo 9",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/presentacion-capitulo-9-1.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".rowh9").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".rowh9").find("td").eq(3).html("2017N24A1301206IN9").attr({
		"class": "code p-code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".rowh10").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri Capítulo 1-9",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Resumen Sampieri 1-9.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh10").find("a").eq(1).html("Resumen Sampieri Capítulo 1-9").attr({
		title: "Descargar Resumen Sampieri Capítulo 1-9",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Resumen Sampieri 1-9.docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh10").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".rowh10").find("td").eq(3).html("2017N24A1301206IN10").attr({
		"class": "code p-code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "rowh11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".rowh11").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen Sampieri Capítulo 3",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Resumen Sampieri..docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh11").find("a").eq(1).html("Resumen Sampieri Capítulo 3").attr({
		title: "Descargar Resumen Sampieri Capítulo 3",
		href: "medicinaresources_staticfiles/salud/investigacion/resumenes/Resumen Sampieri..docx",
		"class": "aml-anat p-kreon",
	});
	$(".rowh11").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".rowh11").find("td").eq(3).html("2017N24A1301206IN11").attr({
		"class": "code p-code",
	});
})