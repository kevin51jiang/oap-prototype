/**
 * Generates a string of any length using a character set
 * @param {number} length Length of string generated
 * @param {string} chars String containing "a" for lowercase, "A" for uppercase, "#" for numbers, and "!" for special characters. Combine as see fit. e.g. 'aA#' will generate random alphanumeric code
 */
export const randomString = (length, chars) => {
  var mask = "";
  if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) mask += "0123456789";
  if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = length; i > 0; --i)
    result += mask[Math.floor(Math.random() * mask.length)];
  return result;
};

/**
 * Formats a date object in MM/DD/YYYY (padded)
 * @param {object} date Date object
 */
export const getFormattedDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return year + "/" + month + "/" + day;
};

/**
 * Tests an email on whether it is valid or not
 * @param {string} email Email to test for validity
 */
export const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return emailPattern.test(email);
};
