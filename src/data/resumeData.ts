export const resumeData = {
  personal: {
    name: "Lucas Escobar Faria Travesso",
    title: "Analista Desenvolvedor | Java · Clean Code & Clean Architecture · AWS · Scrum/Kanban · Azure",
    location: "Mogi das Cruzes, São Paulo - Brasil",
    phone: "+55 11 97184-2481",
    phone2: "+55 11 98857-0102",
    email: "lucasescobar.ti@hotmail.com",
    birthdate: "26/12/1996",
    linkedin: "https://www.linkedin.com/in/lucas-escobar-41bb7b186/",
    availability: "Disponível para oportunidades híbridas ou remotas",
    summary:
      "Analista Desenvolvedor com mais de 4 anos de experiência em desenvolvimento de software, especializado na criação de soluções inovadoras e escaláveis. Expertise em Java, Python, Node.js e React, com sólida base em Clean Code e Clean Architecture. Experiência com arquitetura de microsserviços, pipelines CI/CD com Azure DevOps e serviços AWS. Conhecimento em IA aplicada: agentes autônomos, skills e LLMs (Branas.io). Utilizo IDEs potencializadas por IA (Windsurf e Kiro) no dia a dia para aumentar produtividade e qualidade do código.",
  },

  highlights: [
    { value: "+4 anos", label: "de experiência" },
    { value: "Java & AWS", label: "stack principal" },
    { value: "Microsserviços", label: "arquitetura" },
    { value: "Remoto/Hibrido", label: "disponibilidade" },
  ],

  stars: [
    {
      title: "Sistema de Coleta de Notas Fiscais — Veloe",
      tech: ["Java", "AWS SQS", "DynamoDB", "Microsserviços"],
      situation:
        "A Veloe precisava modernizar seu sistema legado de coleta de notas fiscais, vale pedágio e frete, que apresentava gargalos de performance e dificuldade de escalar em períodos de alta demanda.",
      task:
        "Fui responsável por projetar e desenvolver microsserviços do zero para substituir o sistema legado, garantindo escalabilidade, rastreabilidade e entregas contínuas.",
      action:
        "Desenvolvi microsserviços em Java seguindo Clean Architecture, utilizando AWS SQS para filas assíncronas, DynamoDB para persistência de alta performance e SNS para notificações entre serviços. Atuei no refinamento das demandas junto ao time de arquitetura e implementei pipelines CI/CD com Azure DevOps.",
      result:
        "Sistema escalável em produção com entregas contínuas, redução significativa no tempo de deploy e maior rastreabilidade das operações fiscais. A arquitetura de microsserviços permitiu que cada serviço escalasse de forma independente conforme a demanda.",
    },
    {
      title: "Micro Front-ends com React e Angular",
      tech: ["React", "Angular", "Micro Front-ends", "DevOps"],
      situation:
        "O cliente possuía um front-end monolítico que dificultava o trabalho paralelo de múltiplos times, aumentando o tempo de entrega e o risco de conflitos de código.",
      task:
        "Participar do desenvolvimento e manutenção de micro front-ends, garantindo que cada módulo pudesse ser desenvolvido, testado e deployado de forma independente.",
      action:
        "Desenvolvi módulos isolados em React e Angular, seguindo contratos de interface bem definidos entre os times. Trabalhei em modelo SCRUM/KANBAN com entregas contínuas, participando ativamente das cerimônias de refinamento e planejamento.",
      result:
        "Times conseguiram trabalhar em paralelo sem conflitos, reduzindo o tempo de entrega de features e aumentando a autonomia de cada squad. O modelo de micro front-ends foi adotado como padrão para novos módulos.",
    },
    {
      title: "Banco de Dados para Avaliações — Prefeitura de Guararema",
      tech: ["Banco de Dados", "SQL", "Análise de Dados"],
      situation:
        "A Prefeitura de Guararema não possuía uma forma estruturada de coletar e analisar avaliações dos cidadãos sobre os serviços prestados.",
      task:
        "Como estagiário, fui designado para criar um banco de dados que suportasse o site de avaliações da prefeitura e facilitasse a geração de relatórios.",
      action:
        "Modelei e implementei o banco de dados relacional, criei planilhas e gráficos para análise dos dados coletados e atuei como intermediador entre a Prefeitura e a empresa Embras para alinhamento de requisitos e reporte de problemas.",
      result:
        "A prefeitura passou a ter visibilidade estruturada sobre a satisfação dos cidadãos, com relatórios periódicos que auxiliavam na tomada de decisão da gestão de TI.",
    },
  ],

  skills: [
    "Comunicação eficaz — capaz de explicar conceitos complexos com clareza e fomentar colaboração",
    "Colaboração com times cross-funcionais e resolução de conflitos",
    "Resolução criativa de problemas sob prazos apertados",
    "Proatividade no cumprimento de metas e objetivos",
    "Aprendizado rápido — estudos contínuos em Inteligência Artificial",
    "Uso de IDEs com IA (Windsurf e Kiro) para aumentar produtividade e qualidade do código",
  ],

  technologies: [
    { name: "Java", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Microsserviços", category: "backend" },
    { name: "Clean Code & Clean Architecture", category: "backend" },
    { name: "React", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "Micro Front-ends", category: "frontend" },
    { name: "AWS (S3, SQS, SNS, DynamoDB, API Gateway, CloudFormation)", category: "cloud" },
    { name: "Azure DevOps / CI-CD", category: "cloud" },
    { name: "SCRUM / KANBAN", category: "methodology" },
    { name: "DevOps", category: "methodology" },
    { name: "ChatGPT + Java Spring (IA)", category: "methodology" },
    { name: "Agentes de IA / LLMs", category: "methodology" },
    { name: "Windsurf IDE (IA)", category: "methodology" },
    { name: "Kiro IDE (IA)", category: "methodology" },
    { name: "Banco de Dados Relacional", category: "database" },
    { name: "Banco de Dados Não Relacional", category: "database" },
    { name: "Pentest / Segurança da Informação", category: "security" },
    { name: "Kali Linux", category: "security" },
  ],

  languages: [
    { name: "Português", level: "Língua materna", percent: 100 },
    { name: "Inglês", level: "Avançado", percent: 85 },
    { name: "Espanhol", level: "Intermediário", percent: 50 },
    { name: "Alemão", level: "Básico (em estudo)", percent: 20 },
  ],

  experience: [
    {
      role: "Analista Desenvolvedor de Sistemas",
      company: "Muralis Tecnologia",
      location: "Mogi das Cruzes, São Paulo",
      period: "Junho 2022 – Atual (4 anos)",
      highlights: [
        "Trabalho alocado em clientes, atuando diretamente na Veloe.",
        "Desenvolvimento de microsserviços escaláveis em Java, Node.js e Python para sistema de coleta de notas fiscais, vale pedágio e frete (Veloe Invoice Collection System).",
        "Implementação de pipelines CI/CD com Azure DevOps para redução significativa de tempo de deploy.",
        "Atuação com diversas tecnologias da AWS: SQS, SNS, S3, DynamoDB, API Gateway, CloudFormation.",
        "Atuação em SCRUM/KANBAN no modelo DevOps com desenvolvimento e entregas contínuas.",
        "Desenvolvimento de micro front-ends em React e Angular.",
        "Refinamento ativo de demandas e soluções de Arquitetura.",
        "Projetos integrando IA — ChatGPT com Java Spring.",
      ],
    },
    {
      role: "Estagiário de TI",
      company: "Prefeitura de Guararema (TI)",
      location: "Guararema, São Paulo",
      period: "Junho 2017 – Janeiro 2018 (8 meses)",
      highlights: [
        "Trabalho alocado pela Embras.",
        "Auxiliar na gestão de acessos e intermediador entre a Prefeitura de Guararema e a empresa para envio de relatórios sobre problemas relacionados aos softwares.",
        "Desenvolvimento de banco de dados para site de avaliações da Prefeitura de Guararema.",
        "Colaboração na elaboração de planilhas e gráficos, facilitando a análise de dados.",
      ],
    },
  ],

  education: [
    {
      type: "Superior",
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Fatec Mogi das Cruzes",
      location: "Mogi das Cruzes",
      period: "2018 – 2021",
      status: "Concluído",
      description: "",
    },
  ],

  certifications: [
    {
      title: "AWS Technical Essentials",
      institution: "AWS",
      period: "04/2025",
      status: "Concluído",
      description: "Estudo dos principais recursos da AWS desde casos de uso até o valor de negócio.",
    },
    {
      title: "AWS Accreditation (Technical)",
      institution: "AWS",
      period: "04/2025",
      status: "Concluído",
      description: "Conhecimentos gerais sobre serviços e arquitetura AWS.",
    },
    {
      title: "Clean Code & Clean Architecture",
      institution: "Branas.io",
      period: "2024",
      status: "Concluído",
      description:
        "Curso completo com Rodrigo Branas abordando princípios de Clean Code (código legível, sem duplicações, com responsabilidade única) e Clean Architecture (separação de camadas, independência de frameworks, inversão de dependências e casos de uso bem definidos). Aplicação prática dos conceitos em projetos reais com Java.",
    },
    {
      title: "Inteligência Artificial — Agentes, Skills e LLMs",
      institution: "Branas.io",
      period: "2025",
      status: "Concluído",
      description:
        "Curso com Rodrigo Branas sobre fundamentos e aplicações práticas de IA: arquitetura de agentes autônomos, criação de skills, integração com LLMs (Large Language Models), orquestração de fluxos inteligentes e uso de ferramentas de IA no desenvolvimento de software.",
    },
    {
      title: "Desenvolvimento",
      institution: "Alura",
      period: "01/2022 – 06/2022",
      status: "Concluído",
      description:
        "Diversos cursos incluindo: Desenvolvimento front-end com React, Angular, Banco de dados relacional e não relacional.",
      courses: [
        "Angular: Controle de fluxo de navegação",
        "Angular: Boas Práticas em arquitetura de formulários",
        "Angular: Explorando o framework",
        "JavaScript: Manipulando o DOM",
        "JavaScript: Criando Páginas Dinâmicas",
        "Kotlin: Orientação a objetos",
      ],
    },
    {
      title: "Pentest e Segurança",
      institution: "Desec Security",
      period: "02/2021 – 03/2021",
      status: "Concluído",
      description:
        "Conhecimento de diversos tipos de pentest na área de segurança da informação utilizando Kali Linux.",
    },
    {
      title: "Ciência da Computação",
      institution: "Harvard Business School Online",
      period: "03/2021 – 04/2021",
      status: "Concluído",
      description:
        "Conhecimento teórico em tecnologia: estrutura de dados, orientação a objetos, conceitos de hardware e software.",
    },
    {
      title: "Hardware & Tecnologia em Informática",
      institution: "Cisco Networking Academy",
      period: "2017",
      status: "Concluído",
      description: "Fundamentos de hardware e tecnologia em informática.",
    },
    {
      title: "Redes de Computadores (CCNA)",
      institution: "Cisco Networking Academy",
      period: "2016",
      status: "Concluído",
      description:
        "Redes de computadores, gerenciamento de sistemas, redes LAN/WAN, CCNA Routing and Switching, CCNA Introdução à Cibersegurança.",
    },
    {
      title: "Desenvolvimento em Flash",
      institution: "EasyComp",
      period: "2013 – 2014",
      status: "Concluído",
      description: "Desenvolvimento com Flash e FlashPlayer.",
    },
  ],
};
