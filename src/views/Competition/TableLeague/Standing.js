import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'

const Standing = ({ data }) => (
    <Table>
        <TableHead>
            <TableRowCustom>
                <TableCellCustom>Position</TableCellCustom>
                <TableCellCustom>Team</TableCellCustom>
                <TableCellCustom>Crest URI</TableCellCustom>
                <TableCellCustom>Points</TableCellCustom>
                <TableCellCustom>Wins</TableCellCustom>
                <TableCellCustom>Losses</TableCellCustom>
                <TableCellCustom>Goals</TableCellCustom>
            </TableRowCustom>
        </TableHead>
        <TableBody>
            {data.map((t, index) =>
                <TableRowCustom key={index}>
                    <TableCellCustom>{t.position}</TableCellCustom>
                    <TableCellCustom>{t.teamName}</TableCellCustom>
                    <TableCellCustom><img src={t.crestURI} alt={`${t.position}-${t.teamName}`} width="100" border="1" /></TableCellCustom>
                    <TableCellCustom>{t.points}</TableCellCustom>
                    <TableCellCustom>{t.wins}</TableCellCustom>
                    <TableCellCustom>{t.losses}</TableCellCustom>
                    <TableCellCustom>{t.goals}</TableCellCustom>
                </TableRowCustom>
            )}
        </TableBody>
    </Table>
)

export default Standing