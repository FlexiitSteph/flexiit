import { BookOpen, CheckCircle, ClipboardList, Users } from 'lucide-react';

export const COMPANY_INFO = {
  name: "FLEXIIT",
  tagline: "La bonne ressource, au bon moment.",
  email: "s.goupil@flexiit.fr",
  phone: "06.84.11.82.07",
  linkedin: "FLEXIIT",
  legal: "Flexiit – SAS au capital de 1000 € - R.C.S. BORDEAUX 992 763 912",
  experience: "Plus de 25 ans d’expérience en gestion de projets dans les métiers des coopératives agricoles"
};

export interface ServiceSection {
  title: string;
  icon: any;
  points: string[];
}

export const SERVICES: ServiceSection[] = [
  {
    title: "Audit & Diagnostic",
    icon: ClipboardList,
    points: [
      "Cartographie des systèmes actuels et des processus métiers",
      "Recueil des besoins, recherche de gains de performances",
      "Identification des points de friction ou inefficacité",
      "Recherche d’axes d’amélioration (qualité, productivité, satisfaction et confort des utilisateurs)"
    ]
  },
  {
    title: "Pilotage & Accompagnement",
    icon: Users,
    points: [
      "Recueil et formalisation des besoins métiers",
      "Rédaction de cahiers des charges, spécifications fonctionnelles",
      "Définition et suivi des objectifs, budget, plannings, priorisations",
      "Suivi opérationnel de la MOE",
      "Coordination des intervenants",
      "Reporting, ajustements"
    ]
  },
  {
    title: "Mise en œuvre opérationnelle",
    icon: CheckCircle,
    points: [
      "Rédactions des guides d’utilisation interne",
      "Mise en place des procédures opérationnelles pour assurer la continuité de service",
      "Rédaction et / ou réalisation des plans de recette",
      "Analyse de la qualité des données"
    ]
  },
  {
    title: "Support & Amélioration continue",
    icon: BookOpen,
    points: [
      "Assistance aux utilisateurs (support de proximité)",
      "Formation et accompagnement des utilisateurs, mise à jour des compétences",
      "Conduite du changement",
      "Binômage de vos équipes pendant leurs absences"
    ]
  }
];