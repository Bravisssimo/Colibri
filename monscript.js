//création d'un tableau 3 dimensions contenant les tips, facts et backgrounds
const panel = new Array();

   panel[0] = new Array("Gaz ou électricité, optez pour un fournisseur d'énergie verte !","Chaque fournisseur utilise de l'énergie fossile, nucléaire ou renouvelable et a ses propres convictions. Vous avez le choix !");
   panel[1] = new Array("Lors d'une lessive, attention à la température de lavage !","La plupart de nos vêtements conseillent un lavage à maximum 30°C en machine. Sauvegardez vos habits ainsi que l'environnement !");
   panel[2] = new Array("Privilégiez l'achat de papier recyclé !","Papier recyclé = en moyenne 20 fois moins de bois, 100 fois moins d'eau et 3 fois moins d'énergie que du papier de première main !");
   panel[3] = new Array("Chez vous, fixez la température de manière raisonnable !","Augmenter d'1°C la température de dizaines de m² est très énergivore. Pensez-y lors du réglage de la température de votre foyer !");
   panel[4] = new Array("Pensez à faire un tri régulier dans votre boîte mail !","1 mail d'une newsletter représente en moyenne 10g de CO2 émis ! Pensez à vous désabonner lorsque celle-ci ne vous intéresse plus !");
   panel[5] = new Array("Une adresse mail plus utilisée ? Supprimez-la !","Les émissions de Gaz à effet de serre dûes au numérique augmentent de 8% par an et devraient doubler d'ici 2025. Au boulot !");
   panel[6] = new Array("Un trajet ? Osez le covoiturage !","Passager/conducteur, le covoiturage est souvent la solution la plus économique et vous permet de réduire votre impact écologique.");
   panel[7] = new Array("Évitez les vols intra-muros (internes à la France métropolitaine)","L'avion est énergivore en plus d'être très polluant. Limiter son utilisation réduit drastiquement votre impact écologique !");
   panel[8] = new Array("A la maison, choisissez des ampoules basse consommation !","Lampes Basse Consommation = moins énergivore, plus durable et recyclable que les lampes usuelles");
   panel[9] = new Array("Quand je laisse un logement vide pendant plus d'une semaine, je coupe l'électricité !","Selon le nombre de jours d'absence du logement, je coupe soit l'électricité soit les appareils énergivores tels que le chauffe-eau !");
   panel[10] = new Array("Pour le ménage, privilégiez les produits simples tels que le vinaigre blanc !","Il nettoie les sols, casseroles, micro-ondes, surfaces ... un produit d'entretien écologique et polyvalent en plus d'être économique !");
   panel[11] = new Array("N'hésitez pas à baisser la température jusqu'à 17°C la nuit !","Le sommeil est favorisé par une température basse (autour de 17°C). En plus de réduire votre impact écologique, dormez mieux !");
   panel[12] = new Array("Pour votre jardin, utilisez l'arrosage à l'eau de pluie !","Récupérable dans des gouttières/des bacs ou encore des récupérateurs d'eau (plusieurs tailles), pratique et écologique !");
   panel[13] = new Array("Pelures de fruits, coquilles : pensez à composter si possible vos déchets organiques !","Environ 1/3 des déchets dans la poubelle d'un ménage français peut être composté plutôt que transporté en décharge !");
   panel[14] = new Array("Ménage, entretien, hygiène : j'évite les produits jetables !","Éponges, serpillères, torchons peuvent être réutilisés, à l'opposé du papier essuie-tout ou des lingettes à usage unique par exemple.");
   panel[15] = new Array("Je me renseigne sur le tri des déchets au niveau local !","Le tri des déchets : un pilier de la réduction de son impact écologique. En cas de doute sur la recyclabilité, internet est votre ami !");
   panel[16] = new Array("Petite soif ? Je privilégie l'eau du robinet !","Les avantages par rapport à des packs sont nombreux : économique, pas de plastique et donc de déchets, et plus pratique !");
   panel[17] = new Array("Lors des courses, pensez à utiliser des sacs réutilisables pour vos fruits/légumes !","Avoir vos propres sac (papier craft, tote bag, etc) vous permet d'éviter l'usage de plastique à usage unique distribués en magasins !");
   panel[18] = new Array("Lors des courses, pensez à conserver vos sacs de courses et à les réutiliser !","En plus d'être économique, ce geste simple vous permettra d'éviter le gaspillage de sacs souvent à base de plastique !");
   panel[19] = new Array("Consommez des produits locaux et de saison !","Bon pour la planète et pour votre santé ! On évite l'importation et la culture énergivore et on encourage les producteurs locaux !");
   panel[20] = new Array("Intéressez-vous aux labels pour la viande, le poisson ou les oeufs !","Des labels comme MSC, label rouge ou bien d'autres permettent de responsaibliser vos achats en ayant un impact raisonnable !");
   panel[21] = new Array("Lors des courses, soyez conscients de votre pouvoir de consommateur !","Emballages superflus, importation de l'autre bout du monde, surpêche, ... Achetez en accord avec vos convictions !");
   panel[22] = new Array("Considérez la diminution de votre consommation quotidienne de viande !","L'élevage destiné à la production de viande, notamment bovine, est connu pour être très gourmand en énergie !");
   panel[23] = new Array("Envie de nouvelles chaussures ? Pensez aux produits de seconde main !","Economique en plus d'être écologique, cette solution évite la consommation de nouvelles ressources et le gaspillage !");
   panel[24] = new Array("Couche de glace dans le frigo/congélo ? On dégivre !","Les appareils qui produisent du froid sont très énergivores, et le givre augmente leur consommation jusqu'à 30% !");
   panel[25] = new Array("Pour le chauffage chez moi, j'utilise un thermostat !","Un système de programmation et de régulation permet de faire jusqu'à 25% d'économie sur le chauffage");
   panel[26] = new Array("Vérifiez la pression de vos pneus de voiture régulièrement !","Cela ne prend pas longtemps et permet d'éviter une surconsommation d'essence dûe aux pneus sous-gonflés !");
   panel[27] = new Array("Attention à l'utilisation de la climatisation en voiture !","Vitres fermées et utilisation raisonnable ! La clim en ville c'est jusqu'à 25% de surconsommation de carburant");
   panel[28] = new Array("Stockage de données sur le cloud (en ligne) ? On trie quand même !","Les informations sont stockées dans des serveurs qui nécessitent d'être climatisés en permanence. Un bon prétexte pour faire le tri !");
   panel[29] = new Array("Pendant la nuit, on pense à fermer les rideaux/volets/stores !","Les pertes de chaleur lorsque l'on applique pas ce geste simple vont jusqu'à 50% par temps froid !");
   panel[30] = new Array("Une impression ? Je pense au noir et blanc/recto verso !","Ce réflexe très simple permet sans effort d'économiser de l'argent, des ressources et de l'énergie !");
   panel[31] = new Array("Attention à la surcharge de mon frigo !","L'air circule moins bien, notre consommation d'électricité augmente et la durée de conservation des aliments diminue !");
   panel[32] = new Array("Un lave-vaisselle ? Je pense au mode éco !","Les programmes éco ou basse température sont efficaces et permettent de réduire sa consommation sans efforts !");
   panel[33] = new Array("Au quotidien, je privilégie les douches courtes !","Avec un pommeau standard, une douche de plus de 5 min peut consommer plus d'eau qu'un bain !");
   panel[34] = new Array("Aux toilettes, j'utilise une chasse à deux boutons !","On adapte la quantité d'eau utilisée grâce à ce type de chasse. Sans gaspillage, écologique et économique !");
   panel[35] = new Array("Pour ma douche, j'utilise un pommeau adapté !","Un pommeau de qualité c'est un débit d'eau inférieur avec une pression supérieure, tout benef !");

   //commande qui lance le tirage au sort à chaque chargement d'un nouvel onglet
