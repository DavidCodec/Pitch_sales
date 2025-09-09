'use client'

import { useState, useEffect, useCallback } from 'react'
import { socketManager, SesionInteractiva, Pregunta, Encuesta, Reaccion } from '@/lib/socket'
import { Socket } from 'socket.io-client'

export function useLiveSession(codigoSesion: string) {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [sesion, setSesion] = useState<SesionInteractiva | null>(null)
  const [preguntas, setPreguntas] = useState<Pregunta[]>([])
  const [encuestas, setEncuestas] = useState<Encuesta[]>([])
  const [reacciones, setReacciones] = useState<Reaccion[]>([])
  const [conectado, setConectado] = useState(false)

  useEffect(() => {
    if (!codigoSesion) return

    const socketInstance = socketManager.conectar(codigoSesion)
    setSocket(socketInstance)

    // Eventos de conexión
    socketInstance.on('connect', () => setConectado(true))
    socketInstance.on('disconnect', () => setConectado(false))

    // Eventos de sesión
    socketInstance.on('sesion-actualizada', setSesion)
    socketInstance.on('preguntas-actualizadas', setPreguntas)
    socketInstance.on('encuestas-actualizadas', setEncuestas)
    socketInstance.on('reacciones-actualizadas', setReacciones)

    return () => {
      socketManager.desconectar()
      setSocket(null)
      setConectado(false)
    }
  }, [codigoSesion])

  const enviarPregunta = useCallback((texto: string, autor: string) => {
    socket?.emit('nueva-pregunta', { texto, autor })
  }, [socket])

  const votarPregunta = useCallback((preguntaId: string) => {
    socket?.emit('votar-pregunta', preguntaId)
  }, [socket])

  const responderEncuesta = useCallback((encuestaId: string, opcion: string) => {
    socket?.emit('responder-encuesta', { encuestaId, opcion })
  }, [socket])

  const enviarReaccion = useCallback((emoji: string) => {
    socket?.emit('nueva-reaccion', emoji)
  }, [socket])

  const cambiarSlide = useCallback((numeroSlide: number) => {
    socket?.emit('cambiar-slide', numeroSlide)
  }, [socket])

  return {
    conectado,
    sesion,
    preguntas,
    encuestas,
    reacciones,
    enviarPregunta,
    votarPregunta,
    responderEncuesta,
    enviarReaccion,
    cambiarSlide
  }
}