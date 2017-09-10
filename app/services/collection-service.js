import {Injectable} from "@angular/core";
import {COLLECTIONS} from "./mock-collections";

@Injectable()
export class CollectionService {
  constructor() {
    this.collections = COLLECTIONS;
  }

  getAll() {
    return this.collections;
  }

  getItem(id) {
    for (var i = 0; i < this.collections.length; i++) {
      if (this.collections[i].id === parseInt(id)) {
        return this.collections[i];
      }
    }
    return null;
  }

  remove(item) {
    this.collections.splice(this.collections.indexOf(item), 1);
  }
}