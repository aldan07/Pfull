// MENU : Página principal
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e){
	e.preventDefault();
	if(contador==0){
		enlaces.className = ("links two")
		contador=1;
	}else{
		enlaces.classList.remove("two")
		enlaces.className = ("links one")
		contador=0;
	}
});

