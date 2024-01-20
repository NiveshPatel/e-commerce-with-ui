import React from 'react'
import "../App.css"
import { TailSpin } from 'react-loader-spinner'
const loader = () => {
  return (
    <div className='loader'>
        <TailSpin
  visible={true}
  height="120"
  width="120"
  color="royalblue"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default loader