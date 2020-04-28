`use strict`;

const fn = () => {
    console.log('Callback from timer');
};

setTimeout(fn, 5000);