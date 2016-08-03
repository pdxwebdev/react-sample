const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

/**
 * Generator Meridian React
 * Generates a React Component for the Meridian Editor.
 *
 * @return none
 */
module.exports = yeoman.Base.extend({

  /**
   * Prompting
   * Sets up the prompts for the generator to fetch user input.
   *
   * @return {[type]} [description]
   */
  prompting() {
    const done = this.async();

    /**
     * Prompts
     * @type {Array}
     */
    const prompts = [{
      name: 'componentCategory', // components category subdirectory
      message: 'What category of components should this belong to?',
      default: 'forms',
    },{
      name: 'componentName', // React Component Name
      message: 'Provide a React Component Name.',
      default: 'MyComponent',
    }];

    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the ${chalk.red('Meridian React Component')} generator!`
    ));

    this.prompt(prompts, (props) => {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    });
  },

  /**
   * Writing
   * Writes files to the filesystem.
   *
   * @return {[type]} [description]
   */
  writing() {
    const props = this.props;
    const componentDirectory = `components/${props.componentCategory}/${props.componentName}`;

    // Copy component.js
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`${componentDirectory}/component.js`),
      this.props
    );

    // Copy index.js
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(`${componentDirectory}/index.js`)
    );

    // Copy styles.scss
    this.fs.copy(
      this.templatePath('styles.scss'),
      this.destinationPath(`${componentDirectory}/styles.scss`)
    );
  },
});
