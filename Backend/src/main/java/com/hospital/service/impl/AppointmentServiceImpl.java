package com.hospital.service.impl;

import com.hospital.entity.doclogin.Appointments;
import com.hospital.exception.ResourceNotFound;
import com.hospital.repository.AppointmentsRepository;
import com.hospital.service.AppointmentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private  final AppointmentsRepository appointmentsRepository;

    public AppointmentServiceImpl(AppointmentsRepository appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }


    @Override
    public Appointments saveAppointments(Appointments appointments) {
        return appointmentsRepository.save(appointments);
    }

    @Override
    public List<Appointments> getAllAppointments() {
        return appointmentsRepository.findAll();
    }

    @Override
    public Appointments getAppointmentById(Long id) {
        return appointmentsRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFound("Appointments not found with id: " + id));
    }

    @Override
    public Appointments updateAppointment(Long id, Appointments appointments) {
        Appointments existingAppointments = appointmentsRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFound("Appointments not found with id : " + id));
        existingAppointments.setName(appointments.getName());
        existingAppointments.setAge(appointments.getAge());
        existingAppointments.setSymtomps(appointments.getSymtomps());
        existingAppointments.setNumber(appointments.getNumber());
        return existingAppointments;
    }

    @Override
    public void deleteAppointment(Long id) {
       Appointments appointments = appointmentsRepository.findById(id)
               .orElseThrow(()->
                       new ResourceNotFound("Appointments not found with id : " + id));
       appointmentsRepository.delete(appointments);
    }
}
