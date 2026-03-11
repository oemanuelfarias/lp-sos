# Especificação de Layout Tech Apple-Style

Abaixo, cada seção da *copy.md* foi detalhadamente planejada, considerando o workflow *gerar-layout* e a skill *creative-reference*. Nenhuma decisão foi deixada ao acaso; todas as medidas, cores e interações estão prontas para desenvolvimento em HTML/CSS.

---

## Paleta Global e Tokens

- **Preto Fundo Principal:** `#080808`
- **Preto Secundário (Superfícies/Cards):** `#161616`
- **Branco (Texto Principal):** `#ffffff`
- **Cinza (Texto Secundário):** `#a1a1aa`
- **Laranja Marca:** `#ff590a`
- **Hover Laranja:** `#FF6B1A`
- **Laranja Glow Blur:** `rgba(255, 89, 10, 0.4)`
- **Glassmorphism Base:** `rgba(25, 25, 25, 0.4)`
- **Border Glass:** `rgba(255, 255, 255, 0.05)`

## Tipografia Global
- **Headings (Títulos):** `Plus Jakarta Sans`, system-ui, sans-serif
- **Body (Textos):** `Montserrat`, system-ui, sans-serif
- **Vibe:** Geométrico Premium + Clear Sans. Combinação ultra-moderna e limpa, favorecendo legibilidade e sofisticação "tech".

---

## Seção 1: Hero (Referência Atual)

*(Esta seção já foi implementada no index.html, mas incluída aqui para documentação completa do contexto visual).*

### Arquétipo e Constraints
- **Arquétipo:** Hero Dominante
- **Constraints:** 3D Element (Mockup Flutuante), Blur Background (Glow radial animado).
- **Justificativa:** Imersão imediata. Foco massivo no objeto tech (smartphone) flutuando sobre um fundo de profundidade (glow respirando), estabelecendo o padrão Apple de apresentação de produto.

### Layout Base
- Altura: `min-height: 100vh`, alinhamento `center`, padding-top `80px`.
- Max-width: `1280px`, flexbox space-between para texto e mockup.

---

## Seção 2: Vendas (Smartphones e Eletrônicos)

### Arquétipo e Constraints
- **Arquétipo:** Bento Box (Grid assímetrico em células)
- **Constraints:** Glassmorphism (Superfícies translúcidas), Hover Scale (Interação nos bg-images), Fade Up (Animação de entrada).
- **Justificativa:** A organização Bento Box permite exibir múltiplas linhas de eletrônicos simultaneamente (celulares, smartwatches, caixas) sem parecer um e-commerce tradicional. Fica visualmente rico e ultra-moderno (estilos iOS widgets).

### Conteúdo
- **Título:** As melhores marcas com as condições que você procura
- **Texto:** Procurando um smartphone lançamento, uma caixinha de som potente para o churrasco do fim de semana ou fones de ouvido de alta qualidade? Aqui na SOS Celulares você encontra. Temos uma linha completa de eletrônicos para todos os gostos e orçamentos.

### Layout
- **Container:** `max-width: 1280px`, `padding: 120px 24px`.
- **Estrutura Split:** Flexbox, `gap: 0`. Esquerda: Título em painel Glass (overlap). Direita: Grid estrutural.
- **Grid Bento:** `display: grid`, `grid-template-columns: 1fr 1fr`, `grid-template-rows: 240px 240px`, `gap: 24px`.
- **Panel Sobreposto (Overlap):** Ocupa 50% de flex, `transform: translateX(40px)`, `z-index: 5`, `padding: 64px 48px`, `border-radius: 32px`.
- **Cards Bento:** `border-radius: 32px`, `padding: 32px`, `overflow: hidden`, texto posicionado no fundo usando `align-items: flex-end`.

### Cores
- **Cards Overlay:** Gradiente `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)`.

### Elementos Visuais
- Imagens de alta qualidade em `background-image` em cada card Bento, com `background-size: cover` e `background-position: center`.

### Animações
- **Fade Up Setup:** Elementos iniciam com `opacity: 0`, `transform: translateY(40px)`.
- **Scroll Trigger:** Quando visíveis, transição com `transition: opacity 800ms ease-out, transform 800ms cubic-bezier(0.16, 1, 0.3, 1)`.

### Interatividade
- **Hover Grid:** No `:hover` da célula Bento, aplica `transform: translateY(-8px)` no card e `transform: scale(1.08)` na imagem de fundo, duração `400ms cubic-bezier(...)`. Borda ilumina suavemente `rgba(255, 255, 255, 0.2)`.

