import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        reservationHistory: {
            title: 'Historial de scooters alquilados',
            verDetalles: 'Ver Detalles'
        },
        reservationDetails: {
            title: 'Detalles de la reservación',
            fechaInicio: 'Fecha de inicio:'
        }
    },
    en: {
        reservationHistory: {
            title: 'Rental Scooter History',
            verDetalles: 'View Details'
        },
        reservationDetails: {
            title: 'Reservation Details',
            fechaInicio: 'Start Date:'
        }
    }
};

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
});

export default i18n;