let firstSectionButton = document.querySelector('.distribution_type_list');
let firstSectionButtonList = document.querySelector('.first_section_button_list');

firstSectionButton.addEventListener( 'click', () => {
    firstSectionButton.style.margin = 0;
    firstSectionButtonList.style.display = 'block';
    firstSectionButtonList.style.flexDirection = 'columm';
});


