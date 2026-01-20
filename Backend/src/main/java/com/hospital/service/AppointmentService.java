package com.hospital.service;

import com.hospital.entity.doclogin.Appointments;

import java.util.List;

public interface AppointmentService {

    Appointments saveAppointments(Appointments appointments);

    List<Appointments> getAllAppointments();

    Appointments getAppointmentById(Long id);

    Appointments updateAppointment(Long id, Appointments appointments);

    void deleteAppointment(Long id);


}
