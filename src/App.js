import React from 'react'
import WindowTracker from './WindowTracker';
import style from './style.css'

function App() {
  const [show, setShow] = React.useState(false)
    
  function toggle() {
      setShow(prevShow => !prevShow)
  }
  
    return(
     <div>
       
       <div className='container'>
      
        {
        show ?  
        <img
         onClick={toggle} 
         src="https://external-preview.redd.it/f8tctzjT4vu7wPwTgZ74ypWmmgnPfjZpVGwZyAQ84Kc.jpg?auto=webp&s=e00595942d4462642b665b2c8bacb4148add3afa" 
         alt="A Rubber Mask Of Richard D James AKA Aphex Twin" 
         /> :
         <img
         onClick={toggle}
         src="https://pbs.twimg.com/profile_images/494512020608135168/RCr00pFN_400x400.jpeg" 
         alt="Richard D James AKA Aphex Twin" 
         />  
         }
        
        
       </div>
      
      <div className='container'>
        {show && <WindowTracker />}
      </div>
       
     </div>
    )
}

export default App;
