import { isExistCustomClasses } from './isExistCustomClasses';

export const combineClasses = (defaultClasses, customClasses) => {
  return [...defaultClasses, isExistCustomClasses(customClasses)].join(' ');
};
