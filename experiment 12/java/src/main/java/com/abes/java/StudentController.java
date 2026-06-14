package com.abes.java;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService service;

    // GET ALL
    @GetMapping
    public List<Student> getAll() {
        return service.getAllStudents();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable int id) {
        Student student = service.getById(id);

        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    // CREATE
    @PostMapping
    public ResponseEntity<Student> add(@RequestBody Student student) {
        return new ResponseEntity<>(service.add(student), HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable int id,
                                         @RequestBody Student student) {

        Student updated = service.update(id, student);

        if (updated == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {

        boolean deleted = service.delete(id);

        if (!deleted) {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);
    }
}