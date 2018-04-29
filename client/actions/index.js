import request from 'superagent'

//exporting type
export const RECEIVE_GRATS = 'RECEIVE_GRATS'


//actions
export const receiveGrats = (grats) => {
 
  return {
    type: RECEIVE_GRATS,
    grats: grats
  }
}


//functions - form 
// export function postGrat (grat) {
//   return (dispatch) => 
//     request
//     .post('/api/v1/form')
//     .send(grat)
//     .catch(err => {
//       dispatch(showError(err.message))
//     })
// }

//homepage
export function getGrats () {
  return (dispatch) => 
    request
    .get('/api/v1/')
    .then(res => {
      dispatch(receiveGrats(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
}