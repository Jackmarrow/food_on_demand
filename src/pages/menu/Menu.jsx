import React from 'react'
import pizza from '../../pizza1.png'
import FlyingButton from 'react-flying-item'
import toast, { Toaster } from 'react-hot-toast'
const notify = () => toast.success('Here is your toast.');

const Menu = () => {
  return (
    <>
    <div>
      <img src={pizza} alt='' />
      <FlyingButton targetLeft={'90%'} src={[pizza]}>fly</FlyingButton>

      <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </div>
    </>
  )
}

export default Menu