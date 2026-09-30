# Schärferes Eyke-Foto, Leistungsseiten und Kontaktformular

## Ziel
Die bestehende Gestaltung bleibt erhalten. Eyke erscheint unten deutlich schärfer, die drei Leistungskarten führen zu passenden Detailseiten, und der Kontaktbereich erhält ein nutzbares Formular.

## Umsetzung
- Das kleine Eyke-Foto behutsam hochskalieren und nachschärfen, ohne ihr Aussehen oder den Bildausschnitt zu verändern.
- Jede der drei weißen Leistungskarten vollständig anklickbar machen und klar als Link kennzeichnen.
- Drei passende Detailseiten für Coaching & Mentoring, Grafik & Webdesign sowie Fotografie anlegen; vorhandene Bilder und Texte werden weiterverwendet und gestalterisch an die Startseite angepasst.
- Im Kontaktbereich ein Formular für Name, E-Mail und Nachricht ergänzen, inklusive Pflichtfeldprüfung, Versandstatus und verständlicher Bestätigung.
- Formularnachrichten sicher an `info@global-triangle.de` übermitteln; keine vertraulichen Zugangsdaten im sichtbaren Projektcode speichern.
- Seitentitel und Beschreibungen für alle neuen Detailseiten ergänzen sowie die Sitemap erweitern.

## Technische Details
- Navigation innerhalb der Website über die vorhandene Seitensteuerung, damit Direktaufrufe und Exporte über GitHub/Vercel funktionieren.
- Formularversand serverseitig über Lovable Cloud beziehungsweise einen sicheren E-Mail-Dienst; dafür wird kein E-Mail-Passwort im Browser hinterlegt.
- Abschließend alle Links, Formularzustände, Bildschärfe sowie die Darstellung auf Mobilgeräten und Desktop prüfen.
