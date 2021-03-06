package in.pool.server.dto;

import in.pool.server.domain.types.YesNoTypes;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseListDto extends ResponseDto{

    private List list = new ArrayList();

    private String next_token;

    private YesNoTypes completed = YesNoTypes.YES;

    public String getCompleted() {
        return completed.getYesNo();
    }

    public void setCompleted(YesNoTypes completed) {
        this.completed = completed;
    }

    public void setCompleted(String completed) {
        this.completed = YesNoTypes.getYesNo(completed);
    }


}