import {Injectable} from "@angular/core";
import {REVIEWS} from "./mock-reviews";

@Injectable()
export class ReviewService {
  constructor() {
    this.reviews = REVIEWS;
  }

  getAll() {
    return this.reviews;
  }

  getItem(id) {
    for (var i = 0; i < this.reviews.length; i++) {
      if (this.reviews[i].id === parseInt(id)) {
        return this.reviews[i];
      }
    }
    return null;
  }

  remove(item) {
    this.reviews.splice(this.reviews.indexOf(item), 1);
  }
}