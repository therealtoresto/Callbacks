`use strict`;

const curry = (fn, ...par) => {
    const curried = (...args) => (
        fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args)
    );
    return par.length ? curried(...par) : curried;
};

const fn = () => {
    console.log('Callback from timer');
};

const setTimeoutCallbacklast = (timeout, fn) => setTimeout(fn, timeout);

const timer = curry(setTimeoutCallbacklast);
timer(2000)(fn);

const timer2s = timer(2000);
timer2s(fn);