package in.pool.server.repositories.user;

import in.pool.server.domain.types.UserSessionPK;
import in.pool.server.domain.user.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSessionRepository extends JpaRepository<UserSession, UserSessionPK> {
}
