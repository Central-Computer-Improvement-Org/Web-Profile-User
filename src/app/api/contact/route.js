export async function GET(request) {
    const responseData = {
        code: 200,
        status: "SUCCESS",
        recordsTotal: 4,
        data: [
            {
                id: "CNT-458163-1",
                platform: "Gmail",
                iconUri: "assets/uploads/contact/logo/logo-gmail.png",
                visitedCount: "1500",
                isActive: true,
                created_at: "2024-04-10 08:00:00",
                updated_at: "2024-04-10 08:00:00",
            },
            {
                id: "CNT-458163-2",
                platform: "Instagram",
                iconUri: "assets/uploads/contact/logo/logo-instagram.png",
                visitedCount: "1000",
                isActive: true,
                created_at: "2024-04-13 08:00:00",
                updated_at: "2024-04-13 08:00:00",
            },
            {
                id: "CNT-458163-3",
                platform: "Line",
                iconUri: "assets/uploads/contact/logo/logo-line.png",
                visitedCount: "800",
                isActive: true,
                created_at: "2024-04-12 08:00:00",
                updated_at: "2024-04-12 08:00:00",
            },
            {
                id: "CNT-458163-4",
                platform: "LinkedIn",
                iconUri: "assets/uploads/contact/logo/logo-linkedin.png",
                visitedCount: "1200",
                isActive: true,
                created_at: "2024-04-11 08:00:00",
                updated_at: "2024-04-11 08:00:00",
            },

        ],
        error: null,
    };
    return new Response(JSON.stringify(responseData));
}