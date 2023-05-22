const scriptExtensionsGlob = '?(m|c){j,t}s?x';

export default {
  '**/*': () => 'prettier . --write --loglevel=warn',
};
