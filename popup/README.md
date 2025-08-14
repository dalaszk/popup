# Página Intermediária com Pop-up de Desconto - Versão 2.0

Esta é uma página intermediária atualizada para resolver problemas de suspensão no Google Ads, usando o screenshot da sua loja como fundo e um pop-up atrativo para capturar leads.

## ✨ Novidades da Versão 2.0

### 🎨 Cores Atualizadas
- **Esquema de cores harmonizado** com a paleta da sua loja
- **Vermelho escuro/Borgonha** (#8B0000, #A52A2A) para elementos principais
- **Dourado** (#DAA520, #B8860B) para o badge de desconto
- **Visual mais elegante** e profissional

### 📝 Textos Corrigidos
- **Gramática francesa aprimorada**:
  - "NOUS VOUS AVONS PRÉPARÉ..." (mais natural)
  - "FAIRE DE BONS ACHATS" (correção do anglicismo)
  - "S'INSCRIRE" (verbo correto no lugar de "REGISTRE")

### 🇫🇷 Mensagens em Francês
- **Mensagens de erro traduzidas**:
  - "Veuillez entrer votre adresse e-mail"
  - "Veuillez entrer une adresse e-mail valide"
  - "✓ INSCRIT !" (mensagem de sucesso)

## Arquivos Incluídos

- `index.html` - Página principal com textos corrigidos
- `styles.css` - Estilos atualizados com nova paleta de cores
- `script.js` - Funcionalidades com mensagens em francês
- `background.png` - Screenshot otimizado da sua loja
- `README.md` - Esta documentação atualizada

## Como Funciona

1. **Página de Entrada**: O usuário chega na página e vê o fundo da sua loja desfocado
2. **Pop-up Automático**: Após 0.5 segundos, aparece o pop-up com a oferta de desconto
3. **Captura de Lead**: O usuário insere o email para se "inscrever"
4. **Validação em Francês**: Mensagens de erro aparecem em francês se necessário
5. **Redirecionamento**: Após inserir o email, é redirecionado para sua loja principal

## Personalização

### Alterar URL de Redirecionamento

No arquivo `script.js`, linha 3, altere a URL:

```javascript
redirectUrl: 'https://sua-oferta-principal.com',
```

### Alterar Textos

No arquivo `index.html`, você pode modificar:

- Título principal: `RÉDUCTION JUSQU'À 80%`
- Subtítulo: `NOUS VOUS AVONS PRÉPARÉ UNE RÉDUCTION SPÉCIALE...`
- Texto do botão: `S'INSCRIRE`

### Alterar Cores

No arquivo `styles.css`, procure por:

- `#8B0000` - Vermelho escuro principal
- `#A52A2A` - Borgonha para gradientes
- `#DAA520` - Dourado para o badge
- `#B8860B` - Dourado escuro para sombras

## Como Hospedar

### Opção 1: Hospedagem Simples
1. Faça upload de todos os arquivos para seu servidor web
2. Acesse via navegador para testar
3. Use essa URL nos seus anúncios do Google Ads

### Opção 2: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative o GitHub Pages nas configurações
4. Use a URL fornecida pelo GitHub

### Opção 3: Netlify (Gratuito)
1. Arraste a pasta com os arquivos para netlify.com
2. Receba uma URL instantânea
3. Personalize o domínio se desejar

## Funcionalidades Técnicas

- **Responsivo**: Funciona em desktop e mobile
- **Animações**: Efeitos visuais profissionais
- **Validação**: Verifica se o email é válido
- **Armazenamento**: Salva o email no localStorage do navegador
- **Redirecionamento**: Automático após captura do lead
- **Multilíngue**: Totalmente em francês

## Melhorias Implementadas

### Design
- ✅ Cores harmonizadas com a identidade visual da loja
- ✅ Badge de desconto em dourado para maior destaque
- ✅ Bordas e sombras com tons mais elegantes

### Conteúdo
- ✅ Textos gramaticalmente corretos em francês
- ✅ Terminologia adequada para e-commerce francês
- ✅ Mensagens de erro e sucesso em francês

### Experiência do Usuário
- ✅ Validação de email com feedback em francês
- ✅ Botão com texto mais apropriado ("S'INSCRIRE")
- ✅ Mensagens de status claras e profissionais

## Dicas para Google Ads

1. **URL Limpa**: Use uma URL simples e profissional
2. **Velocidade**: A página carrega rapidamente
3. **Mobile-Friendly**: Totalmente otimizada para mobile
4. **Experiência do Usuário**: Interface intuitiva e atrativa
5. **Localização**: Totalmente em francês para o mercado francês

## Próximos Passos

1. ✅ Teste a página em diferentes dispositivos
2. ✅ Configure o URL de redirecionamento correto
3. ✅ Faça upload para seu servidor
4. ✅ Configure seus anúncios do Google Ads com a nova URL
5. ✅ Monitore as conversões e ajuste conforme necessário

## Changelog

### Versão 2.0
- 🎨 Atualização completa do esquema de cores
- 📝 Correção gramatical dos textos em francês
- 🇫🇷 Tradução de todas as mensagens de erro
- ✨ Melhorias visuais e de usabilidade

### Versão 1.0
- 🚀 Versão inicial com funcionalidades básicas

