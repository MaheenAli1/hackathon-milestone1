const toggleButton= document.getElementById('toggle_work_experience') as HTMLButtonElement
const work_experience= document.getElementById('work_experience') as HTMLElement

toggleButton.addEventListener ('click', ()=> {
    if(work_experience.style.display === 'none') {
        work_experience.style.display = 'block'
    } else {work_experience.style.display = 'none'}
});