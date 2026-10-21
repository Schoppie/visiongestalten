import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte gib deinen Namen ein.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein.").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Deine Nachricht sollte mindestens 10 Zeichen enthalten.")
    .max(2000, "Deine Nachricht darf höchstens 2000 Zeichen lang sein."),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Saves a contact request. Runs in the browser with the publishable key so it
 * also works when the site is hosted outside Lovable (e.g. Vercel).
 * Visitors may only insert; reading messages is not possible from the website.
 */
export async function sendContactMessage(input: ContactInput) {
  const data = contactSchema.parse(input);
  if (data.website) return; // honeypot filled → silently ignore bots

  const { error } = await supabase.from("contact_messages").insert({
    name: data.name,
    email: data.email,
    message: data.message,
  });
  if (error) throw new Error("Die Nachricht konnte gerade nicht gesendet werden.");
}
