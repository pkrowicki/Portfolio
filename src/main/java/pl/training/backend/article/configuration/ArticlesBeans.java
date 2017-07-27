package pl.training.backend.article.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.training.backend.article.repository.ArticleRepository;
import pl.training.backend.article.service.ArticleService;


/**
 * Created by Pawel Krowicki on 2017-07-26.
 */
@Configuration
public class ArticlesBeans {
    @Bean
    public ArticleService articleService(ArticleRepository articleRepository) {
        return new ArticleService(articleRepository);
    }
}
