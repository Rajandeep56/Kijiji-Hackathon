import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Rating.scss";
import Card from "../Card/Card";
import backArrow from "../../assets/icons/backArrow.png";
import goldBadge from "../../assets/badges/goldBadge.png";
import silverBadge from "../../assets/badges/silverBadge.png";
import bronzeBadge from "../../assets/badges/bronzeBadge.png";

const TopBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = 1002;
    axios.get(`http://localhost:8000/contact/${userId}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  if (!userData) {
    return null; 
  }
console.log(userData)
  const { credits, userName, reviewSummary,avgReply,replyRate } = userData;
  const badgeCircle = userName.charAt(0).toUpperCase();

  const pointsAway = 50 - credits;
  let badgeImage;
  if (credits < 10) {
    badgeImage = null;
  } else if (credits >= 10 && credits < 30) {
    badgeImage = <img src={bronzeBadge} alt="bronze badge" className="bronze-badge" />;
  } else if (credits >= 30 && credits <= 40) {
    badgeImage = <img src={silverBadge} alt="silver badge" className="silver-badge" />;
  }
  else if (credits >= 30 && credits <= 40) {
    badgeImage = <img src={goldBadge} alt="gold badge" className="gold-badge" />;
  }
  return (
    <Card>
      <div className="top-bar">
        <div className="top-bar__content">
          <div className="top-bar__badge-circle">{badgeCircle}</div>
          <div className="top-bar__notification">
            Level up to Golden Badge just {pointsAway} points away!
          </div>
          <img src={goldBadge} alt="gold badge" className="gold-badge" />
          {badgeImage}
          <div className="top-bar__user-name">{userName}</div>
          <div className="top-bar__user-rating">
            {reviewSummary.summary.sumScore}{' '}
            <span className="top-bar__star-rating">★★★★★</span>{' '}
            <span className="top-bar__star-rating-number">
              ({reviewSummary.summary.totalReviews} reviews)
            </span>
          </div>
          <div className="top-bar__user-stats">
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value">
                <img src={backArrow} alt="less than" className="back-arrow" />
                {avgReply}
              </div>
              <div className="top-bar__user-stat-description">avg reply</div>
            </div>
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value">
                <img src={backArrow} alt="less than" />
                {replyRate}
              </div>
              <div className="top-bar__user-stat-description">reply rate</div>
            </div>
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value">5 yrs</div>
              <div className="top-bar__user-stat-description">on Kijiji</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopBar;
