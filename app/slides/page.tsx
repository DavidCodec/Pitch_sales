'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DeckControls } from '@/components/DeckControls'
import { PanelInteractividad } from '@/components/PanelInteractividad'
import { Slide, TituloSlide, ContenidoSlide, ListaSlide } from '@/components/Slide'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { generarCodigoSesion } from '@/lib/utils'
import { generarDatosGrafico } from '@/lib/ai'

const slides = [
  // Slide 1: Portada
  {
    id: 'portada',
    component: () => (
      <Slide variante="titulo" fondo="from-blue-600 to-purple-700">
        <TituloSlide 
          subtitulo="Inteligencia Artificial Personalizada para Laboratorios Patológicos"
          className="text-white"
        >
          Solpat/Solhub
        </TituloSlide>
        <div className="mt-8 text-white/90 text-xl">
          Transformando diagnósticos médicos con precisión y velocidad
        </div>
        <div className="mt-12 text-white/70 text-lg italic">
          La revolución de la patología digital comienza aquí
        </div>
      </Slide>
    )
  },
  
  // Slide 2: Resumen Ejecutivo
  {
    id: 'resumen',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Resumen Ejecutivo">
          <div className="text-lg space-y-4">
            <h3 className="text-2xl font-semibold text-primary mb-4">¿Qué hacemos y por qué ahora?</h3>
            <ListaSlide items={[
              "Asistentes de IA personalizados para patólogos que aprenden de cada profesional",
              "Reducción del 40% en errores diagnósticos críticos",
              "Aceleración del 60% en tiempos de reporte",
              "Validación con Conspat (Colegio Nacional de Patólogos)",
              "Mercado objetivo: $450M en Latinoamérica, creciendo 12% anual",
              "Momento perfecto: Crisis de capacidad + madurez de IA generativa"
            ]} />
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 3: Problema
  {
    id: 'problema',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="El Problema Crítico">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  📊 Errores Diagnósticos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-red-600">15-20%</div>
                  <div className="text-sm">de casos contienen errores</div>
                  <div className="text-2xl font-bold text-red-600">$15K-50K</div>
                  <div className="text-sm">costo por error crítico</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  ⏱️ Tiempos Excesivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-orange-600">5-7 días</div>
                  <div className="text-sm">tiempo promedio actual</div>
                  <div className="text-2xl font-bold text-orange-600">2-3 días</div>
                  <div className="text-sm">estándar internacional</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-700">
                  👨‍⚕️ Escasez Crítica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-yellow-600">1:50,000</div>
                  <div className="text-sm">ratio actual patólogo/pacientes</div>
                  <div className="text-2xl font-bold text-yellow-600">1:10,000</div>
                  <div className="text-sm">ratio recomendado OMS</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 4: Solución
  {
    id: 'solucion',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Nuestra Solución: Solpat">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalización Avanzada</h3>
                  <p className="text-gray-600">Aprende patrones únicos de cada profesional y se adapta a metodologías específicas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">RAG Médico Especializado</h3>
                  <p className="text-gray-600">Base de conocimiento actualizada con retrieval contextual de literatura médica</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Robustez Anti-Alucinaciones</h3>
                  <p className="text-gray-600">90% reducción en respuestas incorrectas con validación cruzada</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Casos de Uso Principales</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">✓</Badge>
                  <span>Análisis preliminar de biopsias</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">✓</Badge>
                  <span>Sugerencias de diagnósticos diferenciales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">✓</Badge>
                  <span>Detección de patrones anómalos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">✓</Badge>
                  <span>Generación automática de reportes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">✓</Badge>
                  <span>Consulta de literatura contextual</span>
                </li>
              </ul>
            </div>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 5: Producto
  {
    id: 'producto',
    component: () => (
      <Slide variante="visual">
        <ContenidoSlide titulo="Producto: Solhub Platform">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '🏥', titulo: 'Módulo Clínico', desc: 'Gestión completa de casos y pacientes' },
              { icon: '📊', titulo: 'Módulo de Análisis', desc: 'Dashboard inteligente con KPIs' },
              { icon: '👨‍⚕️', titulo: 'Módulo de Médicos', desc: 'Perfiles y métricas de desempeño' },
              { icon: '👥', titulo: 'Módulo de Usuarios', desc: 'Gestión de roles y permisos' },
              { icon: '⚙️', titulo: 'Módulo de Ajustes', desc: 'Configuración del asistente IA' }
            ].map((modulo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{modulo.icon}</div>
                  <CardTitle className="text-lg">{modulo.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{modulo.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-purple-900">🗳️ Votación de la Audiencia</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-700 mb-4">¿Qué módulo quieren ver en la demo?</p>
              <p className="text-sm text-purple-600">La audiencia puede votar en tiempo real</p>
            </CardContent>
          </Card>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 6: Arquitectura
  {
    id: 'arquitectura',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Arquitectura Técnica">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">📱 PWA (Progressive Web App)</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Funciona offline para casos críticos</li>
                  <li>• Instalable en cualquier dispositivo</li>
                  <li>• Actualizaciones automáticas</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">🤖 LLM Personalizado</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• GPT-4 fine-tuned con datos médicos</li>
                  <li>• Entrenamiento continuo con feedback</li>
                  <li>• Especialización por subespecialidades</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">🗄️ Base de Conocimiento</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• 50,000+ casos anonimizados</li>
                  <li>• Literatura actualizada semanalmente</li>
                  <li>• Búsqueda semántica avanzada</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">🧠 Sistema de Memoria Dual</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Corto plazo: contexto de sesión</li>
                  <li>• Largo plazo: perfil del patólogo</li>
                  <li>• Aprendizaje incremental</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">🔒 Control de Flujo</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Validación multicapa de respuestas</li>
                  <li>• Detección de incertidumbre</li>
                  <li>• Cumplimiento HIPAA/GDPR</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-700">99.8%</div>
                <div className="text-sm text-gray-600">Uptime garantizado</div>
              </div>
            </div>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 7: Mercado
  {
    id: 'mercado',
    component: () => {
      const datosMercado = generarDatosGrafico('mercado')
      const COLORS = ['#8884d8', '#82ca9d', '#ffc658']
      
      return (
        <Slide>
          <ContenidoSlide titulo="Mercado y Oportunidad">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Oportunidad Masiva</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-medium">TAM (Global)</span>
                    <span className="text-xl font-bold text-blue-600">$2.5B</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="font-medium">SAM (LATAM)</span>
                    <span className="text-xl font-bold text-green-600">$450M</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                    <span className="font-medium">SOM (Inicial)</span>
                    <span className="text-xl font-bold text-yellow-600">$45M</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Adopción de IA en Salud</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>2023:</span>
                      <span className="font-medium">15% hospitales</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2024:</span>
                      <span className="font-medium">28% (proyección)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2027:</span>
                      <span className="font-medium text-purple-600">65% (McKinsey)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Distribución del Mercado</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={datosMercado}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ nombre, valor }) => `${nombre}: $${valor}M`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="valor"
                    >
                      {datosMercado.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value}M`, 'Valor']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ContenidoSlide>
        </Slide>
      )
    }
  },

  // Slide 8: Competencia
  {
    id: 'competencia',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Ventaja Competitiva">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Nuestras Ventajas Únicas</h3>
              <div className="space-y-4">
                {[
                  { icon: '🎯', titulo: 'Personalización por Usuario', desc: 'Única IA que aprende de cada patólogo individual' },
                  { icon: '🌎', titulo: 'Enfoque LATAM', desc: 'Conocimiento profundo del mercado local' },
                  { icon: '🏆', titulo: 'Validación Conspat', desc: 'Respaldo del colegio profesional líder' },
                  { icon: '🛡️', titulo: 'Anti-Alucinaciones', desc: '90% reducción en errores críticos' },
                  { icon: '⚡', titulo: 'Implementación Rápida', desc: '2 semanas vs 6-12 meses competidores' }
                ].map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{ventaja.icon}</div>
                    <div>
                      <h4 className="font-semibold">{ventaja.titulo}</h4>
                      <p className="text-sm text-gray-600">{ventaja.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Competidores Principales</h3>
              <div className="space-y-3">
                <Card className="border-red-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">PathAI (USA)</span>
                      <Badge variant="destructive">$255M</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Enfoque oncología, sin personalización</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Paige (USA)</span>
                      <Badge variant="secondary">$70M</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Diagnóstico por imagen, mercado USA</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Mindpeak (DE)</span>
                      <Badge variant="outline">$7M</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Análisis tejidos, Europa únicamente</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Nuestro Posicionamiento</h4>
                <p className="text-sm text-green-700">
                  Únicos en LATAM con IA personalizada y validación médica local. 
                  Implementación 5x más rápida que competidores globales.
                </p>
              </div>
            </div>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 9: Modelo de Negocio
  {
    id: 'negocio',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Modelo de Negocio">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">💰 Setup Inicial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">$25,000</div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Implementación completa</li>
                  <li>• Migración de datos</li>
                  <li>• Entrenamiento equipo</li>
                  <li>• Personalización IA</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">📅 SaaS Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">$8K-15K</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Basado en # patólogos</li>
                  <li>• Actualizaciones automáticas</li>
                  <li>• Soporte 24/7</li>
                  <li>• Backup y seguridad</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">🚀 Upsells</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">$2K+</div>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Módulos especializados</li>
                  <li>• Integraciones custom</li>
                  <li>• Consultoría avanzada</li>
                  <li>• Entrenamiento adicional</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Métricas Clave</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">$180K</div>
                  <div className="text-sm text-gray-600">Ticket promedio anual</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">8:1</div>
                  <div className="text-sm text-gray-600">LTV/CAC ratio</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">85%</div>
                  <div className="text-sm text-gray-600">Gross margin</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">&lt;5%</div>
                  <div className="text-sm text-gray-600">Churn anual</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Canales de Distribución</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span>Venta Directa</span>
                  <Badge>70%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span>Partners Tecnológicos</span>
                  <Badge>20%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                  <span>Referidos Médicos</span>
                  <Badge>10%</Badge>
                </div>
              </div>
            </div>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 10: Tracción
  {
    id: 'traccion',
    component: () => {
      const datosTraccion = generarDatosGrafico('traccion')
      
      return (
        <Slide>
          <ContenidoSlide titulo="Tracción y KPIs">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Piloto con Conspat (3 meses)</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">15</div>
                    <div className="text-sm text-green-700">Patólogos participantes</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">450</div>
                    <div className="text-sm text-blue-700">Casos procesados</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">40%</div>
                    <div className="text-sm text-purple-700">Reducción tiempo</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-orange-700">Satisfacción usuarios</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Pipeline Comercial</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Laboratorios en lista de espera</span>
                    <Badge>3 LOI firmadas</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Pipeline Q1 2024</span>
                    <Badge variant="outline">$540K USD</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Demos programadas</span>
                    <Badge>8 en enero</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Crecimiento de Usuarios</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={datosTraccion}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="usuarios" fill="#8884d8" name="Usuarios" />
                    <Bar dataKey="casos" fill="#82ca9d" name="Casos" />
                  </BarChart>
                </ResponsiveContainer>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Objetivos 12 Meses</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Clientes activos:</span>
                      <span className="font-medium">10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ARR (Annual Recurring Revenue):</span>
                      <span className="font-medium">$1.8M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Patólogos en plataforma:</span>
                      <span className="font-medium">50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expansión geográfica:</span>
                      <span className="font-medium">Colombia y Chile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContenidoSlide>
        </Slide>
      )
    }
  },

  // Slide 11: Roadmap
  {
    id: 'roadmap',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Roadmap Estratégico">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Q1 2024</CardTitle>
                <div className="text-sm text-blue-700">Consolidación México</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• 3 clientes piloto cerrados</li>
                  <li>• Versión 2.0 con mejoras UX</li>
                  <li>• Certificación ISO 27001</li>
                  <li>• Partnership Microsoft Health</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Q2 2024</CardTitle>
                <div className="text-sm text-green-700">Expansión Técnica</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• 5 integraciones LIMS</li>
                  <li>• Módulo telemedicina</li>
                  <li>• API pública</li>
                  <li>• Federated learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Q3 2024</CardTitle>
                <div className="text-sm text-purple-700">Expansión Geográfica</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Entrada Colombia (2 clientes)</li>
                  <li>• Entrada Chile (1 cliente)</li>
                  <li>• Oficina Bogotá</li>
                  <li>• Partnerships universitarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900">Q4 2024</CardTitle>
                <div className="text-sm text-orange-700">Escalamiento</div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• 10 clientes activos total</li>
                  <li>• Marketplace módulos</li>
                  <li>• Serie A ($5M objetivo)</li>
                  <li>• Equipo 25 personas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-900">🏆 2025 - Liderazgo Regional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">Argentina + Brasil</div>
                    <div className="text-sm text-yellow-700">Nuevos mercados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">50</div>
                    <div className="text-sm text-yellow-700">Clientes activos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">$10M</div>
                    <div className="text-sm text-yellow-700">ARR objetivo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">IPO 2027</div>
                    <div className="text-sm text-yellow-700">Preparación</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 12: Riesgos
  {
    id: 'riesgos',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Riesgos y Mitigaciones">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                riesgo: 'Compliance y Regulaciones',
                descripcion: 'Cambios regulatorios médicos',
                mitigacion: 'Equipo legal especializado, certificaciones preventivas',
                color: 'red'
              },
              {
                riesgo: 'Seguridad de Datos',
                descripcion: 'Brechas con datos médicos sensibles',
                mitigacion: 'Arquitectura zero-trust, seguro cibernético $5M',
                color: 'orange'
              },
              {
                riesgo: 'Adopción del Mercado',
                descripcion: 'Resistencia al cambio de patólogos',
                mitigacion: 'Change management, ROI garantizado, testimoniales',
                color: 'yellow'
              },
              {
                riesgo: 'Competencia de Gigantes',
                descripcion: 'Google/Microsoft/Amazon entran al mercado',
                mitigacion: 'Especialización profunda, moats de datos locales',
                color: 'blue'
              },
              {
                riesgo: 'Dependencia de Talento',
                descripcion: 'Escasez de ingenieros ML especializados',
                mitigacion: 'Equity generoso, cultura fuerte, remote-first',
                color: 'purple'
              },
              {
                riesgo: 'Escalabilidad Técnica',
                descripcion: 'Costos infraestructura vs ingresos',
                mitigacion: 'Cloud-native, edge computing, optimización',
                color: 'green'
              }
            ].map((item, index) => (
              <Card key={index} className={`border-${item.color}-200 bg-${item.color}-50`}>
                <CardHeader>
                  <CardTitle className={`text-${item.color}-900 text-lg`}>
                    ⚖️ {item.riesgo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-sm">Riesgo:</span>
                      <p className={`text-sm text-${item.color}-700`}>{item.descripcion}</p>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Mitigación:</span>
                      <p className={`text-sm text-${item.color}-700`}>{item.mitigacion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card className="bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900">🛡️ Plan de Contingencia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-700">18 meses</div>
                    <div className="text-sm text-gray-600">Reserva de efectivo</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-700">Partnerships</div>
                    <div className="text-sm text-gray-600">De respaldo establecidos</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-700">Pivots</div>
                    <div className="text-sm text-gray-600">Identificados y validados</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 13: Equipo
  {
    id: 'equipo',
    component: () => (
      <Slide>
        <ContenidoSlide titulo="Nuestro Equipo">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    👨‍💼 CEO - [Nombre]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>10 años</strong> en healthtech y transformación digital</p>
                    <p>Ex-Director Innovación [Hospital/Red Salud]</p>
                    <p>MBA Stanford, Ingeniero Sistemas</p>
                    <p>Implementó IA en 15 hospitales</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center">
                    👨‍💻 CTO - [Nombre]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-green-700 space-y-1">
                    <p><strong>12 años</strong> ML/AI, especialista NLP médico</p>
                    <p>Ex-Senior Engineer Google Health</p>
                    <p>PhD Computer Science, MIT</p>
                    <p>15 papers en conferences top-tier</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center">
                    👨‍⚕️ Chief Medical Officer - [Nombre]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-purple-700 space-y-1">
                    <p><strong>Patólogo certificado</strong>, 20 años experiencia</p>
                    <p>Ex-Presidente Conspat (2018-2022)</p>
                    <p>Profesor titular Universidad Nacional</p>
                    <p>Red de 500+ patólogos LATAM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center">
                    💼 VP Sales - [Nombre]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-orange-700 space-y-1">
                    <p><strong>8 años</strong> vendiendo software médico LATAM</p>
                    <p>Ex-Regional Manager Epic Systems</p>
                    <p>$50M+ en deals enterprise cerrados</p>
                    <p>Network 200+ decision makers salud</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Card className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">🎯 Advisors Estratégicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-gray-700">Dr. [Nombre]</div>
                    <div className="text-sm text-gray-600">Ex-CEO [Empresa Médica]</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-700">[Nombre]</div>
                    <div className="text-sm text-gray-600">Partner [VC de Salud]</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-700">[Nombre]</div>
                    <div className="text-sm text-gray-600">Ex-VP Engineering [Unicornio HealthTech]</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContenidoSlide>
      </Slide>
    )
  },

  // Slide 14: CTA
  {
    id: 'cta',
    component: () => (
      <Slide variante="titulo" fondo="from-purple-600 to-blue-700">
        <div className="text-center text-white space-y-8">
          <TituloSlide className="text-white">
            ¡Únete a la Revolución!
          </TituloSlide>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto">
            Transformemos la patología en LATAM con IA personalizada
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white">💰 Serie Seed: $2M USD</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-2">
                <p>• Valoración: $8M pre-money</p>
                <p>• Runway: 18 meses hasta Serie A</p>
                <p>• Uso: 60% equipo, 25% ventas, 15% infraestructura</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🎯 Lo que Ofrecemos</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-2">
                <p>• Mercado masivo con timing perfecto</p>
                <p>• Ventaja competitiva defendible</p>
                <p>• Equipo probado con track record</p>
                <p>• Impacto social significativo</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">📅 Próximos Pasos</h3>
            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto text-sm">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">1. Reunión 1:1</div>
                <div className="text-white/80">Deep dive técnico</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">2. Data Room</div>
                <div className="text-white/80">Acceso completo</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">3. Referencias</div>
                <div className="text-white/80">Clientes y advisors</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">4. Demo</div>
                <div className="text-white/80">Personalizada</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">5. Términos</div>
                <div className="text-white/80">Inversión detallados</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-xl italic">
            "Juntos podemos transformar la patología en LATAM y salvar vidas con IA"
          </div>

          <Card className="bg-white/10 backdrop-blur border-white/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">🗳️ Pregunta Final para la Audiencia</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="text-lg">¿Qué aspecto les interesa más profundizar?</p>
              <p className="text-sm mt-2">La audiencia puede votar en tiempo real</p>
            </CardContent>
          </Card>
        </div>
      </Slide>
    )
  }
]

export default function SlidesPage() {
  const [slideActual, setSlideActual] = useState(0)
  const [mostrarInteractividad, setMostrarInteractividad] = useState(false)
  const [codigoSesion] = useState(() => generarCodigoSesion())

  const totalSlides = slides.length

  const cambiarSlide = (nuevoSlide: number) => {
    if (nuevoSlide >= 0 && nuevoSlide < totalSlides) {
      setSlideActual(nuevoSlide)
    }
  }

  const toggleInteractividad = () => {
    setMostrarInteractividad(!mostrarInteractividad)
  }

  return (
    <div className="min-h-screen bg-background">
      <DeckControls
        slideActual={slideActual}
        totalSlides={totalSlides}
        onCambiarSlide={cambiarSlide}
        onToggleInteractividad={toggleInteractividad}
        participantes={0}
      />

      <div className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div key={slideActual}>
            {slides[slideActual].component()}
          </motion.div>
        </AnimatePresence>
      </div>

      <PanelInteractividad
        codigoSesion={codigoSesion}
        visible={mostrarInteractividad}
        onCerrar={() => setMostrarInteractividad(false)}
      />
    </div>
  )
}