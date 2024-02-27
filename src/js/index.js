import { Router } from './router.js'

const router = new Router()

router.add('/', "/pages/Home")
router.add('/exploration', "/pages/Exploration")
router.add('/universe', "/pages/Universe")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.menu-button');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  });