#!/usr/bin/env node

// Script para generar slides desde PDFs usando IA
// Este es un script de demostración - en producción se conectaría con APIs reales

const fs = require('fs')
const path = require('path')

// Configuración
const CONTENT_DIR = path.join(process.cwd(), 'content')
const SOURCES_DIR = path.join(CONTENT_DIR, 'sources')
const SLIDES_DIR = path.join(CONTENT_DIR, 'slides')

// Crear directorios si no existen
if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true })
}
if (!fs.existsSync(SOURCES_DIR)) {
  fs.mkdirSync(SOURCES_DIR, { recursive: true })
}
if (!fs.existsSync(SLIDES_DIR)) {
  fs.mkdirSync(SLIDES_DIR, { recursive: true })
}

// Función simulada para procesar PDFs
function procesarPDFs() {
  console.log('🔍 Buscando PDFs en', SOURCES_DIR)
  
  // Verificar si existen PDFs
  const archivos = fs.readdirSync(SOURCES_DIR).filter(file => file.endsWith('.pdf'))
  
  if (archivos.length === 0) {
    console.log('⚠️  No se encontraron PDFs en /content/sources/')
    console.log('📝 Generando slides con contenido de demostración...')
    return generarSlidesDemo()
  }

  console.log(`📄 Encontrados ${archivos.length} PDFs:`)
  archivos.forEach(archivo => console.log(`   - ${archivo}`))

  // Simular procesamiento de PDFs
  console.log('🤖 Procesando PDFs con IA...')
  
  // En producción, aquí se usaría una API real para extraer contenido
  const contenidoExtraido = archivos.map(archivo => ({
    archivo,
    contenido: `Contenido extraído de ${archivo}`,
    secciones: [
      'Resumen ejecutivo',
      'Análisis de mercado', 
      'Propuesta de valor',
      'Modelo de negocio',
      'Proyecciones financieras'
    ]
  }))

  return generarSlidesDesdeContenido(contenidoExtraido)
}

function generarSlidesDemo() {
  console.log('✨ Generando slides de demostración...')
  
  // Los slides ya están creados en el código principal
  // Este script serviría para regenerarlos desde PDFs reales
  
  console.log('✅ Slides de demostración ya disponibles en /app/slides/page.tsx')
  console.log('💡 Para usar PDFs reales:')
  console.log('   1. Coloca los PDFs en /content/sources/')
  console.log('   2. Ejecuta: npm run generate:slides')
  console.log('   3. Los slides se generarán automáticamente')
  
  return true
}

function generarSlidesDesdeContenido(contenido) {
  console.log('📝 Generando slides MDX...')
  
  contenido.forEach((pdf, index) => {
    const nombreSlide = `slide-${index + 1}-${pdf.archivo.replace('.pdf', '')}.mdx`
    const rutaSlide = path.join(SLIDES_DIR, nombreSlide)
    
    const contenidoMDX = `---
titulo: "Slide generado desde ${pdf.archivo}"
tipo: "contenido"
fuente: "${pdf.archivo}"
notas: |
  Notas del presentador generadas automáticamente desde ${pdf.archivo}
  
  Puntos clave:
  ${pdf.secciones.map(seccion => `- ${seccion}`).join('\n  ')}
---

# Contenido desde ${pdf.archivo}

${pdf.secciones.map(seccion => `## ${seccion}\n\nContenido de la sección ${seccion}...\n`).join('\n')}

---

*Generado automáticamente desde PDF el ${new Date().toLocaleDateString('es-ES')}*
`

    fs.writeFileSync(rutaSlide, contenidoMDX)
    console.log(`   ✅ Generado: ${nombreSlide}`)
  })
  
  console.log('🎉 Slides generados exitosamente!')
  return true
}

// Función principal
function main() {
  console.log('🚀 Iniciando generación de slides...')
  console.log('=' .repeat(50))
  
  try {
    procesarPDFs()
    console.log('=' .repeat(50))
    console.log('✅ Proceso completado exitosamente!')
  } catch (error) {
    console.error('❌ Error durante la generación:', error.message)
    process.exit(1)
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main()
}

module.exports = { procesarPDFs, generarSlidesDesdeContenido }