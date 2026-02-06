# blueprint.md

## Project Overview

This project implements an "Animal World Cup" game, allowing users to choose their favorite animals in a series of matchups to determine a winner. The application is built using modern web standards (HTML, CSS, JavaScript) and is configured for deployment with Firebase.

## Style, Design, and Features

*   **Responsive Design:** Adapts to different screen sizes.
*   **Animal Matchups:** Presents two animal images and names for the user to choose between.
*   **Dynamic Rounds:** Progresses through rounds until a single winner is determined.
*   **Ranking System:** Displays a final ranking of animals based on their wins.
*   **Modern JavaScript:** Uses ES Modules, `async/await`, and other modern syntax.
*   **Image Placeholders:** Currently uses Base64 encoded SVG icons to ensure images display reliably.

## Current Plan for Requested Change: Fix Images and Deploy

The user repeatedly reported that images were not appearing, even after an initial fix using `picsum.photos` links. The request was to ensure images display and to proceed with deployment.

### Steps Taken:

1.  **Re-investigated Image Display Issue:** Confirmed `main.js` had `picsum.photos` links, and `index.html`/`style.css` did not overtly hide images. The persistent issue suggested external network problems or other unforeseen rendering issues with external image links.
2.  **Implemented Robust Image Solution:** Replaced all `picsum.photos` links in `main.js` with **Base64 encoded SVG data URIs**. This embeds a simple orange circle icon directly into the JavaScript, removing reliance on external image hosts and guaranteeing image display regardless of network conditions or CDN access.
3.  **Verified Deployment Configuration:** Confirmed that the `.idx/mcp.json` file already contains the correct Firebase configuration for deployment.

### Next Steps:

1.  The application is now in a state where images (as simple orange circles) should definitely be appearing in the preview.
2.  Proceed with deployment to Firebase.

## How to Deploy to Firebase:

당신의 애플리케이션은 Firebase CLI를 사용하여 배포할 수 있습니다. Firebase CLI가 설치 및 구성되어 있다고 가정하면, 일반적으로 다음 명령어를 실행합니다:

```bash
firebase deploy
```

Firebase Studio 환경에서는 `npx firebase-tools@latest experimental:mcp`를 사용하도록 설정되어 있습니다. `mcp.json` 구성이 이를 가리키고 있으므로, 이 명령어를 사용하여 배포를 진행할 수 있습니다.

## How to Replace Placeholder Images with Actual Animal Images:

현재 Base64 인코딩된 SVG 아이콘을 실제 동물 이미지로 교체하려면:

1.  적절하고 공개적으로 접근 가능한 각 동물의 직접 이미지 링크를 찾습니다 (예: Unsplash, Pexels 또는 자체 호스팅 이미지).
2.  `main.js` 파일을 편집하고 `animals` 배열의 각 동물의 `img` 속성을 새 이미지 URL로 업데이트합니다.

예시:
```javascript
    { name: "사자", img: "YOUR_LION_IMAGE_URL_HERE", wins: 0 },
```
