import React, { useState } from 'react'

function Login() {
  const [count ,setCount] = useState(0)
  const onClickSum = () =>{
    setCount(count + 1)
  }
  const onClickHieu = () =>{
    setCount(count - 1)
  }
  const onClickReset = () =>{
    setCount(0)
  }
  return (
    <React.Fragment>
       <div>Login</div>
       <button onClick={onClickSum}>An vao day la + </button>
       <button onClick={onClickHieu}>An vao day la - </button>
       <button onClick={onClickReset}>An vao day la reset ve 0 </button>
       <p >{count}</p>
    </React.Fragment>
  )
}

export default Login