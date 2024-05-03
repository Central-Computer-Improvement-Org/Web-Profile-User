export async function GET(request) {
    const responseData = {
        code: 200,
        status: "SUCCESS",
        recordsTotal: 5,
        data: [
            {
                id: "PJT-458163-1",
                name: "Nama Project 1",
                description: "Postify is the SMM management platform that lets them create a comprehensive social media strategy they can manage all in one place.",
                iconUri: "assets/uploads/projects/icons/logo-project.png",
                imageUri: "assets/uploads/projects/thumbnails/projects-thumbnail.png",
                productionUri: "https://telkomuniversity.ac.id/",
                repositoryUri: "https://github.com/sandhikagalih",
                budget: 1000000,
                createdAt: "2024-01-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "PJT-458163-2",
                name: "Nama Project 2",
                description: "Postify is the SMM management platform that lets them create a comprehensive social media strategy they can manage all in one place more that our universi on that face, in interstellar for our coming in the future wolrd in you hand.",
                iconUri: "assets/uploads/projects/icons/logo-project.png",
                imageUri: "assets/uploads/projects/thumbnails/projects-thumbnail.png",
                productionUri: "https://www.cciunitel.com/",
                repositoryUri: "https://github.com/angelabauer",
                budget: 2500000,
                createdAt: "2022-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "PJT-458163-3",
                name: "Nama Project 3",
                description: "Postify is the SMM management platform that lets them create a comprehensive social media strategy they can manage all in one place.",
                iconUri: "assets/uploads/projects/icons/logo-project.png",
                imageUri: "assets/uploads/projects/thumbnails/projects-thumbnail.png",
                productionUri: "https://www.cciunitel.com/",
                repositoryUri: "https://github.com/angelabauer",
                budget: 5000000,
                createdAt: "2023-02-26 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            },
            {
                id: "PJT-458163-4",
                name: "Nama Project",
                description: "Postify is the SMM management platform that lets them create a comprehensive social media strategy they can manage all in one place wdwdw wdwd wdw.",
                iconUri: "assets/uploads/projects/icons/logo-project.png",
                imageUri: "assets/uploads/projects/thumbnails/projects-thumbnail.png",
                productionUri: "https://www.cciunitel.com/",
                repositoryUri: "https://github.com/angelabauer",
                budget: 4000000,
                createdAt: "2024-02-01 21:28:37.261134+01:00",
                updatedAt: "2013-02-26 21:28:37.261134+01:00",
            }
        ],
        error: null,
    };
    return new Response(JSON.stringify(responseData));
}