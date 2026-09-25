# SHAFTCONSULT-Website — Projektkontext

Astro-Website für SHAFTCONSULT (Lars Walter-Sinsel), herstellerunabhängige
Beratung zu Energieverlusten im Aufzugsschacht (bundesweit/international,
nicht lokal begrenzt). Design 1:1 aus Figma übernommen (Relume-Kit), kein CMS.

## Stack
- Astro (statisch, kein SSR)
- Inter (selbst gehostet über @fontsource)
- Deployment: Cloudflare Workers (statische Assets, `wrangler.jsonc`), baut
  automatisch bei jedem Push auf `main` — Test-URL
  https://shaftconsult-website.plain-sky-04db.workers.dev. Domain über Strato
  registriert, DNS über Cloudflare
- `build.format: 'file'` in `astro.config.mjs`: Unterseiten liegen unter
  `/impressum` usw. ohne Schrägstrich am Ende (passend zu Links und Sitemap)
- Live seit 25.09.2026 unter https://shaftconsult.de. In Cloudflare: www →
  Root per Redirect Rule (301), „Always Use HTTPS“ an, www-DNS-Eintrag ist ein
  Proxy-Platzhalter (A 192.0.2.1). E-Mail bleibt bei Strato (MX smtpin.rzone.de)
  — MX-/autoconfig-/SRV-/TXT-Einträge nicht löschen. Search Console per
  TXT-Eintrag verifiziert

## Aktueller Stand
- Alle Sections der Startseite fertig (Hero, Kamineffekt, Über Lars,
  GEGEN-Experte, Kennzahlen+Rechner, Erfahrung, 4-Schritte, Zielgruppen,
  FAQ, Kontakt)
- Impressum, Datenschutz, AGB, 404 fertig mit echtem Content
- Cookie-Banner + Google Analytics (Consent-gesteuert) eingebaut,
  GA4-Mess-ID `G-Q449YDWX1P` in `src/config/analytics.ts`
- SEO-Grundlagen: robots.txt, sitemap.xml, Open-Graph-Bild, strukturierte
  Daten (Schema.org `ProfessionalService`, bewusst NICHT lokal begrenzt —
  `areaServed: ["Deutschland", "weltweit"]`)

## Offene Punkte (mit dem Kunden klären)
- **Impressum**: USt-ID und "Geschäftsbereich" sind als "wird nachgereicht"
  markiert — finale Angaben nachtragen
- **SPF-Eintrag** für die Strato-E-Mail fehlt (DMARC steht auf p=reject) —
  korrekten Wert aus der Strato-Hilfe als TXT in Cloudflare eintragen
- **Rechtliche Prüfung**: Datenschutzerklärung und AGB sollten vor Live-Gang
  final von einem Anwalt freigegeben werden
- Noch keine echten Social-Media-Links außer LinkedIn (Footer)

## Eigenheiten, die beim Weiterarbeiten wichtig sind
- Mehrere SVG-Icons (Logos, GEGEN-Icons) nutzten ursprünglich generische
  `cls-1`/`cls-2`-CSS-Klassen aus dem Illustrator-Export — die wurden
  bewusst in feste `style`-Attribute pro Pfad umgewandelt, weil mehrere
  gleichzeitig inline auf einer Seite sonst ihre Farben gegenseitig
  überschreiben (nicht gekapseltes `<style>` im SVG). Neue SVG-Assets vor
  dem Einbinden genauso behandeln, sonst gibt's Farbfehler.
- Logo-Dateibenennung im Projekt ist nach tatsächlichem Layout benannt, NICHT
  nach den Original-Dateinamen aus Figma (die waren irreführend):
  `logo-stacked.svg` = Icon über Wortmarke gestapelt,
  `logo-inline.svg` = Icon neben Wortmarke,
  `logo-claim.svg` = inline-Logo + Claim-Text eingebaut,
  `logo-icon.svg` = nur das Icon (Favicon, mobile Navbar)
- Design-Tokens (Farben, Typo-Skala, Button-Varianten) zentral in
  `src/styles/global.css` — Button-Klassen: `btn-outline-dark`,
  `btn-outline-light`, `btn-fill-navy`, `btn-fill-light`, `btn-fill-white`
- Überschriften-Größen (`--heading-1` bis `--heading-6`) sind bewusst mit
  `clamp()` fließend skalierend gesetzt, nicht fix

## Nützliche erste Befehle
```
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Production-Build nach dist/
```
