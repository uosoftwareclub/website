module.exports = {
  description: 'Add an author',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your full name?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'A full name is required.';
      },
    },
    {
      type: 'input',
      name: 'username',
      message: 'What would you like your username to be?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'A username is required.';
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../../content/authors/{{username}}.yml',
      abortOnFail: true,
      templateFile: './author/index.yml.hbs',
    },
  ],
};
