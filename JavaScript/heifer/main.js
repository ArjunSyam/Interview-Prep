import {say} from 'cowsay';
import {moo} from "./moo.js";

console.log(
  say({
    text: moo("NAME")
  })
);