### Responsividade
- **Tablet (1024px):** Container passa a flex column. Overlap volta a `translateX(0)`. Margin bottom no panel passa para `-40px`. Grid bento 100% width.
- **Mobile (768px):** Padding-sec: `80px`. Grid passa a `1fr` e `repeat(4, 200px)`.

---

## Seção 3: Assistência Técnica Especializada

### Arquétipo e Constraints
- **Arquétipo:** Split Horizontal Revelador (Texto focado acima, mídia interativa/focada abaixo explodindo largura)
- **Constraints:** Imagem Recortada (Imagens PNG sem fundo), Scroll Progress (Componentes reagem ao scroll), Parallax Layers (Placas e telas movendo em velocidades diferentes).
- **Justificativa:** Diferencia totalmente da seção anterior vendendo o "conserto" demonstrando o interior do aparelho de forma tecnológica. Criar impacto visual através da separação das camadas internas de um smartphone explodido no ar.

### Conteúdo
- **Título:** Manutenção de verdade, rápida e com garantia
- **Texto:** Tela trincada? Bateria viciada? O celular apagou e não liga mais? Não te preocupa! Nossos técnicos são especialistas em dar vida nova para o seu aparelho. Fazemos um diagnóstico preciso, com orçamento sem compromisso, para entregar seu celular funcionando perfeitamente no menor tempo possível.

### Layout
- **Box Superior (Texto):** `max-width: 700px`, `margin: 0 auto`, `text-align: center`, `padding-bottom: 64px`.
- **Box Inferior (Mídia):** `position: relative`, `height: 500px`, `width: 100vw`, `transform: translateX(calc(-50vw + 50%))`, `overflow: hidden`.
- **Elementos Parallax:** Três camadas "device-layer" empilhadas no centro com posição absoluta. Múltiplas ferramentas (chaves de fenda virtuais, capacitores) flutuando ao redor em posição absoluta.

### Tipografia
- **Título:** Plus Jakarta Sans, `clamp(2.5rem, 4vw, 3rem)`, `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.1`. Palavra "garantia" com cor `#ff590a` e `color-glow`.
- **Texto:** Montserrat, `clamp(1rem, 1.25vw, 1.125rem)`, `font-weight: 400`, cor `#a1a1aa`, `line-height: 1.6`.

### Cores
- Background Section: Mantém fluxo linear com linear-gradient sutil para `#161616` ao centro para destacar as imagens e volta para `#080808`. Glow radial `#ff590a` sutil via pseudo-elemento no centro da área 3D (opacity 0.15).

### Elementos Visuais
- Imagem PNG High-Res (renderizada via CDN Netlify) de um smartphone desmontado em 3 camadas: (Layer1: Tela Frontal flotando), (Layer2: Placa/Chipset no meio), (Layer3: Carcaça Traseira fundo).

### Animações
- **Entrada Texto:** Stagger fade-up simples (delay 100ms título, 200ms texto).
- **Parallax de Scrolling:** Via atributo HTML/JS simular:
  - Layer 1 (tela) move-se mais rápido para cima e para a esquerda.
  - Layer 2 (chip) levita suave `translateY(-20px)`.
  - Layer 3 (fundo) afunda e move mais lentamente.
*(Caso sem biblioteca JS: A animação principal se torna "Levitação constante em CSS (floatLoop)" em intensidades variadas entre as 3 camadas).*

### Interatividade
- **Hover na peça central:** Todas as camadas se expandem (scale up moderado e distância aumenta) com transition lenta de `600ms`.

### Responsividade
- **Mobile (768px):** Box inferior perde exploração de width global e vira `width: 100%`. Height cai para `350px`. Camadas sofrem redução em scale via CSS.

---

## Seção 4: Por que escolher a SOS Celulares?

### Arquétipo e Constraints
- **Arquétipo:** Rule of Thirds Assímetrica (Texto listado em zigue-zague com espaço negativo dramático). NUNCA grid simétrico. NUNCA 3 cards padronizados laterais.
- **Constraints:** Texto com Número Transparente / Sombra Colorida (Stroke text enorme atrás), Stagger (List items aparecem sequencialmente), Border Reveal (Interação via hover de borda que brilha ao passar o mouse).
- **Justificativa:** Os benefícios devem ser lidos fluentemente, como capítulos narrativos. O número gigante no fundo em stroke apenas adiciona peso de design, focado em minimalismo Dark.

