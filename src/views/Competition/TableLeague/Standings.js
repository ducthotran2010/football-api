import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCellCustom from 'components/TableCellCustom'
import TableHead from '@material-ui/core/TableHead'
import TableRowCustom from 'components/TableRowCustom'

const Stadings = ({ data }) => (
    <Table>
        <TableHead>
            <TableRowCustom>
                <TableCellCustom>Group</TableCellCustom>
                <TableCellCustom>Position</TableCellCustom>
                <TableCellCustom>Team</TableCellCustom>
                <TableCellCustom>Crest URI</TableCellCustom>
                <TableCellCustom>Points</TableCellCustom>
            </TableRowCustom>
        </TableHead>
        <TableBody>
            {Object.keys(data).map(Group => [
                <TableRowCustom key={Group}>
                    <TableCellCustom rowSpan={data[Group].length}>Group {Group}</TableCellCustom>
                    <TableCellCustom>{data[Group][0].rank}</TableCellCustom>
                    <TableCellCustom>{data[Group][0].team}</TableCellCustom>
                    <TableCellCustom><img src={data[Group][0].crestURI} alt={`team-${data[Group][0].name}`} width="100" border="1" /></TableCellCustom>
                    <TableCellCustom>{data[Group][0].points}</TableCellCustom>
                </TableRowCustom>,
                data[Group].map((t, index) => (index !== 0) ? 
                    <TableRowCustom key={`${index}-${data.Group}`}>
                        <TableCellCustom>{t.rank}</TableCellCustom>
                        <TableCellCustom>{t.team}</TableCellCustom>
                        <TableCellCustom><img src={t.crestURI} alt={`team-${t.name}`} width="100" border="1" /></TableCellCustom>
                        <TableCellCustom>{t.points}</TableCellCustom>
                    </TableRowCustom> : null
                )
            ])}
        </TableBody>
    </Table>
)

export default Stadings