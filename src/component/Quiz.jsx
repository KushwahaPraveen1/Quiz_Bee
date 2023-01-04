import React, { useState } from 'react'
// import Home from './Home';
import { QuizData } from './QuizData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './quizee-1 (1).png'

const Quiz = (name) => {
console.log({name});
    // <p>{name}</p>
    const [number, setNumber] = useState(0);
    const [disable, setDisable] = useState(false);
   const [result,setResult] =useState(0)


    const nextQue = () => {
        let num = number;
      
        if (num < 5) {
         
            setNumber(num + 1)

        }
        else {
            setDisable(true)
          
        }
    }
    const prevQue = () => {
        let num = number;
      
        if (num > 0) {
           
            setResult(result-1)
            setNumber(num - 1)

        }
        else {
            setDisable(false)
          
        }
    }

    const notify = (val) => toast.dark(val, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

     
        const checkAnswer=(check)=>{
        let num = number;
      
        if (num < 4) {
            setNumber(num + 1)

        }
        else {
            setDisable(true)
            
        }


        if(check===true)
        {
            setResult(result+5)
            
       
            notify("Wow!! Your Answer Is Right")
        }
        else{
            setResult(result-1)
           
            notify("Wrong Answer")
        }
        

    }
    const resetNow=()=>{
     
        setDisable(false)
        setNumber(0)
        setResult(0)
    }
    return (
        <>
            <div className="quiz">
         {/* <img src={logo}/> */}
   
        <div className="card">
           {
               !disable ?(
                   <>
                   <div className="row">
                <div className="quest">
                    <div className="que">
                        {/* <h2>Questions &nbsp; {number+1} /6</h2> */}
                        <h4>Q {number+1}.  {QuizData[number].question}</h4>
                    </div>

                </div>
                <div className="ans">
          
                    <div className='main'>
                    <button type="button" className="prev_ btn btn-success " onClick={prevQue}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                                       
                                <div>{
                        
                        QuizData[number].answer.map((val,ind)=>{
                            return (
                                <>
                               
                                <button type="button" 
                                         key={ind} 
                                         className="btn btn-outline-warning btn-block" 
                                         onClick={()=>checkAnswer(val.isCorrect)} >{val.ans}</button>


                                </>
                            )
                        })
                        

                    }
                    </div>
                    <button type="button" className="next_ btn btn-success " onClick={nextQue}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            
                                          </div>

                    <br />
                    <br />
                    

                </div>
               
                </div>
          
           

                   </>
               ) : (
                   <>
                   <div className="box">
                       <h1>Thank You</h1>
                       <h3>Your Scores {result}</h3>
                       {/* <NavLink to="/" className="btn btn-success">Back To Home</NavLink> */}
                       <button className="btn btn-success" onClick={resetNow}>Restart</button>
                   </div>

                   </>
               )
           }
        </div>
    
        {/* <div className='butt'>
                <div className='nextprev'><button type="button" className="btn btn-success " onClick={prevQue}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>         
                <div className='nextprev'><button type="button" className="btn btn-success " onClick={nextQue}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
       </div> */}


<ToastContainer />
            
           </div>

        </>
    )
}

export default Quiz