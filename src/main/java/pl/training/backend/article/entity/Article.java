package pl.training.backend.article.entity;

/**
 * Created by Pawel Krowicki on 2017-07-26.
 */

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "articles")
@Entity
@Data
public class Article implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    @Column(name="title", nullable = false)
    private String articleTitle;
    @Lob
    @Basic(fetch = FetchType.EAGER)
    @Column(name="content", nullable = false)
    private String articleContent;

}
