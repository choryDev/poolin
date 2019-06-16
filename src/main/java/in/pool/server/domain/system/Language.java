package in.pool.server.domain.system;

import in.pool.server.domain.types.LangTypes;
import in.pool.server.domain.types.LanguagePK;
import in.pool.server.domain.types.convertors.LangTypeConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "SYS_LANG_MST")
@IdClass(LanguagePK.class)
@Getter
@Setter
public class Language {

    @Id @Column(name = "LANG_CD", length = 11)
    private String langCode;

    @Id @Column(name = "LANG_TP", columnDefinition = "ENUM")
    @Convert(converter = LangTypeConverter.class)
    private LangTypes langType;

    @Column(name = "UP_LANG_CD", length = 11)
    private String upLangCode;

    @Column(name = "LANG")
    private String language;

    @Column(name = "INS_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime insertedDate = LocalDateTime.now();

    @Column(name = "UPT_DT", nullable = false, columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedDate = LocalDateTime.now();

    public String getLangType() {
        return langType.getLangType();
    }
}
