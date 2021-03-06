window.kittybutton = function () {
    // kittybutton.js
    // version 2
    // ---------
    // (C) 2011 tony gies <tgies@tgies.net>
    // the copyright holder has released this work into the public domain;
    // any entity is granted the right to use this work for any purpose,
    // without any conditions, unless such conditions are required by law.
    // this work is distributed "as is" without any warranty;
    // without even any warranty of mercantability or usefulness.
    // no rights reserved
    // attribution is appreciated if reproduced in entirety

    function doIt() {
        var imgs = window.kbjQ('img:not(img.youreakitty)'),
            elimg = imgs.eq(Math.floor(Math.random() * imgs.length)),
            imgwidth = elimg.width(), imgheight = elimg.height(),
            greykitty = (Math.floor(Math.random() * 2) ? 'g/' : '');
        elimg.addClass('youreakitty');
        elimg.attr('src', 'http://placekitten.com/' + greykitty + imgwidth + '/' + imgheight);
    }

    if (window.kbjQ === undefined) {
        var script = document.createElement('script');
        script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        script.onload = function(){window.kbjQ = window.jQuery.noConflict(true); doIt();};
        document.body.appendChild(script);
    } else {
        doIt();
    }
    // exeunt
}; window.kittybutton();