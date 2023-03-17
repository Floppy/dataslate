import { stringContent } from '../Parser'
import { Gang } from '../../types/Necromunda'

export const parseYaktribeXML = (doc: Document): Gang => {
  return {
    system: 'Necromunda',
    name: stringContent('/gang/gang_name', doc)
  }
}
