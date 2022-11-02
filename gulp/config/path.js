// Получаем имя папки нашего проекта
import * as nodePath from 'path'; // импортируем модуль
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //автоматом создается папка
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};