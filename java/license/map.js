$(document).ready(function () {
	//mapa.html
	$("<h1/>", {
		"appendTo": "mapEdit",
		"insertAfter": ".nav",
		"insertBefore": "#space-footer",
		"class": "col-md-12 centerIo 0A cpW tP",
	});
	var titlePage = document.querySelector(".tP");
	titlePage.innerHTML='Mapa del Sitio';

	$("<p/>", {
		"appendTo": ".0A",
		"insertAfter": "h1",
		"insertBefore": ".0A2",
		"class": "pnt col-md-12 centerIo cpW",
	});
	var pNextTitle = document.querySelector(".pnt");
	pNextTitle.innerHTML='Actualizado el 24 de Diciembre del 2017.';

	pNextTitle.addEventListener('click', updateName);

	function updateName() {
		var name = prompt('Introduce tu nombre');
		pNextTitle.textContent = 'Ahora eres parte de MedicinaResources, ' + name;
	}

	$("<div/>", {
		"insertAfter": ".0A",
		"class": "container 0A2",
	});
	$("<div/>", {
		"appendTo": ".0A2",
		"class": "row 0A3",
	});
	$("<div/>", {
		"appendTo": ".0A3",
		"class": "col-md-3 col-sm-6 aml-catalog 0A4",
		html: "<ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li></ul>",
	});
	$("<h3/>", {
		"appendTo": ".0A4",
		"insertBefore": "ul",
		"class": "th1 cpW",
	});
	var titleCatalog1 = document.querySelector(".th1");
	titleCatalog1.innerHTML='Sección de Anatomía';

	$(".0A4").find("a").eq(0).html("Programación").attr({
		href: "http://www.medicinaresources.com/index_ana_programacion.html",
		title: "Programación de Anatomía",
		"class": "tron-footerp-control c9",
		"target": "_blank",
	});
	$(".0A4").find("a").eq(1).html("Libros").attr({
		href: "http://www.medicinaresources.com/index_ana_libros.html",
		title: "Libros de Anatomía",
		"class": "tron-footerp-control c9",
	});
	$(".0A4").find("a").eq(2).html("Resumenes").attr({
		href: "http://www.medicinaresources.com/anatomia.html",
		title: "Resumenes de Anatomía",
		"class": "tron-footerp-control c9",
	});
	$(".0A4").find("a").eq(3).html("Presentaciones").attr({
		href: "http://www.medicinaresources.com/index_ana_presentaciones.html",
		title: "Presentaciones de Anatomía",
		"class": "tron-footerp-control c9",
	});
	$(".0A4").find("a").eq(4).html("Cuestionarios").attr({
		href: "http://www.medicinaresources.com/anatomia_cuestionario.html",
		title: "Cuestionarios de Anatomía",
		"class": "tron-footerp-control c9",
	});
	$(".0A4").find("a").eq(5).html("Parciales").attr({
		href: "http://www.medicinaresources.com/index_ana_parciales.html",
		title: "Parciales de Anatomía",
		"class": "tron-footerp-control c9",
	});
	/*
	Section two 
	*/
	$("<div/>", {
		"appendTo": ".0A3",
		"class": "col-md-3 col-sm-6 aml-catalog 0A5",
		html: "<ul><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li></ul>",
	});
	$("<h3/>", {
		"appendTo": ".0A5",
		"insertBefore": "ul",
		"class": "th2 cpW",
	});

	var titleCatalog1 = document.querySelector(".th2");
	titleCatalog1.innerHTML='Sección de Fisiología';

	$(".0A5").find("a").eq(0).html("Programación").attr({
		href: "http://www.medicinaresources.com/index_fisio.html",
		title: "Programación de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(1).html("Libros").attr({
		href: "http://www.medicinaresources.com/index_fisio_libros.html",
		title: "Libros de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(2).html("Resumenes 1").attr({
		href: "http://www.medicinaresources.com/index_fisio_resumvarios.html",
		title: "Resumenes de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(3).html("Resumenes Yuri").attr({
		href: "http://www.medicinaresources.com/fisio_resumyuri.html",
		title: "Resumenes de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(4).html("Resumenes de Kenia").attr({
		href: "http://www.medicinaresources.com/fisio_resumkenia.html",
		title: "Resumenes de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(5).html("Resumenes de Jorge").attr({
		href: "http://www.medicinaresources.com/fisio_resumjorge.html",
		title: "Resumenes de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(6).html("Casos Clínicos").attr({
		href: "http://www.medicinaresources.com/index_fisio_casos.html",
		title: "Casos Clínicos de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(7).html("Presentaciones GG").attr({
		href: "http://www.medicinaresources.com/index_fisio_presentacionesgg.html",
		title: "Presentaciones Garcia Garcia de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(8).html("Presentaciones JM").attr({
		href: "http://www.medicinaresources.com/index_fisio_presentacionesjmolina.html",
		title: "Presentaciones Jonathan Molina de Fisiología",
		"class": "tron-footerp-control c9",
	});
	$(".0A5").find("a").eq(9).html("Parciales").attr({
		href: "http://www.medicinaresources.com/fisio_parciales.html",
		title: "Parciales de Fisiología",
		"class": "tron-footerp-control c9",
	});
});