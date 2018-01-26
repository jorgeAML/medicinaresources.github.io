$(document).ready(function () {
	/*
	Archivo principal da instrucciones a las siguientes páginas:
	--histo_present.html--
	*/
	$("<div/>", {
		href: "histo_present.html",
		"appendTo": ".list-group-js",
		"class": "container-fluid",
		html: "<div class='row rowjs'><div class='col-sm-3 aml_banner aml-ps'></div></div>",
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
	//laboratorios
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
	/////////// AML mode night 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".aml-panel",
		"class": "mode-night center modejs",
		html: "<h3><i class='icon-warmedal'></i> Army...</h3><p/>",
	});
	$(".mode-night").find("p").eq(0).html("Navega en nuestro sitio como todo un General del ejercito, obteniendo todos los recursos para la siguiente misión.").attr({
		"class": "p-army",
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
		"appendTo": ".rowjs",
		"insertAfter": ".col-md-6 .col-sm-3",
		"class": "col-sm-3 aml_banner coljs gad",
		html: "<div class='mode-night centerio'></div>",
	});
	$("<p/>", {
		href: "index_histo.html",
		"appendTo": ".mode-night",
		html: "<i class='icon-refresh'></i>&nbsp;&nbsp;&nbsp;Actualizado el 30 de Septiembre 2017.",
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
		"appendTo": ".coljs",
		"insertAfter": ".mode-night",
		html: "<iframe class='iframe-facebook' src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcsuca%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
		"class": "mode-night aml_banner ifram1 top-desktop-3",
		//"style": "border: 1px solid #e8d174;",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".ifram1",
		//"insertAfter": "ifram1",
		html: "<iframe src='https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcsuca%2F&width=214&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId' width='214' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true'></iframe>",
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
	//Este archivo sera copiado en todas las páginas siguientes.
	/*
	Observar que la clase aml-ps es el contendor para los paneles, la lista y el modo noche,
	si quieres insertar una tabla u algun objeto posicionalo despues de esta clase.
	Insertandolo dentro de la clase: .rowjs y despues en la .aml-ps

	El problema empieza en el REFRESH que debes cambiar el APPENDTO siempre a la clase que elijas en este caso
	fue a /.rowjs/ y colocar una INSERCIONAFTER /col-md-6/ este siempre cambiara a cualquier clase que elijas
	ya sea una como col-sm-3 depende del contendor que quieras meter!

	IFRAME FACEBOOK insertarlo en la clase: /.coljs/ para que quede en la columna de la derecha!

	Las secciones que debes tener cuidado son la de en medio y la columand derecha cuida tus inserciones dentro y despues!

	att. Jorge AML Fundador de MedicinaResources y AML Productions.
	*/
});