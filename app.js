"use strict";
class SurfApp {
    constructor() {
        this.shorts = [];
        this.currentIndex = 0;
        this.isLoading = false;
        this.videoContainer = document.getElementById('video-container');
        this.init();
    }
    async init() {
        await this.loadShorts();
        this.shuffleShorts();
        this.renderVideos();
        this.setupEventListeners();
    }
    async loadShorts() {
        const shortsUrls = [
            'https://youtube.com/shorts/4q5MQa9WKf4',
            'https://youtube.com/shorts/5MKHNqRsb98',
            'https://youtube.com/shorts/B535QAyAwQU',
            'https://youtube.com/shorts/LSxqvTjfBCk',
            'https://youtube.com/shorts/o1LifxcVt4c',
            'https://youtube.com/shorts/wyacUvmLqWo',
            'https://youtube.com/shorts/CnQuAWL-_nY',
            'https://youtube.com/shorts/YGLoHZ2gTGg',
            'https://youtube.com/shorts/1mXQaSA3-rE',
            'https://youtube.com/shorts/KGYFFxL0Op0',
            'https://youtube.com/shorts/xfDFQle_Q6o',
            'https://youtube.com/shorts/Mra-Vp8x6Cs',
            'https://youtube.com/shorts/xkeiS65HfNA',
            'https://youtube.com/shorts/IHk6QHKp1mc',
            'https://youtube.com/shorts/NBDe677Fiac',
            'https://youtube.com/shorts/Dh5upmUl-8Q',
            'https://youtube.com/shorts/mgpqldURoac',
            'https://youtube.com/shorts/UZ42cJXBVqY',
            'https://youtube.com/shorts/8C5jmFkrdSA',
            'https://youtube.com/shorts/1Rd3OKL5G6c',
            'https://youtube.com/shorts/2z26wqDciF8',
            'https://youtube.com/shorts/2QQ8vvg1JtM',
            'https://youtube.com/shorts/uXdCNkza7i4',
            'https://youtube.com/shorts/unOIjJddz9A',
            'https://youtube.com/shorts/OlRJMLUYBrE',
            'https://youtube.com/shorts/mwkfL011j_M',
            'https://youtube.com/shorts/M82OOmjmc0A',
            'https://youtube.com/shorts/E39pJ0Uh-Uo',
            'https://youtube.com/shorts/_LoNRE-tU2E',
            'https://youtube.com/shorts/LEeU3o5BJik',
            'https://youtube.com/shorts/KebAE2ca-kE',
            'https://youtube.com/shorts/xV2sUiksDZA',
            'https://youtube.com/shorts/E5HmbIhYgvU',
            'https://youtube.com/shorts/YWjMJrNlj7c',
            'https://youtube.com/shorts/JwOlZ24YgQk',
            'https://youtube.com/shorts/qWnaif0UcSw',
            'https://youtube.com/shorts/nvZzL6PjdMg',
            'https://youtube.com/shorts/XD6-HXP1oIk',
            'https://youtube.com/shorts/lWzDb4XYYD0',
            'https://youtube.com/shorts/dNq-Xn8py10',
            'https://youtube.com/shorts/P-gY3QQ3KFQ',
            'https://youtube.com/shorts/JMQRuoO-p4U',
            'https://youtube.com/shorts/U1a_kzxPOBw',
            'https://youtube.com/shorts/e9r-2rQNkjA',
            'https://youtube.com/shorts/zOiQblBj1iQ',
            'https://youtube.com/shorts/aUy4isQLzz0',
            'https://youtube.com/shorts/pyu8FeysccA',
            'https://youtube.com/shorts/IwyMDsT4G-o',
            'https://youtube.com/shorts/JxMpqJsTyDM',
            'https://youtube.com/shorts/V2-ugxTgFWQ',
            'https://youtube.com/shorts/fPHeIoyY9Fc',
            'https://youtube.com/shorts/XIOSi1lS2g4',
            'https://youtube.com/shorts/J_hgfLlK0ro',
            'https://youtube.com/shorts/DVX_PxRuCNE',
            'https://youtube.com/shorts/hLQRBhAkCKo',
            'https://youtube.com/shorts/7-QYt6dZlyE',
            'https://youtube.com/shorts/rniws8yssuE',
            'https://youtube.com/shorts/Asc1G-YdfJE',
            'https://youtube.com/shorts/REk3yE5gS_I',
            'https://youtube.com/shorts/KQ8hGdvkTD0',
            'https://youtube.com/shorts/wZNnlQi4twQ',
            'https://youtube.com/shorts/yZ32IH1YG-E',
            'https://youtube.com/shorts/iqTI_HsN-5o',
            'https://youtube.com/shorts/1v7NQ_OZJSA',
            'https://youtube.com/shorts/lTDRFYu0iCo',
            'https://youtube.com/shorts/G5CXx_K7LOQ',
            'https://youtube.com/shorts/PgUUQ-R09NM',
            'https://youtube.com/shorts/FnC8KCPFayc',
            'https://youtube.com/shorts/NqusUqQmuKQ',
            'https://youtube.com/shorts/2MBYMGE_Z44',
            'https://youtube.com/shorts/jr8pu9MAWvw',
            'https://youtube.com/shorts/mCCuAPajbgQ',
            'https://youtube.com/shorts/KijsQ_w-DtY',
            'https://youtube.com/shorts/LIC_jKqcQWo',
            'https://youtube.com/shorts/r7yAFeCJOPo',
            'https://youtube.com/shorts/ABLyKXZTqtc',
            'https://youtube.com/shorts/GiRriqINKdM',
            'https://youtube.com/shorts/ECCz7qi1mJ8',
            'https://youtube.com/shorts/miyRQcGiTrA',
            'https://youtube.com/shorts/5Kucxwi3nmM',
            'https://youtube.com/shorts/FYY421vGKl4',
            'https://youtube.com/shorts/Uv-3F5CBdKg',
            'https://youtube.com/shorts/pgR88IDskzs',
            'https://youtube.com/shorts/nU0uG_o55xo',
            'https://youtube.com/shorts/Q4ohrNbHNDE',
            'https://youtube.com/shorts/liaJoSLkKls',
            'https://youtube.com/shorts/v_C7P4-5Plg',
            'https://youtube.com/shorts/858TpLNInrE',
            'https://youtube.com/shorts/xniTSbZn2-g',
            'https://youtube.com/shorts/MqEBARjaoIM',
            'https://youtube.com/shorts/ouu8HIEUFD4',
            'https://youtube.com/shorts/fiJLbhuDJqI',
            'https://youtube.com/shorts/YJ9GwpS6e9Y',
            'https://youtube.com/shorts/4mzSBI6veOE',
            'https://youtube.com/shorts/NYQRaVjliYU',
            'https://youtube.com/shorts/obH7p3HKqGk',
            'https://youtube.com/shorts/vERWcZ84bY4',
            'https://youtube.com/shorts/yfSBHog9fZ0',
            'https://youtube.com/shorts/QVF7lBItkjs',
            'https://youtube.com/shorts/Io5oG34tdLo'
        ];
        this.shorts = shortsUrls.map((url, index) => {
            const videoId = this.extractVideoId(url);
            return {
                id: videoId,
                url: url,
                embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=0`,
                liked: false
            };
        });
    }
    extractVideoId(url) {
        const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : '';
    }
    shuffleShorts() {
        for (let i = this.shorts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shorts[i], this.shorts[j]] = [this.shorts[j], this.shorts[i]];
        }
    }
    renderVideos() {
        this.videoContainer.innerHTML = '';
        this.shorts.forEach((short, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.dataset.index = index.toString();
            const iframe = document.createElement('iframe');
            iframe.src = this.getEmbedUrl(short.id, index === 0);
            iframe.allow = 'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.dataset.videoId = short.id;
            const overlay = document.createElement('div');
            overlay.className = 'video-overlay';
            const heartClass = short.liked ? 'icon liked' : 'icon';
            overlay.innerHTML = `
                <div class="actions">
                    <button class="action-btn like-btn" data-video-index="${index}">
                        <i class="fas fa-heart ${heartClass}"></i>
                    </button>
                    <button class="action-btn share-btn" data-video-index="${index}">
                        <i class="fas fa-paper-plane icon"></i>
                    </button>
                </div>
            `;
            videoItem.appendChild(iframe);
            videoItem.appendChild(overlay);
            this.videoContainer.appendChild(videoItem);
        });
        this.observeVideoChanges();
        this.setupActionButtons();
    }
    getEmbedUrl(videoId, autoplay) {
        const autoplayParam = autoplay ? '1' : '0';
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplayParam}&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&mute=0&origin=${window.location.origin}&enablejsapi=0`;
    }
    observeVideoChanges() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const iframe = entry.target.querySelector('iframe');
                const videoId = iframe.dataset.videoId;
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    iframe.src = this.getEmbedUrl(videoId, true);
                    this.currentIndex = parseInt(entry.target.getAttribute('data-index'));
                }
                else {
                    iframe.src = this.getEmbedUrl(videoId, false);
                }
            });
        }, {
            threshold: 0.5
        });
        document.querySelectorAll('.video-item').forEach(item => {
            observer.observe(item);
        });
    }
    setupEventListeners() {
        let startY = 0;
        let currentY = 0;
        let isScrolling = false;
        this.videoContainer.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            isScrolling = true;
        });
        this.videoContainer.addEventListener('touchmove', (e) => {
            if (!isScrolling)
                return;
            currentY = e.touches[0].clientY;
            e.preventDefault();
        });
        this.videoContainer.addEventListener('touchend', () => {
            if (!isScrolling)
                return;
            isScrolling = false;
            const deltaY = startY - currentY;
            const threshold = 50;
            if (Math.abs(deltaY) > threshold) {
                if (deltaY > 0) {
                    this.nextVideo();
                }
                else {
                    this.prevVideo();
                }
            }
        });
        this.videoContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (this.isLoading)
                return;
            if (e.deltaY > 0) {
                this.nextVideo();
            }
            else {
                this.prevVideo();
            }
        });
        // Add keyboard navigation for desktop
        document.addEventListener('keydown', (e) => {
            if (this.isLoading)
                return;
            switch (e.key) {
                case 'ArrowUp':
                case 'k':
                    e.preventDefault();
                    this.prevVideo();
                    break;
                case 'ArrowDown':
                case 'j':
                    e.preventDefault();
                    this.nextVideo();
                    break;
                case 'l':
                case ' ':
                    e.preventDefault();
                    this.likeVideo(this.currentIndex);
                    break;
                case 's':
                    e.preventDefault();
                    this.shareVideo(this.currentIndex);
                    break;
            }
        });
    }
    setupActionButtons() {
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget;
                const videoIndex = parseInt(target.dataset.videoIndex);
                this.likeVideo(videoIndex);
            });
        });
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget;
                const videoIndex = parseInt(target.dataset.videoIndex);
                this.shareVideo(videoIndex);
            });
        });
    }
    nextVideo() {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.currentIndex = (this.currentIndex + 1) % this.shorts.length;
        this.scrollToVideo(this.currentIndex);
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
    prevVideo() {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.currentIndex = this.currentIndex === 0 ? this.shorts.length - 1 : this.currentIndex - 1;
        this.scrollToVideo(this.currentIndex);
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
    scrollToVideo(index) {
        const videoItem = this.videoContainer.children[index];
        if (videoItem) {
            videoItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    likeVideo(videoIndex) {
        const short = this.shorts[videoIndex];
        const likeIcon = document.querySelector(`[data-video-index="${videoIndex}"].like-btn .icon`);
        if (likeIcon && short) {
            short.liked = !short.liked;
            if (short.liked) {
                likeIcon.classList.add('liked');
            }
            else {
                likeIcon.classList.remove('liked');
            }
        }
    }
    shareVideo(videoIndex) {
        const targetShort = this.shorts[videoIndex];
        if (navigator.share) {
            navigator.share({
                title: 'Check out this video!',
                url: targetShort.url
            });
        }
        else {
            navigator.clipboard.writeText(targetShort.url).then(() => {
                this.showSharePopup();
            });
        }
    }
    showSharePopup() {
        const popup = document.getElementById('share-popup');
        if (popup) {
            popup.classList.remove('hidden');
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 2000);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new SurfApp();
});
