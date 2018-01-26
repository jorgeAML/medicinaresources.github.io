$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_laminillas2.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Segundo examen de laminillas.").attr({
		title: "Descargar Documentos para examen de laminillas parte 2",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas parte 2.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Segundo examen de Laminillas</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Segundo Repaso de Laminillas 1",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.0.docx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Segundo Repaso de Laminillas 1").attr({
		title: "Descarga Segundo Repaso de Laminillas 1",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.0.docx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("32");
	$("tbody").find("td").eq(3).html("2016S10A202PRESRL1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 2",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.1.docx",
		"class": "cap-a",
	});
	$(".row2srl").find("a").eq(1).html("Segundo Repaso de Laminillas 2").attr({
		title: "Descarga Segundo Repaso de Laminillas 2",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.1.docx",
		"class": "cap-b",
	});
	$(".row2srl").find("td").eq(2).html("32");
	$(".row2srl").find("td").eq(3).html("2016S10A202PRESRL2").attr({
		"class": "code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 3",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.2.docx.pdf",
		"class": "cap-a",
	});
	$(".row3srl").find("a").eq(1).html("Segundo Repaso de Laminillas 3").attr({
		title: "Descarga Segundo Repaso de Laminillas 3",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.2.docx.pdf",
		"class": "cap-b",
	});
	$(".row3srl").find("td").eq(2).html("32");
	$(".row3srl").find("td").eq(3).html("2016S10A202PRESRL3").attr({
		"class": "code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 4",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminllas 2 V0.3.doc",
		"class": "cap-a",
	});
	$(".row4srl").find("a").eq(1).html("Segundo Repaso de Laminillas 4").attr({
		title: "Descarga Segundo Repaso de Laminillas 4",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminllas 2 V0.3.doc",
		"class": "cap-b",
	});
	$(".row4srl").find("td").eq(2).html("32");
	$(".row4srl").find("td").eq(3).html("2016S10A202PRESRL4").attr({
		"class": "code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 5",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.4.docx",
		"class": "cap-a",
	});
	$(".row5srl").find("a").eq(1).html("Segundo Repaso de Laminillas 5").attr({
		title: "Descarga Segundo Repaso de Laminillas 5",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.4.docx",
		"class": "cap-b",
	});
	$(".row5srl").find("td").eq(2).html("32");
	$(".row5srl").find("td").eq(3).html("2016S10A202PRESRL5").attr({
		"class": "code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 6",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.5.pdf",
		"class": "cap-a",
	});
	$(".row6srl").find("a").eq(1).html("Segundo Repaso de Laminillas 6").attr({
		title: "Descarga Segundo Repaso de Laminillas 6",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.5.pdf",
		"class": "cap-b",
	});
	$(".row6srl").find("td").eq(2).html("32");
	$(".row6srl").find("td").eq(3).html("2016S10A202PRESRL6").attr({
		"class": "code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 7",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.6.pdf",
		"class": "cap-a",
	});
	$(".row7srl").find("a").eq(1).html("Segundo Repaso de Laminillas 7").attr({
		title: "Descarga Segundo Repaso de Laminillas 7",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.6.pdf",
		"class": "cap-b",
	});
	$(".row7srl").find("td").eq(2).html("32");
	$(".row7srl").find("td").eq(3).html("2016S10A202PRESRL7").attr({
		"class": "code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row8srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 8",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.7.pdf",
		"class": "cap-a",
	});
	$(".row8srl").find("a").eq(1).html("Segundo Repaso de Laminillas 8").attr({
		title: "Descarga Segundo Repaso de Laminillas 8",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.7.pdf",
		"class": "cap-b",
	});
	$(".row8srl").find("td").eq(2).html("32");
	$(".row8srl").find("td").eq(3).html("2016S10A202PRESRL8").attr({
		"class": "code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row9srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Segundo Repaso de Laminillas 9",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.8 Sofia.pdf",
		"class": "cap-a",
	});
	$(".row9srl").find("a").eq(1).html("Segundo Repaso de Laminillas 9").attr({
		title: "Descarga Segundo Repaso de Laminillas 9",
		href: "medicinaresources_staticfiles/histologia/laminillasp2/Laminillas 2 V0.8 Sofia.pdf",
		"class": "cap-b",
	});
	$(".row9srl").find("td").eq(2).html("32");
	$(".row9srl").find("td").eq(3).html("2016S10A202PRESRL9").attr({
		"class": "code",
	});
	//end
})