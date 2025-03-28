export interface ProjectDetal {
    id: number;
    title: string;
    description: string;
    image: string[];
    tags: string[];
    demoLink: string;
    category: string;
    githubLink?: string;
    position: string;
    features: { client: string[]; admin: string[] };
}

export const projects: ProjectDetal[] = [
    {
        id: 1,
        title: "Mobile Mart - E-commerce Website",
        description:
            "An e-commerce platform with product listing, user authentication, order management, and online payment using VN Pay.",
        image: [
            "/projects/mobile-mart/HOME.jpg",
            "/projects/mobile-mart/1.jpg",
            "/projects/mobile-mart/2.jpg",
            "/projects/mobile-mart/3.jpg",
            "/projects/mobile-mart/4.jpg",
            "/projects/mobile-mart/5.jpg",
            "/projects/mobile-mart/6.jpg"
        ],
        tags: [
            "ReactJS",
            "Tailwind CSS",
            "Ant-design",
            "Framer motion",
            "Redux",
            "Node.js",
            "ExpressJS",
            "MySQL",
            "JWT"
        ],
        demoLink: "https://mobile-mart.vercel.app/",
        githubLink: "https://github.com/Hung24855/MobileMart",
        category: "E-commerce",
        position: "Fullstack",
        features: {
            client: [
                "Sign-in",
                "Sign-up",
                "Forgot password",
                "Order and pay online with VN Pay",
                "Search products",
                "Product reviews",
                "Manage user information",
                "Track orders"
            ],
            admin: [
                "Manage products",
                "Manage orders",
                "Manage categories",
                "Manage sliders",
                "Manage user permissions",
                "View sales statistics"
            ]
        }
    },
    {
        id: 2,
        title: "Mọt Phim - Movie Streaming Platform",
        description:
            "A movie streaming platform featuring real-time chat, favorite movie notifications, and automate content crawling.",
        image: [
            "/projects/motphim/HOME.jpg",
            "/projects/motphim/HOME_1.jpg",
            "/projects/motphim/HOME_2.jpg",
            "/projects/motphim/DANG_KY.jpg",
            "/projects/motphim/MOVIE_DETAIL_1.jpg",
            "/projects/motphim/MOVIE_DETAIL_2.jpg",
            "/projects/motphim/PHAN_QUYEN.jpg",
            "/projects/motphim/PHIM_LE.jpg",
            "/projects/motphim/PHONG_XEM_PHIM_1.jpg",
            "/projects/motphim/PHONG_XEM_PHIM_2.jpg",
            "/projects/motphim/THONG_BAO.jpg",
            "/projects/motphim/TRANG_CA_NHAN.jpg",
            "/projects/motphim/TRANG_QUAN_TRI_1.jpg",
            "/projects/motphim/TRANG_QUAN_TRI_2.jpg",
            "/projects/motphim/TRANG_QUAN_TRI_3.jpg",
            "/projects/motphim/TRANG_QUAN_TRI_4.jpg"
        ],
        tags: ["Next.js 14", "React Query", "Tailwind CSS", "PostgreSQL", "Firebase", "Next-auth"],
        demoLink: "https://motphim-ten.vercel.app/",
        githubLink: "https://github.com/Hung24855/motphim",
        category: "Entertainment",
        position: "Fullstack",
        features: {
            client: [
                "Log in",
                "Register",
                "Forgot password",
                "Watch movies",
                "Search for movies",
                "Save/delete favorite movies",
                "Receive real-time notifications with FCM (Firebase Cloud Messaging)",
                "Comment",
                "Create a movie room to watch movies together and chat real time"
            ],
            admin: [
                "Movie CRUD (Create, Read, Update, Delete)",
                "Manage genres and countries",
                "Manage user permissions",
                "Send notifications to users when a new episode is added",
                "Automatically crawl movies from other movie websites"
            ]
        }
    },
    {
        id: 3,
        title: "Để học tốt",
        description: "An interactive learning platform with course management, quizzes, and progress tracking.",
        image: [
            "/projects/dehoctot/HOME.jpg",
            "/projects/dehoctot/1.jpg",
            "/projects/dehoctot/2.jpg",
            "/projects/dehoctot/3.jpg"
        ],
        tags: ["Next.js 14", "PostgreSQL", "Tailwind CSS", "Docker"],
        demoLink: "/",
        category: "Education",
        position: "Fullstack",
        features: {
            client: [],
            admin: []
        }
    },
    {
        id: 4,
        title: "Tax Information System",
        description: "A comprehensive tax management system with data visualization and reporting features.",
        image: [
            "/projects/tax-lookup/HOME.jpg",
            "/projects/tax-lookup/1.jpg",
            "/projects/tax-lookup/2.jpg",
            "/projects/tax-lookup/3.jpg",
            "/projects/tax-lookup/4.jpg"
        ],
        tags: ["Next.js 14", "PostgreSQL", "Tailwind CSS", "Docker"],
        demoLink: "/",
        category: "Business",
        position: "Fullstack",
        features: {
            client: [],
            admin: []
        }
    },
    {
        id: 5,
        title: "Ngân hàng đề thi",
        description: "A system for managing and sharing exam questions efficiently.",
        image: [
            "/projects/nganhangdethi/HOME.jpg",
            "/projects/nganhangdethi/1.jpg",
            "/projects/nganhangdethi/2.jpg",
            "/projects/nganhangdethi/3.jpg",
            "/projects/nganhangdethi/4.jpg"
        ],
        tags: ["Next.js 14", "React query", "Framer-motion"],
        demoLink: "https://nganhangdethi.vn/",
        category: "Education",
        position: "Frontend",
        features: {
            client: [],
            admin: []
        }
    }
];
