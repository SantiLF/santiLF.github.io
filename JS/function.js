//No pude realizar un código para que se muestren los resultados de los otros 3 ícnonos en el mismo div
var elemento = document.getElementById("linkedin")
window.onload=function()
		{
			elemento.onmouseover = function(e) {
				document.getElementById("estado").innerHTML="linkedin";	
			};
			elemento.onmouseout = function(e) {
				document.getElementById("estado").innerHTML="";
			};
		}
