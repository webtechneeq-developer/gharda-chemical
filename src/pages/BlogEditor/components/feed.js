export const feedData = [
  {
    id: 1,
    user: {
      name: "Frances Guerrero",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      jobTitle: "Web Developer at StackBros",
    },
    content:
      "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    type: "PHOTO",
    attachments: ["https://picsum.photos/600/300?random=1"],
    createdAt: "2025-08-05T09:15:00Z",
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      jobTitle: "Product Designer",
    },
    content: "Check out my new product demo video!",
    type: "VIDEO",
    attachments: [
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    ],
    createdAt: "2025-08-05T08:30:00Z",
  },
  {
    id: 3,
    user: {
      name: "Ava Smith",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      jobTitle: "Content Writer",
    },
    content: "Here’s a quick presentation on SEO basics 📄",
    type: "DOC",
    attachments: ["https://example.com/docs/seo-guide.pdf"],
    createdAt: "2025-08-05T07:45:00Z",
  },
  {
    id: 4,
    user: {
      name: "Liam Brown",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      jobTitle: "Software Engineer",
    },
    content: "Feeling amazing today! 😄",
    type: "FEELING",
    feeling: "Happy",
    attachments: [],
    createdAt: "2025-08-05T07:00:00Z",
  },
  {
    id: 5,
    user: {
      name: "Sophia Turner",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      jobTitle: "Marketing Specialist",
    },
    content: "Which feature should we prioritize next? Cast your vote! 📊",
    type: "POLL",
    poll: {
      question: "What feature should we launch first?",
      options: ["Dark Mode", "Offline Support", "Custom Themes"],
    },
    createdAt: "2025-08-05T06:15:00Z",
  },
  {
    id: 6,
    user: {
      name: "Daniel Carter",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      jobTitle: "Game Developer",
    },
    content: "Hey gamers! Try my latest game 🎮",
    type: "LINK",
    link: {
      title: "Play Space Quest",
      url: "https://examplegame.com/spacequest",
    },
    createdAt: "2025-08-05T05:30:00Z",
  },
];
