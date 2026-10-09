# KRANIEC — serwer Minecraft 1.21+

To repozytorium zawiera prostą aplikację React + Vite dla strony serwera Minecraft KRANIEC.

Wymagania:
- Node.js 20+
- npm

Uruchomienie:
1. npm i
2. npm run dev
3. Otwórz adres podany w terminalu (zwykle http://localhost:5173)

Gdzie zmienić IP:
- szukaj `kraniec.pl` w `src/data/shop.ts` oraz komponentach `CopyIp`, `Header`, `JoinPage`

Gdzie zmienić ceny i itemy:
- `src/data/shop.ts`

Płatności:
- to jest tylko atrapka komunikatu, nie realny checkout. Wszystkie metody w koszyku pokazują komunikat: „Płatność nie jest podłączona...”

Ważne:
- UI i teksty są po polsku.
- Klucz Kresu pozostaje w cenie 15 zł.
- Rangi i klucze są na nicku, nie na prawdziwe dane płatnicze.
