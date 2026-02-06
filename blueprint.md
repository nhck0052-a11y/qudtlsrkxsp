# blueprint.md

## Project Overview

This project implements an "Animal World Cup" game, allowing users to choose their favorite animals in a series of matchups to determine a winner. The application is built using modern web standards (HTML, CSS, JavaScript) and is configured for deployment with Firebase.

## Style, Design, and Features

*   **Responsive Design:** Adapts to different screen sizes.
*   **Animal Matchups:** Presents two animal images and names for the user to choose between.
*   **Dynamic Rounds:** Progresses through rounds until a single winner is determined.
*   **Ranking System:** Displays a final ranking of animals based on their wins.
*   **Modern JavaScript:** Uses ES Modules, `async/await`, and other modern syntax.
*   **Image Sources:** Now uses dynamic image URLs from `source.unsplash.com` based on animal names.

## Current Plan for Requested Change: 동물 이름에 맞는 이미지로 교체 및 배포

사용자께서 "이미지를 동물이름에 맞춰 동물로 해줘야지"라고 요청하셨으며, 배포도 함께 요청하셨습니다.

### Steps Taken:

1.  **초기 이미지 문제 재조사:** `picsum.photos` 링크 사용 후에도 이미지가 표시되지 않는 문제가 지속적으로 보고되어, 외부 이미지 링크에 대한 의존성을 최소화하는 방법을 모색했습니다.
2.  **Base64 SVG 이미지 도입 (임시):** 이미지가 '아예 안 뜨는' 문제를 확실히 해결하기 위해, 모든 동물 이미지에 공통된 Base64 인코딩된 SVG 원형 아이콘을 임시로 적용했습니다.
3.  **동물 이름에 맞는 동적 이미지 URL 적용:** 사용자 요청에 따라, 각 동물의 한국어 이름을 영어로 번역하여 `source.unsplash.com`의 동적 이미지 URL로 교체했습니다. 이 URL은 키워드에 따라 무작위 이미지를 제공하므로, 각 동물의 이름에 맞는 이미지가 표시될 것으로 기대됩니다.
    *   **참고:** `source.unsplash.com`은 무작위 이미지를 제공하므로, 항상 특정 동물의 '이상적인' 이미지가 표시되지 않을 수 있으며, 때로는 관련 없는 이미지가 나타날 수도 있습니다. 또한, Unsplash의 사용 정책 및 Rate Limit에 따라 이미지 로딩에 문제가 발생할 가능성도 있습니다.
4.  **배포 구성 확인:** `.idx/mcp.json` 파일에 Firebase 배포를 위한 설정이 올바르게 구성되어 있음을 확인했습니다.

### Next Steps:

1.  이제 애플리케이션의 미리보기에서 각 동물 이름에 맞는 (무작위) 이미지가 표시될 것으로 예상됩니다.
2.  배포를 진행합니다.

## How to Deploy to Firebase:

당신의 애플리케이션은 Firebase CLI를 사용하여 배포할 수 있습니다. Firebase CLI가 설치 및 구성되어 있다고 가정하면, 일반적으로 다음 명령어를 실행합니다:

```bash
firebase deploy
```

Firebase Studio 환경에서는 `npx firebase-tools@latest experimental:mcp`를 사용하도록 설정되어 있습니다. `mcp.json` 구성이 이를 가리키고 있으므로, 이 명령어를 사용하여 배포를 진행할 수 있습니다.

## How to Replace Placeholder Images with Actual Animal Images:

`source.unsplash.com`의 동적 이미지를 특정 이미지로 교체하려면:

1.  적절하고 공개적으로 접근 가능한 각 동물의 직접 이미지 링크를 찾습니다 (예: Unsplash, Pexels 또는 자체 호스팅 이미지).
2.  `main.js` 파일을 편집하고 `animals` 배열의 각 동물의 `img` 속성을 새 이미지 URL로 업데이트합니다.

예시:
```javascript
    { name: "사자", img: "YOUR_LION_IMAGE_URL_HERE", wins: 0 },
```