import React from 'react';
import ReactJson from 'react-json-view'
// import './main.scss';

function Result (props){
  return(
 <div id='result'>
  <ReactJson src={props.result} theme="Adventure Time" />
</div>
  )
}
export default Result