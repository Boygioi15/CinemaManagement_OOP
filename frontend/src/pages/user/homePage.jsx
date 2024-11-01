import { memo } from "react";
import "./homePage.css";
import FilmCard from "../../component/filmCard/filmCard";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="child-container  banner-container">Banner</div>
        <div className="child-container  quickBook-container">Quick book tickets</div>
        <div>
          <div className="child-container  movie-showing-container">
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          <FilmCard/>
          </div>
          <div className="child-container  upcoming-movie-container">Upcoming movie</div>
        </div>
        <div className="child-container  promotion-container">Promotion</div>
        <div className="child-container  membership-container">Membership program</div>
        <div className="child-container  contact-container">Contact</div>
      </div>
    </>
  );
};

export default memo(HomePage);
