package in.pool.server.repositories.system;

import in.pool.server.domain.system.Language;
import in.pool.server.domain.types.LangTypes;
import in.pool.server.domain.types.LanguagePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepository extends JpaRepository<Language, LanguagePK> {
    Language findByLangCodeAndLangType(String langCode, LangTypes langType);
}
