# Todo Assignment ✅

## 프로젝트 구조 📁
```
src/
├── components/      # 리액트 컴포넌트
│   ├── Layout/      # 레이아웃 관련 컴포넌트
│   └── Todo/        # Todo 컴포넌트
├── services/        # API 관련 서비스
├── utils/           # 유틸리티 함수
├── App.tsx          # 메인 애플리케이션 루트 컴포넌트
└── main.tsx         # 애플리케이션 진입점
```

## 시작하기 🚀

### 실행 방법
1. 의존성 패키지 설치
   ```bash
   npm install
   ```

2. 개발 서버 실행
   ```bash
   npm run dev
   ```

### 빌드 방법
1. 프로덕션 빌드
   ```bash
   npm run build
   ```

2. 빌드된 결과물 미리보기
   ```bash
   npm run preview
   ```


## HTML, CSS Requirements 🎨
- [x] 상단 좌측 레이아웃 구현
- [x] TODO 구성요소 구현
  - [x] 입력 영역
  - [x] TODO 목록
  - [x] TODO 항목 (체크박스, 제목, 삭제 버튼)
- [x] 기본적인 레이아웃 구조 완성

## JavaScript Requirements 💻
- [x] Mock API 데이터 연동
  - [x] 초기 로딩 시 첫 번째 API 호출
  - [x] Load More 버튼으로 순차적 데이터 로드
  - [x] 4번째 API 호출 시 빈 응답 처리 및 버튼 숨김
- [x] TODO 기능 구현
  - [x] TODO 생성
  - [x] TODO 삭제
  - [x] TODO 체크(완료) 처리
- [x] 입력 유효성 검사
  - [x] 빈 칸 입력 방지
  - [x] 글자 수 제한 (2-50자)

## Additional Features 🌟
- [x] 토스트 메시지로 에러 알림
- [x] 로딩 상태 표시
- [x] 반응형 레이아웃

### 트러블슈팅: 한글 입력 시 마지막 글자가 남는 현상 🔍
[문제영상 🎥](https://github.com/gbwlxhd97/todo_assign/issues/1)


#### 문제 상황 ❌
- 영문 입력 시에는 정상적으로 동작하지만, 한글 입력 후 엔터키를 눌렀을 때 마지막 글자가 input에 남는 현상이 발생
- 이는 한글과 같은 조합형 문자를 입력할 때 발생하는 IME(Input Method Editor) 이벤트 처리의 차이 때문
- (찾아보니 MAC OS에서만 발생한다고는 합니다.. 제가 MAC OS 이기 때문에 발생한 현상이라고 추측해봅니다.)

#### 해결 방법 ✅
- `isComposing` 플래그를 사용하여 문자 조합 중인지 여부를 확인
- `isComposing`이 `true`일 때는 아직 문자가 조합 중임을 의미
- `false`일 때만 이벤트를 처리하여 완성된 문자에 대해서만 동작하도록 함

### 남기고 싶은 말 💭
- 가급적 가장 제가 작업하던 방식대로 폴더구조와 컴포넌트를 나눴습니다.
- 보통은 scss,sass를 사용하는데 scss를 이용할만큼 분량이 크지 않다고 생각하여 이점이 없다고 판단해 이번에는 css를 사용해서 작업하였습니다.
- 누구나 코드를 알아보기 쉽게 가장 기본적인 react 방법으로 작업하였습니다.
- 처음에는 1~3번 데이터를 한 번에 불러오는 방식으로 이해 해서 도중에 코드 구조를 변경했습니다.
- 관련 커밋: [코드 구조 변경 커밋](https://github.com/gbwlxhd97/todo_assign/commit/f11c467fc19cbeaf5b364dcf89967dc2c98fe412)
- 요구사항을 토대로 디자인적으로 꾸미며 개발하기보단 기본적인 레이아웃만 잡았으며 투두에 필요한 디자인 기능만 구현 하였습니다.
- 개인적으로 UX경험을 살리기 위해서 첫 데이터 로딩이 끝나면 useRef 기능을 이용해 input에 focus 기능을 추가하였습니다.
- suspense와 error boundary를 사용하여 조금 더 선언적인 코드를 작성하려고 하였으나, 현재 과제에서는 loading과 error 상태를 구분 짓는 것이 많이 사용되지 않다고 생각하여서 도입 하지 않았습니다.
- 

