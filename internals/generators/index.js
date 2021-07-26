const storyGenerator = require('./story/index.js');
 
module.exports = plop => {
  plop.setGenerator('story', storyGenerator);
};
