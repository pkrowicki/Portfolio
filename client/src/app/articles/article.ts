export class Article {

  id: number
  title: string
  content: string

  constructor(json) {
    this.id = json['id']
    this.title = json['articleTitle']
    this.content = json['articleContent']
  }

}
