// DOM 요소를 테스트할 때 매우 유용한 커스텀 매처(matcher)들을 제공
// toBeInTheDocument(), toHaveTextContent(), toBeVisible() 등
// 1. 전역 설정: 모든 테스트 파일에서 이 매처들을 별도로 import 하지 않고도 사용할 수 있습니다.
// 2. 코드 중복 방지: 각 테스트 파일마다 동일한 import문을 반복하지 않아도 됩니다.
// 3. 일관성 유지: 모든 테스트에 동일한 확장 기능이 적용되므로 테스트 코드가 일관성을 유지합니다.
// 4. 설정 집중화: 테스트 환경 설정을 한 곳에서 관리할 수 있어 나중에 변경이 필요할 때 편리합니다.

import "@testing-library/jest-dom";
import { server } from "./src/mocks/server";

// 모든 테스트가 시작하기 전 MSW 서버를 시작합니다.
beforeAll(() => server.listen());
// 이전 테스트의 모의 응답이 다음 테스트에 영향을 주지 않도록 이전 테스트에서 설정된 핸들러를 초기화합니다.
afterEach(() => server.resetHandlers());
// 모든 테스트가 완료된 후에 MSW 서버를 종료합니다.
afterAll(() => server.close());
