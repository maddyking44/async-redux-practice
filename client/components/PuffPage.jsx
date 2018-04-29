import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import getGrats from '../actions/'

class PuffPage extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
        grats: []
    
    }
    this.saveProfiles = this.saveProfiles.bind(this)

}
componentDidMount() {
    getGrats(this.saveGrats)
}

saveProfiles(grats) {
    this.setState({
        grats: grats
    })
}

render(){
    return (
        <React.Fragment>
            <h1>What are you grateful for?</h1>
            {this.state.grats.map((grat, i) => 
            <div key={i}>
                {grat}
            </div>)}
            <Link to='/form'><button>Add your Gratitude</button></Link>
        </React.Fragment>  
    )}
}

const mapStateToProps = (state) => {
    return {
        grats: state.grats
    }
}

export default connect(mapStateToProps)(PuffPage)