import { test, expect } from '../../fixtures/hooks-fixture';
import apiPathData from '../../data/api-data/api-path-data.json';
import bookerApiModuleData from '../../data/api-data/booker-api-module-data.json';

test("[Restful-Booker > Booking] Verify that the user is able to fetch all the booking IDs using GET and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request }) => {
        const response = await request.get(apiPathData.booking_path);
        const bookingIdsJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');
        expect(bookingIdsJsonResponse).not.toBeNull();
        expect(response.headers()['content-type']).toBe(bookerApiModuleData.content_type);
    }
);

test("[Restful-Booker > Booking] Verify that the user is able to fetch booking details for a booking ID using GET and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request }) => {
        const response = await request.get(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id}`);
        const bookingJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');
        expect(bookingJsonResponse).not.toBeNull();
        expect(bookingJsonResponse.firstname).toEqual(bookerApiModuleData.firstname);
    }
);

test("[Restful-Booker > Booking] Verify that the user is able to create new booking using POST and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request }) => {
        const response = await request.post(apiPathData.booking_path, {
            data: bookerApiModuleData.create_booking_body}
        );
        const createBookingJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(createBookingJsonResponse.booking).toMatchObject(bookerApiModuleData.create_booking_body);
});

// 1st way Basic Authentication
test("[Restful-Booker > Booking] Verify that the user is able to update existing booking using PUT and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request, commonApiUtils }) => {
        const token = await commonApiUtils.createToken();
        const response = await request.put(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id2}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data: bookerApiModuleData.update_booking_body
        });
        const updateBookingJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(updateBookingJsonResponse).toMatchObject(bookerApiModuleData.update_booking_body);
    }
);

// 2nd way Authentication
/* test("[Restful-Booker > Booking] Verify that the user is able to update existing booking using PUT and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request }) => {
        const response = await request.put(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id2}`, {
            data: bookerApiModuleData.update_booking_body}
        );
        const updateBookingJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(updateBookingJsonResponse).toMatchObject(bookerApiModuleData.update_booking_body);
    }
); */

test("[Restful-Booker > Booking] Verify that the user is able to partially update existing booking using PATCH and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request, commonApiUtils }) => {
        const token = await commonApiUtils.createToken();
        const response = await request.patch(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id2}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data: bookerApiModuleData.partial_update_booking_body
        });
        const partiallyUpdateBookingJsonResponse = await response.json();
        expect(response.status()).toBe(200);
        expect(partiallyUpdateBookingJsonResponse.firstname).toMatch(bookerApiModuleData.partial_update_booking_body.firstname);
        expect(partiallyUpdateBookingJsonResponse.lastname).toMatch(bookerApiModuleData.partial_update_booking_body.lastname);
    }
);

test("[Restful-Booker > Booking] Verify that the user is able to delete existing booking using DELETE and receive valid response.", 
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test Case Link",
            description: "testCaseLink"
        }
    },
    async({ request, commonApiUtils }) => {
        const token = await commonApiUtils.createToken();
        const response = await request.delete(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id3}`, {
            headers: {
                Cookie: `token=${token}`
            }
        });
        expect(response.status()).toBe(201);
        expect(response.statusText()).toBe("Created");
        const getBookingResponse = await request.get(`${apiPathData.booking_path}/${bookerApiModuleData.booking_id3}`);
        expect(getBookingResponse.status()).toBe(404);
        expect(getBookingResponse.statusText()).toBe("Not Found");
    }
);