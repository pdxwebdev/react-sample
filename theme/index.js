import vars from './vars.json';


const fonts = vars.fonts;
// remove parentheses from font-family values
// to make value useable for inline styles
Object.keys(fonts.families).forEach((key) => {
  fonts.families[key] = fonts.families[key].replace('(', '').replace(')', '');
});


const theme = {
  ...vars,
  fonts,
};


export default theme;
