"use client"
import { useState } from "react"
const State = () => {
const [count,setCount]=useState(0)
  return (
    <div>
        <h1 className="text-3xl">The Count is</h1>
        {count}
    <br/>
<button onClick={()=>setCount(count+1)} className="border-2 w-20 bg-green-500 rounded-md mx-1">Increase</button>
<button onClick={()=>setCount(count-1)} className="border-2 w-20 bg-red-500 rounded-md mx-1">Decrease</button>
<button onClick={()=>setCount(count*count)} className="border-2 w-20 bg-blue-300 rounded-md mx-1">X<sup>2</sup></button>
<button onClick={()=>setCount(count/2)} className="border-2 w-20 bg-blue-300 rounded-md mx-1">/2</button>
<button onClick={()=>setCount(0)} className="border-2 w-20 bg-slate-400 rounded-md mx-1">Reset</button>
    </div>
  )
}

export default State