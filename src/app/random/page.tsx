"use client";
import React, { useState } from "react";

interface FoodItem {
  id: number;
  imageUrl: string;
  name: string;
}

const initialFoodItems: FoodItem[] = [
  { id: 1, imageUrl: "/api/placeholder/280/350", name: "Pizza" },
  { id: 2, imageUrl: "/api/placeholder/280/350", name: "Sushi" },
  { id: 3, imageUrl: "/api/placeholder/280/350", name: "Burger" },
  { id: 4, imageUrl: "/api/placeholder/280/350", name: "Salad" },
  { id: 5, imageUrl: "/api/placeholder/280/350", name: "Pasta" },
  { id: 6, imageUrl: "/api/placeholder/280/350", name: "Steak" },
  { id: 7, imageUrl: "/api/placeholder/280/350", name: "Tacos" },
  { id: 8, imageUrl: "/api/placeholder/280/350", name: "Ice Cream" },
];

const FoodRandom: React.FC = () => {
  const [foodItems, setFoodItems] = useState(initialFoodItems);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState<FoodItem | null>(null);

  const shuffleArray = (array: FoodItem[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getRandomColor = () => {
    const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6A0572", "#1A535C"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleRandomize = () => {
    if (isRandomizing) return;

    setIsRandomizing(true);
    let shuffleCount = 0;
    const maxShuffles = 20;
    const interval = setInterval(() => {
      setFoodItems(shuffleArray(foodItems));
      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(interval);
        setHighlightedItem(foodItems[Math.floor(foodItems.length / 2)]); // สุ่มที่ตำแหน่งตรงกลาง
        setIsRandomizing(false);
      }
    }, 100);
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-2xl font-bold">Food Gallery</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex space-x-4 p-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 ${
                highlightedItem?.id === item.id ? "glow-effect" : ""
              }`}
              style={
                highlightedItem?.id === item.id
                  ? { boxShadow: `0px 0px 20px 5px ${getRandomColor()}` }
                  : {}
              }
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-[280px] h-[480px] object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-center font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ปุ่มสุ่มอาหารพร้อมลูกศร */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleRandomize}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center ${
            isRandomizing ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isRandomizing}
        >
          {isRandomizing ? (
            <>
              <span className="mr-2">Randomizing...</span>
            </>
          ) : (
            <>
              <span className="mr-2">Random</span>
              <img src="/path/to/arrow-icon.png" alt="arrow" className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FoodRandom;
