import './StarRating.scss'; 

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="star-rating">
      {'★'.repeat(fullStars)}
      {halfStars ? '½' : ''}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default StarRating;