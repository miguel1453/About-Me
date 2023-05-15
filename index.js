function submit(answer) {
    var container = document.querySelector('#answer'+answer);
    if (answer == 1) {
        container.style.backgroundColor = 'red'
    }
    if (answer == 2) {
        container.style.backgroundColor = 'green'
    }
    if (answer == 3) {
        container.style.backgroundColor = 'red'
    }
}