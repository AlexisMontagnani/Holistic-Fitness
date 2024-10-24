const servicesArray = [
  {
    id: 1,
    title: "Suivis personnalisé en ligne",
    presentation:
      "Programme entièrement personnalisé, dispensé via l’application Coach RX (Android &amp; IOS) : il sera établi en fonction de vos contraintes actuelles (objectifs, emploi du temps, antécédents de blessure, matériel disponible, habitudes alimentaires actuelles, préférences, etc.) + journal d’entrainement inclus dans l’application pour un suivi des performances en toute simplicité",
    details:
      "Le suivi personnalisé en ligne s’adresse surtout à ceux pratiquant déjà la musculation (6 mois minimum), bien que les débutants puissent également en bénéficier. Les échanges réguliers avec le coach ainsi que le suivi sur l’application de coaching, simplifieront le suivi du programme et permettront des ajustements plus précis, en fonction des besoins du coaché. Des bilans seront réalisés régulièrement, afin d’évaluer les progrès et réajuster le suivi en fonction de votre progression.",
    objectives: [
      { name: "Suivi / engagement", description: "3 mois minimum." },
      { name: "Cycles", description: "4 semaines." },
      {
        name: "Bilan",
        description:
          "Bilan initial sur la mobilité, afin de déterminer plus finement la sélection des exercices et éviter les blessures. 2 bilans / mois afin de réajuster les paramètres du suivi si besoin.",
      },
      {
        name: "Conseils nutrition",
        description:
          "apports caloriques (maintient, surplus, déficit, macronutriments, stratégies, etc.",
      },
      {
        name: "Questions et correctifs techniques",
        description: "Vidéos via Whatsapp 5 jours sur 7.",
      },
    ],
  },
  {
    id: 2,
    title: "Suivi personnalisé en présentiel",
    presentation:
      "Programme entièrement personnalisé, dispensé via l’application Coach RX (Android &amp; IOS) : il sera établi en fonction de vos contraintes actuelles (objectifs, emploi du temps, antécédents de blessure, matériel disponible, habitudes alimentaires actuelles, préférences, etc.) + journal d’entrainement inclus dans l’application pour un suivi des performances en toute simplicité.",
    details:
      "Le suivi en présentiel personnalisé s’adresse à tous les niveaux de pratique. Je serai présent sur certaines de vos séances d’entrainement, afin de vous aider à sortir de votre zone de confort, apporter des corrections techniques ou encore parler des autres aspects tout aussi importants pour votre progression (nutrition, mode de vie, mindset, etc.). Vous bénéficierez de votre programme d’entrainement personnalisé sur l’application de coaching, directement sur votre smarphone. Des bilans seront réalisés régulièrement pour évaluer les progrès, et réajuster le suivi en fonction de votre progression.",
    objectives: [
      { name: "Suivi / engagement", description: "3 mois minimum." },
      {
        name: "Entraînement",
        description:
          "1 à 3 séances d’entrainement (d’une durée d’1h) / semaine en fonction des besoins.",
      },
      {
        name: "Présentiel",
        description:
          "Coaching directement en salle au club Basic Fit Artigues-près-Bordeaux.",
      },
      {
        name: "Bilan",
        description:
          "Bilan initial sur la mobilité, afin de déterminer plus finement la sélection des exercices et éviter les blessures. 1 bilans / mois afin de réajuster les paramètres du suivi si besoin.",
      },
      {
        name: "Conseils nutrition",
        description:
          "apports caloriques (maintient, surplus, déficit, macronutriments, stratégies, etc.",
      },
      {
        name: "Questions et correctifs techniques",
        description: "Vidéos via Whatsapp 5 jours sur 7.",
      },
    ],
  },
  {
    id: 3,
    title: "Programme d’entrainement personnalisé sans suivi",
    presentation: "Programme entièrement personnalisé, dispensé via l’application Coach RX (Android &amp; IOS) : il sera établi en fonction de vos contraintes actuelles (objectifs, emploi du temps, antécédents de blessure, matériel disponible, habitudes alimentaires actuelles, préférences, etc.)",
    details:
      "Les programmes personnalisés sans suivi s’adressent aux pratiquants possédant déjà un bagage en musculation (6 mois minimum), mais manquant d’un plan d’entrainement clair pour atteindre leurs objectifs.",
    objectives: [
      { name: "Suivi / engagement", description: "Sans engagement." },
      { name: "Cycles", description: "4 semaines." },
      {
        name: "Objectif",
        description:
          "Pour un ou plusieurs objectifs : hypertrophie, force, callisthénie, course à pied, etc.",
      },
    ],
  },
];

export default servicesArray;
