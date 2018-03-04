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

export const date = timestamp => {
  const pubDate = new Date(timestamp);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const formattedDate =
    weekday[pubDate.getDay()] +
    "-" +
    monthName[pubDate.getMonth()] +
    "-" +
    pubDate.getDate() +
    "-" +
    pubDate.getFullYear();
  return formattedDate;
};

export const username = (str = "") => {
  return typeof str !== "string" ? "" : str.substring(0, 2).toUpperCase();
};