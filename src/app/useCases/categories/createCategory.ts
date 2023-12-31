import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!icon) {
      res.status(400).json({
        error: 'Icon is required'
      });
    }

    if (!name) {
      res.status(400).json({
        error: 'Name is required'
      });
    }

    const category = await Category.create({
      icon,
      name
    });

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
