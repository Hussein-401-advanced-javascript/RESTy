import React from 'react';
import ReactJson from 'react-json-view'
// import './loader.scss';

function Result(props) {
  // console.log(props.loading);
  return (
    <div className={`loading-${props.loading}`}>
    <>
          <ReactJson id= "output" src={props.result}  /> 
    </>
    </div>
  );
}
export default Result;