"use server"

export interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  role: string
  organization?: string
  terms: boolean
}

export async function signupAction(formData: FormData) {
  // Simuler en kort forsinkelse
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Hent data fra formularen
  const data: SignupFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    role: formData.get("role") as string,
    organization: (formData.get("organization") as string) || undefined,
    terms: formData.get("terms") === "on",
  }

  // Valider data
  if (!data.firstName || !data.lastName || !data.email || !data.role || !data.terms) {
    return {
      success: false,
      message: "Alle påkrævede felter skal udfyldes, og vilkår skal accepteres.",
    }
  }

  // Email validering
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Indtast venligst en gyldig email adresse.",
    }
  }

  try {
    // Her ville du normalt gemme til database
    console.log("Ny tilmelding:", data)

    // Simuler API kald til nyhedsbrev service (f.eks. Mailchimp, ConvertKit)
    // await addToNewsletter(data.email, data.firstName, data.lastName, data.role)

    // Simuler database gem
    // await saveUserToDatabase(data)

    return {
      success: true,
      message: `Tak ${data.firstName}! Du er nu tilmeldt vores nyhedsbrev og vil få besked, når platformen lanceres.`,
    }
  } catch (error) {
    console.error("Fejl ved tilmelding:", error)
    return {
      success: false,
      message: "Der opstod en fejl. Prøv venligst igen senere.",
    }
  }
}
