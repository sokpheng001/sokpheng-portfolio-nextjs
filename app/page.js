"use client";

import { ContactComponent } from "@/components/ContactComponent";
import { Example } from "@/components/DesignComponent";
import { HoverImageLinks } from "@/components/LinkComponent";
import Welcome from "@/components/WelcomeComponent";

const PageComponent = () => {
  return (
    <main className="grid gap-4">
      <Welcome/>

      {/* social media */}

      {/*  */}
      <HoverImageLinks />
      <Example />
      {/*  */}
      <ContactComponent />
    </main>
  );
};

export default PageComponent;
