import React, { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import Button from "../button";
import { Link } from "react-router-dom";

function Category({ data, className }) {
  const [dataBlock] = useState({
    title: "Browse by Issues",
    text: "Choose the category and get help",
  });

  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title">
              <div className="group-title">
                <h1>{dataBlock.title}</h1>
                <p>{dataBlock.text}</p>
              </div>
              <Button title="All Issues" link="/search?pageNumber=1" />
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="group-category-job wow fadeInUp"
              data-wow-delay=".2s"
            >
              {data.map((idx) => (
                <div
                  key={idx.id}
                  className={`job-category-box ${idx.active}`}
                >
                  <div className="job-category-header">
                    <h1>
                      <Link
                        to={`/search?keyword=${idx.title}&pageNumber=1`}
                      >
                        {idx.title}
                      </Link>
                    </h1>
                    <p>{idx.unit}</p>
                  </div>
                  <Link
                    to={`/search?keyword=${idx.title}&pageNumber=1`}
                    className="btn-category-job"
                  >
                    Know More{" "}
                    <span className="icon-keyboard_arrow_right"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add prop type validation
Category.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Category;
