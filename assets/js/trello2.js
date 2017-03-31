function crearLista(){
  var inputUsuario = document.getElementById('nombreLista');//Agrego titulo
  var almacenLista = document.getElementById('almacenLista');
  var titulo = document.createElement("h2");
  titulo.style.fontWeight="bold";
  titulo.style.fontSize="150%";
  var textoTitulo = document.createTextNode(inputUsuario.value );
  titulo.appendChild(textoTitulo);
  almacenLista.appendChild(titulo);
  inputUsuario.value = "";
  console.log(titulo);
  var listaBase = document.createElement("ul");//agrego formato de lista
  almacenLista.appendChild(listaBase);
  var inputPendiente = document.createElement("input");//creo input de pendientes
  inputPendiente.setAttribute("type","text","placeholder","agrega pendiente");
  almacenLista.appendChild(inputPendiente);
  var boton = document.createElement("button");//creo boton agrega pendientes
  var textoBoton = document.createTextNode("agregar");
  boton.appendChild(textoBoton);
  almacenLista.appendChild(boton);
  boton.onclick = function agregarPendientes(){
     var valorInputPendiente =inputPendiente.value;
     var elementoNuevoLista = document.createElement('li');
     var elementoNuevoListaTexto = document.createTextNode(valorInputPendiente);
     elementoNuevoLista.appendChild(elementoNuevoListaTexto);
     listaBase.appendChild(elementoNuevoLista);
     }
     var botonBorrar = document.createElement("button");
     var textoBoton = document.createTextNode("borrar");
     botonBorrar.appendChild(textoBoton);
     almacenLista.appendChild(botonBorrar);
     botonBorrar.onclick = function borrarPendiente(){
      listaBase.removeChild();
     }


  var separador = document.createElement("hr");//linea divisora
  almacenLista.appendChild(separador);

}
