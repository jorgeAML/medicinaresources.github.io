$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el gtaps.js
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Presentaciones 2016.").attr({
		title: "Descargar Presentaciones 2016.",
		href: "medicinaresources_staticfiles/histologia/presentaciones/histologiapresentaciones.zip",
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
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Presentaciones Dra. Griselda Guerra</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>"
	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Embriología Semana 3 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/2 CLASE,  SEMANA 3 A LA 8 griselda.ppt",
		"class": "cap-a",
	});
	$("tbody").find("a").eq(1).html("Embriología Semana 3 a 8").attr({
		title: "Descarga Embriología Semana 3 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/2 CLASE,  SEMANA 3 A LA 8 griselda.ppt",
		"class": "cap-b",
	});
	$("tbody").find("td").eq(2).html("2");
	$("tbody").find("td").eq(3).html("2016S10A202PRE1");
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tejido epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/3 CLASE TEJIDO EPITELIAL griselda.ppt",
		"class": "cap-a",
	});
	$(".row2").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Tejido epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/3 CLASE TEJIDO EPITELIAL griselda.ppt",
		"class": "cap-b",
	});
	$(".row2").find("td").eq(2).html("3");
	$(".row2").find("td").eq(3).html("2016S10A202PRE2");
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
		title: "Descarga Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/4 CLASE,TEJIDO CONECTIVO griselda.ppt",
		"class": "cap-a",
	});
	$(".row3").find("a").eq(1).html("Tejido Conectivo").attr({
		title: "Descarga Tejido Conectivo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/4 CLASE,TEJIDO CONECTIVO griselda.ppt",
		"class": "cap-b",
	});
	$(".row3").find("td").eq(2).html("4");
	$(".row3").find("td").eq(3).html("2016S10A202PRE3");
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
		title: "Descarga Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/presentaciones/5 CLASE muscular Griselda.ppt",
		"class": "cap-a"
	});
	$(".row4").find("a").eq(1).html("Tejido Muscular").attr({
		title: "Descarga Tejido Muscular",
		href: "medicinaresources_staticfiles/histologia/presentaciones/5 CLASE muscular Griselda.ppt",
		"class": "cap-b",
	});
	$(".row4").find("td").eq(2).html("5");
	$(".row4").find("td").eq(3).html("2016S10A202PRE4");
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
		title: "Descarga Cartilago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/6 CLASE   CARTÍLAGO griselda.ppt",
		"class": "cap-a",
	});
	$(".row5").find("a").eq(1).html("Tejido Cartilaginoso").attr({
		title: "Descarga Cartilago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/6 CLASE   CARTÍLAGO griselda.ppt",
		"class": "cap-b",
	});
	$(".row5").find("td").eq(2).html("6");
	$(".row5").find("td").eq(3).html("2016S10A202PRE5");
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
		title: "Descargar Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/9 CLASE MEDULA ESPINAL.pdf",
		"class": "cap-a",
	});
	$(".row6").find("a").eq(1).html("Médula Espinal").attr({
		title: "Descargar Médula Espinal",
		href: "medicinaresources_staticfiles/histologia/presentaciones/9 CLASE MEDULA ESPINAL.pdf",
		"class": "cap-b",
	});
	$(".row6").find("td").eq(2).html("9");
	$(".row6").find("td").eq(3).html("2016S10A202PRE6");
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
		title: "Descarga Cerebelo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/10 CLASE CEREBELO.pdf",
		"class": "cap-a"
	});
	$(".row7").find("a").eq(1).html("Cerebelo").attr({
		title: "Descarga Cerebelo",
		href: "medicinaresources_staticfiles/histologia/presentaciones/10 CLASE CEREBELO.pdf",
		"class": "cap-b",
	});
	$(".row7").find("td").eq(2).html("10");
	$(".row7").find("td").eq(3).html("2016S10A202PRE7");
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row8",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/presentaciones/11 CLASE CEREBRO.pdf",
		"class": "cap-a",
	});
	$(".row8").find("a").eq(1).html("Cerebro").attr({
		title: "Descarga Cerebro",
		href: "medicinaresources_staticfiles/histologia/presentaciones/11 CLASE CEREBRO.pdf",
		"class": "cap-b",	
	});
	$(".row8").find("td").eq(2).html("11");
	$(".row8").find("td").eq(3).html("2016S10A202PRE8");
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
		title: "Descarga Cavidad Oral, Lengua y Dientes",
		href: "medicinaresources_staticfiles/histologia/presentaciones/18, CLASE CAVIDAD ORAL, LENGUA,DIENTES Griselda.ppt",
		"class": "cap-a",
	});
	$(".row9").find("a").eq(1).html("Cavidad Oral, Lengua y Dientes").attr({
		title: "Descarga Cavidad Oral, Lengua y Dientes",
		href: "medicinaresources_staticfiles/histologia/presentaciones/18, CLASE CAVIDAD ORAL, LENGUA,DIENTES Griselda.ppt",
		"class": "cap-b",	
	});
	$(".row9").find("td").eq(2).html("18");
	$(".row9").find("td").eq(3).html("2016S10A202PRE9");
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
		title: "Descarga Estomago y Esofago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/19, CLASE ESTÓMAGO-ESÓFAGO Griselda.ppt",
		"class": "cap-a",
	});
	$(".row10").find("a").eq(1).html("Caso Estomago y Esofago").attr({
		title: "Descarga Estomago y Esofago",
		href: "medicinaresources_staticfiles/histologia/presentaciones/19, CLASE ESTÓMAGO-ESÓFAGO Griselda.ppt",
		"class": "cap-b",	
	});
	$(".row10").find("td").eq(2).html("19");
	$(".row10").find("td").eq(3).html("2016S10A202PRE10");
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
		title: "Descarga Intestino delgado y grueso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/20,CLASE INTESTINOS Griselda.ppt",
		"class": "cap-a",
	});
	$(".row11").find("a").eq(1).html("Intestino delgado y grueso").attr({
		title: "Descarga Intestino delgado y grueso",
		href: "medicinaresources_staticfiles/histologia/presentaciones/20,CLASE INTESTINOS Griselda.ppt",
		"class": "cap-b",
		});
	$(".row11").find("td").eq(2).html("20");
	$(".row11").find("td").eq(3).html("2016S10A202PRE11");
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
		title: "Descarga Hígado y Vesicula biliar",
		href: "medicinaresources_staticfiles/histologia/presentaciones/21, CLASE HÍGADO Y VESÍCULA BILIAR Griselda.ppt",
		"class": "cap-a",
	});
	$(".row12").find("a").eq(1).html("Hígado y Vesicula biliar").attr({
		title: "Descarga Hígado y Vesicula biliar",
		href: "medicinaresources_staticfiles/histologia/presentaciones/21, CLASE HÍGADO Y VESÍCULA BILIAR Griselda.ppt",
		"class": "cap-b",
	});
	$(".row12").find("td").eq(2).html("21");
	$(".row12").find("td").eq(3).html("2016S10A202PRO12");
	//row 13
		$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"insertAfter": ".row12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row13",
		"style": "background-color: #18392b;",
	});
	$(".row13").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Páncreas y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/22, CLASE PANCREAS Y EMBRIO GI Griselda.ppt",
		"class": "cap-a",
	});
	$(".row13").find("a").eq(1).html("Páncreas y su Embriología").attr({
		title: "Descarga Páncreas y su Embriología",
		href: "medicinaresources_staticfiles/histologia/presentaciones/22, CLASE PANCREAS Y EMBRIO GI Griselda.ppt",
		"class": "cap-b",
	});
	$(".row13").find("td").eq(2).html("22");
	$(".row13").find("td").eq(3).html("2016S10A202PRO13");
	//row head 2
		$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": ".row13",
		"class": "head-two",
		html: "<tr><th style='color: #e39e54;'>Descargar</th><th style='color: #f7f7f7;'>Presentaciones Dra. Zayda Trejo</th><th style='color: #d64d4d;'>Semana</th><th style='color: #9ed670;'>Código</th> </tr>",
	});
	//tbody2
	$("<tbody/>", {
		href: "histp_present.html",
		"appendTo": ".table",
		"insertAfter": ".head-two",
		"class": "tbody2",
		html: "<tr style='background-color: #18392b;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$(".tbody2").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Embriología semanas 1 a 3",
		href: "medicinaresources_staticfiles/histologia/presentaciones/1 CLASE Embriologia Semanas 1-3 Zayda trejo.ppt",
		"class": "cap-a",
	});
	$(".tbody2").find("a").eq(1).html("Embriología semanas 1 a 3").attr({
		title: "Descarga Embriología semanas 1 a 3",
		href: "medicinaresources_staticfiles/histologia/presentaciones/1 CLASE Embriologia Semanas 1-3 Zayda trejo.ppt",
		"class": "cap-b",
	});
	$(".tbody2").find("td").eq(2).html("1");
	$(".tbody2").find("td").eq(3).html("2016S10A202PREZT1");
	//row 15
	$("<tr/>", {
		href: "histo_present.html",
		"appendTo": ".tbody2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row1zt",
		//"style": "background-color: #18392b;",
	});
	$(".row1zt").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Embriología Semanas 4 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/2 CLASE EMBRIOLOGIA CUARTA A OCTAVA SEMANAS Zayda trejo.pptx",
		"class": "cap-a",
	});
	$(".row1zt").find("a").eq(1).html("Embriología Semanas 4 a 8").attr({
		title: "Descarga Embriología Semanas 4 a 8",
		href: "medicinaresources_staticfiles/histologia/presentaciones/2 CLASE EMBRIOLOGIA CUARTA A OCTAVA SEMANAS Zayda trejo.pptx",
		"class": "cap-b",
	});
	$(".row1zt").find("td").eq(2).html("1");
	$(".row1zt").find("td").eq(3).html("2016S10A202PROZT2");
	//row 16
	$("<tr/>", {
		href: "histo_present.html",
		"appendTo": ".tbody2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
		"class": "row2zt",
		"style": "background-color: #18392b;",
	});
	$(".row2zt").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/3 CLASE tejido-epitelial-Carolina Gomez.ppt",
		"class": "cap-a",
	});
	$(".row2zt").find("a").eq(1).html("Tejido Epitelial").attr({
		title: "Descarga Tejido Epitelial",
		href: "medicinaresources_staticfiles/histologia/presentaciones/3 CLASE tejido-epitelial-Carolina Gomez.ppt",
		"class": "cap-b",
	});
	$(".row2zt").find("td").eq(2).html("3");
	$(".row2zt").find("td").eq(3).html("2016S10A202PROZT3");
});