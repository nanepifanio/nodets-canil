type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObj = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  };

  if (activeMenu !== '' && activeMenu in returnObject) {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
