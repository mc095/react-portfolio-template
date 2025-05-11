import React, { useEffect } from "react";

const ResumePage = () => {
  useEffect(() => {
    const resumeUrl = "/resume/ganesh_resume.pdf";

    fetch(resumeUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "ganesh_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Failed to download the file:", error);
      });

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ResumePage;
