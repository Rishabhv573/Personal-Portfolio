const section = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const main_content = document.querySelector('.main-content');

// When a button is clicked class->active
function pageTransition(){
    for(let i = 0; i < section_button.length-1; i++){
        section_button[i].addEventListener('click', function(){
            let current_button = document.querySelectorAll('.active-button');
            current_button[0].className = current_button[0].className.replace('active-button','');
            this.className += ' active-button';
        })
    }

    // Section Active
    main_content.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id) {
            // Remove selected from other buttons
            section_buttons.forEach((button) =>{
                button.classList.remove('active');
            })
            e.target.classList.add('active');

            // Hide other sections
            section.forEach((sect) =>{
                sect.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themebutton = document.querySelector('.theme-button');
    themebutton.addEventListener('click', function(){
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    // Click Submit Button
    const btn = document.querySelector("#btn");
        const btnText = document.querySelector("#btnText");

        btn.onclick = () => {
            btnText.innerHTML = "Thanks";
            setTimeout(function() {
                btnText.innerHTML = "Submit";
            }, 2000);
        };
}

pageTransition();
