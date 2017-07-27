package pl.training.backend.article.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.training.backend.article.entity.Article;
import java.util.Optional;

/**
 * Created by Pawel Krowicki on 2017-07-26.
 */
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

}

