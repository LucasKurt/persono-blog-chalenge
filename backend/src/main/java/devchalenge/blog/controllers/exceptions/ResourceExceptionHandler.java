package devchalenge.blog.controllers.exceptions;

import java.time.Instant;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResourceExceptionHandler {
	
	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<StandardError> entityNotFoundException(EntityNotFoundException err, HttpServletRequest request) {
		Instant timestamp = Instant.now();
		Integer status = HttpStatus.NOT_FOUND.value();
		String error = err.getMessage();
		String path = request.getRequestURI();
		
		return ResponseEntity.status(status).body(new StandardError(timestamp, status, error, path));
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<StandardError> dataIntegrityViolationException(DataIntegrityViolationException err, HttpServletRequest request) {
		Instant timestamp = Instant.now();
		Integer status = HttpStatus.BAD_REQUEST.value();
		String error = err.getMessage();
		String path = request.getRequestURI();
		
		return ResponseEntity.status(status).body(new StandardError(timestamp, status, error, path));
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ValidationError> methodArgumentNotValidException(MethodArgumentNotValidException err, HttpServletRequest request) {
		Instant timestamp = Instant.now();
		Integer status = HttpStatus.UNPROCESSABLE_ENTITY.value();
		String error = "Validation error";
		String path = request.getRequestURI();
		
		ValidationError validationError = new ValidationError(timestamp, status, error, path);
		
		for (FieldError fd : err.getBindingResult().getFieldErrors()) {
			validationError.addError(fd.getField(), fd.getDefaultMessage());
		}
		
		return ResponseEntity.status(status).body(validationError);
	}
}
