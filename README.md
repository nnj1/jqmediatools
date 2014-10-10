[jqtools]() - A jQuery Plugin
=======
[![Build Status](https://drone.io/github.com/nnj1/jqtools/status.png)](https://drone.io/github.com/nnj1/jqtools/latest)

##How To Install
If you're working on the client side, just include the script ```jqtools.jquery.js``` or ```jqtools.jquery.min.js```. This will provide you with the appropriate extensions to the base jQuery (```$()```) object and function. Make sure you load up all your libraries in the following manner.

```html
<script src="jquery.js"></script>
<script src="jqtools.jquery.js"></script>
<script src="your_code.js"></script>
```
##Documentation

Turn a ```<div>``` into an ```<audio>``` object.
```js
// Pass in a URL for the file and provide JSON encoded options
$('thing').musicify('url', options);

// Example
$('#music').musicify('musicfile.mp3', {controls:'true', autoplay:'true', loop:'false'});
```
Turn a ```<div>``` into an ```<video>``` object.
```js
// Pass in a URL for the file and provide JSON encoded options
$('thing').vidify('url', options);

// Example
$('#video').vidify('videofile.mp3', {controls:'true', autoplay:'true', loop:'false'});
```

Manipulate the background music on the page.

```js
// Add songs to queue
$.addToQueue('song1.mp3');
$.addToQueue('song2.mp3');

// Start the music on a simple button click
$('#playButton').click(function(){
  $.startMusic();
});

// Pause the music on a simple button click
$('#pauseButton').click(function(){
  $.pauseMusic();
});

// Stop the music on a simple button click
$('#stopButton').click(function(){
  $.stopMusic();
});

// Get the entire queue
var playlist = $.getQueue();

// Set the entire queue (rather than one song at a time)
var songs = ['track1', 'track2', 'track3'];
$.setQueue(songs);
```
