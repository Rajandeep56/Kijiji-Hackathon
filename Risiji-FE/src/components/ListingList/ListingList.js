import ListItem from './ListItem';
import './ListingList.scss';
import ball from '../../assets/basketball.jpg';

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

  return (
    <section className="list-container">
      <p className="list-container__review-count">26 listings</p>
      <section className="list-container__items">
        {products.map((product) => {
          return <ListItem product={product} />;
        })}
      </section>
    </section>
  );
};

export default ListingList;
