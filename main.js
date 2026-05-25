/* ==========================================
   Sidebar & Hamburger Toggle Logic
   ========================================== */

const hamburgerBtn = document.getElementById('hamburger_btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar_overlay');
const closeSidebarBtn = document.getElementById('close_sidebar_btn');
const pageWrapper = document.getElementById('page_wrapper');
const sidebarLinks = document.querySelectorAll('.sidebar_link');

// Open sidebar
function openSidebar() {
    // 1. Fade out hamburger button
    hamburgerBtn.classList.add('hidden');

    // 2. Show sidebar
    sidebar.classList.add('open');

    // 3. Show overlay (mobile/tablet only — CSS handles visibility)
    overlay.classList.add('active');

    // 4. Push main content (desktop only — CSS handles the shift)
    pageWrapper.classList.add('shifted');
}

// Close sidebar
function closeSidebar() {
    // 1. Hide sidebar
    sidebar.classList.remove('open');

    // 2. Hide overlay
    overlay.classList.remove('active');

    // 3. Un-shift main content
    pageWrapper.classList.remove('shifted');

    // 4. Bring hamburger button back after sidebar transition ends
    sidebar.addEventListener('transitionend', function onTransitionEnd() {
        hamburgerBtn.classList.remove('hidden');
        sidebar.removeEventListener('transitionend', onTransitionEnd);
    });
}

// Event Listeners
hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a nav link is clicked
sidebarLinks.forEach(function (link) {
    link.addEventListener('click', closeSidebar);
});
