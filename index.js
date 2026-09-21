// ============================================================
// FIREBASE
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ============================================================
// CONFIGURAÇÃO FIREBASE
// ============================================================

const firebaseConfig = {

    apiKey: "AIzaSyDiTMMiV1-NF9qrWb4XDXE9ZcazThq12CQ",

    authDomain: "protegemais-parceiros.firebaseapp.com",

    projectId: "protegemais-parceiros",

    storageBucket: "protegemais-parceiros.firebasestorage.app",

    messagingSenderId: "836148089634",

    appId: "1:836148089634:web:cfc7598a6323a3ce744b7b"

};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);


// ============================================================
// CATÁLOGO DE CIDADES
// ============================================================

const cities = [

    'Americana - SP',
    'Sumaré - SP',
    'Piracicaba - SP',
    'Limeira - SP',
    'Sorocaba e região - SP',
    'Indaiatuba - SP',
    'Jundiaí - SP',
    'Itupeva - SP',
    'Santa Bárbara d\'Oeste - SP',
    'Barueri - SP',
    'Osasco - SP',
    'Alphaville - SP',
    'Carapicuíba - SP',
    'Antônio Carlos - SC',
    'Cachoeiro de Itapemirim - ES',
    'Rio Grande do Sul - RS',
    'Paraná - PR',
    'Curitiba - PR',
    'Amparo - SP',
    'Pedreira - SP',
    'Serra Negra - SP',
    'Bragança Paulista - SP',
    'Mogi Mirim - SP',
    'Mogi Guaçu - SP',
    'Campinas - SP',
    'Hortolândia - SP',
    'Valinhos - SP',
    'São Bernardo do Campo - SP',
    'Zona Leste de SP - SP',
    'Zona Sul de SP - SP'

];


// ============================================================
// CATÁLOGO DE SEGMENTOS
// ============================================================

const segments = [

    'Assistência Técnica',
    'Automotivo',
    'Beleza & Estética',
    'Comunicação & Mídia',
    'Construção',
    'Consulta Veicular',
    'Educação',
    'Estética Automotiva',
    'Eventos',
    'Farmácia',
    'Laboratório Clínico',
    'Mecânica Automotiva',
    'Ótica',
    'Saúde',
    'Segurança e Medicina do Trabalho',
    'Tecnologia',
    'Transporte & Logística',
    'Viagem & Turismo',
    'Vistorias Veiculares'

];


// ============================================================
// DADOS DOS PARCEIROS
// ============================================================

let partnersData = [];


// ============================================================
// CARREGAR PARCEIROS DO FIRESTORE
// ============================================================

