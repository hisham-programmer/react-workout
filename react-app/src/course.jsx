import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
function Course(props){
    const [purchased,setpurchased]=useState(false);
    function purchase(discount){
        console.log(props.name,"purchased with",discount,"% discount");
        setpurchased(true);
    }
      return(
        props.name&&<div className="card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.ratings}</p>
            <button onClick={(event)=>{purchase(20) ,console.log(event) }}>purchase</button>
            <button onClick={()=>props.delete(props.id)}>delete</button>
            <p>{purchased?"Already Purchased":"Get it Now"}</p>
        </div>
    );
    Course.PropTypes={
        name:PropTypes.string,
        price:PropTypes.number,
        ratings:PropTypes.bool
    }
}
export default Course;