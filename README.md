# Solpat/Solhub - Presentación Interactiva

Presentación interactiva para el pitch de Solpat/Solhub, una startup de IA para laboratorios patológicos.

## 🚀 Características

- **Presentación interactiva** con navegación avanzada
- **Participación en tiempo real** de la audiencia
- **Panel del presentador** con notas y controles
- **Demo del producto** Solhub Platform
- **Responsive design** optimizado para todos los dispositivos

## 🛠️ Stack Tecnológico

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- **Framer Motion** para animaciones
- **Recharts** para gráficos
- **Socket.IO** para interactividad en tiempo real
- **next-themes** para modo claro/oscuro

## 📁 Estructura del Proyecto

```
├── app/
│   ├── page.tsx                 # Página principal
│   ├── slides/                  # Presentación principal
│   ├── presentador/             # Panel del presentador
│   ├── audiencia/[codigo]/      # Vista de la audiencia
│   ├── demo/                    # Demo del producto
│   └── legal/                   # Avisos legales
├── components/
│   ├── Slide.tsx               # Componentes de slides
│   ├── DeckControls.tsx        # Controles de navegación
│   └── PanelInteractividad.tsx # Panel de interactividad
├── content/
│   └── slides/                 # Contenido MDX de slides
├── lib/
│   ├── ai.ts                   # Utilidades de IA
│   ├── socket.ts               # Cliente Socket.IO
│   └── utils.ts                # Utilidades generales
└── hooks/
    └── useLiveSession.ts       # Hook para sesiones en vivo
```

## 🎯 Rutas Principales

- `/` - Portada con opciones de inicio
- `/slides` - Presentación principal con interactividad
- `/presentador` - Panel de control para el presentador
- `/audiencia/[codigo]` - Vista para participantes
- `/demo` - Demo interactiva de Solhub Platform
- `/legal` - Avisos legales y privacidad

## 🎮 Controles de Navegación

### Teclado
- `←/→` - Navegar entre slides
- `Home/End` - Ir al primer/último slide
- `F` - Pantalla completa
- `Esc` - Salir de pantalla completa

### Interfaz
- Barra de progreso superior
- Mini-mapa de secciones
- Controles de navegación inferiores
- Panel lateral de interactividad

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local`:

```env
# URL de la demo (opcional)
DEMO_URL=

# Habilitar PWA (opcional)
ENABLE_PWA=false

# Habilitar analytics (opcional)
ENABLE_ANALYTICS=false

# Redis para persistencia (opcional)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# URL del sitio para compartir
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Generar slides desde PDFs (opcional)
npm run generate:slides

# Build para producción
npm run build

# Iniciar en producción
npm start
```

## 📊 Contenido de la Presentación

### 14 Slides Principales

1. **Portada** - Título y eslogan
2. **Resumen Ejecutivo** - Qué hacemos y por qué ahora
3. **Problema** - Crisis en laboratorios patológicos
4. **Solución** - Solpat IA personalizada
5. **Producto** - Solhub Platform módulos
6. **Arquitectura** - Stack técnico robusto
7. **Mercado** - Oportunidad de $450M en LATAM
8. **Competencia** - Ventajas competitivas únicas
9. **Modelo de Negocio** - SaaS escalable
10. **Tracción** - KPIs y piloto con Conspat
11. **Roadmap** - Hitos Q1-Q4 2024
12. **Riesgos** - Identificación y mitigaciones
13. **Equipo** - Experiencia complementaria
14. **CTA** - Llamada a la acción para inversión

## 🎪 Interactividad

### Para la Audiencia
- **Preguntas** con sistema de votos
- **Encuestas** en tiempo real
- **Reacciones** con emojis
- **Votación** para rutas de demo

### Para el Presentador
- **Timer** de 15 minutos con alertas
- **Notas** contextuales por slide
- **Moderación** de preguntas
- **Estadísticas** de participación en vivo

## 🎨 Diseño y UX

- **Diseño responsive** para todos los dispositivos
- **Animaciones sutiles** con Framer Motion
- **Tipografía jerárquica** para legibilidad
- **Contraste AA** para accesibilidad
- **Navegación por teclado** completa
- **Modo claro/oscuro** con next-themes

## 🔒 Seguridad y Privacidad

- **Rate limiting** en APIs de interacción
- **Validación** de entrada de datos
- **Sesiones efímeras** sin persistencia sensible
- **HTTPS** obligatorio en producción
- **Aviso de privacidad** completo

## 📱 PWA (Opcional)

Si `ENABLE_PWA=true`:
- **Instalable** en dispositivos móviles
- **Funciona offline** para casos críticos
- **Caché inteligente** de assets
- **Actualizaciones** automáticas

## 🤖 IA y Automatización

### Generación de Contenido
- Script `generate:slides` para procesar PDFs
- Variaciones A/B de copy automáticas
- Generación de gráficos desde datos
- Resúmenes automáticos con IA

### Funciones Simuladas
- `lib/ai.ts` con utilidades de procesamiento
- Integración preparada para APIs reales
- Estructura para fine-tuning de modelos

## 📈 Analytics (Opcional)

Si `ENABLE_ANALYTICS=true`:
- Métricas de participación
- Tiempo en cada slide
- Interacciones de la audiencia
- Conversión de preguntas

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Deploy automático desde Git
vercel --prod
```

### Otras Plataformas
- Compatible con cualquier hosting de Node.js
- Build estático con `next export` si es necesario
- Docker support disponible

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial. Todos los derechos reservados.

## 📞 Contacto

Para preguntas sobre el proyecto:
- **Email**: dev@solpat.com
- **Slack**: #solpat-dev
- **Docs**: [Documentación interna]

---

**Solpat/Solhub** - Transformando la patología con IA personalizada 🧬🤖