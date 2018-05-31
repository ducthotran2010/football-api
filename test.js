const axios = require('axios')
const CancelToken = axios.CancelToken;
var cancel;

const auth = {
    "X-Auth-Token": "ed481c2d5c28468fadbd4aa8e359a6c7"
}

function getCompetitionBySeason(season) {
    const requestUrl = `http://api.football-data.org/v1/competitions/?season=${season}`
    return axios.get(requestUrl, {
        headers: auth,
        cancelToken:  new CancelToken(function executor(c) {
            cancel = c;
        })
    }).then(res => {
        if (res.error) {
            throw new Error(res.data.error)
        } else {
            console.log(res.data[0].lastUpdated)
        }
    }, res => {
        throw new Error(res.data.error)
    }).catch(error => {
        throw new Error(res.data.error)
    }) 
}

getCompetitionBySeason(2013)
source.cancel('Operation canceled by the user.')
getCompetitionBySeason(2018)
