export const isExistCustomClasses = (customClasses) => {
  return Array.isArray(customClasses) ? customClasses.join(' ') : '';
};
