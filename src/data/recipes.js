import { images } from "../assets.js";

export const recipes = [
  {
    id: "taco-salad",
    title: "Taco salad saludable",
    description: "Ligera y lista en pocos minutos.",
    time: "15 min",
    image: images.heroDesktop,
    mobileImage: images.heroMobile,
    alt: "Ensalada tipo taco",
  },
  {
    id: "bowl-energetico",
    title: "Bowl energético",
    description: "Completo, saciante y fácil.",
    time: "25 min",
    image: images.recipe02,
    alt: "Bowl energético con ingredientes frescos",
  },
  {
    id: "plato-equilibrado",
    title: "Plato equilibrado",
    description: "Ideal para comida o cena.",
    time: "20 min",
    image: images.recipe03,
    alt: "Plato equilibrado",
  },
  {
    id: "fideos-carne",
    title: "Fideos con carne",
    description: "Rápida y con mucho sabor.",
    time: "25 min",
    image: images.recipe04,
    alt: "Fideos con carne",
    detailPath: "#/detalle",
  },
  {
    id: "salmon-verduras",
    title: "Salmón con verduras",
    description: "Ligera y rica en omega 3.",
    time: "30 min",
    image: images.recipe05,
    alt: "Salmón con verduras",
  },
  {
    id: "tostadas-saludables",
    title: "Tostadas saludables",
    description: "Perfectas para un desayuno rápido.",
    time: "10 min",
    image: images.recipe06,
    alt: "Tostadas saludables",
  },
  {
    id: "ensalada-quinoa",
    title: "Ensalada de quinoa",
    description: "Buena opción vegetal y saciante.",
    time: "18 min",
    image: images.recipe07,
    alt: "Ensalada de quinoa",
  },
  {
    id: "crema-verduras",
    title: "Crema de verduras",
    description: "Suave, ligera y reconfortante.",
    time: "22 min",
    image: images.recipe08,
    alt: "Crema de verduras",
  },
  {
    id: "pasta-integral",
    title: "Pasta integral",
    description: "Energía sostenida para tu día.",
    time: "28 min",
    image: images.recipe09,
    alt: "Pasta integral",
  },
];

export const todayRecipes = [
  {
    title: "Ensalada fresca",
    description: "Lista en 15 min",
    image: images.recipe01,
    alt: "Ensalada fresca",
  },
  {
    title: "Bowl energético",
    description: "Completo · 25 min",
    image: images.recipe02,
    alt: "Bowl energético",
  },
  {
    title: "Plato equilibrado",
    description: "Rápido · 20 min",
    image: images.recipe03,
    alt: "Plato equilibrado",
  },
];
