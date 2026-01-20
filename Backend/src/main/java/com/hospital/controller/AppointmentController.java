package com.hospital.controller;

import com.hospital.entity.doclogin.Appointments;
import com.hospital.service.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {


    private final AppointmentService appointmentService;


    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/insert")
    public ResponseEntity<Appointments> createAppointments(@RequestBody Appointments appointments) {
        return ResponseEntity.ok(appointmentService.saveAppointments(appointments));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Appointments>> getAllAppointments(){
        return ResponseEntity.ok(appointmentService.getAllAppointments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointments> getAppointmentsById(@PathVariable Long id){
        return ResponseEntity.ok(appointmentService.getAppointmentById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointments> updateAppointmentsById(@PathVariable Long id,@RequestBody Appointments appointments){
        return ResponseEntity.ok(appointmentService.updateAppointment(id,appointments));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointments(@PathVariable Long id){
        appointmentService.deleteAppointment(id);
        return ResponseEntity.ok("Deleted Successfully");
    }

}
