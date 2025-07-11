# 🚀 Landing Page Moderna

Uma landing page profissional e responsiva construída com **Angular 20** e **Tailwind CSS**, seguindo as melhores práticas de desenvolvimento front-end.

## ✨ Características

- **Design Moderno**: Interface elegante e profissional
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Performance Otimizada**: Carregamento rápido e SEO-friendly
- **Tailwind CSS**: Estilização moderna e customizável
- **Angular 20**: Framework robusto e escalável
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Acessibilidade**: Seguindo padrões WCAG

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **Tailwind CSS** - Framework de CSS utilitário
- **TypeScript** - Linguagem de programação
- **PostCSS** - Processador de CSS
- **Google Fonts** - Tipografia (Inter)

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 20.19.0 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd landing-page
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:4200
   ```

## 📁 Estrutura do Projeto

```
landing-page/
├── src/
│   ├── app/
│   │   ├── app.html          # Template principal da landing page
│   │   ├── app.ts            # Componente principal
│   │   └── app.scss          # Estilos do componente
│   ├── styles.scss           # Estilos globais com Tailwind
│   └── index.html            # HTML base
├── tailwind.config.js        # Configuração do Tailwind CSS
├── postcss.config.js         # Configuração do PostCSS
└── package.json              # Dependências do projeto
```

## 🎨 Customização

### Cores

As cores podem ser customizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... outras variações
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... outras variações
  }
}
```

### Componentes CSS

Classes utilitárias customizadas estão disponíveis em `src/styles.scss`:

- `.btn-primary` - Botão primário
- `.btn-secondary` - Botão secundário
- `.section-padding` - Padding padrão para seções
- `.container-custom` - Container responsivo

### Animações

Animações customizadas incluídas:

- `animate-fade-in` - Fade in suave
- `animate-slide-up` - Slide up com fade
- `animate-bounce-slow` - Bounce lento

## 📱 Seções da Landing Page

1. **Header/Navigation** - Menu responsivo com logo e navegação
2. **Hero Section** - Seção principal com call-to-action
3. **Features Section** - Recursos e benefícios do produto
4. **CTA Section** - Call-to-action secundário
5. **Footer** - Links e informações da empresa

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run test` - Executa testes
- `npm run watch` - Build em modo watch

## 📈 Performance

O projeto está otimizado para performance com:

- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Compressão de assets
- Cache eficiente

## 🌐 Deploy

### Build de Produção

```bash
npm run build
```

### Deploy no Netlify/Vercel

1. Conecte seu repositório
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist/landing-page/browser`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, entre em contato:

- Email: seu-email@exemplo.com
- LinkedIn: [Seu LinkedIn]
- Website: [Seu Website]

---

**Desenvolvido com ❤️ usando Angular 20 e Tailwind CSS**
