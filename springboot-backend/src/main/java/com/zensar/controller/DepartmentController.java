package com.zensar.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.exception.ResourceNotFoundException;
import com.zensar.model.Department;
import com.zensar.repository.DepartmentRepository;

@RestController
@RequestMapping("/dept/v1/")
public class DepartmentController {

	@Autowired
	private DepartmentRepository departmentRepository;

	// get all departments
	@GetMapping("/department")
	public List<Department> getAllDepartments() {
		return departmentRepository.findAll();
	}

	// create department rest api
	@PostMapping("/department")
	public Department createDepartment(@RequestBody Department department) {
		return departmentRepository.save(department);
	}

	// get department by id rest api
	@GetMapping("/department/{id}")
	public ResponseEntity<Department> getDepartmentById(@PathVariable int id) {
		Department department = departmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(department);
	}

	// update department rest api

	@PutMapping("/department/{id}")
	public ResponseEntity<Department> updateDepartment(@PathVariable int id, @RequestBody Department departmentDetails) {
		Department department = departmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		department.setDeptName(departmentDetails.getDeptName());
		

		Department updatedDepartment = departmentRepository.save(department);
		return ResponseEntity.ok(updatedDepartment);
	}

	// delete department rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDepartment(@PathVariable int id) {
		Department department = departmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		departmentRepository.delete(department);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
