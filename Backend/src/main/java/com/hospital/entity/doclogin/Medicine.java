package com.hospital.entity.doclogin;

import jakarta.persistence.*;

@Entity
@Table(name="medicine",schema = "hospital")
public class    Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String drugName;

    @Column(name = "stocks")
    private String stock;

    public Medicine(){
        super();
    }

    public Medicine(Long id, String drugName, String stock) {
        this.id = id;
        this.drugName = drugName;
        this.stock = stock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }
}
