document.addEventListener('DOMContentLoaded', () => {
    //Getbutton
    const nightModeToggle = document.getElementById('night-mode-toggle');

    // check if it was in night mode
    if (localStorage.getItem('night-mode') === "enabled"){
        document.body.classList.add('night-mode');
    }

    nightModeToggle.addEventListener('click', () => {
        //toggle the button
        document.body.classList.toggle('night-mode');

        //save to local storage
        if(document.body.classList.contains('night-mode')){
            localStorage.setItem('night-mode', 'enabled');
        }
        else{
            localStorage.removeItem('night-mode');
        }
    });

});