// src/utils/stringValidator.ts
export function validateUsername(username: string) {
  //username이 string이 아니면 false
  if (typeof username !== "string") return false;
  // 영문자, 숫자, '_'만 허용, 3-20자 제한
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}
