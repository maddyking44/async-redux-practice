// import React from 'react'
// import {connect} from 'react-redux'
// import postGrat from '../actions/index'

// class Form extends React.Component {

//     constructor(props) {
//     super(props)
//     this.state = {
//         grat: ""
    
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)

// }
// handleChange(e){
//     this.setState({
//         grat : e.target.value
//     })
    
// }


// //redirect
// handleSubmit(e){
//     e.preventDefault()
//     this.props.dispatch(postGrat(this.state))
// }

// render(){
//     return (
//         <React.Fragment>
//             <form onSubmit={this.handleSubmit}>  
//             <h1> What are you grateful for?</h1>
//             <textarea name="grat" id="grat" cols="30" rows="10" onChange={this.handleChange} ></textarea>
//             <input type="submit" value="Share" />
//             </form>
//         </React.Fragment>  
//     )}
   
// }

// export default Form