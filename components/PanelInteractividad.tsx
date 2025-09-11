'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  ThumbsUp, 
  BarChart3, 
  Smile,
  Send,
  X
} from 'lucide-react'
import { useLiveSession } from '@/hooks/useLiveSession'
import { motion, AnimatePresence } from 'framer-motion'

interface PanelInteractividadProps {
  codigoSesion: string
  visible: boolean
  onCerrar: () => void
}

export function PanelInteractividad({ codigoSesion, visible, onCerrar }: PanelInteractividadProps) {
  const [pestanaActiva, setPestanaActiva] = useState<'preguntas' | 'encuestas' | 'reacciones'>('preguntas')
  const [nuevaPregunta, setNuevaPregunta] = useState('')
  const [nombreUsuario, setNombreUsuario] = useState('')

  const {
    conectado,
    preguntas,
    encuestas,
    reacciones,
    enviarPregunta,
    votarPregunta,
    responderEncuesta,
    enviarReaccion
  } = useLiveSession(codigoSesion)

  const manejarEnviarPregunta = () => {
    if (nuevaPregunta.trim() && nombreUsuario.trim()) {
      enviarPregunta(nuevaPregunta, nombreUsuario)
      setNuevaPregunta('')
    }
  }

  const emojisReacciones = ['👍', '👏', '❤️', '🤔', '😮', '🔥']

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-96 bg-card border-l shadow-xl flex flex-col z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Interactividad</h2>
          <div className="flex items-center space-x-2">
            <Badge variant={conectado ? 'default' : 'destructive'}>
              {conectado ? 'Conectado' : 'Desconectado'}
            </Badge>
            <Button variant="ghost" size="sm" onClick={onCerrar}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Pestañas */}
        <div className="flex border-b">
          {[
            { id: 'preguntas', label: 'Preguntas', icon: MessageSquare },
            { id: 'encuestas', label: 'Encuestas', icon: BarChart3 },
            { id: 'reacciones', label: 'Reacciones', icon: Smile }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setPestanaActiva(id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                pestanaActiva === id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-4">
          {pestanaActiva === 'preguntas' && (
            <div className="space-y-4">
              {/* Formulario nueva pregunta */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Hacer una pregunta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Tu nombre"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Escribe tu pregunta..."
                      value={nuevaPregunta}
                      onChange={(e) => setNuevaPregunta(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && manejarEnviarPregunta()}
                    />
                    <Button size="sm" onClick={manejarEnviarPregunta}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de preguntas */}
              <div className="space-y-3">
                {preguntas.map((pregunta) => (
                  <Card key={pregunta.id} className={pregunta.aprobada ? 'border-green-500' : ''}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium">{pregunta.autor}</span>
                        <Badge variant={pregunta.aprobada ? 'default' : 'secondary'}>
                          {pregunta.aprobada ? 'Aprobada' : 'Pendiente'}
                        </Badge>
                      </div>
                      <p className="text-sm mb-3">{pregunta.texto}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => votarPregunta(pregunta.id)}
                        className="flex items-center space-x-1"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{pregunta.votos}</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pestanaActiva === 'encuestas' && (
            <div className="space-y-4">
              {encuestas.map((encuesta) => (
                <Card key={encuesta.id}>
                  <CardHeader>
                    <CardTitle className="text-sm">{encuesta.pregunta}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {encuesta.opciones.map((opcion) => {
                      const votos = encuesta.votos[opcion] || 0
                      const totalVotos = Object.values(encuesta.votos).reduce((a, b) => a + b, 0)
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
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${porcentaje}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {pestanaActiva === 'reacciones' && (
            <div className="space-y-4">
              {/* Botones de reacciones */}
              <div className="grid grid-cols-3 gap-2">
                {emojisReacciones.map((emoji) => (
                  <Button
                    key={emoji}
                    variant="outline"
                    size="lg"
                    onClick={() => enviarReaccion(emoji)}
                    className="text-2xl"
                  >
                    {emoji}
                  </Button>
                ))}
              </div>

              {/* Contador de reacciones */}
              <div className="space-y-2">
                {reacciones.map((reaccion) => (
                  <div key={reaccion.emoji} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-xl">{reaccion.emoji}</span>
                    <Badge>{reaccion.count}</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}