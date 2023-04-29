import Layout from "@/components/Layout";
import SignUp from "@/components/SignUp";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Foodie - Sign Up";
  }, []);
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}
