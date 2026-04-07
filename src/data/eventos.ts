import { reactive } from 'vue'
import btsImg from '@/assets/bts.png'
import rockImg from '@/assets/rockinrio.png'
import badbunnyImg from '@/assets/badbunny.png'

export const eventos = reactive([
  {
    id: 1,
    nome: 'BTS WORLD TOUR | ARIRANG',
    subtitulo: 'Turnê confirmada',
    descricao: 'Os 7 divos da banda sul-coreana voltam com tudo depois de um hiato de 7 anos!',
    data: '10/09/2026',
    local: 'São Paulo - SP',
    imagem: btsImg,
    favorito: false
  },
  {
    id: 2,
    nome: 'ROCK IN RIO',
    subtitulo: 'Turnê confirmada',
    descricao: 'Com várias bandas estreando: StrayKids, Gilberto Gil, Demi Lovato.',
    data: '20/09/2026',
    local: 'Rio de Janeiro - RJ',
    imagem: rockImg,
    favorito: false
  },
  {
    id: 3,
    nome: 'BAD BUNNY',
    subtitulo: 'Turnê confirmada',
    descricao: 'Divo espanhol, debí tirar más fotos.',
    data: '05/10/2026',
    local: 'Curitiba - PR',
    imagem: badbunnyImg,
    favorito: false
  }
])