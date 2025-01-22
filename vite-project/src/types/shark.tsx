export interface SharkImage {
        src: string,
        alt: string
    
}

export interface Shark {
    id: string,
    title: string,
    image: SharkImage,
    lat: number,
    lon: number,
}
