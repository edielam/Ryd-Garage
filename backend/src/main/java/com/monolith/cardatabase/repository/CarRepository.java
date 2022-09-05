package com.monolith.cardatabase.repository;

import com.monolith.cardatabase.domain.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
@RepositoryRestResource
public interface CarRepository extends CrudRepository<Car, Long> {
    List<Car> findByBrand(@Param("brand") String brand);
    List<Car> findByModel(@Param("model") String model);
    List<Car> findByColor(@Param("color") String color);
}
