package in.pool.server.dto.workspace;

import in.pool.server.dto.ResponseDto;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProjectScorecardResponse extends ResponseDto {

    private Integer scorecard_no;

    private Integer up_scorecard_no;

    private String content;

}
