<?php require "header.html"?>
<div class="all_body_main">
<!--    <div id="load_photo">-->
<!--        <div id = "work_load_photo">-->
<!--            <form id="form_load_photo" method="post">-->
<!--                <div id ="change_photo">-->
<!--                    <span id="text_load_photo">Past link on image</span>-->
<!---->
<!--                    <div>-->
<!--                        <input class="input_cam" type="text" placeholder="Link on Image">-->
<!--                        <button type="submit" class="input_but">Send</button>-->
<!--                    </div>-->
<!---->
<!--                </div>-->
<!--                <div id ="change_mask">-->
<!--                    <span id="text_load_photo">Past link on mask</span>-->
<!--                    <div>-->
<!--                        <input class="input_cam" type="text" placeholder="Link on Image">-->
<!--                        <button type="submit" class="input_but">Send</button>-->
<!--                    </div>-->
<!--                </div>-->
<!---->
<!---->
<!--            </form>-->
<!---->
<!--        </div>-->
<!---->
<!--    </div>-->
<!--    <div id="close-cam"></div>-->
    <div class="work_body_cam">

        <div class="main_cam">
            <div id="camera">
                <video id="video" autoplay style="display: none; "></video>
                <div  class="size_of_mask">
                    <button class="button_size"><i class="fa fa-minus" aria-hidden="true""></i></button>
                    <button class="button_size"><i class="fa fa-plus" aria-hidden="true" ></i></button>
                </div>

                <canvas id="canvas" width="640px" height="640px"> </canvas>

            </div>
            <div id="new-photo">
                <div class="new-foto">

                </div>
                <div class="new-foto">

                </div>

            </div>
        </div>
        <div class="buttons-cam mobile-btn">
            <button type="submit" class="btn-cam">Take</button>
            <button type="submit" class="btn-cam" onclick="download_image()">Load Image</button>
            <button type="submit" class="btn-cam" onclick="download_mask ()">Load Mask</button>
            <button type="submit" class="btn-cam" onclick="clear1()">Clear</button>
        </div>
        <div class="filters">
            <div class="filter" onclick="add_mask('img/masks/1495749348Batman-clipart-pow-png.png')">
                <img src="img/masks/1495749348Batman-clipart-pow-png.png">
            </div>
            <div class = "filter" onclick="add_mask('img/masks/loki_by_lizardbat-d571pi1.png')">
                <img src="img/masks/loki_by_lizardbat-d571pi1.png">
            </div>
            <div class="filter" onclick="add_mask('img/masks/Dark7.png')">
                <img src="img/masks/Dark7.png">
            </div>
            <div class="filter" onclick="add_mask('img/masks/Japanese-Mask-800px.png')">
                <img src="img/masks/Japanese-Mask-800px.png">
            </div>
        </div>
        <div class="buttons-cam comp">
            <button type="submit" class="btn-cam">Take</button>
            <button type="submit" class="btn-cam" onclick="download_image()">Load Image</button>
            <button type="submit" class="btn-cam" onclick="download_mask ()">Load Mask</button>
            <button type="submit" class="btn-cam" onclick="clear1()">Clear</button>
        </div>
    </div>

</div>
<script src="Javsscript/cam.js"></script>

<?php require "footer.html"?>
