// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input  
//       onChange={(elem)=>{
//         console.log(elem.target.value);
      
//       }}
//       type="text"  />
//     </div>
//   )
// }

// export default App

//***************************************************************************************** */

// import React from 'react'

// const App = () => {
//    function inputChange(value) {
//     console.log(value);
    
//    }

//   return (
//     <div>
//       <input 
//       onChange={function(ele){
//         // console.log(ele.target.value);
//         inputChange(ele.target.value);
        
//       }}
//       type="text"/>
//     </div>
//   )
// }

// export default App

//****************************************************************************************** */

import React from 'react'

const App = () => {
  return (
    <div>
      <div className='div' onMouseEnter={
        (ele)=>{
          console.log('Mouse Entered');
          
        }
      } onMouseLeave={()=>{console.log('Mouse leaves');
      }}>

      </div>
    </div>
  )
}

export default App
