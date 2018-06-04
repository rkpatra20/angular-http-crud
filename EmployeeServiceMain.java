package com.lendme.loandecisionmaker;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class EmployeeServiceMain {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeServiceMain.class, args);
	}

}

@Component
class WebSecurityCorsFilter implements Filter {
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse res = (HttpServletResponse) response;
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH");
		res.setHeader("Access-Control-Max-Age", "3600");
		res.setHeader("Access-Control-Allow-Headers",
				"Authorization, Content-Type, Accept, x-requested-with, Cache-Control");
		chain.doFilter(request, res);
	}

	@Override
	public void destroy() {
	}
}

class Employee {
	private String firstName;
	private String lastName;
	private String gender;
	private double salary;
	private String dob;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Employee(String firstName, String lastName, String gender, double salary, String dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.salary = salary;
		this.dob = dob;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

}

@RestController
class EmployeeController {

	Employee e1 = new Employee("f1", "ll1", "male", 2345.67, new Date().toString());
	Employee e2 = new Employee("f2", "l2", "male", 2345.67, new Date().toString());
	Employee e3 = new Employee("f3", "l3", "female", 2345.67, new Date().toString());
	Employee e4 = new Employee("f4", "l4", "female", 2345.67, new Date().toString());
	Employee e5 = new Employee("f5", "l5", "female", 2345.67, new Date().toString());
	Employee e6 = new Employee("f6", "l6", "female", 2345.67, new Date().toString());

	Employee[] empArr = { e1, e2, e3, e4, e5, e6 };

	List<Employee> list = new ArrayList<>();

	{
		Arrays.asList(empArr).stream().forEach(e -> {
			list.add((Employee) e);
		});
	}

	@GetMapping("/employees")
	public List<Employee> getEmplist() {

		return list;
	}

	@GetMapping("/employees/{lastName}")
	public Employee getEmpByLastName(@PathVariable("lastName") String lastName) {
		for (Employee emp : empArr) {
			if (lastName.equals(emp.getLastName())) {
				return emp;
			}
		}
		return new Employee();
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		list.add(emp);
		return emp;
	}

	@PatchMapping("/employees")
	public Employee updateEmployee(@RequestBody Employee emp) {
		int c = 0;
		for (Employee e : list) {
			if (e.getLastName().equals(emp.getLastName())) {
				list.set(c, emp);
				break;
			}
		}
		c = c + 1;
		return emp;
	}

	@DeleteMapping("/employees/{lastName}")
	public String deleteEmployee(@PathVariable("lastName") String lastName) {
		int c = 0;
		for (Employee e : list) {
			if (e.getLastName().equals(lastName)) {
				list.remove(c);
				break;
			}
		}
		c = c + 1;
		return lastName;
	}

}
