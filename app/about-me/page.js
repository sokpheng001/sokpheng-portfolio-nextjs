'use client'
import { RevealLinks } from "@/components/TextComponent";

export default function Page() {
  return (
    <main className="p-10 grid gap-4">
      <RevealLinks/>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </p>
    </main>
  );
}
