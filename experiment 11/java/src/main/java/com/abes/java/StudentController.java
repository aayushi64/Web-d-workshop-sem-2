package com.abes.java;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class StudentController {
    private Student student;

    // 1. Welcome Message Endpoint
    @GetMapping
    public String welcomeMessage() {
        return "Welcome to Student Management REST API";
    }

    // 2. GET Student Endpoint
    @GetMapping("/student")
    public ResponseEntity<Student> getStudent() {
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    // 3. POST Student Endpoint
    @PostMapping("/student")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        this.student = student;
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }
}
