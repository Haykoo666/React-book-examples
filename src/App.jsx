import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Components/suspense/agree-ment";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const MainBlock = lazy(() => import("./Main-block"));

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <Suspense fallback={<ClimbingBoxLoader />}>
      <MainBlock />
    </Suspense>
  );
}
