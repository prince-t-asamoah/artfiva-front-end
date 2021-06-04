
// function fetchObj(data,route) {
//     // return {
//     //     url: `http://localhost:5000/api/v1${route}`,
//     //     init: 
//     //     {
//     //         method: "POST",
//     //         body: JSON.stringify(data),
//     //         headers: { "Content-Type": "application/json" }
//     //     }
///     // }

// //     const url = `http://localhost:5000/api/v1${route}`;
// //     const init = {
// //         method: "POST",
// //         body: JSON.stringify(data),
// //         headers: { "Content-Type": "application/json" }
// //     };   
    
    
//         // return responseData
// }

function toFetch(data, route) {

    global.responseData = {};
    const myFetch = fetch(`http://localhost:5000/api/v1${route}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    }).then((response) => response.json()).then((response) => {
        let responseData = response;
        return responseData})
        // .then((response) => response.json(), error => console.log(error))
        // .then((response) => {
        //     let fetchData = response;
        //     return fetchData;

        // }, error => console.log(error))

    return myFetch;
}
export default toFetch;