# 🛠️ Repair Service Management System - UI (React)

Kliencka część aplikacji (Frontend) służącej do zarządzania serwisem naprawczym. Zapewnia dynamiczny, responsywny interfejs użytkownika, który komunikuje się z backendem przy pomocy zapytań asynchronicznych.

> ⚙️ **Kod serwerowy (Backend / Spring Boot) napędzający tę aplikację znajdziesz w repozytorium:** https://github.com/K-Krupa/repair-service

## ✨ Główne funkcjonalności

*   **Dynamiczne formularze:** Zintegrowany system dodawania Klientów, Urządzeń i Zleceń z ujednoliconym klientem API (`apiClient.js`).
*   **Zaawansowana obsługa błędów:** Wyłączenie domyślnej walidacji przeglądarki (`noValidate`) na rzecz precyzyjnego przechwytywania i wyświetlania błędów z backendu (HTTP 400 Bad Request) bezpośrednio pod odpowiednimi polami formularza.
*   **Bezpieczeństwo danych:** Zabezpieczenie przed błędami typu `NaN` i wysyłaniem pustych referencji w przypadku relacyjnych obiektów, chroniące serwer przed niespodziewanymi wyjątkami.
*   **Czysta architektura:** Separacja logiki komunikacji z serwerem od logiki widoku (UI).

## 💻 Technologie

*   React.js
*   Vite 
*   Fetch API
*   HTML5 / CSS3

## 🚀 Uruchomienie lokalne

1. Sklonuj repozytorium:
   git clone https://github.com/K-Krupa/repair-frontend

2. Przejdź do folderu z projektem i zainstaluj zależności:
   npm install

3. Uruchom serwer deweloperski:
   npm run dev

## 👨‍💻 Autor
**Kacper Krupa**