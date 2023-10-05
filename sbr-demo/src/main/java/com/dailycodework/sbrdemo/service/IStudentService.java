package com.dailycodework.sbrdemo.service;

import java.util.List;

import com.dailycodework.sbrdemo.model.student;

public interface IStudentService {

List<student> getstudent();
student updatestudent(student student,Long id);
student getstudentById(Long Id);
void deletestudent(Long Id);

student addstudent(student student);

}