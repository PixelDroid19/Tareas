function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}



function toggleVideo1(){
    const trailer = document.querySelector('.trailer1');
    const video = document.querySelector('#video1');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}

function toggleVideo2(){
    const trailer = document.querySelector('.trailer2');
    const video = document.querySelector('#video2');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}