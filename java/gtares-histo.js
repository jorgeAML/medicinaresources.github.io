$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_resumenes.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Resumenes 2016.").attr({
		title: "Descargar Resumenes 2016.",
		href: "medicinaresources_staticfiles/histologia/resumenes/resumenes.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Resumenes de histología</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Resumen del Dr. Morataya",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen de Histología. Dr. Morataya.docx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Resumen del Dr. Morataya Word").attr({
		title: "Descarga Resumen del Dr. Morataya",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen de Histología. Dr. Morataya.docx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1");
	$("tbody").find("td").eq(3).html("2016S10A202PRERH1").attr({
		"class": "code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen del Dr. Ross",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen Histología de Ross.pdf",
		"class": "cap-a",
	});
	$(".row2rh").find("a").eq(1).html("Resumen del Dr. Ross").attr({
		title: "Descarga Resumen del Dr. Ross",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen Histología de Ross.pdf",
		"class": "cap-b",
	});
	$(".row2rh").find("td").eq(2).html("1");
	$(".row2rh").find("td").eq(3).html("2016S10A202PRERH2").attr({
		"class": "code",
	});
	//row 3	
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen 1er parcial del Dr. Morataya",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen primer parcial de histologia - Dr.  Morataya[1].pdf",
		"class": "cap-a",
	});
	$(".row3rh").find("a").eq(1).html("Resumen 1er parcial del Dr. Morataya").attr({
		title: "Descarga Resumen 1er parcial del Dr. Morataya",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen primer parcial de histologia - Dr.  Morataya[1].pdf",
		"class": "cap-b",
	});
	$(".row3rh").find("td").eq(2).html("1");
	$(".row3rh").find("td").eq(3).html("2016S10A202PRERH3").attr({
		"class": "code",
	});	
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen para 1er Parcial",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen primer parcial de histologia.pdf",
		"class": "cap-a",
	});
	$(".row4rh").find("a").eq(1).html("Resumen para 1er Parcial").attr({
		title: "Descarga Resumen para 1er Parcial",
		href: "medicinaresources_staticfiles/histologia/resumenes/R0 Resumen primer parcial de histologia.pdf",
		"class": "cap-b",
	});
	$(".row4rh").find("td").eq(2).html("1");
	$(".row4rh").find("td").eq(3).html("2016S10A202PRERH4").attr({
		"class": "code",
	});	
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Embriología",
		href: "medicinaresources_staticfiles/histologia/resumenes/R1 Embriología Repaso.pdf",
		"class": "cap-a",
	});
	$(".row5rh").find("a").eq(1).html("Resumen de Embriología").attr({
		title: "Descarga Resumen de Embriología",
		href: "medicinaresources_staticfiles/histologia/resumenes/R1 Embriología Repaso.pdf",
		"class": "cap-b",
	});
	$(".row5rh").find("td").eq(2).html("1");
	$(".row5rh").find("td").eq(3).html("2016S10A202PRERH5").attr({
		"class": "code",
	});	
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Embriología Semanas 1 - 3",
		href: "medicinaresources_staticfiles/histologia/resumenes/R2 Embriología Semana 1.docx",
		"class": "cap-a",
	});
	$(".row6rh").find("a").eq(1).html("Resumen de Embriología Semanas 1 - 3").attr({
		title: "Descarga Resumen de Embriología Semanas 1 - 3",
		href: "medicinaresources_staticfiles/histologia/resumenes/R2 Embriología Semana 1.docx",
		"class": "cap-b",
	});
	$(".row6rh").find("td").eq(2).html("1");
	$(".row6rh").find("td").eq(3).html("2016S10A202PRERH6").attr({
		"class": "code",
	});	
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Embriología Semanas 4 - 8",
		href: "medicinaresources_staticfiles/histologia/resumenes/R3 Embriología Semana 2.docx",
		"class": "cap-a",
	});
	$(".row7rh").find("a").eq(1).html("Resumen de Embriología Semanas 4 - 8").attr({
		title: "Descarga Resumen de Embriología Semanas 4 - 8",
		href: "medicinaresources_staticfiles/histologia/resumenes/R3 Embriología Semana 2.docx",
		"class": "cap-b",
	});
	$(".row7rh").find("td").eq(2).html("2");
	$(".row7rh").find("td").eq(3).html("2016S10A202PRERH7").attr({
		"class": "code",
	});	
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row8rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Embriología Semanas 1 - 8",
		href: "medicinaresources_staticfiles/histologia/resumenes/R4 Semanas Embrionarias.docx",
		"class": "cap-a",
	});
	$(".row8rh").find("a").eq(1).html("Resumen de Embriología Semanas 1 - 8").attr({
		title: "Descarga Resumen de Embriología Semanas 1 - 8",
		href: "medicinaresources_staticfiles/histologia/resumenes/R4 Semanas Embrionarias.docx",
		"class": "cap-b",
	});
	$(".row8rh").find("td").eq(2).html("2");
	$(".row8rh").find("td").eq(3).html("2016S10A202PRERH8").attr({
		"class": "code",
	});	
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row9rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Problemas de Embriología Capítulo 2",
		href: "medicinaresources_staticfiles/histologia/resumenes/R5 Jorge Problemas_cap_2.docx",
		"class": "cap-a",
	});
	$(".row9rh").find("a").eq(1).html("Problemas de Embriología Capítulo 2").attr({
		title: "Descarga Problemas de Embriología Capítulo 2",
		href: "medicinaresources_staticfiles/histologia/resumenes/R5 Jorge Problemas_cap_2.docx",
		"class": "cap-b",
	});
	$(".row9rh").find("td").eq(2).html("2");
	$(".row9rh").find("td").eq(3).html("2016S10A202PRERH9").attr({
		"class": "code",
	});	
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row10rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen General de Histología",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 2 Resumen Histo Todo.docx",
		"class": "cap-a",
	});
	$(".row10rh").find("a").eq(1).html("Resumen General de Histología").attr({
		title: "Descarga Resumen General de Histología",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 2 Resumen Histo Todo.docx",
		"class": "cap-b",
	});
	$(".row10rh").find("td").eq(2).html("1-30");
	$(".row10rh").find("td").eq(3).html("2016S10A202PRERH10").attr({
		"class": "code",
	});	
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row11rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row11rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 3 Tejido Epitelial..docx",
		"class": "cap-a",
	});
	$(".row11rh").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Resumen Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 3 Tejido Epitelial..docx",
		"class": "cap-b",
	});
	$(".row11rh").find("td").eq(2).html("3");
	$(".row11rh").find("td").eq(3).html("2016S10A202PRERH11").attr({
		"class": "code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row12rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row12rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 4 Tejido Conectivo.docx",
		"class": "cap-a",
	});
	$(".row12rh").find("a").eq(1).html("Tejido Conectivo").attr({
		title: "Descarga Resumen Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 4 Tejido Conectivo.docx",
		"class": "cap-b",
	});
	$(".row12rh").find("td").eq(2).html("4");
	$(".row12rh").find("td").eq(3).html("2016S10A202PRERH12").attr({
		"class": "code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row13rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row13rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 4 Tejido conjuntivo.docx",
		"class": "cap-a",
	});
	$(".row13rh").find("a").eq(1).html("Tejido Conjuntivo").attr({
		title: "Descarga Resumen Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 4 Tejido conjuntivo.docx",
		"class": "cap-b",
	});
	$(".row13rh").find("td").eq(2).html("4");
	$(".row13rh").find("td").eq(3).html("2016S10A202PRERH13").attr({
		"class": "code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row14rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row14rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 5 resumen tejido muscular.docx",
		"class": "cap-a",
	});
	$(".row14rh").find("a").eq(1).html("Tejido Muscular").attr({
		title: "Descarga Resumen Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 5 resumen tejido muscular.docx",
		"class": "cap-b",
	});
	$(".row14rh").find("td").eq(2).html("5");
	$(".row14rh").find("td").eq(3).html("2016S10A202PRERH14").attr({
		"class": "code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row15rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Piel y sus Anexos",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 7 Piel y anexos.docx",
		"class": "cap-a",
	});
	$(".row15rh").find("a").eq(1).html("Piel y sus Anexos").attr({
		title: "Descarga Resumen Piel y sus Anexos",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 7 Piel y anexos.docx",
		"class": "cap-b",
	});
	$(".row15rh").find("td").eq(2).html("7");
	$(".row15rh").find("td").eq(3).html("2016S10A202PRERH15").attr({
		"class": "code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row16rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 9  Medula Espinal.pdf",
		"class": "cap-a",
	});
	$(".row16rh").find("a").eq(1).html("Médula Espinal").attr({
		title: "Descarga Resumen Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 9  Medula Espinal.pdf",
		"class": "cap-b",
	});
	$(".row16rh").find("td").eq(2).html("8");
	$(".row16rh").find("td").eq(3).html("2016S10A202PRERH16").attr({
		"class": "code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row17rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebelo y Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 10 Cerebelo.docx",
		"class": "cap-a",
	});
	$(".row17rh").find("a").eq(1).html("Cerebelo y Plexos Coroideos").attr({
		title: "Descarga Resumen Cerebelo y Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 10 Cerebelo.docx",
		"class": "cap-b",
	});
	$(".row17rh").find("td").eq(2).html("9");
	$(".row17rh").find("td").eq(3).html("2016S10A202PRERH17").attr({
		"class": "code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row18rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Ojo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 12 Ojo.docx",
		"class": "cap-a",
	});
	$(".row18rh").find("a").eq(1).html("Ojo").attr({
		title: "Descarga Resumen Ojo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 12 Ojo.docx",
		"class": "cap-b",
	});
	$(".row18rh").find("td").eq(2).html("12");
	$(".row18rh").find("td").eq(3).html("2016S10A202PRERH18").attr({
		"class": "code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row19rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row19rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Oido",
		href: "medicinaresources_staticfiles/histologia/resumenes/semana 13 Oído.docx",
		"class": "cap-a",
	});
	$(".row19rh").find("a").eq(1).html("Oido").attr({
		title: "Descarga Resumen Oido",
		href: "medicinaresources_staticfiles/histologia/resumenes/semana 13 Oído.docx",
		"class": "cap-b",
	});
	$(".row19rh").find("td").eq(2).html("13");
	$(".row19rh").find("td").eq(3).html("2016S10A202PRERH19").attr({
		"class": "code",
	});
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row20rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row20rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sangre y Hematopoyesis",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 17 Tejido Sanguíneo..docx",
		"class": "cap-a",
	});
	$(".row20rh").find("a").eq(1).html("Sangre y Hematopoyesis").attr({
		title: "Descarga Resumen Sangre y Hematopoyesis",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 17 Tejido Sanguíneo..docx",
		"class": "cap-b",
	});
	$(".row20rh").find("td").eq(2).html("14");
	$(".row20rh").find("td").eq(3).html("2016S10A202PRERH20").attr({
		"class": "code",
	});
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row21rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row21rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Frote Sanguineo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 17 Frote Sanguineo.pdf",
		"class": "cap-a",
	});
	$(".row21rh").find("a").eq(1).html("Frote Sanguineo").attr({
		title: "Descarga Resumen Frote Sanguineo",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 17 Frote Sanguineo.pdf",
		"class": "cap-b",
	});
	$(".row21rh").find("td").eq(2).html("14");
	$(".row21rh").find("td").eq(3).html("2016S10A202PRERH21").attr({
		"class": "code",
	});
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row22rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row22rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 16 Sistema Cardiovascular..docx",
		"class": "cap-a",
	});
	$(".row22rh").find("a").eq(1).html("Aparato Cardiovascular").attr({
		title: "Descarga Resumen Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 16 Sistema Cardiovascular..docx",
		"class": "cap-b",
	});
	$(".row22rh").find("td").eq(2).html("15");
	$(".row22rh").find("td").eq(3).html("2016S10A202PRERH22").attr({
		"class": "code",
	});
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row23rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row23rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 15 Aparato Respiratorio.docx",
		"class": "cap-a",
	});
	$(".row23rh").find("a").eq(1).html("Aparato Respiratorio").attr({
		title: "Descarga Resumen Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 15 Aparato Respiratorio.docx",
		"class": "cap-b",
	});
	$(".row23rh").find("td").eq(2).html("16");
	$(".row23rh").find("td").eq(3).html("2016S10A202PRERH23").attr({
		"class": "code",
	});
	//row 24
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row24rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row24rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Embriología Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 15 embrio respiratorio.docx",
		"class": "cap-a",
	});
	$(".row24rh").find("a").eq(1).html("Embriología del Aparato Respiratorio").attr({
		title: "Descarga Embriología Resumen Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 15 embrio respiratorio.docx",
		"class": "cap-b",
	});
	$(".row24rh").find("td").eq(2).html("16");
	$(".row24rh").find("td").eq(3).html("2016S10A202PRERH24").attr({
		"class": "code",
	});
	//row 25 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row25rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row25rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 18 Sistema linfático 2.docx",
		"class": "cap-a",
	});
	$(".row25rh").find("a").eq(1).html("Órganos Linfoides").attr({
		title: "Descarga Órganos Linfoides",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 18 Sistema linfático 2.docx",
		"class": "cap-b",
	});
	$(".row25rh").find("td").eq(2).html("17");
	$(".row25rh").find("td").eq(3).html("2016S10A202PRERH25").attr({
		"class": "code",
	});
	//row 26
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row26rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row26rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Boca y Glándulas salivales",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 20 boca.docx",
		"class": "cap-a",
	});
	$(".row26rh").find("a").eq(1).html("Boca y Glándulas salivales").attr({
		title: "Descarga Boca y Glándulas salivales",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 20 boca.docx",
		"class": "cap-b",
	});
	$(".row26rh").find("td").eq(2).html("20");
	$(".row26rh").find("td").eq(3).html("2016S10A202PRERH26").attr({
		"class": "code",
	});
	//row 27
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row27rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row27rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Páncreas",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 24 pancreas.docx",
		"class": "cap-a",
	});
	$(".row27rh").find("a").eq(1).html("Páncreas").attr({
		title: "Descarga Páncreas",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 24 pancreas.docx",
		"class": "cap-b",
	});
	$(".row27rh").find("td").eq(2).html("24");
	$(".row27rh").find("td").eq(3).html("2016S10A202PRERH27").attr({
		"class": "code",
	});
	//row 28
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row28rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row28rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 26Sistema Endocrino..docx",
		"class": "cap-a",
	});
	$(".row28rh").find("a").eq(1).html("Sistema Endocrino").attr({
		title: "Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 26Sistema Endocrino..docx",
		"class": "cap-b",
	});
	$(".row28rh").find("td").eq(2).html("26");
	$(".row28rh").find("td").eq(3).html("2016S10A202PRERH28").attr({
		"class": "code",
	});
	//row 29
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row29rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row29rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 27 Sistema Genital Masculino.docx",
		"class": "cap-a",
	});
	$(".row29rh").find("a").eq(1).html("Aparato Reproductor Masculino").attr({
		title: "Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 27 Sistema Genital Masculino.docx",
		"class": "cap-b",
	});
	$(".row29rh").find("td").eq(2).html("27");
	$(".row29rh").find("td").eq(3).html("2016S10A202PRERH29").attr({
		"class": "code",
	});
	//row 30
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row30rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row30rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Femenino 1",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 28 Sistema Genital Femenino I.docx",
		"class": "cap-a",
	});
	$(".row30rh").find("a").eq(1).html("Aparato Reproductor Femenino 1").attr({
		title: "Descarga Aparato Reproductor Femenino 1",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 28 Sistema Genital Femenino I.docx",
		"class": "cap-b",
	});
	$(".row30rh").find("td").eq(2).html("28");
	$(".row30rh").find("td").eq(3).html("2016S10A202PRERH30").attr({
		"class": "code",
	});
	//row 31
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row31rh",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row31rh").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Femenino 2",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 29 Sistema Genital Femenino II.docx",
		"class": "cap-a",
	});
	$(".row31rh").find("a").eq(1).html("Aparato Reproductor Femenino 2").attr({
		title: "Descarga Aparato Reproductor Femenino 2",
		href: "medicinaresources_staticfiles/histologia/resumenes/Semana 29 Sistema Genital Femenino II.docx",
		"class": "cap-b",
	});
	$(".row31rh").find("td").eq(2).html("29");
	$(".row31rh").find("td").eq(3).html("2016S10A202PRERH31").attr({
		"class": "code",
	});
	//end
});