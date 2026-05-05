import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DateSelector from './components/DateSelector';
import MembershipCarousel from './components/MembershipCarousel';
import Section from './components/Section';
import FoodItemRow from './components/FoodItemRow';
import ComboCard from './components/ComboCard';
import { categories, dateList, mockMemberships, mockFoodTickets, mockComboTickets } from './data/mockData';

const Screen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeDate, setActiveDate] = useState(16);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white">
        <Header />
        <Tabs categories={categories} activeTab={activeTab} onTabChange={setActiveTab} />
        <DateSelector dateList={dateList} activeDate={activeDate} onDateChange={setActiveDate} />
      
      {/* Membership Section */}
      {activeTab === 'All' || activeTab === 'Membership' && (
        <MembershipCarousel memberships={mockMemberships} />
      )}

      {/* Food Tickets Section */}
      {(activeTab === 'All' || activeTab === 'Food Tickets') && (
        <Section title="Breakfast">
          <div className="bg-white">
            {mockFoodTickets.slice(0, 2).map((item) => (
              <FoodItemRow key={item.id} item={item} />
            ))}
          </div>
        </Section>
      )}

      {(activeTab === 'All' || activeTab === 'Food Tickets') && (
        <Section title="Lunch">
          <div className="bg-white">
            {mockFoodTickets.slice(2).map((item) => (
              <FoodItemRow key={item.id} item={item} />
            ))}
          </div>
        </Section>
      )}

      {/* Combo Tickets Section */}
      {(activeTab === 'All' || activeTab === 'Combo Tickets') && (
        <Section title="Combo Deals">
          <div className="p-4 grid grid-cols-2 gap-4">
            {mockComboTickets.map((item) => (
              <ComboCard key={item.id} item={item} />
            ))}
          </div>
        </Section>
      )}
      </div>
    </div>
  );
};

export default Screen;