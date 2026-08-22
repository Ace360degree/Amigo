const API_URL = import.meta.env.VITE_API_URL || "/api/submit.php";

export interface FormSubmissionPayload {
  action?: "counsellor" | "eligibility" | "seminar" | "contact" | "franchise";
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  branch?: string;
  age?: string;
  gender?: string;
  qualification?: string;
  form_location?: string;
  [key: string]: any;
}

export async function submitForm(
  payload: FormSubmissionPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    const bodyParams = new URLSearchParams();

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (typeof value === "object") {
          bodyParams.append(key, JSON.stringify(value));
        } else {
          bodyParams.append(key, String(value));
        }
      }
    });

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: bodyParams.toString(),
    });

    const data = await res.json();
    if (res.ok && data.status === "success") {
      return { success: true };
    }
    return { success: false, message: data.message || "Submission failed" };
  } catch (err) {
    console.error("API submission error:", err);
    return { success: false, message: "Network error. Please check your connection." };
  }
}
