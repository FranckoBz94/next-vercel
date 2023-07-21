import Link from "next/link"
import MainLayout from "../components/layouts/MainLayout"
import DarkLayout from "../components/layouts/DarkLayout"

export default function About() {
  return (
    <>
      <h1>Estamos en About</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>{" "}
    </>
  )
}

About.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
