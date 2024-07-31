
import Route from "./route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "pages/home.html"),
    new Route("/galerie", "Galerie", "pages/galerie.html"),
    new Route("/carte", "La carte", "pages/carte.html"),
    new Route("/reservations", "Les réservations", "pages/reservations.html"),
    new Route("/compte", "Mon compte", "pages/compte.html"),
    new Route("/login", "Connexion", "pages/login.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";