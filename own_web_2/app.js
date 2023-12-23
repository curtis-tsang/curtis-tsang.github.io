// scroll down effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entries) => {
        if(entries.isIntersecting){
            entries.target.classList.add("appear");
        }
        else{
            entries.target.classList.remove("appear");
        }
    });
})

const hidden_item = document.querySelectorAll(".hidden");
hidden_item.forEach((el) => observer.observe(el));
