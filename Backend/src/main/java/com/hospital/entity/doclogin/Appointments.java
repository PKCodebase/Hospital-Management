package com.hospital.entity.doclogin;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "appointments", schema = "hospital")
public class Appointments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    @Column(nullable = false, length = 100)
    private String name;

    @NotBlank(message = "Age is required")
    @Pattern(regexp = "^[0-9]{1,3}$", message = "Age must be a valid number between 1-999")
    @Column(nullable = false, length = 3)
    private String age;

    @NotBlank(message = "Symptoms are required")
    @Size(max = 500, message = "Symptoms cannot exceed 500 characters")
    @Column(nullable = false, length = 500)
    private String symtomps;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be exactly 10 digits")
    @Column(nullable = false, length = 10)
    private String number;

    public Appointments(String name, String age, String symtomps, String number) {
        this.name = name;
        this.age = age;
        this.symtomps = symtomps;
        this.number = number;
    }

    public Appointments() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSymtomps() {
        return symtomps;
    }

    public void setSymtomps(String symtomps) {
        this.symtomps = symtomps;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
