import React, { useState } from 'react';
import { db } from '@/api/firebase'; // Firebase Firestore setup
import { doc, updateDoc } from 'firebase/firestore';

const RescheduleModal = ({
  appointment,
  onClose,
}: {
  appointment: any;
  onClose: () => void;
}) => {
  const [newDate, setNewDate] = useState('');

  const handleReschedule = async () => {
    const appointmentRef = doc(db, 'appointments', appointment.id);
    await updateDoc(appointmentRef, {
      date: newDate,
      status: 'rescheduled',
    });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Reschedule Appointment</h2>
      <label htmlFor="newDate">New Date</label>
      <input
        type="datetime-local"
        id="newDate"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <button onClick={handleReschedule}>Reschedule</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};
export default RescheduleModal;