import ListingList from './components/ListingList/ListingList';
import ReviewList from './components/ReviewList/ReviewList';
import './App.css';
import TopBar from './components/Rating/Rating';
import RatingModal from './components/Modals/RatingModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/:userId" element={<ReviewList />} />
          <Route path="/Listing" element={<ListingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
