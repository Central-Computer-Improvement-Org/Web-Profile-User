export async function GET(request) {
    const responseData = {
        code: 200,
        status: "SUCCESS",
        recordsTotal: 5,
        data: [
            {
                id: "NWS-458163-1",
                title: "AI dalam Kehidupan Sehari-Hari",
                description: "Artificial Intelligence (AI) adalah sebuah teknologi yang memungkinkan mesin untuk belajar dari pengalaman, menyesuaikan diri terhadap perubahan, dan melakukan tugas seperti manusia. AI telah menjadi bagian dari kehidupan sehari-hari kita, mulai dari asisten virtual hingga mobil otonom.",
                media_uri: "assets/uploads/news/news-thumbnail-1.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "NWS-458163-2",
                title: "Pengaruh VR dalam Pekerjaan Profesional",
                description: "Virtual Reality (VR) adalah teknologi yang memungkinkan pengguna untuk berinteraksi dengan lingkungan yang disimulasikan oleh komputer. VR telah membawa perubahan besar dalam berbagai bidang, termasuk pekerjaan profesional.",
                media_uri: "assets/uploads/news/news-thumbnail-2.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "NWS-458163-3",
                title: "Pentingnya Keamanan Data dalam Berselancar di Internet",
                description: "Data security adalah hal yang sangat penting dalam dunia digital. Keamanan data melibatkan praktik, prosedur, dan teknologi yang dirancang untuk melindungi data dari kerusakan, kehilangan, atau akses yang tidak sah.",
                media_uri: "assets/uploads/news/news-thumbnail-1.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "NWS-458163-4",
                title: "Perkembangan Teknologi Blockchain",
                description: "Blockchain adalah teknologi yang memungkinkan pengguna untuk mentransfer aset digital tanpa perantara. Blockchain telah membawa perubahan besar dalam berbagai bidang, termasuk keuangan, logistik, dan kesehatan.",
                media_uri: "assets/uploads/news/news-thumbnail-2.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "NWS-458163-5",
                title: "Pemanfaatan Big Data dalam Bisnis",
                description: "Big Data adalah istilah yang digunakan untuk mendeskripsikan kumpulan data yang sangat besar dan kompleks yang sulit untuk dikelola dengan menggunakan alat tradisional. Big Data telah menjadi bagian penting dalam bisnis modern.",
                media_uri: "assets/uploads/news/news-thumbnail-1.png",
                createdAt: "2013-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            }
        ],
        error: null,
    };
    return new Response(JSON.stringify(responseData));
}