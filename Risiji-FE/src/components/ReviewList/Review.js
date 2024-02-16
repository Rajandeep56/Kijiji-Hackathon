import star from '../../assets/star.png';
import './Review.scss';

const Review = ({ review }) => {

  const stars = [];
  const createStarsArr = () => {
    for (let i = 0; i < review.score; i++) {
      stars.push(<img src={star} />);
    }
  };

  createStarsArr();

  return (
    <section className="review">
      <div className="review__avatar">
        {review.reviewedBy.userName.charAt(0)}
      </div>
      <div className="review__detail">
        <p className="review__name">{review.reviewedBy.userName}</p>
        <div className="review__category">
          <span>Buyer ·</span>
          <span>Home - Indoor</span>
        </div>
        {stars.map((element) => {
          return element;
        })}
      </div>
      <p className="review__time">{}</p>
    </section>
  );
};

export default Review;
