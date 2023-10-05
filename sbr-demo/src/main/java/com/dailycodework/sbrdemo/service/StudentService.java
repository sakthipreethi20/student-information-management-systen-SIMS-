package com.dailycodework.sbrdemo.service;

import com.dailycodework.sbrdemo.exception.StudentAlreadyExistsException;

import com.dailycodework.sbrdemo.exception.StudentAlreadyExistsException;
import com.dailycodework.sbrdemo.exception.StudentNotFoundException;
import com.dailycodework.sbrdemo.model.student;
import com.dailycodework.sbrdemo.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@SuppressWarnings("unused")
@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService{
    private  final StudentRepository studentRepository;

    @Autowired 
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

	@Override
	public List<student> getstudent() {
		 return studentRepository.findAll();
		
	}
	@Override
	public student updatestudent(student student, Long id) {
		 return studentRepository.findById(id).map(st -> {
	            st.setFirstName(student.getFirstName());
	            st.setLastName(student.getLastName());
	            st.setEmail(student.getEmail());
	            st.setDepartment(student.getDepartment());
	            return studentRepository.save(st);
	        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found"));
	}
	@Override	
	public student getstudentById(Long Id) {
        return studentRepository.findById(Id)
                .orElseThrow(() -> new StudentNotFoundException("Sorry, no student found with the Id :" +Id));
	}
	@Override
	public void deletestudent(Long Id) {
		 if (!studentRepository.existsById(Id)){
	            throw new StudentNotFoundException("Sorry, student not found");
	        }
	        studentRepository.deleteById(Id);
	    }
	    private boolean studentAlreadyExists(String email) {
	        return studentRepository.findByEmail(email).isPresent();
	}
		
		@Override
		public student addstudent(student student) {
			if (studentAlreadyExists(student.getEmail())) {
				throw new StudentAlreadyExistsException(student.getEmail()+"already exists!");
			}
			return studentRepository.save(student);
		}

		
}
