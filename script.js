let icons = document.querySelectorAll(".accord i");
let allpara = document.querySelectorAll("p");

icons.forEach(element => {
    let para = element.parentElement.nextElementSibling;
    element.addEventListener("click" , () => {
        if(para.classList.contains("active")){
            para.classList.remove("active");

            element.classList.remove("fa-minus")
            element.classList.add("fa-plus")
        }else{
            allpara.forEach((para, i) => {
                if(para.classList.contains("active")){
                    para.classList.remove("active");

                    icons[i].classList.remove("fa-minus")
                    icons[i].classList.add("fa-plus")
                }
            })
            para.classList.add("active");
            element.classList.remove("fa-plus")
            element.classList.add("fa-minus")
        }
    })
})