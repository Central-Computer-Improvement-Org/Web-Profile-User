export async function GET(request) {
  const responseData = {
    code: 200,
    status: "SUCCESS",
    recordsTotal: 8,
    data: [
      // ketua web dev 
      {
        nim: "12345678910",
        roleId: {
          id: 1,
          name: "ketua",
        },
        divisionId: {
          id: "DVS-458163-1",
          name: "Web Development",
          description:
            "Divisi Web Development di UKM kampus bertugas membuat dan menjaga situs web atau aplikasi web organisasi. Mereka merancang, mengembangkan, dan memastikan keamanan serta kinerja situs web tersebut. Kerja sama dengan divisi lain untuk memahami kebutuhan mereka juga menjadi bagian dari tugas mereka. Dengan divisi ini, UKM kampus dapat meningkatkan kehadiran online mereka dan memberikan layanan yang lebih efektif kepada anggota.",
          logoUri: "assets/uploads/division/logo/logo-divisi-web.png",
        },
        name: "Tasya Dewi",
        email: "tsaya.siifa@gmail.com",
        major: "S1 Informatika",
        linkedinUri: "https://www.linkedin.com/company/cci-telkomuniversity/",
        phoneNumber: "083167889342",
        profileUri: "assets/uploads/member/profile-division.png",
        isActive: true,
        yearUniversityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        yearCommunityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      // wakil web dev
      {
        nim: "12345678911",
        roleId: {
          id: 2,
          name: "wakil",
        },
        divisionId: {
          id: "DVS-458163-1",
          name: "Web Development",
          description:
            "Divisi Web Development di UKM kampus bertugas membuat dan menjaga situs web atau aplikasi web organisasi. Mereka merancang, mengembangkan, dan memastikan keamanan serta kinerja situs web tersebut. Kerja sama dengan divisi lain untuk memahami kebutuhan mereka juga menjadi bagian dari tugas mereka. Dengan divisi ini, UKM kampus dapat meningkatkan kehadiran online mereka dan memberikan layanan yang lebih efektif kepada anggota.",
          logoUri: "assets/uploads/division/logo/logo-divisi-web.png",
        },
        name: "Nurman Abdi",
        email: "Nurmansyah@gmail.com",
        major: "S1 Informatika",
        linkedinUri: "https://www.linkedin.com/company/cci-telkomuniversity/",
        phoneNumber: "083167889342",
        profileUri: "assets/uploads/member/profile-division.png",
        isActive: true,
        yearUniversityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        yearCommunityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      // ketua design
      {
        nim: "12345678910",
        roleId: {
          id: 1,
          name: "ketua",
        },
        divisionId: {
          id: "DVS-458163-2",
          name: "Design",
          description: "Divisi yang berfokus mempelajari UI/UX melalui beberapa tahapan didalamnya sehingga divisi design memiliki tujuan atau memberikan output berupa sebuah desain produk sebaik mungkin.",
          logoUri: "assets/uploads/division/logo/logo-divisi-design.png",
        },
        name: "Kenzo Tiyu",
        email: "aji123@gmail.com",
        major: "S1 Informatika",
        linkedinUri: "https://www.linkedin.com/company/cci-telkomuniversity/",
        phoneNumber: "083167889342",
        profileUri: "assets/uploads/member/profile-division.png",
        isActive: true,
        yearUniversityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        yearCommunityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      // wakil design
      {
        nim: "12345678911",
        roleId: {
          id: 2,
          name: "wakil",
        },
        divisionId: {
          id: "DVS-458163-2",
          name: "Design",
          description: "Divisi yang berfokus mempelajari UI/UX melalui beberapa tahapan didalamnya sehingga divisi design memiliki tujuan atau memberikan output berupa sebuah desain produk sebaik mungkin.",
          logoUri: "assets/uploads/division/logo/logo-divisi-design.png",
        },
        name: "Rizky",
        email: "rizkifajar@gmail.com",
        major: "S1 Informatika",
        linkedinUri: "https://www.linkedin.com/company/cci-telkomuniversity/",
        phoneNumber: "083167889342",
        profileUri: "assets/uploads/member/profile-division.png",
        isActive: true,
        yearUniversityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        yearCommunityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
      // member
      {
        nim: "332900381123",
        roleId: {
          id: 3,
          name: "member",
        },
        divisionId: {
          id: 1,
          name: "Web Development",
          description:
            "Divisi Web Development di UKM kampus bertugas membuat dan menjaga situs web atau aplikasi web organisasi. Mereka merancang, mengembangkan, dan memastikan keamanan serta kinerja situs web tersebut. Kerja sama dengan divisi lain untuk memahami kebutuhan mereka juga menjadi bagian dari tugas mereka. Dengan divisi ini, UKM kampus dapat meningkatkan kehadiran online mereka dan memberikan layanan yang lebih efektif kepada anggota.",
          logoUri: "assets/uploads/division/logo/logo-divisi-web.png",
        },
        name: "Muamar Zidan Tri Antoro",
        email: "codeofomiru11@gmail.com",
        major: "S1 Informatika",
        linkedinUri: "https://www.linkedin.com/in/muamar-zidan-tri-antoro-b64918243/",
        phoneNumber: "083167889342",
        profileUri: "assets/uploads/member/profile-division.png",
        isActive: true,
        yearUniversityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        yearCommunityEnrolled: "2013-02-26 21:28:37.261134+01:00",
        createdAt: "2013-02-26 21:28:37.261134+01:00",
        updatedAt: "2013-02-26 21:28:37.261134+01:00",
      },
    ],
    error: null,
  };
  return new Response(JSON.stringify(responseData));
}
