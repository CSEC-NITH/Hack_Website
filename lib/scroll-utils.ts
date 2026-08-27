declare global {
  interface Window {
    scrollToSection: (sectionId: string) => void;
  }
}

export function scrollToSection(sectionId: string) {
  if (sectionId === "home" || sectionId === "") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbar = document.querySelector("header") || document.querySelector("nav");
    const navbarHeight = navbar ? (navbar as HTMLElement).offsetHeight : 70;

    const offsetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 15;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  }, 50);
}

if (typeof window !== "undefined") {
  window.scrollToSection = scrollToSection;
}
