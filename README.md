# Cos'è questo progetto

Questo repository è un template avanzato per la creazione di siti web content-driven con Next.js e Sanity CMS, basato su Schema UI. Offre un page builder visuale, componenti React già pronti, schemi Sanity preconfigurati e query GROQ ottimizzate. L'obiettivo è permettere a sviluppatori e content editor di realizzare rapidamente siti moderni, scalabili e facilmente personalizzabili, con un'esperienza di editing visuale direttamente dal browser.

## Caratteristiche principali

- **Next.js** per rendering SSR/SSG e routing avanzato
- **Sanity CMS** come backend headless, con Studio integrato su `/studio`
- **Schema UI**: libreria di componenti React e schemi Sanity modulari
- **Tailwind CSS** e design system moderno
- **Supporto multi-sito e multi-tema**
- **Newsletter integrata (Resend)**
- **SEO avanzata e gestione metadati**
- **Estendibilità semplice per nuovi componenti e blocchi**

---

# Guida all'utilizzo del template

## 1. Requisiti

- Node.js >= 18
- pnpm (o npm/yarn)
- Account [Sanity.io](https://www.sanity.io/) (gratuito)
- Account [Resend](https://resend.com/) (opzionale, per newsletter)

## 2. Setup iniziale

### a) Clona il repository

```bash
git clone <url-del-tuo-repo>
cd <nome-cartella>
```

### b) Inizializza il progetto Sanity

Esegui:

```bash
npm create sanity@latest -- --template serge-0v/next-js-sanity-starter
```

Segui le istruzioni per creare un nuovo progetto su Sanity.io. Verranno generati Project ID, Dataset e Token.

### c) Installa le dipendenze

```bash
pnpm install
```

## 3. Configurazione del file `.env.local`

Copia il file di esempio e compila i valori:

```bash
cp .env.local.example .env.local
```

Compila così:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_ENV=development

# Chiavi Resend (opzionale, per newsletter)
RESEND_API_KEY=la-tua-api-key
RESEND_AUDIENCE_ID=il-tuo-audience-id

# --- SANITY CMS ---
NEXT_PUBLIC_SANITY_API_VERSION=YYYY-MM-DD # Usa la data odierna o quella del progetto
NEXT_PUBLIC_SANITY_PROJECT_ID=il-tuo-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=il-tuo-read-token

# (Opzionale) Titolo del progetto per Sanity Studio
NEXT_PUBLIC_SANITY_PROJECT_TITLE=NomeDelTuoProgetto

# (Opzionale) hCaptcha per form
HCAPTCHA_SECRET_KEY=...
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=...
```

**Dove trovo questi valori?**

- Project ID, Dataset e Token li trovi su [manage.sanity.io](https://www.sanity.io/manage) > Project > API.
- Per Resend, crea un account e genera API Key e Audience ID.

## 4. Configurazione su Sanity.io

- Vai su [manage.sanity.io](https://www.sanity.io/manage) e crea un nuovo progetto.
- Aggiungi il dominio di sviluppo (es: `http://localhost:3000`) e quello di produzione tra le CORS Origins.
- Copia Project ID, Dataset e Token nel `.env.local`.
- (Opzionale) Importa dati demo:
  ```bash
  npx sanity dataset import sample-data.tar.gz production --replace
  ```

## 5. Avvio in locale

```bash
pnpm dev
```

- App Next.js: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

Accedi con lo stesso account usato su Sanity CLI.

## 6. Deploy

- Aggiungi il dominio di produzione tra le CORS Origins su Sanity.io
- Segui la procedura Vercel (o altro hosting) e copia tutte le variabili d'ambiente dal `.env.local` nelle impostazioni del progetto.

## 7. Estendere il template (nuovi componenti)

Per aggiungere un nuovo blocco:

1. Crea lo schema in `shared/sanity/schemas/blocks/[nome]/[nome].ts`
2. Aggiungi il type in `shared/sanity/schemas/documents/page.ts`
3. Importa e aggiungi il blocco in `shared/sanity/schema.ts`
4. (Opzionale) Crea la query in `shared/sanity/queries/[nome]/[nome].ts`
5. Crea il componente React in `shared/components/ui/[nome]/[nome].tsx`
6. Aggiungilo alla `componentMap` in `shared/components/blocks.tsx`

---

# FAQ e Risorse

- [Documentazione Schema UI](https://schemaui.com/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

Per problemi con la CLI Sanity: https://www.sanity.io/help/cli-errors

---

# Esempio di `.env.local`

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_ENV=development
RESEND_API_KEY=1234
RESEND_AUDIENCE_ID=1234
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-18
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk_xxx
HCAPTCHA_SECRET_KEY=xxxx
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=xxxx
NEXT_PUBLIC_SANITY_PROJECT_TITLE=NomeDelTuoProgetto
```

---

# Struttura dei contenuti

- **Documenti principali**: Page, Post, Author, Category, FAQ, Testimonial
- **Blocchi componibili**: hero, section-header, grid, split, carousel, timeline, cta, logo-cloud, faqs, newsletter, all-posts, contactform
- **SEO**: ogni pagina ha campi meta, og:image, noindex

---

# Note di sicurezza

Non condividere mai i token di accesso Sanity o Resend pubblicamente. Usa sempre variabili d'ambiente e repository privati per progetti reali.

---

# Credits

Template realizzato con [Schema UI](https://schemaui.com), Next.js, Sanity CMS, Tailwind CSS.
