interface BetaWelcomeEmailData {
  email: string;
  domain: string;
}

export function generateBetaWelcomeEmail({
  email,
  domain,
}: BetaWelcomeEmailData) {
  const domainName = domain.replace(/^https?:\/\//, "").replace(/^www\./, "");
  // Images load from the live site so they work in every inbox, including
  // emails sent from preview deployments whose URLs expire.
  const assets = "https://vinovibes.ai";

  return {
    from: `Vino Vibes AI <noreply@${domainName}>`,
    to: [email],
    subject: "Welcome to the Vino Vibes AI Beta",
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background-color: #7c3aed; background-image: linear-gradient(135deg, #7c3aed, #a21caf); color: white; border-radius: 16px; overflow: hidden;">
        <div style="padding: 40px 30px; text-align: center;">

          <!-- SIP Owl Logo -->
          <div style="margin-bottom: 30px;">
            <img src="${assets}/sip-owl.png" alt="SIP the Owl" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2);" />
          </div>

          <h1 style="font-size: 2.5rem; margin-bottom: 20px; color: #000000; font-weight: bold; line-height: 1.2;">
            Welcome to Vino Vibes AI
          </h1>

          <p style="font-size: 1.2rem; margin-bottom: 30px; color: #faf5ff; line-height: 1.5;">
            Thanks for joining our beta list. You're now part of an exclusive group who will get first access to Vino Vibes AI.
          </p>

          <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 25px; margin: 30px 0; text-align: left;">
            <h2 style="color: #ffffff; margin-bottom: 15px; text-align: center; font-weight: 600;">What is Vino Vibes AI?</h2>
            <p style="color: #f3e8ff; line-height: 1.6; text-align: center;">
              <strong>V</strong>ino <strong>V</strong>ibes <strong>A</strong>I - Your AI wine expert that gives you confidence to choose the perfect wine for any occasion.
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 25px; margin: 30px 0;">
            <h3 style="color: #e879f9; margin-bottom: 15px; font-size: 1.1rem; font-weight: 600;">What happens next?</h3>
            <ul style="color: #f3e8ff; text-align: left; line-height: 1.8; padding-left: 20px;">
              <li>We're opening invites soon, so you can find the best wine wherever you are</li>
              <li>You'll receive exclusive updates about our progress</li>
              <li>Get early access before the public launch</li>
              <li>Receive wine pairing tips and insights from our AI sommelier</li>
            </ul>
          </div>

          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; font-size: 0.9rem; color: #e879f9; margin-top: 30px;">
            Keep an eye on your inbox for exclusive updates and early access notifications.
          </div>

          <!-- Footer: Sip the Owl beside the tagline. A table keeps them side by side in every mail client. -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 30px auto 0; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <tr>
              <td style="padding: 20px 12px 0 0; vertical-align: middle;">
                <img src="${assets}/sip-inverted-no-background.png" alt="Sip the Owl" width="44" height="44" style="display: block; width: 44px; height: 44px; border: 0;" />
              </td>
              <td style="padding-top: 20px; vertical-align: middle; text-align: left;">
                <div style="color: #ffffff; font-size: 1rem; font-weight: 700; line-height: 1.3;">The wine list, simplified.</div>
                <div style="color: #e9d5ff; font-size: 0.8rem; line-height: 1.4;">Vino Vibes</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `,
  };
}
