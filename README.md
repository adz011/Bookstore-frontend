# Bookstore-frontend

## About project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4 and
Node version 18.18.0 https://nodejs.org/en/blog/release/v18.18.0


## How to run
This guide is not comprehensive and only assumes installation for Windows users. This project isn't guaranteed to run on other operating systems.

You need to download Node.js, preferably the same version as used during development https://nodejs.org/en/download/current.
Upon installing Node, check that it works by opening shell and running command:
```sh
npm -v
```
Node.js installer should automatically add itself to global variables, so if the command above failed, check global variables.

Install Angular CLI, preferably version mentioned above by typing "@16.2.4" after cli. By default it downloads the latest version.

```sh
npm install -g @angular/cli
```

To check cli run

```sh
ng v
```
If you get 
```sh
File C:\Projects\Microsoft.Practices.ESB\Source\Samples\Management Portal\Install\Scripts\Management_Install.ps1 cannot be loaded because the execution of scripts is disabled on this system.
```
Or something similar, then run:
```sh
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
For more info check https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4 or simply follow official guide https://angular.io/guide/setup-local instead.

Go to your project folder from shell, and install stripe by command

```sh
ng add @stripe/stripe-js
```

To succsefully run application with backend, use this command:

```sh
npm run start
```

## Running unit tests

Run `npm run test` to execute the unit tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page or contact 
any contributor of this project.
