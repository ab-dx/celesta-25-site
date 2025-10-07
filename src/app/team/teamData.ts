// team/teamData.ts

// Define a TypeScript interface for team members and groups for type safety.
export interface TeamMember {
    id: string;
    parentId: string | null;
    name: string;
    title: string;
    image?: string;
    linkedin?: string;
    x?: string;
}

// The root node's `parentId` must be `null`.
export const teamData: TeamMember[] = [
    { id: "event-head", name: "Event Head", title: "Event Head", parentId: null },
    { id: "a", name: "A", title: "Event Head Member", parentId: "event-head", image: "/team-images/Bhumi.jpg", linkedin: "https://in.linkedin.com/in/parv-agarwal-09b042215", x: "#" },
    { id: "b", name: "B", title: "Event Head Member", parentId: "event-head", image: "/team-images/Bhumi.jpg", linkedin: "https://in.linkedin.com/in/parv-agarwal-09b042215", x: "#" },
    { id: "fest-convenors", name: "Fest Convenors", title: "Fest Convenor Group", parentId: "event-head" },
    { id: "x", name: "X", title: "Fest Convenor", parentId: "fest-convenors", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "y", name: "Y", title: "Fest Convenor", parentId: "fest-convenors", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "grp1", name: "Group 1", title: "Committee 1", parentId: "fest-convenors" },
    { id: "grp1-coord", name: "Coordinators", title: "Group 1 Coordinators", parentId: "grp1" },
    { id: "grp1-subcoord", name: "Sub-Coordinators", title: "Group 1 Sub-Coordinators", parentId: "grp1" },
    { id: "coord1", name: "Coord1", title: "Coordinator", parentId: "grp1-coord", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "coord2", name: "Coord2", title: "Coordinator", parentId: "grp1-coord", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "subcoord1", name: "SubCoord1", title: "Sub-Coordinator", parentId: "grp1-subcoord", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "subcoord2", name: "SubCoord2", title: "Sub-Coordinator", parentId: "grp1-subcoord", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" }
];