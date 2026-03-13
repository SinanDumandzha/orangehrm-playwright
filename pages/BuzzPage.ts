import { Locator, Page } from '@playwright/test';

export class BuzzPage {
    readonly page: Page;
    readonly buzzHeading: Locator;
    readonly buzzNewsFeed: Locator;
    readonly profilePicture: Locator;
    readonly buzzPost: Locator;
    readonly postTextbox: Locator;
    readonly postButton: Locator;
    readonly sharePhotosButton: Locator;
    readonly shareVideoButton: Locator;
    readonly mostRecentPostsTab: Locator;
    readonly mostLikedPostsTab: Locator;
    readonly mostCommentedPostsTab: Locator;
    readonly upcomingAnniversaries: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buzzHeading = page.getByRole('heading', { name: 'Buzz' });
        this.buzzNewsFeed = page.getByText('Buzz Newsfeed');
        this.profilePicture = page.getByRole('img', { name: 'profile picture' }).nth(1);
        this.buzzPost = page.locator('.oxd-buzz-post');
        this.postTextbox = page.getByRole('textbox', { name: "What's on your mind?" });
        this.postButton = page.getByRole('button', { name: 'Post', exact: true });
        this.sharePhotosButton = page.getByRole('button', { name: 'Share Photos' });
        this.shareVideoButton = page.getByRole('button', { name: 'Share Video' });
        this.mostRecentPostsTab = page.getByRole('button', { name: 'Most Recent Posts' });
        this.mostLikedPostsTab = page.getByRole('button', { name: 'Most Liked Posts' });
        this.mostCommentedPostsTab = page.getByRole('button', { name: 'Most Commented Posts' });
        this.upcomingAnniversaries = page.getByText('Upcoming Anniversaries');
    }
}