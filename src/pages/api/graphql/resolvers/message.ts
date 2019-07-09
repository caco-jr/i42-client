export default {
  Query: {
    messages(parent, args, context) {
      return [
        { text: 'Olá esse é um teste haha' },
        { text: 'Testando a mensagem' }
      ];
    }
  }
};