### Conteúdo
- **Título Geral:** Tradição e confiança aqui na nossa região
- **Item 1:** Especialistas no que fazem - Equipe técnica altamente qualificada para resolver qualquer problema no seu smartphone.
- **Item 2:** Peças de excelência - Trabalhamos com componentes de alta qualidade para garantir a durabilidade do conserto.
- **Item 3:** Transparência e Rapidez - Sem enrolação. Você sabe exatamente o que será feito no seu aparelho, com agilidade e preço justo.

### Layout
- **Container:** `max-width: 1280px`, `padding: 120px 24px`. Flex column.
- **Título Principal:** Max-width curto de `450px`, no topo à esquerda. Sticky position relative.
- **Lista Benefícios (Wrapper da direita):** Margin-left de `40%` (desktop) ou flex space-between. Elementos descem enfileirados.
- **Item Structure:** Relative box, padding de `40px 0`, border-bottom 1px de `rgba(255,255,255,0.05)`, flexbox row gap 32px (número outline gigante na esquerda, texto explicativo direita).

### Tipografia
- **Número Outline:** `01, 02, 03`. Fonte `Plus Jakarta Sans`, font-size `8rem`, `color: transparent`, `-webkit-text-stroke: 1px rgba(255,255,255,0.1)`. No estado de foco: stroke muda para `#ff590a`.
- **Item Título:** `font-size: 1.5rem`, `font-weight: 700`, color `#ffffff`.
- **Item Texto:** `font-size: 1.125rem`, color `#a1a1aa`, `line-height: 1.6`.

### Cores
- Predominante `rgba(255,255,255,0.05)` no contorno de bordas. Texto branco e acento no `hover` com `#ff590a`.

### Animações
- Fade-up via Scroll com Stagger Delay por Item: `.item-1` (0ms), `.item-2` (150ms), `.item-3` (300ms).

### Interatividade
- **Hover na "Linha" (Row Hover):** Cursor altera para pointer. O stroke do Background Number ilumina com transição `stroke-color 300ms`. O conteúdo realiza mini-translation no Eixo X (`translateX(16px)`) com Cubic-Bezier suado elástico.

### Responsividade
- **Tablet/Mobile:** O margin-left de 40% desaparece e cai abaixo do titulo (flex-column com gap regular). A fonte Outline cai de 8rem para `5rem`. O hover translation-x é destituido em favor do touch amigável sem shift layout.

---

## Seção 5: Nossas Lojas (Endereços e Horários)

### Arquétipo e Constraints
- **Arquétipo:** Split Vertical Estrito (Tela cortada exatamente ao meio, 50% / 50%).
- **Constraints:** Hover Lift nos Floating Cards flutuando sobre uma arte abstrata de pinos de mapa de fundo; Blur Background.
- **Justificativa:** Ambas as lojas recebem igual importância. Fica visualmente simétrico na base da arquitetura, mas cada lado retém suas interações locais independentes. Exclui a necessidade do mapa feio tradicional do google e usa design orgânico Glass.

### Conteúdo
- **Título Seção (Inicia Oculto/Visivel Screen Reader):** Venha nos visitar e conhecer nossas lojas!
- **Loja A:** 📍 Santa Rosa, [Endereço], Segunda a Sexta [H], Sábados [H]
- **Loja B:** 📍 Santo Cristo, [Endereço], Segunda a Sexta [H], Sábados [H]

### Layout
- **Container Global:** `display: flex`, `width: 100%`, `min-height: 80vh`. Sem uso do wrapper `container` original para garantir Stretch 100vw nas larguras absolutas.
- **Painel Metade (Location-Half):** `flex: 1`, `display: flex`, `align-items: center`, `justify-content: center`, padding `64px 24px`, position relative.
- **Card Informação:** Position relative index 10, largura `max-width: 450px`, padding `48px`, border-radius `24px`.

### Tipografia
- **Títulos (Cidades):** Plus Jakarta Sans, `2.5rem`, `font-weight: 700`, `margin-bottom: 24px`.
- **Labels Contexto (Endereço, Horários):** Montserrat, `0.875rem`, `text-transform: uppercase`, `letter-spacing: 2px`, `color: var(--clr-gray)`.
- **Valores Texto:** Montserrat, `1.125rem`, `font-weight: 500`.

### Cores e Background
- **Painel Santa Rosa:** Background escuro liso `#0a0a0d`, com gradiente circular `#ff590a` borrado em posição distante (-30% bottom-left opacity 0.2).
- **Painel Santo Cristo:** Background ligeiramente diferenciado `#07070a`, gradiente circular na oposta (top-right opacity 0.2).
- **Card Info:** Background `var(--clr-glass)` restrito com `backdrop-filter: blur(40px)`. Borda e brilho `1px solid rgba(255,255,255,0.08)`. Bordas iluminadas na parte superior interior estilo Neumorphism translúcido.

