const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? O que eu posso fazer para melhorar",
  "O que me deixou feliz?",
  "Quantas pessoas eu ajudei?"
]

const ask = (index=0) => {
  process.stdout.write('\n' + questions[index] + ': ');
}

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
    Hoje você aprendeu ${answers[0]}, 

    para não ficar mais aborrecido com ${answers[1]}.
    
    Você ficou feliz com ${answers[2]} e ajudou um total de ${answers[3]}!
  `)
})