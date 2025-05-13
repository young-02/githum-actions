export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePassword(password: string) {
  return password && password.length >= 8;
}

export function validateUser(user: {
  name: string;
  email: string;
  age?: number;
}) {
  // 필수 필드 검사
  //user가 객체 아니면 falsy값
  if (!user || typeof user !== "object") return false;
  //user.name 없거나 user.email 없으면 false
  if (!user.name || !user.email) return false;

  // 이메일 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) return false;

  // 이름 길이 검사
  //user.name길이가 2보다 작거나 50보다 크면 false
  if (user.name.length < 2 || user.name.length > 50) return false;

  // 선택적 필드 검사
  //만약에 user.age가 없거나 age가 number이 아니거나 0보다 작으면 false
  if (user.age !== undefined && (typeof user.age !== "number" || user.age < 0))
    return false;

  return true;
}
