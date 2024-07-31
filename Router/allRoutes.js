
import Route from "./route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "pages/home.html"),
    new Route("/galerie", "Galerie", "pages/galerie.html"),
    new Route("/carte", "La carte", "pages/carte.html"),
    new Route("/reserver", "Réservation", "pages/reserver.html"),
    new Route("/compte", "Mon compte", "pages/compte.html"),
    new Route("/signin", "Connexion", "pages/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "pages/signup.html", "/js/auth/signup.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";