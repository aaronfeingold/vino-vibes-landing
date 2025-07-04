interface BetaWelcomeEmailData {
  email: string;
  domain: string;
}

export function generateBetaWelcomeEmail({
  email,
  domain,
}: BetaWelcomeEmailData) {
  const domainName = domain.replace(/^https?:\/\//, "").replace(/^www\./, "");

  return {
    from: `Vino Vibes AI <noreply@${domainName}>`,
    to: [email],
    subject: "Welcome to the Vino Vibes AI Beta",
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #7c3aed, #a21caf); color: white; border-radius: 16px; overflow: hidden;">
        <div style="padding: 40px 30px; text-align: center;">

          <!-- SIP Owl Logo -->
          <div style="margin-bottom: 30px;">
            <img src="${domain}/sip-owl.png" alt="SIP the Owl" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2);" />
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
              <li>We're launching soon in New Orleans where culinary excellence meets cutting-edge AI</li>
              <li>You'll receive exclusive updates about our progress</li>
              <li>Get early access before the public launch</li>
              <li>Receive wine pairing tips and insights from our AI sommelier</li>
            </ul>
          </div>

          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 20px; font-size: 0.9rem; color: #e879f9; margin-top: 30px;">
            Keep an eye on your inbox for exclusive updates and early access notifications.
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: #d1d5db; font-size: 0.8rem;">
            Vino Vibes AI - Democratizing wine knowledge and selection<br>
          </div>
        </div>
      </div>
    `,
  };
}
