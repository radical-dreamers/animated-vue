
module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: 'animated-vue.js'
    },
    stylesheets: {
      joinTo: 'animated-vue.css'
    },
    templates: {
      joinTo: 'animated-vue.js'
    }
  },
  plugins: {
    babel: {
      presets: ['latest', 'stage-3']
    },
    vue: {
      extractCSS: false
    },
    eslint: {
      pattern: /^src\/.*\.js?$/,
      warnOnly: true
    },
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }
  },
  npm: {
    styles: {
      'animate.css': ['animate.css']
    }
  },
  modules: {
    nameCleaner: (path) => path.replace(/^src\/.*/, '')
  }
}
