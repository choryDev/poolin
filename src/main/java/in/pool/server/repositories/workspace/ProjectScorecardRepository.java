package in.pool.server.repositories.workspace;

import in.pool.server.domain.workspace.ProjectScoreCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectScorecardRepository extends JpaRepository<ProjectScoreCard, Integer> {
    Optional<ProjectScoreCard> findByScorecardNoAndProjectNo(Integer scorecardNo, Integer projectNo);
    Optional<ProjectScoreCard> findByScorecardNoAndUpId(Integer scorecardNo, Integer upId);
}
