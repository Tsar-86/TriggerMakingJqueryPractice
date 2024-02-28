let distributionTypeButton = document.querySelector('.distribution_type_list');
let distributionTypeButtonList = document.querySelector('.distribution_type_button_list');

let managersDistributionTypeButton = document.querySelector('.managers_distribution_list');
let managersDistributionButtonList = document.querySelector('.managers_distribution_button_list');

distributionTypeButton.addEventListener( 'click', () => {
    distributionTypeButton.style.margin = 0;
    distributionTypeButtonList.style.display = 'block';
    distributionTypeButtonList.style.flexDirection = 'columm';
});


managersDistributionTypeButton.addEventListener( 'click', () => {
    managersDistributionTypeButton.style.margin = 0;
    managersDistributionButtonList.style.display = 'block';
    managersDistributionButtonList.style.flexDirection = 'columm';
});