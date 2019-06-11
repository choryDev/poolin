package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.ProjectPipline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectPipelineRepository extends JpaRepository<ProjectPipline, Integer> {
}
