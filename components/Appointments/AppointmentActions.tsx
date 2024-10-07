import React, { useState } from 'react';
import { db } from '@/api/firebase'; // Firebase Firestore setup
import { doc, updateDoc } from 'firebase/firestore';
import RescheduleModal from './RescheduleModal'; // Reschedule modal

const AppointmentActions = ({ appointment }: { appointment: any }) => {
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  // Accept an appointment
  const acceptAppointment = async () => {
    const appointmentRef = doc(db, 'appointments', appointment.id);
    await updateDoc(appointmentRef, {
      status: 'accepted',
    });
  };

  // Cancel an appointment
  const cancelAppointment = async () => {
    const appointmentRef = doc(db, 'appointments', appointment.id);
    await updateDoc(appointmentRef, {
      status: 'cancelled',
    });
  };

  return (
    <div className="appointment-actions">
      <button onClick={acceptAppointment} disabled={appointment.status !== 'pending'}>
        Accept
      </button>
      <button onClick={() => setIsRescheduleOpen(true)}>Reschedule</button>
      <button onClick={cancelAppointment}>Cancel</button>

      {isRescheduleOpen && (
        <RescheduleModal
          appointment={appointment}
          onClose={() => setIsRescheduleOpen(false)}
        />
      )}
    </div>
  );
};
export default AppointmentActions;