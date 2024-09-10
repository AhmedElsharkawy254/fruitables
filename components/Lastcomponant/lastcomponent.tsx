import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import TestimonialImage1 from '../public/clint.jpg'; // Import your images
import TestimonialImage2 from '../public/clint.jpg'; // Add more images as needed

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Client Name 1',
    profession: 'Profession 1',
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: TestimonialImage1,
    rating: 5,
  },
  {
    id: 2,
    name: 'Client Name 2',
    profession: 'Profession 2',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgSrc: TestimonialImage2,
    rating: 4,
  },
  {
    id: 3,
    name: 'Client Name 3',
    profession: 'Profession 3',
    message: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgSrc: TestimonialImage1,
    rating: 5,
  },
  {
    id: 4,
    name: 'Client Name 4',
    profession: 'Profession 4',
    message: "It has survived not only five centuries, but also the leap into electronic typesetting.",
    imgSrc: TestimonialImage2,
    rating: 4,
  },
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="d-flex">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`me-1 ${i < rating ? 'text-primary' : 'text-muted'}`} />
      ))}
    </div>
  );
};

// Main Testimonial Component
const TestimonialComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          {/* Left Button */}
          <button onClick={handlePrev} className="btn btn-secondary mx-2">
            <i className="bi bi-arrow-left"></i>
          </button>

          {/* Display Two Testimonial Cards */}
          <div className="row">
            {testimonials.slice(activeIndex, activeIndex + 2).map((testimonial) => (
              <div className="col-md-6" key={testimonial.id}>
                <div className="testimonial-item img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <FaQuoteRight className="fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: '0' }} />
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">{testimonial.message}</p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <Image
                          src={testimonial.imgSrc}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">{testimonial.name}</h4>
                        <p className="m-0 pb-3">{testimonial.profession}</p>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button onClick={handleNext} className="btn btn-secondary mx-2">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
