//Class Defined to Add New Products to the Website
class AddNewProduct{
  constructor() {
    this.products = [];
  }
   // Specific function which adds new product to the website
  addProduct(id, name, price) {
    const newProduct = new Product(id, name, price);
    this.products.push(newProduct);
    this.updateWebsite();
  }
  // Function which refreshes the page when a new product is added
  updateWebsite() {
    const container = document.getElementById("products-container");
    container.innerHTML = "";
    // For looped used  (in range of how many products are added)
    this.products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      container.appendChild(productElement);
    });
  }
}

//JS Code for  Wishlist Functinonality

// Initialize the WishlistArr and WishlistCount variables
var WishlistArr = [];
var WishlistCount = 0;

// Get the heart icon in the Product1 section
var heartIcon = document.querySelector('.Product1 i.fa-heart');

// Add a click event listener to the heart icon
heartIcon.addEventListener('click', function() {
  // Get the Product1 section
  var product1 = document.querySelector('.Product1');

  // Get the Wishlist section
  var wishlist = document.getElementById('wishlist');

  // Check if the Product1 section is already in the Wishlist
  var index = WishlistArr.indexOf(product1);
  if (index !== -1) {
    // If the Product1 section is in the Wishlist, remove it
    WishlistArr.splice(index, 1);
    WishlistCount--;
    wishlist.removeChild(product1);
  } else {
    // If the Product1 section is not in the Wishlist, add it
    WishlistArr.push(product1);
    WishlistCount++;
    wishlist.querySelector('ul').appendChild(product1.cloneNode(true));
  }
});


//JS Code for Shopping Bag Functinonality


// Initialize the ShoppingBagArr and ShoppingBagCount variables
var ShoppingBagArr = []; // Array to store the selected product sections
var ShoppingBagCount = 0; // Counter for the number of selected product sections

// Get the heart icon in the Product1 section
var ShoppingBagIcon = document.querySelector('.Product1 i.fa-shopping-bag');

// Add a click event listener to the heart icon
ShoppingBagIcon.addEventListener('click', function() {
  // Get the Product1 section
  var product1 = document.querySelector('.Product1');

  // Get the Wishlist section
  var ShoppingBag = document.getElementById('shopping-bag');

  // Check if the Product1 section is already in the Wishlist
  var index = ShoppingBagArr.indexOf(product1);
  if (index !== -1) {
    // If the Product1 section is in the Wishlist, remove it
    ShoppingBagArr.splice(index, 1);
    ShoppingBagCount--;
    ShoppingBag.removeChild(product1);
  } else {
    // If the Product1 section is not in the Wishlist, add it
    ShoppingBagArr.push(product1);
    ShoppingBagCount++;
    ShoppingBag.querySelector('ul').appendChild(product1.cloneNode(true));
  }
});

// Function to change the language
function changeLanguage(selectedLanguage) {
  // Get all elements that needs translation
  var elements = document.querySelectorAll('[data-translate]');
  
  // Iterate through each element
  elements.forEach(function(element) {
    // Get the translation key
    var translationKey = element.getAttribute('data-translate');
    
    // Get the translated text based on the selected language
    var translatedText = translations[selectedLanguage][translationKey];
    
    // Set the translated text to the element
    element.innerHTML = translatedText;
  });
}

// Translations object containing language translations
var translations = {
  en: {
    'title': 'I Spy Homepage',
    'joggers': 'Blue Tech Fleece Joggers',
    'price': '£49.99',
    'shoppingBag': 'Shopping Bag',
    'wishlist': 'Wishlist',
    'featuredProducts': 'Featured Products',
    'language': 'Language',
    'english': 'English',
    'french': 'French',
    'spanish': 'Spanish'
  },
  fr: {
    'title': 'Page d\'accueil I Spy',
    'joggers': 'Pantalons de survêtement en molleton bleu',
    'price': '49,99 £',
    'shoppingBag': 'Sac de magasinage',
    'wishlist': 'Liste de souhaits',
    'featuredProducts': 'Produits en vedette',
    'language': 'Langue',
    'english': 'Anglais',
    'french': 'Français',
    'spanish': 'Espagnol'
  },
  es: {
    'title': 'Página de inicio de I Spy',
    'joggers': 'Joggers de tela azul',
    'price': '49.99 £',
    'shoppingBag': 'Bolsa de compras',
    'wishlist': 'Lista de deseos',
    'featuredProducts': 'Productos destacados',
    'language': 'Idioma',
    'english': 'Inglés',
    'french': 'Francés',
    'spanish': 'Español'
  }
};

// Function to initialize the language selector
function initializeLanguageSelector() {
  // Get the language selector element
  var languageSelector = document.getElementById('language');
  
  // Add event listener to the language selector
  languageSelector.addEventListener('change', function() {
    // Get the selected language
    var selectedLanguage = this.value;
    
    // Call the changeLanguage function with the selected language
    changeLanguage(selectedLanguage);
  });
}

// Call the initializeLanguageSelector function to initialize the language selector
initializeLanguageSelector();


