/* funcion enla cual guardamos el valor de fetch*/
window.getData = () => {
    fetch(`https://raw.githubusercontent.com/brenduchiz/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`)
    .then( response => response.json() )
    .then((res) => {

renderInfo(res)
//const limaData=computeStudentsStats(resdata);

//const mexData=computeGenerationsStats(resdata);
//console.log(limaData)


    })
    .catch((error) => {

    });
}

getData();



window.computeStudentsStats = (laboratoria,genera,sede) => {
let generac =genera;
let sedelima= sede;
let temas = '';
let name = '';
let nombresEstu;
  let resultado ="";
  let estudiante = laboratoria[sede].generacion[genera].estudiantes;
  for (let i = 0; i < estudiante.length; i++) {
  let nombre_tercera=estudiante[i];
if (nombre_tercera===estudiante[1]) {
  console.log(estudiante[0])
}



  let progreso =nombre_tercera.progreso;

//console.log(nombre_tercera)
let porcentajeComp =progreso.porcentajeCompletado;


let temasEstu = Object.keys(progreso.temas);

/*temasEstu.forEach(function(topicsStudents) {
let topics = topicsStudents;
  //console.log(element);
});*/
//console.log(prueba)
//console.log(status) porcentaje alumnas
/*for(key in progreso.temas){
               temas = key;
             console.log(temas[0]);
}*/

if(porcentajeComp < 60){
            status = "Estudiante de bajo del 60%";
          } else if(porcentajeComp > 90){
            status = "Estudiante de arriba del 90%"
          } else{
            status = "Estudiante entre el 60% y el 90%"
          }



pintar = `
<div class="p-3 mb-2 bg-light text-dark border tit" role="alert">
<h3 class="alert-heading" id="titulS">Sede  ${sedelima}</h3>
<h3 class="alert-heading" id="titulG">${generac} generacion  </h3>
</div>
`
sedespin.innerHTML=pintar;




resultado+=  `
<p>
<p>
  <p>
  <div class="p-3 mb-2 bg-light text-dark border" role="alert">
  <img src="imag/alumnas.svg.png" width="70" height="70" class="img-fluid imageEstu" alt="Responsive image " >
  <h4 class="alert-heading">${nombre_tercera.nombre}  </h4>


    <p> Correo: ${nombre_tercera.correo}</p>
    <p> Sede: ${sedelima}</option></p>
    <p> Generacion: ${generac}</p>
    <p> Status: ${status}</p>

    <hr>
    <h5 class="alert-heading">Progreso </h5>
    <p class="mb-0">Porcentaje Completado: ${progreso.porcentajeCompletado}%</p>
     <option>Duracion Programa: ${progreso.duracionPrograma}</option>
    <hr>
    <h5 class="alert-heading">Temas</h5>
  <div class="btn-group">
          <button type="button" class="btn btn-warning">+info</button>
          <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu" id="generacionesLima">
          <div class="topicss">
            <a class="dropdown-item" href="#" data-name="${nombre_tercera.nombre}">${temasEstu[0]}</a>
            <a class="dropdown-item" href="#" data-name="${nombre_tercera.nombre}">${temasEstu[1]}</a>
            <a class="dropdown-item" href="#" data-name="${nombre_tercera.nombre}">${temasEstu[2]}</a>
            </div>
            <div class="dropdown-divider"></div>
          </div>
        </div>






    </div>
   </p>
</p>
</p>
`


pintar_estudiantes.innerHTML = resultado;

let linkstu = document.getElementsByClassName("topicss");

for (let x = 0; x < linkstu.length; x++) {
//Evento con los botones de topics
linkstu[x].addEventListener("click", event => {

let nombresEstu = event.target.innerHTML;
nameStudent=event.target.dataset;

//console.log(nameStudent)

temaStu(nombresEstu,nameStudent)
});
}
//Funcion temas Estudiantes
temaStu = (temasStudents,namStu) => {


let subtopics = Object.keys(progreso.temas[temasStudents].subtemas);
let completedPercentage = progreso.temas[temasStudents].porcentajeCompletado;
//console.log(completedPercentage)
let percentageDuration = Math.round((progreso.temas[temasStudents].duracionTemaCompletado /progreso.temas[temasStudents].duracionTema) * 100);
let completedPercentagee = ((progreso.temas[temasStudents].subtemas[subtopics[0]].completado)*100);
let type = progreso.temas[temasStudents].subtemas[subtopics[0]].tipo;
let duration = progreso.temas[temasStudents].subtemas[subtopics[0]].duracionSubtema;
//for (let y = 0; y < progreso.length; y++) {
//let todos =progreso[y];

//}

//console.log(duration)
let s = Object.keys(estudiante);

//console.log(nombre_tercera);
//console.log(estudiante[1].progreso)


pintartopics=  `
<h5 class="alert-heading"> </h5>
<div class="p-3 mb-2 bg-light text-dark border" role="alert">
<h4 class="alert-heading">${temasStudents}</h4>
<p>
<img src="imag/alumnas.svg.png" width="70" height="70" class="img-fluid imageEstu" alt="Responsive image " >
</p>

<p>
<p>Porcentaje Completado:</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${completedPercentage}%"> ${completedPercentage}%</div>
</div>
</p>
<p>Duracion Programa:</p>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${percentageDuration}%"> ${percentageDuration}%</div>
</div>

<hr>
  <h5 class="alert-heading">Subtemas</h5>

  <p>
  <p>Porcentaje Completado:</p>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${completedPercentagee}%">${completedPercentagee}%</div>
  </div>
  </p>
   <p>
   <p>Duracion:</p>
   <div class="progress">
     <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:${duration}%"> ${duration}hrs</div>
   </div>
   </p>
<p>Tipo: ${type}</p>
</div>
 `

 pintar_estudiantes.innerHTML = pintartopics;

}//end of the function

}//end of the for

};
  window.computeGenerationsStats = (laboratoria) => {

    };



window.sortStudents = (laboratoria) => {


};


window.filterStudents = (laboratoria) => {
  let serch = laboratoria;


  let busqueda = laboratoria.indexOf("searchStudents");

console.log(busqueda)

};
