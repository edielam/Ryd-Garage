package com.monolith.cardatabase;

import com.monolith.cardatabase.domain.Car;
import com.monolith.cardatabase.domain.Owner;
import com.monolith.cardatabase.domain.Users;
import com.monolith.cardatabase.repository.CarRepository;
import com.monolith.cardatabase.repository.OwnerRepository;
import com.monolith.cardatabase.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.slf4j.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class CarDatabaseApplication implements CommandLineRunner {
	private static final Logger log = LoggerFactory.getLogger(CarDatabaseApplication.class);
	@Autowired
	private CarRepository carRepository;
	@Autowired
	private OwnerRepository ownerRepository;
	@Autowired
	private UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(CarDatabaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Owner owner1 = new Owner("Eddie", "Lampoh");
		Owner owner2 = new Owner("Richie", "O'Brain");
		Owner owner3 = new Owner("Ivy", "Sweet");
		Owner owner4 = new Owner("Mel", "Darling");
		ownerRepository.saveAll(Arrays.asList(owner1, owner2, owner3, owner4));

		Car car1 = new Car("Ford","Mustang","Red","ADF-1121",
				2022, 59000, owner3);
		Car car2 = new Car("Nissan", "Leaf","White",
				"SSJ-3002",2019,28000, owner2);
		Car car3 = new Car("Toyota", "Prius","silver","KKO-0212",
				2020,39000, owner1);
		Car car4 = new Car("Toyota", "Rav4","blue","KKO-0212",
				2020,39000, owner4);
		carRepository.saveAll(Arrays.asList(car1,car2,car3,car4));

		for (Car car : carRepository.findAll()){
			log.info(car.getBrand() +" "+ car.getModel());
		}
		// Username: user, password: user
		userRepository.save(new Users("user",
				"$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue","USER"));

		// Username: admin, password: ed123
		userRepository.save(new Users("admin",
				"$2a$12$gEXiT5yrirIFil8CfVIiHOfjjGqr0gYLXYzWfE7lXzgHXDT6y506q", "ADMIN"));
	}
}
