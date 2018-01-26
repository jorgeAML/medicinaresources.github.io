$(document).ready(function () {
	$("<div/>",{
		"class": "container l1",
		"appendTo": ".commonsAtribution",
	});
	$("<div/>",{
		"class": "col-md-12 l2 font-general",
		"appendTo": ".l1",
		html: "<h1/><a/><p/><p/><p/><p/><p/><p/>",
	});
	$(".l2").find("a").eq(0).html("Ver Licencia CC Atributtion 4.0 International").attr({
		"class": "at-4",
		href: "https://creativecommons.org/licenses/by/4.0/legalcode",
	})
	$(".l2").find("h1").eq(0).html("<i class='icon-creativecommons'></i>  Creative Commons Atribution 4.0 International");
	$(".l2").find("p").eq(0).html("MedicinaResources declara que todo archivo, documento, presentaciones, libros han sido adaptados para uso de cualquier usuario o cliente para ser compartido o descargado y usado para cualquier uso cotidiano u objetivo del cliente.").attr({
		"class": "p-font",
	});
	$(".l2").find("p").eq(1).html("MedicinaResources no se hace responsable por el mal uso de todo archivo descargado y alojado en dicho servidor, encontrado como 'www.medicinaresources.com'.").attr({
		"class": "p-font",
	});
	$(".l2").find("p").eq(2).html("Todas las secciones encontradas como 'libros' en MedicinaResources tambien llevan la licencia correspondiente para su uso libre y descargable para cualquier usuario, todo libro ha sido comprado y emitido los procesos legales para su descarga gratuita.").attr({
		"class": "p-font",
	});
	$(".l2").find("p").eq(3).html("Todo archivo descargado de MedicinaResources y que halla sido modificado por terceros y sea subido a servidores distintos que no pertenezcan a cualquier entidad y corporación de AML Productions correran el riesgo de no llevar la licencia correspondiente y no ser protegidos o respaldados por MedicinaResources y Fundadores.").attr({
		"class": "p-font",
	});
	$(".l2").find("p").eq(4).html("MedicinaResources ofrece servicios gratuitos a Niveles superiores de educación. MedicinaResources no se hace responsable por cualquier archivo descargado y alojado en dicho sitio y ser puesto en venta o subasta, ya sea cometiendo Fraude o cobrando a terceros por uso de contenido libre.").attr({
		"class": "p-font",
	});
	$(".l2").find("p").eq(5).html("MedicinaResources es una división de AML Productions.").attr({
		"class": "p-font centerio",
	});
})