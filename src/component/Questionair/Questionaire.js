import React,{useState,useEffect} from 'react';
import './Questionaire.css'

const Questionaire = () => {

    const [searchValue,setSearchValue]  = useState("");
    const [button,setButton]  = useState(false);
    const [todo,setTodo]  = useState(0);

    const [question,setQuestion] = useState()
    const [question1,setQuestion1] = useState()
    const [question2,setQuestion2] = useState()
    const [addClass,setAddClass] = useState(false)
    const [addClass1,setAddClass1] = useState(false)
    const [addClass2,setAddClass2] = useState(false)
    const [addClass3,setAddClass3] = useState(false)

   
  

    
            // useEffect( () =>{
            //     if(button){
            //         fetchData();
            //     }
               
            // },[button])

            // const fetchData =  () => {

            //         // fetch(`http://postalpincode.in/api/pincode/${searchValue}`)
            //         // .then(response => response.json())
            //         // .then(response =>{
            //         //     setTodo(response)
            //         //     console.log(todo);
            //         // })
                   
            // }
    
            const handleYes = () =>{
                setQuestion(true);
                console.log("Yes")
            }
            const handleNo = () =>{
                setQuestion(false);
                console.log("No")
            }
            const handle2Yes = () =>{
                setQuestion1(true);
                console.log("Yes")
            }
            const handle2No = () =>{
                setQuestion1(false);
                console.log("No")
            }
            const handle3Yes = () =>{
                setQuestion2(true);
                console.log("No")
            }
            const handle3No = () =>{
                setQuestion2(false);
                console.log("No")
            }

    return (
        <div className ="questionaire wrapper">
                    <div className="location"><h1>Your Location</h1></div>
                    <div className="postcode"><p>Enter Your Postcode</p></div>
                    <div className="search-field">
                                    <input 
                                            onChange={e => setSearchValue(e.target.value)} 
                                            className="inputField" 
                                             type='text'
                                             placeholder="Enter a Postcode" 
                                             id ='postcode' 
                                    />
                                  <span className='search-button'> 
                                        <i 
                                            className="fa fa-map-marker"
                                             aria-hidden="true"
                                             onClick={() => setButton(true)}
                                         >
                                        </i> 
                                 </span>  
                    </div>

                    <div className="questions">
                            <div className="first-question">
                                    <p className="head">Do you have any shading on your roof from chimneys or nearby trees?</p>
                                    <p className="suggest">This will help us recommend the most appropriate solar package for your home</p>
                                    <div className="button"> 
                                        <div className="yesButton" ><button  onClick ={handleYes} className="First-button">Yes</button></div>    

                                        <div className="noButton">  <button onClick ={handleNo}  className="second-button">No</button></div>   
                                    </div>
                                    

                                    { question === true ? <div><p className="head">Do you own your own home, whether that's outright or mortgaged?</p>
                                                                                 <div className="button">

                                                                                        <div className="yesButton" ><button  onClick ={handle2Yes} className="First-button">Yes</button></div>    

                                                                                        <div className="noButton">  <button onClick ={handle2No}  className="second-button">No</button></div>
                                                                                 </div>
                                                                                
                                                                        </div> : null
                                    }

                                    {question === false ?  <div><p className="head">Do you own your own home, whether that's outright or mortgaged?</p>
                                                                                    
                                    <div className="button">

                                                <div className="yesButton" ><button  onClick ={handle2Yes} className="First-button">Yes</button></div>    

                                                <div className="noButton">  <button onClick ={handle2No}  className="second-button">No</button></div>
                                </div>
                                                                         </div> : null
                                     }

                                    { question1 === true ? <div><p className="head">Do you know how many panels you need?</p>
                                                                                                                    
                                    <div className="button">

                                                    <div className="yesButton" ><button  onClick ={handle3Yes} className="First-button">Yes</button></div>    

                                                    <div className="noButton">  <button onClick ={handle3No}  className="second-button">No</button></div>
                                    </div>
                                                                                                            </div> : null
                                     }          
                                    { question1 === false ? <div><p className="head">Do you know how many panels you need?</p>
                                                                                                                    
                                                <div className="button">

                                                         <div className="yesButton" ><button  onClick ={handle3Yes} className="First-button">Yes</button></div>    

                                                        <div className="noButton">  <button onClick ={handle3No}  className="second-button">No</button></div>
                                                 </div>
                                                                                                            </div> : null
                                     }          
                                    { question2 === true ? <div><p className="head">How many panels do you need?</p>
                                                                                                                    <p>Number of panels: </p>
                                                                                                                    <select id="panel">
                                                                                                                        <option>8 Panels</option>
                                                                                                                        <option>10 Panels</option>
                                                                                                                        <option>12 Panels</option>
                                                                                                                        <option>14 Panels</option>
                                                                                                                    </select>
                                                                                                                    
                                                                                                            </div> : null
                                     }          
                                    { question2 === false ? <div><p className="head">Which of these would best describe your home?</p>
                                                                                    <p className="suggest">This will help us recommend the most appropriate solar package for your home</p>                             
                                                                                      <div className="option-wrapper">
                                                                                            <div className="radio-icon-multiple" onClick = {()=> setAddClass(!addClass)}>
                                                                                                <input type = "radio" name="question2"  className="option-radio-input"/>
                                                                                                <label className={`radio-label ${addClass ? "active" : ""}`}>
                                                                                                    <span>Flat/Apartment</span> 
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="radio-icon-multiple" onClick = {()=> setAddClass1(!addClass1)}>
                                                                                                <input type = "radio" name="question2"  className="option-radio-input"/>
                                                                                                <label className={`radio-label ${addClass1 ? "active" : ""}`}>
                                                                                                    <span>Terraced House</span> 
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="radio-icon-multiple" onClick = {()=> setAddClass2(!addClass2)}>
                                                                                                <input type = "radio" name="question2"  className="option-radio-input"/>
                                                                                                <label className={`radio-label ${addClass2 ? "active" : ""}`}>
                                                                                                    <span>semi-detached House</span> 
                                                                                                </label>
                                                                                            </div>
                                                                                            <div className="radio-icon-multiple" onClick = {()=> setAddClass3(!addClass3)}>
                                                                                                <input type = "radio" name="question2"  className="option-radio-input"/>
                                                                                                <label className={`radio-label ${addClass3 ? "active" : ""}`} >
                                                                                                    <span className="text">Detached House</span> 
                                                                                                </label>
                                                                                            </div>

                                                                                      </div>
                                                                            </div> : null
                                     }          
                            </div>
                    </div>
        </div>
    )
}

export default Questionaire;