### Animações
- Revelação das metades com expansão no Clip-Path na carga da seção (`clip-path: inset(0 0 100% 0)` fluindo para `inset(0)` via scroll com Cubic bezier `(0.77, 0, 0.175, 1)` durando 1.2 segundos).

### Interatividade
- Botões de mapa ou WhatsApp embutidos em cada Card recebem efeito Hover Baseado em Gradiente que passa pelo elemento de brilho.
- Cursor sobre a "metade" da cor fará o glow background centralizado seguir sutilmente o Mouse Parallax (transform translation amaciado calc).

### Responsividade
- **Tablet/Mobile (abaixo 1024px):** O `Split Vertical` fura e se torna Flex Column (`flex-direction: column`). Cada "Metade" preenche a largura por 100% do Mobile em alturas automáticas com padding de `80px 20px`. O clip object vai perder transição e entrarei com clássicos `fade-up`.

---

## Seção 6: Final CTA

### Arquétipo e Constraints
- **Arquétipo:** Spotlight Center (Foco absoluto, centralizado cirurgicamente com espaço vazio excessivo nos entornos).
- **Constraints:** Text Highlight (Gradient brilhante no texto), Pulse Action Glow no Hover. Botões com efeito Glassmorphism Hover Reveal.
- **Justificativa:** É a conclusão da página. Sem imagens de produtos, sem listas, com o foco exclusivo e limpo dizendo ao usuário apenas uma coisa: chame-nos no WhatsApp.

### Conteúdo
- **Título:** Precisa de um conserto ou quer garantir o celular novo hoje mesmo?
- **Texto:** Escolha a loja mais perto de você e chame a nossa equipe no WhatsApp agora. É rápido, prático e estamos prontos para te atender!
- **Botões:** WhatsApp Santa Rosa / WhatsApp Santo Cristo

### Layout
- **Box Container:** Centro absoluto na tela. `min-height: 70vh`, `display: flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`, `text-align: center`, Max width textual bloqueado em `800px`. `padding: 120px 24px`.
- **Botões Grupo:** Flexbox row, center justified, `gap: 24px`. `margin-top: 48px`.

### Tipografia
- **Headline (H2):** Plus Jakarta Sans gigante. `clamp(3rem, 6vw, 4.5rem)`. `line-height: 1.1`. `letter-spacing: -0.03em`. Parte textual "celular novo hoje mesmo" realçada com gradiente texto: `background: linear-gradient(135deg, #FF6B1A, #ff590a); -webkit-background-clip: text; -webkit-text-fill-color: transparent`.
- **Sub-texto:** Montserrat `clamp(1.125rem, 1.5vw, 1.25rem)`. `color: #a1a1aa`. `margin-top: 24px`. Max width 600px.

### Cores
- **Background CTA Area:** Radial glow center do próprio `#080808` escavando para uma borda morta de preto escuro sem iluminação. O background será extremamente calmo com `rgba(255, 89, 10, 0.05)` pulando no radial center do div master.

### Interação e Botões
- CTA Botões criados do zero para fechamento. 
- Formato pílula completa `border-radius: 100px`. Padding: `20px 48px`. Fonte grossa 600px 16px.
- **Botão Primário (Santa Rosa):** Fundo Laranja `#ff590a`. Texto `#ffffff`. Box-shadow fixo brando de `0 10px 30px rgba(255, 89, 10, 0.3)`. Hover: escala button +1.03x e intensidade de shadow vai para 40px no y axis.
- **Botão Secundário (Santo Cristo):** Border `2px solid #ff590a` em fundo dark transparente. Texto `#ff590a`. Hover com transition Background Sweep Colorize: preencher a cápsula inteira em 300ms de Laranja e texto muda para `#ffffff`.
- Nenhum botão deve tremer durante o sweep.

---

### Notas Finais para o Implementador

O arquivo acima traz regras exatas prontas para desenvolvimento com `/desenvolver`. Nenhuma variável mágica foi criada, as animações e estilos são todos factíveis em HTML estrutural com classes semânticas. As interações pesadas devem rodar fluidamente utilizando apenas CSS Transitions Modernas e Keyframes (e `IntersectionObserver` básico caso aplique JS aos scroll fade triggers). A animação parallax da Assistência Técnica pode ser substituída por transformCSS flutuantes amarrados em `@keyframes` caso a performance móvel exigir fallback.
