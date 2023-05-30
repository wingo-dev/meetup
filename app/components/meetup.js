import "./meetup.css";

const MeetUp = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.content}</p>
      </div>
    </div>
  );
};

export default MeetUp;
