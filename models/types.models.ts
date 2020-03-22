export interface FeaturesType {
    title: string,
    icon: JSX.Element,
    text: string
};

export interface FeatureListProps {
    features: FeaturesType[],
};

export interface SectionType{
    title:string,
    url:string
}

export interface HeroHeaderType {
    title: string,
    description: string,
    image: string,
    imgText: string,
    linkText: string
}

export interface NavbarProps {
    title: string,
    sections: SectionType[]
};