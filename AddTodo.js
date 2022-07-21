import { ToastContainer, toast } from 'react-toastify';
 // import 'react-toastify/dist/ReactToastify.css';
  
import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    
    const[data,setData] = useState({
       title: "",
       desc: "" ,
       desc1: "",
       desc2: ""
    });
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [desc1, setDesc1] = useState("");
    const [desc2, setDesc2] = useState("");


    const submit = async (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("");
        }
        else {
            
           /*  addTodo(title, desc);
            setTitle("");
            setDesc("");*/
            try{
                const response = await fetch("https://v1.nocodeapi.com/rahul198kash/google_sheets/anrFkfhxwetjuefg?tabId=Sheet1",{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[title,desc,desc1,desc2,new Date().toLocaleString()],
                ]),
                }
                );
                await response.json();
                setData({...data,title:"",desc:"",desc1:"",desc2:""});
                
              toast.success("form submitted sucessfully")
                
            }catch (err){
                console.log(err)
                toast.error("form cannot be submit")
            }
        };
    }
    return (
      
        <div className="container my-3">
          <br></br>
          <br></br>
          
            <form onSubmit={submit}>
                <div className="mb-3">
                   <center> <label htmlFor="title" className=""><b>FULL NAME</b></label></center>
                    <center><input type="text"   placeholder =""  value={title} onChange={(e) => setTitle(e.target.value)}  className="" id="title" aria-describedby="emailHelp" size="28" style={{border:"2px solid green",padding:"10px",background:"mintcream"}} required/></center>

                </div>
                <div className="mb-3">
                   <center> <label htmlFor="desc" className="form-label"><b>MOBILE NO.</b></label></center>
                    <center><input type="number" placeholder="" value={desc} onChange={(e) => setDesc(e.target.value)} className="" id="desc" size="40" style={{border:"2px solid green",padding:"10px"}} required/></center>
                </div>
                <div className="mb-3">
                    <center><label htmlFor="desc1" className="form-label"><b>SUBSCRIPTION DATE</b></label></center>
                    <center><input type="date" placeholder=""value={desc1} onChange={(e) => setDesc1(e.target.value)} className="" id="desc1" size="28" style={{border:"2px solid green",padding:"10px"}} required/></center>
                </div>
                <div className="mb-3">
                    <center><label htmlFor="desc2" className="form-label"><b>SUBSCRIPTION EXPIRY DATE</b></label></center>
                    <center><input type="date" placeholder="" value={desc2} onChange={(e) => setDesc2(e.target.value)} className="" id="desc2" size="28" style={{border:"2px solid green",padding:"10px"}} required/></center>               </div>
                <div>
               <center> <button type="submit" className="myClass" style={{border:"4px solid green"}} >SUBMIT</button></center>
                </div>
            </form>
           
        </div>
    )
}
