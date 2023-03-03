const baseAPI = "http://localhost:3000"
async function getAPI(route) {     
    let res = fetch(`${baseAPI}${route}`, { method: "GET" })
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    else {
                        alert("Servidor retornou " + response.status + " : " + response.statusText)
                        return 'err'}
                })
                .catch(err => {
                    console.log("Erro: " + err)
                })
    return res;
}
async function putAPI(route, data) {     
    fetch(`${baseAPI}${route}`, { 
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
                        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS"
                    },
                    body: JSON.stringify(data) 
                })
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    else {
                        alert("Servidor retornou " + response.status + " : " + response.statusText)
                        return 'err'}
                })
                .catch(err => {
                    console.log("Erro: " + err)
                })

}
module.exports = { getAPI, putAPI }