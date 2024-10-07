import React from 'react';

const AppointmentDetailsModal = ({
  appointment,
  onClose,
}: {
  appointment: any;
  onClose: () => void;
}) => {
  return (
    <div className="modal">
      <h2>Appointment Details</h2>
      <p>Client Name: {appointment.clientName}</p>
      <p>Email: {appointment.clientEmail}</p>
      <p>Date: {appointment.date}</p>
      <p>Status: {appointment.status}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AppointmentDetailsModal;