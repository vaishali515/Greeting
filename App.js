import './App.css';
import {useState} from 'react';
import Welcome from './Components/Welcome';

function App() {
  
    const [name , setName] = useState("")
    const [regNo , setregNo] = useState("")
    const [submit , setSubmit] = useState(false)


    return (

        <div>
        <div>
            <label><h2>Enter your name : </h2> </label>
            <input
            placeholder ="name"
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>

             <label><h2>  Enter your Registration number: </h2> </label>
            <input
            placeholder ="registration no"
            value ={regNo}
            onChange={(event)=>{setregNo(event.target.value)}}>

            </input>
            </div> 
            <div>
              <h2> Click on the Submit button below!!</h2>
              <button onClick={()=>{setSubmit(!submit)}}>Submit</button> </div>

            {(submit && name && regNo) && <Welcome name={name} regNo={regNo}></Welcome>}


        </div>


    );

}

export default App;