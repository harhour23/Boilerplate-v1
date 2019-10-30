"use strict";

/**
 *  Ajout de Bootstrap
**/
import "bootstrap";

import "../css/style.scss";




/* --------------- CODE --------------- */
// eslint-disable-next-line no-console
console.log("--------------- JS ---------------");


import { monCompteur, incrementeMonCompteur } from "./librairie";

console.log(monCompteur);

incrementeMonCompteur();

console.log(monCompteur);