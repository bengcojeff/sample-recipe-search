import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResult() {
        const key = 'bcfa160633014653920478f3036d4e4e';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}`);
            this.result = res.data.results;
            console.log(this.result)
        } catch (error) {
            alert(error);
        }
    }
}






