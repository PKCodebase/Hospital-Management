    package com.hospital.controller;

    import com.hospital.entity.doclogin.Appointments;
    import com.hospital.service.AppointmentService;
    import jakarta.validation.Valid;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;

    @CrossOrigin(origins = "http://localhost:4200")
    @RestController
    @RequestMapping("/api/appointments")
    public class AppointmentController {


        private final AppointmentService appointmentService;


        public AppointmentController(AppointmentService appointmentService) {
            this.appointmentService = appointmentService;
        }

        @PostMapping("/insert")
        public ResponseEntity<Appointments> createAppointments(@Valid @RequestBody Appointments appointments) {
//            appointments.setId(null);   // ✅ MOST IMPORTANT LINE
        return ResponseEntity.ok(appointmentService.saveAppointments(appointments));
        }


        @GetMapping
        public ResponseEntity<List<Appointments>> getAllAppointments(){
            return ResponseEntity.ok(appointmentService.getAllAppointments());
        }

        @GetMapping("/{id}")
        public ResponseEntity<Appointments> getAppointmentsById(@PathVariable Long id){
            return ResponseEntity.ok(appointmentService.getAppointmentById(id));
        }

        @PutMapping("/{id}")
        public ResponseEntity<Appointments> updateAppointmentsById(@PathVariable Long id,@Valid @RequestBody Appointments appointments){
            return ResponseEntity.ok(appointmentService.updateAppointment(id,appointments));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Map<String,Boolean>> deleteAppointments(@PathVariable Long id){
            appointmentService.deleteAppointment(id);
            Map<String,Boolean> response = new HashMap<String,Boolean>();
            response.put("Deleted",Boolean.TRUE);
            return ResponseEntity.ok(response);
        }

    }
