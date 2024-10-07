"use client"

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { db } from '@/api/firebase'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AvailabilitySettings = () => {
  const [availableStartTime, setAvailableStartTime] = useState('09:00');
  const [availableEndTime, setAvailableEndTime] = useState('17:00');    
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);        
  const [selectedBlockedDate, setSelectedBlockedDate] = useState<Date | null>(null);
  
  const companyId = 'company123'; // Replace with actual company ID (could be from auth context)
  const availabilityDocRef = doc(db, 'companies', companyId, 'availability', 'settings'); // Reference to the company's availability data in Firestore

  // Fetch availability data from Firestore on component mount
  useEffect(() => {
    const fetchAvailability = async () => {
      const availabilityDoc = await getDoc(availabilityDocRef);
      if (availabilityDoc.exists()) {
        const data = availabilityDoc.data();
        setAvailableStartTime(data.availableStartTime || '09:00');
        setAvailableEndTime(data.availableEndTime || '17:00');
        setBlockedDates(data.blockedDates.map((timestamp: any) => new Date(timestamp)) || []);
      }
    };
    fetchAvailability();
  }, []);

  // Function to handle blocking specific dates
  const handleBlockDate = () => {
    if (selectedBlockedDate && !blockedDates.includes(selectedBlockedDate)) {
      setBlockedDates([...blockedDates, selectedBlockedDate]);
    }
  };

  // Function to remove blocked date
  const handleRemoveBlockedDate = (dateToRemove: Date) => {
    setBlockedDates(blockedDates.filter(date => date !== dateToRemove));
  };

  // Function to handle saving availability
  const handleSaveAvailability = async () => {
    const availabilityData = {
      availableStartTime,
      availableEndTime,
      blockedDates: blockedDates.map(date => date.getTime()), 
    };
    try {
      await setDoc(availabilityDocRef, availabilityData);
      alert('Availability settings saved successfully.');
    } catch (error) {
      console.error('Error saving availability:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Set Your Availability</h2>
      
      {/* Time Picker for Available Times */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Available Start Time:</label>
        <TimePicker
          value={availableStartTime}
          onChange={(value) =>setAvailableStartTime(value as string)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">Available End Time:</label>
        <TimePicker
          value={availableEndTime}
          onChange={(value) =>setAvailableEndTime(value as string)}
          className="w-full"
        />
      </div>

      {/* Date Picker for Blocking Dates */}
      <div className="mb-4">
        <label className="block text-sm mb-2">Block Specific Date (Holidays, Days Off):</label>
        <DatePicker
          selected={selectedBlockedDate}
          onChange={(date: Date) => setSelectedBlockedDate(date)}
          className="w-full"
          placeholderText="Select a date to block"
        />
        <button
          onClick={handleBlockDate}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Block Date
        </button>
      </div>

      {/* Display Blocked Dates */}
      {blockedDates.length > 0 && (
        <div className="mb-4">
          <h3 className="text-md font-semibold">Blocked Dates:</h3>
          <ul className="list-disc ml-5 mt-2">
            {blockedDates.map((date, index) => (
              <li key={index} className="flex justify-between items-center">
                {date.toDateString()}
                <button
                  onClick={() => handleRemoveBlockedDate(date)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={handleSaveAvailability}
        className="mt-4 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save Availability
      </button>
    </div>
  );
};
export default AvailabilitySettings;