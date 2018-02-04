export class Article {
  private id: string;
  private title: string;
  private creationDateT: Date;
  private summary: string;
  private image: string;
  private description: string;
  private keywords: string[];

  constructor(
    id: string,
    title: string,
    creationDateT: Date,
    summary: string,
    image: string,
    description: string,
    keywords: string[]
  ) {
    this.id = id;
    this.title = title;
    this.creationDateT = creationDateT;
    this.summary = summary;
    this.image = image;
    this.description = description;
    this.keywords = keywords;
  }

  public get $id(): string {
    return this.id;
  }

  public set $id(value: string) {
    this.id = value;
  }

  public get $title(): string {
    return this.title;
  }

  public set $title(value: string) {
    this.title = value;
  }

  public get $creationDateT(): Date {
    return this.creationDateT;
  }

  public set $creationDateT(value: Date) {
    this.creationDateT = value;
  }

  public get $summary(): string {
    return this.summary;
  }

  public set $summary(value: string) {
    this.summary = value;
  }

  public get $image(): string {
    return this.image;
  }

  public set $image(value: string) {
    this.image = value;
  }

  public get $description(): string {
    return this.description;
  }

  public set $description(value: string) {
    this.description = value;
  }

  public get $keywords(): string[] {
    return this.keywords;
  }

  public set $keywords(value: string[]) {
    this.keywords = value;
  }

}
