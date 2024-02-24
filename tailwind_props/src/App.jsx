import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [Color, setColor] = useState('white')
// const change=((color)=>{
// setbackgroundColor(color)
// })
  return (
    <>
    
    <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}>
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='bg-white space-x-4 '>
   <button onClick={()=>{
setColor("red")   }}className="bg-red-500 text-white font-bold py-2 px-4 rounded-full"  >Red</button>
   <button onClick={()=>{
setColor("black")   }} className="bg-black text-white font-bold py-2 px-4 rounded-full">Black</button>
   <button onClick={()=>{
setColor("blue")   }} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">Blue</button>
  <button onClick={()=>{
setColor("yellow")   }} className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">Yellow</button>
 <button onClick={()=>{
setColor("green")   }} className='bg-green-500 text-white font-bold py-2 px-4 rounded-full'>Green</button>
 <button onClick={()=>{
setColor("purple")   }} className='bg-purple-500 text-white font-bold py-2 px-4 rounded-full'>Purple</button>
<button onClick={()=>{
setColor("pink")   }} className='bg-pink-500 text-white font-bold py-2 px-4 rounded-full'>Pink</button>
 </div>
 </div>
 </div>
    </>
  )
}

export default App
