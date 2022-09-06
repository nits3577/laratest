import axios from 'axios';
import { Input } from 'postcss';
import { React, useState, useEffect } from 'react';
import { Url, PubliUrl } from "../components/Config";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

function Display({props}) {

      const [todos, set_todos] = useState([]);
    // const [DataName, setFirstName] = useState('');
    // const [filterchange, setFilterchnage] = useState(true);

    const showTodo = (todos,props) => {
        const onDelete = (id) => {
            
            axios.post(`${PubliUrl}/api/deletedata`, { id }).then(res => {
                props.rerender ? props.set_rerender(false) : props.set_rerender(true);
                props.setFilterchnage(true);
            });
        }
        const onEdit = (id,name,discription) => {

            console.log(id);
            console.log(name);
            console.log(discription); 
                
        }


        return (
            todos.map((todo) => {
                return (
                    <div className="row" key={todo.id}>
                        <div className="col" >
                            Name:{todo.name}
                        </div>
                        <div className="col">
                            Discription: {todo.description}
                        </div>
                        <div className="col">
                            <button className='btn btn-danger' onClick={() => onDelete(todo.id)}>Delete</button>
                        </div>
                        <div className="col">
                            <button className='btn btn-danger' onClick={() => onEdit(todo.id,todo.name,todo.description)}>Edit</button>
                        </div>
                    </div>

                )
            })
        )
    }
    const filter = (e) => {
        const keyword = e.target.value;
        var stringLength = keyword.length;
        props.setFilterval(keyword);
        if(stringLength > 1){
            props.setFilterchnage(true);
        }
        if(stringLength === 0){
            props.setFilterchnage(true);
        }
        // rerender ? set_rerender(false) : set_rerender(true);

    }

    useEffect(() => {
        if(props.filterchange !=true) 
        return

            axios.post(`${PubliUrl}/api/gettodos`, { value: props.filterval  }).then(res => {
                set_todos(res.data);
                props.setFilterchnage(false);
            });
        
        // axios.post(`${PubliUrl}/api/gettodos`, { value: filterval  }).then(res => {
        //     set_todos(res.data);

        //   });
      
    }, [props.filterchange])

    return (
        <div className="wrapper">
            <input
                type="search"
                value={props.filterval}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />
            {/* <input type="text"  onChange={e => setFirstName(e.target.name.value)} className="form-control" name="name" id="name" value={DataName} required/> */}

            {todos ? showTodo(todos,props) : ''}
        </div>
    )
}

export default Display