const partnersData = [
{
        id: 1,
        name: 'Nicped Viagens e Turismo',
        segment: 'Viagem e Turismo',
        description: 'Passagem Aérea, Cruzeiros, Pacotes de Viagens para os destinos mais incríveis do Brasil e do Mundo.',
        discount: '10% para Associados ProtegeMais',
        logo: 'imagens/Nicped Viagens e Turismo/logoNicped.jpg',
        banner: 'imagens/Nicped Viagens e Turismo/capaNicped.png',
        phone: '19920069671',
        address: 'Av. Affonso Pansan, nº 175, Vila Bertini/Americana – SP/ CEP 13.473-620',
        city: 'Americana',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0321524627584!2d-47.299064927488594!3d-22.72704628588198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a085d0b6623%3A0xb44a064ff7a95b3f!2sAv.%20Afonso%20Pansan%2C%20175%20-%20Vila%20Bertini%2C%20Americana%20-%20SP%2C%2013473-620!5e0!3m2!1spt-BR!2sbr!4v1753491828711!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 2,
        name: 'Auto Rápido',
        segment: 'Mecânica',
        description: 'Serviços completos para o seu veículo, com profissionais qualificados e equipamentos de ponta.',
        discount: '15% em serviços',
        logo: 'partner-logo-2.png',
        banner: 'banner2.png',
        phone: '21912345678',
        address: 'Avenida das Américas, 456, Rio de Janeiro, RJ',
        city: 'Rio de Janeiro',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.188219421251!2d-43.17498298450122!3d-22.9064287434947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5d34237b6b%3A0x95e20984848350c6!2sMuseu%20do%20Amanh%C3%A3!5e0!3m2!1spt-BR!2sbr!4v1619620921471!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 3,
        name: 'Mundo Pet',
        segment: 'PetShop',
        description: 'Tudo para o seu melhor amigo. Rações, acessórios, brinquedos e banho & tosa com muito carinho.',
        discount: '10% na loja',
        logo: 'partner-logo-3.png',
        banner: 'banner3.png',
        phone: '31998761234',
        address: 'Rua da Bahia, 789, Belo Horizonte, MG',
        city: 'Belo Horizonte',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.049195048679!2d-43.93850798456073!3d-19.922442943486398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc58a69e7b%3A0x4a75cf31f6184589!2sPra%C3%A7a%20da%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1619621005748!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 4,
        name: 'Lava & Leva',
        segment: 'Lava Rápido',
        description: 'Lavagem completa e detalhada para o seu carro. Usamos produtos de alta qualidade para um resultado impecável.',
        discount: 'Lavagem simples por R$50',
        logo: 'partner-logo-4.png',
        phone: '51987654321',
        address: 'Av. Ipiranga, 1000, Porto Alegre, RS',
        city: 'Porto Alegre',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.062823528751!2d-51.22652968434774!3d-30.0351817380963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197906954a434b%3A0x4c20056f4d30c8c3!2sParque%20Farroupilha%20(Reden%C3%A7%C3%A3o)!5e0!3m2!1spt-BR!2sbr!4v1620000000001!5m2!1spt-BR!2sbr',
        featured: false,
    },
    {
        id: 5,
        name: 'Beleza Pura',
        segment: 'Beleza & Estética',
        description: 'Salão completo com serviços de cabelo, manicure, pedicure e estética facial. Sinta-se renovada!',
        discount: '15% em serviços de cabelo',
        logo: 'partner-logo-5.png',
        phone: '11911112222',
        address: 'Rua Augusta, 500, São Paulo, SP',
        city: 'São Paulo',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.447543407983!2d-46.65910168448408!3d-23.55243896739669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58348d0f1111%3A0x1d3a5a7b0b6b0b6b!2sRua%20Augusta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000002!5m2!1spt-BR!2sbr',
        featured: false,
    },
    {
        id: 6,
        name: 'Academia Foco Total',
        segment: 'Saúde & Fitness',
        description: 'Estrutura completa com equipamentos modernos, aulas de musculação, dança e artes marciais. Transforme seu corpo e sua mente.',
        discount: '50% OFF na 1ª mensalidade',
        logo: 'partner-logo-6.png',
        banner: 'banner4.png',
        phone: '21922223333',
        address: 'Av. Copacabana, 700, Rio de Janeiro, RJ',
        city: 'Rio de Janeiro',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.253012920407!2d-43.1843236845013!3d-22.90394334356779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7e9c5a0b9b%3A0x2d174a7b9a5b9c5c!2sAv.%20Copacabana%2C%20700%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1620000000003!5m2!1spt-BR!2sbr',
        featured: true,
    },
    {
        id: 7,
        name: 'Livraria Saber',
        segment: 'Livraria & Cultura',
        description: 'Um refúgio para amantes da leitura, com um café aconchegante. Encontre os últimos lançamentos e clássicos da literatura.',
        discount: '10% em livros de literatura',
        logo: 'partner-logo-7.png',
        phone: '31933334444',
        address: 'Rua Pernambuco, 1200, Belo Horizonte, MG',
        city: 'Belo Horizonte',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.200184496035!2d-43.93510098456086!3d-19.91605394351988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dd5a454d4d%3A0x4a75cf31f6184589!2sRua%20Pernambuco%2C%201200%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1620000000004!5m2!1spt-BR!2sbr',
        featured: false,
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
