package in.pool.server.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import in.pool.server.domain.types.AuthTypes;
import in.pool.server.domain.types.LangTypes;
import in.pool.server.domain.types.SessionLayerTypes;
import in.pool.server.domain.types.UserSessionTypes;
import in.pool.server.domain.user.User;
import in.pool.server.domain.workspace.Project;
import in.pool.server.domain.workspace.Workspace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class RequestDto {

    private UserSessionTypes access_tp;

    private LangTypes lang;

    @JsonIgnore
    private SessionLayerTypes sess_layer = SessionLayerTypes.ME;

    @JsonIgnore
    private Integer sess_user_no;

    @JsonIgnore
    private User sessUser;

    @JsonIgnore
    private String sess_auth_key;

    @JsonIgnore
    private String sess_salt;

    @JsonIgnore
    private LocalDateTime sessNow = LocalDateTime.now();

    // Workspace Layer
    @JsonIgnore
    private String sess_workspace_id;

    @JsonIgnore
    private Integer sess_workspace_no;

    @JsonIgnore
    private Workspace sessWorkspace;

    @JsonIgnore
    private AuthTypes workspaceAuth;

    // Project Layer
    @JsonIgnore
    private Integer sess_project_no;

    @JsonIgnore
    private String sess_project_id;

    @JsonIgnore
    private Project sessProject;

    @JsonIgnore
    private AuthTypes projectAuth;

    // System
    @JsonIgnore
    private String err_code;

    @JsonIgnore
    private List tmp;

    public void setWorkspaceAuth(String workspaceAuth) {
        this.workspaceAuth = AuthTypes.getAuth(workspaceAuth);
    }

    public void setWorkspaceAuth(AuthTypes workspaceAuth) {
        this.workspaceAuth = workspaceAuth;
    }

    public void setAccess_tp(String access_tp) {
        this.access_tp = UserSessionTypes.getSession(access_tp);
    }

    public void setLang(String lang) {
        this.lang = LangTypes.getLangType(lang);
    }

    public String getAccess_tp() {
        return access_tp.getSession();
    }

    public void setSess_layer(SessionLayerTypes sess_layer) {
        this.sess_layer = sess_layer;
    }

    public void setSess_layer(String sess_layer) {
        this.sess_layer = SessionLayerTypes.getLayerType(sess_layer);
    }

    @Override
    public String toString() {
        return "RequestDto{" +
                "access_tp=" + access_tp +
                ", lang=" + lang +
                ", sess_layer=" + sess_layer +
                ", sess_user_no=" + sess_user_no +
                ", sessUser=" + sessUser +
                ", sess_auth_key='" + sess_auth_key + '\'' +
                ", sess_salt='" + sess_salt + '\'' +
                ", sessNow=" + sessNow +
                ", sess_workspace_id='" + sess_workspace_id + '\'' +
                ", sess_workspace_no=" + sess_workspace_no +
                ", workspaceAuth=" + workspaceAuth +
                ", sess_project_no=" + sess_project_no +
                ", sess_project_id='" + sess_project_id + '\'' +
                ", projectAuth=" + projectAuth +
                '}';
    }
}