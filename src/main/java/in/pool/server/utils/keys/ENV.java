package in.pool.server.utils.keys;

public class ENV {

    public final static String SESSION_KEY_NAME = "elw_token";

    public static final String PUBLIC_CONF  = "/conf";
    public static final String PUBLIC = "/api";
    public static final String PUBLIC_ME = "/api/{layer}";
    public static final String PUBLIC_WORKSPACE = PUBLIC_ME + "/{sess_workspace_id}";
    public static final String PUBLIC_PROJECT = PUBLIC_ME + "/{sess_workspace_id}/{sess_project_id}";
    public static final String PUBLIC_CARD = PUBLIC_ME + "/{sess_workspace_id}/{sess_project_id}/{sess_card_id}";

    public static final String SESS_CMPY_ID = "sess_cmpy_id";

    // AWS Credential Key
    public static final String LOCAL_FILE_PATH = "/home/ubuntu";
    public static final String AWS_BUKET_NAME = "ijunc";
    public static final String AWS_ACCESS_KEY = "AKIAILNMV7WHV36FJSCQ";
    public static final String AWS_SECRET_KEY = "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";
    public static final String AWS_MANSION_IMG_PATH = "/img/user";
    public static final String AWS_S3_DOMAIN = "https://s3.ap-northeast-2.amazonaws.com/ijunc";
}
