type HCaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export const POST = async (request: Request) => {
  const { token } = await request.json();

  if (!token) {
    return Response.json({ error: "Missing captcha token" }, { status: 400 });
  }

  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) {
    return Response.json({ error: "Missing HCAPTCHA_SECRET_KEY" }, { status: 500 });
  }

  const payload = new URLSearchParams();
  payload.set("secret", secret);
  payload.set("response", token);

  const verifyResponse = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  if (!verifyResponse.ok) {
    return Response.json({ error: "Captcha verification failed" }, { status: 502 });
  }

  const data = (await verifyResponse.json()) as HCaptchaVerifyResponse;
  if (!data.success) {
    return Response.json(
      { error: "Invalid captcha", "error-codes": data["error-codes"] ?? [] },
      { status: 400 }
    );
  }

  return Response.json({ success: true });
};
