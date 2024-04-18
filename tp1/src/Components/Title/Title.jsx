import React from 'react'; 
import style from  "./Title.module.css";  
 
const Title = ({texto}) => { 
    return (<h1 className='titulo'>{texto}</h1>); 
}; 
 
export default Title;
    