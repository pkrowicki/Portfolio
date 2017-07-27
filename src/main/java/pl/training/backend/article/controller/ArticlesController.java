package pl.training.backend.article.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.article.entity.Article;
import pl.training.backend.article.service.ArticleService;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.security.dto.UserDto;
import pl.training.backend.security.dto.UsersPageDto;
import pl.training.backend.security.entity.User;
import pl.training.backend.security.service.UsersService;

import java.net.URI;
import java.util.List;

import static org.springframework.http.ResponseEntity.created;

/**
 * Created by Pawel Krowicki on 2017-07-26.
 */
@Api(description = "Articles resource")
@RequestMapping(value = UriBuilder.PREFIX + "/articles")
@RestController
public class ArticlesController {
    private Mapper mapper;
    private ArticleService articleService;
    private UriBuilder uriBuilder = new UriBuilder();

    @Autowired
    public ArticlesController(Mapper mapper, ArticleService articleService) {
        this.mapper = mapper;
        this.articleService = articleService;
    }

    @ApiOperation(value = "Create new article")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity addArticle(@ApiParam(name="article") @RequestBody Article article) {
        articleService.addArticle(article);
        URI uri = uriBuilder.requestUriWithId(article.getId());
        return  created(uri).build();
    }

    @ApiOperation(value = "Get article by id", response = Article.class)
    @RequestMapping(method = RequestMethod.GET, value="{id}")
    public Article getArticle(@PathVariable Long id) {
        Article article = articleService.viewArticle(id);
        return article;
    }

    @ApiOperation(value = "Get all articles", response = Article.class)
    @RequestMapping(method = RequestMethod.GET)
    public List<Article> getAllArticles(){
        List<Article> articles = mapper.map(articleService.viewAllArticles(), Article.class);
        return articles;
    }


//
//    @ApiOperation(value = "Create new user")
//    @RequestMapping(method = RequestMethod.POST)
//    public ResponseEntity createUser(@ApiParam(name = "user") @RequestBody UserDto userDto) {
//        User user = mapper.map(userDto, User.class);
//        usersService.addUser(user);
//        URI uri = uriBuilder.requestUriWithId(user.getId());
//        return created(uri).build();
//    }
//
//    @ApiOperation(value = "Get current user", response = UserDto.class)
//    @RequestMapping(value = "active", method = RequestMethod.GET)
//    public UserDto getUser(OAuth2Authentication authentication) {
//        User user = (User) authentication.getPrincipal();
//        return mapper.map(user, UserDto.class);
//    }
//
//    @ApiOperation(value = "Get users", response = UsersPageDto.class)
//    @RequestMapping(method = RequestMethod.GET)
//    public UsersPageDto getUsers(
//            @RequestParam(required = false, defaultValue = "0", name = "pageNumber") int pageNumber,
//            @RequestParam(required = false, defaultValue = "10", name = "pageSize") int pageSize) {
//        ResultPage<User> resultPage = usersService.getUsers(pageNumber, pageSize);
//        List<UserDto> usersDtos = mapper.map(resultPage.getContent(), UserDto.class);
//        return new UsersPageDto(usersDtos, resultPage.getPageNumber(), resultPage.getTotalPages());
//    }

}
