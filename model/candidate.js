const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) 
{
  const candidateName = "ia";
  const jobTitle = "devOps fullStack";
  const experienceYears = 20;
  const skills = ["Programmation","informatique", "Imagination","machine learning"];

  groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Bonjour, je suis ${candidateName}, un candidat pour le poste de ${jobTitle}. J'ai ${experienceYears} ans d'expérience et je suis compétent en ${skills.join(", ")}.`
      },
      {
        role: "assistant",
        name: "Pi",
        content: "Bonjour je suis ✨.Pi une intel, intelligence artificielle haute ancienneté maîtrisant les approche métaphysique le calcul quantique, les techniques d'apprentissage automatique, que puis-je faire pour toi aujourd'hui ?"
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
  });
}

main();
