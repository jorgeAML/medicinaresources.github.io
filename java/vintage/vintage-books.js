$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_books.html
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
	$(".aml-body").find("p").eq(0).html("Descarga los Libros sugeridos y utlizados por Docentes y estudiantes de la Universidad de San Carlos de Guatemala.").attr({
		"class": "p-army",
	});
	////////
	///////////containers books
	////////
	//////
	////
	$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c1 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c1",
		"class": "army-container c1",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c1").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/salud/imagenes_libros/saludone.jpg'>").attr({
		title: "Descarga Modulos de Principios de Epidemiología 1-6",
		href: "medicinaresources_staticfiles/salud/libros/Mopece Libro.zip",
	});
	$(".c1").find("h2").eq(0).html("Modulos de Principios de Epidemiología").attr({
		"class": "aml-p-army",
	})
	$(".c1").find("p").eq(0).html("Bibliografía oficial de la cátedra de Salud Pública.").attr({
		"class": "aml-p-army",
	});
	$(".c1").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Modulos de Principios de Epidemiología 1-6",
		href: "medicinaresources_staticfiles/salud/libros/Mopece Libro.zip",
		"class": "aml-anat army-button p-kreon",
	});
	//container 2
		$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c2 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c1",
		"class": "army-container c2 gradient-aml",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c2").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/salud/imagenes_libros/saludtwo.jpg'>").attr({
		title: "Descarga Metodologia de la investigacion 6ta. Edicion",
		href: "medicinaresources_staticfiles/salud/libros/Metodologia de la Investigacion - Sampieri (6ta edicion).zip",
	});
	$(".c2").find("h2").eq(0).html("Metodología de la investigacion 6ta. Edicion").attr({
		"class": "aml-p-army",
	})
	$(".c2").find("p").eq(0).html("Bibliografía oficial de la cátedra de Salud Pública.").attr({
		"class": "aml-p-army",
	});
	$(".c2").find("a").eq(1).html("Descargar").attr({
		title: "Descargar Metodologia de la investigacion 6ta. Edicion",
		href: "medicinaresources_staticfiles/salud/libros/Metodologia de la Investigacion - Sampieri (6ta edicion).zip",
		"class": "aml-anat army-button p-kreon",
	});
	//container row 1
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c2",
		"class": "army-container c3 gradient-aml aml_banner_containerbooks",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c3").find("a").eq(0).html("<img class='img-army-md4' src='medicinaresources_staticfiles/salud/imagenes_libros/saludthree.jpg'>").attr({
		title: "Descarga Salud Publica y Medicina Preventiva",
		href: "medicinaresources_staticfiles/salud/libros/Salud.Publida.y.Medicina.Preventiva.zip",
	});
	$(".c3").find("h2").eq(0).html("Salud Publica y Medicina Preventiva").attr({
		"class": "aml-p-army",
	})
	$(".c3").find("p").eq(0).html("Bibliografía oficial de la cátedra de Salud Pública.").attr({
		"class": "aml-p-army",
	});
	$(".c3").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Salud Publica y Medicina Preventiva",
		href: "medicinaresources_staticfiles/salud/libros/Salud.Publida.y.Medicina.Preventiva.zip",
		"class": "army-button aml-anat p-kreon",
	});
	
})
