export class Article {

  id: number
  articleTitle: string
  articleContent: string

  constructor(json) {
    this.id = json['id']
    this.articleTitle = json['articleTitle']
    this.articleContent = json['articleContent']
  }

}
