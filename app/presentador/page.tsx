'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Clock, 
  Users, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  XCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'
import { formatearTiempo, generarCodigoSesion } from '@/lib/utils'
import { useLiveSession } from '@/hooks/useLiveSession'

export default function PresentadorPage() {
  const [tiempoInicio, setTiempoInicio] = useState<Date | null>(null)
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0)
  const [timerActivo, setTimerActivo] = useState(false)
  const [codigoSesion] = useState(() => generarCodigoSesion())
  
  const DURACION_PITCH = 15 * 60 // 15 minutos en segundos

  const {
    conectado,
    sesion,
    preguntas,
    encuestas,
    reacciones
  } = useLiveSession(codigoSesion)

  // Timer del pitch
  useEffect(() => {
    let intervalo: NodeJS.Timeout
    
    if (timerActivo && tiempoInicio) {
      intervalo = setInterval(() => {
        const ahora = new Date()
        const transcurrido = Math.floor((ahora.getTime() - tiempoInicio.getTime()) / 1000)
        setTiempoTranscurrido(transcurrido)
      }, 1000)
    }

    return () => {
      if (intervalo) clearInterval(intervalo)
    }
  }, [timerActivo, tiempoInicio])

  const iniciarTimer = () => {
    setTiempoInicio(new Date())
    setTimerActivo(true)
  }

  const pausarTimer = () => {
    setTimerActivo(false)
  }

  const reiniciarTimer = () => {
    setTiempoInicio(null)
    setTiempoTranscurrido(0)
    setTimerActivo(false)
  }

  const progresoPitch = Math.min((tiempoTranscurrido / DURACION_PITCH) * 100, 100)
  const tiempoRestante = Math.max(DURACION_PITCH - tiempoTranscurrido, 0)

  const preguntasAprobadas = preguntas.filter(p => p.aprobada).length
  const preguntasPendientes = preguntas.filter(p => !p.aprobada).length

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel del Presentador</h1>
          <div className="flex items-center space-x-4">
            <Badge variant={conectado ? 'default' : 'destructive'}>
              {conectado ? 'Conectado' : 'Desconectado'}
            </Badge>
            <Badge variant="outline">
              Código de sesión: {codigoSesion}
            </Badge>
            <Badge variant="secondary">
              <Users className="w-4 h-4 mr-1" />
              {sesion?.participantes || 0} participantes
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Columna izquierda - Timer y controles */}
          <div className="space-y-6">
            {/* Timer del pitch */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Temporizador del Pitch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    {formatearTiempo(tiempoTranscurrido)}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Tiempo restante: {formatearTiempo(tiempoRestante)}
                  </div>
                  <Progress value={progresoPitch} className="w-full" />
                  
                  <div className="flex justify-center space-x-2">
                    {!timerActivo ? (
                      <Button onClick={iniciarTimer} size="sm">
                        <Play className="w-4 h-4 mr-1" />
                        Iniciar
                      </Button>
                    ) : (
                      <Button onClick={pausarTimer} variant="outline" size="sm">
                        <Pause className="w-4 h-4 mr-1" />
                        Pausar
                      </Button>
                    )}
                    <Button onClick={reiniciarTimer} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Reiniciar
                    </Button>
                  </div>

                  {progresoPitch > 80 && (
                    <div className="text-orange-600 font-medium">
                      ⚠️ Quedan menos de 3 minutos
                    </div>
                  )}
                  {progresoPitch >= 100 && (
                    <div className="text-red-600 font-bold">
                      🚨 Tiempo agotado
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Notas del slide actual */}
            <Card>
              <CardHeader>
                <CardTitle>Notas del Presentador</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <div className="font-medium">Slide actual: {(sesion?.slideActual || 0) + 1}</div>
                  <div className="text-muted-foreground">
                    {/* Aquí se mostrarían las notas del slide actual */}
                    <p>Puntos clave para mencionar en este slide:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Enfatizar el problema crítico</li>
                      <li>Mencionar estadísticas clave</li>
                      <li>Conectar con la audiencia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas rápidas */}
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas de Sesión</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{preguntas.length}</div>
                    <div className="text-sm text-muted-foreground">Preguntas totales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{encuestas.length}</div>
                    <div className="text-sm text-muted-foreground">Encuestas activas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {reacciones.reduce((sum, r) => sum + r.count, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Reacciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{sesion?.participantes || 0}</div>
                    <div className="text-sm text-muted-foreground">Participantes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna central - Preguntas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Preguntas de la Audiencia
                  </span>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{preguntasPendientes} pendientes</Badge>
                    <Badge variant="default">{preguntasAprobadas} aprobadas</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {preguntas.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      No hay preguntas aún
                    </div>
                  ) : (
                    preguntas
                      .sort((a, b) => b.votos - a.votos)
                      .map((pregunta) => (
                        <Card key={pregunta.id} className={`${
                          pregunta.aprobada ? 'border-green-200 bg-green-50' : 'border-gray-200'
                        }`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-sm">{pregunta.autor}</span>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{pregunta.votos} votos</Badge>
                                {pregunta.aprobada ? (
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                ) : (
                                  <div className="flex space-x-1">
                                    <Button size="sm" variant="outline">
                                      <CheckCircle className="w-3 h-3" />
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      <XCircle className="w-3 h-3" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                            <p className="text-sm">{pregunta.texto}</p>
                          </CardContent>
                        </Card>
                      ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Encuestas y reacciones */}
          <div className="space-y-6">
            {/* Encuestas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Encuestas Activas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {encuestas.length === 0 ? (
                    <div className="text-center text-muted-foreground py-4">
                      No hay encuestas activas
                    </div>
                  ) : (
                    encuestas.map((encuesta) => {
                      const totalVotos = Object.values(encuesta.votos).reduce((a, b) => a + b, 0)
                      
                      return (
                        <Card key={encuesta.id} className="border-blue-200">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-3">{encuesta.pregunta}</h4>
                            <div className="space-y-2">
                              {encuesta.opciones.map((opcion) => {
                                const votos = encuesta.votos[opcion] || 0
                                const porcentaje = totalVotos > 0 ? (votos / totalVotos) * 100 : 0
                                
                                return (
                                  <div key={opcion} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                      <span>{opcion}</span>
                                      <span>{votos} votos ({porcentaje.toFixed(1)}%)</span>
                                    </div>
                                    <Progress value={porcentaje} className="h-2" />
                                  </div>
                                )
                              })}
                            </div>
                            <div className="mt-3 text-center">
                              <Badge variant="outline">Total: {totalVotos} votos</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Reacciones en tiempo real */}
            <Card>
              <CardHeader>
                <CardTitle>Reacciones en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {reacciones.length === 0 ? (
                    <div className="col-span-3 text-center text-muted-foreground py-4">
                      No hay reacciones aún
                    </div>
                  ) : (
                    reacciones.map((reaccion) => (
                      <div key={reaccion.emoji} className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-2xl">{reaccion.emoji}</div>
                        <div className="text-sm font-medium">{reaccion.count}</div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Controles de moderación */}
            <Card>
              <CardHeader>
                <CardTitle>Controles de Moderación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" variant="outline">
                    Lanzar Encuesta Rápida
                  </Button>
                  <Button className="w-full" variant="outline">
                    Activar Lluvia de Emojis
                  </Button>
                  <Button className="w-full" variant="outline">
                    Cambiar a Demo Interactiva
                  </Button>
                  <Button className="w-full" variant="destructive">
                    Finalizar Sesión
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}