Uma Promise é um objeto que representa o eventual sucesso ou falha de uma operação assíncrona. Ela possui três estados: pendente, resolvida (cumprida) e rejeitada. Promises oferecem uma maneira mais organizada de lidar com código assíncrono em comparação com callbacks aninhados, permitindo que você encadeie operações assíncronas usando then e trate erros usando catch.

Exemplo:
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;

    if (sucesso) {
      resolve("A operação foi concluída com sucesso!");
    } else {
      reject("Algo deu errado.");
    }
  }, 2000); // Simulando uma operação que leva 2 segundos
});

minhaPromise
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
