const insertYouTubeVideo = (embedCode, elementId) => {
    var targetElement = document.getElementById(elementId);
    targetElement.innerHTML = embedCode;
}

const agregarVideo = (numeroVideo) => {
    var videoUrl;
    var videoId;

    switch(numeroVideo) {
        case 1:
            videoUrl = document.getElementById("videoUrl1").value;
            videoId = "video1";
            break;
        case 2:
            videoUrl = document.getElementById("videoUrl2").value;
            videoId = "video2";
            break;
        case 3:
            videoUrl = document.getElementById("videoUrl3").value;
            videoId = "video3";
            break;
        default:
            return;
    }

    var embedCode = videoUrl.replace(/width="\d+"/, 'width="350"').replace(/height="\d+"/, 'height="190"');

    localStorage.setItem(videoId, embedCode);

    insertYouTubeVideo(embedCode, videoId);
}

window.onload = function() {
    for (var i = 1; i <= 3; i++) {
        var embedCode = localStorage.getItem("video" + i);
        var videoId = "video" + i;
        if (embedCode) {
            insertYouTubeVideo(embedCode, videoId);
        }
    }
}
