import React, { useState, useEffect } from 'react';

// Hook para animaciones de scroll
function useIntersectionObserver() {
    const [isVisible, setIsVisible] = useState(false);
    const [element, setElement] = useState(null);

    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, [element]);

    return [setElement, isVisible];
}

// Datos de ejemplo de reseñas (reemplázalas con datos reales)
const reviewsData = {
    averageRating: 4.2,
    totalReviews: 149,
    googleMapsUrl: "https://maps.app.goo.gl/fDnvuVJHk1MQ2j267",
    reviews: [
        {
            id: 1,
            author: "Melisa Ruiz Díaz",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWUQYGM3xfDBh_CyA4A80iI7YFuu5AaLwgtUmDRVxH0KCRBJ44h=w108-h108-p-rp-mo-ba4-br100",
            rating: 5,
            date: "hace uno mese",
            text: "Si están por Peñiscola tienen que ir a este lugar , es parada obligatoria. No solo se come riquísimo! Comidas típicas españolas . Torrenzos , jamón  ibérico, pancitos con tomate. Realmente un manjar de sabores auténticos. Se nota que todo es de la mejor calidad. El lugar está super bien ambientado y el plus : el show que hacen Luis y Michael. Realmente vayan a vivir la experiencia 👏sin dudas volveré !¡Increíble experiencia! La paella marinera estaba espectacular y el servicio fue excepcional. El ambiente es muy acogedor y las vistas son preciosas. Definitivamente volveremos.",
            helpful: 12
        },
        {
            id: 2,
            author: "Jordi Fibla Gonzalez",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocIP9h8DhF82aMrU5QLL458pFJ6zpn5JzT1qX9mjHdwOI9-4Eg=w108-h108-p-rp-mo-br100",
            rating: 5,
            date: "hace 2 meses",
            text: "Puedo decir es un sitio espectacular , la comida de lujo , el servicio impresionante y el ambiente perfecto . Las croquetas de toro no tengo bastante papel para ponerle nota y la tabla de embutidos de lo mejorcito que he probado . Espectacular todo.",
            helpful: 8
        },
        {
            id: 3,
            author: "Victoria Tirado Lopez",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ4_upv4urwFiS14W0scKv-NP-vgJPtgGX7BCRTVk4QFjmJxg=w54-h54-p-rp-mo-br100",
            rating: 5,
            date: "hace 2 semanas",
            text: "Todo perfecto! El chorizo al infierno buenísimo, como el torrezno!!! Y Maykel el mejor camareroooooo!",
            helpful: 5
        },
        {
            id: 4,
            author: "Maria del Mar del Moral",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX_ja8-FfBeoWjtVL0ylIIZGGQ27i89eCXGGw_twJI86Wx2BO6F=w108-h108-p-rp-mo-ba2-br100",
            rating: 5,
            date: "hace 1 semana",
            text: "El sitio más increíble de todo Peñiscola! Espectacular 😍 los chicos son muy amables, divertidos y muy muy muy majos. Fuimos a cenar dos noches y nos sorprendieron gratamente, tanto con la comida como con su forma de ser… El jamón que probamos allí nos encantó, las croquetas de jamón… Todo!! Sin duda, repetiremos cuando volvamos😁❤️",
            helpful: 10
        },
        {
            id: 5,
            author: "David",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocJkSJ8bsOt71cYSEN4FiNfzMdyP0Tbzk5WeSXCKRtbgau9cmg=w54-h54-p-rp-mo-br100",
            rating: 5,
            date: "hace 2 meses",
            text: "Lugar idóneo para disfrutar en familia. Pedimos unas zamburiñas y boquerones frescos 100% recomendable. Volveremos.",
            helpful: 7
        },
        {
            id: 6,
            author: "Pepet",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocK6TaW_60R0U-hgmn7gQnDFHjci-c0ieutMORZUEXrSIdxNEg=w54-h54-p-rp-mo-br100",
            rating: 5,
            date: "hace 1 mese",
            text: "Comida espectacular y simpatia de los camareros.",
            helpful: 7
        },
        {
            id: 7,
            author: "S. C. I.",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVpnlFk71Gw3AXheFobN_WNMC_uwzyztzKT_vtAj7-PgYLYjvo=w54-h54-p-rp-mo-ba3-br100",
            rating: 5,
            date: "hace una semana",
            text: "1 dia elegimos para tomar una cerveza y la verdad que para mí la atención chapo cerveza muy fría y un tapeo muy rico,torreznos de 10, mou muy atento y muy majete 2 dia boquerones de 10...recomendable.",
            helpful: 7
        },
        {
            id: 8,
            author: "Benet Salas",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocIIDO-6PKglZOzLPiGW6Z82Rgw8vKP5cpmTInIuJDA1N4Z_IQ=w54-h54-p-rp-mo-br100",
            rating: 5,
            date: "hace una semana",
            text: "Todo buenísimo y un trato espectacular. En especial al camareto Mou. Muy satisfechos Muchas gracias !!!",
            helpful: 7
        },
        {
            id: 9,
            author: "Osccar Nasa",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXxo4I_v5_V0irqBfFlEaxTjkRCJoonYYM256AzazFNrnC-2OaR=w54-h54-p-rp-mo-br100",
            rating: 5,
            date: "hace una semana",
            text: "Muy recomendable, cuando venimos a Peñíscola repetimos , jamón,quesos , torreznos todo buenísimo como siempre atentos y simpáticos.",
            helpful: 7
        }
    ]
};

