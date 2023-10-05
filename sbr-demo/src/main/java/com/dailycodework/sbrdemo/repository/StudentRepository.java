package com.dailycodework.sbrdemo.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dailycodework.sbrdemo.model.student;

public interface StudentRepository extends JpaRepository<student,Long>{

	Optional<student> findByEmail(String email);
	
}
