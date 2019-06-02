package in.pool.server.repositories.workspace;

import in.pool.server.domain.types.WorkspaceMemberPK;
import in.pool.server.domain.workspace.WorkspaceMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkspaceMemberRepository extends JpaRepository<WorkspaceMember, WorkspaceMemberPK> {
}
