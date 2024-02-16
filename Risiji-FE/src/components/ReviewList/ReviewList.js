import Review from './Review';
import './ReviewList.scss';

const ReviewList = () => {
  const reviews = [
    {
      avatar: '',
      userName: 'Bo Yang',
      category: 'Home - Indoor',
      scores: 5,
    },
    {
      image: '',
      category: 'Home Appliances',
      userName: 'Petr K',
      scores: 4,
    },
  ];

  return (
    <section className="reviews">
      <p className="reviews__count">26 Reviews</p>
      <section className="reviews__review">
        {reviews.map((review) => {
          return <Review review={review} />;
        })}
      </section>
    </section>
  );
};

export default ReviewList;
