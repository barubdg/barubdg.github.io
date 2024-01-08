function selectNavItem(element) {
    // Remover la clase 'active' de todos los elementos de navegación
    var navItems = document.querySelectorAll('nav a');
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });
  
    // Agregar la clase 'active' al elemento de navegación clicado
    element.classList.add('active');
  }
  

  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
  })

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  } )



