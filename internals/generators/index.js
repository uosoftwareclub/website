const storyGenerator = require('./story/index.js');
const authorGenerator = require('./author/index.js'); 

module.exports = plop => {
  plop.setGenerator('story', storyGenerator);
  plop.setGenerator('author', authorGenerator);
};
