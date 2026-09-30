import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    setStatus("sending");
    try {
      await submit({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        },
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center shadow-soft" role="status">
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <h3 className="mt-5 text-3xl font-semibold">Vielen Dank!</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Deine Nachricht ist sicher bei uns eingegangen. Wir melden uns so bald wie möglich.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 text-left shadow-soft sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" autoComplete="name" maxLength={100} required className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">E-Mail</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" maxLength={255} required className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-message">Nachricht</Label>
          <Textarea id="contact-message" name="message" minLength={10} maxLength={2000} required className="min-h-36 resize-y" />
        </div>
        <div className="absolute -left-[10000px]" aria-hidden="true">
          <Label htmlFor="contact-website">Website</Label>
          <Input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        {status === "error" && (
          <p className="text-sm text-destructive" role="alert">
            Das hat leider nicht geklappt. Bitte versuche es erneut oder schreibe an info@global-triangle.de.
          </p>
        )}
        <Button type="submit" size="lg" disabled={status === "sending"} className="h-12 rounded-full">
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          {status !== "sending" && <Send />}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage einverstanden.
        </p>
      </div>
    </form>
  );
}
