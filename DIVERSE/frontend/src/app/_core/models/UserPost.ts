import {SortType} from "../constants/SortType";
import { User } from "./User";

export class UserPost {
  text: string;
  user: User;
  userId: number;
  id: number;
  comment: string;


  constructor(
    userId: number,
    text: string,
    id: number,
    comment: string
  ) {
    this.userId = userId;
    this.text = text;
    this.id=id;
    this.comment=comment;

  }
}

export class UserPostsFilters {
  page: number;
  size: number;
  sortType: SortType;

  constructor(page: number, size: number, sortType: SortType) {
    this.page = page;
    this.size = size;
    this.sortType = sortType;
  }
}
export class PostText{
  text: string;
  constructor(text: string) {
    this.text=text;
  }
}

export class PostComment{
  postId: number;
  text: string;
  constructor(postId: number, text: string) {
    this.postId=postId;
    this.text=text;
  }
}