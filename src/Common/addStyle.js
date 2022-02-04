function checkElem() {
    const eleName = document.querySelectorAll('.animate')
    const viewPort = window.innerHeight
    eleName.forEach(el => {
        const elemTop = el.getBoundingClientRect().top
        if (elemTop < ((viewPort * 2) / 3)) {
            el.classList.add("isVisible");
        }
    });
}

export default checkElem;