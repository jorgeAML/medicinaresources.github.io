$(document).ready(function () {
	//
	/////
	////////
	////////////The nav of bootstrap.
	////////
	/////
	//
	$("<nav/>", {
		href: "index_histo.html",
		"appendTo": "#space-nav",
		"class": "navbar navbar-inverse navbar-fixed-top nav-insert space-nav1",
		"style": "background-color: #20242c; border-bottom: 2px solid #e8702a; box-shadow: 0px 1px 1px 1px #111111;",
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
		"src": "pictures/IMG_2134.PNG",
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
		"class": "asphalt-nav tron-nav-control",
		href: "ayuda2.html",
	});
	$(".nav-insert4").find("a").eq(1).html("contacto").attr({
		href: "contacto.html",
		"class": "tron-nav-control",
	});
	$(".nav-insert4").find("a").eq(2).html("Información").attr({
		href: "informacion.html",
		"class": "tron-nav-control",
	});
	$(".nav-insert4").find("li").eq(3).attr({
		"class": "dropdown",
	});
	$(".nav-insert4").find("a").eq(3).html("Cátedras y Libros <span class='caret'></span>").attr({
		"class": "dropdown-toggle tron-nav-control",
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
	/*
	flows 
	*/
	$(".tron-nav-control").mouseenter(function () {
		$(this).addClass('nav-tron');
	});
	$(".tron-nav-control").mouseleave(function () {
		$(this).removeClass('nav-tron');
	});
	
})