import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'
import { getFixturesById } from 'assets/api/footBall'
import LoadingScreen from 'components/LoadingScreen'

class TeamFixture extends Component {
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
        getFixturesById(this.props.id,
            this.state.cancelRequest,
            this.setAbortRequest
        ).then(data => {
            this.setState({
                data: data.fixtures,
            })
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
        const { data } = this.state
        return ((data) ?
            <Table>
                <TableHead>
                    <TableRowCustom>
                        <TableCellCustom>Date</TableCellCustom>
                        <TableCellCustom>Home Team</TableCellCustom>
                        <TableCellCustom>Result</TableCellCustom>
                        <TableCellCustom>Away Team</TableCellCustom>
                        <TableCellCustom>Match day</TableCellCustom>
                    </TableRowCustom>
                </TableHead>
                <TableBody>
                    {data.map((t, index) =>
                        <TableRowCustom key={index}>
                            <TableCellCustom>{t.date}</TableCellCustom>
                            <TableCellCustom>{t.homeTeamName}</TableCellCustom>
                            <TableCellCustom>{`${t.result.goalsHomeTeam}-${t.result.goalsAwayTeam}`}</TableCellCustom>
                            <TableCellCustom>{t.awayTeamName}</TableCellCustom>
                            <TableCellCustom>{t.matchday}</TableCellCustom>
                        </TableRowCustom>
                    )}
                </TableBody>
            </Table> : <LoadingScreen height={200} />
        )
    }
}

export default TeamFixture