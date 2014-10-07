$('#titleBanner').cycleColors('color',['#ff6347','#ffff00','#ee82ee'],500);

$('#musicDiv').musicify('http://stephenrippy.com/media/music/Soundtracks_Noddinagushpa.mp3', {controls:"true",autoplay:"true"});

$('#videoDiv').vidify('http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4', {controls:"true",autoplay:"false"});

$.addToQueue('http://stephenrippy.com/media/music/Soundtracks_Noddinagushpa.mp3');
$.addToQueue('http://uhmp3.com/user-mp3-to/8_bailando-ft.-sean-paul-enrique-iglesias.mp3');
$.startMusic();

console.log($.getQueue());