Fasteach
=======

*Teach fast, "c'est fastoch" !*

> Fasteach is a way to easily create elearning training using videos and minigames such as *multiple choice* questions.



How to install ?
----------------

First, you need to have [**Git**](https://git-scm.com/) and [**NodeJS**](https://nodejs.org) intalled. If it's not the case, you can download this two [here](https://git-scm.com/) and [here](https://nodejs.org) and intall them.

You need to install [**Grunt**](http://gruntjs.com) too. To do so, enter the following command :

```
npm i -g grunt-cli
```

 In order to previsualize the executable application made with [**Electron**](http://electron.atom.io/), you need to install **Electron-prebuilt** :

```
npm i -g electron-prebuilt
```

Once it's done, you can clone the repository. In a command prompt, enter :

```
git clone https://github.com/MrVil/Fasteach
```

Now, download the dependencies with the following command :

```
npm install
```


Usage
-----

**Build**

*Build the application to be ready for action !*

```
  grunt build
```

**Serve**

*Launch a local server to previsualize the application*

```
grunt serve
```

**Test**

*Lauch tests with mocha*

```
grunt test
```

**Electron**

*Launch the executable application preview*

```
grunt electron
```


Project Structure
-----------------
