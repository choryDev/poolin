package in.pool.server.repositories.user;

import in.pool.server.domain.types.UserAccountPK;
import in.pool.server.domain.user.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, UserAccountPK> {

}
