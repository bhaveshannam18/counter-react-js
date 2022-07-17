import Button from "./Button";
import "./Counter.css"
import { useState } from "react";
function Counter(){
    const [counterValue , setCounterValue] = useState(0);
    // function decValue(){
    //     setCounterValue(counterValue-1);
    //     // console.log("dec button clicked");
    // }

    // function incValue(){
    //     setCounterValue(counterValue+1);
    //     // console.log("inc button clicked");
        
    // }

return <>
    <div className="counter">
        <div>
            <Button 
            btnId = {"dec"} 
            btnName={"-"} 
            handleClick={()=>{
                    setCounterValue(counterValue-1);
                }
            } />
            <span className='value'>{counterValue}</span>
            <Button 
            btnId = {"inc"} 
            btnName={"+"} 
            handleClick={()=>{
                setCounterValue(counterValue+1);
            }
        }/>
        </div>
    <Button className="resetBtn" 
    btnName={"Reset"} 
    handleClick={()=>{
            setCounterValue(0);
        }
    }/>
    </div>
</>

}

export default Counter;