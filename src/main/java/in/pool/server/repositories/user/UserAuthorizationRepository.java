package in.pool.server.repositories.user;

import in.pool.server.domain.user.User;
import in.pool.server.domain.user.UserAuthorization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserAuthorizationRepository extends JpaRepository<UserAuthorization, Integer> {
    Optional<UserAuthorization> findByUser(User user);
}
