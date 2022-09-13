package com.monolith.cardatabase.services;

import com.monolith.cardatabase.domain.Users;
import com.monolith.cardatabase.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

import java.util.Optional;
@Service
public class UserDetailsServiceImpl implements
        UserDetailsService {
    @Autowired
    private UserRepository repository;
    @Override
    public UserDetails loadUserByUsername(String
                                                  username)
            throws UsernameNotFoundException {
        Optional<Users> user =
                repository.findByUsername(username);
        UserBuilder builder = null;
        if (user.isPresent()) {
            Users currentUsers = user.get();
            builder =
                    org.springframework.security.core.userdetails.
                            User.withUsername(username);
            builder.password(currentUsers.getPassword());
            builder.roles(currentUsers.getRole());
        } else {
            throw new UsernameNotFoundException("Users not found.");
        }
        return builder.build();
    }
}