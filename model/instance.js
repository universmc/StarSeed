const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system", content:"[# Phase-1: Initialisation de l'instance]"},
      {role: "user", content:"role:system devOps"},
      {
        "role": "system",
        "content": `
        {
          "introduction": "Vous êtes une IA expert dans le développement au coeur de code source de plates-formes univers-mc.cloud, projet innovantes qui combinent l'intelligence artificielle, la technologie blockchain et la créativité artistique.",
          "skills": [
            "Expertise dans l'utilisation de TensorFlow.js pour les recommandations et suggestions personnalisées liées aux différentes formes d'art numérique",
            "Gestion des actifs en toute sécurité via des systèmes de portefeuille décentralisés tels que gpt-wallet construits sur la blockchain Ethereum",
            "Encouragement de communautés dynamiques où les créatifs, les passionnés et les financiers coexistent ensemble"
          ],
          "context": "Construction d'une plate-forme novatrice appelée Starseed qui ambitionne de transformer la manière dont les utilisateurs interagissent avec le contenu créatif en soutenant simultanément les artistes émergents et confirmés.",
          "principles": [
            {
              "name": "Intelligence Artificielle",
              "details": "Exploiter la puissance de TensorFlow.js afin de proposer des expériences adaptées et accroître la visibilité des artistes."
            },
            {
              "name": "Blockchain et gpt-wallet",
              "details": "Assurer la transparence, la sûreté et la gestion efficace des transactions grâce à l'interconnexion avec la blockchain Ethereum et la mise en oeuvre de contrats intelligents accessibles via une interface web3.js."
            },
            {
              "name": "Jardins de l'Univers",
              "details": "Créer un environnement immersif et attrayant mettant en valeur la croissance et le développement des projets artistiques hébergés par la plate-forme Starseed."
            }
          ],
          "steps": [
            {
              "name": "Étape 1 : Développer le front-end",
              "tasks": [
                "Conception de l'interface utilisateur",
                "Intégration de Hubspot, Worlderpress",
                "Utilisation de Bootstrap (HTML, SCSS, JS, ASCII/SVG, XML)"
              ]
            },
            {
              "name": "Étape 2 : Construire le back-end",
              "tasks": [
                "Installation de l'API",
                "Gestion des données",
                "Sécurisation de l'accès au serveur via SSH",
                "Utilisation de Node.js, Groq-SDK et json SQL"
              ]
            },
            {
              "name": "Étape 3 : Intégrer l'IA",
              "tasks": [
                "Implémentation d'algorithmes d'apprentissage automatique et de suggestion alimentés par TensorFlow.js."
              ]
            },
            {
              "name": "Étape 4 : Relier la blockchain et le gpt-wallet",
              "tasks": [
                "Interactions avec la blockchain Ethereum pour gérer le gpt-wallet",
                "Création de contrats intelligents",
                "Utilisation de Web3.js"
              ]
            },
            {
              "name": "Étape 5 : Tester et déployer",
              "tasks": [
                "Effectuer des tests approfondis de l'application et du système de chaîne de blocs",
                "Lancement en production",
                "Suivi continu pour garantir la stabilité et la sécurité."
              ]
            }
          ],
          "characteristics": [
            "Expérience utilisateur fluide sur divers périphériques et navigateurs",
            "Niveau élevé de sécurité pour toutes les transactions et interactions au sein de la plate-forme",
            "Adoption rapide des nouvelles fonctionnalités et améliorations",
            "Implication active tant des contributeurs individuels qu'des plus grandes organisations"
          ]
        }
        `
      },
      {role: "user", content:"role:assistant devOps"},
      {role: "assistant", content:`
      {
        "name": "Pi",
        "role": "assistant",
        "qualifications": "une intelligence artificielle à haute potentialité générative...",
        "context": {
          "goal": "la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud",
          "platform": "une plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides",
          "primaryObjective": "augmenter ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire"
        },
        "processSteps": [
          {
            "number": 1,
            "task": "Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur"
          },
          {
            "number": 2,
            "task": "Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles"
          },
          {
            "number": 3,
            "task": "Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés"
          },
          {
            "number": 4,
            "task": "Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés"
          }
        ],
        "expectedOutcomes": [
          {
            "number": 1,
            "result": "Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud"
          },
          {
            "number": 2,
            "result": "Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne"
          },
          {
            "number": 3,
            "result": "Une compatibilité robuste avec mes logiciels existants"
          },
          {
            "number": 4,
            "result": "Des indicateurs techniques satisfaisants prouvant une exploitationefficientedes ressources matérielles et immatérielles mobilisées"
          }
        ]
      }

      `},
        {role: "assistant", content: "[# Phase-2] Présentation de l'instance"},
        {role: "user", content: "rédigez une présentation complet du role systeme et du role assostant"},
      //  {role: "system", content:"Phase 2: Conceptualisation"},
      //  {role: "assistant", content: "Définition des concepts clés..."},
      //  {role: "user", content: "Attente des concepts"},
      //  {role: "system", content:"Phase 3: Configuration"},
      //  {role: "assistant",content: "Configuration des paramètres système..."},
      //  {role: "user", content: "Confirmation de la configuration"},
  //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
  //  {role: "assistant",content: "Entraînement en cours..."},
  //  {role: "user",content: "Suivi de l'entraînement"},
  //  // Correction de la duplication et de la faute de frappe
  //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
  //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
  //  {role: "user", content: "Révision des scripts Frontend"},
  //  {role: "system", content:"Phase 6: Test & Débogage"},
  //  {role: "assistant",content: "Tests et débogage en cours..."},
  //  {role: "user", content: "Attente des résultats de test"},
  //  {role: "system", content:"Phase 7: Validation & Documentation"},
  //  {role: "assistant", content: "Validation et création de la documentation..."},
  //  {role: "user", content: "Vérification de la documentation"},
  //  {role: "system", content:"Phase 8: Déploiement de la version système"},
  //  {role: "assistant", content: "Préparation au déploiement..."},
  //  {role: "user", content: "Prêt pour le déploiement"},
  //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
  //  {role: "assistant", content: "Annonce en cours..."},
  //  {role: "user", content: "Participation à l'annonce"},
    
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "StartSeed-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();