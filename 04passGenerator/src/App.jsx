import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{  //useCallback: memorizes the function for optimization (cache memory)

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str+= "1234567890";
    if(charAllow) str+= "!@#$%^&*_-/?><+=[]{}()`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);  
      
    }
    setPassword(pass);

  },[length, numAllow, charAllow, setPassword]);  //If we give password instead of setPassword then it will go in an infinite loop.... If we change the dependencies for every change their will be re-rendering everytime. 

  const passwordRef = useRef(null);

  useEffect(()=>{   //when our page loads this function calls for the first time and if there is a change in dependencies then it will run.
    passwordGenerator()
  },[length, numAllow, charAllow, passwordGenerator])

  // const handleCopyText = () => {
  //   let text = document.getElementById("myBox");
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // }

  const copyToClip = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4) : for selecting a particular range   
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-orange-500 text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} id='myBox' ref={passwordRef} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClip}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={64} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numAllow} id='numberInput' onChange={()=>{setNumAllow((prev)=>!prev)}}/>
          <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numAllow} id='numberInput' onChange={()=>{setCharAllow((prev)=>!prev)}}/>
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
