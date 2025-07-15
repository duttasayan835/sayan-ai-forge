import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, subject });

    // Send email to you (the portfolio owner)
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["duttasayan835@gmail.com"], // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #007acc; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #666;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email, // Allow you to reply directly to the sender
    });

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Sayan Dutta <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #666;">
            Hi ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #666;">
            Thank you for contacting me through my portfolio website. I have received your message about "${subject}" and will get back to you as soon as possible.
          </p>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #555;"><strong>Your message:</strong></p>
            <p style="color: #666; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #666;">
            I typically respond within 24-48 hours. In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.
          </p>
          
          <div style="margin-top: 30px;">
            <p style="color: #333; margin-bottom: 10px;">Best regards,</p>
            <p style="color: #007acc; font-weight: bold; margin: 0;">Sayan Dutta</p>
            <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">AI/LLM Builder & CSE Student</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <a href="https://github.com/duttasayan835" style="color: #007acc; text-decoration: none; margin: 0 10px;">GitHub</a>
            <a href="https://www.linkedin.com/in/dutta-sayan835/" style="color: #007acc; text-decoration: none; margin: 0 10px;">LinkedIn</a>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);