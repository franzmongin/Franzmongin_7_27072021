document.querySelectorAll(".form-select").forEach(element => {
    element.addEventListener('click', ()=>{
        console.log(element.children[0]);
        element.children[0].disabled = false;
        element.children[0].focus();
    })
});