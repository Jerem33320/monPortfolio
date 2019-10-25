    let logo = document.getElementById("introLogo");
    let intro = document.querySelector(".intro");
    let container = document.querySelector(".container");
    let navLogo = document.getElementById("homeLogo");
    
    const delay = time => new Promise(resolve => setTimeout(resolve, time));
    
    delay(0).then(() => {
        logo.animate([
            // keyframes
            { transform: 'rotate(0deg)' }, 
            { transform: 'rotate(90deg)' },
          ], { 
            duration: 500,
        }); 
    });
    delay(500).then(() => {
        logo.animate([
            // keyframes
            { transform: 'rotate(90deg)' }, 
            { transform: 'rotate(180deg)' },
          ], { 
            duration: 500,
        });
        intro.style.backgroundColor = "#08BDE1";
    });
    delay(1000).then(() => {
        logo.animate([
            // keyframes
            { transform: 'rotate(180deg)' }, 
            { transform: 'rotate(270deg)' },
          ], { 
            duration: 500,
        });
        intro.style.backgroundColor = "#B5FBCD";
    });
    delay(1500).then(() => {
        logo.animate([
            // keyframes
            { transform: 'rotate(270deg)' }, 
            { transform: 'rotate(360deg)' },
          ], { 
            duration: 500,
        });
        intro.style.backgroundColor = "#19203E";
    });
    delay(2000).then(() => {
        logo.animate([
            // keyframes
            { transform: 'scale(0.8) translateY(0px)' },
            { transform: 'scale(0.6) translateY(200px)' },
            { transform: 'scale(0.4) translateY(400px)' },
            { transform: 'scale(0.2) translateY(600px)' },
            { transform: 'scale(0) translateY(800px)' }
          ], { 
            duration: 1000,
        });
    });
    
    delay(3000).then(() => {
        logo.style.display = "none";
        intro.style.display = "none";
        container.style.visibility = "visible";
        navLogo.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1.1)' }
        ], {
            duration: 1000,
        });
    });