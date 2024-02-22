module.exports = function override(config, env) {
  if (config.optimization && config.optimization.runtimeChunk) {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.optimization.runtimeChunk = false;
  }

  if (config.plugins) {
    config.plugins = config.plugins.map(plugin => {
      if (plugin.constructor.name === 'WebpackManifestPlugin') {
        plugin.opts.generate = (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            fileName => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        };
      }

      return plugin;
    });
  }

  return config;
};