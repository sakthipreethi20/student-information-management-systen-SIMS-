package com.dailycodework.sbrdemo.exception;

@SuppressWarnings("serial")
public class StudentNotFoundException extends RuntimeException{
public StudentNotFoundException(String message) {
	super(message);
}
}
