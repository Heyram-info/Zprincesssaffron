import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Chatbot.css'; // Import the CSS file

const BotProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card overflow-hidden" onClick={handleClick}>
      <div className="product-image">
        <img
          src={product.img}
          alt={product.name}
          className="image-content"
        />
      </div>
      <div className="product-info overflow-hidden text-[0.5rem] uppercase tracking-widest text-center">
        <div className="product-name">{product.name}</div>
        <div className="product-overlay text-[0.65rem] tracking-widest">
          Click to Know more
        </div>
      </div>
    </div>
  );
};

export default BotProductCard;
