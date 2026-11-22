import PropTypes from 'prop-types';
function Course(props){
    if(props.show==true){
        return(
        <div className="card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.ratings}</p>
        </div>
    );
    }
    else{
        return(
            <div className="card">
                <p>Course Not Available</p>

            </div>
        );
    }
    Course.PropTypes={
        name:PropTypes.string,
        price:PropTypes.number,
        ratings:PropTypes.bool
    }
}
export default Course;