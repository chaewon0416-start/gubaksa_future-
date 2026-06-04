/* ════════════════════════════════
   구박사 신보 — 공유 스크립트
   shared.js
════════════════════════════════ */

/* ── 모바일 메뉴 토글 ── */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── 스크롤 노출 애니메이션 ── */
function initScrollReveal(selector, threshold = 0.12) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // 카드/아이템마다 살짝 지연
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold });

  document.querySelectorAll(selector).forEach(el => obs.observe(el));
}

/* ── 검색창 Enter 처리 ── */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.nav-search input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        alert(`🐾 "${searchInput.value.trim()}" 냄새 맡기 — 준비 중이에요!`);
        searchInput.value = '';
      }
    });
  }
});
