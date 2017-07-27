package pl.training.backend.article.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.training.backend.article.entity.Article;
import pl.training.backend.article.repository.ArticleRepository;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.security.entity.User;

import java.util.List;

/**
 * Created by Pawel Krowicki on 2017-07-26.
 */
@Service
public class ArticleService {

    private ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public void addArticle(Article article) {
        articleRepository.saveAndFlush(article);
    }

    public Article viewArticle(Long id) {
        return articleRepository.findOne(id);
    }

    public List<Article> viewAllArticles() {
        return articleRepository.findAll();
    }

}
