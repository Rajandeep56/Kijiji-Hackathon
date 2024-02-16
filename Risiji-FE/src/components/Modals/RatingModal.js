import './RatingModal.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const RatingModal = () => {
  const [rating, setRating] = useState('');
  const { userId } = useParams();
  const navigate = useNavigate();

  const addReveiw = async (id, rating) => {
    const res = await axios.patch(
      `http://localhost:8000/contact/${id ?? 1001}/incrementTotalReviews`,
      { userId: id, rating: rating }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReveiw(userId, rating);
    navigate(`/${userId}`);
  };

  return (
    <div className="ReviewCard">
      <div className="ReviewCard__avatar">S</div>
      <p>Howe was your experience?</p>
      <form className="ReviewCard__form" onSubmit={handleSubmit}>
        {/* <input
          className="ReviewCard__rating"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        ></input> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RatingModal;
