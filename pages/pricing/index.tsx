import Link from "next/link"
import MainLayout from "../../components/layouts/MainLayout"
import DarkLayout from "../../components/layouts/DarkLayout"

export default function PricingPage() {
  return (
    <>
      <h1>Estamos en Pricing</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  )
}

PricingPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
