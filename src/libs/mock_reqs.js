export const GetReplyFromQuestionMock = (question) =>
  new Promise((resolve) => {
    let reply = "Hello there, I'm a bot. How may I help you? ";
    const words = question.split(' ').map((word) => word.toLowerCase());
    if (words[0].toLowerCase() === 'hello') {
      reply = "Hello there, I'm a bot";
    }

    if (words.indexOf('what') > -1) {
      reply = 'What, what?';
    }

    if (words.indexOf('why') > -1) {
      reply = 'Why, why?';
    }

    if (question.toLowerCase() === 'who are you?') {
      reply = "I'm Iron Man";
    }

    setTimeout(() => {
      resolve({
        status: '201',
        data: {
          reply,
        },
      });
    }, 1000);
  });
