# blueprint.md

## Project Overview

This project implements an "Animal World Cup" game, allowing users to choose their favorite animals in a series of matchups to determine a winner. The application is built using modern web standards (HTML, CSS, JavaScript) and is configured for deployment with Firebase.

## Style, Design, and Features

*   **Responsive Design:** Adapts to different screen sizes.
*   **Animal Matchups:** Presents two animal images and names for the user to choose between.
*   **Dynamic Rounds:** Progresses through rounds until a single winner is determined.
*   **Ranking System:** Displays a final ranking of animals based on their wins.
*   **Modern JavaScript:** Uses ES Modules, `async/await`, and other modern syntax.
*   **Image Sources:** Currently uses dynamic image URLs from `source.unsplash.com` based on animal names. (현재는 테스트를 위해 `index.html`에 Base64 테스트 이미지 직접 삽입)

## Current Plan for Requested Change: 이미지 먹통 오류 해결 및 Git Push

사용자께서 "이미지 먹통 오류 해결해주고 git push 까지 진행해 이미지 자체가 안보여"라고 다시 요청하셨습니다. 이전의 `source.unsplash.com` 동적 이미지로의 변경에도 불구하고 이미지가 여전히 표시되지 않는 문제가 발생하여, 근본적인 이미지 표시 문제를 진단하고 해결하기 위한 단계를 진행했습니다.

### Steps Taken:

1.  **`index.html` 원본 상태로 복원:** 이전 `replace` 명령어의 실수로 인해 `index.html`의 HTML 구조가 깨졌던 것을 원본 상태로 복원했습니다.
2.  **`index.html`에 Base64 테스트 이미지 직접 삽입:** JavaScript나 외부 네트워크의 영향을 배제하고 순수 HTML/CSS만으로 이미지가 표시되는지 확인하기 위해, `index.html`의 두 `<img>` 태그 `src` 속성을 Base64 인코딩된 검정색 사각형 SVG 데이터로 직접 교체했습니다. 이 테스트를 통해 이미지가 HTML/CSS 수준에서 전혀 표시되지 않는 근본적인 원인을 파악하고자 합니다.
3.  **`style.css`에 `display: block !important;` 추가:** CSS 규칙에 의해 이미지가 숨겨지거나 올바르게 렌더링되지 않을 가능성을 배제하기 위해, `.animal img` 셀렉터에 `display: block !important;`를 추가하여 이미지가 확실히 블록 요소로 표시되도록 강제했습니다.
4.  **배포 구성 확인:** `.idx/mcp.json` 파일에 Firebase 배포를 위한 설정이 올바르게 구성되어 있음을 확인했습니다.

### Next Steps:

1.  이제 애플리케이션의 미리보기에서 검정색 사각형 이미지가 표시될 것으로 **예상됩니다.** 만약 이 상태에서도 이미지가 전혀 보이지 않는다면, 이는 브라우저 설정, 확장 프로그램, 또는 Firebase Studio 환경 자체의 렌더링 문제일 가능성이 높습니다.
2.  모든 변경 사항을 커밋하고 GitHub에 푸시합니다.
3.  배포를 진행합니다.

## How to Deploy to Firebase:

당신의 애플리케이션은 Firebase CLI를 사용하여 배포할 수 있습니다. Firebase CLI가 설치 및 구성되어 있다고 가정하면, 일반적으로 다음 명령어를 실행합니다:

```bash
firebase deploy
```

Firebase Studio 환경에서는 `npx firebase-tools@latest experimental:mcp`를 사용하도록 설정되어 있습니다. `mcp.json` 구성이 이를 가리키고 있으므로, 이 명령어를 사용하여 배포를 진행할 수 있습니다.

## How to Restore Actual Animal Images:

테스트가 완료되고 이미지가 정상적으로 표시되는 것이 확인되면, `index.html`의 Base64 테스트 이미지를 제거하고 `main.js`에 이전의 동적 Unsplash 이미지 URL 또는 직접 링크된 동물 이미지를 다시 적용해야 합니다.

`main.js` 파일의 `animals` 배열을 다음 내용으로 되돌리고 `index.html`의 `<img>` 태그 `src=""`를 비워두면 됩니다:

```javascript
const animals = [
    { name: "사자", img: "https://source.unsplash.com/featured/200x200/?lion", wins: 0 },
    // ... 나머지 동물들
];
```
또는, 각 동물에 맞는 특정 이미지 URL로 직접 교체할 수 있습니다.
```javascript
    { name: "사자", img: "YOUR_LION_IMAGE_URL_HERE", wins: 0 },
```
