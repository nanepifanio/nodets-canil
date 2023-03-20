import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObj } from '../helpers/createMenuObj';

export const search = (req: Request, res: Response) => {
  const { name } = req.query;

  res.render('pages/page', {
    menu: createMenuObj(''),
    pets: Pet.getFromName(name as string),
    query: name,
  });
};
