export function throttle(callee, timeoutMs) {
    let timer = null

    return (...args) => {
        if (timer) return
        timer = setTimeout(() => {
            callee(...args)
            clearTimeout(timer)
            timer = null
        }, timeoutMs)
    }
}