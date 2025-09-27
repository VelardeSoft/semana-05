import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome to Craft Beer International Association',
    craftBreweries: 'Craft Breweries',
    breweryType: 'Brewery Type',
    location: 'Location',
    visitWebsite: 'Visit Website',
    viewDetails: 'View Details',
    searchBreweries: 'Search breweries...',
    noBreweriesFound: 'No breweries found matching your search.',
    loading: 'Loading breweries...'
  },
  es: {
    welcome: 'Bienvenido a la Asociación Internacional de Cerveza Artesanal',
    craftBreweries: 'Cervecerías Artesanales',
    breweryType: 'Tipo de Cervecería',
    location: 'Ubicación',
    visitWebsite: 'Visitar Sitio Web',
    viewDetails: 'Ver Detalles',
    searchBreweries: 'Buscar cervecerías...',
    noBreweriesFound: 'No se encontraron cervecerías que coincidan con tu búsqueda.',
    loading: 'Cargando cervecerías...'
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});
