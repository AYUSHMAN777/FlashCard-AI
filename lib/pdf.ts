import pdfParse from "pdf-parse";

export async function extractTextFromPDF(buffer: Buffer) {
  try {
    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    console.error("PDF parsing error:", error);
    throw new Error("Failed to extract PDF text");
  }
}