window.onload = init;


function init(){

  document.getElementById('nombre').addEventListener("input",(e)=>{
    let nombre = e.target.value;
    let nombreValidoRegex = /^[A-Za-z]+$/;
    if(!nombreValidoRegex.test(nombre)){
      e.target.style.borderColor = "red";
      if(!document.querySelector("ul > li:nth-child(1) > label:nth-of-type(2)")){
        document.querySelector("ul > li:nth-child(1)").
        appendChild(document.createElement("label")).appendChild(document.createTextNode("Nombre invalido!"));
      }
    }else{
      if (document.querySelector("ul > li:nth-child(1) > label:nth-of-type(2)")){
          document.querySelector("ul > li:nth-child(1)").removeChild(document.querySelector("ul > li:nth-child(1) > label:nth-of-type(2)"));
          e.target.style.borderColor = null;
      }
    }
  });


  document.getElementById('nacimiento').addEventListener("input",(e)=>{
    let nombre = e.target.value;
    let nombreValidoRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    if(!nombreValidoRegex.test(nombre)){
      e.target.style.borderColor = "red";
      if(!document.querySelector("ul > li:nth-child(2) > label:nth-of-type(2)")){
        document.querySelector("ul > li:nth-child(2)").
        appendChild(document.createElement("label")).appendChild(document.createTextNode("Fecha invalida!"));
      }
    }else{
      if (document.querySelector("ul > li:nth-child(2) > label:nth-of-type(2)")){
          document.querySelector("ul > li:nth-child(2)").removeChild(document.querySelector("ul > li:nth-child(1) > label:nth-of-type(2)"));
          e.target.style.borderColor = null;
      }
    }
  });

  document.getElementById('direccion').addEventListener("input",(e)=>{
    let nombre = e.target.value;
    let nombreValidoRegex = /[$%&|<>#@`'()_/\\!@^*,~;:+]/;
    if(nombreValidoRegex.test(nombre)){
      e.target.style.borderColor = "red";
      if(!document.querySelector("ul > li:nth-child(3) > label:nth-of-type(2)")){
        document.querySelector("ul > li:nth-child(3)").
        appendChild(document.createElement("label")).appendChild(document.createTextNode("Caracter invalido, direccion incorrecta!"));
      }
    }else{
      if (document.querySelector("ul > li:nth-child(3) > label:nth-of-type(2)")){
          document.querySelector("ul > li:nth-child(3)").removeChild(document.querySelector("ul > li:nth-child(3) > label:nth-of-type(2)"));
          e.target.style.borderColor = null;
      }
    }
  });

  document.getElementById('curp').addEventListener("input",(e)=>{
    let nombre = e.target.value;
    let nombreValidoRegex = /\w{18}/;
    if(!nombreValidoRegex.test(nombre)){
      e.target.style.borderColor = "red";
      if(!document.querySelector("ul > li:nth-child(4) > label:nth-of-type(2)")){
        document.querySelector("ul > li:nth-child(4)").
        appendChild(document.createElement("label")).appendChild(document.createTextNode("Caracter invalido, CURP incorrecta!"));
      }
    }else{
      if (document.querySelector("ul > li:nth-child(4) > label:nth-of-type(2)")){
          document.querySelector("ul > li:nth-child(4)").removeChild(document.querySelector("ul > li:nth-child(4) > label:nth-of-type(2)"));
          e.target.style.borderColor = null;
      }
    }
  });

  document.getElementById('mail').addEventListener("input",(e)=>{
    let nombre = e.target.value;
    let nombreValidoRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!nombreValidoRegex.test(nombre)){
      e.target.style.borderColor = "red";
      if(!document.querySelector("ul > li:nth-child(5) > label:nth-of-type(2)")){
        document.querySelector("ul > li:nth-child(5)").
        appendChild(document.createElement("label")).appendChild(document.createTextNode("Email invalido!"));
      }
    }else{
      if (document.querySelector("ul > li:nth-child(5) > label:nth-of-type(2)")){
          document.querySelector("ul > li:nth-child(5)").removeChild(document.querySelector("ul > li:nth-child(5) > label:nth-of-type(2)"));
          e.target.style.borderColor = null;
      }
    }
  });

  document.getElementById('mandar').addEventListener("click",(e)=>{
      if(document.querySelectorAll("label:nth-of-type(2)").length > 0){
         document.querySelector("body > form").setAttribute("onsubmit", "return false;");
         document.querySelector("body > form").style.borderColor = "red";
      }else{
        document.querySelector("body > form").removeAttribute("onsubmit")
      }
  });


}
