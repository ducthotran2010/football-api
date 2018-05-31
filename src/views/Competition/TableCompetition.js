import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'
import LoadingScreen from 'components/LoadingScreen'
import { getCompetitionById } from 'assets/api/footBall'

class TableCompetition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cancelRequest: undefined,
            value: 0,
        }
        this.setAbortRequest = this.setAbortRequest.bind(this)
    }
    setAbortRequest(cancel) {
        this.setState({
            cancelRequest: cancel
        })
    }

    componentWillMount = () => {
        getCompetitionById(
            this.props.id,
            this.state.cancelRequest,
            this.setAbortRequest
        ).then(data => {
            this.setState({
                data: data,
            })
        }).catch(e => {
            if (e.message.startsWith("Cancel")) {
            } else {
                this.setState({
                    error: 'Occur an error while loading data, please try again later',
                })
                this.props.alertError()
            }
        })
    }

    render() {
        const { data, error } = this.state
        return (data) ? <Table>
            <TableHead>
                <TableRowCustom>
                    <TableCellCustom colSpan="2" style={{ textAlign: 'center' }}>{data.caption}</TableCellCustom>
                </TableRowCustom>
            </TableHead>
            <TableBody>
                <TableRowCustom>
                    <TableCellCustom>No</TableCellCustom>
                    <TableCellCustom>{data.id}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Leguage</TableCellCustom>
                    <TableCellCustom>{data.league}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Year</TableCellCustom>
                    <TableCellCustom>{data.year}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Current Matchday</TableCellCustom>
                    <TableCellCustom>{data.currentMatchday}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Number Of Matchdays</TableCellCustom>
                    <TableCellCustom>{data.numberOfMatchdays}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Number Of Teams</TableCellCustom>
                    <TableCellCustom>{data.numberOfTeams}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Number Of Games</TableCellCustom>
                    <TableCellCustom>{data.numberOfGames}</TableCellCustom>
                </TableRowCustom>
                <TableRowCustom>
                    <TableCellCustom>Last Updated</TableCellCustom>
                    <TableCellCustom>{data.lastUpdated}</TableCellCustom>
                </TableRowCustom>
            </TableBody>
        </Table> : (error) ? <h1>{error}</h1> : <LoadingScreen />
    }
}

export default TableCompetition