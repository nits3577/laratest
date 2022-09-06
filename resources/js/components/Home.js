import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import Display from './Display';




function Home() {
    const [rerender, set_rerender] = useState(false);
    const [filterchange, setFilterchnage] = useState(true);
    const [datas, set_datas] = useState(null);
    const [DataNotice, DatauploadNotice] = useState(null);
    const [DataName, setFirstName] = useState('');
    const [descriptions, setdescription] = useState('');
    const [filterval, setFilterval] = useState('');
    // const [todos, set_todos] = useState([]);

    const props = {
        rerender, set_rerender, filterchange, setFilterchnage, set_datas, DataNotice, DatauploadNotice, DataNotice, DatauploadNotice,DataName,setFirstName,descriptions,setdescription,filterval,setFilterval
      }
    return (
        <div>
            <Navbar />
            <Contact props={props}/>
            <Display props={props}/>
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
