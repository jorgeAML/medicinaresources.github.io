$(document).ready(function () {
			////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_laminillas1.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Primer examen de laminillas.").attr({
		title: "Descargar Documentos para examen de laminillas parte 1.",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas parte 1.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Primer examen de Laminillas</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Repaso de Laminillas 1",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas (2).docx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Repaso de Laminillas 1").attr({
		title: "Descarga Repaso de Laminillas 1",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas (2).docx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("19");
	$("tbody").find("td").eq(3).html("2016S10A202PRERL1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 2",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas (3).docx",
		"class": "cap-a",
	});
	$(".row2rl").find("a").eq(1).html("Repaso de Laminillas 2").attr({
		title: "Descarga Repaso de Laminillas 2",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas (3).docx",
		"class": "cap-b",
	});
	$(".row2rl").find("td").eq(2).html("19");
	$(".row2rl").find("td").eq(3).html("2016S10A202PRERL2").attr({
		"class": "code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 3",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 1 (descripcion).pdf",
		"class": "cap-a",
	});
	$(".row3rl").find("a").eq(1).html("Repaso de Laminillas 3").attr({
		title: "Descarga Repaso de Laminillas 3",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 1 (descripcion).pdf",
		"class": "cap-b",
	});
	$(".row3rl").find("td").eq(2).html("19");
	$(".row3rl").find("td").eq(3).html("2016S10A202PRESP3").attr({
		"class": "code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 4",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 1 V0.3.pdf",
		"class": "cap-a",
	});
	$(".row4rl").find("a").eq(1).html("Repaso de Laminillas 4").attr({
		title: "Descarga Repaso de Laminillas 4",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 1 V0.3.pdf",
		"class": "cap-b",
	});
	$(".row4rl").find("td").eq(2).html("19");
	$(".row4rl").find("td").eq(3).html("2016S10A202PRESP4").attr({
		"class": "code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 5",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 2013 V0.4.pdf",
		"class": "cap-a",
	});
	$(".row5rl").find("a").eq(1).html("Repaso de Laminillas 5").attr({
		title: "Descarga Repaso de Laminillas 5",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas 2013 V0.4.pdf",
		"class": "cap-b",
	});
	$(".row5rl").find("td").eq(2).html("19");
	$(".row5rl").find("td").eq(3).html("2016S10A202PRESP5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 6",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas HistologíaV0.5.pdf",
		"class": "cap-a",
	});
	$(".row6rl").find("a").eq(1).html("Repaso de Laminillas 6").attr({
		title: "Descarga Repaso de Laminillas 6",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas HistologíaV0.5.pdf",
		"class": "cap-b",
	});
	$(".row6rl").find("td").eq(2).html("19");
	$(".row6rl").find("td").eq(3).html("2016S10A202PRESP6").attr({
		"class": "code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7rl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7rl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Repaso de Laminillas 7",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas Primera ParteV0.6.docx",
		"class": "cap-a",
	});
	$(".row7rl").find("a").eq(1).html("Repaso de Laminillas 7").attr({
		title: "Descarga Repaso de Laminillas 7",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/Laminillas Primera ParteV0.6.docx",
		"class": "cap-b",
	});
	$(".row7rl").find("td").eq(2).html("19");
	$(".row7rl").find("td").eq(3).html("2016S10A202PRESP7").attr({
		"class": "code",
	});
	//div photos
	$("<div/>", {
		href: "histo_laminillas1.html",
		"appendTo": ".col-md-6",
		"insertAfter": ".table-responsive",
		html: "<h3/><p><a/></p>",
		"class": "mode-night rl8",
	});
	$(".rl8").find("h3").eq(0).html("Descarga fotos para Repaso de Laminillas 1");
	$(".rl8").find("a").eq(0).html("<i class='icon-download-alt'></i> 71 fotos para repasar cortes histologicos desde la semana 3 - 18").attr({
		"class": "cap-b",
		href: "medicinaresources_staticfiles/histologia/laminillasp1/fotosparte1/Fotos laminillasparte1.zip",
		title: "Fotos para Repasar laminillas",
	});
})