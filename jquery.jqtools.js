(function($) {

    /* Function to convert RGB to HEX */
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    /* Cycle through various CSS colors for the selected object */
    $.fn.cycleColors = function(cssProperty, arrayToCycle, milliseconds) {

        var jqueryObj = this;
        setInterval(function() {

            /* Loop through each color */

            for (var i = 0; i < arrayToCycle.length; i++) {
                var rgb = jqueryObj.css(cssProperty);
                //console.log(rgb2hex(rgb) + " == " + arrayToCycle[i]);
                if (rgb2hex(rgb) === arrayToCycle[i]) {

                    if (i === arrayToCycle.length - 1) {
                        //console.log('Setting css color to', arrayToCycle[0]);
                        jqueryObj.css(cssProperty, arrayToCycle[0]);
                        break;
                    } else {
                        //console.log('Setting css color to', arrayToCycle[i + 1]);
                        jqueryObj.css(cssProperty, arrayToCycle[i + 1]);
                        break;
                    }


                }
            }

        }, milliseconds);

        return this;
    };

    /* Turn the selected div into a music player */
    $.fn.musicify = function(musicURL, options) {

        var audioTag = "<audio ";
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            controls: "true",
            loop: "false",
            autoplay: "false",
            width: '100%',
            height: '100%'
        }, options);

        if (settings.controls == 'true') {
            audioTag = audioTag + " controls";
        }
        if (settings.loop == 'true') {
            audioTag = audioTag + " loop";
        }
        if (settings.autoplay == 'true') {
            audioTag = audioTag + " autoplay";
        }

        // Make the music player
        this.html(audioTag + " width='" + settings.width + "' height='" + settings.height + "' > <source src=" + musicURL + " >Your browser does not support the audio element.</audio>");

        return this;

    };

    /* Turn the selcted div into a video player */
    $.fn.vidify = function(videoURL, options) {

        var videoTag = "<video ";
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            controls: "true",
            loop: "false",
            autoplay: "false",
            width: '100%',
            height: '100%'
        }, options);

        if (settings.controls === 'true')
            videoTag = videoTag + " controls";
        if (settings.loop === 'true')
            videoTag = videoTag + " loop";
        if (settings.autoplay === 'true')
            videoTag = videoTag + " autoplay";

        // Make the music player
        this.html(videoTag + " width='" + settings.width + "' height='" + settings.height + "' > <source src=" + videoURL + " >Your browser does not support the video element.</video>");

        return this;

    };

    // Set up the queue
    var queue = [];
    var currentTrack = 0;
    var player = new Audio();

    player.addEventListener('ended', function() {
        $.nextTrack();
    });

    /* Functions that handle background music */
    $.extend({
        addToQueue: function(link) {
            queue.push(link);
        },
        getQueue: function() {
            return queue;
        },
        setQueue: function(newq) {
            queue = newq;
        },
        startMusic: function() {
            player.setAttribute("src", queue[currentTrack]);
            player.load();
            player.play();
        },
        pauseMusic: function() {
            player.pause();
        },
        resumeMusic: function() {
            player.play();
        },
        stopMusic: function() {
            player.pause();
            player.currentTime = 0;
        },
        nextTrack: function() {
            if (currentTrack !== queue.length - 1)
                currentTrack++;
            else
                $.startMusic();
        },
        previousTrack: function() {
            if (currentTrack !== 0)
                currentTrack--;
            else
                $.startMusic();
        }
    });

    /**/

}(jQuery));
