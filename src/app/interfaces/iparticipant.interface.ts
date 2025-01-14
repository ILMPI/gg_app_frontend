export interface IParticipant {
    id: number;
    name: string;
    email: string;
    image?: string;
    state?: string;
    status?: string;
    
}

export interface IParticipantInvitations {
    id?: number;
    name?: string;
    email: string;
    image?: string;
    state?: string;
    status?: string;
}


