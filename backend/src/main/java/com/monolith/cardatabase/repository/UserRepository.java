package com.monolith.cardatabase.repository;

import com.monolith.cardatabase.domain.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;
@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository <Users,Long> {
    Optional<Users> findByUsername(@Param("username") String username);
}
