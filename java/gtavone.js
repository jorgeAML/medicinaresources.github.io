$(document).ready(function () {
	//window.onload = function() {
		//alert("Bienvenido a le sección de Histología.");
	//};
	$("<div/>", {
		href: "index_histo.html",
		//href: "histo_books.html",
		"appendTo": "#gtavidone",
		//"insertAfter": "#gtavidone",
		"class": "container-fluid",
		html: "<div class='row'><div class='col-sm-3 aml_banner'></div></div>",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".aml_banner",
		//"insertAfter": ".aml_banner",
		"class": "list-group-aml",
		html: "<a/><a/><a/><a/><a/><a/><a/><a/><a/><a/><a/>",
	});
	$(".list-group-aml").find("a").eq(0).html("Programación <span class='badge-aml'>21</span>").attr({
		title: "Programacion de Histología",
		href: "index_histo.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(1).html("Libros <span class='badge-aml'>5</span>").attr({
		title: "Libros de Histología",
		href: "histo_books.html",
		"class": "list-group-item-aml",
	});
	//Laboratorios
	$(".list-group-aml").find("a").eq(2).html("Guías de Estudio <span class='badge-aml'>27</span>").attr({
		title: "laboratorios de Histología",
		href: "histo_laboratorios.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(3).html("Presentaciones <span class='badge-aml'>22</span>").attr({
		title: "Presentaciones de Histología",
		href: "histo_present.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(4).html("Presentaciones Dra Miuril Lopez <span class='badge-aml'>38</span>").attr({
		title: "Clases de Histología de Miuril Lopez",
		href: "histo_miuril.html",
		"class": "list-group-item-aml",
	});	
	$(".list-group-aml").find("a").eq(5).html("Presentaciones Silvia <span class='badge-aml'>28</span>").attr({
		title: "Presentaciones de Silvia Histología",
		href: "histo_present_silvia.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(6).html("Resumenes <span class='badge-aml'>31</span>").attr({
		title: "Resumenes de Histología",
		href: "histo_resumenes.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(7).html("Resumenes de Sofia Pellecer <span class='badge-aml'>7</span>").attr({
		title: "Resumenes de Sofia Pellecer Histología",
		href: "histo_sofiapellecer.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(8).html("Laminillas parte 1 <span class='badge-aml'>7</span>").attr({
		title: "Fotos de laminillas de Histología",
		href: "histo_laminillas1.html",
		"class": "list-group-item-aml",
	});

	$(".list-group-aml").find("a").eq(9).html("Laminillas parte 2 <span class='badge-aml'>9</span>").attr({
		title: "Fotos de laminillas de Histología",
		href: "histo_laminillas2.html",
		"class": "list-group-item-aml",
	});
	$(".list-group-aml").find("a").eq(10).html("Parciales <span class='badge-aml'>11</span>").attr({
		title: "Parciales de Histología",
		href: "histo_examenes.html",
		"class": "list-group-item-aml",
	});
	////
	//////
	////////
	///////////AML panels navigations 
	////////
	//////
	////
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".list-group-aml",
		"class": "aml-panel",
		html: "<div class='aml-heading'><h1 class='aml-title'>Descargar</h1></div>",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".aml-panel",
		"insertAfter": ".aml-heading",
		"class": "aml-body",
		html: "<p><a/></p>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Programación 2016.").attr({
		title: "Descargar Programación 2016.",
		href: "medicinaresources_staticfiles/histologia/programacion/Programacionhistologia.zip",
		"class": "aml-anat",
	});
	////
	//////
	////////
	/////////// AML mode night 
	////////
	//////
	////
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".aml-panel",
		"class": "mode-night center",
		html: "<h3><i class='icon-warmedal'></i> Army...</h3><p/>",
	});
	$(".mode-night").find("p").eq(0).html("Navega en nuestro sitio como todo un General del ejercito, obteniendo todos los recursos para la siguiente misión.").attr({
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
		href: "index_histo.html",
		//"appendTo": ".col-sm-3",
		"insertAfter": ".col-sm-3",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Contenido</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga la Hoja de Control Academico",
		href: "medicinaresources_staticfiles/histologia/programacion/HOJA DE CONTROL ACADEMICO HISTOLOGIA 2016.docx",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Hoja de Control Academico Word").attr({
		title: "Descarga la Hoja de Control Academico",
		href: "medicinaresources_staticfiles/histologia/programacion/HOJA DE CONTROL ACADEMICO HISTOLOGIA 2016.docx",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1");
	$("tbody").find("td").eq(3).html("2016S10A202PRO1");
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Programación 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/PROGRAMA OFICIAL HISTOLOGIA 2016.doc actualizado 15012016 (1).doc",
		"class": "cap-a",
	});
	$(".row2").find("a").eq(1).html("Programación 2016 Word").attr({
		title: "Descarga Programación 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/PROGRAMA OFICIAL HISTOLOGIA 2016.doc actualizado 15012016 (1).doc",
		"class": "cap-b",
	});
	$(".row2").find("td").eq(2).html("1");
	$(".row2").find("td").eq(3).html("2016S10A202PRO2");
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row3",
		"style": "background-color: #18392b;",
	});
	$(".row3").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Programacion de histologia 2015",
		href: "medicinaresources_staticfiles/histologia/programacion/programadehistologia2015-150121101725-conversion-gate01.docx",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Programación 2015 Word").attr({
		title: "Descarga Programacion 2015 Word",
		href: "medicinaresources_staticfiles/histologia/programacion/programadehistologia2015-150121101725-conversion-gate01.docx",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("1");
	$(".row3").find("td").eq(3).html("2016S10A202PRO3");
	//row 4 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row3",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row4",
		//"style": "background-color: #18392b;",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Documento de Receptores 2015",
		href: "medicinaresources_staticfiles/histologia/programacion/Receptores2015.pdf",
		"class": "cap-a"
	});
	$(".row4").find("a").eq(1).html("Documento de Receptores 2015 PDF").attr({
		title: "Descarga Documento de Receptores 2015",
		href: "medicinaresources_staticfiles/histologia/programacion/Receptores2015.pdf",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("1");
	$(".row4").find("td").eq(3).html("2016S10A202PRO4");
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row5",
		"style": "background-color: #18392b;",
	});
	$(".row5").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Documento de Receptores 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/guia ReceptoresColor.pdf",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Documento de Receptores 2016 PDF").attr({
		title: "Descarga Documento de Receptores 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/guia ReceptoresColor.pdf",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("1");
	$(".row5").find("td").eq(3).html("2016S10A202PRO5");
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row5",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row6",
		//"style": "background-color: #18392b;",
	});
	$(".row6").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Documento de medula espinal 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/MEDULA ESPINAL.pdf",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Documento de Médula Espinal 2016").attr({
		title: "Descargar Documento de medula espinal 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/MEDULA ESPINAL.pdf",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("1");
	$(".row6").find("td").eq(3).html("2016S10A202PRO6");
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row7",
		"style": "background-color: #18392b;",
	});
	$(".row7").find("a").eq(0).html("Descargar").attr({
		title: "Descarga la Guía de Incubación 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/guiaincubacion-2016.pdf",
		"class": "cap-a"
	});
	$(".row7").find("a").eq(1).html("Guía de Incubación 2016").attr({
		title: "Descarga la Guía de Incubación 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/guiaincubacion-2016.pdf",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("1");
	$(".row7").find("td").eq(3).html("2016S10A202PRO7");
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row8",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: "Descarga el Desarrollo embrionario del pollo 2015",
		href: "medicinaresources_staticfiles/histologia/programacion/Desarrollo Embrionario Pollo.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Desarrollo Embrionario del Pollo 2015 PDF").attr({
		title: "Descarga el Desarrollo embrionario del pollo 2015",
		href: "medicinaresources_staticfiles/histologia/programacion/Desarrollo Embrionario Pollo.pdf",
		"class": "cap-b",	
	});
	$(".row8").find("td").eq(2).html("1");
	$(".row8").find("td").eq(3).html("2016S10A202PRO8");
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row9",
		"style": "background-color: #18392b;",
	});
	$(".row9").find("a").eq(0).html("Descargar").attr({
		title: "Descarga el Trabajo de investigacion pollo",
		href: "medicinaresources_staticfiles/histologia/programacion/Trabajo de Investigación de Histología.docx",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Trabajo de Investigación Pollo 2016 PDF").attr({
		title: "Descarga el Trabajo de investigacion pollo",
		href: "medicinaresources_staticfiles/histologia/programacion/Trabajo de Investigación de Histología.docx",
		"class": "cap-b",	
	});
	$(".row9").find("td").eq(2).html("1");
	$(".row9").find("td").eq(3).html("2016S10A202PRO9");
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row10",
		//"style": "background-color: #18392b;",
	});
	$(".row10").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Caso Clinico Gastroinstestinal 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/CASO CLINICO UNIDAD GASTROINTESTINAL HISTOLOGIA.pdf",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Caso Clínico Gastroinstestinal 2016 PDF").attr({
		title: "Descarga el Trabajo de investigacion pollo",
		href: "medicinaresources_staticfiles/histologia/programacion/CASO CLINICO UNIDAD GASTROINTESTINAL HISTOLOGIA.pdf",
		"class": "cap-b",	
	});
	$(".row10").find("td").eq(2).html("1");
	$(".row10").find("td").eq(3).html("2016S10A202PRO10");
	//Row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row11",
		"style": "background-color: #18392b;",
	});
	$(".row11").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Manual de Laboratorio 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/MANUAL HISTOLOGIA Y EMBRIOLOGIA 2016.pdf",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Manual de Laboratorio 2016 PDF").attr({
		title: "Descarga Manual de Laboratorio 2016",
		href: "medicinaresources_staticfiles/histologia/programacion/MANUAL HISTOLOGIA Y EMBRIOLOGIA 2016.pdf",
		"class": "cap-b",
		});
	$(".row11").find("td").eq(2).html("1");
	$(".row11").find("td").eq(3).html("2016S10A202PRO11");
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row12",
		//"style": "background-color: #18392b;",
	});
	$(".row12").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Manual de Laboratorio 2012",
		href: "medicinaresources_staticfiles/histologia/programacion/Manual de Laboratorio 2012.pdf",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Manual de Laboratorio 2012 PDF").attr({
		title: "Descarga Manual de Laboratorio 2012",
		href: "medicinaresources_staticfiles/histologia/programacion/Manual de Laboratorio 2012.pdf",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("1");
	$(".row12").find("td").eq(3).html("2016S10A202PRO12");
	////
	//////
	////////
	/////////// Version 1.1 Refresh 
	////////
	//////
	////
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"insertAfter": ".col-md-6",
		"class": "col-sm-3 aml_banner gad",
		html: "<div class='mode-night centerio'></div>",
	});
	$("<p/>", {
		href: "index_histo.html",
		"appendTo": ".mode-night",
		html: "<i class='icon-refresh'></i>&nbsp;&nbsp;&nbsp;Actualizado el 10 de Septiembre 2017.",
	});
	$("<div/>", {
		"appendTo": ".row",
		"insertAfter": ".gad",
		"class": "col-sm-3",
		html: "<div class='mode-night centerio top-desktop-3'><script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><ins class='adsbygoogle'style='display:inline-block;width:291px;height:250px'data-ad-client='ca-pub-2870247988892070'data-ad-slot='8071926409'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>",
	});
	////
	//////
	////////
	/////////// Iframe Facebook 
	////////
	//////
	////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-sm-3",
		"insertAfter": ".mode-night",
		html: "<iframe class='iframe-facebook' src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHistologia-Humana-193977577328767%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner ifram1 top-desktop-3",
		//"style": "border: 1px solid #e8d174;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ifram1",
		//"insertAfter": "ifram1",
		html: "<iframe src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FHistologia-Humana-193977577328767%2F&width=229&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId' width='228' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner iframe2 centerio",
	});
	$(".iframe-facebook").attr({
		"style": "border: 2px solid #8c9557;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-sm-3",
		"insertAfter": ".iframe1",
		html: "<p>Comparte nuestra página con tus amigos.</p><iframe src='https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.medicinaresources.com%2Findex_histo.html&layout=button&size=large&mobile_iframe=true&width=99&height=28&appId' width='99' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner iframe3 centerio top-desktop-3",
	});
	////
	//////
	////////
	/////////// footer 
	////////
	//////
	////
	$("<footer/>", {
		href: "index_histo.html",
		"appendTo": "#footer-amljs",
		"id": "asphalt-footer",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": "#asphalt-footer",
		"class": "container-fluid",
		"style": "background-image: url(./textures/binding_dark.png);",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		"class": "row",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"class": "col-md-3 insert1",
		html: "<img class='img-footer' src='pictures/logoakmy2.png'>",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"insertAfter": "insert1",
		"class": "col-md-9 insert2",
		"style": "margin-left: 20%; margin-top: -16%;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 top-mobile insert3",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert3").find("p").eq(0).html("<b>MedicinaResources</b>").attr({
		"style": "color: #e8d174",
	});
	$(".insert3").find("a").eq(0).html("Información").attr({
		title: "Información de MedicinaResources",
		href: "informacion.html",
		"style": "color: #f7f7f7",
	});
	$(".insert3").find("a").eq(1).html("Ayuda").attr({
		title: "Ayuda en MedicinaResources",
		href: "ayuda2.html",
		"style": "color: #f7f7f7",
	});
	$(".insert3").find("a").eq(2).html("Aviso Legal").attr({
		title: "Aviso Legal de MedicinaResources",
		href: "aviso_legal_licencia.html",
		"style": "color: #f7f7f7",
	});
	$(".insert3").find("a").eq(3).html("Contacto").attr({
		title: "Contacta a MedicinaResources",
		href: "contacto.html",
		"style": "color: #f7f7f7",
	});
	$(".insert3").find("a").eq(4).html("Logos").attr({
		title: "Los logos de MedicinaResources",
		href: "logos.html",
		"style": "color: #f7f7f7",
	});
	$(".insert3").find("a").eq(5).html("Politica de Seguridad").attr({
		title: "Politica de seguridad de MedicinaResources",
		href: "aviso_politico_usario.html",
		"style": "color: #f7f7f7",
	});
	$
	//row 2 footer
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-3 insert4",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert4").find("p").eq(0).html("<b>Cátedras</b>").attr({
		"style": "color: #e8d174",
	});
	$(".insert4").find("a").eq(0).html("Cátedra de Anatomía").attr({
		title: "Cátedra Oficial de Anatomía",
		href: "https://sites.google.com/site/medusacanatomia/",
		"style": "color: #f7f7f7",
	});
	$(".insert4").find("a").eq(1).html("Cátedra de Fisiología").attr({
		title: "Cátedra Oficial de Fisiología",
		href: "http://areafisiologiausac.blogspot.com/",
		"style": "color: #f7f7f7",
	});
	$(".insert4").find("a").eq(2).html("Cátedra de Histología").attr({
		title: "Cátedra Oficial de Histología",
		href: "http://histologiayembriologiausac.blogspot.com/",
		"style": "color: #f7f7f7",
	});
	$(".insert4").find("a").eq(3).html("Cátedra de Bioquímica").attr({
		title: "Cátedra Oficial de Bioquímica",
		href: "https://bioquimica11usac.wordpress.com/",
		"style": "color: #f7f7f7",
	});
	$(".insert4").find("a").eq(4).html("Cátedra de Salud Pública").attr({
		title: "Cátedra Oficial de Salud Pública",
		href: "salud_inicio.html",
		"style": "color: #f7f7f7",
	});
	$(".insert4").find("a").eq(5).html("Cátedra de Semiología").attr({
		title: "Cátedra Oficial de Semiología Médica",
		href: "http://moodle.sgifacmed.net/",
		"style": "color: #f7f7f7",
	});
	//Row footer 3
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 insert5",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert5").find("p").eq(0).html("<b>Cursos</b>").attr({
		"style": "color: #e8d174",
	});
	$(".insert5").find("a").eq(0).html("Anatomía").attr({
		title: "Anatomía en Medicinaresources",
		href: "anatomia.html",
		"style": "color: #f7f7f7",
	});
	$(".insert5").find("a").eq(1).html("Fisiología").attr({
		title: "Fisiología en Medicinaresources",
		href: "index_fisio.html",
		"style": "color: #f7f7f7",
	});
	$(".insert5").find("a").eq(2).html("Histología").attr({
		title: "Histología en Medicinaresources",
		href: "index_histo.html",
		"style": "color: #f7f7f7",
	});
	$(".insert5").find("a").eq(3).html("Bioquímica").attr({
		title: "Bioquímica en Medicinaresources",
		href: "bioqui_inicio.html",
		"style": "color: #f7f7f7",
	});
	$(".insert5").find("a").eq(4).html("Salud Pública").attr({
		title: "Salud Pública en Medicinaresources",
		href: "salud_inicio.html",
		"style": "color: #f7f7f7",
	});
	$(".insert5").find("a").eq(5).html("Semiología").attr({
		title: "Semiología en Medicinaresources",
		href: "semio_inicio.html",
		"style": "color: #f7f7f7",
	});
	//row footer 4
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-3 insert6",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert6").find("p").eq(0).html("<b>Extras Educativos</b>").attr({
		"style": "color: #e8d174",
	});
	$(".insert6").find("a").eq(0).html("Mapa del sitio").attr({
		title: "Mapa de Medicinaresources",
		href: "mapa.html",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(1).html("CERN").attr({
		title: "Tecnología Europea",
		href: "http://www.cern.ch/",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(2).html("SOCIG").attr({
		title: "Sociedad Cientifica de Guatemala",
		href: "http://sociggt.wix.com/socig",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(3).html("Euro-Fusion").attr({
		title: "Tecnología Europea",
		href: "http://www.euro-fusion.org",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(4).html("Science in School").attr({
		title: "science in school",
		href: "http://www.scienceinschool.org",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(5).html("Wageningen University").attr({
		title: "Universidad Holandesa",
		href: "http://www.wur.nl/",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(6).html("Instituto Nacional de Salud").attr({
		title: "Instituto Nacional de Salud",
		href: "http://www.nlm.nih.gov",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(7).html("European Southern Observatory").attr({
		title: "European Southern Observatory",
		href: "http://www.eso.org/public/outreach/eduoff/",
		"style": "color: #f7f7f7",
	});
	$(".insert6").find("a").eq(8).html("European Molecular Biology Laboratory").attr({
		title: "European Molecular Biology Laboratory",
		href: "http://www.embl.org/",
		"style": "color: #f7f7f7",
	});
	//Row footer 5
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".insert2",
		//"insertAfter": ".insert2",
		"class": "col-md-2 insert7",
		html :"<p/><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p><p><a/></p>",
	});
	$(".insert7").find("p").eq(0).html("<b>Blogs</b>").attr({
		"style": "color: #e8d174",
	});
	$(".insert7").find("a").eq(0).html("Blog de Jonathan Molina").attr({
		title: "Blog de Jonathan Molina",
		href: "http://johnnymd100.blogspot.com/",
		"style": "color: #f7f7f7",
	});
	$(".insert7").find("a").eq(1).html("Blog de Silvia Gonzales").attr({
		title: "Blog de Silvia Gonzales",
		href: "http://histosgo225c12.blogspot.com/2016/01/este-es-el-enlace-para-bajar-la-guia.html",
		"style": "color: #f7f7f7",
	});
	////
	//////
	////////
	/////////// Footer media and contacts 
	////////
	//////
	////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".row",
		"insertAfter": ".insert2",
		"class": "media-aml",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".media-aml",
		"class": "col-md-3 spanfooter centerio",
		"style": "float: left; font-family: 'Raleway', sans-serif; margin-top: -4%; padding: 8px;",
		html: "<p/>&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>&nbsp;<span/>",
	});
	$(".spanfooter").find("p").eq(0).html("Contacto").attr({
		"style": "color: #e8d174; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(0).html("medicinaofficialmail@gmail.com").attr({
		"style": "color: #f7f7f7; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(1).html("Santiago-Guatemala").attr({
		"style": "color: #f7f7f7; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(3).html("&reg;2017 MedicinaResources.").attr({
		"style": "color: #e8d174; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(4).html("&reg;2014-2017 AML Productions.").attr({
		"style": "color: #e8d174; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(5).html("&reg;2004-2017 Solarin Industries.").attr({
		"style": "color: #e8d174; font-size: 12px;"
	});
	$(".spanfooter").find("span").eq(6).html("<i class='icon-htmlfive'</i>").attr({
		"style": "color: #e8d174; font-size: 12px;",
		title: "this page was created with html 5",
	});
	$(".spanfooter").find("span").eq(7).html("<i class='icon-cssthree'</i>").attr({
		"style": "color: #e8d174; font-size: 12px;",
		title: "this page was created with css 3",
	});
	$(".spanfooter").find("span").eq(8).html("<i class='icon-jquery'</i>").attr({
		"style": "color: #e8d174; font-size: 12px;",
		title: "this page was created with jquery-3",
	});
	$(".spanfooter").find("span").eq(9).html("<i class='icon-ruby'</i>").attr({
		"style": "color: #e8d174; font-size: 12px;",
		title: "this page was created with ruby Gems",
	});
	$(".spanfooter").find("span").eq(10).html("Version: 1.1").attr({
		"style": "color: #e8d174; font-size: 12px;",
	});
	//
	/////
	////////
	////////////The ultimate footer section Copyright.
	////////
	/////
	//
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		//"insertAfter": ".row",
		html: "<hr>",
		"class": "ultimate-hr",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".container-fluid",
		"insertAfter": ".ultimate-hr",
		"class": "container ultimate1",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimate1",
		"class": "row ultimaterow",	
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimaterow",
		"class": "copyright centerio",
		html: "Copyright &reg; 2017 Medicinaresources. all rigths reserved.",
		"style": "color: #f7f7f7;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ultimaterow",
		"class": "copyright centerio",
		html: "Made with <i class='icon-medalgold' style='color: #ffc425;'></i> and <i class='icon-heart' style='color: #fe2e2e;'></i> by <a class='cap-a' href='https://github.com/jorgeAML'> <i class='icon-squaregithub'></i> AML Productions.</a>",
		"style": "color: #f7f7f7;",
		title: "Made with medal Gold and love by Jorge AML.",
	});
	//
	/////
	////////
	////////////The nav of bootstrap.
	////////
	/////
	//
	$("<nav/>", {
		href: "index_histo.html",
		"appendTo": "#gtavnav",
		"class": "navbar navbar-inverse navbar-fixed-top nav-insert",
		"style": "background-color: #1e2e22; border-bottom: 4px solid #8c9557; box-shadow: 0px 1px 1px 1px #1e2e22;",
	});
	$("<div/>",{
		href: "index_histo.html",
		"appendTo": ".nav-insert",
		"class": "container nav-insert2",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".nav-insert2",
		"class": "navbar-header nav-insert3",
		html: "<button><span/><span/><span/><span/></button><img><a/>",
	});
	$(".nav-insert3").find("button").eq(0).attr({
		"class": "navbar-toggle collapsed",
		"type": "button",
		"data-toggle": "collapse",
		"data-target": "#navbar",
		"aria-expanded": "false",
		"aria-controls": "navbar",
	});
	$(".nav-insert3").find("span").eq(0).html("Toggle navigation").attr({
		"class": "sr-only",
	});
	$(".nav-insert3").find("span").eq(1).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("span").eq(2).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("span").eq(3).html("").attr({
		"class": "icon-bar",
	});
	$(".nav-insert3").find("img").eq(0).attr({
		"class": "img50",
		"src": "pictures/logoakmy4.png",
	});
	$(".nav-insert3").find("a").eq(0).html("MedicinaResources.com").attr({
		"class": "navbar-brand",
		href: "index.html",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".nav-insert2",
		"insertAfter": ".nav-insert3",
		"id": "navbar",
		"class": "collapse navbar-collapse nav-insert4",
		html: "<ul> <li><a/></li><li><a/></li><li><a/></li> <li><a/> <ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li> <li/><li/> <li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li> </ul>   </li>   </ul>",
	});
	$(".nav-insert4").find("ul").eq(0).attr({
		"class": "nav navbar-nav",
	});
	$(".nav-insert4").find("a").eq(0).html("ayuda").attr({
		"class": "asphalt-nav",
		href: "ayuda2.html",
	});
	$(".nav-insert4").find("a").eq(1).html("contacto").attr({
		href: "contacto.html",
	});
	$(".nav-insert4").find("a").eq(2).html("Información").attr({
		href: "informacion.html",
	});
	$(".nav-insert4").find("li").eq(3).attr({
		"class": "dropdown",
	});
	$(".nav-insert4").find("a").eq(3).html("Cátedras y Libros <span class='caret'></span>").attr({
		"class": "dropdown-toggle",
		"data-toggle": "dropdown",
		"role": "button",
		"aria-haspopup": "true",
		"aria-expanded": "false",
	});
	$(".nav-insert4").find("ul").eq(1).attr({
		"class": "dropdown-menu",
	});
	$(".nav-insert4").find("a").eq(4).html("Cátedra de Anatomía").attr({
		href: "https://sites.google.com/site/medusacanatomia/",
	});
	$(".nav-insert4").find("a").eq(5).html("Cátedra de Fisiología").attr({
		href: "http://areafisiologiausac.blogspot.com/",
	});
	$(".nav-insert4").find("a").eq(6).html("Cátedra de Histología").attr({
		href: "http://histologiayembriologiausac.blogspot.com/",
	});
	$(".nav-insert4").find("a").eq(7).html("Cátedra de Bioquímica").attr({
		href: "https://bioquimica11usac.wordpress.com/",
	});
	$(".nav-insert4").find("a").eq(8).html("Cátedra de Salud Pública").attr({
		href: "salud_inicio.html",
	});
	$(".nav-insert4").find("a").eq(9).html("Cátedra de Semiología").attr({
		href: "http://moodle.sgifacmed.net/",
	});
	$(".nav-insert4").find("li").eq(10).html("").attr({
		"class": "divider",
		"role": "separator",
	});	
	$(".nav-insert4").find("li").eq(11).html("Libros para descargar").attr({
		"class": "dropdown-header",
	});	
	$(".nav-insert4").find("a").eq(10).html("Anatomía").attr({
		href: "index_ana_libros.html",
	});	
	$(".nav-insert4").find("a").eq(11).html("Fisiología").attr({
		href: "index_fisio_libros.html",
	});	
	$(".nav-insert4").find("a").eq(12).html("Histología").attr({
		href: "histo_books.html",
	});	
	$(".nav-insert4").find("a").eq(13).html("Bioquímica").attr({
		href: "bioqui_books.html",
	});	
	$(".nav-insert4").find("a").eq(14).html("Salud Pública").attr({
		href: "salud_books.html",
	});	
	$(".nav-insert4").find("a").eq(15).html("Semiología").attr({
		href: "semio_books.html",
	});				
});