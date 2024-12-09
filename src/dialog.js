const CLICK_NAME = 'click';
const dialogs = document.getElementsByClassName('dialog');
const forms = document.getElementsByClassName('form');
const oks = document.getElementsByClassName('dialog__ok');
const createAccount = document.getElementsByClassName('sign-up__create')[0];

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    dialogs[1].showModal();
    form.reset();
  });
});

createAccount.addEventListener(CLICK_NAME, () => dialogs[0].showModal());

Array.from(oks).forEach(
  (ok, index) => ok.addEventListener(CLICK_NAME, () =>  dialogs[index].close()),
);
