'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  MessageSquare, 
  ThumbsUp, 
  BarChart3, 
  Users,
  Send,
  Wifi,
  WifiOff
} from 'lucide-react'
import { useLiveSession } from '@/hooks/useLiveSession'

export default function AudienciaPage() {
  const params = useParams()
  const codigo = params.codigo as string
  
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [nuevaPregunta, setNuevaPregunta] = useState('')
  const [seUnio, setSeUnio] = useState(false)

  const {
    conectado,
    sesion,
    preguntas,
    encuestas,
    reacciones,
    enviarPregunta,
    votarPregunta,
    responderEncuesta,
    enviarReaccion
  } = useLiveSession(codigo)

  const manejarUnirse = () => {
    if (nombreUsuario.trim()) {
      setSeUnio(true)
    }
  }

  const manejarEnviarPregunta = () => {
    if (nuevaPregunta.trim() && nombreUsuario.trim()) {
      enviarPregunta(nuevaPregunta, nombreUsuario)
      setNuevaPregunta('')
    }
  }

  const emojisReacciones = ['👍', '👏', '❤️', '🤔', '😮', '🔥']

  if (!seUnio) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Unirse a la Sesión</CardTitle>
            <p className="text-muted-foreground">
              Código de sesión: <Badge variant="outline" className="ml-2">{codigo}</Badge>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Tu nombre</label>
              <Input
                placeholder="Ingresa tu nombre"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && manejarUnirse()}
              />
            </div>
            <Button 
              onClick={manejarUnirse} 
              className="w-full"
              disabled={!nombreUsuario.trim()}
            >
              Unirse a la Presentación
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Podrás hacer preguntas, votar en encuestas y reaccionar en tiempo real
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Solpat/Solhub</h1>
            <p className="text-sm text-muted-foreground">Sesión: {codigo}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={conectado ? 'default' : 'destructive'} className="flex items-center space-x-1">
              {conectado ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{conectado ? 'Conectado' : 'Desconectado'}</span>
            </Badge>
            <Badge variant="outline">
              {sesion?.participantes || 0} participantes
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Bienvenida */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              ¡Bienvenido, {nombreUsuario}!
            </h2>
            <p className="text-blue-700">
              Participa activamente en la presentación haciendo preguntas, votando en encuestas y reaccionando
            </p>
          </CardContent>
        </Card>

        {/* Hacer pregunta */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Hacer una Pregunta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="Escribe tu pregunta aquí..."
                value={nuevaPregunta}
                onChange={(e) => setNuevaPregunta(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && manejarEnviarPregunta()}
              />
              <Button onClick={manejarEnviarPregunta} disabled={!nuevaPregunta.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preguntas populares */}
        <Card>
          <CardHeader>
            <CardTitle>Preguntas Populares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {preguntas.length === 0 ? (
                <div className="text-center text-muted-foreground py-4">
                  No hay preguntas aún. ¡Sé el primero en preguntar!
                </div>
              ) : (
                preguntas
                  .sort((a, b) => b.votos - a.votos)
                  .slice(0, 5)
                  .map((pregunta) => (
                    <div key={pregunta.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{pregunta.autor}</span>
                        <Badge variant={pregunta.aprobada ? 'default' : 'secondary'}>
                          {pregunta.aprobada ? 'Aprobada' : 'Pendiente'}
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">{pregunta.texto}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => votarPregunta(pregunta.id)}
                        className="flex items-center space-x-1"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{pregunta.votos}</span>
                      </Button>
                    </div>
                  ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Encuestas activas */}
        {encuestas.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Encuestas Activas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {encuestas.map((encuesta) => {
                  const totalVotos = Object.values(encuesta.votos).reduce((a, b) => a + b, 0)
                  
                  return (
                    <div key={encuesta.id} className="space-y-3">
                      <h4 className="font-medium">{encuesta.pregunta}</h4>
                      <div className="space-y-2">
                        {encuesta.opciones.map((opcion) => {
                          const votos = encuesta.votos[opcion] || 0
                          const porcentaje = totalVotos > 0 ? (votos / totalVotos) * 100 : 0
                          
                          return (
                            <div key={opcion} className="space-y-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full justify-between"
                                onClick={() => responderEncuesta(encuesta.id, opcion)}
                                disabled={!encuesta.activa}
                              >
                                <span>{opcion}</span>
                                <span>{votos} votos</span>
                              </Button>
                              <Progress value={porcentaje} className="h-2" />
                            </div>
                          )
                        })}
                      </div>
                      <div className="text-center">
                        <Badge variant="outline">Total: {totalVotos} votos</Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reacciones */}
        <Card>
          <CardHeader>
            <CardTitle>Reacciona en Tiempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {emojisReacciones.map((emoji) => (
                <Button
                  key={emoji}
                  variant="outline"
                  size="lg"
                  onClick={() => enviarReaccion(emoji)}
                  className="text-2xl h-16"
                >
                  {emoji}
                </Button>
              ))}
            </div>
            
            {reacciones.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {reacciones.map((reaccion) => (
                  <div key={reaccion.emoji} className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-xl">{reaccion.emoji}</div>
                    <div className="text-sm font-medium">{reaccion.count}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Estado de la presentación */}
        <Card>
          <CardHeader>
            <CardTitle>Estado de la Presentación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Slide actual:</span>
                <Badge>{(sesion?.slideActual || 0) + 1}</Badge>
              </div>
              <div className="flex justify-between">
                <span>Participantes:</span>
                <Badge variant="outline">{sesion?.participantes || 0}</Badge>
              </div>
              <div className="flex justify-between">
                <span>Estado:</span>
                <Badge variant={sesion?.activa ? 'default' : 'secondary'}>
                  {sesion?.activa ? 'Activa' : 'Inactiva'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}