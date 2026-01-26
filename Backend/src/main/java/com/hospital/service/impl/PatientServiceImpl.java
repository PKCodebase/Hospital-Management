package com.hospital.service.impl;

import com.hospital.entity.Patient;
import com.hospital.exception.ResourceNotFound;
import com.hospital.repository.PatientRepository;
import com.hospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientServiceImpl implements PatientService {
    
    @Autowired
    private PatientRepository patientRepository;
    
    @Override
    public Patient savePatient(Patient patient) {
        patient.setId(null);
        return patientRepository.save(patient);

    }
    
    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound("Patient not found with id: " + id));
    }

    @Override
    public Patient updatePatient(Long id, Patient patients) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Patient not found with id: " + id));
        existingPatient.setName(patients.getName());
        existingPatient.setAge(patients.getAge());
        existingPatient.setBlood(patients.getBlood());
        existingPatient.setPrescription(patients.getPrescription());
        existingPatient.setDose(patients.getDose());
        existingPatient.setFees(patients.getFees());
        existingPatient.setUrgency(patients.getUrgency());
        return patientRepository.save(existingPatient);
    }

    @Override
    public void deletePatient(Long id) {

        Patient patient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Patient not found with id: " + id));

        patientRepository.delete(patient);
    }

}
