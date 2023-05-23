export function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.substring(0, maxLength) + "...";
}

function decodeBase64Url(base64Url) {
  // Convert base64url to base64
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  // Pad the base64 string if needed
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }

  // Decode base64 string
  var message = atob(base64);

  return message;
}
