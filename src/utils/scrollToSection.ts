/**
 * Scrolls to given html element
 * @param id html element
 */
export const scrollToSection = (id: string) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};
