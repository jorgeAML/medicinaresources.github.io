$(document).ready(function () {
	$("<div/>", {
		href: "histo_books.html",
		//href: "histo_books.html",
		"appendTo": "#gtavidbook",
		//"insertAfter": "#gtavidone",
		"class": "container-fluid",
		html: "<div class='row'><div class='col-sm-3 aml_banner aml-book'></div></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Documentos 2016.").attr({
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
		//href: "index_histo.html",
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
	/////////// Containers for books 'histo_books.html' 
	////////
	//////
	////
	$("<div/>",{
		//"appendTo": ".row",
		"insertAfter": ".col-sm-3",
		"class": "col-sm-3 aml_banner book-c1",
	});
	$("<div/>", {
		"appendTo": ".book-c1",
		"class": "army-container c1",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c1").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/histologia/imagenes_libros/geneser.jpg'>").attr({
		title: "Descarga histología de Genneser",
		href: "medicinaresources_staticfiles/histologia/books/1 Histologia Geneser.pdf",
	});
	$(".c1").find("h2").eq(0).html("Histología de Geneser").attr({
		"class": "aml-p-army",
	})
	$(".c1").find("p").eq(0).html("Bibliografía oficial de la cátedra de Histología.").attr({
		"class": "aml-p-army",
	});
	$(".c1").find("a").eq(1).html("Descargar").attr({
		title: "Descarga histología de Genneser",
		href: "medicinaresources_staticfiles/histologia/books/1 Histologia Geneser.pdf",
		"class": "cap-b army-button",
	});
	//container 2
	$("<div/>", {
		"appendTo": ".book-c1",
		"class": "army-container c2 top-desktop-3",
		"insertAfter": ".c1",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c2").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/histologia/imagenes_libros/embriomoore.jpg'>").attr({
		title: "Descarga Embriologia Moore 7 edicion",
		href: "medicinaresources_staticfiles/histologia/books/2 embriologia Moore 7a.pdf",
	});
	$(".c2").find("h2").eq(0).html("Embriologia de Moore 7 ed.").attr({
		"class": "aml-p-army",
	})
	$(".c2").find("p").eq(0).html("Bibliografía oficial de la cátedra de Histología.").attr({
		"class": "aml-p-army",
	});
	$(".c2").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Embriologia Moore 7 edicion",
		href: "medicinaresources_staticfiles/histologia/books/2 embriologia Moore 7a.pdf",
		"class": "cap-b army-button",
	});
	//column of container books 2
	$("<div/>",{
		//"appendTo": ".row",
		"insertAfter": ".col-sm-3",
		"class": "col-sm-3 aml_banner book-cc1",
	});
	$("<div/>", {
		"appendTo": ".book-cc1",
		"class": "army-container c3",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c3").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/histologia/imagenes_libros/ARTEAGA.JPG'>").attr({
		title: "Descarga Embriologia Arteaga",
		href: "medicinaresources_staticfiles/histologia/books/5 Embriologia Clinica Arteaga_booksmedicos.org.pdf",
	});
	$(".c3").find("h2").eq(0).html("Embriologia Humana Arteaga").attr({
		"class": "aml-p-army",
	})
	$(".c3").find("p").eq(0).html("Bibliografía Complementaria de la cátedra de Histología.").attr({
		"class": "aml-p-army",
	});
	$(".c3").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Embriologia Arteaga",
		href: "medicinaresources_staticfiles/histologia/books/5 Embriologia Clinica Arteaga_booksmedicos.org.pdf",
		"class": "cap-b army-button",
	});
	//Container 4
	$("<div/>", {
		"appendTo": ".book-cc1",
		"class": "army-container c4 top-desktop-3",
		"insertAfter": ".c3",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c4").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/histologia/imagenes_libros/difiore.jpg'>").attr({
		title: "Descarga Atlas de Histologia Difiores",
		href: "medicinaresources_staticfiles/histologia/books/3 difiores-atlas-of-histology-with-functional-correlations-11th-ed.pdf",
	});
	$(".c4").find("h2").eq(0).html("Atlas de Histologia Difiores").attr({
		"class": "aml-p-army",
	})
	$(".c4").find("p").eq(0).html("Bibliografía Complementaria de la cátedra de Histología.").attr({
		"class": "aml-p-army",
	});
	$(".c4").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Atlas de Histologia Difiores",
		href: "medicinaresources_staticfiles/histologia/books/3 difiores-atlas-of-histology-with-functional-correlations-11th-ed.pdf",
		"class": "cap-b army-button",
	});
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
		"insertAfter": ".col-sm-3",
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
		html: "<iframe class='iframe-facebook' src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FhistomedicaXXI%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner ifram1 top-desktop-3",
		//"style": "border: 1px solid #e8d174;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ifram1",
		//"insertAfter": "ifram1",
		html: "<iframe src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FhistomedicaXXI%2F&width=222&layout=button_count&action=like&size=large&show_faces=false&share=true&height=46&appId' width='228' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
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
})