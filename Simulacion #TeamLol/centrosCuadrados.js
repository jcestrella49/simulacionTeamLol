//Equipo Juan Carlos Estrella
window.onload=function()
{
	var tabla = document.getElementById("tabla");

	document.getElementById("generar").onclick = function (){
		var tlength = tabla.rows.length;
		if(tlength>1){
			for (var i = tlength - 1; i >= 1; i--) {
				tabla.deleteRow(i);
			}			
		}	

		var res = document.getElementById("raiz").value;		
		var tbody = document.createElement("tbody");
		var tfoot = document.createElement("tfoot");
		var l1 = res.length;
		var sw = true;

		var celda;
		var txtcelda;
		var hilera;

		var c = 0;
		var v=[];
		while(sw){
			hilera = document.createElement("tr");
			v[c] = res;
			var x = Math.pow(res,2);	
			x = x % (Math.pow(10,(l1+(l1/2))));
			x =Math.trunc(x /(Math.pow(10,(l1/2))));
			for (var i = 0 ; i < c+1; i++) {
				if (v[i]==x){
					sw=false;
				}
			}
			c++;
			if (sw){				
				res = x;
				celda = document.createElement("td");
                txtcelda = document.createTextNode(c);
                celda.appendChild(txtcelda);
                hilera.appendChild(celda);
                celda = document.createElement("td");
                txtcelda = document.createTextNode("0."+x);
                celda.appendChild(txtcelda);				
				hilera.appendChild(celda);
			}
			 tbody.appendChild(hilera);		
		}
		hilera = document.createElement("tr");
		hilera.className="danger";
		celda = document.createElement("td");
        txtcelda = document.createTextNode("Número repetido");
        celda.appendChild(txtcelda);
		hilera.appendChild(celda);
        celda = document.createElement("td");
        txtcelda = document.createTextNode("0."+x);
        celda.appendChild(txtcelda);
		hilera.appendChild(celda);
		tfoot.appendChild(hilera);
		tabla.appendChild(tbody);
		tabla.appendChild(tfoot);
	}
}