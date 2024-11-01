import "./style.css";

const FilmCard = ({ title, imageUrl, description, details }) => {
  return (
    <div className="film-card">
      <img src={imageUrl} alt={title} className="film-card-image" />
      <div className="film-card-overlay">
        <h3 className="film-card-title">{title} Tên Phim</h3>
        <p>{details} Thể loại</p>
        <p>{details} Thời lượng</p>
        <p>{details} Quốc gia</p>
      </div>
      <div className="film-card-content">
        <h3 className="film-card-title">{title} 123</h3>
        <p className="film-card-description">{description} 456</p>
      </div>
    </div>
  );
};

export default FilmCard;
