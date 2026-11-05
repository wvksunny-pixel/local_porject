# LOCAL, BUT IMPACTFUL.

2026년 11월 World Vision Impact Partnership Newsletter와 연결되는 로컬 임팩트 소개 페이지입니다.

- `index.html` — 페이지 전체(스타일과 스크립트 포함)
- `assets/` — 사업 사진

## 링크 입력
문의 버튼과 뉴스레터 돌아가기 링크는 `index.html` 맨 아래 스크립트의 `LINKS` 값에 주소를 넣으면 나타납니다.

## 바로가기
- `#why-local` 왜 지금 로컬일까요
- `#corporate` 기업이 가진 것으로 시작하기
- `#case-economy` 농촌창업도약+
- `#case-community` 세상에서 가장 안전한 목욕탕
- `#case-future` 해방프로젝트
- `#why-wv` 월드비전의 역할과 문의

## 협력 문의 접수
페이지의 문의 양식은 `index.html` 맨 아래 `FORM_ENDPOINT`가 비어 있으면 실제로 보내지 않고 대표전화를 안내합니다.
문의를 구글 시트로 받으려면 `apps-script/inquiry.gs`의 설치 방법대로 웹 앱을 배포하고, 발급된 URL을 `FORM_ENDPOINT`에 넣으세요.
