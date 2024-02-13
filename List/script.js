Array
    .from(document.querySelectorAll("li"))
    .forEach((e) => e.addEventListener("click", (event) => {
        event.target.style.color = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;    
    }));