/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import settings from './Carousel';

const Car = ({ cars }) => (
  cars?.length <= 2
    ? (
      <div className="caroussel_row">
        {
          cars && cars?.map((car) => (
            <Link id={car.id} to={`cars/${car.id}`} key={car.id}>
              <div className="car-card">
                <img src={car.image_url} alt={car.name} />
                <div className="descript">
                  <p>
                    {car.name}
                  </p>
                  <div className="model">
                    {car.model}
                  </div>
                  <p className="description">
                    {car.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
          }
      </div>
    )

    : (
      <Slider {...settings}>
        {
              cars.map((car) => (
                <Link to={`cars/${car.id}`} key={car.id}>
                  <div className="car-card">
                    <img src={car.image_url} alt={car.name} />
                    <div>
                      <p>
                        {car.model}
                      </p>
                    </div>
                    <p className="description">
                      {car.description}
                    </p>
                  </div>
                </Link>
              ))
            }
      </Slider>
    ));

export default Car;
