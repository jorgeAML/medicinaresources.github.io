$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de salud_examenes.html
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
	$(".aml-body").find("p").eq(0).html("La medicina preventiva y salud pública es la especialidad médica que da lugar a actividades y políticas de promoción y protección de la salud; además de la vigilancia de la salud de la población, de la identificación de sus necesidades sanitarias y de la planificación, gestión y evaluación de los servicios sanitarios. Su objetivo es reducir la probabilidad de la aparición de la enfermedad, o impedir o controlar su progresión.").attr({
		"class": "p-army",
	});
	////
	//////
	////////
	/////////// container for parciales 'histo_examenes.html' 
	////////
	//////
	////
	//colum 1
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar2",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2 army-container",
		html:"<h3/><ol><li/><li/></ol><a/>",
	});
	$(".cont2").find("h3").eq(0).html("Parciales 2015").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont2").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("a").eq(0).html("Descargar Parciales 2015").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/salud/examenes/segundo parcial.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//column 1-1
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont3 army-container aml_banner",
		html:"<h3/><ol><li/><li/></ol><a/>",
	});
	$(".cont3").find("h3").eq(0).html("Parciales 2014").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont3").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("a").eq(0).html("Descargar Parciales 2014").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/salud/examenes/2014.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//column 1-2
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont4 army-container aml_banner",
		html:"<h3/><ol><li/><li/></ol><a/>",
	});
	$(".cont4").find("h3").eq(0).html("Parciales 2013").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont4").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("a").eq(0).html("Descargar Parciales 2013").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/salud/examenes/2013.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//column 2 
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar",
	});
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1 army-container",
		html:"<h3/><ol><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont1").find("h3").eq(0).html("Parciales 2017").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont1").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(1).html("Segundo parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(2).html("Cuarto parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(3).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(4).html("Primera Recuperación.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("a").eq(0).html("Descargar Parciales 2017").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/salud/examenes/saludpublica2017.zip",
		"class": "aml-anat p-kreon army-button",
	});
	
})