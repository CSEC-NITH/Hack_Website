declare global {
  interface Window {
    scrollToSection: (sectionId: string) => void;
  }
}

export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const cleanId = sectionId ? (sectionId.startsWith("#") ? sectionId.substring(1) : sectionId) : "";

  // Small timeout allows mobile touch-event lifecycle and menu toggle to complete
  // so browser doesn't cancel the smooth scroll animation
  setTimeout(() => {
    if (!cleanId || cleanId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      try {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      } catch (_) {}
      return;
    }

    const section = document.getElementById(cleanId);
    if (!section) return;

    // Measure only the top bar of the header (excluding mobile dropdown menu)
    const topBar = document.querySelector("header .flex.items-center.justify-between") as HTMLElement | null;
    const navbarHeight = topBar ? Math.min(topBar.offsetHeight + 24, 80) : 70;

    const currentScrollY =
      window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const elementTop = section.getBoundingClientRect().top;
    const targetPosition = elementTop + currentScrollY - navbarHeight;

    window.scrollTo({
      top: Math.max(0, Math.round(targetPosition)),
      behavior: "smooth",
    });
  }, 30);
}

if (typeof window !== "undefined") {
  window.scrollToSection = scrollToSection;
}
