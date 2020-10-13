import React from 'react';
const render = (condition = false , Children = null) =>{
    return condition ? Children : null;
};
export const If =(props)=>{
    return React.Children.map(props.Children, (child)=>{
        return React.cloneElement(child,{ condition : props.condition});
    });
};
export const Then = (props)=> render(props.condition, props.Children);
export const Else = (props)=> render(!props.condition, props.Children);