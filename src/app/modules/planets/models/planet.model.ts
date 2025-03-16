export interface PlanetList {
    planetId : number,
    name: string,
    image: string
    description: string,
    robotsOnSite: number,
    isExplored: boolean,
    isLifeSuitable: boolean,
    statusId: number,
    statusName: string
    captainName: string,
    robots: string[]
}

export interface Planet {
    planetId : number,
    name: string,
    description: string,
    statusId: number,
    statusName: string
}

export interface PlanetStatus {
    statusId: number,
    name: string
}
export interface PlanetEdit {
    description: string,
    statusId: number,
}
