import { SignUp } from "@clerk/nextjs";
export default function Page(){return <main className="auth-center"><SignUp routing="path" path="/sign-up" signInUrl="/sign-in" /></main>}
