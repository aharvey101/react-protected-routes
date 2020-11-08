import React from "react"
import {withRouter} from "react-router-dom";

function Secret({logout, ...rest}){
  return (
    <div>
      <h1>Secret Route</h1>
      <button onclick={logout} >Log Out</button>
    </div>
  )
}

export default withRouter(Secret)