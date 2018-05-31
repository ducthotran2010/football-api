import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'

const SearchBar = (props) => {
    const { classes, isLoading, value, onChange, ...other } = props
    return (
        <AppBar position="static" color="default">
            <TextField
                {...other}
                autoComplete="off"
                value={value}
                onChange={onChange}
                fullWidth
                InputProps={{
                    classes: {
                        root: classes.MuiInputRoot,
                    },
                    disableUnderline: true,
                }}
            />
            <LinearProgress style={{ visibility: (isLoading) ? 'visible' : 'hidden' }} />

        </AppBar>
    )
}

const styles = theme => ({
    MuiInputRoot: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
})


export default withStyles(styles)(SearchBar)