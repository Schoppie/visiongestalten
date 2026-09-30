import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte gib deinen Namen ein.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein.").max(255),
  message: z.string().trim().min(10, "Deine Nachricht sollte mindestens 10 Zeichen enthalten.").max(2000),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { success: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (error) throw new Error("Die Nachricht konnte gerade nicht gespeichert werden.");
    return { success: true };
  });
