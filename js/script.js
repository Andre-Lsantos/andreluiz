
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);



function animarPagina() {


	const grupoTextoSplit = document.querySelectorAll(".textoSplit");

	// Animar cada elemento desse grupamento -> forEach

	grupoTextoSplit.forEach((textoUnicoSplit) => {
		const split = SplitText.create(textoUnicoSplit, {
			type: "lines, words, chars",
			mask: "lines",
		});



		gsap.from(split.chars, {
			y: 40,
			opacity: 0,
			duration: 0.3,
			stagger: 0.03,
			scrollTrigger: {
				trigger: textoUnicoSplit,
			},
		});
	});

  // ANIMACOES CARDS
  gsap.from(".certificados_grid", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".certificados_grid",
      start: "30% 90%",
      end: "80% 90%",
      scrub: true,
	  
	  
    },
  });


 gsap.from(".conteudo_card img", {
    x: -500,
	opacity: 0,
    duration: 3,
	filter: "blur(10px)",
	scrollTrigger: {
	  trigger: ".conteudo_card img",
	  start: "top 80%",
	  end: "20% 50%",
	  scrub: true,
	  
	}
  });


   gsap.from(".conteudo_about", {
    y: 120,
	opacity: 0,
    duration: 2,
	filter: "blur(10px)",
	scrollTrigger: {
	  trigger: ".conteudo_about",
	  start: "top 80%",
	  end: "20% 50%",
	  scrub: true,
	  
	}
  });




	// ...existing code...
	document.addEventListener("DOMContentLoaded", () => {
		const links = document.querySelectorAll('.header nav a[href^="#"]');
		const sections = [...links]
			.map(link => document.querySelector(link.getAttribute("href")))
			.filter(Boolean);
		const markHighlight = document.querySelector('.text-highlight');

		function setActiveOnScroll() {
			const pos = window.scrollY + window.innerHeight * 0.35;
			let currentId = "";

			sections.forEach(sec => {
				if (pos >= sec.offsetTop) currentId = sec.id;
			});

			links.forEach(link => {
				link.classList.toggle("ativo", link.getAttribute("href") === `#${currentId}`);
			});
		}


		setActiveOnScroll();
		window.addEventListener("scroll", setActiveOnScroll);

		if (markHighlight && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);

			gsap.fromTo(
				markHighlight,
				{ backgroundSize: "0% 100%" },
				{
					backgroundSize: "100% 100%",
					ease: "none",
					scrollTrigger: {
						trigger: markHighlight,
						start: "top 80%",
						end: "bottom 50%",
						scrub: true
					}
				}
			);
		}
	});






}
animarPagina();


// Header 
const header = document.querySelector(".header");

function syncHeaderAppearance() {
	if (!header) return;

	const shouldBeSolid = window.scrollY > 10;
	header.classList.toggle("is-transparent", !shouldBeSolid);
	header.classList.toggle("is-solid", shouldBeSolid);
}

if (header) {
	window.addEventListener("scroll", syncHeaderAppearance, { passive: true });
}


// Menu hamburger 
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#menu-principal");
const navLinks = document.querySelectorAll("#menu-principal a");

function closeMobileMenu() {
	if (!header || !navToggle) return;
	header.classList.remove("menu-open");
	navToggle.setAttribute("aria-expanded", "false");
	navToggle.setAttribute("aria-label", "Abrir menu");
}

function toggleMobileMenu() {
	if (!header || !navToggle) return;
	const isOpen = header.classList.toggle("menu-open");
	navToggle.setAttribute("aria-expanded", String(isOpen));
	navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

if (navToggle && navMenu && header) {
	navToggle.addEventListener("click", toggleMobileMenu);

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= 900) {
				closeMobileMenu();
			}
		});
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 900) {
			closeMobileMenu();
		}
	});
}





const tl = gsap.timeline({
	onComplete() {
		syncHeaderAppearance();

		gsap.to("#preloader", {
			opacity: 0,
			display: "none",
		})
	}
})

tl.to("#preloader path", {
	duration: 1,
	strokeDashoffset: 0,
});
tl.to("#preloader path", {
	fill: "rgb(212, 212, 212)",
	duration: 0.3,
	strokeDashoffset: 0,
});


