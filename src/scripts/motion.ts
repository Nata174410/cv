// Animaciones del sitio. Todo usa transform/opacity y se desactiva con
// prefers-reduced-motion; los efectos de cursor solo corren con mouse.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const hasIO = 'IntersectionObserver' in window;
const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/* ---------------------------------------------------------
   1. Reveal al hacer scroll
   --------------------------------------------------------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (!hasIO) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------
   2. Cifras: conteo para números ("4+") y "descifrado" para texto ("DIAN")
   --------------------------------------------------------- */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Si requestAnimationFrame se pausa (pestaña oculta, ahorro de energía), el valor
// final se fija igual al terminar la duración: una cifra nunca queda a medias.
function settle(el: HTMLElement, final: string, duration: number) {
  window.setTimeout(() => {
    el.textContent = final;
    el.style.minWidth = '';
  }, duration + 250);
}

function countUp(el: HTMLElement, target: number, suffix: string) {
  const duration = 1400;
  settle(el, `${target}${suffix}`, duration);
  const start = performance.now();
  const tick = (now: number) => {
    const t = clamp((now - start) / duration);
    el.textContent = `${Math.round(target * easeOut(t))}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function scramble(el: HTMLElement, final: string) {
  // Se fija el ancho final para que el texto no "baile" mientras se descifra.
  el.style.display = 'inline-block';
  el.style.minWidth = `${el.getBoundingClientRect().width}px`;
  const duration = 1100;
  settle(el, final, duration);
  const start = performance.now();
  const tick = (now: number) => {
    const t = clamp((now - start) / duration);
    const settled = Math.floor(final.length * easeOut(t));
    el.textContent = [...final]
      .map((ch, i) =>
        i < settled || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      )
      .join('');
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = final;
  };
  requestAnimationFrame(tick);
}

const valueEls = document.querySelectorAll<HTMLElement>('[data-animate-value]');
if (!reduce && hasIO && valueEls.length) {
  const vio = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const final = el.dataset.animateValue ?? el.textContent ?? '';
        const m = final.match(/^(\d+)(.*)$/);
        if (m) countUp(el, Number(m[1]), m[2]);
        else scramble(el, final);
        vio.unobserve(el);
      }
    },
    { threshold: 0.6 }
  );
  valueEls.forEach((el) => vio.observe(el));
}

/* ---------------------------------------------------------
   3. Línea de tiempo que se llena al hacer scroll
   --------------------------------------------------------- */
const tlItems = [...document.querySelectorAll<HTMLElement>('.tl-item')];
if (tlItems.length) {
  if (reduce) {
    tlItems.forEach((item) => {
      item.style.setProperty('--fill', '1');
      item.classList.add('is-passed');
    });
  } else {
    let ticking = false;
    const update = () => {
      ticking = false;
      const anchor = window.innerHeight * 0.55;
      for (const item of tlItems) {
        const body = item.querySelector<HTMLElement>('.tl-body');
        if (!body) continue;
        const r = body.getBoundingClientRect();
        const dotY = r.top + 30; // altura aproximada del punto dentro del cuerpo
        item.style.setProperty('--fill', clamp((anchor - dotY) / r.height).toFixed(3));
        item.classList.toggle('is-passed', anchor > dotY);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }
}

/* ---------------------------------------------------------
   4. Efectos de cursor (solo mouse y sin reduce-motion)
   --------------------------------------------------------- */
if (finePointer && !reduce) {
  // Brillo que sigue al cursor dentro de las tarjetas
  document.querySelectorAll<HTMLElement>('.card-hover').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Hero: foco de luz sobre el papel rayado + inclinación 3D de la foto
  const hero = document.getElementById('home');
  const tilt = hero?.querySelector<HTMLElement>('[data-tilt]');
  if (hero) {
    let raf = 0;
    hero.addEventListener('pointermove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = hero.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        hero.style.setProperty('--hx', `${x}px`);
        hero.style.setProperty('--hy', `${y}px`);
        hero.classList.add('is-pointer');
        if (tilt) {
          const dx = x / r.width - 0.5;
          const dy = y / r.height - 0.5;
          tilt.style.setProperty('--ry', `${(dx * 10).toFixed(2)}deg`);
          tilt.style.setProperty('--rx', `${(-dy * 8).toFixed(2)}deg`);
        }
      });
    });
    hero.addEventListener('pointerleave', () => {
      hero.classList.remove('is-pointer');
      tilt?.style.setProperty('--rx', '0deg');
      tilt?.style.setProperty('--ry', '0deg');
    });
  }

  // Botones "magnéticos": se acercan levemente al cursor
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate3d(${dx * 0.22}px, ${dy * 0.32}px, 0)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });
}
