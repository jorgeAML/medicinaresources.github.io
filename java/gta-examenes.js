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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Parciales.").attr({
		title: "Descargar Parciales.",
		href: "medicinaresources_staticfiles/histologia/parciales/Exámeneshisto.zip",
		"class": "aml-anat",
	});
	////
	//////
	////////
	/////////// container for parciales 'histo_examenes.html' 
	////////
	//////
	////
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar",
	});
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1 aml-capuf",
		html:"<h3/><hr class='ultimatep-hr'><ol><li/><li/></ol><a/>",
	});
	$(".cont1").find("h3").eq(0).html("Parciales 2013");
	$(".cont1").find("li").eq(0).html("Primer parcial.");
	$(".cont1").find("li").eq(1).html("Segundo parcial.");
	$(".cont1").find("a").eq(0).html("<i class='icon icon-download-alt'></i> Descargar Parciales 2013.").attr({
		title: "Descargar parciales 2013",
		href: "medicinaresources_staticfiles/histologia/parciales/2013.zip",
		"class": "cap-b army-button-minus",
	});
	//row 2
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont2 aml-capuf",
		"insertAfter": "cont1",
		html:"<h3/><hr class='ultimatep-hr'><ol><li/><li/></ol><a/>",
	});
	$(".cont2").find("h3").eq(0).html("Parciales 2014");
	$(".cont2").find("li").eq(0).html("Primer parcial.");
	$(".cont2").find("li").eq(1).html("Segundo parcial.");
	$(".cont2").find("a").eq(0).html("<i class='icon icon-download-alt'></i> Descargar Parciales 2014.").attr({
		title: "Descargar parciales 2014",
		href: "medicinaresources_staticfiles/histologia/parciales/2014.zip",
		"class": "cap-b army-button-minus",
	});
	//
	//
	//second container
	//
	//
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar2",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont3 aml-capuf",
		html:"<h3/><hr class='ultimatep-hr'><ol><li/><li/></ol><a/>",
	});
	$(".cont3").find("h3").eq(0).html("Parciales 2015");
	$(".cont3").find("li").eq(0).html("Primer parcial.");
	$(".cont3").find("li").eq(1).html("Segundo parcial.");
	$(".cont3").find("a").eq(0).html("<i class='icon icon-download-alt'></i> Descargar Parciales 2015.").attr({
		title: "Descargar parciales 2015",
		href: "medicinaresources_staticfiles/histologia/parciales/2015.zip",
		"class": "cap-b army-button-minus",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont4 aml-capuf",
		html:"<h3/><hr class='ultimatep-hr'><ol><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont4").find("h3").eq(0).html("Parciales 2016");
	$(".cont4").find("li").eq(0).html("Primer parcial.");
	$(".cont4").find("li").eq(1).html("Segundo parcial.");
	$(".cont4").find("li").eq(2).html("Tercer parcial.");
	$(".cont4").find("li").eq(3).html("Cuarto parcial.");
	$(".cont4").find("a").eq(0).html("<i class='icon icon-download-alt'></i> Descargar Parciales 2016.").attr({
		title: "Descargar parciales 2016",
		href: "medicinaresources_staticfiles/histologia/parciales/2016.zip",
		"class": "cap-b army-button-minus",
	});
		$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont5 aml-capuf",
		html:"<h3/><hr class='ultimatep-hr'><ol><li/><li/><li/><li/><li/><li/><li/><li/></ol><p/><a/>",
	});
	$(".cont5").find("h3").eq(0).html("Parciales 2017");
	$(".cont5").find("li").eq(0).html("Primer parcial.");
	$(".cont5").find("li").eq(1).html("Segundo parcial.");
	$(".cont5").find("li").eq(2).html("Tercer parcial.");
	$(".cont5").find("li").eq(3).html("Cuarto parcial.");
	$(".cont5").find("li").eq(4).html("Quinto parcial (*).");
	$(".cont5").find("li").eq(5).html("Examen Final (*).");
	$(".cont5").find("li").eq(6).html("Primera Recuperación (*).");
	$(".cont5").find("li").eq(7).html("Segunda Recuperación (*).");
	$(".cont5").find("p").eq(0).html("(*) Examenes no disponibles hasta nueva fecha.").attr({
		"class": "centerio",
	});
	$(".cont5").find("a").eq(0).html("<i class='icon icon-download-alt'></i> Descargar Parciales 2017.").attr({
		title: "Descargar parciales 2017",
		href: "medicinaresources_staticfiles/histologia/parciales/Parciales2017.zip",
		"class": "cap-b army-button-minus",
	});	
});