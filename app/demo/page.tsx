'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Activity, 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  Download,
  Settings,
  Bell
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

// Datos mock para la demo
const kpisData = [
  { nombre: 'Ingresos del Mes', valor: '$125,000', cambio: '+12%', color: 'text-green-600' },
  { nombre: 'Casos Procesados', valor: '1,247', cambio: '+8%', color: 'text-blue-600' },
  { nombre: 'Pacientes Activos', valor: '3,891', cambio: '+15%', color: 'text-purple-600' },
  { nombre: 'Tiempo Promedio', valor: '2.3 días', cambio: '-25%', color: 'text-orange-600' }
]

const casosRecientes = [
  { id: 'C-2024-001', paciente: 'María González', tipo: 'Biopsia', estado: 'En proceso', prioridad: 'Alta' },
  { id: 'C-2024-002', paciente: 'Juan Pérez', tipo: 'Citología', estado: 'Completado', prioridad: 'Media' },
  { id: 'C-2024-003', paciente: 'Ana Rodríguez', tipo: 'Histopatología', estado: 'Pendiente', prioridad: 'Alta' },
  { id: 'C-2024-004', paciente: 'Carlos López', tipo: 'Inmunohistoquímica', estado: 'En proceso', prioridad: 'Baja' }
]

const datosGraficos = {
  casos: [
    { mes: 'Ene', casos: 980, completados: 920 },
    { mes: 'Feb', casos: 1100, completados: 1050 },
    { mes: 'Mar', casos: 1247, completados: 1200 },
    { mes: 'Abr', casos: 1350, completados: 1300 }
  ],
  tipos: [
    { nombre: 'Biopsias', valor: 45, color: '#8884d8' },
    { nombre: 'Citologías', valor: 30, color: '#82ca9d' },
    { nombre: 'Histopatología', valor: 20, color: '#ffc658' },
    { nombre: 'Otros', valor: 5, color: '#ff7300' }
  ]
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300']

export default function DemoPage() {
  const [moduloActivo, setModuloActivo] = useState('clinico')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Solhub Platform</h1>
              <p className="text-sm text-gray-600">Demo Interactiva - Laboratorio Patológico</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notificaciones
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configuración
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              {[
                { id: 'clinico', label: 'Módulo Clínico', icon: FileText },
                { id: 'analisis', label: 'Análisis y Reportes', icon: TrendingUp },
                { id: 'medicos', label: 'Gestión Médicos', icon: Users },
                { id: 'usuarios', label: 'Usuarios', icon: Users },
                { id: 'ajustes', label: 'Ajustes IA', icon: Settings }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setModuloActivo(id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    moduloActivo === id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-6">
          {moduloActivo === 'clinico' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Módulo Clínico</h2>
                <div className="flex space-x-2">
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    Nuevo Caso
                  </Button>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpisData.map((kpi, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{kpi.nombre}</p>
                          <p className="text-2xl font-bold">{kpi.valor}</p>
                        </div>
                        <Badge variant="outline" className={kpi.color}>
                          {kpi.cambio}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Casos recientes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Casos Recientes</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtrar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">ID Caso</th>
                          <th className="text-left py-3 px-4 font-medium">Paciente</th>
                          <th className="text-left py-3 px-4 font-medium">Tipo</th>
                          <th className="text-left py-3 px-4 font-medium">Estado</th>
                          <th className="text-left py-3 px-4 font-medium">Prioridad</th>
                          <th className="text-left py-3 px-4 font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {casosRecientes.map((caso) => (
                          <tr key={caso.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-mono text-sm">{caso.id}</td>
                            <td className="py-3 px-4">{caso.paciente}</td>
                            <td className="py-3 px-4">{caso.tipo}</td>
                            <td className="py-3 px-4">
                              <Badge variant={
                                caso.estado === 'Completado' ? 'default' :
                                caso.estado === 'En proceso' ? 'secondary' : 'outline'
                              }>
                                {caso.estado}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant={
                                caso.prioridad === 'Alta' ? 'destructive' :
                                caso.prioridad === 'Media' ? 'secondary' : 'outline'
                              }>
                                {caso.prioridad}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="ghost" size="sm">
                                Ver Detalles
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {moduloActivo === 'analisis' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Análisis y Reportes</h2>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Período
                  </Button>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Generar Reporte
                  </Button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Gráfico de casos por mes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Casos Procesados por Mes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={datosGraficos.casos}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="casos" fill="#8884d8" name="Total Casos" />
                        <Bar dataKey="completados" fill="#82ca9d" name="Completados" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Gráfico de distribución por tipo */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Tipo de Estudio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={datosGraficos.tipos}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ nombre, valor }) => `${nombre}: ${valor}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="valor"
                        >
                          {datosGraficos.tipos.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Métricas de rendimiento */}
              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Rendimiento con IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-green-700">Reducción en tiempo de diagnóstico</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-blue-700">Precisión del asistente IA</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">25%</div>
                      <div className="text-sm text-purple-700">Reducción en errores</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {moduloActivo === 'medicos' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Gestión de Médicos</h2>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Agregar Médico
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { nombre: 'Dr. María Fernández', especialidad: 'Patología Oncológica', casos: 156, rating: 4.9 },
                  { nombre: 'Dr. Carlos Ruiz', especialidad: 'Citopatología', casos: 203, rating: 4.8 },
                  { nombre: 'Dra. Ana Morales', especialidad: 'Histopatología', casos: 178, rating: 4.9 },
                  { nombre: 'Dr. Luis García', especialidad: 'Patología Forense', casos: 89, rating: 4.7 },
                  { nombre: 'Dra. Carmen López', especialidad: 'Inmunohistoquímica', casos: 134, rating: 4.8 },
                  { nombre: 'Dr. Roberto Silva', especialidad: 'Patología Molecular', casos: 167, rating: 4.9 }
                ].map((medico, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{medico.nombre}</h3>
                          <p className="text-sm text-gray-600">{medico.especialidad}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Casos procesados:</span>
                          <span className="font-medium">{medico.casos}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Rating:</span>
                          <span className="font-medium">⭐ {medico.rating}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        Ver Perfil Completo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {moduloActivo === 'usuarios' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Nuevo Usuario
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Usuarios del Sistema</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="activos">
                    <TabsList>
                      <TabsTrigger value="activos">Usuarios Activos</TabsTrigger>
                      <TabsTrigger value="roles">Roles y Permisos</TabsTrigger>
                      <TabsTrigger value="actividad">Actividad Reciente</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="activos" className="mt-6">
                      <div className="space-y-4">
                        {[
                          { nombre: 'Admin Sistema', email: 'admin@solhub.com', rol: 'Administrador', estado: 'Activo' },
                          { nombre: 'Dr. María Fernández', email: 'maria.f@hospital.com', rol: 'Patólogo Senior', estado: 'Activo' },
                          { nombre: 'Técnico Lab 1', email: 'tecnico1@hospital.com', rol: 'Técnico', estado: 'Activo' },
                          { nombre: 'Secretaria Médica', email: 'secretaria@hospital.com', rol: 'Asistente', estado: 'Inactivo' }
                        ].map((usuario, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-gray-600" />
                              </div>
                              <div>
                                <h4 className="font-medium">{usuario.nombre}</h4>
                                <p className="text-sm text-gray-600">{usuario.email}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Badge variant="outline">{usuario.rol}</Badge>
                              <Badge variant={usuario.estado === 'Activo' ? 'default' : 'secondary'}>
                                {usuario.estado}
                              </Badge>
                              <Button variant="ghost" size="sm">
                                Editar
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="roles" className="mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { rol: 'Administrador', permisos: ['Gestión completa', 'Configuración IA', 'Reportes avanzados'] },
                          { rol: 'Patólogo Senior', permisos: ['Diagnósticos', 'Supervisión', 'Reportes'] },
                          { rol: 'Técnico', permisos: ['Procesamiento muestras', 'Captura datos'] },
                          { rol: 'Asistente', permisos: ['Consulta casos', 'Reportes básicos'] }
                        ].map((item, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="text-lg">{item.rol}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {item.permisos.map((permiso, i) => (
                                  <li key={i} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm">{permiso}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="actividad" className="mt-6">
                      <div className="space-y-3">
                        {[
                          { usuario: 'Dr. María Fernández', accion: 'Completó diagnóstico caso C-2024-001', tiempo: 'Hace 5 minutos' },
                          { usuario: 'Técnico Lab 1', accion: 'Subió imágenes para caso C-2024-002', tiempo: 'Hace 15 minutos' },
                          { usuario: 'Admin Sistema', accion: 'Actualizó configuración de IA', tiempo: 'Hace 1 hora' },
                          { usuario: 'Dr. Carlos Ruiz', accion: 'Revisó reporte mensual', tiempo: 'Hace 2 horas' }
                        ].map((actividad, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">{actividad.usuario}</p>
                              <p className="text-sm text-gray-600">{actividad.accion}</p>
                            </div>
                            <span className="text-xs text-gray-500">{actividad.tiempo}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {moduloActivo === 'ajustes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Configuración del Asistente IA</h2>
                <Button>
                  <Settings className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personalización por Patólogo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nivel de Confianza Mínimo</label>
                      <div className="mt-2 p-3 bg-gray-50 rounded">
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <div className="text-sm text-gray-600">Sugerencias mostradas solo si superan este umbral</div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Especialidades Activas</label>
                      <div className="mt-2 space-y-2">
                        {['Oncología', 'Citopatología', 'Histopatología', 'Inmunohistoquímica'].map((esp) => (
                          <div key={esp} className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">{esp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métricas de Rendimiento IA</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded">
                        <div className="text-xl font-bold text-green-600">92.3%</div>
                        <div className="text-xs text-green-700">Precisión General</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <div className="text-xl font-bold text-blue-600">1.2s</div>
                        <div className="text-xs text-blue-700">Tiempo Respuesta</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <div className="text-xl font-bold text-purple-600">2,547</div>
                        <div className="text-xs text-purple-700">Consultas Hoy</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded">
                        <div className="text-xl font-bold text-orange-600">99.8%</div>
                        <div className="text-xs text-orange-700">Uptime</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Base de Conocimiento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Casos en base de datos</span>
                        <span className="font-medium">47,892</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Última actualización</span>
                        <span className="font-medium">Hace 2 horas</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Artículos médicos</span>
                        <span className="font-medium">15,234</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Actualizar Base de Conocimiento
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Configuración Avanzada</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Modo de aprendizaje activo</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Validación cruzada automática</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Alertas de baja confianza</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Backup automático diario</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}