// Componente de estrella
function StarRating({ rating, size = "w-5 h-5" }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`${size} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

// Componente de reseña individual
function ReviewCard({ review, index, isVisible }) {
    return (
        <div
            className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform border border-gray-100 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            {/* Header con usuario y rating */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                        loading="lazy"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                            {review.author}
                        </h4>
                        <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <StarRating rating={review.rating} size="w-4 h-4" />
                    <span className="text-xs text-gray-400">{review.rating}/5</span>
                </div>
            </div>

            {/* Contenido de la reseña */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                {review.text}
            </p>

            {/* Footer con helpful */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V9a2 2 0 00-2-2M7 20l.818-3.272c.163-.65.735-1.128 1.414-1.128h4.385c.155 0 .31.018.463.053L17 17V9a2 2 0 00-2-2M5 17v4a2 2 0 002 2h.095" />
                    </svg>
                    Útil ({review.helpful})
                </button>

                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>
        </div>
    );
}

// Componente principal
export default function GoogleReviews() {
    const [ref, isVisible] = useIntersectionObserver();
    const [showAllReviews, setShowAllReviews] = useState(false);

    const displayedReviews = showAllReviews
        ? reviewsData.reviews
        : reviewsData.reviews.slice(0, 3);

    return (
        <section
            id="reseñas"
            ref={ref}
            className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header con estadísticas */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="inline-flex items-center gap-3 mb-4">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mr-4">
                            Reseñas de Google
                        </h2>
                    </div>

                    {/* Puntuación principal */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 inline-block mb-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <div className="text-center sm:text-left">
                                <div className="text-5xl md:text-6xl font-black text-gray-800 mb-2">
                                    {reviewsData.averageRating}
                                </div>
                                <StarRating rating={Math.floor(reviewsData.averageRating)} size="w-6 h-6 md:w-7 md:h-7" />
                            </div>

                            <div className="h-16 w-px bg-gray-200 hidden sm:block" />

                            <div className="text-center sm:text-left">
                                <p className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {reviewsData.totalReviews.toLocaleString()}
                                </p>
                                <p className="text-gray-600">reseñas totales</p>
                            </div>
                        </div>
                    </div>

                    {/* Botón a Google Maps */}
                    <div className="mb-8">
                        <a
                            href={reviewsData.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                            </svg>
                            Ver en Google Maps
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Grid de reseñas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {displayedReviews.map((review, index) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Botón para mostrar más reseñas */}
                {!showAllReviews && reviewsData.reviews.length > 3 && (
                    <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <button
                            onClick={() => setShowAllReviews(true)}
                            className="group px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-full hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <span className="flex items-center gap-2">
                                Ver más reseñas
                                <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                )}

                {/* Footer con llamada a acción */}
                <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-100">
                        <p className="text-lg md:text-xl text-gray-800 mb-4 font-medium">
                            ¿Ya nos has visitado? ¡Comparte tu experiencia!
                        </p>
                        <a
                            href={reviewsData.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Escribir reseña
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}