import broodCoven from './broodCoven'
import hiveFleet from './hiveFleet'
import kommando from './kommando'
import veteranGuardsmen from './veteranGuardsmen'
import spaceMarine from './spaceMarine'
import greyKnights from './greyKnights'
import imperialGuard from './imperialGuard'
import forgeWorld from './forgeWorld'
import ecclesiarchy from './ecclesiarchy'
import talonsOfTheEmporer from './talonsOfTheEmporer'
import traitorSpaceMarine from './traitorSpaceMarine'
import deathGuard from './deathGuard'
import thousandSons from './thousandSons'
import hunterCadre from './hunterCadre'
import hunterClade from './hunterClade'
import cadreMercenary from './cadreMercenary'
import greenskin from './greenskin'
import troupe from './troupe'
import craftworld from "./craftworld";
import commorite from "./commorite";

const getFactionSpecificData = (factionName: string) => {
  switch (factionName) {
    case 'Veteran Guardsmen':
      return veteranGuardsmen
    case 'Kommando':
      return kommando
    case 'Brood Coven':
      return broodCoven
    case 'Hive Fleet':
      return hiveFleet
    case 'Space Marine':
      return spaceMarine
    case 'Grey Knight':
      return greyKnights
    case 'Imperial Guard':
      return imperialGuard
    case 'Forge World':
      return forgeWorld
    case 'Ecclesiarchy':
      return ecclesiarchy
    case 'Talons of the Emperor':
      return talonsOfTheEmporer
    case 'Traitor Space Marine':
      return traitorSpaceMarine
    case 'Death Guard':
      return deathGuard
    case 'Thousand Sons':
      return thousandSons
    case 'Hunter Cadre':
      return hunterCadre
    case 'Hunter Clade':
      return hunterClade
    case 'Cadre Mercenary':
      return cadreMercenary
    case 'Greenskin':
      return greenskin
    case 'Troupe':
      return troupe
    case 'Craftworld':
      return craftworld
    case 'Commorrite':
      return commorite
    default:
      return null
  }
}

export default getFactionSpecificData
