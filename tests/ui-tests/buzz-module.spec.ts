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