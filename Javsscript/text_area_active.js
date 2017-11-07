var textarea = document.getElementById('_photo_write_comment');
var btn = document.getElementById('submit_coment');


textarea.addEventListener('input', function(e){

    if(textarea.value != '') {
        btn.style.visibility = "visible";
        btn.style.opacity = "1";


    } else {
        btn.style.visibility = "hidden";
        btn.style.opacity = "0";
    }

})