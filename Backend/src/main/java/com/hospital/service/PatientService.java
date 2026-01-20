package com.hospital.service;

import com.hospital.entity.Patient;
import java.util.List;
import java.util.Optional;

public interface PatientService {

    Patient savePatient(Patient patient);
    List<Patient> getAllPatients();
    Patient getPatientById(Long id);
    Patient updatePatient(Long id, Patient patient);
    void deletePatient(Long id);
}
