/**
 * Created by opogiba on 9/25/17.
 */
function sidebar_open() {

    document.getElementById("side-bar").style.width = "300px";
    document.getElementById("close-bar2").style.width = "inherit";
    document.getElementById("close-bar2").style.height = window.innerHeight;
    document.body.style.overflowY = "hidden";
    document.getElementById("close-bar").style.display = "block";
    // if (window.innerWidth < 500)
    // {
    //     document.getElementById("close-bar").style.display = "block";
        if(window.innerWidth <= 400)
            document.getElementById("side-bar").style.width = "100%";

    // }
    // else
    // {
    //     document.getElementById("close-bar").style.display = "none";
    // }


}
function sidebar_close() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("close-bar2").style.width = "0";
    document.getElementById("side-bar").style.transition="0.3s";
    document.body.style.overflowY = "visible";
}
