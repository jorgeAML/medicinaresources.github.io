$(document).ready(function () {
	//Apache 2.0 license on aviso_legal_licencia.html
	$("<div/>", {
		href: "aviso_legal_licencia.html",
		"appendTo": ".asf_terms",
		"class": "license",
		html: "<h1/><p/><p/><p/>",
	});
	$(".license").find("h1").eq(0).html("Copyright 14/6/2017 AML Productions");
	$(".license").find("p").eq(0).html("Licensed under the Apache License, Version 2.0 [the 'License']<br> you may not use this file except in compliance with the License.");
	$(".license").find("p").eq(1).html("Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing  permissions and limitations under the License.");
	$(".license").find("p").eq(2).html("The Apache license is only for Use, Reproduction and Distribution the project on <a class='at-4' href='https://github.com/jorgeAML'>Github</a>. This license doesn't apply to all documents on Medicinaresources.com");
})