$(document).ready(function () {
		////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
	//////Este archivo corresponde a la página de histo_present_silvia.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Presentaciones Silvia 2016.").attr({
		title: "Descargar Presentaciones de Silvia 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/PresentacionesSylviaGonzalez.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Clases Dra. Silvia Gonzalez</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Embriología semana 1-3",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 1 Embriologia Semanas 1-3.pdf",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Embriología semana 1-3").attr({
		title: "Descarga Embriología semana 1-3",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 1 Embriologia Semanas 1-3.pdf",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("1");
	$("tbody").find("td").eq(3).html("2016S10A202PRESG1");
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Embriología Semanas 5-8",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 2 Embriologia Semanas 5-8.pdf",
		"class": "cap-a",
	});
	$(".row2sg").find("a").eq(1).html("Embriología Semanas 5-8").attr({
		title: "Descarga Embriología Semanas 5-8",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 2 Embriologia Semanas 5-8.pdf",
		"class": "cap-b",
	});
	$(".row2sg").find("td").eq(2).html("2");
	$(".row2sg").find("td").eq(3).html("2016S10A202PRESG2");	
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row3sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 3 - Tejido Epitelial.pdf",
		"class": "cap-a",
	});
	$(".row3sg").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 3 - Tejido Epitelial.pdf",
		"class": "cap-b",
	});
	$(".row3sg").find("td").eq(2).html("3");
	$(".row3sg").find("td").eq(3).html("2016S10A202PRESG3");
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row4sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 4 - Tejido Conjuntivo.pdf",
		"class": "cap-a",
	});
	$(".row4sg").find("a").eq(1).html("Tejido Conjuntivo").attr({
		title: "Descarga Tejido Conjuntivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 4 - Tejido Conjuntivo.pdf",
		"class": "cap-b",
	});
	$(".row4sg").find("td").eq(2).html("4");
	$(".row4sg").find("td").eq(3).html("2016S10A202PRESG4");	
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row5sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Muscular y Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 5 - Tejido Muscular y Nervioso.pdf",
		"class": "cap-a",
	});
	$(".row5sg").find("a").eq(1).html("Tejido Muscular y Nervioso").attr({
		title: "Descarga Tejido Muscular y Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 5 - Tejido Muscular y Nervioso.pdf",
		"class": "cap-b",
	});
	$(".row5sg").find("td").eq(2).html("5");
	$(".row5sg").find("td").eq(3).html("2016S10A202PRESG5");
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row6sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Esquelético",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 6 - Tejido Cartilaginoso y Oseo.pdf",
		"class": "cap-a",
	});
	$(".row6sg").find("a").eq(1).html("Tejido Esquelético").attr({
		title: "Descarga Tejido Esquelético",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 6 - Tejido Cartilaginoso y Oseo.pdf",
		"class": "cap-b",
	});
	$(".row6sg").find("td").eq(2).html("6");
	$(".row6sg").find("td").eq(3).html("2016S10A202PRESG6");
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row7sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Médula Espinal y Meninges",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 7 - Medula Espinal y Meninges.pdf",
		"class": "cap-a",
	});
	$(".row7sg").find("a").eq(1).html("Médula Espinal y Meninges").attr({
		title: "Descarga Médula Espinal y Meninges",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 7 - Medula Espinal y Meninges.pdf",
		"class": "cap-b",
	});
	$(".row7sg").find("td").eq(2).html("8");
	$(".row7sg").find("td").eq(3).html("2016S10A202PRESG7");
	//row 8 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row8sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 8 - Cerebelo, Plexos Coroideos y LCR.pdf",
		"class": "cap-a",
	});
	$(".row8sg").find("a").eq(1).html("Plexos Coroideos").attr({
		title: "Descarga Plexos Coroideos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 8 - Cerebelo, Plexos Coroideos y LCR.pdf",
		"class": "cap-b",
	});
	$(".row8sg").find("td").eq(2).html("9");
	$(".row8sg").find("td").eq(3).html("2016S10A202PRESG8");
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row9sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 9 - Cerebro.pdf",
		"class": "cap-a",
	});
	$(".row9sg").find("a").eq(1).html("Cerebro").attr({
		title: "Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 9 - Cerebro.pdf",
		"class": "cap-b",
	});
	$(".row9sg").find("td").eq(2).html("10");
	$(".row9sg").find("td").eq(3).html("2016S10A202PRESG9");
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row10sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Embriología del Sistema Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 9 - Embriologia del SNC.pdf",
		"class": "cap-a",
	});
	$(".row10sg").find("a").eq(1).html("Embriología del Sistema Nervioso").attr({
		title: "Descarga Embriología del Sistema Nervioso",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 9 - Embriologia del SNC.pdf",
		"class": "cap-b",
	});
	$(".row10sg").find("td").eq(2).html("10");
	$(".row10sg").find("td").eq(3).html("2016S10A202PRESG10");
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row11sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row11sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Ojo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 10 - Ojo.pdf",
		"class": "cap-a",
	});
	$(".row11sg").find("a").eq(1).html("Ojo").attr({
		title: "Descarga Ojo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 10 - Ojo.pdf",
		"class": "cap-b",
	});
	$(".row11sg").find("td").eq(2).html("12");
	$(".row11sg").find("td").eq(3).html("2016S10A202PRESG11");
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row12sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row12sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 11 - Oido.pdf",
		"class": "cap-a",
	});
	$(".row12sg").find("a").eq(1).html("Oido").attr({
		title: "Descarga Oido",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 11 - Oido.pdf",
		"class": "cap-b",
	});
	$(".row12sg").find("td").eq(2).html("13");
	$(".row12sg").find("td").eq(3).html("2016S10A202PRESG12");
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row13sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row13sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Receptores Sensoriales del gusto y olfato",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 12 - Receptores Sensoriales. Gusto y Olfato.ppt",
		"class": "cap-a",
	});
	$(".row13sg").find("a").eq(1).html("Receptores Sensoriales del gusto y olfato").attr({
		title: "Descarga Receptores Sensoriales del gusto y olfato",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 12 - Receptores Sensoriales. Gusto y Olfato.ppt",
		"class": "cap-b",
	});
	$(".row13sg").find("td").eq(2).html("12");
	$(".row13sg").find("td").eq(3).html("2016S10A202PRESG13");
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row14sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row14sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 13 - Piel y sus anexos.pdf",
		"class": "cap-a",
	});
	$(".row14sg").find("a").eq(1).html("Piel y sus anexos").attr({
		title: "Descarga Piel y sus anexos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 13 - Piel y sus anexos.pdf",
		"class": "cap-b",
	});
	$(".row14sg").find("td").eq(2).html("13");
	$(".row14sg").find("td").eq(3).html("2016S10A202PRESG14");
	//row 15 
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row15sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido Hematopoyetico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 17 - Tejido Hematopoyetico.pdf",
		"class": "cap-a",
	});
	$(".row15sg").find("a").eq(1).html("Tejido Hematopoyetico").attr({
		title: "Descarga Tejido Hematopoyetico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 17 - Tejido Hematopoyetico.pdf",
		"class": "cap-b",
	});
	$(".row15sg").find("td").eq(2).html("14");
	$(".row15sg").find("td").eq(3).html("2016S10A202PRESG15");
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row16sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sangre y frote periferico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 16 - Sangre.pdf",
		"class": "cap-a",
	});
	$(".row16sg").find("a").eq(1).html("Sangre y frote periferico").attr({
		title: "Descarga Sangre y frote periferico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 16 - Sangre.pdf",
		"class": "cap-b",
	});
	$(".row16sg").find("td").eq(2).html("14");
	$(".row16sg").find("td").eq(3).html("2016S10A202PRESG16");
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row17sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 15 - Aparato Cardiovascular.pdf",
		"class": "cap-a",
	});
	$(".row17sg").find("a").eq(1).html("Aparato Cardiovascular").attr({
		title: "Descarga Aparato Cardiovascular",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 15 - Aparato Cardiovascular.pdf",
		"class": "cap-b",
	});
	$(".row17sg").find("td").eq(2).html("15");
	$(".row17sg").find("td").eq(3).html("2016S10A202PRESG17");
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row18sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 14 - Aparato Respiratorio.pdf",
		"class": "cap-a",
	});
	$(".row18sg").find("a").eq(1).html("Aparato Respiratorio").attr({
		title: "Descarga Aparato Respiratorio",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 14 - Aparato Respiratorio.pdf",
		"class": "cap-b",
	});
	$(".row18sg").find("td").eq(2).html("16");
	$(".row18sg").find("td").eq(3).html("2016S10A202PRESG18");
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row19sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row19sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sistema Inmunologico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 18 - Sistema Inmunologico y Tejido Linfoide.pdf",
		"class": "cap-a",
	});
	$(".row19sg").find("a").eq(1).html("Sistema Inmunologico").attr({
		title: "Descarga Sistema Inmunologico",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 18 - Sistema Inmunologico y Tejido Linfoide.pdf",
		"class": "cap-b",
	});
	$(".row19sg").find("td").eq(2).html("18");
	$(".row19sg").find("td").eq(3).html("2016S10A202PRESG19");
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row20sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row20sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Cavidad Oral",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 20 - Cavidad Oral.pdf",
		"class": "cap-a",
	});
	$(".row20sg").find("a").eq(1).html("Cavidad Oral").attr({
		title: "Descarga Cavidad Oral",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 20 - Cavidad Oral.pdf",
		"class": "cap-b",
	});
	$(".row20sg").find("td").eq(2).html("20");
	$(".row20sg").find("td").eq(3).html("2016S10A202PRESG20");
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row21sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row21sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 21 - Estomago y Esofago plan del tubo digestivo.pdf",
		"class": "cap-a",
	});
	$(".row21sg").find("a").eq(1).html("Esófago y Estómago").attr({
		title: "Descarga Esófago y Estómago",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 21 - Estomago y Esofago plan del tubo digestivo.pdf",
		"class": "cap-b",
	});
	$(".row21sg").find("td").eq(2).html("21");
	$(".row21sg").find("td").eq(3).html("2016S10A202PRESG21");
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row22sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row22sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Intestinos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 22 - intestino delgado.pdf",
		"class": "cap-a",
	});
	$(".row22sg").find("a").eq(1).html("Intestinos").attr({
		title: "Descarga Intestinos",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 22 - intestino delgado.pdf",
		"class": "cap-b",
	});
	$(".row22sg").find("td").eq(2).html("22");
	$(".row22sg").find("td").eq(3).html("2016S10A202PRESG22");
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row23sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row23sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Hígado",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 23 - hígado.pdf",
		"class": "cap-a",
	});
	$(".row23sg").find("a").eq(1).html("Hígado").attr({
		title: "Descarga Hígado",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 23 - hígado.pdf",
		"class": "cap-b",
	});
	$(".row23sg").find("td").eq(2).html("23");
	$(".row23sg").find("td").eq(3).html("2016S10A202PRESG23");
	//row 24
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row24sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row24sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Páncreas",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 24 - Pancreas.pdf",
		"class": "cap-a",
	});
	$(".row24sg").find("a").eq(1).html("Páncreas").attr({
		title: "Descarga Páncreas",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 24 - Pancreas.pdf",
		"class": "cap-b",
	});
	$(".row24sg").find("td").eq(2).html("24");
	$(".row24sg").find("td").eq(3).html("2016S10A202PRESG24");
	//row 25
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row25sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row25sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Timo, ganglio y bazo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 24 - Pancreas.pdf",
		"class": "cap-a",
	});
	$(".row25sg").find("a").eq(1).html("Timo, ganglio y bazo").attr({
		title: "Descarga Timo, ganglio y bazo",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 24 - Pancreas.pdf",
		"class": "cap-b",
	});
	$(".row25sg").find("td").eq(2).html("25");
	$(".row25sg").find("td").eq(3).html("2016S10A202PRESG25");
	//row 26
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row26sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row26sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 26 - Endocrino.pdf",
		"class": "cap-a",
	});
	$(".row26sg").find("a").eq(1).html("Sistema Endocrino").attr({
		title: "Descarga Sistema Endocrino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 26 - Endocrino.pdf",
		"class": "cap-b",
	});
	$(".row26sg").find("td").eq(2).html("26");
	$(".row26sg").find("td").eq(3).html("2016S10A202PRESG26");
	//row 27
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row27sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"style": "background-color: #18392b;",
	});
	$(".row27sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 27 - Aparato Reproductor Masculino.pdf",
		"class": "cap-a",
	});
	$(".row27sg").find("a").eq(1).html("Aparato Reproductor Masculino").attr({
		title: "Descarga Aparato Reproductor Masculino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 27 - Aparato Reproductor Masculino.pdf",
		"class": "cap-b",
	});
	$(".row27sg").find("td").eq(2).html("27");
	$(".row27sg").find("td").eq(3).html("2016S10A202PRESG27");
	//row 28
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row28sg",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		//"style": "background-color: #18392b;",
	});
	$(".row28sg").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Aparato Reproductor Femenino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 28 - Aparato Reproductor Femenino.pdf",
		"class": "cap-a",
	});
	$(".row28sg").find("a").eq(1).html("Aparato Reproductor Femenino").attr({
		title: "Descarga Aparato Reproductor Femenino",
		href: "medicinaresources_staticfiles/histologia/presentaciones2/Semana 28 - Aparato Reproductor Femenino.pdf",
		"class": "cap-b",
	});
	$(".row28sg").find("td").eq(2).html("28");
	$(".row28sg").find("td").eq(3).html("2016S10A202PRESG28");
	//end
});