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
module.exports = { getAPI }