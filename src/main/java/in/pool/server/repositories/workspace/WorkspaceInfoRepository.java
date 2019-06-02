package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.WorkspaceInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WorkspaceInfoRepository extends JpaRepository<WorkspaceInfo, Integer> {
    Optional<WorkspaceInfo> findByWorkspaceNo(Integer workspaceNo);
}
