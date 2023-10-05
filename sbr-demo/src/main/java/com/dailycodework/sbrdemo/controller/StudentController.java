package com.dailycodework.sbrdemo.controller;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dailycodework.sbrdemo.model.student;
import com.dailycodework.sbrdemo.service.IStudentService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class StudentController {
    private  final IStudentService studentService; 
    
    public StudentController(IStudentService studentService) {
        this.studentService = studentService;
    }
    
@GetMapping
public ResponseEntity<List<student>> getStudent(){
	return new ResponseEntity<>(studentService.getstudent(),HttpStatus.FOUND);
	
}
 @PostMapping
public student addStudent(@RequestBody student student) {
	return studentService.addstudent(student);
	
}
 @PutMapping("/update/{id}")
public student updateStudent(@RequestBody student student,@PathVariable Long id) {
	return studentService.updatestudent(student, id);
}
 @DeleteMapping("/delete/{id}")
 public void deleteStudent(@PathVariable Long id) {
	 studentService.deletestudent(id);
 }
 @GetMapping("/Student/{id}")
 public student getStudentById(@PathVariable Long id) {
	 return studentService.getstudentById(id);
 }
}
