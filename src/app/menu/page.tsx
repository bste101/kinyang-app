"use client";
import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface MenuItem {
  name: string;
  ingredient: string;
  calorie: number;
  howToCookLink: string;
}

const initialMenuItems: MenuItem[] = [
  { name: 'Somtum', ingredient: 'Somtum', calorie: 300, howToCookLink: "https://youtu.be/BHNjqQddozI?si=fftkGC_iGI0pRs_2" },
  { name: 'Tomyumkung', ingredient: 'Somtum', calorie: 600, howToCookLink: "https://youtu.be/HB51K_cIkD4?si=zDjf4BP_1uYyhvql" },
  { name: 'Steak', ingredient: 'Somtum', calorie: 460, howToCookLink: "https://youtu.be/NqxrR_Abbuk?si=9wueh6SqiLeq_mmr" },
];

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Your Menu List</h1>
      
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg mb-6">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="p-3 text-left">Menu</th>
            <th className="p-3 text-left">Ingredient</th>
            <th className="p-3 text-left">Calorie</th>
            <th className="p-3 text-left">How to cook</th>
            <th className="p-3 text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.ingredient}</td>
              <td className="p-3">{item.calorie}</td>
              <td className="p-3">
                <a href={item.howToCookLink} className="text-blue-500 hover:underline ">
                {item.name}
                </a>
              </td>
              <td className="p-3">
                <button className="mr-2 text-blue-500 hover:text-blue-700">
                  <Edit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Add
      </button>
    </div>
  );
};

export default Menu;