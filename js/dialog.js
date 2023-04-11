const btnPersonal = document.querySelector('.btn-personal');
const btnTerms = document.querySelector('.btn-terms');
const personal = document.querySelector('.personal');
const terms = document.querySelector('.terms');

btnPersonal.addEventListener('click', () => {
    personal.showModal();
})

btnTerms.addEventListener('click', () => {
    terms.showModal();
})