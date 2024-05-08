export async function GET(request) {
  const responseData = {
    code: 200,
    status: "SUCCESS",
    recordsTotal: 5,
    data: [
      {
        id: "NWS-458164-1",
        title: "AMD menghadirkan fitur AI",
        subtitle: "AMD memperkenalkan teknologi kecerdasan buatan (AI) baru dalam prosesor terbaru mereka.",
        description: "Advanced Micro Devices (AMD) mengumumkan peluncuran prosesor terbaru mereka yang dilengkapi dengan teknologi kecerdasan buatan (AI). Teknologi ini memungkinkan prosesor untuk memprediksi dan memproses data dengan lebih cepat dan efisien.",
        media_uri: "assets/uploads/news/news-thumbnail-1.png",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458164-2",
        title: "Analisis Laptop",
        subtitle: "Para ahli teknologi memberikan pandangan mereka tentang tren terbaru dalam industri laptop.",
        description: "Para ahli teknologi memberikan analisis mendalam tentang tren terbaru dalam industri laptop. Mereka membahas tentang peningkatan kinerja, inovasi desain, dan perkembangan terkini dalam teknologi perangkat keras dan perangkat lunak.",
        media_uri: "assets/uploads/news/news-thumbnail-2.png",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458164-3",
        title: "Analisis Pengaruh Apple Vision Pro",
        subtitle: "Analisis dampak dari peluncuran Apple Vision Pro terhadap pasar teknologi.",
        description: "Para analis pasar membahas dampak peluncuran Apple Vision Pro terhadap pasar teknologi. Mereka menganalisis prospek produk baru tersebut, potensi pengaruhnya terhadap saham Apple, dan respons pasar terhadap fitur-fitur inovatif yang ditawarkan oleh Apple Vision Pro.",
        media_uri: "assets/uploads/news/news-thumbnail-1.png",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
    ],
    error: null,
  };
  return new Response(JSON.stringify(responseData));
}