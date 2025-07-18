import React from 'react'
import DemoComponent from './Components/DemoComponent'

const App = () => {
  return (
    <div className='bg-[#F5EFEB] h-screen'>
     
      <DemoComponent fullName={'Mambwe'} age={27} />
    </div>
  )
}

export default App