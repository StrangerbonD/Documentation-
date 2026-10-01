// Search Database Index
const searchIndex = [
  {
    title: "পরিচিতি ও ওভারভিউ (Overview)",
    url: "introduction.html",
    category: "শুরুর কথা",
    description: "JWT Authentication & Authorization গাইড কী এবং কেন তৈরি করা হয়েছে।"
  },
  {
    title: "Authentication vs Authorization",
    url: "authentication-vs-authorization.html",
    category: "কোর কনসেপ্টস",
    description: "Authentication আর Authorization-এর মূল পার্থক্য, লাইফ সাইকেল ও বাস্তব উদাহরণ।"
  },
  {
    title: "Authentication কী এবং কেন দরকার?",
    url: "authentication-vs-authorization.html#what-is-authentication",
    category: "Authentication vs Authorization",
    description: "ব্যবহারকারীর পরিচয় যাচাই করা এবং পাসওয়ার্ড যাচাইকরণ।"
  },
  {
    title: "Authorization কী এবং কেন দরকার?",
    url: "authentication-vs-authorization.html#what-is-authorization",
    category: "Authentication vs Authorization",
    description: "ইউজারের রোল এবং রিসোর্স অ্যাক্সেস পারমিশন চেক করা।"
  },
  {
    title: "JWT Structure ও Claims Deep Dive",
    url: "jwt-structure.html",
    category: "কোর কনসেপ্টস",
    description: "Header, Payload, Signature এবং ClaimTypes কীভাবে কাজ করে।"
  },
  {
    title: "JWT Payload ও Claims",
    url: "jwt-structure.html#jwt-payload",
    category: "JWT Deep Dive",
    description: "ClaimTypes.NameIdentifier, ClaimTypes.Role ও সিক্রেট কী নিরাপত্তা।"
  },
  {
    title: "ASP.NET Core-এ JWT Setup ও Middleware",
    url: "aspnet-core-setup.html",
    category: "ইমপ্লিমেন্টেশন",
    description: "Program.cs-এ AddAuthentication, AddJwtBearer এবং UseAuthentication কনফিগার করা।"
  },
  {
    title: "Login Controller ও Token Generation",
    url: "token-generation.html",
    category: "ইমপ্লিমেন্টেশন",
    description: "Login DTO, Password verify করে JWT Token তৈরি ও রেসপন্স পাঠানো।"
  },
  {
    title: "Role & Policy-based Authorization",
    url: "role-based-authorization.html",
    category: "ইমপ্লিমেন্টেশন",
    description: "[Authorize(Roles = 'Admin')] এবং কাস্টম পলিসি হ্যান্ডলার।"
  },
  {
    title: "Refresh Token Flow & Architecture",
    url: "refresh-token.html",
    category: "ইমপ্লিমেন্টেশন",
    description: "Access token expire হলে silent refresh ও ডাটাবেস টোকেন ম্যানেজমেন্ট।"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initCodeCopy();
  initSearch();
  highlightActiveSidebarLink();
});

// 1. Theme Management (Light / Dark)
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('jwt_docs_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('jwt_docs_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;
  
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }
}

// 2. Mobile Sidebar Drawer
function initSidebar() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.querySelector('.docs-sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (!mobileMenuBtn || !sidebar || !overlay) return;

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  mobileMenuBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Close when clicking any nav link on mobile
  const links = sidebar.querySelectorAll('.sidebar-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        closeSidebar();
      }
    });
  });
}

// 3. Highlight Active Sidebar Link
function highlightActiveSidebarLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'introduction.html';

  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const linkPage = href.split('#')[0].replace(/^(\.\/|\.\.\/)+/, '');
    if (pageName === linkPage || (pageName === '' && linkPage === 'introduction.html')) {
      link.classList.add('active');
      link.scrollIntoView({ block: 'nearest' });
    } else {
      link.classList.remove('active');
    }
  });
}

// 4. Code Block Copy to Clipboard
function initCodeCopy() {
  const copyButtons = document.querySelectorAll('.copy-code-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.code-block');
      if (!codeBlock) return;

      const codeElement = codeBlock.querySelector('pre code');
      if (!codeElement) return;

      const textToCopy = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color:#22c55e; font-weight:600;">Copied!</span>
        `;

        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

// 5. Search Functionality
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  let selectedIndex = -1;

  if (!searchBtn || !searchModalBackdrop || !searchInput || !searchResults) return;

  function openSearch() {
    searchModalBackdrop.classList.add('open');
    searchInput.value = '';
    selectedIndex = -1;
    renderResults(searchIndex.slice(0, 5));
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearch() {
    searchModalBackdrop.classList.remove('open');
  }

  searchBtn.addEventListener('click', openSearch);

  searchResults.addEventListener('click', (e) => {
    if (e.target.closest('.search-result-item')) {
      closeSearch();
    }
  });

  searchModalBackdrop.addEventListener('click', (e) => {
    if (e.target === searchModalBackdrop) {
      closeSearch();
    }
  });

  // Keyboard shortcut Ctrl+K or Cmd+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModalBackdrop.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && searchModalBackdrop.classList.contains('open')) {
      closeSearch();
    }
  });

  // Filter Search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    selectedIndex = -1;

    if (!query) {
      renderResults(searchIndex.slice(0, 5));
      return;
    }

    const filtered = searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });

    renderResults(filtered);
  });

  // Keyboard Navigation in Search Results
  searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-result-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < items.length) {
        items[selectedIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      }
    }
  });

  function updateSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function renderResults(results) {
    if (!results.length) {
      searchResults.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.95rem;">
          কোনো তথ্য খুঁজে পাওয়া যায়নি।
        </div>
      `;
      return;
    }

    // Determine relative path based on current folder
    const isInDocs = window.location.pathname.includes('/docs/');
    const pathPrefix = isInDocs ? '' : 'docs/';

    searchResults.innerHTML = results.map(item => `
      <a href="${pathPrefix}${item.url}" class="search-result-item">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.2rem;">
          <div class="result-title">${item.title}</div>
          <span style="font-size:0.7rem; padding: 0.1rem 0.4rem; border-radius: 4px; background: var(--border-color); color: var(--text-muted);">${item.category}</span>
        </div>
        <div class="result-desc">${item.description}</div>
      </a>
    `).join('');
  }
}
