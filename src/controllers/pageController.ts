import { Request, Response } from 'express';
import { createMenuObj } from '../helpers/createMenuObj';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allAnimals.jpg',
    },
    pets: Pet.getAllPets(),
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('dogs'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    pets: Pet.getFromType('dog'),
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('cats'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    pets: Pet.getFromType('cat'),
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObj('fishes'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    pets: Pet.getFromType('fish'),
  });
};
