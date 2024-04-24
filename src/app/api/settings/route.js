export async function GET(request) {
    const responseData = {
        code: 200,
        status: "SUCCESS",
        recordsTotal: 1,
        data: [
            {
                id: "STG-458163",
                address: "Telkom University, Bandung",
                name: "Central Computer Improvement",
                description: "Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada bidang ICT (Information, Communication and Technology).",
                logoUri: "assets/uploads/settings/logo.svg",
                titleWebsite: "Central Computer Improvement",
                keyword: "cci", // masih dummy karena belum fix
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
        ],
        error: null,
    };
    return new Response(JSON.stringify(responseData));
}