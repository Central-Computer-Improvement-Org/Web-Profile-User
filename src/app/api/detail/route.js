export async function GET(request) {
   const responseData = {
      code: 200,
      status: "SUCCESS",
      recordsTotal: 6,
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
            id: "NWS-458163-1",
            title:
               "Menuju Era Baru : Bagaimana Teknologi Mengubah Cara Kita Hidup dan Bekerja",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            detailNewsMedia: [
               "assets/uploads/news/newsDua/newsOne1.jpg",
               "assets/uploads/news/newsDua/newsOne2.jpg",
               "assets/uploads/news/newsDua/newsOne3.jpg"
            ],
            visitedCount: 100,
            createdAt: "2023-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
         },
      ],
      error: null,
   };
   return new Response(JSON.stringify(responseData));
}
