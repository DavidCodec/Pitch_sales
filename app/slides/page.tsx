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
				<TituloSlide subtitulo="Sistema Administrativo Web para Laboratorios y Clínicas" className="text-white">
					Solware
				</TituloSlide>
				<div className="mt-8 text-white/90 text-xl">
					Centralizando gestión de pacientes, casos, pagos y reportes en una sola plataforma
				</div>
				<div className="mt-12 text-white/70 text-lg italic">Eugenio Andreone y Jesús Freites - Caracas, 2025</div>
			</Slide>
		),
	},

	// Slide 2: Resumen Ejecutivo
	{
		id: 'resumen',
		component: () => (
			<Slide>
				<ContenidoSlide titulo="Resumen Ejecutivo">
					<div className="text-lg space-y-4">
						<h3 className="text-2xl font-semibold text-primary mb-4">¿Qué hacemos y por qué ahora?</h3>
						<ListaSlide
							items={[
								'Solware desarrolla SolHub: sistema administrativo web para laboratorios y clínicas',
								'Centraliza gestión de pacientes, casos, pagos, reportes y analítica en una plataforma',
								'Reducción del 75% en tiempo de tareas administrativas (2 min → 30 seg)',
								'MVP validado en Laboratorios Conspat con resultados reales',
								'Mercado objetivo: 1.700+ laboratorios y clínicas en Venezuela',
								'Diferencial: hiper personalización + módulo IA opcional (SolIA) con datos locales',
							]}
						/>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 3: Problema
	{
		id: 'problema',
		component: () => (
			<Slide>
				<ContenidoSlide titulo="Situación Actual: Laboratorios en Venezuela">
					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-red-200 bg-red-50">
							<CardHeader>
								<CardTitle className="flex items-center text-red-700">📊 Sistemas Obsoletos</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="text-2xl font-bold text-red-600">1.700+</div>
									<div className="text-sm">laboratorios y clínicas</div>
									<div className="text-2xl font-bold text-red-600">Excel/Manual</div>
									<div className="text-sm">gestión actual</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-orange-200 bg-orange-50">
							<CardHeader>
								<CardTitle className="flex items-center text-orange-700">⏱️ Demoras Críticas</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="text-2xl font-bold text-orange-600">12-15 min</div>
									<div className="text-sm">tiempo actual por caso</div>
									<div className="text-2xl font-bold text-orange-600">6-9 min</div>
									<div className="text-sm">tiempo con SolHub</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-yellow-200 bg-yellow-50">
							<CardHeader>
								<CardTitle className="flex items-center text-yellow-700">📈 Sin Indicadores</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="text-2xl font-bold text-yellow-600">0%</div>
									<div className="text-sm">indicadores en tiempo real</div>
									<div className="text-2xl font-bold text-yellow-600">Duplicación</div>
									<div className="text-sm">de tareas administrativas</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
						<h3 className="text-xl font-semibold text-red-900 mb-4">Problemas Identificados en 30+ Visitas de Campo</h3>
						<div className="grid md:grid-cols-2 gap-4 text-sm">
							<div>
								<p className="font-medium text-red-800">• Demoras en entrega de informes clínicos</p>
								<p className="font-medium text-red-800">• Duplicación de registros y tareas</p>
								<p className="font-medium text-red-800">• Ausencia de integración entre áreas</p>
							</div>
							<div>
								<p className="font-medium text-red-800">• Limitada capacidad de análisis</p>
								<p className="font-medium text-red-800">• Poca adaptabilidad a realidad local</p>
								<p className="font-medium text-red-800">• Falta de cumplimiento SENIAT</p>
							</div>
						</div>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 4: Solución
	{
		id: 'solucion',
		component: () => (
			<Slide>
				<ContenidoSlide titulo="Nuestra Solución: SolHub + SolIA">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-blue-600 font-bold">⚡</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Automatización de Procesos</h3>
									<p className="text-gray-600">
										Registro de pacientes, generación de reportes, cálculos automáticos y conversión de divisas
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-green-600 font-bold">📊</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Indicadores en Tiempo Real</h3>
									<p className="text-gray-600">
										Métricas de ingresos, productividad, casos pendientes y estudios más solicitados
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-purple-600 font-bold">🎯</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Hiper Personalización</h3>
									<p className="text-gray-600">Se adapta a los procesos del cliente y no al revés</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-orange-600 font-bold">🤖</span>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">Módulo IA (SolIA)</h3>
									<p className="text-gray-600">
										Entrenado con datos validados por Conspat, apoya redacción de informes bajo supervisión médica
									</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
							<h3 className="text-xl font-semibold mb-4">Innovaciones Clave</h3>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>Plantillas estandarizadas como propiedad intelectual</span>
								</li>
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>Módulo de tasa e impuestos (SENIAT)</span>
								</li>
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>Arquitectura híbrida (local + cloud)</span>
								</li>
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>IA segura y local sin retención de datos</span>
								</li>
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>Migración de datos desde sistemas existentes</span>
								</li>
								<li className="flex items-center space-x-2">
									<Badge variant="outline">✓</Badge>
									<span>Seguridad avanzada con control de permisos</span>
								</li>
							</ul>
						</div>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 5: Producto
	{
		id: 'producto',
		component: () => (
			<Slide variante="visual">
				<ContenidoSlide titulo="Producto: SolHub Platform">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{[
							{ icon: '👥', titulo: 'Gestión de Pacientes', desc: 'Registro, historial y seguimiento completo' },
							{ icon: '📋', titulo: 'Gestión de Casos', desc: 'Seguimiento de estudios y resultados' },
							{ icon: '💳', titulo: 'Gestión de Pagos', desc: 'Facturación, cobros y conversión de divisas' },
							{ icon: '📊', titulo: 'Reportes y Analítica', desc: 'Indicadores en tiempo real y dashboards' },
							{ icon: '🤖', titulo: 'Módulo IA (SolIA)', desc: 'Asistente para redacción de informes' },
							{ icon: '⚙️', titulo: 'Configuración', desc: 'Personalización y ajustes del sistema' },
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

					<div className="grid md:grid-cols-2 gap-6">
						<Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
							<CardHeader className="text-center">
								<CardTitle className="text-green-900">🎯 Caso de Éxito: Conspat</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-green-700 mb-4">MVP validado en entorno real</p>
								<p className="text-sm text-green-600">Resultados medibles y comprobables</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
							<CardHeader className="text-center">
								<CardTitle className="text-purple-900">🗳️ Votación de la Audiencia</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<p className="text-purple-700 mb-4">¿Qué módulo quieren ver en la demo?</p>
								<p className="text-sm text-purple-600">La audiencia puede votar en tiempo real</p>
							</CardContent>
						</Card>
					</div>
				</ContenidoSlide>
			</Slide>
		),
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
								<h3 className="font-semibold text-blue-900 mb-2">🌐 Sistema Web Moderno</h3>
								<ul className="text-sm text-blue-700 space-y-1">
									<li>• React y Next.js para frontend</li>
									<li>• TypeScript para type safety</li>
									<li>• Tailwind CSS para diseño responsive</li>
								</ul>
							</div>

							<div className="bg-green-50 p-4 rounded-lg">
								<h3 className="font-semibold text-green-900 mb-2">🤖 Módulo IA (SolIA)</h3>
								<ul className="text-sm text-green-700 space-y-1">
									<li>• IA orquestada sin retención de datos</li>
									<li>• APIs de terceros con anonimización</li>
									<li>• Entrenado con datos de Conspat</li>
								</ul>
							</div>

							<div className="bg-purple-50 p-4 rounded-lg">
								<h3 className="font-semibold text-purple-900 mb-2">🏗️ Arquitectura Híbrida</h3>
								<ul className="text-sm text-purple-700 space-y-1">
									<li>• Funcionamiento local en servidores del cliente</li>
									<li>• Respaldo 24/7 en la nube</li>
									<li>• Sincronización automática y failover</li>
								</ul>
							</div>
						</div>

						<div className="space-y-6">
							<div className="bg-orange-50 p-4 rounded-lg">
								<h3 className="font-semibold text-orange-900 mb-2">🔒 Seguridad Avanzada</h3>
								<ul className="text-sm text-orange-700 space-y-1">
									<li>• Gestión multiusuario con control de permisos</li>
									<li>• Limitación de accesos por número de usuarios</li>
									<li>• Cifrado y auditorías periódicas</li>
								</ul>
							</div>

							<div className="bg-red-50 p-4 rounded-lg">
								<h3 className="font-semibold text-red-900 mb-2">📋 Integración SENIAT</h3>
								<ul className="text-sm text-red-700 space-y-1">
									<li>• Módulo de tasa e impuestos dinámico</li>
									<li>• Configuración de tasas cambiarias ($, EUR, VES)</li>
									<li>• Cálculo automático de impuestos</li>
								</ul>
							</div>

							<div className="bg-gray-100 p-4 rounded-lg text-center">
								<div className="text-2xl font-bold text-gray-700">Supabase</div>
								<div className="text-sm text-gray-600">Base de datos y autenticación</div>
							</div>
						</div>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 7: Mercado
	{
		id: 'mercado',
		component: () => {
			const datosMercado = [
				{ nombre: 'Laboratorios Patológicos', valor: 39, color: '#8884d8' },
				{ nombre: 'Centros Diagnóstico', valor: 141, color: '#82ca9d' },
				{ nombre: 'Clínicas Generales', valor: 1200, color: '#ffc658' },
			]
			const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

			return (
				<Slide>
					<ContenidoSlide titulo="Mercado y Oportunidad">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold mb-4">Mercado Venezolano (Data Scraper)</h3>
								<div className="space-y-4">
									<div className="flex items-center justify-between p-3 bg-blue-50 rounded">
										<span className="font-medium">Laboratorios Patológicos</span>
										<span className="text-xl font-bold text-blue-600">≈39</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-green-50 rounded">
										<span className="font-medium">Centros Diagnóstico</span>
										<span className="text-xl font-bold text-green-600">≈141</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
										<span className="font-medium">Clínicas Generales</span>
										<span className="text-xl font-bold text-yellow-600">≈1.200</span>
									</div>
								</div>

								<div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
									<h4 className="font-semibold text-purple-900 mb-2">Mercado LATAM Salud Digital</h4>
									<div className="space-y-2 text-sm">
										<div className="flex justify-between">
											<span>2024:</span>
											<span className="font-medium">$17,036.5M</span>
										</div>
										<div className="flex justify-between">
											<span>Crecimiento:</span>
											<span className="font-medium">23.2% anual</span>
										</div>
										<div className="flex justify-between">
											<span>Período:</span>
											<span className="font-medium text-purple-600">2025-2030</span>
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
											label={({ nombre, valor }) => `${nombre}: ${valor}`}
											outerRadius={80}
											fill="#8884d8"
											dataKey="valor"
										>
											{datosMercado.map((entry, index) => (
												<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
											))}
										</Pie>
										<Tooltip formatter={(value) => [`${value}`, 'Cantidad']} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>

						<div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
							<h3 className="text-xl font-semibold text-green-900 mb-4">Estrategia de Segmentación</h3>
							<div className="grid md:grid-cols-3 gap-4 text-sm">
								<div>
									<h4 className="font-semibold text-green-800 mb-2">🎯 Nicho Inicial</h4>
									<p className="text-green-700">Laboratorios patológicos (39) - dolor crítico en demora de informes</p>
								</div>
								<div>
									<h4 className="font-semibold text-green-800 mb-2">📈 Expansión</h4>
									<p className="text-green-700">Centros de diagnóstico (141) - misma problemática operativa</p>
								</div>
								<div>
									<h4 className="font-semibold text-green-800 mb-2">🌎 Regional</h4>
									<p className="text-green-700">Clínicas generales (1.200) - mercado ampliado una vez validado</p>
								</div>
							</div>
						</div>
					</ContenidoSlide>
				</Slide>
			)
		},
	},

	// Slide 8: Competencia
	{
		id: 'competencia',
		component: () => (
			<Slide>
				<ContenidoSlide titulo="Análisis de Competencia">
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">Nuestras Ventajas Únicas</h3>
							<div className="space-y-4">
								{[
									{
										icon: '🎯',
										titulo: 'Hiper Personalización',
										desc: 'Se adapta a procesos del cliente, no al revés',
									},
									{ icon: '🇻🇪', titulo: 'Enfoque Venezuela', desc: 'Conocimiento profundo del mercado local y SENIAT' },
									{
										icon: '🏆',
										titulo: 'Validación Conspat',
										desc: 'MVP validado en entorno real con resultados medibles',
									},
									{
										icon: '🤖',
										titulo: 'IA Local y Segura',
										desc: 'Sin retención de datos, entrenada con casos reales',
									},
									{
										icon: '⚡',
										titulo: 'Implementación Rápida',
										desc: 'Setup desde $1,000 vs competidores de alto costo',
									},
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
							<h3 className="text-xl font-semibold mb-4">Competidores Identificados</h3>
							<div className="space-y-3">
								<Card className="border-red-200">
									<CardContent className="p-4">
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">Galac (VE)</span>
											<Badge variant="destructive">Licencia anual</Badge>
										</div>
										<p className="text-sm text-gray-600">Accesible pero no clínico, sin personalización</p>
									</CardContent>
								</Card>

								<Card className="border-orange-200">
									<CardContent className="p-4">
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">ZkyMed (Latam)</span>
											<Badge variant="secondary">$50-100/mes</Badge>
										</div>
										<p className="text-sm text-gray-600">SaaS modular, enfoque genérico</p>
									</CardContent>
								</Card>

								<Card className="border-yellow-200">
									<CardContent className="p-4">
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">Jedy Health (VE)</span>
											<Badge variant="outline">$15-175/mes</Badge>
										</div>
										<p className="text-sm text-gray-600">Suscripción escalada, sin IA especializada</p>
									</CardContent>
								</Card>

								<Card className="border-blue-200">
									<CardContent className="p-4">
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">Clinic to Cloud (INT)</span>
											<Badge variant="outline">$499/mes</Badge>
										</div>
										<p className="text-sm text-gray-600">Alto costo, sin adaptación local</p>
									</CardContent>
								</Card>
							</div>

							<div className="mt-6 p-4 bg-green-50 rounded-lg">
								<h4 className="font-semibold text-green-900 mb-2">Nuestro Posicionamiento</h4>
								<p className="text-sm text-green-700">
									Únicos en Venezuela con cobertura integral, soporte local y módulo IA opcional. Mejor relación
									costo-beneficio: ~$0.69 USD por caso procesado.
								</p>
							</div>
						</div>
					</div>
				</ContenidoSlide>
			</Slide>
		),
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
								<div className="text-3xl font-bold text-blue-600 mb-2">$1K-6K</div>
								<ul className="text-sm text-blue-700 space-y-1">
									<li>• Implementación completa</li>
									<li>• Migración de datos</li>
									<li>• Entrenamiento equipo</li>
									<li>• Personalización</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-green-50 border-green-200">
							<CardHeader>
								<CardTitle className="text-green-900">📅 SaaS Mensual</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-3xl font-bold text-green-600 mb-2">$150-500</div>
								<ul className="text-sm text-green-700 space-y-1">
									<li>• Basado en usuarios</li>
									<li>• Actualizaciones automáticas</li>
									<li>• Soporte continuo</li>
									<li>• Backup y seguridad</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-purple-50 border-purple-200">
							<CardHeader>
								<CardTitle className="text-purple-900">🤖 Módulo IA</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-3xl font-bold text-purple-600 mb-2">+$100</div>
								<ul className="text-sm text-purple-700 space-y-1">
									<li>• SolIA opcional</li>
									<li>• Entrenamiento personalizado</li>
									<li>• Soporte especializado</li>
									<li>• Actualizaciones IA</li>
								</ul>
							</CardContent>
						</Card>
					</div>

					<div className="mt-8 grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">Planes de Suscripción</h3>
							<div className="space-y-4">
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 1 (10 usuarios)</span>
										<span className="text-lg font-bold">$150/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $1,000-1,200</div>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 2 (50 usuarios)</span>
										<span className="text-lg font-bold">$250/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $2,000-2,500</div>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 3 (100 usuarios)</span>
										<span className="text-lg font-bold">$500/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $4,000-6,000</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-4">Servicios Adicionales</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 bg-blue-50 rounded">
									<span>Asesoramiento</span>
									<Badge>$100/mes</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-green-50 rounded">
									<span>Desarrollo Web</span>
									<Badge>$1,200</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-purple-50 rounded">
									<span>Agentes IA</span>
									<Badge>$100/mes</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-orange-50 rounded">
									<span>Automatizaciones</span>
									<Badge>$500</Badge>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
						<h3 className="text-xl font-semibold text-green-900 mb-4">Propuesta de Valor</h3>
						<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div>
								<h4 className="font-semibold text-green-800 mb-2">💡 Costo-Beneficio</h4>
								<p className="text-green-700">~$0.69 USD por caso procesado en un año</p>
							</div>
							<div>
								<h4 className="font-semibold text-green-800 mb-2">⚡ ROI Rápido</h4>
								<p className="text-green-700">Reducción 75% tiempo tareas (2 min → 30 seg)</p>
							</div>
							<div>
								<h4 className="font-semibold text-green-800 mb-2">🔄 Modelo Recurrente</h4>
								<p className="text-green-700">Suscripción mensual con actualizaciones continuas</p>
							</div>
						</div>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 10: Tracción
	{
		id: 'traccion',
		component: () => {
			const datosTraccion = [
				{ mes: 'Ene', usuarios: 5, casos: 120 },
				{ mes: 'Feb', usuarios: 8, casos: 180 },
				{ mes: 'Mar', usuarios: 12, casos: 280 },
				{ mes: 'Abr', usuarios: 15, casos: 350 },
				{ mes: 'May', usuarios: 18, casos: 420 },
				{ mes: 'Jun', usuarios: 22, casos: 500 }
			]

			return (
				<Slide>
					<ContenidoSlide titulo="Tracción y Validación">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold mb-4">MVP Validado en Conspat</h3>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="text-center p-4 bg-green-50 rounded-lg">
										<div className="text-3xl font-bold text-green-600">3</div>
										<div className="text-sm text-green-700">Meses de piloto</div>
									</div>
									<div className="text-center p-4 bg-blue-50 rounded-lg">
										<div className="text-3xl font-bold text-blue-600">75%</div>
										<div className="text-sm text-blue-700">Reducción tiempo tareas</div>
									</div>
									<div className="text-center p-4 bg-purple-50 rounded-lg">
										<div className="text-3xl font-bold text-purple-600">100%</div>
										<div className="text-sm text-purple-700">Satisfacción usuarios</div>
									</div>
									<div className="text-center p-4 bg-orange-50 rounded-lg">
										<div className="text-3xl font-bold text-orange-600">0</div>
										<div className="text-sm text-orange-700">Errores críticos</div>
									</div>
								</div>

								<h3 className="text-xl font-semibold mb-4">Pipeline Comercial</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
										<span>Laboratorios interesados</span>
										<Badge>5 en lista de espera</Badge>
									</div>
									<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
										<span>Pipeline Q1 2025</span>
										<Badge variant="outline">$180K USD</Badge>
									</div>
									<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
										<span>Demos programadas</span>
										<Badge>12 en enero</Badge>
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
											<span className="font-medium">8</span>
										</div>
										<div className="flex justify-between">
											<span>ARR (Annual Recurring Revenue):</span>
											<span className="font-medium">$360K</span>
										</div>
										<div className="flex justify-between">
											<span>Usuarios en plataforma:</span>
											<span className="font-medium">200</span>
										</div>
										<div className="flex justify-between">
											<span>Expansión geográfica:</span>
											<span className="font-medium">Colombia</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ContenidoSlide>
				</Slide>
			)
		},
	},

	// Slide 11: Roadmap
	{
		id: 'roadmap',
		component: () => (
			<Slide>
				<ContenidoSlide titulo="Roadmap de Desarrollo">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="bg-blue-50 border-blue-200">
							<CardHeader>
								<CardTitle className="text-blue-900">Q1 2025</CardTitle>
								<div className="text-sm text-blue-700">Consolidación Venezuela</div>
							</CardHeader>
							<CardContent>
								<ul className="text-sm space-y-1">
									<li>• 3 clientes piloto cerrados</li>
									<li>• Versión 2.0 con mejoras UX</li>
									<li>• Módulo SENIAT completo</li>
									<li>• Integración con sistemas existentes</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-green-50 border-green-200">
							<CardHeader>
								<CardTitle className="text-green-900">Q2 2025</CardTitle>
								<div className="text-sm text-green-700">Expansión Técnica</div>
							</CardHeader>
							<CardContent>
								<ul className="text-sm space-y-1">
									<li>• Módulo SolIA avanzado</li>
									<li>• API para integraciones</li>
									<li>• Dashboard analítico mejorado</li>
									<li>• Sistema de respaldo automático</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-purple-50 border-purple-200">
							<CardHeader>
								<CardTitle className="text-purple-900">Q3 2025</CardTitle>
								<div className="text-sm text-purple-700">Expansión Geográfica</div>
							</CardHeader>
							<CardContent>
								<ul className="text-sm space-y-1">
									<li>• Entrada Colombia (2 clientes)</li>
									<li>• Adaptación a regulaciones locales</li>
									<li>• Partnership con Conspat Colombia</li>
									<li>• Oficina virtual en Bogotá</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-orange-50 border-orange-200">
							<CardHeader>
								<CardTitle className="text-orange-900">Q4 2025</CardTitle>
								<div className="text-sm text-orange-700">Escalamiento</div>
							</CardHeader>
							<CardContent>
								<ul className="text-sm space-y-1">
									<li>• 8 clientes activos total</li>
									<li>• Marketplace de plantillas</li>
									<li>• Serie A ($500K objetivo)</li>
									<li>• Equipo 8 personas</li>
								</ul>
							</CardContent>
						</Card>
					</div>

					<div className="mt-8">
						<Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
							<CardHeader>
								<CardTitle className="text-yellow-900">🏆 2026 - Liderazgo Regional</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-4 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-yellow-600">Chile + Perú</div>
										<div className="text-sm text-yellow-700">Nuevos mercados</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-yellow-600">25</div>
										<div className="text-sm text-yellow-700">Clientes activos</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-yellow-600">$1.2M</div>
										<div className="text-sm text-yellow-700">ARR objetivo</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-yellow-600">Serie B</div>
										<div className="text-sm text-yellow-700">Preparación</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</ContenidoSlide>
			</Slide>
		),
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
								riesgo: 'Regulaciones SENIAT',
								descripcion: 'Cambios en tasas e impuestos venezolanos',
								mitigacion: 'Módulo dinámico actualizable, asesoría contable especializada',
								color: 'red',
							},
							{
								riesgo: 'Seguridad de Datos',
								descripcion: 'Protección de información médica sensible',
								mitigacion: 'Arquitectura híbrida local, cifrado end-to-end, auditorías',
								color: 'orange',
							},
							{
								riesgo: 'Adopción del Mercado',
								descripcion: 'Resistencia al cambio en laboratorios tradicionales',
								mitigacion: 'ROI demostrable, capacitación intensiva, soporte 24/7',
								color: 'yellow',
							},
							{
								riesgo: 'Competencia Internacional',
								descripcion: 'Entrada de soluciones extranjeras al mercado',
								mitigacion: 'Especialización local, conocimiento del mercado venezolano',
								color: 'blue',
							},
							{
								riesgo: 'Dependencia de Talento',
								descripcion: 'Escasez de desarrolladores especializados en Venezuela',
								mitigacion: 'Equipo remoto, capacitación interna, equity atractivo',
								color: 'purple',
							},
							{
								riesgo: 'Escalabilidad Económica',
								descripcion: 'Costos de infraestructura vs ingresos en USD',
								mitigacion: 'Modelo híbrido, optimización de recursos, precios competitivos',
								color: 'green',
							},
						].map((item, index) => (
							<Card key={index} className={`border-${item.color}-200 bg-${item.color}-50`}>
								<CardHeader>
									<CardTitle className={`text-${item.color}-900 text-lg`}>⚖️ {item.riesgo}</CardTitle>
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
										<div className="text-xl font-bold text-gray-700">12 meses</div>
										<div className="text-sm text-gray-600">Reserva de efectivo</div>
									</div>
									<div>
										<div className="text-xl font-bold text-gray-700">Conspat</div>
										<div className="text-sm text-gray-600">Partnership estratégico</div>
									</div>
									<div>
										<div className="text-xl font-bold text-gray-700">Pivots</div>
										<div className="text-sm text-gray-600">Modelo B2B2C identificado</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</ContenidoSlide>
			</Slide>
		),
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
									<CardTitle className="text-blue-900 flex items-center">👨‍💼 CEO - Eugenio Andreone</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-blue-700 space-y-1">
										<p>
											<strong>8 años</strong> en desarrollo de software y gestión de proyectos
										</p>
										<p>Especialista en sistemas administrativos</p>
										<p>Experiencia en transformación digital</p>
										<p>Liderazgo en equipos técnicos</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-green-50 border-green-200">
								<CardHeader>
									<CardTitle className="text-green-900 flex items-center">👨‍💻 CTO - Jesús Freites</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-green-700 space-y-1">
										<p>
											<strong>6 años</strong> en desarrollo web y aplicaciones
										</p>
										<p>Especialista en React, Next.js y TypeScript</p>
										<p>Experiencia en arquitecturas escalables</p>
										<p>Conocimiento en IA y machine learning</p>
									</div>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-6">
							<Card className="bg-purple-50 border-purple-200">
								<CardHeader>
									<CardTitle className="text-purple-900 flex items-center">
										👨‍⚕️ Asesor Médico - Dr. [Conspat]
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-purple-700 space-y-1">
										<p>
											<strong>Patólogo certificado</strong>, 15+ años experiencia
										</p>
										<p>Miembro activo de Conspat</p>
										<p>Validación médica del producto</p>
										<p>Red de contactos en el sector salud</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-orange-50 border-orange-200">
								<CardHeader>
									<CardTitle className="text-orange-900 flex items-center">💼 Desarrollo de Negocio</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-orange-700 space-y-1">
										<p>
											<strong>Estrategia comercial</strong> y desarrollo de mercado
										</p>
										<p>Relaciones con laboratorios y clínicas</p>
										<p>Validación de producto en campo</p>
										<p>Pipeline de clientes potenciales</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className="mt-8">
						<Card className="bg-gradient-to-r from-gray-100 to-gray-200">
							<CardHeader>
								<CardTitle className="text-gray-900">🎯 Partners Estratégicos</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-4 text-center">
									<div>
										<div className="font-bold text-gray-700">Conspat</div>
										<div className="text-sm text-gray-600">Validación médica y acceso al mercado</div>
									</div>
									<div>
										<div className="font-bold text-gray-700">Laboratorios Piloto</div>
										<div className="text-sm text-gray-600">Casos de uso reales y feedback</div>
									</div>
									<div>
										<div className="font-bold text-gray-700">Desarrolladores</div>
										<div className="text-sm text-gray-600">Equipo técnico especializado</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</ContenidoSlide>
			</Slide>
		),
	},

	// Slide 14: CTA
	{
		id: 'cta',
		component: () => (
			<Slide variante="titulo" fondo="from-purple-600 to-blue-700">
				<div className="text-center text-white space-y-8">
					<TituloSlide className="text-white">¡Únete a Solware!</TituloSlide>

					<p className="text-2xl text-white/90 max-w-4xl mx-auto">
						Transformemos la gestión administrativa de laboratorios en Venezuela
					</p>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
						<Card className="bg-white/10 backdrop-blur border-white/20">
							<CardHeader>
								<CardTitle className="text-white">💰 Serie Seed: $100K USD</CardTitle>
							</CardHeader>
							<CardContent className="text-white/90 space-y-2">
								<p>• Valoración: $500K pre-money</p>
								<p>• Runway: 12 meses hasta Serie A</p>
								<p>• Uso: 60% desarrollo, 25% ventas, 15% operaciones</p>
							</CardContent>
						</Card>

						<Card className="bg-white/10 backdrop-blur border-white/20">
							<CardHeader>
								<CardTitle className="text-white">🎯 Lo que Ofrecemos</CardTitle>
							</CardHeader>
							<CardContent className="text-white/90 space-y-2">
								<p>• Mercado validado con Conspat</p>
								<p>• Producto MVP funcional</p>
								<p>• Equipo técnico especializado</p>
								<p>• Impacto en eficiencia operativa</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12">
						<h3 className="text-2xl font-semibold mb-4">📅 Próximos Pasos</h3>
						<div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto text-sm">
							<div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">1. Demo</div>
								<div className="text-white/80">Producto en vivo</div>
							</div>
							<div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">2. Validación</div>
								<div className="text-white/80">Casos de uso reales</div>
							</div>
							<div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">3. Referencias</div>
								<div className="text-white/80">Conspat y clientes</div>
							</div>
							<div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">4. Términos</div>
								<div className="text-white/80">Inversión detallados</div>
							</div>
							<div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">5. Cierre</div>
								<div className="text-white/80">Partnership estratégico</div>
							</div>
						</div>
					</div>

					<div className="mt-12 text-xl italic">
						Juntos podemos modernizar la gestión de laboratorios en Venezuela
					</div>

					<Card className="bg-white/10 backdrop-blur border-white/20 max-w-2xl mx-auto">
						<CardHeader>
							<CardTitle className="text-white">🗳️ Pregunta Final para la Audiencia</CardTitle>
						</CardHeader>
						<CardContent className="text-white/90">
							<p className="text-lg">¿Qué módulo de SolHub les interesa más ver en demo?</p>
							<p className="text-sm mt-2">La audiencia puede votar en tiempo real</p>
						</CardContent>
					</Card>
				</div>
			</Slide>
		),
	},
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