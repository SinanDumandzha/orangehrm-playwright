import { test, expect } from '../../fixtures/hooks-fixture';

test.describe('[My Info] - Profile Picture Upload', () => {
    test('Upload profile picture by clicking placeholder image.', async ({
        gotoUrl,
        leftNavPage,
        myInfoPage,
    }) => {
        await leftNavPage.openMyInfoModule();
        await myInfoPage.openProfilePictureSettings();

        const defaultSrc = await myInfoPage.getProfilePictureSrc();

        await myInfoPage.clickProfilePicture();
        await myInfoPage.uploadProfilePicture('profile-picture.png');    
        await myInfoPage.save();

        const updatedSrc = await myInfoPage.getProfilePictureSrc();

        expect(updatedSrc).not.toEqual(defaultSrc);
        expect(updatedSrc).not.toContain('default_photo');
    });

    test('Upload profile picture by clicking + button.', async ({
        gotoUrl,
        leftNavPage,
        myInfoPage,
    }) => {
        await leftNavPage.openMyInfoModule();
        await myInfoPage.openProfilePictureSettings();

        const defaultSrc = await myInfoPage.getProfilePictureSrc();

        await myInfoPage.clickAddPictureButton();
        await myInfoPage.uploadProfilePicture('profile-picture.png');           
        await myInfoPage.save();

        const updatedSrc = await myInfoPage.getProfilePictureSrc();

        expect(updatedSrc).not.toEqual(defaultSrc);
        expect(updatedSrc).not.toContain('default_photo');
    });
});