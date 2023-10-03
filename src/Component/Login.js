import React, { useState } from 'react'

function Login() {
  const [count ,setCount] = useState(0)
  const onClickSum = () =>{
    setCount(count + 1)
  }
  const onClickHieu = () =>{
    setCount(count - 1)
  }
  return (
    <React.Fragment>
       <div>Login</div>
       <button onClick={onClickSum}>An vao day la + </button>
       <button onClick={onClickHieu}>An vao day la - </button>
       <p >{count}</p>
    </React.Fragment>
  )
}

export default Login