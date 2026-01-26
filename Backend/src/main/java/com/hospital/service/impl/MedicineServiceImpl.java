package com.hospital.service.impl;

import com.hospital.entity.doclogin.Medicine;
import com.hospital.exception.ResourceNotFound;
import com.hospital.repository.MedicineRepository;
import com.hospital.service.MedicineService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository medicineRepository;

    public MedicineServiceImpl(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }


    @Override
    public Medicine addMedicine(Medicine medicine) {
        medicine.setId(null); // 👈 prevent id injection
        return medicineRepository.save(medicine);
    }

    @Override
    public List<Medicine> getAllMedicine() {
        return medicineRepository.findAll();
    }

    @Override
    public Medicine getMedicineById(Long id) {
        return medicineRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFound("Medicine not found with id : " + id));
    }

    @Override
    public Medicine updateMedicineById(Long id, Medicine medicine) {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound("Medicine not found with id: " + id));

        // ✅ update managed entity
        existingMedicine.setDrugName(medicine.getDrugName());
        existingMedicine.setStock(medicine.getStock());

        // no save() needed
        return existingMedicine;
    }


    @Override
    public void deleteMedicineById(Long id) {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFound("Medicine not found with id : " + id));
        medicineRepository.delete(existingMedicine);
    }
}
