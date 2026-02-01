
import { Ticket, WorkCard, Project, CreatorProfile } from '@/types';

// Helper for dates
const daysAgo = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString();
};

// --- DATA SETS ---

type DemoSet = {
    profile: Partial<CreatorProfile>;
    projects: Project[];
    workCards: WorkCard[];
    tickets: Ticket[];
};

const BASE_PROJECT_ID = 'proj-demo-1';
const BASE_WORKSPACE_ID = 'ws-1';

// 1. TECH & CODING
const TECH_SET: DemoSet = {
    profile: {
        niche: "Tech & Coding",
        channelName: "Dev Mastery",
        primaryPlatform: "youtube",
        audienceLevel: "intermediate",
        tone: "educational",
        primaryGoal: "growth",
        formats: ["Tutorial", "Screen Record"]
    },
    projects: [
        {
            id: BASE_PROJECT_ID,
            workspaceId: BASE_WORKSPACE_ID,
            name: "Next.js 15 Full Course",
            type: "YouTube",
            status: "active",
            createdAt: daysAgo(5),
            updatedAt: daysAgo(1)
        }
    ],
    workCards: [
        // Scripting Bucket
        {
            id: 'card-tech-script-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: BASE_PROJECT_ID,
            serviceCategory: 'Video',
            serviceType: 'Script Writing',
            title: 'Script - Next.js 15 Deep Dive',
            status: 'scripting',
            revisionsAllowed: 1,
            creditsUsed: 10,
            inputs: { topic: 'Server Actions' },
            createdAt: daysAgo(4),
            updatedAt: daysAgo(2),
            aiSummary: 'Outline approved. Generating draft section 2.'
        },
        // Filming Bucket
        {
            id: 'card-tech-film-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: BASE_PROJECT_ID,
            serviceCategory: 'Video',
            serviceType: 'Filming Guidance',
            title: 'Shoot - Intro B-Roll',
            status: 'filming',
            revisionsAllowed: 0,
            creditsUsed: 5,
            inputs: { shotList: ['Desk setup', 'Typing'] },
            createdAt: daysAgo(3),
            updatedAt: daysAgo(1),
            aiSummary: 'Shot list ready for upload.'
        },
        // Editing Bucket
        {
            id: 'card-tech-edit-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: BASE_PROJECT_ID,
            serviceCategory: 'Video',
            serviceType: 'Video Edit',
            title: 'Edit - Part 1: Installation',
            status: 'editing',
            revisionsAllowed: 2,
            creditsUsed: 20,
            inputs: { style: 'Fast paced', assets: 'Drive Link' },
            createdAt: daysAgo(2),
            updatedAt: daysAgo(0),
            aiSummary: 'Rough cut v1 uploaded to Frame.io.'
        },
        // Distribution Bucket
        {
            id: 'card-tech-dist-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: BASE_PROJECT_ID,
            serviceCategory: 'Video',
            serviceType: 'Distribution Optimization',
            title: 'SEO - Title & Description',
            status: 'distribution',
            revisionsAllowed: 1,
            creditsUsed: 5,
            inputs: { keywords: ['Next.js 15', 'React'] },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            aiSummary: 'Generated 3 title variations with high CTR potential.'
        }
    ],
    tickets: [
        {
            id: 'tick-1',
            workspaceId: BASE_WORKSPACE_ID,
            title: 'Code Snippet Font Size',
            type: 'revision',
            status: 'open',
            priority: 'normal',
            createdAt: daysAgo(1),
            updatedAt: daysAgo(1),
            messages: [{ id: 'm1', senderId: 'user', senderType: 'user', text: 'Can we make the VS Code font 20% larger in the mobile edit?', timestamp: daysAgo(1) }]
        }
    ]
};

