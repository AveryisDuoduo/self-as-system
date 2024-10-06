const colors = ['#FFB6C1', '#87CEFA', '#90EE90', '#FFD700', '#FFA07A'];

const images = document.querySelectorAll('.color-image');

images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        if (colors[index] === '#FFB6C1') {
            document.body.style.backgroundImage = "url('11.jpg')"; 
            document.body.style.backgroundSize = "cover"; 
        } else if (colors[index] === '#87CEFA') {
            document.body.style.backgroundImage = "url('22.jpg')"; 
            document.body.style.backgroundSize = "cover"; 
        } else if (colors[index] === '#90EE90') {
            document.body.style.backgroundImage = "url('33.jpg')"; 
            document.body.style.backgroundSize = "cover"; 
        } else if (colors[index] === '#FFD700') {
            document.body.style.backgroundImage = "url('44.jpg')"; 
            document.body.style.backgroundSize = "cover"; 
        } else if (colors[index] === '#FFA07A') {
            document.body.style.backgroundImage = "url('55.jpg')"; 
            document.body.style.backgroundSize = "cover"; 
        } else {
            document.body.style.backgroundColor = colors[index]; 
            document.body.style.backgroundImage = ""; 
        }
    });

    image.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = ''; 
        document.body.style.backgroundImage = ""; 
    });
});
