import { BreweryRepository } from '../infrastructure/brewery.repository';

export class BreweryService {
  constructor() {
    this.breweryRepository = new BreweryRepository();
  }

  async getBreweries() {
    try {
      return await this.breweryRepository.getBreweries();
    } catch (error) {
      console.error('Service error getting breweries:', error);
      throw error;
    }
  }

  async searchBreweries(query) {
    try {
      return await this.breweryRepository.searchBreweries(query);
    } catch (error) {
      console.error('Service error searching breweries:', error);
      throw error;
    }
  }
}
