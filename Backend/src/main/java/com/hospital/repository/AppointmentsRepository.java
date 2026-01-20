package com.hospital.repository;

import com.hospital.entity.doclogin.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentsRepository extends JpaRepository<Appointments,Long> {
}
