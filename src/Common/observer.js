
function addClass() {
    const elements = document.querySelectorAll('.animate')
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('isVisible', entry.isIntersecting)
                // if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        })
    elements.forEach(ele => observer.observe(ele))
}




export default addClass