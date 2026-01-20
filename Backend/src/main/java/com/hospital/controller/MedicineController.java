package com.hospital.controller;

import com.hospital.entity.doclogin.Medicine;
import com.hospital.service.MedicineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {

    private final MedicineService medicineService;

    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }

    @PostMapping("/insert")
    public ResponseEntity<Medicine> addMedicine(@RequestBody Medicine medicine){
        return ResponseEntity.ok(medicineService.addMedicine(medicine));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Medicine>> getAllMedicines(){
        return ResponseEntity.ok(medicineService.getAllMedicine());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id){
        return ResponseEntity.ok(medicineService.getMedicineById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicineById(@PathVariable Long id,@RequestBody Medicine medicine){
        return ResponseEntity.ok(medicineService.updateMedicineById(id,medicine));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteMedicineById(@PathVariable Long id){
        medicineService.deleteMedicineById(id);
        return ResponseEntity.ok("Deleted Successfully");
    }
}
