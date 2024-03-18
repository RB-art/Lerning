/*
Задание 1.
Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
*/
const btn = document.querySelector('.j-btn-test');
btn.addEventListener('click', () => {
  const icons = document.getElementsByClassName('btn_icon');
    for(let i = 0; i < icons.length; i++){
        icons[i].classList.toggle('inactive');
    }
});