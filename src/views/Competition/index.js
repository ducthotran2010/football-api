import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import TableTeam from './TableTeam'
import TableFixture from './TableFixture'
import TableLeague from './TableLeague'
import TableCompetition from './TableCompetition'
import { withStyles } from '@material-ui/core/styles'
import banner from 'assets/img/bannerCompetiton.jpg'

class Competition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            error: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, value) {
        this.setState({ value })
    }

    alertError = () => {
        this.setState({
            error: true,
        })
    }

    render() {
        const { value, error } = this.state
        const id = this.props.location.search.substring(this.props.location.search.indexOf('id') + 3)
        console.log(id);
        
        return (
            <div>

                <div style={{
                    height: 300,
                    width: '100%',
                    background: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>

                <TableCompetition id={id} alertError={this.alertError} />
                <div style={{ marginBottom: 40 }}></div>
                {!error && 
                    <div>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                fullWidth
                                centered
                            >
                                <TabCustom label="Team" />
                                <TabCustom label="Fixture" />
                                <TabCustom label="League Table" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TableTeam id={id} />}
                        {value === 1 && <TableFixture id={id} />}
                        {value === 2 && <TableLeague id={id} />}
                    </div>
                }
            </div>
        )
    }
}

const TabCustom = withStyles(theme => ({
    label: {
        fontSize: 20,
    }
}))(Tab)

export default Competition