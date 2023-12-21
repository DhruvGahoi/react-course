import {useState} from "react";

function App() {
  const[color, setColor] = useState("black");
  const changeRed = ()=>{
    setColor("red")
  }
  const changeBlue = ()=>{
    setColor("blue")
  }
  const changeYellow = ()=>{
    setColor("yellow")
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={changeRed} style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={changeBlue} style={{backgroundColor:"blue"}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={changeYellow} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("olive")} style={{backgroundColor:"green"}}>Olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("gray")} style={{backgroundColor:"gray"}}>Gray</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("lavender")} style={{backgroundColor:"lavender"}}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={()=>setColor("white")} style={{backgroundColor:"white"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
