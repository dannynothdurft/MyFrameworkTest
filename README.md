# MyFrameworkTest

## Erklärung der Struktur

1. index.html:

- Dies ist die HTML-Datei, die den Einstiegspunkt für dein Framework darstellt.
- Die `<div id="app"></div>` ist das Ziel, in das dein Framework die gerenderten Komponenten einfügt.
- Das `<script type="module" src="../src/app.js"></script>` lädt das Hauptmodul (`app.js`), das die Anwendung initialisiert.

2. framework.js:

- Hier definierst du die Basisfunktionen deines Frameworks:
- Die Component-Klasse, von der alle anderen Komponenten erben.
- createReactive: Ermöglicht die Erstellung eines reaktiven Zustands, der automatisch die DOM-Änderungen triggert.
- render: Fügt das virtuelle DOM in den echten DOM ein.

3. component.js:

- MyComponent ist eine einfache, wiederverwendbare Komponente, die in deinem Framework erstellt wird. Sie nutzt die render Methode, um HTML-Strings zu generieren.

4. app.js:

- Hier wird deine Anwendung gestartet. Es erstellt eine Instanz von MyComponent und rendert diese in den DOM.
- Es nutzt den reaktiven Zustand, um Änderungen in der Komponente darzustellen, ohne das DOM manuell zu manipulieren.

## Wie man es ausführt

Da wir ein einfaches Setup ohne Build-Tools wie npm, Vite, oder Webpack verwenden, kannst du es direkt ausführen, indem du die index.html Datei im Browser öffnest.

1. Öffne den Ordner my-framework in deinem Dateiexplorer.
2. Doppelklicke auf public/index.html, um die Datei im Browser zu öffnen.

Du solltest zunächst die Ausgabe "Hello, World!" sehen. Nach zwei Sekunden sollte sich der Text zu "Hello, Universe!" ändern, da der reaktive Zustand in app.js aktualisiert wird.

## Erweiterungen

- Du könntest die render-Funktion erweitern, um den virtuellen DOM zu vergleichen und nur die Unterschiede zu aktualisieren.
- Füge Event-Handling hinzu, damit der Benutzer auf Buttons klicken und den Zustand ändern kann.
- Entwickle ein eigenes Routing-System, um verschiedene Ansichten zu laden, basierend auf der URL.

Das Grundgerüst hier bietet dir eine gute Basis, auf der du aufbauen kannst, um dein eigenes Mini-Framework zu erstellen!
