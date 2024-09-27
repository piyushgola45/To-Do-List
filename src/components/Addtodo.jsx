import { useState } from "react";

function Addtodo({onadd})
{
    let [name,setname]=useState("");
    let [date,setdate]=useState("");
    const namechange=(event)=>{
        setname(event.target.value);
        
    }
    const datechange=(event)=>{
       setdate(event.target.value);
    }
    const add=()=>{
        if(name.length>0 && date.length>0){
        onadd(name,date);
        }
        setname("");
        setdate("");
    }
    return <>
        <div className="row">
            <div className="col">
                <input type="text" placeholder="Enter todo here" onChange={namechange} value={name}></input>
            </div>
            <div className="col">
                <input type="date" onChange={datechange} value={date}></input>
            </div>
            <div className="col">
                <button className="btn btn-success" onClick={add}>ADD</button>
            </div>
        </div>
    </>
}
export default Addtodo;