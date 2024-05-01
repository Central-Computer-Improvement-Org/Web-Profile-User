export async function GET(request) {
    const responseData = {
        code: 200,
        status: "SUCCESS",
        recordsTotal: 6,
        data: [
            {
                id: "DVS-458163-1",
                name: "Web Development",
                description: "Divisi yang berfokus pada pembelajaran pengembangan website terbaru dengan memperhatikan beberapa struktur didalamnya.",
                logoUri: "/assets/uploads/division/logo-divisi-web.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "DVS-458163-2",
                name: "Design",
                description: "Divisi yang berfokus mempelajari UI/UX melalui beberapa tahapan didalamnya sehingga divisi design memiliki tujuan atau memberikan output berupa sebuah desain produk sebaik mungkin.",
                logoUri: "/assets/uploads/division/logo-divisi-design.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "DVS-458163-3",
                name: "Games and Gadget",
                description: "Divisi Games and Gadget merupakan divisi yang berfokus dalam pengembangan games dan juga kegiatan- kegiatan lainnya yang berhubungan dengan video games.",
                logoUri: "/assets/uploads/division/logo-divisi-gng.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "DVS-458163-4",
                name: "Network",
                description: "Divisi yang berfokus pada pengaturan dan manajemen jaringan komputer sehingga mencapai hasil yang optimal.",
                logoUri: "/assets/uploads/division/logo-divisi-network.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "DVS-458163-5",
                name: "Media Management",
                description: "Divisi ini yang bergerak di bidang media dari CCI, seperti content creator, content planner, design content, disb. Divisi ini berfokus mempelajari bagaimana mengatur, memanagement dan mendesain sebuah media.",
                logoUri: "/assets/uploads/division/logo-divisi-mm.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "DVS-458163-6",
                name: "Data Research",
                description: "Divisi yang berfokus pada proses dimana mengumpulkan, mengukur, dan menganalisis data dari berbagai sumber untuk mendapatkan wawasan atau pemahaman terhadap suatu hal.",
                logoUri: "/assets/uploads/division/logo-divisi-ds.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            }
        ],
        error: null,
    };
    return new Response(JSON.stringify(responseData));
}