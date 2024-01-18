var emblaNode = document.querySelector(".embla");

const OPTIONS = { dragFree: true, containScroll: "trimSnaps", loop: true };
const viewportNode = emblaNode.querySelector(".embla__viewport");
const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

console.log(emblaApi); // Access API
