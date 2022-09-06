import axios from 'axios';
import {React, useState, useEffect} from 'react';
import { Url, PubliUrl } from "../components/Config";


function Contact({props}) {
    
    // const [datas, set_datas] = useState(null);
    // const [DataNotice, DatauploadNotice] = useState(null);
    // const [DataName, setFirstName] = useState('');
    // const [descriptions, setdescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if(!props.datas) 
        return
        axios.post(`${PubliUrl}/api/senddata`, { datas }).then(res => {
            props.setFirstName('');
            props.setdescription('');
            props.DatauploadNotice("success");
            props.setErrorMessage('');
            props.rerender ? props.set_rerender(false): props.set_rerender(true);
            props.setFilterchnage(true);

          });
          

    }, [props.datas])
   
    
    const formsubmitted = (e) => {
        e.preventDefault();
        props.set_datas({
            name: e.target.name.value,
            description: e.target.description.value
        })
        if(e.target.name.value =="" && e.target.description.value ==''){
             setErrorMessage('Example error message!');
        }
    }
    return (

        <form onSubmit={formsubmitted} >
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text"  onChange={e => props.setFirstName(e.target.value)} className="form-control" name="name" id="name" value={props.DataName} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control"  onChange={e =>{
                   
                   props.setdescription(e.target.value)
                }
                     } id="description" name="description"  rows="3" value={props.descriptions}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            {props.DataNotice == "processing" ? <span>Please Wait Your Data is uploading...</span> : props.DataNotice == "success" ? <span>Data Imported Successfully...</span> : ''}
            {props.errorMessage && (
  <p className="error"> {props.errorMessage} </p>
)}
        </form>
        
    )
}

export default Contact