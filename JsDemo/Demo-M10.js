// Wie benutzt man einen Promise
// function fetchDatas() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Data received");
//         }, 1000);
//     });
// }

// fetchDatas().then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.error(error);
// });


//Asynchrone Funktionen mit Await
async function fetchingData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Data received");
        }, 1000);
    });
}

async function process() {
    try {
        const data = await fetchingData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

process();
