module.exports = {
  description: 'Add a story',
  prompts: [
    {
      type: 'input',
      name: 'title',
      message: 'What should the story title be?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'The story title is required';
      },
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who will be the author of this story?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'The story date is required';
      },
    },
    {
      type: 'input',
      name: 'date',
      message: 'What date was this story written on?',
      default: new Date().toISOString().slice(0, 10),
      validate: value => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return true;
        }
        return 'The story date must follow YYYY-MM-DD';
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../../content/posts/{{date}}-{{dashCase title}}/index.md',
      abortOnFail: true,
      templateFile: './story/index.md.hbs',
    },
  ],
};
