import chaosDaemon from './chaosDaemons'
import broodCoven from './broodCoven'
import cadreMercenary from './cadreMercenary'
import commorite from './commorrite'
import craftworld from './craftworld'
import deathGuard from './deathGuard'
import ecclesiarchy from './ecclesiarchy'
import forgeWorld from './forgeWorld'
import greenskin from './greenskin'
import greyKnights from './greyKnights'
import hiveFleet from './hiveFleet'
import hunterCadre from './hunterCadre'
import hunterClade from './hunterClade'
import imperialGuard from './imperialGuard'
import kommando from './kommando'
import spaceMarine from './spaceMarine'
import talonsOfTheEmperor from './talonsOfTheEmperor'
import thousandSons from './thousandSons'
import traitorSpaceMarine from './traitorSpaceMarine'
import troupe from './troupe'
import veteranGuardsmen from './veteranGuardsmen'
import warpCoven from './warpCoven'
import pathfinder from './pathfinder'

const data = [
  broodCoven,
  cadreMercenary,
  chaosDaemon,
  commorite,
  craftworld,
  deathGuard,
  ecclesiarchy,
  forgeWorld,
  greenskin,
  greyKnights,
  hiveFleet,
  hunterCadre,
  hunterClade,
  imperialGuard,
  kommando,
  pathfinder,
  spaceMarine,
  talonsOfTheEmperor,
  thousandSons,
  traitorSpaceMarine,
  troupe,
  veteranGuardsmen,
  warpCoven
]

// eslint-disable-next-line
const getFactionSpecificData = (factionName: string) => (
  data.find(factionData => factionData.name === factionName)
)

export default getFactionSpecificData
export { data }
