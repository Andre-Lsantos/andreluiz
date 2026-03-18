
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
			opacity: 2,
			duration: 1.1,
			stagger: 0.03,
			scrollTrigger: {
				trigger: textoUnicoSplit,
			},
		});
	});

	// ANIMACOES CARDS
	gsap.from(".certificados_grid", {
		opacity: 0,
		filter: "blur(5px)",
		stagger: 0.3,
		scrollTrigger: {
			trigger: ".certificados_grid",
			start: "30% 90%",
			end: "10% 20%",
			scrub: true,


		},
	});


	gsap.from(".conteudo_card img", {
		x: -500,
		opacity: 0,
		duration: 3,
		filter: "blur(9px)",
		scrollTrigger: {
			trigger: ".conteudo_card img",
			start: "top 80%",
			end: "20% 50%",
			scrub: true,

		}
	});


	ScrollSmoother.create({
		smooth: 1.4,              // quanto mais alto mais suave
		//smoothTouch: 0.1,        // suavidade no toque para mobile podendo ter bug para celular.

		effects: true             // ativar efeitos de data-speed e data-lag



	});


	gsap.from(".conteudo_about_text", {
		y: 120,
		opacity: 0,
		duration: 2,
		filter: "blur(9px)",
		scrollTrigger: {
			trigger: ".conteudo_about_text",
			start: "top 80%",
			end: "20% 50%",
			scrub: true,

		}
	});




	// ...existing code...
	document.addEventListener("DOMContentLoaded", () => {





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


function syncHeaderAppearance() {



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







gsap.set(".split", { opacity: 1 });

document.fonts.ready.then(() => {
	const texts = gsap.utils.toArray(".conteudo_about_text .split");

	texts.forEach((text) => {
		SplitText.create(text, {
			type: "words,lines",
			mask: "lines",
			linesClass: "line",
			autoSplit: true,
			onSplit: (instance) => {
				return gsap.from(instance.lines, {
					yPercent: 120,
					stagger: 0.1,
					scrollTrigger: {
						trigger: text,
						scrub: true,
						start: "top 80%",
						end: "bottom 50%"
					}
				});
			}
		});
	});
});



