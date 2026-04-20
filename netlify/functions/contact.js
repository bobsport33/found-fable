import { Resend } from "resend";

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: "Method Not Allowed" })
		};
	}

	try {
		const { name, email, phone, message, karaoke } = JSON.parse(event.body);

		if (!name || !email || !message) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: "Missing required fields" })
			};
		}

		const result = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>", // replace later with your domain
			to: [
				"bob@foundfablecreative.com",
				"anastasia@foundfablecreative.com"
			],
			subject: `New Contact Form Message from ${name}`,
			replyTo: email,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Karaoke Song:</strong> ${karaoke || "N/A"}</p>
        <hr />
        <p>${message}</p>
      `
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, result })
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: error.message })
		};
	}
};
