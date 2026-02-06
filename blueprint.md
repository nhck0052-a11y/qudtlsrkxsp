# blueprint.md

## Project Overview

This project implements an "Animal World Cup" game, allowing users to choose their favorite animals in a series of matchups to determine a winner. The application is built using modern web standards (HTML, CSS, JavaScript) and is configured for deployment with Firebase.

## Style, Design, and Features

*   **Responsive Design:** Adapts to different screen sizes.
*   **Animal Matchups:** Presents two animal images and names for the user to choose between.
*   **Dynamic Rounds:** Progresses through rounds until a single winner is determined.
*   **Ranking System:** Displays a final ranking of animals based on their wins.
*   **Modern JavaScript:** Uses ES Modules, `async/await`, and other modern syntax.
*   **Image Placeholders:** Currently uses `picsum.photos` for images to ensure they display.

## Current Plan for Requested Change: Fix Images and Deploy

The user requested to fix the issue where animal images were not appearing and then to proceed with deployment.

### Steps Taken:

1.  **Identified Issue:** The `main.js` file was using `imgur.com` links for animal images, which were likely broken or inaccessible.
2.  **Replaced Image Sources:** Updated the `animals` array in `main.js` to use placeholder images from `picsum.photos`. This ensures images are now displaying, albeit as generic images.
3.  **Verified Deployment Configuration:** Confirmed that the `.idx/mcp.json` file already contains the correct Firebase configuration for deployment.

### Next Steps:

1.  The application is now in a state where images should be appearing in the preview (using placeholders).
2.  To deploy the application to Firebase, the user can use the Firebase CLI, which is already configured.

## How to Deploy to Firebase:

You can deploy your application using the Firebase CLI. Assuming Firebase CLI is installed and configured, you would typically run:

```bash
firebase deploy
```

If you are within Firebase Studio, the environment is already set up to use `npx firebase-tools@latest experimental:mcp`. The `mcp.json` configuration points to this. This suggests the deployment might be integrated into the Firebase Studio's own deployment workflow.

## How to Replace Placeholder Images with Actual Animal Images:

To replace the `picsum.photos` placeholder images with actual animal images:

1.  Find suitable, publicly accessible direct image links for each animal (e.g., from Unsplash, Pexels, or your own hosted images).
2.  Edit the `main.js` file and update the `img` property for each animal in the `animals` array with the new image URL.

Example:
```javascript
    { name: "사자", img: "YOUR_LION_IMAGE_URL_HERE", wins: 0 },
```