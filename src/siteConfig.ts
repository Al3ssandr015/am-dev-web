export const WHATSAPP_NUMBER = "50240622815";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CONTACT_EMAIL = "amansillai@hotmail.com";
