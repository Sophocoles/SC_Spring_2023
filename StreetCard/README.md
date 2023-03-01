## How to Install

First, make sure you install *Python* (version `INSERT VERSION HERE`)

Then, download the repository, either through `git` or downloading it directly

## How to Run

### Django
To run the development server open a terminal in Django StreetCard directory (i.e. `./StreetCard/Django/StreetCard`) and run the following command:
```
    py manage.py runserver
```

If you want to run the server on a different port, use the following command, replacing `8080` with whatver port number you want:
```
    py manage.py runserver 8080
```

### React
in the React source directory (i.e. `./StreetCard/React/streetcard/src`), run the following command in a terminal (different from the one used for the Django server):
```
    npm start
```

If you get an error that says `Can't resolve 'react-router-dom'`, then run the following command:
```
	npm install react-router-dom --save
```
and try `npm start` again. For more information, look to the following StackOverflow link:
https://stackoverflow.com/questions/53914013/failed-to-compile-module-not-found-cant-resolve-react-router-dom

Conflicting eslint
must npm start from powershell due to caps issue
https://stackoverflow.com/questions/70377211/error-when-deploying-react-app-and-it-keeps-sayings-plugin-react-was-confli