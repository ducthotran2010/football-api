import axios from 'axios'
import auth from './auth'
const CancelToken = axios.CancelToken
const REQUEST_URL = 'http://api.football-data.org/'

export function getCompetitionBySeason(season, cancelRequest, setCancel) {
    if (cancelRequest) {
        cancelRequest("Abort request")
    }
    const requestUrl = `${REQUEST_URL}v1/competitions/?season=${season}`
    return axios.get(requestUrl, {
        headers: auth,
        cancelToken: new CancelToken(function executor(cancel) {
            setCancel(cancel)
        })
    }).then(res => {
        if (res.data.error) {
            throw new Error(res.data.error)
            
        } else {
            return res.data
        }
    }, res => {
        throw new Error(res)
    })
}
export function getCompetitionById(id, cancelRequest, setCancel) {
    if (cancelRequest) {
        cancelRequest("Abort request")
    }
    const requestUrl = `${REQUEST_URL}v1/competitions/${id}`

    return axios.get(requestUrl, {
        headers: auth,
        cancelToken: new CancelToken(function executor(cancel) {
            setCancel(cancel)
        })
    }).then(res => {
        if (res.data.error) {
            throw new Error(res.data.error)
            
        } else {
            return res.data
        }
    }, res => {
        throw new Error(res)
    })
}

export function getTeamsById(id, cancelRequest, setCancel) {
    if (cancelRequest) {
        cancelRequest("Abort request")
    }
    const requestUrl = `${REQUEST_URL}v1/competitions/${id}/teams`

    return axios.get(requestUrl, {
        headers: auth,
        cancelToken: new CancelToken(function executor(cancel) {
            setCancel(cancel)
        })
    }).then(res => {
        if (res.data.error) {
            throw new Error(res.data.error)
            
        } else {
            return res.data
        }
    }, res => {
        throw new Error(res)
    })
}

export function getFixturesById(id, cancelRequest, setCancel) {
    if (cancelRequest) {
        cancelRequest("Abort request")
    }
    const requestUrl = `${REQUEST_URL}v1/competitions/${id}/fixtures`

    return axios.get(requestUrl, {
        headers: auth,
        cancelToken: new CancelToken(function executor(cancel) {
            setCancel(cancel)
        })
    }).then(res => {
        if (res.data.error) {
            throw new Error(res.data.error)
            
        } else {
            return res.data
        }
    }, res => {
        throw new Error(res)
    })
}

export function getLeagueById(id, cancelRequest, setCancel) {
    if (cancelRequest) {
        cancelRequest("Abort request")
    }
    const requestUrl = `${REQUEST_URL}v1/competitions/${id}/leagueTable`

    return axios.get(requestUrl, {
        headers: auth,
        cancelToken: new CancelToken(function executor(cancel) {
            setCancel(cancel)
        })
    }).then(res => {
        if (res.data.error) {
            throw new Error(res.data.error)
            
        } else {
            return res.data
        }
    }, res => {
        throw new Error(res)
    })
}
