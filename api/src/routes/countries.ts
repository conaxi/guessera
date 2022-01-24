import express from "express";
import controller from "../controllers/countries";

const router = express.Router();

router.get("/countries", controller.getCountries);
router.get("/countries/:ids", controller.getManyCountries);
router.get("/country/:id", controller.getCountry);

export = router;
