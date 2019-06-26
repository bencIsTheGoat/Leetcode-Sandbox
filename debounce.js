function debounce(func, delay, immediate) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        
        clearTimeout(timer);

        timer = setTimeout(() => {
            timer = null;
            if (!immediate) func.apply(context, args);
        }, delay);

        const callNow = immediate && !timer;

        if (callNow) func.apply(context, args);
    };
};