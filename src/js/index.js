import { Router } from './router.js'

const router = new Router()

router.add('/', "/pages/Home")
router.add('/exploration', "/pages/Exploration")
router.add('/universe', "/pages/Universe")

router.handle()

window.onpopstate = () => {router.handle()}
window.route = () => {router.route()}