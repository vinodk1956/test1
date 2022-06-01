package com.zensar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}