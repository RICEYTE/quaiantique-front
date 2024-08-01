
import Route from "./route.js";
/*
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
*/
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";


//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/carte", "La carte", "pages/carte.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];