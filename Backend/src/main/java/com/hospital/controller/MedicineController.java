package com.hospital.controller;

import com.hospital.entity.doclogin.Medicine;
import com.hospital.service.MedicineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping
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
    public ResponseEntity<Map<String,Boolean>> deleteMedicineById(@PathVariable Long id){
        medicineService.deleteMedicineById(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
