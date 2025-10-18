const partnersData = [
{
        id: 1,
        name: 'Nicped Viagens e Turismo',
        segment: 'Viagem & Turismo',
        description: 'Passagem Aérea, Cruzeiros, Pacotes de Viagens para os destinos mais incríveis do Brasil e do Mundo.',
        discount: '10% para Associados ProtegeMais',
        logo: 'imagens/Nicped Viagens e Turismo/logoNicped.png',
        banner: 'imagens/Nicped Viagens e Turismo/capaNicped.png',
        phone: '19920069671',
        address: 'Av. Affonso Pansan, nº 175, Vila Bertini/Americana – SP/ CEP 13.473-620',
        city: 'Americana - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0321524627584!2d-47.299064927488594!3d-22.72704628588198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a085d0b6623%3A0xb44a064ff7a95b3f!2sAv.%20Afonso%20Pansan%2C%20175%20-%20Vila%20Bertini%2C%20Americana%20-%20SP%2C%2013473-620!5e0!3m2!1spt-BR!2sbr!4v1753491828711!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 2,
        name: 'DevPage',
        segment: 'Tecnologia',
        description: 'DevPage é especializada em criação de sites/landing page sob demanda',
        discount: '10% em serviços',
        logo: 'imagens/DevPage/logodevpage.png',
        banner: 'imagens/DevPage/bannerdevpage.png',
        phone: '18981167681',
        address: 'R. Itália - Jd. Paulistano, Americana - SP',
        city: 'Americana - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0910778763573!2d-47.3342872!3d-22.724855899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bb3ac0c4d87%3A0x4da0bbb69bb3b68d!2sR.%20It%C3%A1lia%2C%20351%20-%20Jardim%20Paulistano%2C%20Americana%20-%20SP%2C%2013471-550!5e0!3m2!1spt-BR!2sbr!4v1753745559290!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: true,
        instagram: 'https://www.instagram.com/devpage.studio',
    },
    {
        id: 3,
        name: 'Programa TopRebolças',
        segment: 'Comunicação & Mídia',
        description: 'Planos de Anúncios em Portal de Notícias e Programas de Rádio',
        discount: '10% nos Planos de Anúncios',
        logo: 'imagens/toprebolcas/logotoprebolcas.png',
        banner: 'imagens/toprebolcas/bannertoprebolcas.png',
        phone: '19998603454',
        address: 'Rua José Maria Barroca, 540 - Centro, Sumaré - SP',
        city: 'Sumaré - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5315793004606!2d-47.27554982545197!3d-22.819814534767033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bd427f17c407%3A0x18fedf3a594070f5!2sR.%20Jos%C3%A9%20Maria%20Barroca%2C%20540%20-%20Centro%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-022!5e0!3m2!1spt-BR!2sbr!4v1753746219284!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: true,
    },
    {
        id: 4,
        name: 'Alcântara Cabeleireiro',
        segment: 'Beleza & Estética',
        description: 'Corte de cabelos masculinos adulto e criança',
        discount: '10% de desconto os cortes Masculinos',
        logo: 'imagens/AlcantaraCabeleireiro/logoAlcantara.png',
        phone: '19987190798',
        address: 'Av. Carlos Botelho, 1696 - Santa Rosa, Nova Odessa - SP, 13385-060',
        city: 'Nova Odessa - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3657666119484!2d-47.28942382545311!3d-22.788906933667228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8978c0fe0d6fb%3A0x9fd555b5eb3107b6!2sAlc%C3%A2ntara%20Cabeleireiro!5e0!3m2!1spt-BR!2sbr!4v1754143067819!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: false,
    },
    {
        id: 5,
        name: 'Araujo Guincho Piracicaba',
        segment: 'Transporte & Logística',
        description: 'GUINCHO 24 HORAS Araújo Guincho é a sua solução confiável para todos os problemas de Guincho em Piracicaba e REGIÃO. Oferecemos uma variedade de serviços, incluindo Troca de Pneus, Reboque, Chaveiro e muito mais',
        discount: '5% em serviços',
        logo: 'imagens/AraujoGuincho/logoAraujo.png',
        phone: '19998979810',
        address: 'R. das Opalas - Piracicaba SP',
        city: 'Piracicaba - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.039089756494!2d-47.66106521581734!3d-22.681619782047857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c633b926e250f1%3A0x7151f4f42c24112!2sR.%20das%20Opalas%20-%20M%C3%A1rio%20Dedini%2C%20Piracicaba%20-%20SP%2C%2013412-302!5e0!3m2!1spt-BR!2sbr!4v1754144042934!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: false,
    },
    {
        id: 6,
        name: 'Digo Guinchos 24h',
        segment: 'Transporte & Logística',
        description: 'Será oferecio um trabalho com rapidez, qualidade e um desconto de 10% em parceria com a ProtegeMais',
        discount: '10% nos serviços',
        logo: 'imagens/DigoGuinchos/logoDigo.png',
        phone: '19992248323',
        address: 'R. Thomaz Panaro, 615 - Jardim Brasil, Americana - SP, 13474-080',
        city: 'Americana - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.253012920407!2d-43.1843236845013!3d-22.90394334356779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7e9c5a0b9b%3A0x2d174a7b9a5b9c5c!2sAv.%20Copacabana%2C%20700%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1620000000003!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 7,
        name: 'ITA Guincho Piracicaba',
        segment: 'Transporte & Logística',
        description: 'Guincho 24h - Troca de Pneu = Patins - Aulixio Pane Seca',
        discount: 'A consultar',
        logo: 'imagens/ITAGuinchos/logoITA.png',
        phone: '19997981020',
        address: 'R. Urbâno Gobete, 95 - Piracicaba SP',
        city: 'Piracicaba - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5938107199427!2d-47.67618972545489!3d-22.7433341320484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6312646da145f%3A0xb758779bfba3cf8f!2sR.%20Urb%C3%A2no%20Gobete%20-%20Piracicaba%2C%20SP%2C%2013402-292!5e0!3m2!1spt-BR!2sbr!4v1754145331172!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: false,
    },
        {
        id: 8,
        name: 'Javé jirê • Lava Jato',
        segment: 'Estética Automotiva',
        description: 'Guincho 24h - Troca de Pneu - Patins - Aulixio Pane Seca',
        discount: '10% nos serviços',
        logo: 'imagens/JaveJire/logoJave.png',
        phone: '19997981020',
        address: 'R. Luxemburgo, 200 - Vila Santa Maria, Americana - SP, 13471-780',
        city: 'Americana - SP',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9756657699436!2d-47.34872122545539!3d-22.72914583154492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bbb88063b77%3A0xb1f3d2aa440cf222!2sR.%20Luxemburgo%2C%20200%20-%20Vila%20Santa%20Maria%2C%20Americana%20-%20SP%2C%2013471-780!5e0!3m2!1spt-BR!2sbr!4v1754146062507!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
        featured: false,
    },
{
    id: 9,
    name: 'MusicalTeclados - Assistência Técnica',
    segment: 'Assistência Técnica',
    description: 'Assistência Técnica em Teclados e Pianos Digitais de todas marcas e modelos.',
    discount: '10% nos serviços',
    logo: 'imagens/MusicalTeclados/logoMusical.png',
    phone: '19920014106',
    address: 'Av. da Saudade, 225 - Vila Cordenonsi, Americana - SP, 13472-520',
    city: 'Americana - SP',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.859548519968!2d-47.32602929999999!3d-22.7334612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89904d8c36dcb%3A0x1fb893a3ab151ffb!2sMusical%20Teclados%20-%20Assist%C3%AAncia%20T%C3%A9cnica!5e0!3m2!1spt-BR!2sbr!5m2!1spt-BR!2sbr',
    featured: false,
    instagram: 'https://www.instagram.com/musicalteclados',
},
        {
    id: 10,
    name: 'Sopro Limpo - Estética Automotiva',
    segment: 'Estética Automotiva',
    description: 'Sopro Limpo – Especialistas em estética automotiva! Funilaria, pintura, martelinho de ouro, polimento, higienização de bancos e vitrificação para deixar seu carro impecável, por dentro e por fora.',
    discount: '5% nos serviços',
    logo: 'imagens/SoproLimpo/logoSoproLimpo.png',
    phone: '19922250828',
    address: 'R. Jaír Formigari, 410 - Jardim Santa Fe, Limeira - SP, 13482-364',
    city: 'Limeira - SP',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.333151787291!2d-47.421087!3d-22.566639799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c880684142a033%3A0x6528f3353f908ff7!2sR.%20Ja%C3%ADr%20Formigari%2C%20410%20-%20Jardim%20Santa%20Fe%2C%20Limeira%20-%20SP%2C%2013482-364!5e0!3m2!1spt-BR!2sbr!4v1754686463325!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    instagram: 'https://www.instagram.com/soprolimpo/',
},
                {
    id: 11,
    name: 'Caprilab - Exames Laboratoriais com Precisão e Qualidade',
    segment: 'Laboratório Clínico',
    description: 'Somos um laboratório de análise clínicas que usa da tecnologia em favor da vida! Estamos localizados em Santa Barbara D’Oeste e Americana com laboratórios de alta qualidade oferecendo exames laboratoriais de forma acessível com resultados rápidos e precisos.',
    discount: '10% a 25%',
    logo: 'imagens/Caprilab/logocaprilab.png',
    phone: '19992812385',
    address: 'Av. de Cillo, 26 - Vila Pavan, Americana, SP',
    city: 'Americana - SP',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.37574064187!2d-47.41339533847083!3d-22.724320069114963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89b25a78cce27%3A0x4eaf176a19ae16cd!2sCaprilab%20Americana!5e0!3m2!1spt-BR!2sbr!4v1760797539402!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    instagram: 'https://www.instagram.com/caprilab/',
},
        {
    id: 12,
    name: 'Ótica Dom Pedro',
    segment: 'Ótica',
    description: 'Cuidamos da sua visão, fazemos exames visuais,lentes de contato, armações e óculos de sol. 30% em armações de marca própria 20% em armações de grife 10% em lentes nacionais e importados',
    discount: 'Até 30% de desconto',
    logo: 'imagens/OticasDomPedro/oticadompedro.png',
    phone: '19989717369',
    address: 'R. Dom Pedro II, 1231 - Vila Santa Catarina, Americana - SP',
    city: 'Americana - SP',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3549780157473!2d-47.32355810000001!3d-22.752204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8998677803c23%3A0x4aeab3b130ca0f0a!2sR.%20Dom%20Pedro%20II%2C%201231%20-%20Vila%20Santa%20Catarina%2C%20Americana%20-%20SP%2C%2013466-000!5e0!3m2!1spt-BR!2sbr!4v1760798178254!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    instagram: 'https://www.instagram.com/oticasdompedro/',
},
         {
    id: 12,
    name: 'Alvuz Ocupacional Soluções Ocupacionais de A a Z!',
    segment: 'Segurança e Medicina do Trabalho',
    description: 'A empresa Alvuz atua na área de Segurança e Medicina do Trabalho, oferecendo consultoria, assessoria, cursos, treinamentos e palestras voltados à segurança ocupacional e valorização dos colaboradores. Ela preza por tecnologia de ponta, transparência e integridade, com foco em proteger e acolher pessoas dentro do ambiente corporativo.',
    discount: '6% de Desconto',
    logo: 'imagens/Alvuz/logoalvuz.png',
    phone: '19997681920',
    address: 'R. Duque de Caxias, 35 - Vila Pavan, Americana - SP',
    city: 'Americana - SP',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.527378931664!2d-47.33234372545486!3d-22.74580163213589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89da9ee3c7df3%3A0x9e1e467cdda611d1!2sAlvuz%20Ocupacional%20Solu%C3%A7%C3%B5es%20Ocupacionais%20de%20A%20a%20Z*21!5e0!3m2!1spt-BR!2sbr!4v1760799822388!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    instagram: 'https://www.instagram.com/alvuzocupacional/',
}

];

