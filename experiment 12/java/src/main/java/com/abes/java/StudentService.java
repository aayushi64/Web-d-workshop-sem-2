package com.abes.java;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    private final List<Student> students = new ArrayList<>();

    public StudentService() {
        students.add(new Student(1, "Aayushi Sharma", "aayushi@gmail.com", "CSE"));
        students.add(new Student(2, "Aditi Chaudhary", "aditi@gmail.com", "CSE"));
        students.add(new Student(3, "Pihu Sharma", "pihu@gmail.com", "CSE"));
    }

    public List<Student> getAllStudents() {
        return students;
    }

    public Student getById(int id) {
        return students.stream()
                .filter(s -> s.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public Student add(Student student) {
        students.add(student);
        return student;
    }

    public Student update(int id, Student updated) {
        for (Student s : students) {
            if (s.getId() == id) {
                s.setName(updated.getName());
                s.setEmail(updated.getEmail());
                s.setCourse(updated.getCourse());
                return s;
            }
        }
        return null;
    }

    public boolean delete(int id) {
        return students.removeIf(s -> s.getId() == id);
    }
}