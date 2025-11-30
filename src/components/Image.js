import React, { useState } from 'react';
import cityImage from '../city.jpg'; // Переконайтесь, що файл є в папці src або в public

function Image() {
  // Стан для ширини та видимості зображення
  const [width, setWidth] = useState(500);
  const [isVisible, setIsVisible] = useState(true);

  const addImage = () => {
    setIsVisible(true);
    setWidth(500);
  };

  const increaseSize = () => {
    if (isVisible) setWidth(prev => prev + 50);
  };

  const decreaseSize = () => {
    if (isVisible && width > 50) setWidth(prev => prev - 50);
  };

  const removeImage = () => {
    setIsVisible(false);
  };

  return (
    <div className="image-section">
      {isVisible && (
        <figure>
          <a href="https://www.rome.info" target="_blank" rel="noopener noreferrer">
            <img src={cityImage} alt="Фото Риму" width={width} />
          </a>
        </figure>
      )}

      <div className="image-buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;