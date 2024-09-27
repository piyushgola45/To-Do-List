import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem from "./components/Todoitem";
import { useState } from "react";
function App()
{
  const [items,setitems]=useState([]);
  const add=(itemname,itemdate)=>{
    console.log(itemname,itemdate);
    const it=[...items,{name:itemname,date:itemdate}];
    setitems(it);
  }
  const delet=(itemname)=>{
    const it=items.filter(it=> it.name!=itemname);
    setitems(it);
  }
    return <>
        <center>
          <div className="container">
                <Appname />
              <br></br>
              <div className="container" style={{'backgroundColor':'lightblue'}}>
                  <Addtodo onadd={add}/>
                  {items.length===0 && <h1 style={{'marginTop':'50px'}}>ENJOY YOUR DAY</h1>}
                  <Todoitem item={items} deleteitem={delet}/>
              </div>
          </div>
          </center>
    </>
}
export default App;