package com.hospital.service;

import com.hospital.entity.doclogin.Medicine;

import java.util.List;

public interface MedicineService {

    Medicine addMedicine (Medicine medicine);

    List<Medicine> getAllMedicine();

    Medicine getMedicineById(Long id);

    Medicine updateMedicineById(Long id,Medicine medicine);

    void deleteMedicineById(Long id);

}
