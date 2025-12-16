 // NyoniTube Movie - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ===== INITIALIZATION =====
    console.log('NyoniTube Movie initialized');
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 2000);
    
    // ===== GLOBAL VARIABLES =====
    let currentSlide = 0;
    let movies = [];
    let series = [];
    
    // ===== NAVIGATION =====
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Smooth scroll
            const targetId = e.currentTarget.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== HERO SLIDER =====
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-slide on hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // ===== SEARCH FUNCTIONALITY =====
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: "${query}"\n\nIn a real application, this would filter movies and series.`);
            searchInput.value = '';
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // ===== MOVIES DATA & DISPLAY =====
    // Sample movie data
    movies = [
        {
            id: 1,
            title: "The Last Warrior",
            year: 2024,
            rating: 8.5,
            genre: "Action, Adventure",
            duration: "2h 18m",
            description: "A warrior must protect his village from an ancient evil.",
            image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "City Lights",
            year: 2023,
            rating: 7.9,
            genre: "Drama, Romance",
            duration: "1h 52m",
            description: "A love story set in a bustling metropolis.",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Mountain Escape",
            year: 2024,
            rating: 8.1,
            genre: "Adventure, Thriller",
            duration: "2h 05m",
            description: "Survival adventure in the treacherous mountains.",
            image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Lost in Space",
            year: 2023,
            rating: 7.5,
            genre: "Sci-Fi, Mystery",
            duration: "2h 22m",
            description: "Astronauts stranded in deep space fight for survival.",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "The Chef's Secret",
            year: 2024,
            rating: 8.3,
            genre: "Comedy, Drama",
            duration: "1h 48m",
            description: "A chef's journey to reclaim his restaurant's reputation.",
            image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            title: "Dark Forest",
            year: 2023,
            rating: 7.2,
            genre: "Horror, Mystery",
            duration: "1h 45m",
            description: "A group of friends encounter terror in an abandoned forest.",
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            title: "Ocean's Fury",
            year: 2024,
            rating: 8.0,
            genre: "Action, Adventure",
            duration: "2h 15m",
            description: "A deep-sea expedition faces unexpected dangers.",
            image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            title: "Digital Dreams",
            year: 2023,
            rating: 7.8,
            genre: "Sci-Fi, Thriller",
            duration: "2h 08m",
            description: "A hacker enters a virtual world with deadly consequences.",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    // Sample series data
    series = [
        {
            id: 1,
            title: "Stranger Things",
            season: "Season 4",
            episodes: 9,
            rating: 8.7,
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "The Crown",
            season: "Season 6",
            episodes: 10,
            rating: 8.6,
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Game of Thrones",
            season: "Complete Series",
            episodes: 73,
            rating: 9.2,
            image: "https://images.unsplash.com/photo-1595769812725-4c6564f7528b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Breaking Bad",
            season: "Complete Series",
            episodes: 62,
            rating: 9.5,
            image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    // Render movies
    function renderMovies(filteredMovies = movies) {
        const moviesGrid = document.getElementById('moviesGrid');
        moviesGrid.innerHTML = '';
        
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}/10</span>
                    </div>
                    <p class="movie-genre">${movie.genre}</p>
                    <button class="watch-btn" data-id="${movie.id}">
                        <i class="fas fa-play"></i> Watch Now
                    </button>
                </div>
            `;
            moviesGrid.appendChild(movieCard);
        });
        
        // Add event listeners to watch buttons
        document.querySelectorAll('.watch-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const movieId = this.getAttribute('data-id');
                playMovie(movieId);
            });
        });
        
        // Add click event to movie cards
        document.querySelectorAll('.movie-card').forEach(card => {
            card.addEventListener('click', function() {
                const movieId = this.querySelector('.watch-btn').getAttribute('data-id');
                showMovieDetails(movieId);
            });
        });
    }
    
    // Render series
    function renderSeries() {
        const seriesGrid = document.querySelector('.series-grid');
        seriesGrid.innerHTML = '';
        
        series.forEach(show => {
            const seriesCard = document.createElement('div');
            seriesCard.className = 'series-card';
            seriesCard.innerHTML = `
                <img src="${show.image}" alt="${show.title}">
                <div class="series-overlay">
                    <p class="series-season">${show.season}</p>
                    <h3 class="series-title">${show.title}</h3>
                    <div class="series-meta">
                        <span>${show.episodes} Episodes</span>
                        <span><i class="fas fa-star"></i> ${show.rating}</span>
                    </div>
                </div>
            `;
            seriesGrid.appendChild(seriesCard);
        });
    }
    
    // ===== FILTERING =====
    const genreFilter = document.getElementById('genreFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    function filterMovies() {
        const genre = genreFilter.value;
        const year = yearFilter.value;
        
        let filtered = movies;
        
        if (genre !== 'all') {
            filtered = filtered.filter(movie => 
                movie.genre.toLowerCase().includes(genre.toLowerCase())
            );
        }
        
        if (year !== 'all') {
            filtered = filtered.filter(movie => movie.year.toString() === year);
        }
        
        renderMovies(filtered);
    }
    
    genreFilter.addEventListener('change', filterMovies);
    yearFilter.addEventListener('change', filterMovies);
    
    // ===== LOAD MORE BUTTON =====
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let displayedMovies = 6;
    
    loadMoreBtn.addEventListener('click', () => {
        displayedMovies += 6;
        const moviesToShow = movies.slice(0, displayedMovies);
        renderMovies(moviesToShow);
        
        if (displayedMovies >= movies.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    
    // ===== CATEGORY FILTERING =====
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all cards
            categoryCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Filter movies by category
            if (category === 'all') {
                renderMovies(movies);
            } else {
                const filtered = movies.filter(movie => 
                    movie.genre.toLowerCase().includes(category)
                );
                renderMovies(filtered);
            }
            
            // Scroll to movies section
            document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // ===== MOVIE PLAYER =====
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const moviePlayer = document.getElementById('moviePlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoYear = document.getElementById('videoYear');
    const videoDuration = document.getElementById('videoDuration');
    const videoRating = document.getElementById('videoRating');
    const videoDescription = document.getElementById('videoDescription');
    
    function playMovie(movieId) {
        const movie = movies.find(m => m.id == movieId);
        
        if (movie) {
            videoTitle.textContent = movie.title;
            videoYear.textContent = movie.year;
            videoDuration.textContent = movie.duration;
            videoRating.textContent = `${movie.rating}/10`;
            videoDescription.textContent = movie.description;
            
            // In a real app, you would set the actual video source
            // moviePlayer.src = `movies/${movieId}.mp4`;
            
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function showMovieDetails(movieId) {
        const movie = movies.find(m => m.id == movieId);
        
        if (movie) {
            const modalHTML = `
                <div class="movie-details-modal">
                    <div class="modal-backdrop" onclick="closeMovieDetails()"></div>
                    <div class="modal-content">
                        <button class="modal-close" onclick="closeMovieDetails()">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="movie-details">
                            <img src="${movie.image}" alt="${movie.title}">
                            <div class="details-content">
                                <h2>${movie.title}</h2>
                                <div class="details-meta">
                                    <span>${movie.year}</span>
                                    <span>${movie.duration}</span>
                                    <span><i class="fas fa-star"></i> ${movie.rating}/10</span>
                                </div>
                                <p class="details-genre">${movie.genre}</p>
                                <p class="details-desc">${movie.description}</p>
                                <div class="details-actions">
                                    <button class="play-btn" onclick="playMovie(${movie.id})">
                                        <i class="fas fa-play"></i> Play Now
                                    </button>
                                    <button class="favorite-btn">
                                        <i class="far fa-heart"></i> Add to Favorites
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            const modalDiv = document.createElement('div');
            modalDiv.innerHTML = modalHTML;
            document.body.appendChild(modalDiv.firstElementChild);
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Make function globally available
    window.closeMovieDetails = function() {
        const modal = document.querySelector('.movie-details-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    };
    
    closeModal.addEventListener('click', () => {
        videoModal.style.display = 'none';
        moviePlayer.pause();
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            moviePlayer.pause();
            document.body.style.overflow = 'auto';
        }
    });
    
    // ===== LOGIN MODAL =====
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const closeAuth = document.getElementById('closeAuth');
    const loginForm = document.getElementById('loginForm');
    const switchToSignup = document.getElementById('switchToSignup');
    
    loginBtn.addEventListener('click', () => {
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeAuth.addEventListener('click', () => {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login successful! Welcome to NyoniTube.');
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Signup form would appear here.');
    });
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .movie-card, .feature-card').forEach(el => {
        observer.observe(el);
    });
    
    // ===== INITIAL RENDER =====
    renderMovies(movies.slice(0, 6));
    renderSeries();
    
    // Show load more button if there are more movies
    if (movies.length > 6) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', (e) => {
        // Escape closes modals
        if (e.key === 'Escape') {
            if (videoModal.style.display === 'flex') {
                videoModal.style.display = 'none';
                moviePlayer.pause();
                document.body.style.overflow = 'auto';
            }
            
            if (authModal.style.display === 'flex') {
                authModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            closeMovieDetails();
        }
        
        // Space toggles play/pause on video player
        if (e.key === ' ' && videoModal.style.display === 'flex') {
            e.preventDefault();
            if (moviePlayer.paused) {
                moviePlayer.play();
            } else {
                moviePlayer.pause();
            }
        }
        
        // Arrow keys control hero slider
        if (e.key === 'ArrowRight') {
            nextSlide();
        }
        
        if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===== UTILITY FUNCTIONS =====
    window.playMovie = playMovie;
    
    console.log('NyoniTube Movie loaded successfully!');
});

// ===== ADDITIONAL GLOBAL FUNCTIONS =====
function toggleFavorite(movieId) {
    const favorites = JSON.parse(localStorage.getItem('nyonitube_favorites') || '[]');
    const index = favorites.indexOf(movieId);
    
    if (index === -1) {
        favorites.push(movieId);
        alert('Added to favorites!');
    } else {
        favorites.splice(index, 1);
        alert('Removed from favorites!');
    }
    
    localStorage.setItem('nyonitube_favorites', JSON.stringify(favorites));
    return favorites;
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('nyonitube_favorites') || '[]');
}

// ===== SERVICE WORKER FOR PWA =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
