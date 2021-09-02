function myfun(){
    console.log(3);
    var ham = document.getElementById('ham');
    var showHide = document.getElementById('bar');
    var btn = document.getElementById('sidebar');
    var show = document.getElementById('cross');
    if(showHide.style.display !== "block" && showHide.style.display !== "block"){
        $('#bar').addClass('animated bounceIn');
        showHide.style.display = "block";
        $('#sidebar').addClass('animated backInRight');
        btn.style.display = "block";
        $('#cross').addClass('animated bounceInDown');
        show.style.display = "block";
    }
}
function myfun1(){
    console.log(4);
    var ham = document.getElementById('ham');
    var showHide = document.getElementById('bar');
    var btn = document.getElementById('sidebar');
    var show = document.getElementById('cross');
    showHide.style.display = "none";
    btn.style.display = "none";
    show.style.display = "none";
}
function display(){
    var crss = document.getElementById('cross');
    var sidebar = document.getElementById('sidebar');
    var bar = document.getElementById('bar');
    crss.style.display = "none";
    sidebar.style.display = "none"; 
    bar.style.display = "none";
}