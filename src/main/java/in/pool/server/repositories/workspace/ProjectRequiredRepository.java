package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.Project;
import in.pool.server.domain.workspace.ProjectRequired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRequiredRepository extends JpaRepository<ProjectRequired, Integer> {

    Optional<ProjectRequired> findByProjectNo(Integer projectNo);

}
