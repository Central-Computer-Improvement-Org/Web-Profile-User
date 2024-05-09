export async function GET(request) {
   const responseData = {
      code: 200,
      status: "SUCCESS",
      recordsTotal: 5,
      data: [
         {
            id: "NWS-458163-1",
            title:
               "Menuju Era Baru : Bagaimana Teknologi Mengubah Cara Kita Hidup dan Bekerja",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsSatu/newsOne1.jpg",
               "assets/uploads/news/newsSatu/newsOne2.jpg",
               "assets/uploads/news/newsSatu/newsOne3.jpg"
            ],
            visitedCount: 100,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
         {
            id: "NWS-458163-2",
            title:
               "Teknologi Blockchain : Solusi Baru Dalam Dunia Bisnis dan Keuangan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsDua/newsTwo1.jpg",
               "assets/uploads/news/newsDua/newsTwo2.jpg",
               "assets/uploads/news/newsDua/newsTwo3.jpg"
            ],
            visitedCount: 200,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
         {
            id: "NWS-458163-3",
            title:
               "Mengenal Teknologi Quantum : Apa Itu dan Bagaimana Cara Kerjanya",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsTiga/newsThree1.jpg",
               "assets/uploads/news/newsTiga/newsThree2.jpg",
               "assets/uploads/news/newsTiga/newsThree3.jpg"
            ],
            visitedCount: 300,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
         {
            id: "NWS-458163-4",
            title:
               "Teknologi 5G : Apa Saja Manfaatnya dan Bagaimana Cara Kerjanya",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsEmpat/newsFour1.jpg",
               "assets/uploads/news/newsEmpat/newsFour2.jpg",
               "assets/uploads/news/newsEmpat/newsFour3.jpg"
            ],
            visitedCount: 400,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
         {
            id: "NWS-458163-5",
            title:
               "Teknologi AI : Bagaimana Kecerdasan Buatan Mengubah Dunia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsLima/newsFive1.jpg",
               "assets/uploads/news/newsLima/newsFive2.jpg",
               "assets/uploads/news/newsLima/newsFive3.jpg"
            ],
            visitedCount: 500,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
      ],
      error: null,
   };
   return new Response(JSON.stringify(responseData));
}
