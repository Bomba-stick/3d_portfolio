import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    shopify,
    jobit,
    threejs,
  } from "../assets";

import capsule from "../assets/company/capsule.png"
import alban from "../assets/testimonial/alban.png"
import logofow from "../assets/projects/logofow.png"
import logo from "../assets/logo.svg"



  
  export const navLinks = [
    {
      id: "about",
      title: "Présentation",
    },
    {
      id: "work",
      title: "Mon Travail",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Créateur de Contenu",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "La Bulle Parisienne",
      icon: shopify,
      iconBg: "#383E56",
      date: "Avril 2021 - Juin 2023",
      points: [
        "Projet from scratch",
        "Conception et prototypage de chaque page en concertation avec la directrice de La Capsule",
        "Création, Gestion et accompagnement sur le panel administrateur de l'application web",
        "UI/UX Design",
        "Mise en place de la fonctionnalité moyen de paiement via Stripe"
      ],
    },
    {
      title: "Titre RNCP 6 - Chef de projet de développement d'applications web & mobile",
      company_name: "La Capsule",
      icon: capsule,
      iconBg: "#F94A56",
      date: "Janvier 2023 - Avril 2023",
      points: [
        "Coding Bootcamp de 10 semaines",
        "Conception et prototypage d'applications web et mobile",
        "Programmation Front-end : HTML 5 / CSS / JavaScript / React / Redux",
        "Programmation Back-end : Node.JS / Express",
        "Base de données et CDN: Mongo DB / Cloudinary",
        "Workflow : Git / Github",
      ],
    },
    {
      title: "Freelance et en recherche d'un stage ou d'un poste",
      company_name: "",
      icon: logo,
      iconBg: "black",
      date: "Avril 2023 - Aujourd'hui",
      points: [
        "Développement : NodeJS, JavaScript, HTML, CSS.",
        "Librairies : React, React Native, Redux, Tailwind CSS.",
        "Frameworks : Express, NextJS.",
        "Base de données : MongoDB",
        "Versioning : git (github)",
        "Gestion de projet : Notion, Trello, Miro, Whimsical, Figma, Slack",
        "IDE: Visual Studio Code",
        "Méthodologie : SCRUM, méthode AGILE",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "J'ai eu le plaisir d'enseigner le développement web à Thibault. Il s'est révelé passionné, patient et déterminé. Nous avons vu ensemble JavaScript, React, Express et Node. Parmi les meilleurs éléments de la promotion, Thibault a prouvé sa capacité à collaborer et partager son savoir tout en restant humble et dans une démarche d'apprentissage. Durant le projet de fin de formation, il a été un élément particulièrement moteur.",
      name: "Alban Fresil",
      designation: "Teacher",
      company: "La Capsule",
      image: alban,
    },
    {
      testimonial:
        "Thibault est un développeur web pleinement compétent qui s'appuie sur ses expériences professionnelles et ses compétences pour vous proposer des solutions adaptées à vos attentes. Il pourra vous accompagner de la réflexion jusqu'à la réalisation de vos projets.",
      name: "Arnaud Gasnier",
      designation: "Ingénieur efficacité énergétique",
      company: "GreenFlex",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Food Of The World (FOW)",
      description:
        "Application React native crée lors de mon projet de fin de formation en collaboration avec @CyrilAndrique et @SophieBesançon. FOW est une application e-commerce permettant à ses utilisateurs de trouver des produits venant de l'étranger avec des frais de livraison raisonnable.",
        
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "text-violet-600",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "text-yellow-300",
        },
      ],
      image: logofow,
      source_code_link: "https://github.com/Bomba-stick/fow",
      source_youtube_link : "https://www.youtube.com/watch?v=JXH8yj5OqhM"
    },
    /* {
      name: "Smart Robot",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "text-yellow-300",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    }, */
  ];
  
  export { services, technologies, experiences, testimonials, projects };