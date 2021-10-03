import broodCoven from "./broodCoven"
import hiveFleet from "./hiveFleet"
import kommando from "./kommando"
import veteranGuardsmen from "./veteranGuardsmen"
import spaceMarine from "./spaceMarine"

const getFactionSpecificData = (factionName: string) => {
  switch (factionName) {
    case "Veteran Guardsmen":
      return veteranGuardsmen;
    case "Kommando":
      return kommando;
    case "Brood Coven":
      return broodCoven;
    case "Hive Fleet":
      return hiveFleet;
    case "Space Marine":
      return spaceMarine;
    default:
      return null;
  }
}

export default getFactionSpecificData
