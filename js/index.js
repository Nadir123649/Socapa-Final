// Select the header element using the correct class
const header = document.querySelector('.header');

// Check if the header element exists before adding the scroll event listener
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // When scrolling more than 10px, apply smaller header styles
      header.classList.add('bg-black', 'shadow-lg');
      header.classList.remove('bg-transparent');

      // Dynamically apply heights based on screen size
      if (window.innerWidth >= 768) {  // For md screens and above
        header.classList.remove('h-[100px]');
        header.classList.add('h-[60px]');
      } else {  // For smaller screens
        header.classList.remove('h-[80px]');
        header.classList.add('h-[60px]');
      }
    } else {
      // When scrolled back to the top, revert to original styles
      header.classList.add('bg-transparent');
      header.classList.remove('bg-black', 'shadow-lg');
    }
  });
} else {
  console.error('Header element not found.');
}

document.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.group');
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('group-hover');
  }
});


const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('invisible');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('invisible');
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButtons = document.querySelectorAll('.toggle-menu');

  toggleMenuButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const megaMenu = this.nextElementSibling;

      // Close other menus
      toggleMenuButtons.forEach(btn => {
        const menu = btn.nextElementSibling;
        if (menu !== megaMenu) {
          menu.classList.remove('active');
          btn.classList.remove('active');
        }
      });

      // Toggle the clicked menu
      megaMenu.classList.toggle('active');
      button.classList.toggle('active');

      // Prevent event from bubbling up to the document
      event.stopPropagation();
    });
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function () {
    toggleMenuButtons.forEach(button => {
      const menu = button.nextElementSibling;
      menu.classList.remove('active');
      button.classList.remove('active');
    });
  });
});


let currentlyOpenCategory = null;

document.querySelectorAll('.toggle-menu').forEach(item => {
  item.addEventListener('click', function () {
    const megaMenu = this.nextElementSibling;
    megaMenu.classList.toggle('hidden');

    const chevron = this.querySelector('i');
    chevron.classList.toggle('rotate');
  });

  const subCategories = item.closest('li').querySelectorAll('ul > li > span');
  subCategories.forEach(sub => {
    sub.addEventListener('click', function (e) {
      e.stopPropagation();

      if (currentlyOpenCategory && currentlyOpenCategory !== this) {
        currentlyOpenCategory.nextElementSibling.classList.add('hidden');
        currentlyOpenCategory.querySelector('i').classList.remove('rotate');
      }

      const subMenu = this.nextElementSibling;
      subMenu.classList.toggle('hidden');

      currentlyOpenCategory = subMenu.classList.contains('hidden') ? null : this;

      const subChevron = this.querySelector('i');
      subChevron.classList.toggle('rotate');
    });
  });
});

const toggleDropdowns = document.querySelectorAll('.toggle-dropdown');

toggleDropdowns.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const dropdownList = toggle.nextElementSibling; // Selects the next sibling <ul>
    dropdownList.classList.toggle('hidden'); // Toggle visibility

    // Change chevron direction
    const chevronIcon = toggle.querySelector('.chevron-icon');
    chevronIcon.classList.toggle('fa-chevron-down');
    chevronIcon.classList.toggle('fa-chevron-up');
  });
});

toggleDropdowns.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const dropdownList = toggle.nextElementSibling; // Selects the next sibling <ul>
    dropdownList.classList.toggle('block'); // Toggle visibility
    // Change chevron direction
    const chevronIcon = toggle.querySelector('.chevron-icons');
    chevronIcon.classList.toggle('fa-chevron-down');
    chevronIcon.classList.toggle('fa-chevron-up');
  });
});


  // Open the modal
  document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('film-modal').classList.remove('hidden');
  });

  // Close the modal
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('film-modal').classList.add('hidden');
  });

  // Another close button option
  document.getElementById('close-modal-2').addEventListener('click', function() {
    document.getElementById('film-modal').classList.add('hidden');
  });