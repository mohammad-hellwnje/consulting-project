export interface HomeHeroProps {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    imageSrc: string;
    Buttons?: {
        label: string;
        iconSrc: string;
    }[];
}
