"use server";

export async function submitContactForm(formData: FormData) {
  // In a real application, you would connect this to Resend, SendGrid, or nodemailer.
  // For now, we simulate a network delay and return success.
  
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  console.log("New Contact Form Submission:");
  console.log({ firstName, lastName, email, phone, message });

  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { success: true, message: "Thank you! Your message has been received." };
}
