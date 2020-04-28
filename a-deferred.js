`use strict`;

const getConferences = () => {
    let onDone = null;
    const deferred = {
        data: callback => onDone = callback
    };
    setTimeout(() => {
        if (onDone) onDone(['Tehrah', 'Yalta', 'Potsdam']);    
    }, 5000);
    return deferred;
};

//Usage

const conferences = getConferences();

console.log(conferences);

conferences.data(list => {
    console.log(list);
});

console.log('end'); 