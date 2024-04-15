import DateObject from "react-date-object";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FcFactory } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";


import './index.css'

const ReviewItams = props =>{
    const {eachReview} = props
    const {Name,Company,Reviews,rating,date,link} = eachReview
    var newDate = new DateObject(date)
    const Date = newDate.format("dddd DD MMMM YYYY")
    return(
        <li className='list-container'>
        <div className='container'><FaQuoteLeft/></div>
        <p className='review'>{Reviews}</p>
        <div className='item-container'>
            <div>
            <h2 className="name-heading"><IoPersonCircleSharp/> {Name} <br/>
            <span className="company-name"><FcFactory/> {Company}</span>
            <br/>
            <span className="location"> <FaLocationDot/> <a href={link} className="loc">location</a></span>
            </h2>
            </div>
            <div className="left-container">
             <p className="rating">rating : <span className="stars"> {rating} stars</span><br/>
             <span className="date">{Date}</span>
             </p>
    
            </div>
        </div>
        </li>
    )
}

export default ReviewItams