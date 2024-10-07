import React, { useState } from 'react';
import AppointmentActions from './AppointmentActions';
import AppointmentDetailsModal from './AppointmentDetailsModal';

const AppointmentItem = ({ appointment }: { appointment: any }) => {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  return (
    <div className="appointment-item">
      <h3>{appointment.clientName}</h3>
      <p>Scheduled for: {appointment.date}</p>
      <AppointmentActions appointment={appointment} />
      
      <button onClick={() => setDetailsModalOpen(true)}>View Details</button>

      {isDetailsModalOpen && (
        <AppointmentDetailsModal
          appointment={appointment}
          onClose={() => setDetailsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AppointmentItem;