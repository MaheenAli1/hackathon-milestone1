var toggleButton = document.getElementById('toggle_work_experience');
var work_experience = document.getElementById('work_experience');
toggleButton.addEventListener('click', function () {
    if (work_experience.style.display === 'none') {
        work_experience.style.display = 'block';
    }
    else {
        work_experience.style.display = 'none';
    }
});
