import uuidv4 from "uuid/v4";
/**
 * Generate random uuid without separator characters.
 * @return {[string]} Generated id with a length of 22 characters.
 */
export function generateRandomId() {
  return uuidv4()
    .replace(/-/gi, "")
    .substr(-22);
}
