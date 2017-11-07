<?php require "header.html"?>
<div class="all_body_main">
    <div class="work_body_photo">
        <div style="border: solid 1px rgba(202,201,198,0.8); width: 90%; margin: auto; background-color: white; margin-bottom: 30px;">
            <div id="_photo_header">

                <div id = "_photo_header_avatar">
                    <img src="img/1426860C.jpg">
                </div>
                <span id="_photo_owner_login">
                        opogiba
                </span>
            </div>
            <div class="_photo">
                <img src="img/290944dee248177b81395b7fb6764d8c--weekend-hiking-gopro.jpg">
            </div>
            <div style="margin-bottom: 7px;">
                <span class="_photo_text_num_like"><i class="fa fa-heart-o" aria-hidden="true"></i>12</span>
                <span class="_photo_text_num_like"><i class="fa fa-comment-o" aria-hidden="true"></i>1212</span>
            </div>
            <div id="comments">
                <div class="_photo_comment">
                    <a href="profile.php" class="user_comment_name">opogiba</a>
                    <span class="user_coment">Dog HellDog HellDog HellDog HellDog </span>
                </div>
                 <div class="_photo_comment">
                    <a href="profile.php" class="user_comment_name">opogiba</a>
                    <span class="user_coment">Dog HellDog HellDog HellDog HellDog </span>
                </div>
            </div>
            <form style="display: flex; justify-content: space-between;" method="post">
                <div class="_text_area">
                 <textarea placeholder="Add a comment" id="_photo_write_comment"></textarea>
                </div>
                <button type="submit" id="submit_coment">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>

            </form>
            <script src="Javsscript/text_area_active.js"></script>
            <script type="text/javascript">
                var observe;
                var text = document.getElementById('_photo_write_comment');
                observe = function (element, event, handler) {
                    element.addEventListener(event, handler, false);
                }

                function resize () {
                    text.style.height = 'auto';
                    text.style.height = text.scrollHeight+'px';
                }
                /* 0-timeout to get the already changed text */
                function delayedResize () {
                    window.setTimeout(resize, 0);
                }
                observe(text, 'change',  resize);
                observe(text, 'cut',     delayedResize);
                observe(text, 'paste',   delayedResize);
                observe(text, 'drop',    delayedResize);
                observe(text, 'keydown', delayedResize);
//                text.focus();
//                text.select();
                resize();

            </script>
        </div>
    </div >
</div>

<?php require "footer.html"?>
