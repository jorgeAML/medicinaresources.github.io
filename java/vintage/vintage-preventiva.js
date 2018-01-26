$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_preven.html
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
	$(".aml-body").find("p").eq(0).html("La medicina preventiva y salud pública es la especialidad médica que da lugar a actividades y políticas de promoción y protección de la salud; además de la vigilancia de la salud de la población, de la identificación de sus necesidades sanitarias y de la planificación, gestión y evaluación de los servicios sanitarios. Su objetivo es reducir la probabilidad de la aparición de la enfermedad, o impedir o controlar su progresión.").attr({
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
		html: "<tr><th style='color: #d7c797;'>Descargar</th><th style='color: #f9fafc;'>Modulo de Salud Preventiva en Epidemiología</th><th style='color: #d7c797;'>Semana</th><th style='color: #f9fafc;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #a47c48;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Atención primaria en Salud.",
		href: "medicinaresources_staticfiles/salud/preventiva/Atencion Primaria en Salud y Educacion en Salud.pptx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Atención primaria en Salud.").attr({
		title: "Descargar Atención primaria en Salud.",
		href: "medicinaresources_staticfiles/salud/preventiva/Atencion Primaria en Salud y Educacion en Salud.pptx",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N24A1301206SP1").attr({
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
		title: " Descarga Clase de Liderazgo",
		href: "medicinaresources_staticfiles/salud/preventiva/Liderazgo.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("a").eq(1).html("Clase de Liderazgo").attr({
		title: "Descarga Clase de Liderazgo",
		href: "medicinaresources_staticfiles/salud/preventiva/Liderazgo.ppt",
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
		title: " Descarga Clase de Educación en salud",
		href: "medicinaresources_staticfiles/salud/preventiva/fwdeducacionensalud.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Clase de Educación en salud").attr({
		title: "Descarga Clase de Educación en salud",
		href: "medicinaresources_staticfiles/salud/preventiva/fwdeducacionensalud.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N24A1301206SP3").attr({
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
		title: " Descarga Clase de fiebre amarilla",
		href: "medicinaresources_staticfiles/salud/preventiva/VACUNA CONTRA FIEBRE AMARILLA.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Clase de fiebre amarilla").attr({
		title: "Descarga Clase de fiebre amarilla",
		href: "medicinaresources_staticfiles/salud/preventiva/VACUNA CONTRA FIEBRE AMARILLA.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N24A1301206SP4").attr({
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
		title: " Descarga Clase de Medicina Preventiva",
		href: "medicinaresources_staticfiles/salud/preventiva/Medicina preventiva 5-6.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Clase de Medicina Preventiva").attr({
		title: "Descarga Clase de Medicina Preventiva",
		href: "medicinaresources_staticfiles/salud/preventiva/Medicina preventiva 5-6.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017N24A1301206SP5").attr({
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
		title: " Descarga Modelo SIAS",
		href: "medicinaresources_staticfiles/salud/preventiva/SIAS.pptx",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Modelo SIAS").attr({
		title: "Descarga Modelo SIAS",
		href: "medicinaresources_staticfiles/salud/preventiva/SIAS.pptx",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017N24A1301206SP6").attr({
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
		title: " Descarga Clase de vigilancia en Salud",
		href: "medicinaresources_staticfiles/salud/preventiva/Vigilancia en Salud Publica.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Clase de vigilancia en Salud").attr({
		title: "Descarga Clase de vigilancia en Salud",
		href: "medicinaresources_staticfiles/salud/preventiva/Vigilancia en Salud Publica.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017N24A1301206SP7").attr({
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
		title: " Descarga Clase de Antropología Médica",
		href: "medicinaresources_staticfiles/salud/preventiva/ADOLESCENCIA NORMAL.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Clase de Antropología Médica").attr({
		title: "Descarga Clase de Antropología Médica",
		href: "medicinaresources_staticfiles/salud/preventiva/ADOLESCENCIA NORMAL.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017N24A1301206SP8").attr({
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
		title: " Descarga Clase de Antropología Médica 2",
		href: "medicinaresources_staticfiles/salud/preventiva/FOTOS CASOS PEDIATRICOS HOSPITAL ROOSEVELT DR. JULIO JUAREZ.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("a").eq(1).html("Clase de Antropología Médica 2").attr({
		title: "Descarga Clase de Antropología Médica 2",
		href: "medicinaresources_staticfiles/salud/preventiva/FOTOS CASOS PEDIATRICOS HOSPITAL ROOSEVELT DR. JULIO JUAREZ.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".row9").find("td").eq(3).html("2017N24A1301206SP9").attr({
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
		title: " Descarga Clase de Medicina Alternativa",
		href: "medicinaresources_staticfiles/salud/preventiva/medicina alternativa.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("a").eq(1).html("Clase Medicina Alternativa").attr({
		title: "Descarga Clase de Medicina Alternativa",
		href: "medicinaresources_staticfiles/salud/preventiva/medicina alternativa.zip",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".row10").find("td").eq(3).html("2017N24A1301206SP10").attr({
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
		title: " Descarga Clase de ETS",
		href: "medicinaresources_staticfiles/salud/preventiva/ETS.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("a").eq(1).html("Clase de ETS").attr({
		title: "Descarga Clase de ETS",
		href: "medicinaresources_staticfiles/salud/preventiva/ETS.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".row11").find("td").eq(3).html("2017N24A1301206SP11").attr({
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
		title: " Descarga Clase de ETS 2",
		href: "medicinaresources_staticfiles/salud/preventiva/ITS.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("a").eq(1).html("Clase de ETS 2").attr({
		title: "Descarga Clase de ETS 2",
		href: "medicinaresources_staticfiles/salud/preventiva/ITS.ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("td").eq(2).html("12").attr({
		"class": "p-kreon",
	});
	$(".row12").find("td").eq(3).html("2017N24A1301206SP12").attr({
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
		title: " Descarga Clase de Estilos Salud Ambiental",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Ambiental..pptx",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("a").eq(1).html("Clase de Estilos Salud Ambiental").attr({
		title: "Descarga Clase de Estilos Salud Ambiental",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Ambiental..pptx",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("td").eq(2).html("13").attr({
		"class": "p-kreon",
	});
	$(".row13").find("td").eq(3).html("2017N24A1301206SP13").attr({
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
		title: " Descarga Clase de Saneamiento del Medio Ambiente",
		href: "medicinaresources_staticfiles/salud/preventiva/saneamiento del medio 12.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("a").eq(1).html("Clase de Saneamiento del Medio Ambiente").attr({
		title: "Descarga Clase de Saneamiento del Medio Ambiente",
		href: "medicinaresources_staticfiles/salud/preventiva/saneamiento del medio 12.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("td").eq(2).html("14").attr({
		"class": "p-kreon",
	});
	$(".row14").find("td").eq(3).html("2017N24A1301206SP14").attr({
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
		title: " Descarga Clase de Salud Mental",
		href: "medicinaresources_staticfiles/salud/preventiva/d52040_Informe_sobre_Sistema_de_Salud_Mental_Guatemala_2011.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("a").eq(1).html("Clase de Salud Mental").attr({
		title: "Descarga Clase de Salud Mental",
		href: "medicinaresources_staticfiles/salud/preventiva/d52040_Informe_sobre_Sistema_de_Salud_Mental_Guatemala_2011.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("td").eq(2).html("15").attr({
		"class": "p-kreon",
	});
	$(".row15").find("td").eq(3).html("2017N24A1301206SP15").attr({
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
		title: " Descarga Clase de Salud Mental 2",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Mental..ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("a").eq(1).html("Clase de Salud Mental 2").attr({
		title: "Descarga Clase de Salud Mental 2",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Mental..ppt",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("td").eq(2).html("16").attr({
		"class": "p-kreon",
	});
	$(".row16").find("td").eq(3).html("2017N24A1301206SP16").attr({
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
		title: " Descarga Clase de Salud Mental 3",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Mental.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("a").eq(1).html("Clase de Salud Mental 3").attr({
		title: "Descarga Clase de Salud Mental 3",
		href: "medicinaresources_staticfiles/salud/preventiva/Salud Mental.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("td").eq(2).html("17").attr({
		"class": "p-kreon",
	});
	$(".row17").find("td").eq(3).html("2017N24A1301206SP17").attr({
		"class": "code p-code",
	});
})