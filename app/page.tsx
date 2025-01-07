"use client";

import { Github, 
         Linkedin, 
         User, 
         Code, 
         Briefcase, 
         Clock, 
         Moon, 
         Sun, 
         Download, 
         Languages,
         MessageCircleCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useState } from "react";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");

  const projects = [
    {
      title: {
        pt: "FoundCare",
        en: "FoundCare"
      },
      description: {
        pt: "O Foundcare é uma aplicação desenvolvida para facilitar a conexão entre profissionais da área da saúde e pacientes, promovendo um ambiente seguro e eficiente para o agendamento e gestão de serviços. O projeto foi idealizado com o objetivo de simplificar o acesso a cuidados médicos e terapêuticos, possibilitando que profissionais e pacientes interajam de forma prática e transparente.",
        en: "Foundcare is an application developed to facilitate the connection between healthcare professionals and patients, promoting a safe and efficient environment for scheduling and managing services. The project was designed with the goal of simplifying access to medical and therapeutic care, enabling professionals and patients to interact in a practical and transparent way."
      },
      image: "https://avatars.githubusercontent.com/u/170185671?s=400&u=bfdbfc4f78052550588f03ac7bfc9a2ce1135599&v=4",
      link: "https://github.com/FoundCare",
    },
    {
      title: {
        pt: "Gestor de Empréstimos de Livros",
        en: "Book Loan Manager"
      },
      description: {
        pt: "Esse projeto foi feito para facilitar o empréstimos de livros em uma livraria, a aplicação foi pensada para ser um gestor, onde o funcionário registra o empréstimo do livro e esse livro é debitado do estoque de livros.",
        en: "This project was created to facilitate book lending in a bookstore. The application was designed to be a manager, where the employee registers the book loan, and the book is deducted from the stock.",
      },
      image: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
      link: "https://github.com/teteu-hue/LibrarySystem",
    },
    {
      title: {
        pt: "Catalogo Starwars",
        en: "Star Wars Catalog"
      },
      description: {
        pt: "Projeto desenvolvido para treinar sem nenhum tipo de framework ou facilitação. Esse projeto é especial pelo fato de estar sendo construído utilizando apenas as tecnologias puras, com utilização de LIBS, implementação de sistema de cache em arquivo e integração com sistemas terceiros.",
        en: "Project developed to train without any type of framework or facilitation. This project is special because it is being built using only pure technologies, with the use of LIBS, implementation of a file cache system, and integration with third-party systems."
      },
      image: "https://wallpapers.com/images/hd/star-wars-pictures-31ajlkqgwt3v5vii.jpg",
      link: "https://github.com/teteu-hue/Catalogo-Starwars",
    },
  ];

  const translations: any = {
    en: {
      "Desenvolvimento Web": "Web Development",
      "Front-end": "Front-end",
      "Back-end": "Back-end",
      "Ferramentas de versionamento": "Version Control Tools",
      "APIs": "APIs",
      "Banco de Dados": "Databases",
      "HTML": "HTML",
      "CSS": "CSS",
      "JavaScript": "JavaScript",
      "Angular": "Angular",
      "React Native": "React Native",
      "Tailwind CSS": "Tailwind CSS",
      "Bootstrap": "Bootstrap",
      "JQuery": "JQuery",
      "PHP": "PHP",
      "Laravel": "Laravel",
      "Node.js": "Node.js",
      "Express": "Express",
      "C#": "C#",
      "Git": "Git",
      "GitHub": "GitHub",
      "RESTful APIs": "RESTful APIs",
      "OAuth2": "OAuth2",
      "Laravel Passport": "Laravel Passport",
      "MySQL": "MySQL",
      "PostgreSQL": "PostgreSQL",
      "Trabalho em equipe": "Teamwork",
      "Open-Mindedness": "Open-Mindedness",
      "Documentação técnica": "Technical Documentation",
      "Resolução de problemas": "Problem Solving",
      "Atendimento ao cliente": "Customer Service",
      "Proatividade": "Proactivity",
      "Capacidade de adaptação": "Adaptability",
      "Comunicação interpessoal": "Interpersonal Communication",
      "Gerenciamento de tempo": "Time Management"
    },
    pt: {
      "Desenvolvimento Web": "Desenvolvimento Web",
      "Front-end": "Front-end",
      "Back-end": "Back-end",
      "Ferramentas de versionamento": "Ferramentas de versionamento",
      "APIs": "APIs",
      "Banco de Dados": "Banco de Dados",
      "HTML": "HTML",
      "CSS": "CSS",
      "JavaScript": "JavaScript",
      "Angular": "Angular",
      "React Native": "React Native",
      "Tailwind CSS": "Tailwind CSS",
      "Bootstrap": "Bootstrap",
      "JQuery": "JQuery",
      "PHP": "PHP",
      "Laravel": "Laravel",
      "Node.js": "Node.js",
      "Express": "Express",
      "C#": "C#",
      "Git": "Git",
      "GitHub": "GitHub",
      "RESTful APIs": "RESTful APIs",
      "OAuth2": "OAuth2",
      "Laravel Passport": "Laravel Passport",
      "MySQL": "MySQL",
      "PostgreSQL": "PostgreSQL",
      "Trabalho em equipe": "Trabalho em equipe",
      "Open-Mindedness": "Open-Mindedness",
      "Documentação técnica": "Documentação técnica",
      "Resolução de problemas": "Resolução de problemas",
      "Atendimento ao cliente": "Atendimento ao cliente",
      "Proatividade": "Proatividade",
      "Capacidade de adaptação": "Capacidade de adaptação",
      "Comunicação interpessoal": "Comunicação interpessoal",
      "Gerenciamento de tempo": "Gerenciamento de tempo"
    }
  };

  const translateSkills = (skills: any, language: any) => {
    if (Array.isArray(skills)) {
      // Se for uma lista de habilidades, traduza uma a uma
      return skills.map(skill => translations[language][skill] || skill);
    } else if (typeof skills === 'object') {
      // Se for um objeto com categorias de habilidades
      const translatedSkills: any = {};
      for (const category in skills) {
        if (skills.hasOwnProperty(category)) {
          translatedSkills[translations[language][category] || category] = translateSkills(skills[category], language);
        }
      }
      return translatedSkills;
    }
    return skills;
  };

  const hardSkills = {
    "Desenvolvimento Web": {
      "Front-end": ["HTML", "CSS", "JavaScript", "Angular", "React Native", "Tailwind CSS", "Bootstrap", "JQuery"],
      "Back-end": ["PHP", "Laravel", "Node.js", "Express", "C#"],
      "Ferramentas de versionamento": ["Git", "GitHub"],
      "APIs": ["RESTful APIs", "OAuth2", "Laravel Passport"],
      "Banco de Dados": ["MySQL", "PostgreSQL"]
    }
  };

  const softSkills = [
    "Trabalho em equipe",
    "Open-Mindedness",
    "Documentação técnica",
    "Resolução de problemas",
    "Atendimento ao cliente",
    "Proatividade",
    "Capacidade de adaptação",
    "Comunicação interpessoal",
    "Gerenciamento de tempo"
  ];

  const timeline = [
    {
      year: "2023 - 2024",
      title: {
        pt: "Estagiário em Suporte de Informática",
        en: "Intern in IT Support"
      },
      company: "ControlWare Sistemas",
      description: {
        pt: "Atuei como estagiário em suporte técnico para ERP, com foco em resolver problemas operacionais e tributários dos clientes. Sou responsável por auxiliar na emissão de notas fiscais (venda, devolução e remessa), e prestar suporte ao sistema de vendas, esclarecendo dúvidas sobre tributação e questões operacionais. Além do atendimento ao cliente, realizo consultas em Banco de Dados PostgreSQL para resolver inconsistências no sistema, como notas fiscais desaparecidas, e sou responsável por executar backup e restauração do banco de dados. Tenho experiência em otimizar processos internos através de soluções em Javascript e PHP, aplicando melhorias contínuas para aumentar a eficiência e a confiabilidade de sistemas.",
        en: "I worked as an intern in technical support for ERP, focusing on resolving operational and tax issues for clients. I was responsible for assisting with the issuance of invoices (sale, return, and shipment) and providing support for the sales system, clarifying doubts about taxation and operational issues. In addition to customer support, I performed queries on the PostgreSQL database to resolve inconsistencies in the system, such as missing invoices, and was responsible for performing backups and database restoration. I have experience in optimizing internal processes through solutions in Javascript and PHP, applying continuous improvements to increase the efficiency and reliability of systems."
      },
    },
    {
      year: "2019 - 2021",
      title: {
        pt: "Inspetor de qualidade",
        en: "Quality Inspector"
      },
      company: "POLISTAMPO INDUSTRIA METALURGICA",
      description: {
        pt: "Realização de controle de medidas e inspeção visual durante processo de fabricação das peças.",
        en: "Performed measurement control and visual inspection during the manufacturing process of parts."
      },
    },
  ];

  //const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
  //  console.log(data);
  //};

  const downloadResume = () => {
    const resumeUrl = "/curriculo/Profile.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Theme and Language Controls */}
      <div className="fixed right-4 top-4 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setLanguage(language === "en" ? "pt" : "en")}
        >
          <Languages className="h-5 w-5" />
        </Button>
        <Button variant="outline" onClick={downloadResume}>
          <Download className="mr-2 h-5 w-5" />
          CV
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary">
            <img
              src="https://avatars.githubusercontent.com/u/142853773?v=4"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold">
          {language === "en" ? "Jefferson Oliveira" : "Jefferson Oliveira"}
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          {language === "en" ? "Back-end Developer" : "Desenvolvedor Back-end"}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <a href="https://github.com/teteu-hue" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://www.linkedin.com/in/jefferson-goncalves-oliveira/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://wa.me/5511910692625?text=Ol%C3%A1%2C%20tudo%20bem%3F%0AEstou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.%0APodemos%20conversar%3F" 
               target="_blank">
              <MessageCircleCode className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="about" className="mx-auto max-w-4xl">

          <TabsList className="flex w-full justify-between items-center space-x-4">

            <TabsTrigger value="about">
              <User className="mr-2 h-4 w-full" />
              {language === "en" ? "About me" : "Sobre mim"}
            </TabsTrigger>

            <TabsTrigger value="projects">
              <Code className="mr-2 h-4 w-full" />
              {language === "en" ? "Projects" : "Projetos"}
            </TabsTrigger>

            <TabsTrigger value="skills">
              <Briefcase className="mr-2 h-4 w-full" />
              {language === "en" ? "Skills" : "Habilidades"}
            </TabsTrigger>

            <TabsTrigger value="timeline">
              <Clock className="mr-2 h-4 w-full" />
              {language === "en" ? "Experiences" : "Experiências"}
            </TabsTrigger>

          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="prose prose-lg mt-6 dark:prose-invert">
                <p>
                  {language === "en"
                    ? `
                    Web Developer with a self-taught journey that started at 22, with training at Trybe, where I developed a solid foundation in Programming Logic. Since then, I’ve been specializing in full-stack development, with experience in JavaScript, Node.js, Express, MySQL, React Native, and Angular, in addition to deepening my knowledge in PHP, Laravel, and PostgreSQL stacks. Currently, I’m enhancing my skills with Laravel and API security, focusing on OAuth2 authentication using Passport. I have experience in creating websites for e-commerce, digital services sales, and developing custom systems, always seeking the best practices in web development. In my spare time, I practice capoeira, ride my bike, and enjoy reading and writing about topics that fascinate me.
                    I love creating elegant solutions to complex problems and am always eager to learn new technologies. When I’m not coding, you can find me contributing to open-source projects or writing technical blog posts.
                    `
                    : `
                    Desenvolvedor Web com uma trajetória autodidata iniciada aos 22 anos, com formação na Trybe, onde desenvolvi uma base sólida em Lógica de Programação. Desde então, venho me especializando em desenvolvimento full-stack, com experiência em JavaScript, Node.js, Express, MySQL, React Native e Angular, além de aprofundar meus conhecimentos nas stacks PHP, Laravel e PostgreSQL.
                    Atualmente, estou aprimorando minhas habilidades com Laravel e segurança em APIs, com foco em autenticação OAuth2 usando Passport. Tenho experiência na criação de sites para e-commerce, venda de serviços digitais e desenvolvimento de sistemas customizados, sempre buscando as melhores práticas em desenvolvimento web.
                    No meu tempo livre, pratico capoeira, ando de bicicleta e gosto de me dedicar à leitura e escrita sobre temas que me fascinam
                    `}
                </p>
                <p>
                  {language === "en"
                    ? "I love creating elegant solutions to complex problems and am always eager to learn new technologies. When I'm not coding, you can find me contributing to open-source projects or writing technical blog posts."
                    : "Amo criar soluções elegantes para problemas complexos e estou sempre ansioso para aprender novas tecnologias. Quando não estou programando, você pode me encontrar contribuindo para projetos open-source ou escrevendo posts técnicos em blog."}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={project.image}
                    alt="Imagem de projetos"
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="mt-4">
                    <h3 className="mb-2 text-xl font-bold">
                      {language === "en" ? project.title.en : project.title.pt}
                      </h3>
                    <p className="mb-4 text-muted-foreground">
                      {language === "en" ? project.description.en : project.description.pt}
                    </p>
                    <Button variant="outline" asChild>
                      <a href={project.link}>
                        {language === "en" ? "View Project" : "Ver Projeto"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card>
              <CardContent className="mt-6">
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">{language === "en" ? "Hard Skills" : "Hard Skills"}</h2>
                    {Object.entries(translateSkills(hardSkills, language)).map(([category, skills]) => (
                      <div key={category} className="mb-6">
                        <h3 className="mb-3 text-xl font-semibold">{category}</h3>
                        {typeof skills === 'object' && skills !== null && !Array.isArray(skills) ? (
                          Object.entries(skills).map(([subCategory, subSkills]) => (
                            <div key={subCategory} className="mb-4">
                              <h4 className="mb-2 text-lg font-medium">{subCategory}</h4>
                              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                                {subSkills.map((skill: any, index: any) => (
                                  <div
                                    key={index}
                                    className="rounded-lg bg-secondary p-3 text-center text-sm"
                                  >
                                    {skill}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                            {(skills as string[]).map((skill, index) => (
                              <div
                                key={index}
                                className="rounded-lg bg-secondary p-3 text-center text-sm"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="mb-4 text-2xl font-bold">{language === "en" ? "Soft Skills" : "Soft Skills"}</h2>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {translateSkills(softSkills, language).map((skill: any, index: any) => (
                        <div
                          key={index}
                          className="rounded-lg bg-secondary p-3 text-center text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="mt-6">
            <Card>
              <CardContent className="mt-6">
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary">
                      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                      <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
                      <h3 className="text-lg font-bold">
                        {language === "en" ? item.title.en : item.title.pt}
                      </h3>
                      <div className="text-sm text-muted-foreground">{item.company}</div>
                      <p className="mt-2">
                        {language === "en" ? item.description.en : item.description.pt}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </section>
    </main>
  );
}