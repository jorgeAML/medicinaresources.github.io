$(document).ready(function(){
	$('.title').mouseenter(function(){
		$(this).fadeTo('fast',0.5);
		$('.title').mouseleave(function(){
			$(this).fadeTo('fast',1);
		});
	});
	$().click(function(){
		$(this).fadeOut('slow');
	});
	$('.anat,.hist,.bio,.fis,.sp,.sm').mouseenter(function(){
		$(this).fadeTo('fast',0.5);
		$('.anat,.hist,.bio,.fis,.sp,.sm').mouseleave(function(){
			$(this).fadeTo('fast',1);
		});
	});
	$('.anat').click(function(){
		$('#cues,.pres').slideToggle('slow');
	});
	$('.fis').click(function(){
		$('.pro1,.pro2,.pro3,.pro4').slideToggle('slow');
	});
	$('.hist').click(function(){
		$('.histo1,.histo2,.histo3').slideToggle('slow');
	});
	$('.bio').click(function(){
		$('.bio1,.bio2,.bio3').slideToggle('slow');
	});
	$('.sp').click(function(){
		$('.sap1,.sap2,.sap3,.sap4').slideToggle('slow');
	});
	$('.sm').click(function(){
		$('.semio1,.semio2,.semio3').slideToggle('slow');
	});
	var $p = $('.a1').prepend("<a>Programacion</a>");
	var $p = $('.a2').prepend("<a>Libros</a>");
	var $p = $('.a3').append("<a>Resumenes varios</a>");
	var $p = $('.a4').prepend("<a>Resumenes Yuri</a>");
	var $p = $('.a5').prepend("<a>Resumenes kenia</a>");
	var $p = $('.a6').append("<a>Resumenes Jorge</a>");
	var $p = $('.a7').prepend("<a>Casos Clinicos</a>");
	var $p = $('.a8').prepend("<a>Presentaciones Garcia</a>");
	var $p = $('.a9').prepend("<a>Presentaciones JM</a>");
	var $p = $('.a10').prepend("<a>Parciales</a>")

	$('.pro1,.pro2,.pro3,.pro4').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('.pro1,.pro2,.pro3,.pro4').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
	$('#cues,.pres').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('#cues,.pres').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
	$('.histo1,.histo2,.histo3').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('.histo1,.histo2,.histo3').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
	$('.bio1,.bio2,.bio3').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('.bio1,.bio2,.bio3').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
	$('.sap1,.sap2,.sap3,.sap4').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('.sap1,.sap2,.sap3,.sap4').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
		$('.semio1,.semio2,.semio3').mouseenter(function(){
		$(this).fadeTo('fast',1);
		$('.semio1,.semio2,.semio3').mouseleave(function(){
			$(this).fadeTo('fast',0.75);
		});
	});
	var $p = $('.h1').prepend("<a>Programacion</a>");
	var $p = $('.h2').prepend("<a>Libros</a>");
	var $p = $('.h3').prepend("<a>Presentaciones varios</a>");
	var $p = $('.h4').prepend("<a>Presentaciones Silvia</a>");
	var $p = $('.h5').prepend("<a>Resumenes</a>");
	var $p = $('.h6').prepend("<a>Resumenes Sofia</a>");
	var $p = $('.h7').prepend("<a>Laminillas parte 1</a>");
	var $p = $('.h8').prepend("<a>Laminillas parte 2</a>");
	var $p = $('.h9').prepend("<a>Parciales</a>");
	var $p = $('.b1').prepend("<a>Programacion</a>");
	var $p = $('.b2').prepend("<a>Libros</a>");
	var $p = $('.b3').prepend("<a>Guias</a>");
	var $p = $('.b4').prepend("<a>Presentaciones General</a>");
	var $p = $('.b5').prepend("<a>presentaciones varios</a>");
	var $p = $('.b6').prepend("<a>Resumenes</a>");
	var $p = $('.b7').prepend("<a>Panuccis</a>");
	var $p = $('.b8').prepend("<a>Parciales</a>");
	var $p = $('.b9').prepend("<a>Casos Clinicos</a>");
	var $p = $('.s1').prepend("<a>Programacion</a>");
	var $p = $('.s2').prepend("<a>Libros</a>");
	var $p = $('.s3').prepend("<a>Realidad Nacional</a>");
	var $p = $('.s4').prepend("<a>Epidemiologia</a>");
	var $p = $('.s5').prepend("<a>Epidemiologia Resumenes</a>");
	var $p = $('.s6').prepend("<a>Epidemiologia Asis</a>");
	var $p = $('.s7').prepend("<a>investigacion</a>");
	var $p = $('.s8').prepend("<a>investigacion Resumenes</a>");
	var $p = $('.s9').prepend("<a>Salud Preventiva</a>");
	var $p = $('.s10').prepend("<a>Parciales</a>");
	var $p = $('.m1').prepend("<a>Programacion</a>");
	var $p = $('.m2').prepend("<a>Libros</a>");
	var $p = $('.m3').prepend("<a>Introductoria</a>");
	var $p = $('.m4').prepend("<a>Modulo de Adultos</a>");
	var $p = $('.m5').prepend("<a>Modulo de Ninos</a>");
	var $p = $('.m6').prepend("<a>Dermatologia</a>");
	var $p = $('.m7').prepend("<a>Parciales</a>");
	$("a").click(function(event){
		alert("Gracias por utilizar el mapa!");
		//event.preventDefault();
	});
});
//histologia color: 769C8F
//bioquimica color: 00A685