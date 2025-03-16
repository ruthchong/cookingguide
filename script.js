// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        const aboutSection = document.querySelector(".about-section");
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; 
        showSlide(currentSlide);
    }

    // setting
    showSlide(currentSlide);

    // 
    setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
        document.querySelectorAll(".menu-card").forEach((card) => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.75) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        this.classList.toggle("zoomed");
    });
});

// Menu Data
const menuData = {
    kungPao: {
        title: "Kung Pao Chicken",
        img: "kungpao.jpg",
        description: ""
    },
    gingerOnion: {
        title: "Ginger Onion Chicken",
        img: "gingeronion.jpg",
        description: ""
    },
    spicyChicken: {
        title: "Spicy Chicken",
        img: "spicychicken.jpg",
        description: ""
    },
    toucuChicken: {
        title: "Toucu Chicken",
        img: "toucuchicken.jpg",
        description: ""
    },
    chilliPork: {
        title: "Chilli Pork",
        img: "chillipork.jpg",
        description: ""
    },
    cabbagePork: {
        title: "Cabbage Pork",
        img: "cabbagepork.jpg",
        description: ""
    },
    fishTaste: {
        title: "Fish Taste Pork",
        img: "fishtaste.jpg",
        description: ""
    },
    shreddedPork: {
        title: "Shredded Chilli Pork",
        img: "shreddedpork.jpg",
        description: ""
    },
    shreddedPickle: {
        title: "Shredded Pickle Pork",
        img: "shreddedpickle.jpg",
        description: ""
    },    
    leekPork: {
        title: "Leek with Pork",
        img: "leek.jpg",
        description: ""
    },
    saltPotato: {
        title: "Spicy Salted Potato",
        img: "saltpotato.jpg",
        description: ""
    },
    sourPotato: {
        title: "Spicy Sour Potato",
        img: "sourpotato.jpg",
        description: ""
    },
    malaTofu: {
        title: "Mala Toufu",
        img: "mala.jpg",
        description: ""
    },
    toucuTofu: {
        title: "Toucu Toufu",
        img: "toucu.jpg",
        description: ""
    },
    mapoTofu: {
        title: "Mapo Toufu",
        img: "mapo.jpg",
        description: ""
    },
    tomatoEgg: {
        title: "Tomato Eggs",
        img: "tomatoegg.jpg",
        description: ""
    },
    friedCabbage: {
        title: "Fried Cabbage",
        img: "friedcabbage.jpg",
        description: ""
    },
    friedRice: {
        title: "Fried Rice",
        img: "friedrice.jpg",
        description: ""
    },
};

function openModal(food) {
    let modal = document.getElementById("modal");

    if (!modal) {
        console.error("Modal not found! Check your HTML structure.");
        return;
    }

    // 更新模态框内容
    document.getElementById("modal-title").innerHTML = menuData[food].title;
    document.getElementById("modal-img").src = menuData[food].img;
    document.getElementById("modal-description").innerHTML = menuData[food].description;

    // 显示模态框
    modal.style.display = "flex";
}

// 关闭模态框（点关闭按钮或点击模态框外部区域）
function closeModal() {
    let modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}

// 监听模态框的点击事件（点击外部区域关闭）
document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    if (modal) {
        modal.addEventListener("click", function(event) {
            // 如果点击的不是 .modal-content 内部的内容，则关闭模态框
            if (!event.target.closest(".modal-content")) {
                closeModal();
            }
        });
    }
});


