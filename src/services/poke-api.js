import axios from "axios";

class PokeService {
  constructor() {
    this.pokeApi = axios.create({
      baseURL: "https://pokeapi.co/api/v2/"
    });
  }

  async getAllPokemons() {
    const response = await this.pokeApi.get("pokemon");
    return response;
  }

  async getOnePokemon(id) {
    const response = await this.pokeApi.get(`pokemon/${id}`);
    return response;
  }

  async getAllAbilities() {
    const response = await this.pokeApi.get("ability");
    return response;
  }

  async getOneAbility(id) {
    const response = await this.pokeApi.get(`ability/${id}`);
    return response;
  }

  /*  login(user) {
     const { username, password } = user;
     return this.auth.post('/auth/login', {username, password})
       .then(({ data }) => data);
   }
 
   logout() {
     return this.auth.post('/auth/logout')
       .then(response => response.data)
   }
 
   me() {
     return this.auth.get('/auth/me')
     .then(response => response.data)
   } */
}

const pokeService = new PokeService();

export default pokeService;
