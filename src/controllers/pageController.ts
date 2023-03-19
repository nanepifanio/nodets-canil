import { Request, Response } from 'express';
import { createMenuObj } from '../helpers/createMenuObj';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allAnimals.jpg',
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('dogs'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('cats'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('fishes'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
  });
};
