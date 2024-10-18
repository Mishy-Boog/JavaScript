function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("usandoAjax").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax.txt", true);
    xhttp.send();
}