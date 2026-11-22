import Course from './course.jsx';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
function Course_List(){
    const course=[
        {
            name:"Html Course",
            price:200,
            img={html},
            ratings=4.5
        }
        {
            name:"CSS Course",
            price:300,
            img={css},
            ratings=4.0
        }
        {
            name:"JavaScript Course",
            price:500,
            img={js},
            ratings=4.8
        }                
    ]
    return(
        <>
        </>
    );
}
export default Course_List;