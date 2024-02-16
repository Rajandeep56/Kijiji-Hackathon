import ListItem from './ListItem';
import './ListingList.scss';
import ball from '../../assets/basketball.jpg';
import TopBar from '../Rating/Rating';
import { useEffect, useState } from 'react';
import RatingModal from '../Modals/RatingModal';
import { useParams } from 'react-router';
import axios from 'axios';

const ListingList = () => {
  const products = [
    {
      image: ball,
      title: 'Basket Ball',
      content:
        'Never used! Brand New! Got this from my brother, but not a fan of sports.',
      price: 150.0,
    },
    {
      image: ball,
      title: 'Basket Ball',
      content:
        'Never used! Brand New! Got this from my brother, but not a fan of sports.',
      price: 150.5,
    },
  ];

  const [show, setShow] = useState(false);
  const [ReviewList, setReviewList] = useState();
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

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <TopBar userId={userId} />
      <section className="list-container">
        <p className="list-container__review-count">2 listings</p>
        <section className="list-container__items">
          {products.map((product) => {
            return <ListItem product={product} handleClick={handleClick} />;
          })}
        </section>
      </section>
      {show && <RatingModal />}
    </>
  );
};

export default ListingList;
