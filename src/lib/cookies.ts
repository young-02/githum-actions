interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookiesOptions = {},
) {
  options = {
    path: "/",
    ...options,
  };

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
    document.cookie = cookieString;
  }
}

export function isCookieExists(name: string) {
  // 여기에 코드를 작성하세요.
  const encodedName = encodeURIComponent(name);
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((cookie) => cookie.startsWith(encodedName + "="));

  if (cookie) {
    return decodeURIComponent(cookie.split("=")[1]);
  }
  return undefined;
}

export function deleteCookie(name: string) {
  // 여기에 코드를 작성하세요.
  setCookie(name, "/", { "max-age": 0 });
}
