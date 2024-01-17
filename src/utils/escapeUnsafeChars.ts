const charMap = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};

/**
 * Escapes all unsafe characters in a string
 *
 * @param str input string
 * @returns escaped string
 */
export function escapeUnsafeChars(str: string) {
  return str.replace(/[<>\b\f\n\r\t\0\u2028\u2029]/g, (x) => charMap[x]);
}
