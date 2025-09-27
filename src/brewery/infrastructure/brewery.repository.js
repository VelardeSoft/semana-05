import axios from 'axios';  // Importamos axios para hacer solicitudes HTTP
import {Brewery} from '../domain/model/brewery.entity.js';


export class BreweryRepository {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://api.openbrewerydb.org/v1'
        });
    }

    async getBreweries(perPage = 20) {
        try {
            const response = await this.apiClient.get(`/breweries?per_page=${perPage}`);
            return response.data.map(breweryData => new Brewery(breweryData));
        } catch (error) {
            console.error('Error fetching breweries:', error);
            throw new Error('Failed to fetch breweries from API');
        }
    }

    async searchBreweries(name) {
        try {
            const response = await this.apiClient.get(`/breweries/search?query=${name}`);
            return response.data.map(breweryData => new Brewery(breweryData));
        } catch (error) {
            console.error('Error searching breweries:', error);
            throw new Error('Failed to search breweries from API');
        }
    }
}
