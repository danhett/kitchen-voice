## Kitchen voice test
A quick testing area for voice command stuff.

### About
This is a quick and dirty demo, built on annyang.js (https://github.com/TalAter/annyang). Annyang is a tiny but extremely useful javascript wrapper for the Web Speech API's powerful SpeechRecognition functionality (more info here: https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API?hl=en).

Annyang makes it very easy to add voice commands to a project, and also handles more complex tasks like pattern-matching and wildcards and a bunch of other stuff.

### Gotchas
At the moment the Web Speech API is only supported properly in Chrome, so use that. It's also a bit weird with permissions, so if you serve it from a none HTTPS source it gets a bit finicky. Fine from localhost.
