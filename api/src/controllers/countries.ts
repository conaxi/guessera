import { Request, Response, NextFunction } from "express";
import { Pool } from "pg";

interface Country {
  id: Number;
  name: string;
  lat: Number;
  lng: Number;
  correct: Boolean;
}

const pool: Pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const getCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  pool.query(`SELECT * FROM countries ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getManyCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let ids: string = req.params.ids;
  pool.query(`SELECT * FROM countries WHERE id IN ${ids}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getCountry = async (req: Request, res: Response, next: NextFunction) => {
  let id: Number = parseInt(req.params.id);
  pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export default { getCountries, getCountry, getManyCountries };
