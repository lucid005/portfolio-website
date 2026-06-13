export type Project = {
  details: string[];
  featureGroups?: {
    items: string[];
    title: string;
  }[];
  gallery?: {
    alt: string;
    src: string;
  }[];
  highlights?: {
    description: string;
    title: string;
  }[];
  image: string;
  imageAlt: string;
  links: {
    source: string;
    website: string;
  };
  meta: string;
  overview?: string[];
  role: string;
  slug: string;
  stats?: {
    label: string;
    value: string;
  }[];
  summary: string;
  techStack?: {
    items: string[];
    title: string;
  }[];
  title: string;
  workflow?: {
    description: string;
    title: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "skill-lantern",
    title: "Skill Lantern",
    meta: "Next.js / FastAPI / PostgreSQL / XGBoost / Google Gemini",
    role: "AI career guidance platform",
    image: "/projects/skilllantern/Screenshot 2026-05-26 132649.png",
    imageAlt: "Skill Lantern landing page preview",
    summary:
      "An AI-powered career guidance platform built for students in Nepal, focused on recommendations, learning roadmaps, and college discovery.",
    details: [
      "Skill Lantern was built as a final-year project to make career guidance more practical for students in Nepal.",
      "The system connects a full profile intake flow with machine-learning predictions, AI-generated roadmaps, Nepal-focused college recommendations, and saved recommendation history.",
      "I worked across the frontend experience, backend API design, recommendation flow, model integration, dashboard screens, and supporting data services.",
    ],
    overview: [
      "Skill Lantern helps students discover career paths based on their academic background, interests, technical skills, soft skills, certifications, and work preferences.",
      "Instead of stopping at a single career label, the platform turns a student profile into ranked career predictions, structured learning roadmaps, relevant college suggestions, and a concise project-style summary with immediate next steps.",
      "The product combines a Next.js dashboard, a FastAPI recommendation service, an XGBoost prediction model, Google Gemini assisted explanations, PostgreSQL persistence, and Nepal-focused college data into one guided experience.",
    ],
    stats: [
      {
        label: "Training data",
        value: "1,194 usable rows",
      },
      {
        label: "Career classes",
        value: "23 trained paths",
      },
      {
        label: "Model signals",
        value: "110 features",
      },
      {
        label: "Top-5 accuracy",
        value: "92.1%",
      },
    ],
    techStack: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Backend",
        items: ["FastAPI", "Python", "Pydantic", "Uvicorn"],
      },
      {
        title: "AI and ML",
        items: ["XGBoost", "scikit-learn", "Google Gemini API", "Rule-based scoring"],
      },
      {
        title: "Data and auth",
        items: ["PostgreSQL", "Prisma", "NextAuth", "CSV datasets"],
      },
    ],
    workflow: [
      {
        title: "Create a student profile",
        description:
          "Users sign in and provide education, specialization, CGPA, interests, technical skills, soft skills, certifications, and career preferences.",
      },
      {
        title: "Generate ranked career matches",
        description:
          "The backend converts profile data into model features and returns ranked career predictions with confidence scores and short descriptions.",
      },
      {
        title: "Build the full guidance package",
        description:
          "For the selected career, the service generates a roadmap and college recommendations in parallel, then prepares a readable summary and immediate actions.",
      },
      {
        title: "Review roadmap and colleges",
        description:
          "The dashboard separates predictions, roadmap stages, college matches, and the final report into focused tabs for easier comparison.",
      },
      {
        title: "Save progress and feedback",
        description:
          "Recommendation history, roadmap progress, and user feedback are stored so the product remains useful after the first result screen.",
      },
    ],
    featureGroups: [
      {
        title: "Profile intake",
        items: [
          "Multi-step profile form for academic background, interests, and skills",
          "Separate technical and soft skill inputs for better recommendation signals",
          "Career lifestyle, work environment, location, and learning-style preferences",
          "Credentials-based account flow with persisted user profile data",
        ],
      },
      {
        title: "Career matching",
        items: [
          "XGBoost-backed career prediction with deterministic fallback behavior",
          "Ranked career matches with confidence scores and descriptions",
          "Rule-based recommendation features added to improve signal quality",
          "Model evaluation using holdout accuracy, top-k accuracy, and representative profiles",
        ],
      },
      {
        title: "Guidance output",
        items: [
          "Structured career roadmaps with stages, skills, resources, and milestones",
          "Roadmap progress tracking across completed milestones",
          "Final project-style summary explaining fit, skills, pathway, and next actions",
          "Print or save option for recommendation reports",
        ],
      },
      {
        title: "College discovery",
        items: [
          "Nepal college recommendations based on selected career and available programs",
          "Location and program filtering for easier comparison",
          "Top recommendations and alternatives with reasons",
          "Fallback CSV-based recommendations when LLM output is unavailable",
        ],
      },
    ],
    highlights: [
      {
        title: "Hybrid recommendation architecture",
        description:
          "Skill Lantern blends model predictions, deterministic scoring, and optional Gemini refinement so the product can still return useful guidance when an AI service is unavailable.",
      },
      {
        title: "Full guidance orchestration",
        description:
          "Roadmap generation and college recommendation run concurrently, then feed a final summary step that turns separate outputs into one readable career report.",
      },
      {
        title: "Evaluation and feedback loop",
        description:
          "The backend records model metrics such as top-k accuracy, representative profile checks, and feature importance, while the dashboard captures user feedback for recommendation usefulness.",
      },
    ],
    gallery: [
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 132749.png",
        alt: "Skill Lantern features section describing AI-powered career matching",
      },
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 133151.png",
        alt: "Skill Lantern profile form collecting interests and skills",
      },
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 133437.png",
        alt: "Skill Lantern dashboard showing ranked career predictions",
      },
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 133508.png",
        alt: "Skill Lantern career roadmap with progress tracking",
      },
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 133542.png",
        alt: "Skill Lantern college recommendation dashboard",
      },
      {
        src: "/projects/skilllantern/Screenshot 2026-05-26 133617.png",
        alt: "Skill Lantern final summary and immediate actions screen",
      },
    ],
    links: {
      source: "https://github.com/lucid005/Skill-Lantern",
      website: "",
    },
  },
  {
    slug: "restpoint",
    title: "RestPoint",
    meta: "Next.js / MapLibre GL / OSRM / OpenStreetMap / Geolocation API",
    role: "Smart route and rest-stop planner",
    image: "/projects/restpoint/Screenshot 2026-01-10 130450.png",
    imageAlt: "RestPoint route map preview with overnight stop marker",
    summary:
      "A map-based journey planner that helps travelers break long road trips into manageable daily segments with suggested overnight stop points.",
    details: [
      "RestPoint focuses on a practical travel problem: long road journeys are difficult to plan manually when travelers need to decide where to rest, break the journey, or search for nearby hotels.",
      "The app combines mapping, route calculation, geolocation, and travel-time logic into a clean map-first interface centered around quick route planning.",
      "I built the frontend experience, map interaction logic, route calculation flow, stop-planning system, and supporting service layer.",
    ],
    overview: [
      "RestPoint opens with a full-screen interactive map centered around Nepal. It can detect the user's current location, search for a destination, calculate a driving route, and display the route visually on the map.",
      "Instead of only showing the fastest route, RestPoint estimates how many travel days a journey may require based on the user's preferred daily driving limit and suggests approximate overnight stop locations along the route.",
      "The interface stays compact and map-first, showing the total distance, estimated travel duration, number of travel days, required overnight stops, and clickable stop details without pulling attention away from the route.",
    ],
    stats: [
      {
        label: "Planning surface",
        value: "Full-screen map",
      },
      {
        label: "Route engine",
        value: "OSRM driving routes",
      },
      {
        label: "Stop preview",
        value: "2 km radius",
      },
      {
        label: "Daily limit",
        value: "Custom hours",
      },
    ],
    techStack: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Mapping",
        items: ["MapLibre GL", "MapTiler map styles", "Browser Geolocation API"],
      },
      {
        title: "Routing and places",
        items: [
          "OSRM Routing API",
          "OpenStreetMap Nominatim API",
          "Reverse geocoding",
        ],
      },
      {
        title: "Planning logic",
        items: [
          "Route geometry parsing",
          "Travel-day calculation",
          "Stop-radius preview",
        ],
      },
    ],
    featureGroups: [
      {
        title: "Map and location",
        items: [
          "Interactive full-screen map using MapLibre GL",
          "Browser geolocation for current-location detection",
          "Start, destination, and numbered stop markers",
          "Dark map style with compact route-information panels",
        ],
      },
      {
        title: "Search and routing",
        items: [
          "Destination search powered by OpenStreetMap Nominatim",
          "Driving route calculation using OSRM routing",
          "Route visualization with clean layer and marker management",
          "Search debouncing, loading states, and permission-error handling",
        ],
      },
      {
        title: "Stop planning",
        items: [
          "Daily travel-hour input for personalized journey planning",
          "Automatic trip-day calculation for long journeys",
          "Overnight stop estimation for multi-day routes",
          "Reverse geocoding for readable nearby city or place names",
        ],
      },
      {
        title: "Traveler details",
        items: [
          "Clickable stop markers with detailed stop information",
          "Stop day, nearby place, segment distance, and total progress",
          "Coordinate display for each suggested stop point",
          "2 km stop-radius preview for future hotel discovery",
        ],
      },
    ],
    workflow: [
      {
        title: "Detect the starting point",
        description:
          "The app asks for the user's current location through the browser and uses that coordinate as the trip origin.",
      },
      {
        title: "Search and select a destination",
        description:
          "Destination search uses OpenStreetMap Nominatim so users can quickly pick the place they want to travel to.",
      },
      {
        title: "Fetch and draw the driving route",
        description:
          "RestPoint sends the start and destination coordinates to OSRM, receives the route geometry, and renders the path on the map.",
      },
      {
        title: "Calculate travel days and stops",
        description:
          "The route duration is compared against the user's daily driving-hour limit. For multi-day routes, the app finds approximate stop coordinates along the path.",
      },
      {
        title: "Label stop locations",
        description:
          "Each stop point is reverse geocoded into a readable place name and displayed with route progress, segment distance, and coordinates.",
      },
    ],
    highlights: [
      {
        title: "Turning route geometry into useful rest stops",
        description:
          "The app estimates progress along the journey from route duration, calculates target distances for each travel day, and finds the corresponding coordinates along the route path.",
      },
      {
        title: "Predictable map state",
        description:
          "Old route layers and markers are removed before rendering a new route, preventing duplicate visuals and keeping interactions stable across repeated searches.",
      },
      {
        title: "Responsive route panels",
        description:
          "The interface adapts route information, loading feedback, stop details, and mobile panels around the map so the planning flow remains usable on smaller screens.",
      },
    ],
    gallery: [
      {
        src: "/projects/restpoint/Screenshot 2026-01-10 130424.png",
        alt: "RestPoint route overview with trip details panel",
      },
      {
        src: "/projects/restpoint/Screenshot 2026-01-10 125527.png",
        alt: "RestPoint destination search on map interface",
      },
      {
        src: "/projects/restpoint/Screenshot 2026-01-09 201015.png",
        alt: "RestPoint dark map interface centered around Nepal",
      },
    ],
    links: {
      source: "https://github.com/lucid005/restpoint",
      website: "https://restpoint.vercel.app/",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
