Download Makerist-Dateien mit Violentmonkey
1. Voreinstellungen
- Stelle in den Einstellungen vom Browser ein, dass PDFs immer heruntergeladen
werden: (in die Browserzeile eingeben): chrome://settings/content/pdfDocuments
- Lege fest, wo deine Dateien gespeichert werden sollen und schalte aus, dass bei
jeder Datei nach dem SpeicherOrt gefragt wird: chrome://settings/downloads
- Lege fest, dass Pop-Ups und Weiterleitungen von Makerist zugelassen werden. Die
Einstellung findest du hier:
chrome://settings/content/siteDetails?site=https%3A%2F%2Fwww.makerist.de
2. Lade über den Chrome-Store das Plugin Violentmonkey herunter:
https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
3. Öffne folgenden Link - Wenn Violentmonkey installiert ist öffnet sich eine "Install"-Seite.
https://github.com/apfelkuchen123/makerist/raw/refs/heads/main/makerist.user.js
Klicke auf Installieren.
4. Gehe in Makerist auf “Meine Anleitungen”. Dort befindet sich nun ein neuer Button
“Download Page”. Mit Klick auf den Button werden alle Schnittmuster (PDF &
zip-Dateien) automatisch heruntergeladen. Falls der Button nicht da ist, lade die
Seite ggf. noch mal neu.
- Es dauert ca. 15 Sekunden bis alle Downloads gestartet sind.
Das Script tut nun folgendes: Es lädt automatisch zunächst alle Zip Dateien von der
geöffneten Seite herunter. Anschließend werden alle PDFs der geöffneten Seite
heruntergeladen. 
- Sollte die Seite einer Datei offen bleiben, gab es keine Zip-Datei -
einfach schließen.
- Bei einem Fehler kann die Seite mit der Fehlermeldung mit F5 nochmal neu geladen
werden, oder du lädst das Schnittmuster manuell herunter.

Viel Spaß 🙂

<aside class="warning">ACHTUNG AUF EIGENE GEFAHR</aside>:
Autodownloader lädt alle Dateien und springt dann zur nächsten Seite und immer so weiter:
https://github.com/apfelkuchen123/makerist/raw/refs/heads/main/makerist-auto-download.user.js
