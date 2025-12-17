 // NyoniTube - Main JavaScript File

// ===== CONFIGURATION =====
const CONFIG = {
    siteName: "NyoniTube",
    version: "1.0.0",
    defaultMovies: [
        {
            id: 1,
            title: "Mwamba wa Maisha",
            year: 2024,
            rating: 8.5,
            genre: "drama",
            duration: "2h 15m",
            description: "Filamu ya maisha yenye mafunzo mengi kuhusu ustawi na mapambano.",
            image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 1245,
            featured: true
        },
        {
            id: 2,
            title: "Mapenzi ya Jua",
            year: 2023,
            rating: 7.9,
            genre: "drama",
            duration: "1h 52m",
            description: "Mapenzi yanayojenga na kuvunja katika mazingira ya kijiji.",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 892,
            featured: true
        },
        {
            id: 3,
            title: "Simba wa Jangwani",
            year: 2024,
            rating: 8.1,
            genre: "action",
            duration: "2h 05m",
            description: "Simba anapambana na wavamizi katika eneo lake.",
            image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 1567,
            featured: true
        },
        {
            id: 4,
            title: "Mtaa wa Kati",
            year: 2023,
            rating: 7.8,
            genre: "comedy",
            duration: "1h 45m",
            description: "Vichekesho na maisha katika mtaa wa kati jijini.",
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 745,
            featured: false
        },
        {
            id: 5,
            title: "Kivuli cha Usiku",
            year: 2024,
            rating: 7.2,
            genre: "horror",
            duration: "1h 38m",
            description: "Kivuli kinachotisha kinachofuata familia moja.",
            image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 923,
            featured: true
        },
        {
            id: 6,
            title: "Bahari ya Siri",
            year: 2023,
            rating: 7.5,
            genre: "bongo",
            duration: "1h 52m",
            description: "Siri za bahari zinazofunuliwa na wavuvi.",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 1132,
            featured: false
        },
        {
            id: 7,
            title: "Daktari wa Moyo",
            year: 2024,
            rating: 8.0,
            genre: "drama",
            duration: "2h 10m",
            description: "Daktari anayepambana na magonjwa ya moyo kijijini.",
            image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 987,
            featured: false
        },
        {
            id: 8,
            title: "Robo wa Jiji",
            year: 2023,
            rating: 7.6,
            genre: "sci-fi",
            duration: "2h 22m",
            description: "Robo anayejaribu kuishi kama binadamu.",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            views: 856,
            featured: false
        }
    ],
    series: [
        {
            id: 1,
            title: "Siri za Ulimwengu",
            season: "Season 1",
            episodes: 12,
            rating: 8.7,
            genre: "drama",
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            title: "Mashujaa wa Mtaa",
            season: "Season 3",
            episodes: 24,
            rating: 8.2,
            genre: "action",
            image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            title: "Mapenzi ya Kibongo",
            season: "Season 2",
            episodes: 16,
            rating: 7.9,
            genre: "bongo",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
    ]
};

// ===== UTILITY FUNCTIONS =====
function getMovies() {
    const saved = localStorage.getItem('nyonitube_movies');
    if (saved) {
        return JSON.parse(saved);
    }
    // Save default movies
    localStorage.setItem('nyonitube_movies', JSON.stringify(CONFIG.defaultMovies));
    return CONFIG.defaultMovies;
}

function saveMovies(movies) {
    localStorage.setItem('nyonitube_movies', JSON.stringify(movies));
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// ===== MOVIE FUNCTIONS =====
function renderMovies(movies, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const moviesToShow = limit ? movies.slice(0, limit) : movies;
    
    moviesToShow.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.year}</span>
                <span class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
            </div>
            <p style="color:#e50914; font-size:13px; margin:5px 0;">${movie.genre.toUpperCase()}</p>
            <button class="watch-btn" onclick="watchMovie(${movie.id})" data-id="${movie.id}">
                <i class="fas fa-play"></i> TAZAMA
            </button>
        </div>
    `;
    
    // Add click event to entire card
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('watch-btn')) {
            watchMovie(movie.id);
        }
    });
    
    return card;
}

// ===== NAVIGATION FUNCTIONS =====
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

function search() {
    const searchInput = document.getElementById('searchMain') || 
                       document.getElementById('searchMovies');
    
    if (searchInput) {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            // In a real app, this would navigate to search results
            alert(`🔍 Inatafuta: "${query}"\n\nKwenye tovuti halisi, hii ingekuonyesha matokeo ya utafutaji.`);
            searchInput.value = '';
        }
    }
}

// ===== MOVIE PLAYER FUNCTIONS =====
function watchMovie(movieId) {
    const movies = getMovies();
    const movie = movies.find(m => m.id === movieId);
    
    if (movie) {
        // Increase view count
        movie.views = (movie.views || 0) + 1;
        saveMovies(movies);
        
        // Save movie to session for watch.html
        sessionStorage.setItem('currentMovie', JSON.stringify(movie));
        
        // Navigate to watch page
        window.location.href = 'watch.html';
    }
}

function playDemo() {
    alert('🎬 Demo ya Video Inaanza!\n\nKwenye tovuti halisi, video ingekuwa inacheza hapa.');
}

function likeMovie() {
    alert('👍 Ulimpenda filamu hii!');
}

function shareMovie() {
    const movie = JSON.parse(sessionStorage.getItem('currentMovie') || '{}');
    const text = `Tazama "${movie.title}" kwenye NyoniTube: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: movie.title,
            text: text,
            url: window.location.href
        });
    } else {
        prompt('Shiriki kiungo hiki:', text);
    }
}

