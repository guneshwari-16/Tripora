import React, { useState, useEffect } from "react";
import "../styles/TripResult.css";
import travelData from "../assets/data/travelData.js";
import { getWeather } from "../services/weatherService";

// Helper function to resolve images from src/assets/destinations/
const getDestinationImage = (fileName) => {
  if (!fileName) return "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";
  try {
    return new URL(`../assets/destinations/${fileName}`, import.meta.url).href;
  } catch (err) {
    return "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";
  }
};

export default function TripResult({ destination = "goa" }) {
  const [weather, setWeather] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Normalize destination name key (e.g., "Goa" -> "goa")
  const cityKey = destination ? destination.toLowerCase().trim() : "goa";
  const trip = travelData[cityKey];

  useEffect(() => {
    let isMounted = true;
    if (typeof getWeather === "function") {
      getWeather(destination)
        .then((res) => {
          if (isMounted) setWeather(res);
        })
        .catch((err) => console.error("Weather service error:", err));
    }
    return () => {
      isMounted = false;
    };
  }, [destination]);

  if (!trip) {
    return (
      <div className="trip-container error-state">
        <h2>Destination not found</h2>
        <p>No travel guide available for "{destination}".</p>
      </div>
    );
  }

  return (
    <div className="trip-wrapper">
      {/* Hero Banner */}
      <div className="trip-hero">
        <img
          src={getDestinationImage(trip.image)}
          alt={destination}
          className="trip-hero-img"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80";
          }}
        />
        <div className="trip-hero-overlay">
          <div className="hero-content">
            <span className="badge">Featured Travel Plan</span>
            <h1>{destination.toUpperCase()}</h1>
            <p className="hero-season">
              📅 <strong>Best Season:</strong> {trip.bestTime.season} ({trip.bestTime.temperature})
            </p>
          </div>
          {weather && (
            <div className="hero-weather-card">
              <span className="weather-temp">{weather.temp || weather.temperature || "28"}°C</span>
              <span className="weather-desc">{weather.condition || weather.description || "Clear Sky"}</span>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="trip-nav">
        {["overview", "attractions", "hotels", "restaurants", "essentials"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="trip-body">
        {/* 1. OVERVIEW */}
        {activeTab === "overview" && (
          <div className="tab-content grid-2col">
            <div className="card">
              <h3>Top Activities</h3>
              <ul className="activity-list">
                {trip.activities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Gallery</h3>
              <div className="gallery-grid">
                {trip.gallery.map((galleryItem, idx) => (
                  <div key={idx} className="gallery-card">
                    <img
                      src={getDestinationImage(galleryItem.image)}
                      alt={galleryItem.title}
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <span>{galleryItem.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. ATTRACTIONS */}
        {activeTab === "attractions" && (
          <div className="tab-content card-grid">
            {trip.attractions.map((place, idx) => (
              <div key={idx} className="card item-card">
                <div>
                  <div className="item-header">
                    <h4>{place.name}</h4>
                    <span className="rating">{place.rating}</span>
                  </div>
                  <p className="desc">{place.description}</p>
                </div>
                <div className="item-meta">
                  <span>🎟️ <strong>Entry:</strong> {place.entryFee}</span>
                  <span>⏰ <strong>Timing:</strong> {place.timing}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. HOTELS */}
        {activeTab === "hotels" && (
          <div className="tab-content card-grid">
            {trip.hotels.map((hotel, idx) => (
              <div key={idx} className="card item-card">
                <div>
                  <div className="item-header">
                    <h4>{hotel.name}</h4>
                    <span className="rating">{hotel.rating}</span>
                  </div>
                  <div className="price-tag">{hotel.price}</div>
                </div>
                <p className="amenities">✨ {hotel.amenities}</p>
              </div>
            ))}
          </div>
        )}

        {/* 4. RESTAURANTS */}
        {activeTab === "restaurants" && (
          <div className="tab-content card-grid">
            {trip.restaurants.map((rest, idx) => (
              <div key={idx} className="card item-card">
                <div>
                  <div className="item-header">
                    <h4>{rest.name}</h4>
                    <span className="rating">{rest.rating}</span>
                  </div>
                  <p className="cuisine">🍽️ {rest.cuisine}</p>
                </div>
                <div className="item-meta">
                  <span>📍 {rest.location}</span>
                  <span>💰 {rest.cost}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. ESSENTIALS */}
        {activeTab === "essentials" && (
          <div className="tab-content grid-3col">
            <div className="card">
              <h3>🎒 Packing List</h3>
              <ul className="check-list">
                {trip.packing.map((p, idx) => (
                  <li key={idx}>✓ {p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>💡 Useful Tips</h3>
              <ul className="check-list">
                {trip.tips.map((t, idx) => (
                  <li key={idx}>• {t}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>🚕 Transportation</h3>
              <ul className="check-list">
                {trip.transport.map((tr, idx) => (
                  <li key={idx}>→ {tr}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}