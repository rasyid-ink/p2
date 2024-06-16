document.addEventListener('DOMContentLoaded', (event) => {
    const mauButton = document.getElementById('mauButton');
    const gaMauButton = document.getElementById('gaMauButton');
    const sticker1 = document.getElementById('sticker1');
    const sticker2 = document.getElementById('sticker2');
    const sticker3 = document.getElementById('sticker3');
    const endButton = document.getElementById('endButton');
    const continueButton = document.getElementById('continueButton');


    mauButton.addEventListener('click', () => {
        document.getElementById('slide1').style.display = 'none';
        document.getElementById('slide2').style.display = 'flex';
    });

    gaMauButton.addEventListener('mouseover', () => {
        const maxWidth = window.innerWidth - gaMauButton.offsetWidth;
        const maxHeight = window.innerHeight - gaMauButton.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        gaMauButton.style.left = `${randomX}px`;
        gaMauButton.style.top = `${randomY}px`;
    });

    sticker1.addEventListener('click', () => {
        moveStickerRandomly(sticker2);
        sticker1.style.display = 'none';
        sticker2.style.display = 'flex';
    });

    sticker2.addEventListener('click', () => {
        moveStickerRandomly(sticker3);
        sticker2.style.display = 'none';
        sticker3.style.display = 'flex';
    });

    sticker3.addEventListener('click', () => {
        alert('Yaudah aku nyerah');
        document.getElementById('slide2').style.display = 'none';
        document.getElementById('slide3').style.display = 'flex';
    });

    function moveStickerRandomly(element) {
        const maxWidth = window.innerWidth - element.offsetWidth;
        const maxHeight = window.innerHeight - element.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
        element.style.position = 'absolute';
    }

    // Dummy video end event listener for demonstration purposes
    document.getElementById('videoContainer').addEventListener('click', () => {
        endButton.style.display = 'block';
    });

    endButton.addEventListener('click', () => {
        document.getElementById('slide4').style.display = 'none';
        document.getElementById('slide5').style.display = 'flex';
    });

    continueButton.addEventListener('click', () =>{
        document.getElementById('slide3').style.display = 'none';
        document.getElementById('slide4').style.display = 'flex';
    })
});