// ===== FILTER FUNCTIONS =====
function filterMovies() {
    const genre = document.getElementById('genreFilter')?.value || 'all';
    const year = document.getElementById('yearFilter')?.value || 'all';
    const sort = document.getElementById('sortFilter')?.value || 'newest';
    
    let movies = getMovies();
    
    // Filter by genre
    if (genre !== 'all') {
        movies = movies.filter(m => m.genre === genre);
    }
    
    // Filter by year
    if (year !== 'all') {
        movies = movies.filter(m => m.year.toString() === year);
    }
    
    // Sort
    switch(sort) {
        case 'newest':
            movies.sort((a, b) => b.year - a.year);
            break;
        case 'oldest':
            movies.sort((a, b) => a.year - b.year);
            break;
        case 'rating':
            movies.sort((a, b) => b.rating - a.rating);
            break;
        case 'views':
            movies.sort((a, b) => (b.views || 0) - (a.views || 0));
            break;
    }
    
    renderMovies(movies, 'allMovies');
}

function loadMoreMovies() {
    const btn = document.getElementById('loadMoreBtn');
    const container = document.getElementById('allMovies');
    
    if (container) {
        const currentCount = container.children.length;
        const allMovies = getMovies();
        
        if (currentCount < allMovies.length) {
            const nextMovies = allMovies.slice(currentCount, currentCount + 6);
            nextMovies.forEach(movie => {
                const card = createMovieCard(movie);
                container.appendChild(card);
            });
            
            // Hide button if no more movies
            if (container.children.length >= allMovies.length) {
                btn.style.display = 'none';
            }
        }
    }
}

// ===== LOGIN FUNCTIONS =====
function login() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    
    // Simple validation
    if (!email || !password) {
        alert('⚠️ Tafadhali jaza nafasi zote');
        return;
    }
    
    // In a real app, this would validate with backend
    alert('✅ Umeingia kikamilifu!\n\nKwenye tovuti halisi, hii ingekuongoza kwenye dashboard yako.');
    
    // Redirect to home
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.show-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'fas fa-eye';
    }
}

function showSignup() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ===== PAGE INITIALIZATION =====
function initHomePage() {
    // Load featured movies
    const movies = getMovies();
    const featured = movies.filter(m => m.featured);
    renderMovies(featured, 'featuredMovies', 6);
}

function initMoviesPage() {
    // Load all movies
    const movies = getMovies();
    renderMovies(movies, 'allMovies', 12);
    
    // Setup filters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get('genre');
    
    if (genre) {
        const genreFilter = document.getElementById('genreFilter');
        if (genreFilter) {
            genreFilter.value = genre;
            filterMovies();
        }
    }
}

function initSeriesPage() {
    const container = document.getElementById('seriesGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    CONFIG.series.forEach(series => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${series.image}" alt="${series.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${series.title}</h3>
                <div class="movie-meta">
                    <span>${series.season}</span>
                    <span class="movie-rating"><i class="fas fa-star"></i> ${series.rating}</span>
                </div>
                <p style="color:#0af; font-size:13px; margin:5px 0;">${series.episodes} Episodes</p>
                <button class="watch-btn" onclick="watchSeries(${series.id})">
                    <i class="fas fa-play"></i> TAZAMA
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function initWatchPage() {
    const movie = JSON.parse(sessionStorage.getItem('currentMovie') || '{}');
    
    if (movie.id) {
        // Update page with movie info
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieYear').textContent = movie.year;
        document.getElementById('movieRating').textContent = movie.rating;
        document.getElementById('movieDuration').textContent = movie.duration || '2h 00m';
        document.getElementById('movieGenre').textContent = movie.genre;
        document.getElementById('movieDescription').textContent = movie.description;
        
        // Load related movies
        const movies = getMovies();
        const related = movies
            .filter(m => m.id !== movie.id && m.genre === movie.genre)
            .slice(0, 4);
        
        const container = document.getElementById('relatedMovies');
        if (container) {
            related.forEach(relatedMovie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
                    <img src="${relatedMovie.image}" alt="${relatedMovie.title}" style="width:100%; height:120px; object-fit:cover;">
                    <div style="padding:10px;">
                        <p style="font-size:12px; margin:0;">${relatedMovie.title}</p>
                    </div>
                `;
                card.addEventListener('click', () => watchMovie(relatedMovie.id));
                container.appendChild(card);
            });
        }
    } else {
        // No movie selected, redirect to movies
        window.location.href = 'movies.html';
    }
}

function initLoginPage() {
    // Close modal when clicking outside
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// ===== INITIALIZE BASED ON PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    const page = getCurrentPage();
    
    switch(page) {
        case 'index.html':
        case '':
            initHomePage();
            break;
            
        case 'movies.html':
            initMoviesPage();
            break;
            
        case 'series.html':
            initSeriesPage();
            break;
            
        case 'watch.html':
            initWatchPage();
            break;
            
        case 'login.html':
            initLoginPage();
            break;
            
        case 'admin.html':
            // Admin page has its own script
            break;
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.menu-btn');
        
        if (navLinks?.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-btn')) {
            navLinks.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Add search on enter key
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement && (
                activeElement.id === 'searchMain' || 
                activeElement.id === 'searchMovies')) {
                search();
            }
        }
    });
});

// ===== GLOBAL FUNCTIONS =====
window.watchMovie = watchMovie;
window.watchSeries = function(seriesId) {
    alert(`📺 TV Series Inaanza!\n\nKwenye tovuti halisi, episode ya kwanza ingekuwa inacheza hapa.`);
};

window.toggleMenu = toggleMenu;
window.search = search;
window.filterMovies = filterMovies;
window.loadMoreMovies = loadMoreMovies;
window.login = login;
window.togglePassword = togglePassword;
window.showSignup = showSignup;
window.closeModal = closeModal;
window.playDemo = playDemo;
window.likeMovie = likeMovie;
window.shareMovie = shareMovie;
