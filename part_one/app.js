let url = "http://numbersapi.com/";
let favNumber = 4;

$.getJSON(`${url}/${favNumber} ? json`).then(res => {
    console.log(res);
});

let favNumbers = [7, 11, 22];
$.getJSON('${url}/${favNumbers}?json').then(res => {
    console.log(res);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(res => $("body").append(`<p>${res.text}</p>`));
});

