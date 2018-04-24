import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchSloths} from '../actions'

const LoadSubreddit = ({dispatch}) => {
  return ( <div>
  <button onClick={() => dispatch(fetchPosts('newzealand'))}>
    Fetch New Zealand
  </button>
  <button onClick={() => dispatch(fetchSloths('sloths'))}>
    Fetch Sloths
  </button>
  </div>
  )}

export default connect()(LoadSubreddit)
