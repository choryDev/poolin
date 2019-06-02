package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.ProjectInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectInfoRepository extends JpaRepository<ProjectInfo, Integer> {
    Optional<ProjectInfo> findByProjectNo(Integer projectNo);
}
