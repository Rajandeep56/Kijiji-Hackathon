import { useEffect, useState } from 'react';
import Review from './Review';
import './ReviewList.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TopBar from '../Rating/Rating';
import '../../App.css';

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
            <p className="reviews__count">
              {reveiwList?.reviewContent?.length} Reviews
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
