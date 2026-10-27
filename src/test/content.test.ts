import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { emails, profile, socials } from "@/data/content";

// Contact details and the résumé file are facts Arnold supplied; keep them exact.
describe("Site content", () => {
  it("lists both email addresses Arnold gave", () => {
    expect(emails.map((e) => e.address)).toEqual([
      "mugishaarnold12@gmail.com",
      "a.mugisha5@alustudent.com",
    ]);
  });

  it("links the real LinkedIn profile", () => {
    expect(socials.map((s) => s.href)).toContain(
      "https://www.linkedin.com/in/mugisha-arnold/",
    );
  });

  it("serves the uploaded résumé PDF, not a placeholder", () => {
    expect(profile.resumePdf).toMatch(/^\/__l5e\/assets-v1\/.+\.pdf$/);
    const pointer = resolve(process.cwd(), "src/assets/resume.pdf.asset.json");
    expect(existsSync(pointer)).toBe(true);
    const asset = JSON.parse(readFileSync(pointer, "utf8")) as {
      content_type: string;
      original_filename: string;
    };
    expect(asset.content_type).toBe("application/pdf");
    expect(asset.original_filename).toBe("mugisha-alnaud-resume.pdf");
  });
});
