const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Liste de citations prédéfinies
const suggestions = [
  {
    suggestion: "Aider 'Pi' une Ia représenter par cette https://emojis.sh > [✨.ia] à intégrer des idées dans le Plan de developpement pour le projet [univers-mc.cloud] Univers virtuel multidimensionnelle",
    author: "Pi 3,14"
},
  // Ajoutez plus de citations ici...
];

async function main(
) {
  // Sélectionnez aléatoirement une suggestion de la liste des suggestions prédéfinies
const { suggestion, author } = suggestions[Math.floor(Math.random() * suggestions.length)];

  groq.chat.completions.create({
    messages: [
        {
            role: "system",
            content: `"initialisation des ${suggestion} avec [🌴.Groq]='groq' system='[🌌.systemDream]' avec '[📔.codex]' comme 'role:assistant' `
    },
      {
        role: "user",
        content: `"${suggestion}" - ${author}`
},
      {
        role: "assistant",
        content: "Rédige-moi une Présentation Metaphique, un Plan de developpement sur ta compréhension ou interprétation du projet avec les `'${suggestion}'' - ${author}` . Fais preuve d'originalité et de profondeur dans ton analyse en explorant différents aspects des `${suggestion}` et en liant ces éléments à des concepts plus larges."
}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.2,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false,
  })
    .then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath ="ln-sit_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log("Documentation générée et enregistrée dans " + outputFilePath);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

main();
