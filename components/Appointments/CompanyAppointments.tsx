import React, { useState, useEffect } from 'react';
import { db } from '@/api/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import AppointmentItem from './AppointmentItem';

const CompanyAppointments = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const q = query(
        collection(db, 'appointments'),
        where('companyId', '==', 'company-specific-id') // Filter by company
      );

      const querySnapshot = await getDocs(q);
      const fetchedAppointments: any[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAppointments.push({ id: doc.id, ...doc.data() });
      });
      setAppointments(fetchedAppointments);
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Manage Appointments</h2>
      {appointments.length > 0 ? (
        <div className="appointment-list">
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      ) : (
        <p className='text-center'>No appointments available.</p>
      )}
    </div>
  );
};
export default CompanyAppointments;