const AmpConfig = (providedOptions) => {
  const defaultOptions = {
    filter: /.*/,
  };

  const options = Object.assign(defaultOptions, providedOptions);

  try {
    options.filter = new RegExp(options.filter);
  } catch (e) {
    throw new Error(`filter needs to be a valid RegExp, provided : ${options.filter}`);
  }

  options.isAmp = (path) => path.endsWith('.html') && options.filter.test(path)

  return options;
};

module.exports = AmpConfig;