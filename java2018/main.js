$(document).ready(function (){
    $("<img>", {
		"appendTo": ".nav",
		"class": "imgportrait",
		"src": "imagenes2018/computer-Hestilo3.jpg",
		"size": "1400w",		
		"srcset": "computer-bajacalidad600.jpg 600w" + "computer-bajacalidad.jpg 100w",
	});
    $("<div/>", {
		"appendTo": ".nav",
		"class": "navbar",
		"html": "<div/><div/><nav><div/><div/><div/></nav>",
	});
	$(".navbar").find("nav").eq(0).attr({
		"class": "{{c0}}",
	});
	$(".navbar").find("div").eq(1).html("<i class='material-icons'>&#xE5D2;</i>").attr({
		"class": "{{c3}} navbar_link-toogle",
	});
	$(".navbar").find("div").eq(0).html("<a href='{{hN0}}'>{{dN0}}</a>").attr({
		"class": "{{c3}} navbar_link-brand",
	});
	$(".navbar").find("div").eq(2).html("<a href='{{hN1}}'>{{dN1}}</a>").attr({
		"class": "{{c3}} scroll1",
	});
	$(".navbar").find("div").eq(3).html("<a href='{{hN2}}'>{{dN2}}</a>").attr({
		"class": "{{c3}}",
	});
	$(".navbar").find("div").eq(4).html("<a href='{{hN3}}'>{{dN3}}</a>").attr({
		"class": "{{c3}}",
	});
	$("<img>", {
		"appendTo": ".nav",
		"class": "imglogocenter",
		"src": "imagenes2018/recortado.png",
	});
	//class in array
	var classes = ['navbar_items', 'navbar_link', 'navbar_link-toggle', 'navbar_link', 'navbar_link-toogle', 'scroll1'];
	//STORAGE AND VUE ELEMENTS
	var navDes = ['MedicinaResources.com', 'Noticias', 'Información', 'Libros'];
	var iconM = "&#xE5D2;";
	//LINKS EN EL ORDEN QUE APARECEN
	var linksNav = ['#', 'https://jorgeaml.github.io/medicinaresourcesblog.github.io/', '#', '#'];
	//VUE IN ACTION
	new Vue({
		el: '.nav',
		data: {
			c0: classes[0],
			c3: classes[3],
			icon: iconM,
			hN0: linksNav[0],
			hN1: linksNav[1],
			hN2: linksNav[2],
			hN3: linksNav[3],
			dN0: navDes[0],
			dN1: navDes[1],
			dN2: navDes[2],
			dN3: navDes[3],
		}
	});

	/*
	FUCTION RESPONSIVE NAV 
	*/

	$(".navbar_link-toogle").click(function(){
		$(".navbar_items").slideToggle( 800 );
	})
	$(".navbar_items").click(function() {
		console.log('show this shit');
	});
	/*
	Scroll function */
	$(".scroll1").click(function(){
		$("html, body").animate({
			scrollTop: $(".container2").offset().top 
		}, 2000);
	});
	/*
	First container
	*/
	$("<div>",{
		"appendTo": ".ctr1p",
		"class": "row",
	});
	$("<div>",{
		"appendTo": ".row",
		"class": "container1",
	});
	$("<div>",{
		"appendTo": ".container1",
		"class": "inline1",
		//
	});
	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a1 margin_600",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a1").find("img").eq(0).attr({
		"src": "imagenes2018/Craneo.jpg",
		"class": "imgpost1-l",
	});
	$(".a1").find("p").eq(0).html("MedicinaResources - Cursos").attr({
		"class": "pf1",
	});
	$(".a1").find("h2").eq(0).html("Anatomía").attr({
		"class": "hf1",
	});
	$(".a1").find("p").eq(1).html("El origen de la anatomía se remonta en el antiguo Egipto, donde, ya entre los siglos XXX y XXVIII a.C. los embalsamadores fueron los primeros en poner en práctica la disección como técnica anatómica, si bien su aplicación no obedecía aún a motivaciones sanitarias o de investigación médica, sino a rituales religiosos.").attr({
		"class": "pf2",
	});
	$(".a1").find("div").html("Ir a recursos").attr({
		"class": "btn mtop",
		"title": "Ir a la sección de Anatomía",
	});
	$(".a1").find("a").eq(0).attr({
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/focus.jpg",
		
	});

	//Second COntainer

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a2 margin_600",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a2").find("img").eq(0).attr({
		"src": "imagenes2018/Fisiología.jpg",
		"class": "imgpost1-l",
	});
	$(".a2").find("p").eq(0).html("MedicinaResources - Cursos").attr({
		"class": "pf1",
	});
	$(".a2").find("h2").eq(0).html("Fisiología").attr({
		"class": "hf1",
	});
	$(".a2").find("p").eq(1).html("(del griego «φύσις» physis, naturaleza, y «λóγος» logos, conocimiento) es la disciplina científica que estudia las funciones de los seres vivos. La Fisiología reúne los principios base de las ciencias exactas, dando sentido a las interacciones de los elementos básicos de un ser vivo con su entorno y explicando el por qué de cada diferente situación en la que se puedan encontrar dichos elementos.").attr({
		"class": "pf2",
	});
	$(".a2").find("div").html("Ir a recursos").attr({
		"class": "btn",
		"title": "Ir a la sección de Fisiología",
	});
	$(".a2").find("a").eq(0).attr({
		href: "#",
		
	});

	//Third Container 

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a3 margin_600",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a3").find("img").eq(0).attr({
		"src": "imagenes2018/Histología.jpg",
		"class": "imgpost1-l",
	});
    $(".a3").find("p").eq(0).html("MedicinaResources - Cursos").attr({
		"class": "pf1",
	});
	$(".a3").find("h2").eq(0).html("Histología").attr({
		"class": "hf1",
	});
	$(".a3").find("p").eq(1).html("La histología (del griego ἱστός/histós, 'tejido', y λογία/logía, 'tratado, estudio, disciplina') es la disciplina que estudia todo lo relacionado con los tejidos orgánicos: su estructura microscópica, su desarrollo y sus funciones. Las primeras investigaciones histológicas fueron posibles a partir del año 1600, cuando se incorporó el microscopio a los estudios anatómicos. ").attr({
		"class": "pf2",
	});
	$(".a3").find("div").html("Ir a recursos").attr({
		"class": "btn",
		"title": "Ir a la sección de Histología",
	});
	$(".a3").find("a").eq(0).attr({
		href: "#",
		
	});
	/*
	container for blog
	*/
	$("<div>",{
		"appendTo": "ctr2b",
		"class": "row"
	});
	$("<div>",{
		"appendTo": ".row",
		"class": "container2",
	});
	$("<img>",{
		"appendTo": ".container2",
		"src": "imagenes2018/sea-recortado.png"
	});
	$("<div>",{
		"appendTo": ".container2",
		"class": "ctrR",
		html: "<h1/><p/><a><div/></a>"
	});
	$(".ctrR").find("h1").html("Echa un vistazo al blog de MedicinaResources").attr({
		"class": "ctr2pf",
	});
	$(".ctrR").find("p").html("Accede a nuestro blog y aprende cosas útiles del cual no solo hablaremos de medicina.").attr({
		"class": "ctr2pfc",
	});
	$(".ctrR").find("a").attr({
		href: "https://jorgeaml.github.io/medicinaresourcesblog.github.io/",
		title: "blog",
	});
	$(".ctrR").find("div").eq(0).html("Ir al blog").attr({
		"class": "ctr-ctr",
	});
	/*
	containers for 
	bioquimica
	salud publica
	semiologia
	*/
	/*
	First container
	*/
	$("<div>",{
		"appendTo": ".ctr3b",
		"class": "row",
	});
	$("<div>",{
		"appendTo": ".row",
		"class": "container1",
	});
	$("<div>",{
		"appendTo": ".container1",
		"class": "inline1",
	});
	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a4",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a4").find("img").eq(0).attr({
		"src": "imagenes2018/bioquimica.jpg",
		"class": "imgpost1-l",
	});
	$(".a4").find("p").eq(0).html("MedicinaResources - Cursos").attr({
		"class": "pf1",
	});
	$(".a4").find("h2").eq(0).html("Bioquímica").attr({
		"class": "hf1",
	});
	$(".a4").find("p").eq(1).html("La bioquímica es una ciencia que estudia la composición química de los seres vivos, especialmente las proteínas, carbohidratos, lípidos y ácidos nucleicos, además de otras pequeñas moléculas presentes en las células y las reacciones químicas que sufren estos compuestos (metabolismo) que les permiten obtener energía (catabolismo) y generar biomoléculas propias (anabolismo).  La bioquímica se basa en el concepto de que todo ser vivo contiene carbono...").attr({
		"class": "pf2",
	});
	$(".a4").find("div").html("Ir a recursos").attr({
		"class": "btn mtop",
		"title": "Ir a la sección de bioquímica",
	});
	$(".a4").find("a").eq(0).attr({
		href: "#",
		
	});

	//Second COntainer

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a5",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a5").find("img").eq(0).attr({
		"src": "imagenes2018/saludpublica.jpg",
		"class": "imgpost1-l",
	});
	$(".a5").find("p").eq(0).html("MedicinaResources - Cursos").attr({
		"class": "pf1",
	});
	$(".a5").find("h2").eq(0).html("Salud Pública").attr({
		"class": "hf1",
	});
	$(".a5").find("p").eq(1).html("La salud pública es la disciplina encargada de la protección, acomodación y sustentación filosófica y mejora de la salud de la población humana. Tiene como objetivo mejorar la salud, así como el control y la erradicación de las enfermedades.1 Es una ciencia de carácter multidisciplinario, ya que utiliza los conocimientos de otras ramas como las ciencias biológicas, conductuales, sanitarias y sociales. Es uno de los pilares en la formación de todo profesional de la salud.").attr({
		"class": "pf2",
	});
	$(".a5").find("div").html("Ir a recursos").attr({
		"class": "btn",
		"title": "Ir a la sección de Salud Pública",
	});
	$(".a5").find("a").eq(0).attr({
		href: "#",
		
	});

	//Third Container 

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a6",
		html: "<a><img><p/><h2/><p/><div/></a>",
	});
	$(".a6").find("img").eq(0).attr({
		"src": "imagenes2018/semiologia.jpg",
		"class": "imgpost1-l",
	});
    $(".a6").find("p").eq(0).html("{{t1}}").attr({
		"class": "pf1 mrc",
	});
	$(".a6").find("h2").eq(0).html("{{t2}}").attr({
		"class": "hf1 t2-6",
	});
	$(".a6").find("p").eq(1).html("En medicina, la semiología clínica es el cuerpo de conocimientos que se ocupa de cómo identificar las diversas manifestaciones patológicas (signos o manifestaciones clínicas objetivas y síntomas o percepciones subjetivas), de cómo buscar estas manifestaciones (semiotecnia), de cómo reunirlas en síndromes, y de cómo interpretarlas, jerarquizarlas y razonarlas (clínica semiológica o propedéutica). Gracias a ese cuerpo de conocimiento se puede llegar al diagnóstico.").attr({
		"class": "pf2",
	});
	$(".a6").find("div").html("Ir a recursos").attr({
		"class": "btn",
		"title": "Ir a la sección de Semiología",
	});
	$(".a6").find("a").eq(0).attr({
		href: "#",
		
	});
	//VUE
		//STORAGE
		var cursoSeis = "Semiología";
    	var medicinaCursos = "MedicinaResources - Cursos";
		//STORAGE
		var mediCur = new Vue({
		el: '.mrc',
		data: {
			t1: medicinaCursos
		}
	});
		
		var semioT = new Vue({
			el: '.t2-6',
			data: {
				t2: cursoSeis
			}
		});
});
