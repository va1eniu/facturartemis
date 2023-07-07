import {getCategorias, newCategoria, getOneCategoria,deleteCategoria,updateCategorias } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCategorias()
    console.log('hola');
})



async function cargarCategorias() {
    const categoria = await getCategorias()
    const tablaCategoria = document.querySelector("#datosCategorias")
    categoria.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
        tablaCategoria.innerHTML += `
        <tr>
          <th scope="row">${CategoriaID}</th>
          <td>${CategoriaNombre}</td>
          <td>${Descripcion}</td>
          <td>
            <img src"${Imagen}" alt="no sale">
          </td>
  
          <td><button class="btn btn-danger delete" id="${CategoriaID}">eliminar</button></td>
          <td>
            <button type="button" class="btn btn-primary editar" id="${CategoriaID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Editar
            </button>
          </td>

        </tr>
        `
    });
    
} 



const formulario = document.getElementById("registro")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    let CategoriaNombre = document.querySelector("#CategoriaNombre").value
    let Descripcion = document.querySelector("#Descripcion").value
    let Imagen = document.querySelector("#Imagen").value

    const registro={
        CategoriaNombre,
        Descripcion,
        Imagen,
    }

    return newCategoria(registro); 

}

)



const eliminar = document.querySelector('#datosCategorias')
eliminar.addEventListener('click',borrarEditar)


function borrarEditar(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
       const idCategoria = e.target.getAttribute('id')
        console.log(idCategoria);
        const confir = (idCategoria) =>{
        const confir = confirm("desea eliminarlo?")
            if (confir) {
               
                deleteCategoria(idCategoria)
                
            }
        
        }


    }else if(e.target.classList.contains('editar')){
        const idCategoria = e.target.getAttribute('id');
        const datoCategoria = getOneCategoria(idCategoria);
        
        datoCategoria.then((resultado) => {
          const dataArray = resultado[0];
          console.log(dataArray);
        
          const modalNombre = document.getElementById("updateCategoriaNombre");
          modalNombre.value = dataArray.CategoriaNombre;

          const modalDescripcion = document.getElementById("updateDescripcion")
          modalDescripcion.value = dataArray.Descripcion;

        const editar = document.querySelector('#updateModal');
        editar.addEventListener('submit', updatecategoria);


        function updatecategoria(e){
            e.preventDefault();

            const CategoriaNombre = document.getElementById("updateCategoriaNombre").value
            const Descripcion = document.getElementById("updateDescripcion").value
            const Imagen = document.getElementById("updateImagen").value

            const arrayUpdate = {
                CategoriaNombre,
                Descripcion,
                Imagen
            }
            const id = dataArray.CategoriaID
            console.log(id);
            updateCategorias(arrayUpdate,id)

        }


        });   
    }   
}





