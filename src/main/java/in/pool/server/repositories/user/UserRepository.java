package in.pool.server.repositories.user;

import in.pool.server.domain.types.UserStatusTypes;
import in.pool.server.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailAndStatus(String email, UserStatusTypes statusTypes);

    Optional<User> findByUsernameAndStatus(String username, UserStatusTypes statusTypes);

}
