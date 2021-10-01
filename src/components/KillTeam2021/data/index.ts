import veteranGuardsmen from "./veteranGuardsmen"
import kommando from "./kommando"

const getFactionSpecificData = (factionName: string) => {
  switch (factionName) {
    case "Veteran Guardsmen":
      return veteranGuardsmen;
    case "Kommando":
      return kommando;
    default:
      return null;
  }
}

export default getFactionSpecificData
