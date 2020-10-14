import React from 'react';
import { NavLink } from 'react-router-dom';

import './history.scss';

const history = (props) => {
    let get = getStorage();
    const handleClick = e =>{

        props.fillFormHandler( get[e.target.id].method, get[e.target.id].url ,get[e.target.id].body)
    }
    
    if(get && get.length > 0){
        const result = get.map((val, idx) => {
            return (
                <li className="mm" key={idx}>
                    <span className={`method ${val.method}`}>{val.method}</span>
                    <span className="url">{val.url}</span>
                    <button onClick={handleClick}><NavLink id ={idx} to='/'  >Re-Run</NavLink>
                    </button>
                </li>
            );
        });
        return (
            <div className="list">
                {result}
            </div>
        );
    }else{
        return(
            <div></div>
        )
    }
}


const getStorage = () => {
    let history = localStorage.getItem('history');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }
}
export default history;