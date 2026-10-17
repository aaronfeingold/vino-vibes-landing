interface BetaWelcomeEmailData {
  email: string;
  domain: string;
}

// Vino Vibes design system tokens (design/design-system/tokens.json).
// Email clients ignore CSS variables and classes, so values are inlined.
const VV = {
  page: "#0e080e",
  surface: "#1f1520",
  surface2: "#2b1e2c",
  text: "#f7eff5",
  text2: "#c4b3c0",
  text3: "#a897a4",
  accent: "#d8b4fe",
};

const FONT = "Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const FEATURES = [
  {
    title: "Bespoke pairings",
    body: "Sips to lips and a full belly.",
  },
  {
    title: "Palleted experiences",
    body: "Your taste buds matter.",
  },
  {
    title: "Recollections",
    body: "Your memories age like fine wine.",
  },
];

const NEXT = [
  "Order with confidence.",
  "Build global wine knowledge, one new varietal at a time.",
  "Create dining memories.",
];

const SIGN_OFF = "Vino Vibes. The wine list, simplified.";

export function generateBetaWelcomeEmail({
  email,
  domain,
}: BetaWelcomeEmailData) {
  const domainName = domain.replace(/^https?:\/\//, "").replace(/^www\./, "");
  const site = domain.replace(/\/$/, "");

  const features = FEATURES.map(
    (s, i) => `
              <tr>
                <td valign="top" width="36" style="padding:0 0 ${i === FEATURES.length - 1 ? 0 : 20}px 0;font-family:${FONT};font-size:15px;font-weight:700;color:${VV.accent};">0${i + 1}</td>
                <td valign="top" style="padding:0 0 ${i === FEATURES.length - 1 ? 0 : 20}px 0;font-family:${FONT};">
                  <div style="font-size:16px;font-weight:600;color:${VV.text};line-height:1.4;">${s.title}</div>
                  <div style="font-size:14px;color:${VV.text2};line-height:1.6;margin-top:4px;">${s.body}</div>
                </td>
              </tr>`
  ).join("");

  const next = NEXT.map(
    (n) => `
              <tr>
                <td valign="top" width="24" style="padding:0 0 10px 0;font-family:${FONT};font-size:14px;font-weight:700;color:${VV.accent};line-height:1.6;">&#10003;</td>
                <td valign="top" style="padding:0 0 10px 0;font-family:${FONT};font-size:14px;color:${VV.text2};line-height:1.6;">${n}</td>
              </tr>`
  ).join("");

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>You're on the Vino Vibes beta list</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background-color:${VV.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">You're on the list. Here is what is coming.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${VV.page}" style="background-color:${VV.page};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <a href="${site}" style="text-decoration:none;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle"><img src="${site}/email/vino-vibes-logo-96.png" width="36" height="36" alt="" style="display:block;border:0;border-radius:8px;" /></td>
                    <td valign="middle" style="padding-left:10px;font-family:${FONT};font-size:18px;font-weight:700;color:${VV.text};">Vino Vibes</td>
                  </tr>
                </table>
              </a>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="font-family:${FONT};">
              <h1 style="margin:0;font-size:36px;font-weight:800;letter-spacing:-0.02em;line-height:1.1;color:${VV.text};">You're on the list.</h1>
              <p style="margin:16px 0 0 0;font-size:16px;line-height:1.6;color:${VV.text2};">Thanks for joining. Coming soon:</p>
            </td>
          </tr>

          <!-- Coming soon -->
          <tr>
            <td style="padding-top:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${VV.surface}" style="background-color:${VV.surface};border-radius:20px;">
                <tr>
                  <td style="padding:28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${features}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- The right wine -->
          <tr>
            <td style="padding-top:16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${VV.surface}" style="background-color:${VV.surface};border-radius:20px;">
                <tr>
                  <td style="padding:28px 28px 18px 28px;">
                    <div style="font-family:${FONT};font-size:16px;font-weight:600;color:${VV.text};padding-bottom:14px;">The right wine every time.</div>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${next}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding-top:40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${VV.surface2};">
                <tr>
                  <td valign="middle" width="48" style="padding-top:20px;"><img src="${site}/sip-inverted-no-background.png" width="48" height="48" alt="Sip the Owl" style="display:block;border:0;" /></td>
                  <td valign="middle" style="padding-top:20px;padding-left:12px;font-family:${FONT};font-size:13px;line-height:1.6;color:${VV.text3};">
                    ${SIGN_OFF}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    "You're on the list.",
    "",
    "Thanks for joining. Coming soon:",
    "",
    ...FEATURES.map((s, i) => `0${i + 1} ${s.title}. ${s.body}`),
    "",
    "The right wine every time.",
    ...NEXT.map((n) => `- ${n}`),
    "",
    SIGN_OFF,
  ].join("\n");

  return {
    from: `Vino Vibes <noreply@${domainName}>`,
    to: [email],
    subject: "You're on the Vino Vibes beta list",
    html,
    text,
  };
}
