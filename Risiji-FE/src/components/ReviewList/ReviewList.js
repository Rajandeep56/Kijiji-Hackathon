import { useEffect, useState } from 'react';
import Review from './Review';
import './ReviewList.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TopBar from '../Rating/Rating';
import '../../App.css';
import { Link } from 'react-router-dom';
const ReviewList = () => {
  const [reveiwList, setReviewList] = useState();
  const { userId } = useParams();

  const getReviewList = async () => {
    const res = await axios.get(
      `http://localhost:8000/contact/${userId ?? 1001}`
    );
    console.log('data', res.data);
    setReviewList(res.data);
  };

  useEffect(() => {
    getReviewList();
  }, []);

  return (
    <>
      <TopBar userId={userId} />
      <section className="reviews">
        {reveiwList ? (
          <>
            <div className="top-bar__user-listing">
              <Link to={`/${userId ?? 1001}/Listing`}>Go to Listings</Link>
            </div>
            <p className="reviews__count">
              {reveiwList?.reviewSummary?.summary?.totalReviews} Reviews
            </p>
            <section className="reviews__review">
              {reveiwList.reviewContent.map((review) => {
                return <Review review={review} />;
              })}
            </section>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  );
};

export default ReviewList;
