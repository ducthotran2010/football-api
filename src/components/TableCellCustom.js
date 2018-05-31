import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
    head: {
        backgroundColor: '#b174fe',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'default',
        }
    },
    body: {
        fontSize: 17,
    },
}))(TableCell)
