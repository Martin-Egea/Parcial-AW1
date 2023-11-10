const customCard = (title, desc, img, id) => {
    return `
    <div class="card my-3 mx-3" id="${id}" style="width: 20rem;">
    <div class="card-header"><h3>${title}</h3></div>
        <img src=${img} alt="imagen">
        <div class="desc">
            <p>${desc}</p>
        </div>
        <div class="card-footer">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button id="${id}" class="btn btn-danger me-md-2 botones-eliminar">Eliminar</button>
            </div>                        
        </div>
    </div>
    `
} 

let cardContainer = document.getElementById('cadContainer');
const btnCargar = document.getElementById('btnCargar')
let botonesEliminar = document.querySelectorAll('.botones-eliminar');
let contImagenes = 0
let cadenaDeCards = ''

/* window.addEventListener('load', () =>{

}) */

btnCargar.addEventListener('click', ()=>{
    event.preventDefault();
    const tituloImagen = document.getElementById('titulo').value;
    const descripcionImagen = document.getElementById('descripcion').value;
    const urlImagen = document.getElementById('imagen').value;
    
    if(tituloImagen.value === "" && urlImagen.value === ""){
        window.alert("Debe completar los campos obligatorios!");
    }else{
        contImagenes++;
        cadenaDeCards += customCard(tituloImagen, descripcionImagen, urlImagen,contImagenes)

        cardContainer.innerHTML = cadenaDeCards
        actualizarBotonesAgregar()
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) =>{            
                let idBoton = e.currentTarget.id
                let divParaEliminar = document.getElementById(idBoton)
                divParaEliminar.remove();        
            })
        })
    }
    
});

function actualizarBotonesAgregar(){
    botonesEliminar = document.querySelectorAll('.botones-eliminar');
  }

