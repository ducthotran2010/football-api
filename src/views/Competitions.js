import React, { Component } from 'react'
import SearchBar from 'components/SearchBar'
import { getCompetitionBySeason } from 'assets/api/footBall'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'
import banner from 'assets/img/banner.jpg'

class Competitions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            Season: '',
            Result: undefined,
            cancelRequest: undefined,
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.setAbortRequest = this.setAbortRequest.bind(this)
    }

    setAbortRequest(cancel) {
        this.setState({
            cancelRequest: cancel
        })
    }

    handleSearch(e) {
        const search = e.target.value
        this.setState({
            isLoading: true,
            Season: search,
        })
        getCompetitionBySeason(
            search,
            this.state.cancelRequest,
            this.setAbortRequest
        ).then(data => {
            this.setState({
                isLoading: false,
                Result: data,
            })
        }).catch(e => {
            if (e.message.startsWith("Cancel")) {
            } else {
                this.setState({
                    isLoading: false,
                    Result: [],
                })
            }
        })
    }
    render() {
        const { Result, Season, isLoading } = this.state
        return (
            <div>

                <div style={{
                    height: 300,
                    width: '100%',
                    marginBottom: 40,
                    background: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>

                <SearchBar
                    type="text"
                    name="season"
                    value={Season}
                    onChange={this.handleSearch}
                    isLoading={isLoading}
                    placeholder="Search competion by year"
                    autoFocus
                />
                <div style={{ marginBottom: 40 }}></div>
                {(!isLoading && Result) ? (Result.length > 0) ?
                    <Table>
                        <TableHead>
                            <TableRowCustom>
                                <TableCellCustom>No</TableCellCustom>
                                <TableCellCustom>League</TableCellCustom>
                                <TableCellCustom>Caption</TableCellCustom>
                                <TableCellCustom>Teams</TableCellCustom>
                                <TableCellCustom>Games</TableCellCustom>
                                <TableCellCustom>Matchdays</TableCellCustom>
                                <TableCellCustom>Current Matchday</TableCellCustom>
                            </TableRowCustom>
                        </TableHead>
                        <TableBody>
                            {Result.map((t, index) =>
                                <TableRowCustom key={index} onClick={() => this.props.history.push(`competition/?id=${t.id}`)}>
                                    <TableCellCustom>{t.id}</TableCellCustom>
                                    <TableCellCustom>{t.league}</TableCellCustom>
                                    <TableCellCustom>{t.caption}</TableCellCustom>
                                    <TableCellCustom>{t.numberOfTeams}</TableCellCustom>
                                    <TableCellCustom>{t.numberOfGames}</TableCellCustom>
                                    <TableCellCustom>{t.numberOfMatchdays}</TableCellCustom>
                                    <TableCellCustom>{t.currentMatchday}</TableCellCustom>
                                </TableRowCustom>
                            )}
                        </TableBody>
                    </Table>
                    : <h2>Not found</h2> : null
                }
            </div>
        )
    }
}

export default Competitions