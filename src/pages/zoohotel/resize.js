import { throttle } from './throttle.js'

const widthListeners = new Set()
const heightListeners = new Set()

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

//* Создаем функцию resizeTrigger, которая будет вызываться при изменении размера окна.
//* Оборачиваем ее с помощью throttle, чтобы ограничить частоту вызовов до 20 мс.
const resizeTrigger = throttle((e) => {
    if (windowWidth !== window.innerWidth) {
        widthListeners.forEach((fn) => fn(e))
        windowWidth = window.innerWidth
    }
    if (windowHeight !== window.innerHeight) {
        heightListeners.forEach((fn) => fn(e))
        windowHeight = window.innerHeight
    }
}, 20)
window.addEventListener('resize', resizeTrigger)

/**
 * Регистрирует функцию, которая будет вызвана при изменении ширины окна браузера.
 *
 * @param {Function} fn Функция обратного вызова (callback), которая будет выполнена при изменении ширины окна.
 *                       Функция принимает один аргумент: объект события `resize`.
 * @returns {void}
 */
export function resizeWidth(fn) {
    widthListeners.add(fn)
}

/**
 * Регистрирует функцию, которая будет вызвана при изменении высоты окна браузера.
 *
 * @param {Function} fn Функция обратного вызова (callback), которая будет выполнена при изменении высоты окна.
 *                       Функция принимает один аргумент: объект события `resize`.
 * @returns {void}
 */
export function resizeHeight(fn) {
    heightListeners.add(fn)
}
