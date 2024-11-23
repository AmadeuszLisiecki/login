const CLICK_NAME = 'click'
const dialog = document.getElementsByClassName('account-created')[0];
const createAccount = document.getElementsByClassName('sign-up__create')[0];
const ok = document.getElementsByClassName('account-created__ok')[0];

createAccount.addEventListener(CLICK_NAME, () => {
  dialog.showModal();
});

ok.addEventListener(CLICK_NAME, () => {
  dialog.close();
});
