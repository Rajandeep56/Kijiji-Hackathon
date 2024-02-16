import "./Rating.scss";
import Card from "../Card/Card";
import backArrow from "../../assets/icons/backArrow.png"
import goldBadge from "../../assets/badges/goldBadge.png"
import silverBadge from "../../assets/badges/silverBadge.png"

const TopBar = () => {
  const rating = 4.6;
  return (
    <Card>
      <div className="top-bar">
        <div className="top-bar__content">
          {/* Content section */}
          <div className="top-bar__badge-circle">S</div>
          <div className="top-bar__notification">
          Level up to Golden Badge just 10 points away!
        </div>
        <img src={goldBadge} alt="gold badge" className="gold-badge" />
        <img src={silverBadge} alt="silver badge" className="silver-badge" />
          <div className="top-bar__user-name">Steve</div>
          <div className="top-bar__user-rating">
            4.6 <span className="top-bar__star-rating">★★★★★</span> <span className="top-bar__star-rating-number">(26 reviews)</span>
          </div>
          <div className="top-bar__user-stats">
            {/* User stats section */}
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value"> <img src={backArrow} alt="less than" className="back-arrow"/>6 hrs</div>
              <div className="top-bar__user-stat-description">avg reply</div>
            </div>
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value"> <img src={backArrow} alt="less than" />75%</div>
              <div className="top-bar__user-stat-description">reply rate</div>
            </div>
            <div className="top-bar__user-stat">
              <div className="top-bar__user-stat-value">15 yrs</div>
              <div className="top-bar__user-stat-description">on Kijiji</div>
            </div>
          </div>
        </div>
       
      </div>
    </Card>
  );
};

export default TopBar;
