
export class Brewery {
    /**
     * @param {Object} props - Propiedades de la cervecería
     * @param {string} props.id - Identificador único de la cervecería
     * @param {string} props.name - Nombre de la cervecería
     * @param {string} props.brewery_type - Tipo de cervecería
     * @param {string} props.city - Ciudad donde se ubica
     * @param {string} props.state - Estado donde se ubica
     * @param {string} props.country - País donde se ubica
     * @param {string} props.website_url - URL del sitio web oficial
     */
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.brewery_type = props.brewery_type;
        this.city = props.city;
        this.state = props.state;
        this.country = props.country;
        this.website_url = props.website_url;
    }

    getLogoUrl() {
        if (!this.name) return null;
        return `https://logo.clearbit.com/${this.getDomainFromUrl()}`;
    }

    getDomainFromUrl() {
        if (!this.website_url) return null;
        try {
            const url = new URL(this.website_url);
            return url.hostname;
        } catch (e) {
            return null;
        }
    }

    getKebabCaseName() {
        if (!this.name) return '';
        return this.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    /**
     * Genera la URL de landing page interna de CBIA
     * @returns {string} URL para la landing page
     */
    getLandingPageUrl() {
        return `https://cbia.org/breweries/${this.getKebabCaseName()}`;
    }
}
