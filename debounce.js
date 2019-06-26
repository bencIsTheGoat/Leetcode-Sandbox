function debounce(func, delay, immediate) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timer = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timer);
        timer = setTimeout(later, delay);
        if (callNow) func.apply(context, args);
    };
};