`use strict`;

const iterate = (array, listener) => {
    for (const item of array) {
        listener(item);
    }
};

const cities = ['Kyiv', 'London', 'Beijing'];

const print = city => {
    console.log('City: ' + city);
};

iterate(cities, print);