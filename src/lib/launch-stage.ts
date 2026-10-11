export type LaunchStage = "waitlist" | "testflight" | "appstore";

export interface LaunchCopy {
  stage: LaunchStage;
  label: string;
  short: string;
  note: string;
  showForm: boolean;
  storeUrl: string | null;
}

const COPY: Record<LaunchStage, Omit<LaunchCopy, "stage" | "showForm" | "storeUrl">> = {
  waitlist: {
    label: "Get early access",
    short: "Get early access",
    note: "We'll email you when your invite is ready.",
  },
  testflight: {
    label: "Get the beta invite",
    short: "Join the beta",
    note: "We'll email you when your invite is ready.",
  },
  appstore: {
    label: "Download for iPhone",
    short: "Download",
    note: "Free to try on iPhone.",
  },
};

function readStage(): LaunchStage {
  const raw = process.env.NEXT_PUBLIC_LAUNCH_STAGE;
  if (raw === "testflight" || raw === "appstore") return raw;
  return "waitlist";
}

// The App Store stage needs a URL to link to; without one, fall back to the waitlist.
export function getLaunchCopy(): LaunchCopy {
  let stage = readStage();
  const storeUrl = process.env.NEXT_PUBLIC_APP_STORE_URL || null;
  if (stage === "appstore" && !storeUrl) stage = "waitlist";

  return {
    stage,
    ...COPY[stage],
    showForm: stage !== "appstore",
    storeUrl: stage === "appstore" ? storeUrl : null,
  };
}

export const links = {
  instagram: "https://instagram.com/siptheowl",
  feedback: "https://forms.gle/3uyzDNNS2qc7GnWG6",
  support: "https://venmo.com/u/Aaron-Feingold",
};
