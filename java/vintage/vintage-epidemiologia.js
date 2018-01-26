$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_epide.html
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
	$(".aml-body").find("p").eq(0).html("La epidemiología, palabra derivada del griego epi (sobre) demos (pueblo) y logos (ciencia), es una disciplina científica en el área de la biología y medicina que estudia la distribución, frecuencia, factores determinantes, predicciones y control de los factores relacionados con la salud y las enfermedades existentes en poblaciones humanas definidas. Más sencillamente Rich la describió acertadamente en 1979 como la ciencia que estudia la dinámica de salud en las poblaciones. El médico especializado en epidemiología se llama epidemiólogo.").attr({
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
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Clases del Modulo de Epidemiología</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Clase de Realidad Nacional",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/d71b7c_Realidad_Nacional_de_Guatemala._2014-15.ppt",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Realidad Nacional").attr({
		title: "Descargar Clase de Realidad Nacional",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/d71b7c_Realidad_Nacional_de_Guatemala._2014-15.ppt",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N22A1301206CE1").attr({
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
		title: " Descarga Clase MOPECE Capítulo 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 3.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("a").eq(1).html("MOPECE Capítulo 3").attr({
		title: "Descarga Clase MOPECE Capítulo 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 3.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2srl").find("td").eq(3).html("2017N22A1301206CE2").attr({
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
		title: " Descarga Clase MOPECE Capítulo 4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 4.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("MOPECE Capítulo 4").attr({
		title: "Descarga Clase MOPECE Capítulo 4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 4.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N22A1301206CE3").attr({
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
		title: " Descarga Clase MOPECE Capítulo 5",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 5.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("MOPECE Capítulo 5").attr({
		title: "Descarga Clase MOPECE Capítulo 5",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/MOPECE 5.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N22A1301206CE4").attr({
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
		title: " Descarga Glsario de Epidemiología",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/Glosario.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Glsario de Epidemiología").attr({
		title: "Descarga Glsario de Epidemiología",
		href: "medicinaresources_staticfiles/salud/epidemiologia/clases/Glosario.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017N22A1301206CE5").attr({
		"class": "code p-code",
	});
	//head 2
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "p-heads head2",
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Resumenes del Modulo de Epidemiología</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",
	});
	//row 6
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "trow2",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$(".trow2").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Resumen de Realidad Nacional",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/0-Realidad Nacional.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow2").find("a").eq(1).html("Realidad Nacional 22").attr({
		title: "Descargar Resumen de Realidad Nacional",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/0-Realidad Nacional.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow2").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".trow2").find("td").eq(3).html("2017N22A1301206CE6").attr({
		"class": "code p-code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow7").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 1",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/1-MOPECE 1.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow7").find("a").eq(1).html("MOPECE Capítulo 1").attr({
		title: "Descarga Resumen MOPECE Capítulo 1",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/1-MOPECE 1.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow7").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".trow7").find("td").eq(3).html("2017N22A1301206CE7").attr({
		"class": "code p-code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow8").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/2-MOPECE 2.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".trow8").find("a").eq(1).html("MOPECE Capítulo 2").attr({
		title: "Descarga Resumen MOPECE Capítulo 2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/2-MOPECE 2.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".trow8").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".trow8").find("td").eq(3).html("2017N22A1301206CE8").attr({
		"class": "code p-code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow9").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/3-MOPECE 3.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow9").find("a").eq(1).html("MOPECE Capítulo 3").attr({
		title: "Descarga Resumen MOPECE Capítulo 3",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/3-MOPECE 3.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow9").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".trow9").find("td").eq(3).html("2017N22A1301206CE9").attr({
		"class": "code p-code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow10").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/4-MOPECE 4.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow10").find("a").eq(1).html("MOPECE Capítulo 4").attr({
		title: "Descarga Resumen MOPECE Capítulo 4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/4-MOPECE 4.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow10").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".trow10").find("td").eq(3).html("2017N22A1301206CE10").attr({
		"class": "code p-code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow11").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 5",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/5-MOPECE 5.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow11").find("a").eq(1).html("MOPECE Capítulo 5").attr({
		title: "Descarga Resumen MOPECE Capítulo 5",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/5-MOPECE 5.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow11").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".trow11").find("td").eq(3).html("2017N22A1301206CE11").attr({
		"class": "code p-code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow12").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 5-2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/6-MOPECE 5L2.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow12").find("a").eq(1).html("MOPECE Capítulo 5-2").attr({
		title: "Descarga Resumen MOPECE Capítulo 5-2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/6-MOPECE 5L2.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow12").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".trow12").find("td").eq(3).html("2017N22A1301206CE12").attr({
		"class": "code p-code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow13",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow13").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 6",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/7-MOPECE6.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow13").find("a").eq(1).html("MOPECE Capítulo 6").attr({
		title: "Descarga Resumen MOPECE Capítulo 6",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/7-MOPECE6.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow13").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".trow13").find("td").eq(3).html("2017N22A1301206CE13").attr({
		"class": "code p-code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow14",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow14").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 6-2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/Mopece 6 cuestionario.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow14").find("a").eq(1).html("MOPECE Capítulo 6-2").attr({
		title: "Descarga Resumen MOPECE Capítulo 6-2",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/Mopece 6 cuestionario.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow14").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".trow14").find("td").eq(3).html("2017N22A1301206CE14").attr({
		"class": "code p-code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow15").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen MOPECE Capítulo 1-4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/8-MOPECE 1-4.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow15").find("a").eq(1).html("MOPECE Capítulo 1-4").attr({
		title: "Descarga Resumen MOPECE Capítulo 1-4",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/8-MOPECE 1-4.docx",
		"class": "aml-anat p-kreon",
	});
	$(".trow15").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".trow15").find("td").eq(3).html("2017N22A1301206CE15").attr({
		"class": "code p-code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow16").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Salud y Enfermedad",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/11-Salud y enfermedad en la poblacion.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow16").find("a").eq(1).html("Salud y Enfermedad").attr({
		title: "Descarga Resumen Salud y Enfermedad",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/11-Salud y enfermedad en la poblacion.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow16").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".trow16").find("td").eq(3).html("2017N22A1301206CE16").attr({
		"class": "code p-code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #a47c48;",
	});
	$(".trow17").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Salud y Enfermedad",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/11-Salud y enfermedad en la poblacion.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow17").find("a").eq(1).html("Salud y Enfermedad").attr({
		title: "Descarga Resumen Salud y Enfermedad",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/11-Salud y enfermedad en la poblacion.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow17").find("td").eq(2).html("12").attr({
		"class": "p-kreon",
	});
	$(".trow17").find("td").eq(3).html("2017N22A1301206CE17").attr({
		"class": "code p-code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": ".trow2",
		"class": "trow18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #a47c48;",
	});
	$(".trow18").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Control de enfermedades",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/principios epidemiologico para el control de enfermedades.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow18").find("a").eq(1).html("Control de Enfermedades").attr({
		title: "Descarga Resumen Control de enfermedades",
		href: "medicinaresources_staticfiles/salud/epidemiologia/resumenes/principios epidemiologico para el control de enfermedades.doc",
		"class": "aml-anat p-kreon",
	});
	$(".trow18").find("td").eq(2).html("13").attr({
		"class": "p-kreon",
	});
	$(".trow18").find("td").eq(3).html("2017N22A1301206CE18").attr({
		"class": "code p-code",
	});
})