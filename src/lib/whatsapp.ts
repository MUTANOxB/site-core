export type WhatsAppUrlOptions = {
  phone: string;
  message?: string;
};

type ResolveWhatsAppUrlOptions = WhatsAppUrlOptions & {
  fallbackHref: string;
};

const WHATSAPP_BASE_URL = "https://wa.me/";
const MIN_WHATSAPP_PHONE_DIGITS = 8;

export function normalizeWhatsAppPhone(phone: string): string {
  return phone.replace(/[^0-9]/g, "");
}

export function buildWhatsAppUrl({
  phone,
  message,
}: WhatsAppUrlOptions): string {
  const normalizedPhone = normalizeWhatsAppPhone(phone);

  // Intentionally limited to a basic sanity check, without country-specific rules.
  if (normalizedPhone.length < MIN_WHATSAPP_PHONE_DIGITS) {
    throw new Error(
      "Invalid WhatsApp phone number: expected at least 8 digits after normalization.",
    );
  }

  const url = `${WHATSAPP_BASE_URL}${normalizedPhone}`;

  if (message === undefined || message.trim().length === 0) {
    return url;
  }

  return `${url}?text=${encodeURIComponent(message)}`;
}

export function resolveWhatsAppUrl({
  phone,
  message,
  fallbackHref,
}: ResolveWhatsAppUrlOptions): string {
  if (phone.trim().length === 0) {
    return fallbackHref;
  }

  return buildWhatsAppUrl({ phone, message });
}
