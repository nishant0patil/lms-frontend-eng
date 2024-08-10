
import { useEffect } from 'react'
import './App.css'
import toast from 'react-hot-toast'

useEffect(() =>{
  toast.success('hello')
})

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        hello
      </h1>
    </>
  )
}

export default App
