package in.pool.server.repositories.user;

import in.pool.server.domain.user.User;
import in.pool.server.domain.user.UserPassword;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserPasswordRepository extends JpaRepository<UserPassword, Integer> {
    Optional<UserPassword> findByUser(User user);
}
