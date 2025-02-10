// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/page.tsx
import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/");
}
