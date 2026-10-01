// Search Database Index with all 28 sections
const searchIndex = [
  { title: "১. Authentication কী?", url: "introduction.html#section-1", category: "ফাউন্ডেশন", description: "Authentication মানে হলো কোন user সেটা verify করা—তুমি আসলে কে?" },
  { title: "২. Authorization কী?", url: "introduction.html#section-2", category: "ফাউন্ডেশন", description: "Authorization মানে হলো permission check—তুমি কী কী করতে পারবে?" },
  { title: "৩. Authentication এবং Authorization-এর পার্থক্য", url: "introduction.html#section-3", category: "ফাউন্ডেশন", description: "AuthN ও AuthZ এর বিস্তারিত তুলনামূলক টেবিল ও ফ্লো।" },
  { title: "৪. JWT কী?", url: "introduction.html#section-4", category: "JWT ও স্ট্রাকচার", description: "JSON Web Token কী এবং কীভাবে ক্লায়েন্ট ও সার্ভারের মাঝে কাজ করে।" },
  { title: "৫. JWT কেন দরকার?", url: "introduction.html#section-5", category: "JWT ও স্ট্রাকচার", description: "প্রতি রিকোয়েস্টে বারবার ইউজারনেম/পাসওয়ার্ড না পাঠিয়ে টোকেন পাঠানো।" },
  { title: "৬. JWT-এর Structure", url: "introduction.html#section-6", category: "JWT ও স্ট্রাকচার", description: "Header.Payload.Signature তিনটি অংশের স্ট্রাকচার।" },
  { title: "৭. JWT Header", url: "introduction.html#section-7", category: "JWT ও স্ট্রাকচার", description: "alg (HMAC-SHA256) এবং typ (JWT) মেটাডাটা।" },
  { title: "৮. JWT Payload", url: "introduction.html#section-8", category: "JWT ও স্ট্রাকচার", description: "Claims, User ID, Username, Role ইত্যাদি স্টোর করা।" },
  { title: "৯. Claim কী?", url: "introduction.html#section-9", category: "Claims ও আইডেন্টিটি", description: "User সম্পর্কে কোনো information বা statement (যেমন NameIdentifier, Role)।" },
  { title: "১০. Claim Type কী?", url: "introduction.html#section-10", category: "Claims ও আইডেন্টিটি", description: "Claim-এর Type এবং Value (যেমন Role = Admin)।" },
  { title: "১১. Standard Claim এবং Custom Claim", url: "introduction.html#section-11", category: "Claims ও আইডেন্টিটি", description: "ClaimTypes.Email বনাম কাস্টম Department, Permission ক্লেইম।" },
  { title: "১২. JWT Signature", url: "introduction.html#section-12", category: "JWT ও স্ট্রাকচার", description: "Secret Key + Algorithm দিয়ে টোকেনের অখণ্ডতা যাচাই করা।" },
  { title: "১৩. Secret Key কী?", url: "introduction.html#section-13", category: "JWT ও স্ট্রাকচার", description: "সার্ভারের গোপন চাবি এবং ক্লায়েন্টে কখনো না পাঠানোর নিয়ম।" },
  { title: "১৪. JWT Generate করার Flow", url: "introduction.html#section-14", category: "টোকেন তৈরি", description: "Login থেকে Claims, Signing Credentials হয়ে টোকেন তৈরির ফ্লো।" },
  { title: "১৫. JWT Object এবং JWT String", url: "introduction.html#section-15", category: "টোকেন তৈরি", description: "JwtSecurityToken object থেকে WriteToken() দিয়ে স্ট্রিং কনভার্সন।" },
  { title: "১৬. Access Token কী?", url: "introduction.html#section-16", category: "টোকেন তৈরি", description: "Protected API এক্সেস করার স্বল্পমেয়াদী ক্রেডেনশিয়াল।" },
  { title: "১৭. Token Expiration", url: "introduction.html#section-17", category: "টোকেন তৈরি", description: "expires: DateTime.UtcNow.AddHours(2) এবং লাইফটাইম লিমিট।" },
  { title: "১৮. Facebook-এর মতো Long Login কীভাবে হয়?", url: "introduction.html#section-18", category: "সেশন ও রিফ্রেশ", description: "Access Token ও Refresh Token-এর সমন্বয়ে নিরবচ্ছিন্ন লগইন সেশন।" },
  { title: "১৯. Refresh Token কী?", url: "introduction.html#section-19", category: "সেশন ও রিফ্রেশ", description: "Expired Access Token-এর বদলে নতুন Access Token সংগ্রহের মেকানিজম।" },
  { title: "২০. Role-Based Authorization", url: "introduction.html#section-20", category: "রোল ও অথরাইজেশন", description: "Admin এবং User রোলে আলাদা এক্সেস দেওয়া।" },
  { title: "২১. Admin এবং User Example", url: "introduction.html#section-21", category: "রোল ও অথরাইজেশন", description: "Bondhon (Admin) বনাম Rahim (User) এন্ডপয়েন্ট এক্সেস।" },
  { title: "২২. [Authorize] কী?", url: "introduction.html#section-22", category: "রোল ও অথরাইজেশন", description: "লগইন করা ইউজারের জন্য এন্ডপয়েন্ট প্রোটেকশন।" },
  { title: "২৩. [Authorize(Roles = 'Admin')]", url: "introduction.html#section-23", category: "রোল ও অথরাইজেশন", description: "শুধুমাত্র নির্দিষ্ট অ্যাডমিন রোলের পারমিশন চেক।" },
  { title: "২৪. Logout কী?", url: "introduction.html#section-24", category: "সেশন ও রিফ্রেশ", description: "Frontend থেকে টোকেন মোছা এবং Refresh Token Revoke করা।" },
  { title: "২৫. Browser-এর Save Password বনাম Auth", url: "introduction.html#section-25", category: "সেশন ও রিফ্রেশ", description: "Browser Password Manager আর Application Auth-এর ভিন্নতা।" },
  { title: "২৬. Swagger এবং JWT", url: "introduction.html#section-26", category: "আর্কিটেকচার", description: "Authorization: Bearer <JWT> দিয়ে Swagger UI-তে টেস্ট করা।" },
  { title: "২৭. Complete Architecture Flow", url: "introduction.html#section-27", category: "আর্কিটেকচার", description: "Register, Login, Token, Client, Role থেকে Admin/User Page সম্পূর্ণ ফ্লো।" },
  { title: "২৮. সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলো", url: "introduction.html#section-28", category: "আর্কিটেকচার", description: "JWT-র মূল সিকোয়েন্স এবং ৭টি কোর কনসেপ্টের সামারি।" },
  { title: "Official References", url: "introduction.html#official-references", category: "রেফারেন্স", description: "Microsoft Learn-এর অফিশিয়াল ডকুমেন্টেশন লিংক।" }
];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initCodeCopy();
  initSearch();
  initScrollspy();
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

// 3. Scrollspy: Highlight Active Sidebar Link as User Scrolls
function initScrollspy() {
  const sections = document.querySelectorAll('h2[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  if (!sections.length || !sidebarLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        sidebarLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href.includes('#' + id)) {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            link.scrollIntoView({ block: 'nearest' });
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
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
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.color = '#22c55e';
        btn.style.borderColor = '#22c55e';

        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
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
    renderResults(searchIndex.slice(0, 6));
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

  // Keyboard shortcut Ctrl+K or Cmd+K
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
      renderResults(searchIndex.slice(0, 6));
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
