
export interface Job {
    _id?: string;
    name: string;
    location?: string;
    contactMan?: string;
    phoneNumber?: string;
    jobDescription?: string;
    companyDescription?: string;
    skills?: string[];
    experienceNeeded?: string;
    remarks?: string[];
    stayHome?: string;
    questions?: string;
    outSourcing?: string;
    jobBoard?: string;
    rolePercentage?: number;
    days?: object[];
    salary?: string;
}
