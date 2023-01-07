💻 Projeto

Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha.

### Features

Salva a identificação do usuário no próprio dispositivo o usuário;
Consome de API os dados e características de cada planta;
Salva localmente a planta que o usuário possue;
Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;

✨ Tecnologias

React Native
Typescript
Expo
Expo Google Fonts
Styled-Components
Expo Local Notifications
Async Storage
Vector Icons
Axios
Date Fns
Lottie
React Navigation Stack e Bottom Tabs
React Native Gesture Handler
Json Server

🔖 Layout

Você pode visualizar o layout do projeto através desse link. É necessário ter conta no Figma para acessá-lo.

### Executando o projeto

Utilize o yarn ou o npm install para instalar as depedências do projeto. Em seguida, inicie o projeto e a API fake com o Json Server.

expo start
json-server ./src/services/server.json --host SEUIP --port 3333 --delay 700

Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.

```
import axios from 'axios';

const api = axios.create({
baseURL: 'http://SEUIP:3333',
});

export default api;
```
