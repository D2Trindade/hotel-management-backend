const baseAPI = "http://localhost:3000"
async function getPessoas() {     
    let res = fetch(`${baseAPI}/pessoas`, { method: "GET" })
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
module.exports = { getPessoas }