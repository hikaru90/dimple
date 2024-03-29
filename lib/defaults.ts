const defaults = [
  {
    type: "appointmentTypes",
    options: [
      { label: "Erstgespräch", value: "firstMeeting" },
      { label: "Folgetermin", value: "followup" },
    ],
  },
  {
    type: "services",
    options: [
      { label: "Paartherapie Kennenlerngespräch (50 Min.)", value: "coupleTherapyIntroduction50" },
      { label: "Paartherapie (Paar) (80 Min.)", value: "coupleTherapy80" },
      { label: "Paartherapie (Einzelperson) (50 Min.)", value: "coupleTherapySingle50" },
      { label: "Paartherapie (Einzelperson) (80 Min.)", value: "coupleTherapySingleIntense80" },
      
      { label: "Sexualtherapie Kennenlerngespräch (50 Min.)", value: "sexTherapyIntroduction50" },
      { label: "Sexualtherapie (Paar) (80 Min.)", value: "sexTherapy80" },
      { label: "Sexualtherapie (Einzelperson) (50 Min.)", value: "sexTherapySingle50" },
      { label: "Sexualtherapie (Einzelperson) (80 Min.)", value: "sexTherapySingleIntense80" },
      
      {
        label: "Beziehungscoaching (Einzelperson) (50 Min.)",
        value: "relationshipCoachingSingle50",
      },
      {
        label: "Beziehungscoaching intensiv (Einzelperson) (80 Min.)",
        value: "relationshipCoachingSingleIntense80",
      },
    ],
  },
  {
    type: "imageRotation",
    content: {
      heading: "Mein Angebot",
      slides: [
        {
          text: "Paartherapie",
          link: "/angebot/paarthreapie",
          icon: "icon-arrow_right",
          description: "Für ein gutes Miteinander und eine erfüllte Partnerschaft.",
          image: "solar_energy_a2mPxBJIkJ.jpg",
        },
      ],
    },
  },
  {
    type: "contact",
    content: {
      heading: "Schreiben Sie mir eine Nachricht",
      recipient: "alexbueckner@gmail.com",
      image: "solar_energy_a2mPxBJIkJ.jpg",
    },
  },
  {
    type: "map",
    content: {
      address: "Dimple Goertz<br/>Paar- und Sexualtherapeutin & Beziehungscoach<br/>Breitscheidstraße 33<br/>70176 Stuttgart",
      phone: "+49 1573 1664595",
      openinghours: "(Erreichbar Mo-Do, 10-19h)",
      mail: "kontakt@dimplegoertz.de",
      image: "",
    },
  },
  {
    type: "default",
    content: {},
  },
  {
    type: "heroBig",
    content: {
      heading: "Systemische Paar- und Sexualtherapie & Beziehungscoaching",
      image: "solar_energy_a2mPxBJIkJ.jpg",
      cta: {
        text: "Jetzt Termin buchen",
        icon: "icon-caret-right",
        link: "/buchen",
      },
    },
  },
  {
    type: "heroSmall",
    content: {
      heading: "Paartherapie",
      image: "solar_energy_a2mPxBJIkJ.jpg",
      cta: {
        text: "Jetzt Termin buchen",
        icon: "icon-caret-right",
        link: "/buchen",
      },
    },
  },
  {
    type: "bookingCalendar",
    content: {
      days: [
        { id: 1, name: "Montag", startTime: null, endTime: null },
        { id: 2, name: "Dienstag", startTime: null, endTime: null },
        { id: 3, name: "Mittwoch", startTime: null, endTime: null },
        { id: 4, name: "Donnerstag", startTime: null, endTime: null },
        { id: 5, name: "Freitag", startTime: null, endTime: null },
      ],
    },
  },
  {
    type: "faq",
    content: {
      heading: "Häufig gestellte Fragen",
      faqs: [
        {
          question: "Testfrage",
          answer: "Testantwort",
        },
      ],
    },
  },
  {
    type: "prices",
    content: {
      heading: "Preise",
      subline: "Subline",
      prices: [
        {
          name: "Einzelsitzung",
          price: 100.05,
          duration: 50,
          description: 'MwSt. inklusive',
          cta: {
            text: "Jetzt Termin buchen",
            icon: "icon-caret-right",
            link: "/buchen",
          },
        },
      ],
    },
  },
  {
    type: "imageList",
    content: {
      heading: "Heading",
      image: "solar_energy_a2mPxBJIkJ.jpg",
      list: [
        {
          type: "Ausbildung",
          place: "IGST Heidelberg",
          name: "Systemische Sexualtherapie",
        },
      ],
    },
  },
];

export default defaults;
