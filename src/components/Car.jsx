/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Link } from 'react-router-dom';

const Car = ({
  id, name, model, image_url,
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
      </div>
    </div>
  </Link>
);

export default Car;
