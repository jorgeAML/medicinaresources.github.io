$(document).ready(function() {

	//this jQuery selector elements are the section in the index.html "Cursos oficiales".
	//Only attributes
	$('.aml_img_co').attr( 'style', 'width: 330px', 'height: 300px');
	$('.aml_img_co').attr({
		alt: "300x300",
		border: "3px solid #666547",
	});
	$(".aml_img_cr").attr({
		width: "330px",
		height: "330px",
	});
	$(".aml_acr").attr({
		title: "Opioides",
		href: "http://sites.jamanetwork.com/opioids/?utm_campaign=Opioids&utm_medium=banner&utm_source=house&utm_content=mobile&utm_term=300x250",
	});
	$(".show_info img").attr({
		title: "Ir a recursos de Anatomia: cuestionarios, parciales, etc.",
	});
	$(".show_info2 img").attr({
		title: "Ir a recursos de Fisiologia: resumenes, parciales, etc."
	});
	$(".show_info3 img").attr({
		title: "Ir a recursos de Histologia: presentaciones, parciales, etc."
	})
	$(".show_info4 img").attr({
		title: "Ir a recursos de Bioquimica: Panucchis, parciales, etc."
	})
	$(".show_info5 img").attr({
		title: "Ir a recursos de Salud Publica: Modulo de investigacion, parciales, etc."
	})
	$(".show_info6 img").attr({
		title: "Ir a recursos de Semiologia: Bloque de adultos, parciales, etc."
	})
	$(".semio_hide").attr( "margin-right", "10%;" );
	$("img.img_eventos1").attr({
		width: "330px",
		height: "330px",
	});
	$(".col-md-4 img.img_eventos2").attr({
		width: "350px",
		height: "350px",
	});
	$(".aml_evenlink").attr({
		title: "Discapacidad No es Incapacidad (Taller) SCORP Guatemala",
		href: "http://www.medicinaresources.com/evento1.html",
	});
	$(".aml_evenlink2").attr({
		title: "Soporte vital en trauma Pre-Hospitalario (Certificado)",
		href: "http://www.medicinaresources.com/evento2.html",
	});
	$(".aml_evenlink3").attr({
		title: "Avances de Trauma Ortopedico y traumatologico (Congreso)",
		href: "http://www.medicinaresources.com/evento3.html",
	});
	//Chaining

	//Just functions for my elements
	$('.col-md-4 img').mouseover(function() {
		$(this).fadeTo('fast',0.5);
	$('.col-md-4 img').mouseleave(function() {
		$(this).fadeTo('fast',1.5);
		});
	});
	$(".ana_hidden").hide();
	$(".show_info").mouseover(function(){
		$(".ana_hidden").slideDown( "slow" );
		$(".show_info").mouseleave(function(){
			$(".ana_hidden").slideUp( "slow" );
		});
	});
	$(".fisio_hidden").hide();
	$(".show_info2").mouseover(function(){
		$(".fisio_hidden").slideDown("slow");
		$(".show_info2").mouseleave(function(){
			$(".fisio_hidden").slideUp("slow");
		});
	});
	$(".histo_hidden").hide();
	$(".show_info3").mouseover(function(){
		$(".histo_hidden").slideDown("slow");
		$(".show_info3").mouseleave(function(){
			$(".histo_hidden").slideUp("slow");
		});
	});
	$(".bioqui_hidden").hide();
	$(".show_info4").mouseover(function(){
		$(".bioqui_hidden").slideDown("slow");
		$(".show_info4").mouseleave(function(){
			$(".bioqui_hidden").slideUp("slow");
		});
	});
	$(".salud_hide").hide();
	$(".show_info5").mouseover(function(){
		$(".salud_hide").slideDown("slow");
		$(".show_info5").mouseleave(function(){
			$(".salud_hide").slideUp("slow");
		});
	});
	$(".semio_hide").hide();
	$(".show_info6").mouseover(function(){
		$(".semio_hide").slideDown("slow");
		$(".show_info6").mouseleave(function(){
			$(".semio_hide").slideUp("slow");
		});
	});
	$(".aml_opioide").hide();
	$(".credits1").hide();
	$(".aml_opioide_container").mouseover (function(){
		$(".aml_opioide, .credits1").slideDown("slow");
		$(".aml_opioide_container").mouseleave(function(){
			$(".aml_opioide, .credits1").slideUp("slow");
		});
	});
	$("p.aml_cancer").hide();
	$("div.credits2").hide();
	$(".aml_cancer_container").mouseover(function(){
		$(".aml_cancer, .credits2").slideDown("slow");
		$(".aml_cancer_container").mouseleave(function(){
			$(".aml_cancer, .credits2").slideUp("slow");
		});
	});
	$("p.aml_imedex_p").hide();
	$("div.credits3").hide();
	$(".aml_imedex").mouseover(function(){
		$(".aml_imedex_p, .credits3").slideDown( "slow" );
		$(".aml_imedex").mouseleave(function(){
			$(".aml_imedex_p, .credits3").slideUp( "slow" );
		});
	});
	//all the variables are saving selections, this is my cache elements!
	var bootstrap_grid = $("col-md-4");
	var bootstrap_grid_img = $("col-md-4 img");
	var hidden_paragraph = $(".hidep");
	var hidden_paragraph2 = $(".ana_hidden");
	var show_info = $(".show_info");
	var hidden_fisio_p = $(".fisio_hidden");
	var show_info2 = $(".show_info2");
	var hidden_histo_p = $(".histo_hidden");
	var show_info3 = $(".show_info3");
	var hide_bioqui_p = $(".bioqui_hidden");
	var show_info4 = $(".show_info4");
	var hide_salud = $(".salud_hide");
	var semio_hide = $(".semio_hide");
	var show_info5 = $(".show_info5");
	var show_info6 = $(".show_info6");
	var images_cursos_oficiales = $(".aml_img_co");
	var aml_opioide = $(".aml_opioide");
	var credits_hide = $(".credits");
	var aml_opioide_container = $(".aml_opioide_container");
	var credits1 = $(".credits1");
	var aml_cancer_container = $(".aml_cancer_container");
	var aml_cancer = $(".aml_cancer");
	var credits2 = $(".credits2");
	var aml_imedex = $(".aml_imedex");
	var aml_imedex_p = $(".aml_imedex_p");
	var credits3 = $(".credits3");
	var img_eventos1 = $(".img_eventos1");
	var img_eventos2 = $(".img_eventos2");
	var aml_evenlink = $(".aml_evenlink");
	var aml_evenlink2 = $(".aml_evenlink2");
	var aml_evenlink3 = $(".aml_evenlink3");
	//var btn btn-default = $(".btn btn-default");
	//all methods .remove will be after this row.
	$('').remove();
});
