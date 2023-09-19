interface IEndNote {
  role?: string;
  team?: string;
  company?: string;
}

export const startNote = ({
  company,
  isRecruiter = false,
}: {
  company?: string;
  isRecruiter?: boolean;
}) => {
  if (company) {
    return `Your commitment to finding the right fit for ${company} speaks volumes, and I'm grateful to be part of this process.`;
  }

  if (isRecruiter) {
    return `Your commitment to finding the right fit for your client speaks volumes, and I'm grateful to be part of this process.`;
  }

  return `Your commitment to finding the right fit for your company speaks volumes, and I'm delighted that you're contemplating me for a role.`;
};

export const endNote = ({ role, team, company }: IEndNote) => {
  if (team && role) {
    return `Ready to delve deeper into how I can contribute to the ${team} team as their new ${role}?`;
  }

  if (team) {
    // TODO: check if the word "team" exists in the phrase and sanitize it
    return `Interested in discussing potential opportunities with the ${team} team?`;
  }

  if (role && company) {
    return `Ready to further explore my fit for the ${role} role at ${company}?`;
  }

  if (role) {
    return `Ready to further explore my fit for the ${role} role?`;
  }

  return "Interested in discussing potential opportunities?";
};
