if(document.querySelectorAll('.booking-switch-buttons').length > 0){
    const bookingSwictchButton = document.querySelectorAll('.booking-switch-buttons button');
    activeButton(bookingSwictchButton,'flex')
}

if(document.querySelectorAll('.destination-for-you-common').length > 0){
    const destinationLists = document.querySelectorAll('.destination-list ul li');
    activeButton(destinationLists,'block');
}

function activeButton(elementClass, display){
    elementClass.forEach(button => {
        button.addEventListener("click", function(){
            elementClass.forEach(button => {
                button.classList.remove('active-button');
            });
            this.classList.add('active-button');
            const activeSectionClass = this.getAttribute('data-value');
            const commonSectionsClass = this.getAttribute('data-attribute');
            showHideBooking(activeSectionClass, commonSectionsClass, display);
        });
    })
}


function showHideBooking(activeClass, commonClass, display){
    const activeSection = document.querySelector(`.${activeClass}`);
    const commonSection = document.querySelectorAll(`.${commonClass}`);

    commonSection.forEach(section => {
        section.style.display = 'none';
    });
    activeSection.style.display = `${display}`;
}

if(document.querySelectorAll('.custom-datepicker').length > 0){
    const customDatePickerInput = document.querySelectorAll('.custom-datepicker');

    for(let i=0; i<customDatePickerInput.length; i++){
        const datepicker = new TheDatepicker.Datepicker(customDatePickerInput[i]);
        datepicker.options.setInputFormat('j-n-Y')
        datepicker.render();
    }
}