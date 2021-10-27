import React, { useState,useEffect } from 'react';
import axios from 'axios'
// import classes from './AddMovie.module.css';

// function AddFood(props) {
//   const name = useRef('');
//   const price = useRef('');
//   const type = useRef('');

//   function submitHandler(event) {
//     event.preventDefault();

//     // could add validation here...

//     const food = {
//       name: name.current.value,
//       price: price.current.value,
//       type: type.current.value,
//     };

//     props.AddFood(food);
//   }


// async function addFoodHandler  (food){
//         fetch('http://localhost:4000/foods',{
//             method:'POST',
//             body : JSON.stringify(food),
//             headers:{
//                 'Content-Type' : 'application/json'
//             }
//         });
//         const data = await Response.json();
//         console.log(data)
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div>
//         <label htmlFor='title'>name</label>
//         <input type='text' id='name' ref={name} />
//       </div>
//       <div >
//         <label htmlFor='opening-text'>Price</label>
//         <input type='number' id='price' ref={price} />
//       </div>
//       <div>
//         <label htmlFor='type'>Type</label>
//         <input type='text' id='type' ref={type} />
//       </div>
//       <button onClick={addFoodHandler}>Add Food</button>
//     </form>
//   );
// }


// const FoodList = () => {
//   const [foods,setFoods] = useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:4000/foods')
//     .then
//   })
// }
// export default AddFood;
