const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.css`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [`${srcPath}/**/*.html`],
    ejsSrc: [`${srcPath}/**/*.ejs`],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.css`,
      `${nodePath}/swiper/swiper-bundle.css`,
    ],
    concat: 'all.css',
    outputStyle: 'expanded',
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [`${srcPath}/assets/js/**/*.js`],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.js`,
      `${nodePath}/swiper/swiper-bundle.js`,
      `${nodePath}/gsap/dist/gsap.min.js`,
      // `${nodePath}/flowbite/dist/flowbite.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [`${srcPath}/assets/images/**/*`],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
