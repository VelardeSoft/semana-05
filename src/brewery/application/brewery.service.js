import { BreweryRepository } from '../infrastructure/brewery.repository';

/**
 * Servicio de aplicación para gestionar las operaciones con cervecerías
 * @class
 */
export class BreweryService {
  constructor() {
    this.breweryRepository = new BreweryRepository();
  }

  /**
   * Obtiene la lista de cervecerías
   * @returns {Promise<Array>} Lista de cervecerías
   */
  async getBreweries() {
    try {
      return await this.breweryRepository.getBreweries();
    } catch (error) {
      console.error('Service error getting breweries:', error);
      throw error;
    }
  }

  /**
   * Busca cervecerías por nombre
   * @param {string} query - Texto para buscar
   * @returns {Promise<Array>} Lista de cervecerías que coinciden con la búsqueda
   */
  async searchBreweries(query) {
    try {
      return await this.breweryRepository.searchBreweries(query);
    } catch (error) {
      console.error('Service error searching breweries:', error);
      throw error;
    }
  }
}