// 2. LIFESTYLE & VLOG
const LIFESTYLE_SET: DemoSet = {
    profile: {
        niche: "Lifestyle & Vlog",
        channelName: "Daily Sarah",
        primaryPlatform: "instagram",
        audienceLevel: "beginner",
        tone: "inspirational",
        primaryGoal: "brand",
        formats: ["Vlog", "Cinematic"]
    },
    projects: [
        {
            id: 'proj-life-1',
            workspaceId: BASE_WORKSPACE_ID,
            name: "NYC Weekend Vlog",
            type: "YouTube",
            status: "active",
            createdAt: daysAgo(3),
            updatedAt: daysAgo(0)
        },
        {
            id: 'proj-life-2',
            workspaceId: BASE_WORKSPACE_ID,
            name: "Summer Vibes Reels",
            type: "Social Media",
            status: "active",
            createdAt: daysAgo(2),
            updatedAt: daysAgo(1)
        },
        {
            id: 'proj-life-3',
            workspaceId: BASE_WORKSPACE_ID,
            name: "Q3 Brand Strategy",
            type: "Strategy",
            status: "planning",
            createdAt: daysAgo(5),
            updatedAt: daysAgo(2)
        },
        {
            id: 'proj-life-4',
            workspaceId: BASE_WORKSPACE_ID,
            name: "Merch Launch Ads",
            type: "Paid Media",
            status: "active",
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0)
        }
    ],
    workCards: [
        // Project 1: YouTube
        {
            id: 'card-life-1-script',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-1',
            serviceCategory: 'Video',
            serviceType: 'Script Strategy',
            title: 'Story Arc - NYC Trip',
            status: 'scripting',
            revisionsAllowed: 1,
            creditsUsed: 10,
            inputs: { theme: 'Urban Exploration' },
            createdAt: daysAgo(4),
            updatedAt: daysAgo(3),
            aiSummary: 'Narrative arc proposed: Departure -> Arrival -> Conflict -> Resolution.'
        },
        {
            id: 'card-life-1-film',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-1',
            serviceCategory: 'Video',
            serviceType: 'Filming Guidance',
            title: 'Shoot - City Shots',
            status: 'filming',
            revisionsAllowed: 0,
            creditsUsed: 5,
            inputs: { location: 'SoHo' },
            createdAt: daysAgo(3),
            updatedAt: daysAgo(2),
            aiSummary: 'Shot list checked off.'
        },

        // Project 2: Social Media
        {
            id: 'card-life-2-script',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-2',
            serviceCategory: 'Social Media',
            serviceType: 'Viral Hook Writing',
            title: 'Hooks - Reel Bundle',
            status: 'scripting',
            revisionsAllowed: 2,
            creditsUsed: 6,
            inputs: { topic: 'Summer Outfits' },
            createdAt: daysAgo(2),
            updatedAt: daysAgo(1),
            aiSummary: 'Generated 5 hook variations for rapid testing.'
        },
        {
            id: 'card-life-2-dist',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-2',
            serviceCategory: 'Social Media',
            serviceType: 'Post Scheduling',
            title: 'Schedule - IG Carousel',
            status: 'distribution',
            revisionsAllowed: 0,
            creditsUsed: 2,
            inputs: { platform: 'Instagram' },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            aiSummary: 'Posted to buffer.'
        },

        // Project 3: Strategy
        {
            id: 'card-life-3-audit',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-3',
            serviceCategory: 'Strategy',
            serviceType: 'Channel Audit',
            title: 'Audit - Current Performance',
            status: 'scripting', // Strategy often starts in research/scripting phase visually
            revisionsAllowed: 0,
            creditsUsed: 50,
            inputs: { focus: 'Retention' },
            createdAt: daysAgo(5),
            updatedAt: daysAgo(4),
            aiSummary: 'Analyzing last 10 videos against benchmarks.'
        },

        // Project 4: Paid Media
        {
            id: 'card-life-4-create',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-life-4',
            serviceCategory: 'Paid Ads',
            serviceType: 'UGC Creative',
            title: 'Ad - Unboxing Video',
            status: 'editing',
            revisionsAllowed: 2,
            creditsUsed: 30,
            inputs: { product: 'Hoodie' },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            aiSummary: 'First cut of UGC ad ready for review.'
        }
    ],
    tickets: [
        {
            id: 'tick-life-1',
            workspaceId: BASE_WORKSPACE_ID,
            title: 'Music Licensing Check',
            type: 'clarification',
            status: 'resolved',
            priority: 'high',
            createdAt: daysAgo(2),
            updatedAt: daysAgo(1),
            messages: [{ id: 'm1', senderId: 'agent', senderType: 'agent', text: 'Confirmed the jazz track is cleared for monetization.', timestamp: daysAgo(1) }]
        }
    ]
};

