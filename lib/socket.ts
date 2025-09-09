// Cliente Socket.IO para interactividad en tiempo real
import { io, Socket } from 'socket.io-client'

export interface SesionInteractiva {
  codigo: string
  presentadorId: string
  slideActual: number
  participantes: number
  activa: boolean
}

export interface Pregunta {
  id: string
  texto: string
  autor: string
  timestamp: number
  votos: number
  aprobada: boolean
}

export interface Encuesta {
  id: string
  pregunta: string
  opciones: string[]
  votos: { [opcion: string]: number }
  activa: boolean
}

export interface Reaccion {
  emoji: string
  count: number
}

class SocketManager {
  private socket: Socket | null = null
  private reconectarIntervalo: NodeJS.Timeout | null = null

  conectar(codigoSesion: string): Socket {
    if (this.socket?.connected) {
      return this.socket
    }

    this.socket = io({
      path: '/api/socket',
      addTrailingSlash: false,
    })

    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockets')
      this.socket?.emit('unirse-sesion', codigoSesion)
      this.limpiarReconexion()
    })

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor')
      this.iniciarReconexion(codigoSesion)
    })

    return this.socket
  }

  private iniciarReconexion(codigoSesion: string) {
    if (this.reconectarIntervalo) return

    this.reconectarIntervalo = setInterval(() => {
      if (!this.socket?.connected) {
        console.log('Intentando reconectar...')
        this.conectar(codigoSesion)
      }
    }, 3000)
  }

  private limpiarReconexion() {
    if (this.reconectarIntervalo) {
      clearInterval(this.reconectarIntervalo)
      this.reconectarIntervalo = null
    }
  }

  desconectar() {
    this.limpiarReconexion()
    this.socket?.disconnect()
    this.socket = null
  }

  obtenerSocket(): Socket | null {
    return this.socket
  }
}

export const socketManager = new SocketManager()