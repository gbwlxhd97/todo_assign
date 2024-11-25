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