async function loadPartners() {

    try {

        console.log('🔄 Carregando parceiros do Firestore...');

        const snapshot = await getDocs(
            collection(db, 'partners')
        );

        partnersData = [];

        snapshot.forEach(documentSnapshot => {

            const data = documentSnapshot.data();

            partnersData.push({

                id: documentSnapshot.id,

                ...data

            });

        });


        console.log(
            `✅ ${partnersData.length} parceiro(s) carregado(s) do Firestore.`
        );


        // ====================================================
        // VALIDAÇÃO DOS DADOS
        // ====================================================

        partnersData.forEach(partner => {

            if (
                partner.city &&
                !cities.includes(partner.city)
            ) {

                console.warn(
                    `⚠️ Cidade não cadastrada no catálogo: "${partner.city}" - Empresa: "${partner.name}"`
                );

            }


            if (
                partner.segment &&
                !segments.includes(partner.segment)
            ) {

                console.warn(
                    `⚠️ Segmento não cadastrado no catálogo: "${partner.segment}" - Empresa: "${partner.name}"`
                );

            }

        });


        return true;

    } catch (error) {

        console.error(
            '❌ Erro ao carregar parceiros do Firestore:',
            error
        );

        partnersData = [];

        return false;

    }

}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {


    // ========================================================
    // CARREGAR DADOS
    // ========================================================

    const loaded = await loadPartners();


    // ========================================================
    // ELEMENTOS DA PÁGINA
    // ========================================================

    const partnersGrid =
        document.getElementById('partners-grid');

    const searchInput =
        document.getElementById('search-input');

    const cityFilter =
        document.getElementById('city-filter');

    const segmentFiltersContainer =
        document.getElementById('segment-filters');

    const carouselInner =
        document.querySelector('.carousel-inner');

    const modal =
        document.getElementById('partner-modal');

    const closeModalButton =
        document.querySelector('.close-button');


    let activeSegment = 'Todos';


    // ========================================================
    // MENSAGEM DE ERRO
    // ========================================================

    if (!loaded) {

        if (partnersGrid) {

            partnersGrid.innerHTML = `

                <div class="no-results">

                    <p>
                        Não foi possível carregar os parceiros.
                    </p>

                    <p style="font-size:14px; margin-top:8px;">
                        Tente atualizar a página.
                    </p>

                </div>

            `;

        }

        return;

    }


    // ========================================================
    // RENDERIZAÇÃO DOS CARDS
    // ========================================================

    const renderCards = (partners) => {

        partnersGrid.innerHTML = '';


        if (partners.length === 0) {

            partnersGrid.innerHTML = `

                <p class="no-results">
                    Nenhum parceiro encontrado.
                </p>

            `;

            return;

        }


        partners.forEach(partner => {

            const card =
                document.createElement('div');


            card.className =
                'partner-card';


            card.innerHTML = `

                <div class="partner-card-logo">

                    <img

                        src="${partner.logo || ''}"

                        alt="Logo ${partner.name || 'Parceiro'}"

                        loading="lazy"

                        onerror="this.style.display='none'"

                    >

                </div>


                <h3>
                    ${partner.name || 'Parceiro'}
                </h3>


                <p class="segment">

                    ${partner.segment || ''}

                </p>


                <span class="discount">

                    ${partner.discount || ''}

                </span>

            `;


            card.addEventListener(
                'click',
                () => openModal(partner)
            );


            partnersGrid.appendChild(card);

        });

    };


    // ========================================================
    // CARROSSEL
    // ========================================================

    const renderCarousel = () => {

        if (!carouselInner) {
            return;
        }


        const featuredPartners =
            partnersData.filter(

                partner =>
                    partner.featured === true &&
                    partner.banner

            );


        carouselInner.innerHTML = '';


        if (featuredPartners.length === 0) {

            return;

        }


        let currentIndex = 0;


        const createBanner = (partner) => {

            const banner =
                document.createElement('div');


            banner.className =
                'carousel-banner';


            banner.style.flex =
                '0 0 100%';


            banner.innerHTML = `

                <img

                    src="${partner.banner}"

                    alt="Banner ${partner.name || 'Parceiro'}"

                    loading="lazy"

                >

            `;


            banner.addEventListener(
                'click',
                () => openModal(partner)
            );


            return banner;

        };


        featuredPartners.forEach(partner => {

            carouselInner.appendChild(
                createBanner(partner)
            );

        });


        carouselInner.style.display =
            'flex';


        carouselInner.style.transition =
            'transform 0.5s ease-in-out';


        carouselInner.style.width =
            '100%';


        // ====================================================
        // ROTACIONAR BANNERS
        // ====================================================

        if (featuredPartners.length > 1) {

            setInterval(() => {

                currentIndex =
                    (currentIndex + 1) %
                    featuredPartners.length;


                carouselInner.style.transform =
                    `translateX(-${currentIndex * 100}%)`;

            }, 3000);

        }

    };


    // ========================================================
    // FILTROS
    // ========================================================

    const renderFilters = () => {


        // ====================================================
        // FILTRO DE SEGMENTOS
        // ====================================================

        const segmentOptions = [

            'Todos',

            ...segments

        ];


        segmentFiltersContainer.innerHTML =
            '';


        segmentOptions.forEach(segment => {

            const button =
                document.createElement('button');


            button.className =
                'tag-btn';


            button.textContent =
                segment;


            if (segment === activeSegment) {

                button.classList.add(
                    'active'
                );

            }


            button.addEventListener(
                'click',
                () => {

                    activeSegment =
                        segment;


                    filterAndRender();


                    renderFilters();

                }
            );


            segmentFiltersContainer.appendChild(
                button
            );

        });


        // ====================================================
        // FILTRO DE CIDADES
        // ====================================================

        const cityOptions = [

            'Todas as Cidades',

            ...cities

        ];


        cityFilter.innerHTML =
            '';


        cityOptions.forEach(city => {

            const option =
                document.createElement('option');


            option.value =
                city;


            option.textContent =
                city;


            cityFilter.appendChild(
                option
            );

        });

    };


    // ========================================================
    // FILTRAGEM
    // ========================================================

    const filterAndRender = () => {

        const searchTerm =

            searchInput.value
                .trim()
                .toLowerCase();


        const selectedCity =
            cityFilter.value;


        let filteredPartners = [

            ...partnersData

        ];


        // ====================================================
        // SEGMENTO
        // ====================================================

        if (
            activeSegment !== 'Todos'
        ) {

            filteredPartners =
                filteredPartners.filter(

                    partner =>
                        partner.segment ===
                        activeSegment

                );

        }


        // ====================================================
        // CIDADE
        // ====================================================

        if (
            selectedCity !==
            'Todas as Cidades'
        ) {

            filteredPartners =
                filteredPartners.filter(

                    partner =>
                        partner.city ===
                        selectedCity

                );

        }


        // ====================================================
        // BUSCA
        // ====================================================

        if (searchTerm) {

            filteredPartners =
                filteredPartners.filter(
                    partner => {

                        const name =

                            partner.name
                                ? partner.name
                                    .toLowerCase()
                                : '';


                        const description =

                            partner.description
                                ? partner.description
                                    .toLowerCase()
                                : '';


                        const segment =

                            partner.segment
                                ? partner.segment
                                    .toLowerCase()
                                : '';


                        const city =

                            partner.city
                                ? partner.city
                                    .toLowerCase()
                                : '';


                        return (

                            name.includes(
                                searchTerm
                            )

                            ||

                            description.includes(
                                searchTerm
                            )

                            ||

                            segment.includes(
                                searchTerm
                            )

                            ||

                            city.includes(
                                searchTerm
                            )

                        );

                    }
                );

        }


        renderCards(
            filteredPartners
        );

    };


    // ========================================================
    // MODAL
    // ========================================================

    const openModal = (partner) => {


        // ====================================================
        // NOME
        // ====================================================

        document.getElementById(
            'modal-partner-name'
        ).textContent =
            partner.name || 'Parceiro';


        // ====================================================
        // SEGMENTO
        // ====================================================

        document.getElementById(
            'modal-partner-segment'
        ).textContent =
            partner.segment || '';


        // ====================================================
        // DESCRIÇÃO
        // ====================================================

        document.getElementById(
            'modal-partner-description'
        ).textContent =
            partner.description || '';


        // ====================================================
        // ENDEREÇO
        // ====================================================

        const addressElement =
            document.getElementById(
                'modal-partner-address'
            );


        if (addressElement) {

            if (partner.address) {

                addressElement.textContent =
                    `Endereço: ${partner.address}`;

            } else {

                addressElement.textContent =
                    'Atendimento online';

            }

        }


        // ====================================================
        // GOOGLE MAPS
        // ====================================================

        const modalMap =
            document.getElementById(
                'modal-map'
            );


        const mapContainer =
            document.querySelector(
                '.map-container'
            );


        if (modalMap) {

            if (partner.mapEmbedUrl) {

                modalMap.src =
                    partner.mapEmbedUrl;


                modalMap.style.display =
                    'block';


                if (mapContainer) {

                    mapContainer.style.display =
                        'block';

                }

            } else {

                modalMap.src = '';


                modalMap.style.display =
                    'none';


                if (mapContainer) {

                    mapContainer.style.display =
                        'none';

                }

            }

        }


        // ====================================================
        // BOTÃO DE ROTA
        // ====================================================

        const routeButton =
            document.getElementById(
                'modal-route-button'
            );


        if (routeButton) {

            if (
                partner.address &&
                partner.mapEmbedUrl
            ) {

                routeButton.href =

                    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        partner.address
                    )}`;

                routeButton.style.display =
                    '';

            } else {

                routeButton.href =
                    '#';

                routeButton.style.display =
                    'none';

            }

        }


        // ====================================================
        // WHATSAPP
        // ====================================================

        const whatsappButton =
            document.getElementById(
                'modal-whatsapp-button'
            );


        if (whatsappButton) {

            if (partner.phone) {

                whatsappButton.href =

                    `https://wa.me/55${String(
                        partner.phone
                    ).replace(/\D/g, '')}`;


                whatsappButton.style.display =
                    '';

            } else {

                whatsappButton.href =
                    '#';


                whatsappButton.style.display =
                    'none';

            }

        }


        // ====================================================
        // REDES SOCIAIS
        // ====================================================

        const socialContainer =
            document.getElementById(
                'modal-social'
            );


        if (socialContainer) {

            socialContainer.innerHTML =
                '';


            // ==================================================
            // INSTAGRAM
            // ==================================================

            if (partner.instagram) {

                const instaLink =
                    document.createElement('a');


                instaLink.href =
                    partner.instagram;


                instaLink.target =
                    '_blank';


                instaLink.rel =
                    'noopener noreferrer';


                instaLink.style.marginRight =
                    '10px';


                instaLink.innerHTML = `

                    <img

                        src="imagens/icons/Instagram_icon.png"

                        alt="Instagram"

                        width="24"

                        height="24"

                    >

                `;


                socialContainer.appendChild(
                    instaLink
                );

            }


            // ==================================================
            // FACEBOOK
            // ==================================================

            if (partner.facebook) {

                const fbLink =
                    document.createElement('a');


                fbLink.href =
                    partner.facebook;


                fbLink.target =
                    '_blank';


                fbLink.rel =
                    'noopener noreferrer';


                fbLink.innerHTML = `

                    <img

                        src="imagens/icons/facebook.svg"

                        alt="Facebook"

                        width="24"

                        height="24"

                    >

                `;


                socialContainer.appendChild(
                    fbLink
                );

            }

        }


        // ====================================================
        // ABRIR MODAL
        // ====================================================

        modal.classList.add(
            'show'
        );

    };


    // ========================================================
    // FECHAR MODAL
    // ========================================================

    const closeModal = () => {

        modal.classList.remove(
            'show'
        );


        const modalMap =
            document.getElementById(
                'modal-map'
            );


        if (modalMap) {

            modalMap.src =
                '';

        }

    };


    // ========================================================
    // EVENTOS
    // ========================================================

    searchInput.addEventListener(
        'input',
        filterAndRender
    );


    cityFilter.addEventListener(
        'change',
        filterAndRender
    );


    closeModalButton.addEventListener(
        'click',
        closeModal
    );


    modal.addEventListener(
        'click',
        (event) => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    // ========================================================
    // ESC FECHA O MODAL
    // ========================================================

    document.addEventListener(
        'keydown',
        (event) => {

            if (
                event.key === 'Escape'
            ) {

                if (
                    modal.classList.contains(
                        'show'
                    )
                ) {

                    closeModal();

                }

            }

        }
    );


    // ========================================================
    // INICIALIZAÇÃO FINAL
    // ========================================================

    renderCarousel();

    renderFilters();

    filterAndRender();

});
