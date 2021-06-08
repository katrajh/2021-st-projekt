import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:8080";

export interface IRestaurant {
  id: number;
  naziv: string;
  naslov: string;
  drzava: string;
}

