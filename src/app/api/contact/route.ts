import { NextRequest } from "next/server";
import { enquiryService } from "@/services";
import { contactEnquirySchema, formatZodErrors } from "@/validators";
import { rateLimit } from "@/utils/rate-limit";
import { sendEnquiryNotification } from "@/lib/email";
import {
  successResponse,
  validationErrorResponse,
  errorResponse,
  serverErrorResponse,
} from "@/utils/api-response";
import { handleError } from "@/utils/errors";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const rateCheck = rateLimit(`contact:${ip}`, 5, 60000);
    if (!rateCheck.allowed) {
      return errorResponse("Too many requests. Please try again later.", 429);
    }

    const body = await request.json();
    const parsed = contactEnquirySchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(formatZodErrors(parsed.error));
    }

    const enquiry = await enquiryService.createEnquiry(parsed.data);

    try {
      await sendEnquiryNotification(parsed.data);
    } catch (error) {
      console.error("Failed to send notification email:", error);
      return errorResponse(
        "Your message was received, but the email notification failed to send. Our team has been alerted.",
        502
      );
    }

    return successResponse(enquiry, "Enquiry submitted successfully", 201);
  } catch (error) {
    const { message } = handleError(error);
    return serverErrorResponse(message);
  }
}
