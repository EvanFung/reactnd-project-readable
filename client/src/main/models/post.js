import { generateRandomId } from "../utils/Utils";
class Post {
  constructor(
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted = false,
    id = generateRandomId()
  ) {
    this.id = id;
    this.timestamp = timestamp;
    this.body = body;
    this.category = category;
    this.voteScore = voteScore;
    this.deleted = deleted;
  }
}
