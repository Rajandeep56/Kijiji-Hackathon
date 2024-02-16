import './RatingModal.scss';
import { useState } from 'react';
import axios from 'axios';

const RatingModal = () => {
  const [rating, setRating] = useState('');

  const addReveiw = async (id, rating) => {
    const res = await axios.patch(
      `http://localhost:8000/contact/${id}/incrementTotalReviews`,
      { userId: id, rating: rating }
    );
    console.log(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReveiw(1001, rating);
  };

  return (
    <div className="ReviewCard">
      <div className="ReviewCard__avatar">S</div>
      <p>Howe was your experience with Summer Teng</p>
      <form className="ReviewCard__form" onSubmit={handleSubmit}>
        <input
          className="ReviewCard__rating"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RatingModal;
