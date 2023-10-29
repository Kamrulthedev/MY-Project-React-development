
import './App.css'
import LinShat from './assets/Compunents/LinShard/LinShat'
import Nav from './assets/Compunents/Navber/Nav'
// eslint-disable-next-line no-unused-vars
import PriseOption from './assets/Compunents/PriseOption/PriseOption'
// import DuNaver from './assets/Compunents/DaisyUI/DuNaver'

function App() {


  return (
    <>
    <div className='bg-orange-100'>
    <Nav></Nav>
       {/* <DuNaver></DuNaver> */}
      <h1 className='text-4xl font-bold bg-green-500'>Vite + React</h1>
      <LinShat></LinShat>
{/*  
    <PriseOption></PriseOption> */}
    </div>
    </>
   
  )
}

export default App
