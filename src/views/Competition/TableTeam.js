import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'
import { getTeamsById } from 'assets/api/footBall'
import LoadingScreen from 'components/LoadingScreen'

class Team extends Component {
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
        getTeamsById(this.props.id,
            this.state.cancelRequest,
            this.setAbortRequest
        ).then(data => {
            this.setState({
                data: data.teams,
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
        return (data) ?
            <Table>
                <TableHead>
                    <TableRowCustom>
                        <TableCellCustom>Code</TableCellCustom>
                        <TableCellCustom>Name</TableCellCustom>
                        <TableCellCustom>Crest Url</TableCellCustom>
                    </TableRowCustom>
                </TableHead>
                <TableBody>
                    {data.map((t, index) =>
                        <TableRowCustom key={index}>
                            <TableCellCustom>{t.code}</TableCellCustom>
                            <TableCellCustom>{t.name}</TableCellCustom>
                            <TableCellCustom><img src={t.crestUrl} alt={`team-${t.name}`} width="200" border="1"/></TableCellCustom>
                        </TableRowCustom>
                    )}
                </TableBody>
            </Table> : <LoadingScreen height={200} />
    }
}

export default Team