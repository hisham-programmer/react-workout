import Course from './course.jsx';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import { useEffect, useState } from 'react';
function CourseList(){
    const [courses,setcourses]=useState([
        {
            id:1,
            name:"Html Course",
            price:200,
            img:html,
            ratings:4.5
        },
        {
            id:2,
            name:"CSS Course",
            price:300,
            img:css,
            ratings:4.0
        },
        {
            id:3,
            name:"JavaScript Course",
            price:500,
            img:js,
            ratings:4.8
        },
        {
            id:4,
            price:1000,
            img:js,
            ratings:5
        }                
    ])
    const [dummy,setDummy]=useState(true);
    useEffect(
        ()=>{
          console.log("useEffect called");
          console.log(dummy);  
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response =>{console.log(response)})
        },[courses]
    );  
    function handledelete(id){
        let newcourses=courses.filter((course)=>course.id!=id);
        setcourses(newcourses);
    }
    courses.sort((x,y)=>y.ratings-x.ratings)
    const vfmcourses=courses.filter((course)=>course.price<=300)
    const courseList=courses.map(
        (course)=>
            <Course
            key={course.id}
            id={course.id}
            name={course.name}
            price={course.price}
            img={course.img}
            ratings={course.ratings} 
            delete={handledelete}
            />
    );
    return(
        <>
        {courseList}
        <button onClick={()=>{setDummy(false)}}>Dummy Button</button>
        </>
    );
}
export default CourseList;