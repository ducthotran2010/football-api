import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
    root: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#f1f1f1',
            cursor: 'pointer',
            userSelect: 'none'
        }
    },
}))(TableRow)
