$(document).ready(function () {
	var $a = $('.a1').append("<a>Resumenes bloque 3</a>");
	var $a = $('.a2').append("<a>Resumenes bloque 5</a>");
	var $a = $('.a3').append("<a>Resumenes completo</a>");
	var $a = $('.a4').append("<a>Resumenes bloque 4</a>");
	var $a = $('.a5').append("<a>Resumenes bloque 3.1</a>");
	var $a = $('.a6').append("<a>Transmision de sensaciones</a>");
	var $a = $('.a7').append("<a>Datos aparato digestivo</a>");
	var $a = $('.a8').append("<a>Datos Sistema Urinario</a>");
	var $a = $('.a9').append("<a>Datos de Hormonas</a>");
	var $a = $('.a10').append("<a>Logaritmo RCP basico</a>");
	var $a = $('.a11').append("<a>Lab #3 Contraccion</a>");
	var $a = $('.a12').append("<a>Guia Fisiologia femenina y masculina</a>");
	var $a = $('.a13').append("<a>Guia Bloque 1</a>");
	var $a = $('.a14').append("<a>Guia Renal</a>");
	var $a = $('.a15').append("<a>Guia renal II</a>");
	var $a = $('.a16').append("<a>Guia Jonathan Molina I</a>");
	var $a = $('.a17').append("<a>Guia general</a>");
	$('#monitor').click(function(){
		$('.monitorwhite').slideToggle('slow');
	});
	$('#monitor,.monitor1,.monitor2,.monitor3,.monitor4,.monitor5').mouseenter(function(){
		$(this).fadeTo('fast',0.5);
		$('#monitor,.monitor1,.monitor2,.monitor3,.monitor4,.monitor5').mouseleave(function(){
			$(this).fadeTo('fast',1);
		});
	});
	var $id = $('.hpo').append("<h3>Parciales 2009</h3>");
	var $id = $('.hpo1').append("<h3>Parciales 2010</h3>");
	var $cas = $('.a18').append("<li>Tercer parcial 2009</li>");
	var $cas = $('.a19').append("<li>Tercer parcial 2003-2009</li>");
	var $cas = $('.a20').append("<li>Final 2009</li>");  
	$('.buttermilk').mouseenter(function(){
		$(this).fadeTo('fast',0.5);
		$('.buttermilk').mouseleave(function(){
			$(this).fadeTo('fast',1);
		});
	});
	var $cas = $('.a21').prepend("<a>DESCARGAR</a>");
	$('.monitor1').click(function(){
		$('.monitorwhite1').slideToggle('slow');
	});
	var $ca1 = $('.hpo2').append("<h3>Parciales 2011</h3");
	$('.monitor2').click(function(){
		$('.monitorwhite2').slideToggle('slow');
	});
	var $ca2 = $('.hpo3').append("<h3>Parciales 2012</h3>");
	$('.monitor3').click(function(){
		$('.monitorwhite3').slideToggle('slow');
	});
	var $ca3 = $('.hpo4').append("<h3>Parciales 2013</h3>");
	$('.monitor4').click(function(){
		$('.monitorwhite4').slideToggle('slow');
	});
	var $ca4 = $('.hpo5').append("<h3>Parciales 2014</h3>");
	$('.monitor5').click(function(){
		$('.monitorwhite5').slideToggle('slow');
	});
	var $hist = $('.hist1').append("<a>Manual de Laboratorio 2016</a>");
	var $hist1 = $('.hist2').append("<a>Manual de Laboratorio semana 1 a 5 2016</a>");
	var $hist2 = $('.hist3').append("<a>Manual de Laboratorio 2012</a>");
	var $hist3 = $('.hist4').append("<a>Laboratorio 2016 semana 6</a>");
	var $hist4 = $('.hist5').append("<a>Laboratorio 2016 semana 7</a>");
	var $hist5 = $('.hist6').append("<a>Laboratorio 2016 semana 8</a>");
	var $hist6 = $('.hist7').append("<a>Laboratorio 2016 semana 9</a>");
	var $hist7 = $('.hist8').append("<a>Laboratorio 2016 semana 10</a>");
	//var $hist8 = $('.hist9').append("<a>Manual de Laboratorio 2016 semana 7</a>");
	//var $hist9 = $('.hist10').append("<a>Manual de Laboratorio 2016 semana 7</a>");
	$('.aml_whitebk').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
		$('.aml_whitebk2').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
			$('.aml_whitebk3').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_whitebk4').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_bottonhis1').hover(function(){
		$(this).addClass('active_bottonaml');
	},function(){
		$(this).removeClass('active_bottonaml')
	});
		$('.aml_bottonhis4').hover(function(){
		$(this).addClass('active_bottonaml');
	},function(){
		$(this).removeClass('active_bottonaml')
	});
	$('.aml_whitebk').click(function(){
		$('.aml_bkcoldwhite').slideToggle('slow');
	});
	$('.aml_whitebk2').click(function(){
		$('.aml_bkcoldwhite2').slideToggle('slow');
	});
	$('.aml_whitebk3').click(function(){
		$('.aml_bkcoldwhite3').slideToggle('slow');
	});
	$('.aml_whitebk4').click(function(){
		$('.aml_bkcoldwhite4').slideToggle('slow');
	});
	$('.aml_whitebk5').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_whitebk5').click(function(){
		$('.aml_bkcoldwhite5').slideToggle('slow');
	});
	$('.aml_whitebk6').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_whitebk6').click(function(){
		$('.aml_bkcoldwhite6').slideToggle('slow');
	});
		$('.aml_whitebk7').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_whitebk7').click(function(){
		$('.aml_bkcoldwhite7').slideToggle('slow');
	});
	$('.aml_whitebk8').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
	$('.aml_whitebk8').click(function(){
		$('.aml_bkcoldwhite8').slideToggle('slow');
	});
	$('.aml_whitebk9').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
		$('.aml_whitebk9').click(function(){
		$('.aml_bkcoldwhite9').slideToggle('slow');
	});
		$('.aml_whitebk10').hover(function(){
		$(this).addClass('active_aml');
	},function(){
		$(this).removeClass('active_aml');
	});
				$('.aml_whitebk10').click(function(){
		$('.aml_bkcoldwhite10').slideToggle('slow');
	});
     $('.aml_whitebk4').click(function(){
		$('.aml_bkcoldwhite4_B1').slideToggle('slow');
	});
          $('.aml_whitebk').click(function(){
		$('.aml_bkcoldwhite4_B2').slideToggle('slow');
	});
           $('.aml_whitebk2').click(function(){
		$('.aml_bkcoldwhite4_B3').slideToggle('slow');
	});
$('.aml_whitebk2').click(function(){
		$('.aml_bkcoldwhite12').slideToggle('slow');
	});
$('.aml_whitebk3').click(function(){
		$('.aml_bkcoldwhite11').slideToggle('slow');
	});
$('.aml_whitebk4').click(function(){
		$('.aml_bkcoldwhite9_A').slideToggle('slow');
	});
$('.aml_whitebk5').click(function(){
		$('.aml_bkcoldwhite9_B').slideToggle('slow');
	});
$('.aml_whitebk6').click(function(){
		$('.aml_bkcoldwhite9_C').slideToggle('slow');
	});
$('.aml_whitebk2').click(function(){
		$('.aml_bkcoldwhite14').slideToggle('slow');
	});
$('.aml_whitebk4').click(function(){
		$('.aml_bkcoldwhite13').slideToggle('slow');
	});
$('.aml_bottonhis3').hover(function(){
		$(this).addClass('active_bottonaml');
	},function(){
		$(this).removeClass('active_bottonaml')
	});
$('.aml_bottonhis7').hover(function(){
		$(this).addClass('active_bottonaml');
	},function(){
		$(this).removeClass('active_bottonaml')
	});
});