package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    Optional<Project> findByProjectNo(Integer projectNo);

}
