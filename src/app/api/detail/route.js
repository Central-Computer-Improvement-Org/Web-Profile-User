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
        mediaUri: {
          detailNewsMedia : [
            {
              title:
                "Menuju Era Baru : Bagaimana Teknologi Mengubah Cara Kita Hidup dan Bekerja",
              mediaUri: [
                { img: "assets/uploads/news/newsSatu/newsOne1.jpg" },
                { img: "assets/uploads/news/newsSatu/newsOne2.jpg" },
                { img: "assets/uploads/news/newsSatu/newsOne3.jpg" },
              ],
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              createdAt: "2023-02-26 21:28:37.261134+01:00",
              updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
          ],
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        visitedCount: 100,
        createdAt: "2023-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458163-2",
        title: "Pengaruh VR dalam Pekerjaan Profesional",
        mediaUri: "assets/uploads/news/newsDua/newsTwo1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        visitedCount: 200,
        detailNewsMedia: [
          {
            title: "Pengaruh VR dalam Pekerjaan Profesional",
            mediaUri: [
              { img: "assets/uploads/news/newsDua/newsTwo1.jpg" },
              { img: "assets/uploads/news/newsDua/newsTwo2.jpg" },
              { img: "assets/uploads/news/newsDua/newsTwo3.jpg" },
            ],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            createdAt: "2001-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
          },
        ],
        createdAt: "2001-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458163-3",
        title: "Pentingnya Keamanan Data dalam Berselancar di Internet",
        mediaUri: "assets/uploads/news/newsTiga/newsThree1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        visitedCount: 300,
        detailNewsMedia: [
          {
            title: "Pentingnya Keamanan Data dalam Berselancar di Internet",
            mediaUri: [
              { img: "assets/uploads/news/newsTiga/newsThree1.jpg" },
              { img: "assets/uploads/news/newsTiga/newsThree2.jpg" },
              { img: "assets/uploads/news/newsTiga/newsThree3.jpg" },
            ],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            createdAt: "2022-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
          },
        ],
        createdAt: "2022-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458163-4",
        title: "Perkembangan Teknologi Blockchain",
        mediaUri: "assets/uploads/news/newsEmpat/newsFour1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        visitedCount: 400,
        detailNewsMedia: [
          {
            title: "Perkembangan Teknologi Blockchain",
            mediaUri: [
              { img: "assets/uploads/news/newsEmpat/newsFour1.jpg" },
              { img: "assets/uploads/news/newsEmpat/newsFour2.jpg" },
              { img: "assets/uploads/news/newsEmpat/newsFour3.jpg" },
            ],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            createdAt: "2021-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
          },
        ],
        createdAt: "2021-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      {
        id: "NWS-458163-5",
        title: "Pemanfaatan Big Data dalam Bisnis",
        mediaUri: "assets/uploads/news/newsLima/newsFive1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        visitedCount: 500,
        detailNewsMedia: [
          {
            title: "Pemanfaatan Big Data dalam Bisnis",
            mediaUri: [
              { img: "assets/uploads/news/newsLima/newsFive1.jpg" },
              { img: "assets/uploads/news/newsLima/newsFive2.jpg" },
              { img: "assets/uploads/news/newsLima/newsFive3.jpg" },
            ],
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            createdAt: "2020-02-26 21:28:37.261134+01:00",
            updatedAt: "2013-02-26 21:28:37.261134+01:00",
          },
        ],
        createdAt: "2020-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
    ],
    error: null,
  };
  return new Response(JSON.stringify(responseData));
}
