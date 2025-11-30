import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodCard';


// Оновлений масив з надійними посиланнями на картинки
const goodsData = [
  { id: 1, name: 'Creality Hyper PETG', price: 689, image: '/images/Creality_Hyper_PETG.jpg'},
  { id: 2, name: 'Creality TPU', price: 969, image: '/images/Creality_TPU.jpg' },
  { id: 3, name: 'Creality PETG', price: 645, image: '/images/Creality_PETG.jpg' },
  { id: 4, name: 'Creality PLA silky shine', price: 1165, image: '/images/PLA_silky_shine.jpg' },
  { id: 5, name: 'Creality PLA+', price: 794, image: '/images/Creality_PLA+.jpg' },
  { id: 6, name: 'Gembird ABS', price: 539, image: '/images/Gembird_ABS.jpg' },
  { id: 7, name: 'ELEGOO PETG', price: 499, image: '/images/ELEGOO_PETG.jpg'}
];

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Image />

      {/* Завдання 2: Галерея */}
      <h2 style={{marginTop: '50px', textAlign: 'center'}}>Галерея товарів</h2>
      <div className="goods-gallery">
        {goodsData.map(good => (
          <GoodsCard 
            key={good.id}
            image={good.image} 
            name={good.name} 
            price={good.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;