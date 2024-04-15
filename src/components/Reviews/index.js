import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ReviewItams from '../ReviewItams'

import './index.css'

function Reviews(){
    const [reviewData, setReviews] = useState([]);

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
          const formattedData = response.data.data.map(eachData => ({
            ID:eachData.ID,
            Name:eachData.Name,
            Company:eachData.Company,
            Reviews:eachData.Reviews,
            rating:eachData.rating,
            date:eachData.datecreated,
            link:eachData.link
          }))
          setReviews(formattedData)

        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      fetchReviews();
    }, []);
    return(
     <div className='bg-container'>
        <h1 className='heading'>Reviews</h1>
        <ul className='ul-container'>
            {reviewData.map(eachItem =>
            <ReviewItams key={eachItem.ID} eachReview={eachItem}/>)}
        </ul>
     </div>
    )
}

export default Reviews