// 3. FINANCE
const FINANCE_SET: DemoSet = {
    profile: {
        niche: "Finance & Business",
        channelName: "Market Movers",
        primaryPlatform: "youtube",
        audienceLevel: "expert",
        tone: "analytical",
        primaryGoal: "leads",
        formats: ["Talking Head", "Data Vis"]
    },
    projects: [
        {
            id: 'proj-fin-1',
            workspaceId: BASE_WORKSPACE_ID,
            name: "Q1 Market Outlook",
            type: "YouTube",
            status: "active",
            createdAt: daysAgo(4),
            updatedAt: daysAgo(2)
        }
    ],
    workCards: [
        {
            id: 'card-fin-script-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-fin-1',
            serviceCategory: 'Video',
            serviceType: 'Script Writing',
            title: 'Script - Q1 Market Outlook',
            status: 'scripting',
            revisionsAllowed: 2,
            creditsUsed: 10,
            inputs: { topic: 'Interest Rates' },
            createdAt: daysAgo(4),
            updatedAt: daysAgo(2),
            aiSummary: 'Draft 1 ready. Includes data from Fed report.'
        },
        {
            id: 'card-fin-film-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-fin-1',
            serviceCategory: 'Video',
            serviceType: 'Teleprompter Setup',
            title: 'Shoot - Studio A',
            status: 'filming',
            revisionsAllowed: 0,
            creditsUsed: 0,
            inputs: {},
            createdAt: daysAgo(2),
            updatedAt: daysAgo(2),
            aiSummary: 'Script loaded to prompter.'
        },
        {
            id: 'card-fin-edit-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-fin-1',
            serviceCategory: 'Video',
            serviceType: 'Video Edit',
            title: 'Edit - Market Data Vis',
            status: 'editing',
            revisionsAllowed: 1,
            creditsUsed: 15,
            inputs: { style: 'Data Heavy' },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            aiSummary: 'Animating charts.'
        },
        {
            id: 'card-fin-dist-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-fin-1',
            serviceCategory: 'Video',
            serviceType: 'LinkedIn Repurpose',
            title: 'LinkedIn - Key Takeaways',
            status: 'distribution',
            revisionsAllowed: 1,
            creditsUsed: 5,
            inputs: { tone: 'Professional' },
            createdAt: daysAgo(0),
            updatedAt: daysAgo(0),
            aiSummary: 'Draft text generated.'
        }
    ],
    tickets: []
};

// 4. EDUCATION
const EDUCATION_SET: DemoSet = {
    profile: {
        niche: "Education",
        channelName: "History Explained",
        primaryPlatform: "youtube",
        audienceLevel: "beginner",
        tone: "educational",
        primaryGoal: "growth",
        formats: ["Documentary", "Voiceover"]
    },
    projects: [
        {
            id: 'proj-edu-1',
            workspaceId: BASE_WORKSPACE_ID,
            name: "The Industrial Revolution",
            type: "YouTube",
            status: "active",
            createdAt: daysAgo(10),
            updatedAt: daysAgo(1)
        }
    ],
    workCards: [
        {
            id: 'card-edu-script-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-edu-1',
            serviceCategory: 'Video',
            serviceType: 'Script Research',
            title: 'Research - Fact Check',
            status: 'scripting',
            revisionsAllowed: 1,
            creditsUsed: 10,
            inputs: { topic: 'Coal Mining' },
            createdAt: daysAgo(6),
            updatedAt: daysAgo(5),
            aiSummary: 'Sources compiled.'
        },
        {
            id: 'card-edu-film-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-edu-1',
            serviceCategory: 'Video',
            serviceType: 'Voiceover Recording',
            title: 'Record - Section 1',
            status: 'filming',
            revisionsAllowed: 0,
            creditsUsed: 5,
            inputs: { mic: 'Shure SM7B' },
            createdAt: daysAgo(5),
            updatedAt: daysAgo(5),
            aiSummary: 'Script ready for read.'
        },
        {
            id: 'card-edu-edit-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-edu-1',
            serviceCategory: 'Video',
            serviceType: 'Video Edit',
            title: 'Edit - Industrial Revolution',
            status: 'editing',
            revisionsAllowed: 2,
            creditsUsed: 25,
            inputs: { style: 'Documentary' },
            createdAt: daysAgo(5),
            updatedAt: daysAgo(1),
            aiSummary: 'Animating map sequences.'
        },
        {
            id: 'card-edu-dist-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-edu-1',
            serviceCategory: 'Video',
            serviceType: 'Blog Post',
            title: 'Blog - The Industrial Revolution',
            status: 'distribution',
            revisionsAllowed: 1,
            creditsUsed: 5,
            inputs: { tone: 'Educational' },
            createdAt: daysAgo(0),
            updatedAt: daysAgo(0),
            aiSummary: 'Draft text generated.'
        }
    ],
    tickets: []
};

