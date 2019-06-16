package in.pool.server.repositories.user;

import in.pool.server.domain.user.UserFindPassword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFindPwdRepository extends JpaRepository<UserFindPassword, Integer> {
}
