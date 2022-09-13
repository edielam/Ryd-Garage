package com.monolith.cardatabase.repositoryTest;

import com.monolith.cardatabase.domain.Owner;
import com.monolith.cardatabase.repository.OwnerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class OwnerRepositoryTest {
    @Autowired
    private OwnerRepository ownerRepository;

    @Test
    void saveOwner(){
        ownerRepository.save(new Owner("Rose","Lamp"));
        assertThat(ownerRepository.findByFirstName("Rose").isPresent())
                .isTrue();
    }
    @Test
    void deleteOwners() {
        ownerRepository.save(new Owner("Lisa", "Morrison"));
        ownerRepository.deleteAll();
        assertThat(ownerRepository.count()).isEqualTo(0);
    }
}
