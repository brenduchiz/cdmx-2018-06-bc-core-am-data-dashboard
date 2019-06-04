loginButton.addEventListener("click", function(){
    login();
})

let login = () => {
    let use = userName.value;
    let contr = contraseña.value;

    if(use === "lucile@laboratoria.la"  && contraseña === "123"){
      return window.location = "file:///C:/Users/rodri/Downloads/cdmx-2018-06-bc-core-am-data-dashboard-master/cdmx-2018-06-bc-core-am-data-dashboard-master/src/datadash.html"

}
