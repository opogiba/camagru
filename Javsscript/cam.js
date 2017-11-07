var video = document.getElementById('video');
var localMediaStream = null;
var videoFail = null;

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            localMediaStream = stream;
            video.play();
    }) .catch(function (e) {
        videoFail = 'Camera did not work.';
        document.getElementById("camera").style.backgroundColor = 'darkgrey';
        // alert(videoFail);
        clearInterval(cameraInterval);
    });
}

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var img = null;
var background_img = null;
var zoom = 0;
var image_x_shift = null;
var image_y_shift = null;

function snapshot() {
    if (background_img !== null){
        var height = background_img.height;
        var width = background_img.width;
        var x = 0;
        var y = 0;

        if(height >= width)
        {
            y = (height - width) / 2;
            ctx.drawImage(background_img, 0, y/2, width, height - y, 0 , 0, 640, 640);
        }
        else
        {
            x = (width - height / 2);
            ctx.drawImage(background_img, x/2, width-x, height, 0, 0, 640, 640);
        }
    }
    else if (localMediaStream) {
        ctx.drawImage(video, 80, 0, 480, 480, 0, 0, 640, 640);
    }
    if(img)
    {
        var aspect_ratio;
        var image_width;
        var image_height;

        document.getElementsByClassName("button_size")[0].onclick = function () {
            if(image_width >= 50 && image_height >= 50 && img)
                zoom += -20;
        };
        document.getElementsByClassName("button_size")[1].onclick = function () {
            if(image_width < (canvas.width - 20) && image_height < (canvas.height - 20) && img)
                zoom += 20;
        };
        if (img.height >= img.width)
        {
            aspect_ratio = img.height / img.width;
            img.height = ((canvas.height / 2) + zoom )* aspect_ratio ;
            img.width = canvas.width / 2 + zoom;
        }
        else
        {
            aspect_ratio = img.width / img.height;
            img.height = canvas.height / 2 + zoom;
            img.width = ((canvas.width / 2) + zoom )* aspect_ratio;
        }
        image_height = img.height;
        image_width = img.width;
        if (image_x_shift===null && image_y_shift === null) {
            image_x_shift = (canvas.width - image_width) / 2;
            image_y_shift = (canvas.height - image_height) / 2;
        }
        if(image_y_shift <= 0)
            image_y_shift = 0;
        if(image_x_shift <= 0)
            image_x_shift = 0;
        if((image_y_shift + image_height >= 640))
            image_y_shift = canvas.height - image_height;
        if((image_x_shift + image_width) >= 640)
            image_x_shift = canvas.width - image_width;
        ctx.save();
        ctx.scale(-1,1);
        ctx.translate( image_x_shift, image_y_shift);
        ctx.drawImage(img,-640, 0, image_width, image_height);
        ctx.restore();
    }
}

var x_mouse_coord = 0;
var y_mouse_coord = 0;
var xMove = 0;
var yMove = 0;
var flagMove = false;



canvas.addEventListener("touchstart", function (e) {
    e.preventDefault();
    var touches = e.changedTouches;
    x_mouse_coord = touches[0].pageX;
    y_mouse_coord = touches[0].pageY;
    flagMove = true;
}, false);

canvas.addEventListener('touchend', function (e) {
    e.preventDefault();
    x_mouse_coord = 0;
    y_mouse_coord = 0;
    xMove = 0;
    yMove = 0;
    flagMove = false;
}, false);

canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    var touches = e.changedTouches;
    if(flagMove === true)
    {
        xMove = x_mouse_coord - touches[0].pageX;
        yMove = y_mouse_coord - touches[0].pageY;
        x_mouse_coord = touches[0].pageX;
        y_mouse_coord =  touches[0].pageY;
        image_x_shift  -= xMove;
        image_y_shift  -= yMove;
        xMove = 0;
        yMove = 0;
    }

}, false);



canvas.addEventListener("mousedown", function () {
    x_mouse_coord = event.offsetX;
    y_mouse_coord =  event.offsetY;
    flagMove = true;
});

canvas.addEventListener("mouseup", function () {
    x_mouse_coord = 0;
    y_mouse_coord = 0;
    xMove = 0;
    yMove = 0;
    flagMove = false;

});

canvas.addEventListener("mousemove", function () {
    if(flagMove === true)
    {
        xMove = x_mouse_coord - event.offsetX;
        yMove = y_mouse_coord - event.offsetY;
        x_mouse_coord = event.offsetX;
        y_mouse_coord =  event.offsetY;
        image_x_shift  += xMove;
        image_y_shift  -= yMove;
        xMove = 0;
        yMove = 0;
    }
});

canvas.addEventListener("mouseout", function () {
    flagMove = false;
});

canvas.addEventListener("mousedown", function () {
    x_mouse_coord = event.offsetX;
    y_mouse_coord =  event.offsetY;
    flagMove = true;
});

canvas.addEventListener("mouseup", function () {
    x_mouse_coord = 0;
    y_mouse_coord = 0;
    xMove = 0;
    yMove = 0;
    flagMove = false;

});

canvas.addEventListener("mousemove", function () {
    if(flagMove === true)
    {
        xMove = x_mouse_coord - event.offsetX;
        yMove = y_mouse_coord - event.offsetY;
        x_mouse_coord = event.offsetX;
        y_mouse_coord =  event.offsetY;
        image_x_shift  += xMove;
        image_y_shift  -= yMove;
        xMove = 0;
        yMove = 0;
    }
});

var cameraInterval = setInterval(function () {snapshot()}, 25);

var flag_clearall = false;

function clear1() {
    if(flag_clearall === false)
    {
        img = null;
        background_img = null;
    }
    console.log(flag_clearall);
    x_mouse_coord = 0;
    y_mouse_coord = 0;
    xMove = 0;
    yMove = 0;
    zoom = 0;
    flagMove = false;
    image_x_shift = null;
    image_y_shift = null;
}

function add_mask(src) {
    var tmpimg = new Image;
    tmpimg.onload = function () {
        img = tmpimg;
        flag_clearall = true;
        clear1();
        flag_clearall = false;
        console.log(flag_clearall);

    };
    tmpimg.onerror = function () {
        alert("Broken image");
        flag_clearall = false;
        clear1();
    };
    tmpimg.src = src;
}

function add_background(src){
    console.log("hi");
    var tmpimg = new Image;
    tmpimg.onload = function () {
        background_img = tmpimg;
        console.log(background_img);


    };
    tmpimg.onerror = function () {
        alert("Broken image");
        flag_clearall = false;
        clear1();
    };
    tmpimg.src = src;

}

function download_image() {
    var input = document.createElement("INPUT");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change", function() {
        var reader = new FileReader ();
        reader.onloadend = function () {
            console.log(background_img);
            console.log(background_img);
            add_background(reader.result);
        };
        reader.onerror = function() {
            alert("Файл не может быть прочитан! код ");
        };
        reader.readAsDataURL(input.files[0]);
    }, false);
}

function download_mask() {
    var input = document.createElement("INPUT");
    input.setAttribute("type", "file");
    input.click();
    input.addEventListener("change", function() {
        var reader = new FileReader ();
        reader.onloadend = function () {
            add_mask(reader.result);
        };
        reader.onerror = function() {
            alert("Файл не может быть прочитан! код ");
        };
        reader.readAsDataURL(input.files[0]);
    }, false);
}
