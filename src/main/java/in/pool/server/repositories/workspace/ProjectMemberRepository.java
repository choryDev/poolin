package in.pool.server.repositories.workspace;

import in.pool.server.domain.types.ProjectMemberPK;
import in.pool.server.domain.workspace.ProjectMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectMemberRepository extends JpaRepository<ProjectMember, ProjectMemberPK> {

    void deleteByProjectNoAndUserNo(Integer projectNo, Integer userNo);

}
