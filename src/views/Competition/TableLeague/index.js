import React, { Component } from 'react'
import { getLeagueById } from 'assets/api/footBall'
import LoadingScreen from 'components/LoadingScreen'
import Standing from './Standing'
import Standings from './Standings'

class TeamLeague extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
            cancelRequest: undefined,
        }
        this.setAbortRequest = this.setAbortRequest.bind(this)
    }

    setAbortRequest(cancel) {
        this.setState({
            cancelRequest: cancel
        })
    }

    componentDidMount = () => {
        getLeagueById(this.props.id,
            this.state.cancelRequest,
            this.setAbortRequest
        ).then(data => {
            if (data.standing) {
                this.setState({
                    type: 'standing',
                    data: data.standing,
                })
            } else {
                this.setState({
                    type: 'standings',
                    data: data.standings,
                })
            }
        }).catch(e => {
            if (e.message.startsWith("Cancel")) {
            } else {
                this.setState({
                    data: [],
                })
            }
        })
    }

    render() {
        const { data, type } = this.state
        return ((data) ?
            (type === 'standing') ? <Standing data={data} /> : <Standings data={data} />
            : <LoadingScreen height={200} />
        )
    }
}

export default TeamLeague