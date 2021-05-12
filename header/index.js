function myfun(){
    var showhide = document.getElementById('links');
    if(showhide.style.display === "block"){
        showhide.style.display = "none";
    }
    else{
        showhide.style.display = "block";
    }
}