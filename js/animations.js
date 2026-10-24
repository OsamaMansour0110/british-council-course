/* ==========================================================================
   BRITISH COUNCIL INTERMEDIATE B1 - HOT ANIMATION ENGINE
   Confetti Physics • Swipe Gestures • Audio Visualizer • Ripple Effects
   ========================================================================== */

const AnimEngine = (() => {
  /* --------------------------------------------------------------------------
     1. HIGH-PERFORMANCE CONFETTI PARTICLE SYSTEM (PURE CANVAS)
     -------------------------------------------------------------------------- */
  let confettiCanvas = null;
  let ctx = null;
  let particles = [];
  let animId = null;

  function initConfetti() {
    if (!confettiCanvas) {
      confettiCanvas = document.createElement('canvas');
      confettiCanvas.id = 'confettiCanvasOverlay';
      confettiCanvas.style.position = 'fixed';
      confettiCanvas.style.top = '0';
      confettiCanvas.style.left = '0';
      confettiCanvas.style.width = '100vw';
      confettiCanvas.style.height = '100vh';
      confettiCanvas.style.pointerEvents = 'none';
      confettiCanvas.style.zIndex = '999999';
      document.body.appendChild(confettiCanvas);
      ctx = confettiCanvas.getContext('2d');
      resizeConfetti();
      window.addEventListener('resize', resizeConfetti);
    }
  }

  function resizeConfetti() {
    if (confettiCanvas) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
  }

  function fireConfetti(options = {}) {
    initConfetti();
    const count = options.count || 65;
    const colors = options.colors || ['#0066f5', '#7c3aed', '#10b981', '#f59e0b', '#ec4899', '#38bdf8', '#facc15'];
    const originX = options.x !== undefined ? options.x : window.innerWidth / 2;
    const originY = options.y !== undefined ? options.y : window.innerHeight * 0.4;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 5 + Math.random() * 8;
      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        size: 5 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        life: 1,
        decay: 0.012 + Math.random() * 0.015,
        tilt: Math.random() * 10
      });
    }

    if (!animId) {
      renderConfetti();
    }
  }

  function renderConfetti() {
    if (!ctx || particles.length === 0) {
      if (ctx) ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      animId = null;
      return;
    }

    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > confettiCanvas.height + 20) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    }

    animId = requestAnimationFrame(renderConfetti);
  }

  /* --------------------------------------------------------------------------
     2. TOUCH SWIPE GESTURE CONTROLLER FOR FLASHCARDS
     -------------------------------------------------------------------------- */
  function attachSwipeGestures(element, handlers = {}) {
    if (!element) return;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const threshold = 45; // min swipe distance in px

    element.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleGesture();
    }, { passive: true });

    function handleGesture() {
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (Math.max(absDx, absDy) < threshold) {
        // Simple tap handled by standard click
        return;
      }

      if (absDx > absDy) {
        if (dx < 0 && handlers.onSwipeLeft) {
          // Swipe left -> Next card
          handlers.onSwipeLeft();
        } else if (dx > 0 && handlers.onSwipeRight) {
          // Swipe right -> Previous card
          handlers.onSwipeRight();
        }
      } else {
        if (dy < 0 && handlers.onSwipeUp) {
          // Swipe up -> Flip card
          handlers.onSwipeUp();
        }
      }
    }
  }

  /* --------------------------------------------------------------------------
     3. AUDIO EQUALIZER VISUALIZER PULSE
     -------------------------------------------------------------------------- */
  let equalizerInterval = null;

  function startEqualizerPulse() {
    const waveElements = document.querySelectorAll('.audio-wave-pulse');
    waveElements.forEach(el => el.classList.add('is-speaking'));
  }

  function stopEqualizerPulse() {
    const waveElements = document.querySelectorAll('.audio-wave-pulse');
    waveElements.forEach(el => el.classList.remove('is-speaking'));
  }

  /* --------------------------------------------------------------------------
     4. RIPPLE TAP EFFECT ON INTERACTIVE BUTTONS
     -------------------------------------------------------------------------- */
  function attachRipple(selector = '.btn-solid-blue, .quick-part-btn, .portal-btn-yellow, .nav-tab-link') {
    document.addEventListener('click', (e) => {
      const target = e.target.closest(selector);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const circle = document.createElement('span');
      circle.className = 'hot-ripple-effect';
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${e.clientX - rect.left - size / 2}px`;
      circle.style.top = `${e.clientY - rect.top - size / 2}px`;

      target.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  }

  /* --------------------------------------------------------------------------
     5. TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  function showToast(message, type = 'info', duration = 3000) {
    let container = document.getElementById('toastNotificationHost');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastNotificationHost';
      container.className = 'toast-host-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-pill-alert toast-${type}`;
    const icon = type === 'success' ? '🎉' : type === 'warning' ? '⚠️' : '💡';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 350);
    }, duration);
  }

  /* --------------------------------------------------------------------------
     6. CARD SPRING ANIMATION EFFECT
     -------------------------------------------------------------------------- */
  function animateCardEntrance(cardElement, direction = 'next') {
    if (!cardElement) return;
    cardElement.classList.remove('anim-slide-in-right', 'anim-slide-in-left');
    void cardElement.offsetWidth; // force reflow
    cardElement.classList.add(direction === 'next' ? 'anim-slide-in-right' : 'anim-slide-in-left');
  }

  return {
    fireConfetti,
    attachSwipeGestures,
    startEqualizerPulse,
    stopEqualizerPulse,
    attachRipple,
    showToast,
    animateCardEntrance
  };
})();
