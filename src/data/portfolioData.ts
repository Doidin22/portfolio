export const portfolioData = {
  name: "Ronald Alencar",
  profileImage: "/perfil.png",
  role: "Estudante de Ciência da Computação | Dev Front-end",
  
  social: {
    email: "ronaldalencar74@gmail.com",
    github: "https://github.com/Doidin22",
    linkedin: "https://www.linkedin.com/in/ronald-alencar-20927a242",
  },

  about: "Sou um estudante apaixonado por tecnologia e resolução de problemas. Atualmente focado em criar interfaces modernas e performáticas com React e TypeScript.",
  
  education: {
    course: "Bacharelado em Ciência da Computação",
    school: "Braz Cubas",
    status: "Cursando - 5º Semestre"
  },
  
  skills: [
    { name: "React", icon: "Code2" },
    { name: "TypeScript", icon: "Terminal" },
    { name: "Tailwind CSS", icon: "Code2" },
    { name: "Node.js", icon: "Server" },
    { name: "SQL", icon: "Database" },
  ],
  
  projects: [
    {
      title: "AmazingHumans",
      description: "Site para publicação de historias e uma comunidade de autores e leitores.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Doidin22/amazing-humans-react",
      demo: "https://amazinghumans.com.br/",
      image: "/projeto1Img.png"
    },
  {
      title: "Store.Camisas",
      description: "E-commerce completo com carrinho, checkout via WhatsApp, modo escuro e sistema de busca. Desenvolvido com React, Tailwind e Framer Motion.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      github: "https://github.com/Doidin22/StorePrototype", // Lembre de criar o repo depois!
      demo: "#", // Aqui você colocará o link do Firebase/Vercel quando hospedar
      image: "/loja-print.png"
    },
  ]
};