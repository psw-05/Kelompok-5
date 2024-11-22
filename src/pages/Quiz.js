import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const mockFeatured = [
      {
        id: 5,
        name: 'Latihan Soal',
        description: 'Pahami Beberapa Bagian Dari Soal',
        image: 'https://i.pinimg.com/564x/51/05/b5/5105b58a62d7ae9fb99e288e83625365.jpg',
      },
      {
        id: 6,
        name: 'Try-Out',
        description: 'Uji Pemahaman Anda',
        image: 'https://i.pinimg.com/564x/98/54/78/985478d23ce8bf017cc05406c0c9fa7a.jpg',
      },
    ];

    setFeatured(mockFeatured);
  }, []);

  return (
    <div className="featured-section">
        <div className="container">
          <h2>Uji Kompetensi Anda</h2>
          <div className="featured-grid">
            {featured.map((item) => (
              <div key={item.id} className="featured-card">
                <div className="featured-image">
                  <img src={item.image} alt={item.name} />
                  <div className="featured-rating">
                    <span>⭐ {item.rating}</span>
                  </div>
                </div>
                <div className="featured-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button className="explore-btn">Jelajahi</button>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;