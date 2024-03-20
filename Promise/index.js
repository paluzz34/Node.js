function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

luckyDraw('Joe') .then(data => { 
console.log(data);
return luckyDraw('Caroline') }) 
.then(data => { console.log(data); 
    return luckyDraw('Sabrina') }) 
    .then(data => { console.log(data); 
    }).catch((err) => console.log(err))

/*luckyDraw("joe")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });

luckyDraw("Carolina")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });
luckyDraw("Sabrina")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });*/