export interface UserMenuItem{
    name: string;
    icon: string;
    router?: string;
    action?: () => void;
}