# Player - Found Your Game
Projeto desenvolvido para disciplina de **Sistemas de Computação Móvel**

### O Aplicativo:
Aplicativo para a plataforma Android que consome uma API([IGDB](https://api-docs.igdb.com/)) e reestrutura os dados e apresenta ao usuário, o aplicativo possui o nome de ‘Player’ com o slogan ‘Found your Game’.
O usuário tem acesso direto a plataforma sem necessidade de login, não há vinculação de conta, pois não existe dados pessoais a serem exibidos, seu objetivo principal é tanto a exibição de jogo em alta quando a busca de jogos dentro do app, assim exibindo informações como quais plataformas, storyline screenshots e outras relevantes ao jogo.

## Pré Requisitos:

Abra o Command Prompt em modo Administrador
execute o comando abaixo na janela aberta para instalar o Chocolatey:

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Agora vamos instalar o Node, Python2 e a JDK8 (Java Development Kit 8).

```
choco install -y nodejs.install python2 jdk8
```

Agora com as dependências instaladas, vamos instalar o CLI (Command Line Interface) do React Native
```
npm install -g react-native-cli
```

## Configurando SDK do Android no Windows

[Tutorial para instalação e configuração do SDK](https://docs.rocketseat.dev/ambiente-react-native/android/windows#configurando-sdk-do-android-no-windows)


## Install:

```
npm install
```

Altere a linha 7 do arquivo 
```
PlayerApp/src/services/api.js
```

a chave de usuário pode ser adquirida pelo site da [IGDB](https://api-docs.igdb.com/)

```
'user-key': 'df6f9bb21a35b3bbb3eabc28f33af300',
```

Agora já é possivel executar o projeto, lembre-se de possuir um dispositivo mobile conectado. Se estiver utilizando **ADB** execute o comando:

```
adb devices
```
Executar:

```
react-native run-android
```

### Criado com:

* [React Native](https://facebook.github.io/react-native/) - Framework
* [NodeJS](https://nodejs.org/en/) - Interpretador JavaScript
* [IGDB](https://api-docs.igdb.com/) - API de dados

### Autor:

* **Marcelo Menezes**