window.addEventListener("load",modifyHtmlContent);

//Initialisation du compteur et stockage en local
var compteur;
var limiteReinitialisation = Math.floor(panel.length*0.99);
var chaine;
//Variable de la catégorie suivant le tirage
var cat;

if(localStorage.getItem("101")==null){
   localStorage.setItem("101","0");
   }

//fonction qui tire au sort la page (tip, fact et fond)
function modifyHtmlContent(){

   //tirage au sort   
   var tirage = Math.floor(Math.random()*panel.length);

   //BLOC QUI FAIT EN SORTE DE NE PAS REPASSER PLUSIEURS FOIS UN TIP
   //création des variables de vérification de "déjà lu" pour le while
   var regulateur = false;
   var initiateur = true;
   
   //création de la boucle de vérification de "déja lu"
   while (regulateur == true || initiateur == true){

      initiateur = false;
      if (localStorage.getItem(tirage.toString())!=null){
         tirage = Math.floor(Math.random()*panel.length);
         regulateur = true;
      }
      else {
         regulateur = false;
         localStorage.setItem(tirage.toString(),"lu");
         
         //On ajoute 1 au compteur (sauvegardé en localstorage) de tips déjà tombés
         chaine = localStorage.getItem("101");
         compteur = parseInt(chaine, 10) + 1;
         /*alert("On en est à "+compteur+" !");*/
         localStorage.setItem("101",compteur.toString());
      }
   }

   //Si on a déjà tiré 90% des tips, on réinitialise les variables "déjà lu" pour recommencer le tirage avec tous les tips
   if (compteur>=limiteReinitialisation){
      localStorage.clear();
      localStorage.setItem("101","0");
   }

   //débugeur
   //tirage = 35;

   //Attribution du tip
   document.querySelector(".tip").textContent = panel[tirage][0];

   //Attribution du fact
   document.querySelector(".fact").textContent = panel[tirage][1];

   //Attribution de la catégorie, du background et de la couleur de police suivant la catégorie tirée au sort
   if(tirage == 0 || tirage == 6 ||tirage == 7 ||tirage == 13 ||tirage == 15 ||tirage == 19 ||tirage == 22 ||tirage == 26 ||tirage == 27){
      cat = "pollution";
   } else if (tirage == 2 || tirage == 10 ||tirage == 14 ||tirage == 16 ||tirage == 17 ||tirage == 18 ||tirage == 20 ||tirage == 21 ||tirage == 23||tirage == 30){
      cat = "ressources";
   } else if (tirage == 1 || tirage == 3 ||tirage == 4 ||tirage == 5 ||tirage == 8 ||tirage == 9 ||tirage == 11 ||tirage == 24 ||tirage == 25||tirage == 28 ||tirage == 29 ||tirage == 31){
      cat = "energie";
   } else {
      cat = "eau";
   }

   switch(cat){

      case "pollution" :

         document.querySelector(".categorie").textContent = "Réduire la pollution";
         document.querySelector("section").style.backgroundImage = "url(vert.jpeg)";
         document.querySelector(".tip").style.color = "rgb(50,205,50)";
         document.querySelector(".categorie").style.color = "rgb(50,205,50)";
         document.querySelector(".fact").style.color = "rgb(50,205,50)";
         break;

      case "ressources" :
         document.querySelector(".categorie").textContent = "Économie de ressources";
         document.querySelector("section").style.backgroundImage = "url(wood.jpg)";
         document.querySelector(".tip").style.color = "rgb(205, 133, 63)";
         document.querySelector(".categorie").style.color = "rgb(205, 133, 63)";
         document.querySelector(".fact").style.color = "rgb(205, 133, 63)";
         break;

      case "energie" :
         document.querySelector(".categorie").textContent = "Économie d'énergie";
         document.querySelector("section").style.backgroundImage = "url(elec.jpg)";
         document.querySelector(".tip").style.color = "rgb(25, 25, 112)";
         document.querySelector(".categorie").style.color = "rgb(25, 25, 112)";
         document.querySelector(".fact").style.color = "rgb(25, 25, 112)";
         break;

      case "eau" :
         document.querySelector(".categorie").textContent = "Économie d'eau";
         document.querySelector("section").style.backgroundImage = "url(bulles.jpg)";
         document.querySelector(".tip").style.color = "rgb(70, 130, 180";
         document.querySelector(".categorie").style.color = "rgb(70, 130, 180";
         document.querySelector(".fact").style.color = "rgb(70, 130, 180";
         break;
   }


   if(tirage==2||tirage==4||tirage==5||tirage==7||tirage==8||tirage==11||tirage==13||tirage==22||tirage==24||tirage==25||tirage==27||tirage==29||tirage==33){
      
      switch (tirage){

         case 2 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.notre-planete.info/actualites/910-papier-recycle-environnement";
            break;

         case 4 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.20minutes.fr/planete/754847-20110707-email-19-grammes-co2-emis";
            break;

         case 5 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="http://www.senat.fr/rap/r19-555/r19-555-syn.pdf";
            break;

         case 7 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.google.com/";
            break;

         case 8 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://conseils-thermiques.org/contenu/comparatif_ampoule_incandescence_fluocompact_halogene_led.php";
            break;

         case 11 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.quelleenergie.fr/magazine/economies-energie/chauffage-economise-jusqua-7-pourcent/";
            break;

         case 13 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.zerowastefrance.org/demarche-zero-waste/composter-et-trier-les-biodechets/";
            break;

         case 22 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.google.com/";
            break;

         case 24 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.bosch-home.fr/nos-astuces/nos-conseils/froid/moins-consommer-energie-frigo";
            break;

         case 25 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.leguideduchauffage.com/la-regulation.html";
            break;

         case 27 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.maif.fr/associationsetcollectivites/collectivites-territoriales/guides-fonctionnement/eco-conduite";
            break;

         case 29 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.google.com/";
            break;

         case 33 :
            document.querySelector(".hyperlien").textContent = "infos";
            document.querySelector(".hyperlien").href ="https://www.engie.be/fr/blog/conseils-energie/le-vrai-et-le-faux-sur-notre-consommation-deau/";
            break;
      }
   }
}
