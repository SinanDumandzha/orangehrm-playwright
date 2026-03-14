import { test, expect } from '../../fixtures/hooks-fixture';

test.describe('[Buzz] Module UI Validation', () => {
    test('Verify Buzz page elements.', async ({ gotoUrl, leftNavPage, buzzPage, header }) => {
        await leftNavPage.openBuzzModule();

        await expect(buzzPage.buzzHeading).toBeVisible();
        await expect(buzzPage.buzzNewsFeed).toBeVisible();
        await expect(buzzPage.profilePicture).toBeVisible();
        await expect(buzzPage.buzzPost.first()).toBeVisible();
        await expect(buzzPage.postTextbox).toBeVisible();
        await expect(buzzPage.postButton).toBeVisible();
        await expect(buzzPage.sharePhotosButton).toBeVisible();
        await expect(buzzPage.shareVideoButton).toBeVisible();
        await expect(buzzPage.mostRecentPostsTab).toBeVisible();
        await expect(buzzPage.mostLikedPostsTab).toBeVisible();
        await expect(buzzPage.mostCommentedPostsTab).toBeVisible();
        await expect(buzzPage.upcomingAnniversaries).toBeVisible();

        await header.openUserDropdown();
        await header.clickLogout();
    });
});

test('[Buzz] Verify user can add a text post in Buzz and it appears in feed.', async ({ gotoUrl, leftNavPage, buzzPage, header }) => {
      await leftNavPage.openBuzzModule();

      await buzzPage.mostRecentPostsTab.click();

      const postText = `Automation Buzz Post ${Date.now()}`;
      await buzzPage.createTextPost(postText);
      await expect(buzzPage.post).toBeVisible();

      const newPost = buzzPage.post;
      await expect(newPost).toContainText(postText);

      await expect(buzzPage.profilePicture).toBeVisible();
      await expect(newPost.locator(buzzPage.postLikeIcon).first()).toBeVisible();
      await expect(newPost.locator(buzzPage.postLikesLabel).first()).toBeVisible();
      await expect(newPost.locator(buzzPage.postCommentsLabel).first()).toBeVisible();
      await expect(newPost.locator(buzzPage.postSharesLabel).first()).toBeVisible();

      const username = newPost.locator(buzzPage.postUsername).first();
      await expect(username).toBeVisible();
      await expect(header.usernameText).toBeVisible();
      const headerName = await header.usernameText.innerText();
      const postName = await username.innerText();
      headerName.split(' ').forEach(name => {
          expect(postName).toContain(name);
      });

      await header.openUserDropdown();
      await header.clickLogout();
});