import blooded from './blooded'
import chaosDaemon from './chaosDaemons'
import broodCoven from './broodCoven'
import cadreMercenary from './cadreMercenary'
import commorite from './commorrite'
import craftworld from './craftworld'
import deathGuard from './deathGuard'
import ecclesiarchy from './ecclesiarchy'
import farstalkerKinband from './farstalkerKinband'
import forgeWorld from './forgeWorld'
import greenskin from './greenskin'
import greyKnights from './greyKnights'
import hierotekCircle from './hierotekCircle'
import hiveFleet from './hiveFleet'
import hunterCadre from './hunterCadre'
import hunterClade from './hunterClade'
import imperialGuard from './imperialGuard'
import intercessionSquad from './intercessionSquad'
import novitiate from './novitiate'
import kommando from './kommando'
import legionary from './legionairy'
import spaceMarine from './spaceMarine'
import talonsOfTheEmperor from './talonsOfTheEmperor'
import thousandSons from './thousandSons'
import tombWorld from './tombWorld'
import traitorSpaceMarine from './traitorSpaceMarine'
import troupe from './troupe'
import veteranGuardsmen from './veteranGuardsmen'
import voidDancer from './voidDancer'
import warpCoven from './warpCoven'
import pathfinder from './pathfinder'
import wyrmblade from './wyrmblade'
import corsairVoidscarred from './corsairVoidscarred'
import phobosStrikeTeam from './phobosStrikeTeam'
import gellerpoxInfected from './gellerpoxInfected'
import elucidianStarStriders from './elucidianStarStriders'
import imperialNavyBreachers from './imperialNavyBreachers'
import kasrkin from './kasrkin'
import handOfTheArchon from './handOfTheArchon'
import exactionSquad from './exactionSquad'

const data = [
  blooded,
  broodCoven,
  cadreMercenary,
  chaosDaemon,
  commorite,
  corsairVoidscarred,
  craftworld,
  deathGuard,
  ecclesiarchy,
  elucidianStarStriders,
  exactionSquad,
  farstalkerKinband,
  forgeWorld,
  gellerpoxInfected,
  greenskin,
  greyKnights,
  handOfTheArchon,
  hierotekCircle,
  hiveFleet,
  hunterCadre,
  hunterClade,
  imperialGuard,
  imperialNavyBreachers,
  intercessionSquad,
  kasrkin,
  kommando,
  legionary,
  novitiate,
  pathfinder,
  phobosStrikeTeam,
  spaceMarine,
  talonsOfTheEmperor,
  thousandSons,
  tombWorld,
  traitorSpaceMarine,
  troupe,
  veteranGuardsmen,
  voidDancer,
  warpCoven,
  wyrmblade
]

// eslint-disable-next-line
const getFactionSpecificData = (factionName: string) => (
  data.find(factionData => factionData.name === factionName)
)

export default getFactionSpecificData
export { data }
