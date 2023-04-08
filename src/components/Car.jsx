/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Link } from 'react-router-dom';

const Car = ({
  id, name, model, image_url, description,
}) => (
  <Link id={id} to={`cars/${id}`}>
    <div className="car-card">
      <img src={image_url} alt={name} />
      <div className="descript">
        <p>
          {name}
        </p>
        <div className="model">
          {model}
        </div>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

export default Car;
