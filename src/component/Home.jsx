import React  from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Quiz from './Quiz'

const Home = () => {
    const [inputData, setInputData] = useState("")

    const startQuiz=()=>{


    }
    const InputData1 = (event) => {
        console.log("value", event.target.value)
         setInputData(event.target.value)
       }
      
 
    
    return (
        <>
        
        <div className="home">
        <div className='home_main'>
        <div className='instruction'>
            
            <h2>
                       The Instructions are as follows:<br></br><br></br>
                     </h2>
                     <h4>
                       * The quiz contains questions related to <i><u>React</u></i> only.
                     </h4><br></br>
                     <h4>
                       * The quiz contains 6 questions of 5 mark each.
                     </h4><br></br>
                     <h4>
                       * You will be awarded 5 mark for each correct answer.
                     </h4><br></br>
                     <h4>
                       * 1 marks will be deducted for wrong answers.
                     </h4><br></br>
                     
                     <h4>
                       * 1 marks will be deducted if you go to the previous question.
                     </h4><br></br>
                     <h4>
                       *You can skip the Question
                     </h4>
                     </div>
            {/* <input id="searchQueryInput" type="text" value={inputData} onChange={InputData1} name="searchQueryInput" placeholder="Search" /> */}
           
            <NavLink to = "/quiz"> <button className="startbutton" onClick={startQuiz} >Start Quiz</button></NavLink>
            </div>
            </div>
            {/* <Quiz name={setInputData}/> */}
            
        </>
    )
}

export default Home