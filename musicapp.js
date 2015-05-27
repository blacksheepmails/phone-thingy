function main () {
    populateSongFields(song);

    var down = false;

    document.getElementById('progress').addEventListener("mousedown", function(e) {
        down = true;
        moveSlider(e);
        });
    document.addEventListener("mousemove", function(e) {
        if (down) {
            moveSlider(e);
            }
        });
    document.addEventListener("mouseup", function(e) {
        down = false;
        } );

    document.getElementById('progress').addEventListener("touchstart", function(e) {
        down = true;
        moveSlider(e);
        });
    document.addEventListener("touchmove", function(e) {
        if (down) {
            moveSlider(e);
            }
        });
    document.addEventListener("touchend", function(e) {
        down = false;
        } );
    }

function populateSongFields (song) {
    var lyrics = song.lyrics.split("\n");
    document.getElementById("song-info").innerHTML = song.artist + ", " + song.title;
    document.getElementById("lyrics-current").innerHTML = lyrics[0];
    document.getElementById("lyrics-next").innerHTML = lyrics[1];
}

function moveSlider (event) {
    var newProgress = event.pageX;
    var progressBar = document.getElementById('progress');
    var marker = document.getElementById('marker');
    marker.style.left = (newProgress - 15) + "px";
    progressBar.value = Math.floor((newProgress / progressBar.offsetWidth) * 100)
}