// 5. ENTERTAINMENT
const ENTERTAINMENT_SET: DemoSet = {
    profile: {
        niche: "Entertainment",
        channelName: "Laugh Lounge",
        primaryPlatform: "instagram", // Changed from tiktok to fit type
        audienceLevel: "beginner",
        tone: "comedic",
        primaryGoal: "growth",
        formats: ["Skit", "Reaction"]
    },
    projects: [
        {
            id: 'proj-ent-1',
            workspaceId: BASE_WORKSPACE_ID,
            name: "Viral Skit Batch 1",
            type: "Social Media",
            status: "active",
            createdAt: daysAgo(2),
            updatedAt: daysAgo(0)
        }
    ],
    workCards: [
        {
            id: 'card-ent-script-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-ent-1',
            serviceCategory: 'Video',
            serviceType: 'Skit Writing',
            title: 'Script - "POV: Your Boss"',
            status: 'scripting',
            revisionsAllowed: 1,
            creditsUsed: 5,
            inputs: { tone: 'Funny' },
            createdAt: daysAgo(2),
            updatedAt: daysAgo(1),
            aiSummary: 'Drafting punchlines.'
        },
        {
            id: 'card-ent-film-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-ent-1',
            serviceCategory: 'Video',
            serviceType: 'Filming Guidance',
            title: 'Shoot - Costume Change',
            status: 'filming',
            revisionsAllowed: 0,
            creditsUsed: 5,
            inputs: { props: ['Wig', 'Glasses'] },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(1),
            aiSummary: 'Scene blocked.'
        },
        {
            id: 'card-ent-edit-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-ent-1',
            serviceCategory: 'Video',
            serviceType: 'Video Edit',
            title: 'Edit - Rough Cut',
            status: 'editing',
            revisionsAllowed: 2,
            creditsUsed: 15,
            inputs: { style: 'Fast' },
            createdAt: daysAgo(1),
            updatedAt: daysAgo(0),
            aiSummary: 'Added sound effects.'
        },
        {
            id: 'card-ent-dist-1',
            workspaceId: BASE_WORKSPACE_ID,
            projectId: 'proj-ent-1',
            serviceCategory: 'Video',
            serviceType: 'Hashtag Strategy',
            title: 'Trend Jacking - Tags',
            status: 'distribution',
            revisionsAllowed: 0,
            creditsUsed: 2,
            inputs: { platform: 'TikTok' },
            createdAt: daysAgo(0),
            updatedAt: daysAgo(0),
            aiSummary: 'Identified 3 trending sounds.'
        }
    ],
    tickets: []
};


export const DEMO_SETS: Record<string, DemoSet> = {
    "Tech & Coding": TECH_SET,
    "Lifestyle & Vlog": LIFESTYLE_SET,
    "Finance & Business": FINANCE_SET,
    "Education": EDUCATION_SET,
    "Entertainment": ENTERTAINMENT_SET
};

export const getDemoDataForNiche = (niche: string): DemoSet => {
    return DEMO_SETS[niche] || TECH_SET;
};
