import React from "react";
import flower1 from "../images/flower1.png";
import flower2 from "../images/flower2.png";
import flower3 from "../images/flower3.png";
import flower4 from "../images/flower4.png";
import flower5 from "../images/flower5.jpg";

const ImageGrid = () => {
  const flowers = [flower1, flower2, flower3, flower4, flower5];

  return (
    <section className="image-collection">
      <h2 className="gallery-title">Our Collection</h2>
      <div className="image-grid">
        {flowers.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`flower-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;