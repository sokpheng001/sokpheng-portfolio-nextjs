import { useEffect } from "react";
import { useRouter } from "next/router";

const PageComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!confirm("Are you sure you want to leave this page?")) {
        router.events.emit("routeChangeError");
        throw "Route change aborted.";
      }
    };

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Modern browsers ignore the message, but setting it is still required.
    };

    // Add listeners
    router.events.on("routeChangeStart", handleRouteChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup on unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);

  return <div>Your Page Content</div>;
};

export default PageComponent;
