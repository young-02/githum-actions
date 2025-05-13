interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  options = { path: "/", ...options };

  let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    const optionValue = options[optionKey];

    if (
      optionValue === undefined ||
      optionValue === null ||
      optionValue === false
    )
      continue;

    let finalValue = optionValue;
    if (optionValue instanceof Date) {
      finalValue = optionValue.toUTCString();
    }

    cookieString += `; ${optionKey}`;
    if (finalValue !== true) {
      cookieString += `=${finalValue}`;
    }
  }

  document.cookie = cookieString;
}

//특정 키가 존재 하는지 확인 하는 함수
export function isCookieExists(name: string) {
  // name 인코딩 한번 한다 (특수 문자가 있을수 있음)
  const encodeName = encodeURIComponent(name);
  // 쿠키의 문자열을 '; ' 기준으로 나누어 배열로 만든후에 인코딩한 이름이 있는지 확인하고 있으면 true 없으면 false 반환
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeName + "="))
    ? true
    : false;
}

// 쿠키 삭제
// function deleteCookie(name) {
//   document.cookie = encodeURIComponent(name) + "=; Max-Age= 0;";
// }

// // 쿠키 삭제
// function deleteCookie2(name) {
//   // name, value 빈문자열 max-age 0으로 설정
//   setCookie(name, "", { "max-age": 0 });
// }

// function getCookieValue(name: string) {
//   //name 받아와서 인코딩 한다.
//   const encodeName = encodeURIComponent(name);
//   //쿠키 목록을 ; 기준으로 배열로 처리한다.
//   const cookies = document.cookie.split("; ");
//   //배열에서 인코딩한 쿠기 이름이 확인한다.
//   const cookie = cookies.find((cookie) => cookie.startsWith(encodeName + "="));

//   //만약 쿠키가 있으면 쿠키 값을 디코딩 한다.
//   if (cookie) {
//     return decodeURIComponent(cookie.split("=")[1]);
//   }
//   // 없으면 undefined
//   return undefined;
// }
