import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'

const LoadingScreen = ({ height }) => (
    <div style={{ height: (height) ? height : '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress style={{ color: purple[500] }} thickness={7} />
    </div>
)

export default LoadingScreen