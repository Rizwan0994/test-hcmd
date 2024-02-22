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
        if (plugin.constructor.name === 'GenerateSW') {
          plugin.config.maximumFileSizeToCacheInBytes = 8000000; // 8MB
        }
  
        return plugin;
      });
    }
  
    return config;
  };