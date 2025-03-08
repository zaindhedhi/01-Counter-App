import React, { useState } from 'react'

const App = () => {
let [num , setNum] = useState(0)
let [tasbih , setTasbih] = useState('')

const addCounter = () =>{
setNum(num+1)
setTasbih('سبحان اللہ')
console.log(num)




}

const lessCounter = () =>{


  setNum(num = 0)
  console.log(num)



}











  return (



    <>
    <h1 style={{textAlign: 'center'}}>Tasbih Counter App</h1><hr  />
    <h1 style={{textAlign: 'center'}}>سبحان اللہ</h1>

    <div style={{
      display: 'flex',
      justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        
    }}>

    <button onClick={lessCounter} style={{fontSize: '30px',
      backgroundColor: 'red',
      padding: '5px'
    }}>Reset</button>
    <h1>{tasbih} {num}</h1>
    <button onClick={addCounter}  style={{fontSize: '30px',
      backgroundColor: 'green',
      padding: '5px'
    }}>Count</button>
    </div>



    </>
  )
}

export default App