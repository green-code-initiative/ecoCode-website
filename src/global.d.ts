declare type MemberLinkType = 'linkedin' | 'github';

declare type Member = {
    name: string
    company: string
    profile: string
    links: Partial<Record<MemberLinkType, string>>
}
