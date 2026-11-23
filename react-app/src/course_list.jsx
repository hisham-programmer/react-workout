import Course from './course.jsx';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
function CourseList(){
    const courses=[
        {
            name:"Html Course",
            price:200,
            img:html,
            ratings:4.5
        },
        {
            name:"CSS Course",
            price:300,
            img:css,
            ratings:4.0
        },
        {
            name:"JavaScript Course",
            price:500,
            img:js,
            ratings:4.8
        },
        {
            
            price:1000,
            img:js,
            ratings:5
        }                
    ]
    courses.sort((x,y)=>y.ratings-x.ratings)
    const vfmcourses=courses.filter((course)=>course.price<=300)
    const courseList=courses.map(
        (course,index)=>
            <Course
            key={index}
            name={course.name}
            price={course.price}
            img={course.img}
            ratings={course.ratings} 
            />
    );
    return(
        <>
        {courseList}
        </>
    );
}
export default CourseList;