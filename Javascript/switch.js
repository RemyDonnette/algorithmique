prompt.start();

prompt.get("couleur")

// if (couleur = "rouge") {
//      console.log("Danger !");
// } else if (couleur = "orange") {
//      console.log("Attention")
// } else if (couleur = "vert") {
//      console.log("Securité");
// }

switch (couleur) {
    case "rouge":
        console.log("Danger !");
        break;
    case "orange":
        console.log("Attention");
        break;
    case "vert":
        console.log("Sécurité");
        break;
    default:
        console.log("Couleur inconnue")
        break;
}