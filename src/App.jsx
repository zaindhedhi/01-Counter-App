// import React, { useState } from 'react'

// const App = () => {
// let [num , setNum] = useState(0)
// let [tasbih , setTasbih] = useState('')

// const addCounter = () =>{
// setNum(num+1)
// setTasbih('سبحان اللہ')
// console.log(num)




// }

// const lessCounter = () =>{


//   setNum(num = 0)
//   console.log(num)



// }











//   return (



//     <>
//     <h1 style={{textAlign: 'center'}}>Tasbih Counter App</h1><hr  />
//     <h1 style={{textAlign: 'center'}}>سبحان اللہ</h1>

//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//         alignItems: 'center',
//         gap: '50px',
        
//     }}>

//     <button onClick={lessCounter} style={{fontSize: '30px',
//       backgroundColor: 'red',
//       padding: '5px'
//     }}>Reset</button>
//     <h1>{tasbih} {num}</h1>
//     <button onClick={addCounter}  style={{fontSize: '30px',
//       backgroundColor: 'green',
//       padding: '5px'
//     }}>Count</button>
//     </div>



//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   let [show , setShow] = useState(false);







//   return (
//     <>
//     <button onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</button>
//     {show ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iure illo eligendi similique quam et, dolorum neque aspernatur quod. Illum et, nostrum sequi id hic sunt modi corporis quam quibusdam.</p> : null}


//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
// let [fruit , setFruit] = useState(['mango' , 'orange' , 'kiwi' , 'apple' , 'grapes'])







//   return (
//     <>
//     <ul>
//       {fruit.map((item , index)=>{
//         return <li key={index}>{item}</li>
//       })}

//     </ul>
    
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {

const [user , setUser] = useState(null)

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=>{
    return res.json()
  })
  .then((res)=>{
    console.log(res)
    setUser(res)
  })

 
}, [])



  return (
    <>
    <h1>user agaye</h1>
    {user ? user.map((item)=>{
      return <p key={item.id}>{item.name}</p>

    }) : <h1>loading</h1>}
    
    </>




  )
}

export default App