document.addEventListener('DOMContentLoaded', () => {
    const partnersGrid = document.getElementById('partners-grid');
    const searchInput = document.getElementById('search-input');
    const cityFilter = document.getElementById('city-filter');
    const segmentFiltersContainer = document.getElementById('segment-filters');
    const carouselInner = document.querySelector('.carousel-inner');
    const modal = document.getElementById('partner-modal');
    const closeModalButton = document.querySelector('.close-button');

    let activeSegment = 'Todos';

    // --- RENDER FUNCTIONS --- //
    const renderCards = (partners) => {
        partnersGrid.innerHTML = '';
        if (partners.length === 0) {
            partnersGrid.innerHTML = '<p>Nenhum parceiro encontrado.</p>';
            return;
        }
        partners.forEach(partner => {
            const card = document.createElement('div');
            card.className = 'partner-card';
            card.innerHTML = `
                <div class="partner-card-logo">
                    <img src="${partner.logo}" alt="Logo ${partner.name}">
                </div>
                <h3>${partner.name}</h3>
                <p class="segment">${partner.segment}</p>
                <span class="discount">${partner.discount}</span>
            `;
            card.addEventListener('click', () => openModal(partner));
            partnersGrid.appendChild(card);
        });
    };
    
  const renderCarousel = () => {
    const featuredPartners = partnersData.filter(p => p.featured && p.banner);
    carouselInner.innerHTML = '';

    if (featuredPartners.length > 0) {
        let currentIndex = 0;

        const createBanner = (partner) => {
            const banner = document.createElement('div');
            banner.className = 'carousel-banner';
            banner.style.flex = '0 0 100%';
            banner.innerHTML = `<img src="${partner.banner}" alt="Banner ${partner.name}">`;
            banner.addEventListener('click', () => openModal(partner));
            return banner;
        };

        featuredPartners.forEach(partner => {
            carouselInner.appendChild(createBanner(partner));
        });

        // Estilos do container pra animação funcionar
        carouselInner.style.display = 'flex';
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.width = '100%';

        // Troca de banner a cada 3 segundos
        setInterval(() => {
            currentIndex = (currentIndex + 1) % featuredPartners.length;
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    }
};
    
    const renderFilters = () => {
        // Render Segment Filters
        const segments = ['Todos', ...new Set(partnersData.map(p => p.segment))];
        segmentFiltersContainer.innerHTML = '';
        segments.forEach(segment => {
            const button = document.createElement('button');
            button.className = 'tag-btn';
            button.textContent = segment;
            if (segment === activeSegment) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                activeSegment = segment;
                filterAndRender();
                renderFilters(); // Re-render to update active class
            });
            segmentFiltersContainer.appendChild(button);
        });

        // Render City Filter
        const cities = ['Todas as Cidades', ...new Set(partnersData.map(p => p.city))];
        cityFilter.innerHTML = '';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    };

    // --- FILTER LOGIC --- //
    const filterAndRender = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCity = cityFilter.value;
        let filteredPartners = partnersData;

        // Filter by segment
        if (activeSegment !== 'Todos') {
            filteredPartners = filteredPartners.filter(p => p.segment === activeSegment);
        }

        // Filter by city
        if (selectedCity !== 'Todas as Cidades') {
            filteredPartners = filteredPartners.filter(p => p.city === selectedCity);
        }

        // Filter by search term
        if (searchTerm) {
            filteredPartners = filteredPartners.filter(p => 
                p.name.toLowerCase().includes(searchTerm)
            );
        }
        
        renderCards(filteredPartners);
    };

    // --- MODAL LOGIC --- //
    const openModal = (partner) => {
        document.getElementById('modal-partner-name').textContent = partner.name;
        document.getElementById('modal-partner-segment').textContent = partner.segment;
        document.getElementById('modal-partner-description').textContent = partner.description;
        document.getElementById('modal-partner-address').textContent = `Endereço: ${partner.address}`;
        document.getElementById('modal-map').src = partner.mapEmbedUrl;
        
        const routeButton = document.getElementById('modal-route-button');
        routeButton.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(partner.address)}`;

        const whatsappButton = document.getElementById('modal-whatsapp-button');
        whatsappButton.href = `https://wa.me/55${partner.phone}`;

    // Zera o conteúdo anterior
const socialContainer = document.getElementById('modal-social');
socialContainer.innerHTML = '';

// Cria e adiciona o link do Instagram, se existir
if (partner.instagram) {
    const instaLink = document.createElement('a');
    instaLink.href = partner.instagram;
    instaLink.target = '_blank';
    instaLink.rel = 'noopener noreferrer';
    instaLink.style.marginRight = '10px';
    instaLink.innerHTML = '<img src="imagens/icons/Instagram_icon.png" alt="Instagram" width="24" height="24">';
    socialContainer.appendChild(instaLink);
}

// Cria e adiciona o link do Facebook, se existir
if (partner.facebook) {
    const fbLink = document.createElement('a');
    fbLink.href = partner.facebook;
    fbLink.target = '_blank';
    fbLink.rel = 'noopener noreferrer';
    fbLink.innerHTML = '<img src="imagens/icons/facebook.svg" alt="Facebook" width="24" height="24">';
    socialContainer.appendChild(fbLink);
}
        
        modal.classList.add('show');
    };

    const closeModal = () => {
        modal.classList.remove('show');
        document.getElementById('modal-map').src = ''; // Stop map loading
    };

    // --- EVENT LISTENERS --- //
    searchInput.addEventListener('input', filterAndRender);
    cityFilter.addEventListener('change', filterAndRender);
    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- INITIALIZATION --- //
    renderCarousel();
    renderFilters();
    filterAndRender();
});
