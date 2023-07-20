import { Client, Server } from 'styletron-engine-atomic'

const getHydrateClass: any = () =>
  document.getElementsByClassName('_styletron_hydrate_')

export const Engine =
  typeof window === 'undefined'
  ? new Server()
  : new Client({
    hydrate: getHydrateClass()
  })