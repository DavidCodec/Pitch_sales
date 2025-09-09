// Funciones utilitarias para procesamiento de contenido con IA
// Simuladas para demostración - en producción conectarían con APIs reales

export interface ResumenPDF {
  titulo: string
  seccion: string
  bullets: string[]
  fuente: string
}

export interface VariacionCopy {
  original: string
  variaciones: string[]
}

// Simular resumen de PDFs
export function resumirPDF(nombreArchivo: string): ResumenPDF[] {
  // En producción, esto procesaría PDFs reales
  const resumenes: ResumenPDF[] = [
    {
      titulo: "Problema en Laboratorios Patológicos",
      seccion: "Análisis de Mercado",
      bullets: [
        "Errores de diagnóstico en 15-20% de casos",
        "Tiempo promedio de reporte: 5-7 días",
        "Costos operativos elevados por reprocesos",
        "Falta de estandarización en procesos"
      ],
      fuente: nombreArchivo
    },
    {
      titulo: "Oportunidad de Mercado",
      seccion: "Tamaño de Mercado",
      bullets: [
        "TAM: $2.5B mercado global de patología digital",
        "SAM: $450M mercado latinoamericano",
        "SOM: $45M mercado objetivo inicial",
        "Crecimiento anual: 12-15%"
      ],
      fuente: nombreArchivo
    }
  ]
  
  return resumenes
}

// Generar variaciones de copy
export function generarVariacionesCopy(textoOriginal: string): VariacionCopy {
  // En producción, usaría LLM para generar variaciones
  const variaciones = [
    textoOriginal,
    textoOriginal.replace(/\b\w+/g, (word) => word + " optimizado"),
    "Versión alternativa: " + textoOriginal
  ]
  
  return {
    original: textoOriginal,
    variaciones
  }
}

// Generar datos para gráficos
export function generarDatosGrafico(tipo: 'mercado' | 'traccion' | 'financiero') {
  switch (tipo) {
    case 'mercado':
      return [
        { nombre: 'TAM', valor: 2500, color: '#8884d8' },
        { nombre: 'SAM', valor: 450, color: '#82ca9d' },
        { nombre: 'SOM', valor: 45, color: '#ffc658' }
      ]
    case 'traccion':
      return [
        { mes: 'Ene', usuarios: 50, casos: 120 },
        { mes: 'Feb', usuarios: 85, casos: 200 },
        { mes: 'Mar', usuarios: 140, casos: 350 },
        { mes: 'Abr', usuarios: 220, casos: 580 }
      ]
    case 'financiero':
      return [
        { año: '2024', ingresos: 50000, gastos: 80000 },
        { año: '2025', ingresos: 250000, gastos: 180000 },
        { año: '2026', ingresos: 750000, gastos: 400000 }
      ]
    default:
      return []
  }
}