import React from 'react';
import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import expData from './data';

function App() {
  const cards = expData.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      description={card.description}
      price={card.price}
      coverImg={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      openSpots={card.openSpots}
    />
  ));

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
