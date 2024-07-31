import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyList from './PropertyList';

const propertiesData = [
  { id: 1, title: 'Beautiful Beach House', price: 250, bedrooms: 3, location: 'Malibu', image: '/images/property1.jpg' },
  { id: 2, title: 'Cozy Mountain Cabin', price: 150, bedrooms: 2, location: 'Aspen', image: '/images/property2.jpg' },
  { id: 3, title: 'Sunset Villa', price: 350, bedrooms: 4, location: 'Miami', image: '/images/property3.jpg' },
  { id: 4, title: 'Mountain Escape Chalet', price: 275, bedrooms: 3, location: 'Colorado', image: '/images/property4.jpg' },
  { id: 5, title: 'Urban Loft Retreat', price: 400, bedrooms: 2, location: 'New York City', image: '/images/property5.jpg' },
  { id: 6, title: 'Desert Oasis', price: 350, bedrooms: 4, location: 'Sedona', image: '/images/property6.jpg' },
  { id: 7, title: 'Lakeview Cabin', price: 300, bedrooms: 3, location: 'Lake Tahoe', image: '/images/property7.jpg' },
];

function Home() {
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');

  const filteredProperties = propertiesData.filter(property => {
    return (
      (locationFilter === '' || property.location === locationFilter) &&
      (priceFilter === '' || property.price <= parseInt(priceFilter)) &&
      (bedroomsFilter === '' || property.bedrooms === parseInt(bedroomsFilter))
    );
  });

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <h1>Property Listings</h1>
      <div className="filters">
        <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Malibu">Malibu</option>
          <option value="Aspen">Aspen</option>
          <option value="Miami">Miami</option>
          <option value="Colorado">Colorado</option>
          <option value="New York City">New York City</option>
          <option value="Sedona">Sedona</option>
          <option value="Lake Tahoe">Lake Tahoe</option>
          {/* Add more locations as needed */}
        </select>
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">All Prices</option>
          <option value="200">Up to $200</option>
          <option value="300">Up to $300</option>
          <option value="400">Up to $400</option>
          {/* Add more price ranges as needed */}
        </select>
        <select value={bedroomsFilter} onChange={(e) => setBedroomsFilter(e.target.value)}>
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
          {/* Add more bedroom options as needed */}
        </select>
      </div>
      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default Home;
